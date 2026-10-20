#!/usr/bin/env python3
"""Serve the PRD studio and forward chat requests to an OpenAI-compatible API."""

import json
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import unquote
from urllib.request import ProxyHandler, Request, build_opener

HOST = "127.0.0.1"
PORT = 8765
ROOT = Path(__file__).resolve().parent
# Ignore HTTP(S)_PROXY. A broken tunnel proxy returns 403 before the model API is reached.
OPENER = build_opener(ProxyHandler({}))


def load_env(path):
    if not path.is_file():
        return
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        name, value = line.split("=", 1)
        name = name.strip()
        value = value.strip()
        if len(value) >= 2 and value[0] == value[-1] and value[0] in "\"'":
            value = value[1:-1]
        if name:
            os.environ[name] = value


load_env(ROOT / ".env")


def model_config():
    base = os.environ.get("MODEL_BASE_URL", "").strip().rstrip("/")
    model = os.environ.get("MODEL_NAME", "").strip()
    key = os.environ.get("MODEL_API_KEY", "").strip()
    return base, model, key


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def is_private_path(self):
        path = unquote(self.path.split("?", 1)[0])
        parts = [part for part in path.split("/") if part]
        return any(part == ".env" or part.startswith(".env") or part.startswith(".git") for part in parts)

    def do_GET(self):
        if self.is_private_path():
            self.send_error(404)
            return
        super().do_GET()

    def do_HEAD(self):
        if self.is_private_path():
            self.send_error(404)
            return
        super().do_HEAD()

    def do_POST(self):
        if self.path != "/api/chat":
            self.send_error(404)
            return
        length = int(self.headers.get("Content-Length", "0"))
        try:
            payload = json.loads(self.rfile.read(length).decode("utf-8"))
        except json.JSONDecodeError:
            self.send_json(400, {"error": "请求格式不正确"})
            return

        base, model, key = model_config()
        messages = payload.get("messages", [])
        if not base.startswith(("http://", "https://")) or not key or not model:
            self.send_json(500, {"error": "请先在项目的 .env 里填写 MODEL_BASE_URL、MODEL_NAME 和 MODEL_API_KEY，然后重启服务"})
            return
        if not isinstance(messages, list) or not messages:
            self.send_json(400, {"error": "缺少对话内容"})
            return

        endpoint = base if base.endswith("/chat/completions") else f"{base}/chat/completions"
        body = json.dumps(
            {"model": model, "messages": messages, "stream": True},
            ensure_ascii=False,
        ).encode("utf-8")
        request = Request(
            endpoint,
            data=body,
            headers={
                "Authorization": f"Bearer {key}",
                "Content-Type": "application/json",
            },
            method="POST",
        )
        try:
            with OPENER.open(request, timeout=120) as response:
                content_type = response.headers.get("Content-Type", "text/event-stream")
                self.send_response(200)
                self.send_header("Content-Type", content_type)
                self.send_header("Cache-Control", "no-cache")
                self.end_headers()
                while True:
                    chunk = response.read(2048)
                    if not chunk:
                        break
                    self.wfile.write(chunk)
                    self.wfile.flush()
        except HTTPError as error:
            detail = error.read().decode("utf-8", "replace")
            self.send_json(error.code, {"error": shorten_error(detail) or "模型接口拒绝了请求"})
        except URLError as error:
            reason = error.reason
            text = getattr(reason, "strerror", None) or str(reason) or "连接失败"
            self.send_json(502, {"error": f"连不上模型接口：{text}"})
        except TimeoutError:
            self.send_json(504, {"error": "模型接口超时"})

    def send_json(self, code, data):
        raw = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)


def shorten_error(detail):
    try:
        parsed = json.loads(detail)
    except json.JSONDecodeError:
        return detail[:500]
    error = parsed.get("error", parsed) if isinstance(parsed, dict) else parsed
    if isinstance(error, dict):
        return str(error.get("message") or error)[:500]
    return str(error)[:500]


if __name__ == "__main__":
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    print(f"PRD studio at http://{HOST}:{PORT}", flush=True)
    server.serve_forever()
