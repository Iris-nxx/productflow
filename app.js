const MODES = {
  brainstorm: {
    label: "头脑风暴",
    skillUrl: "/.cursor/skills/brainstorming/SKILL.md",
    phases: [
      { id: 1, label: "提问" },
      { id: 2, label: "复述" },
      { id: 3, label: "方案" },
    ],
    opening: "如果想跳过提问、直接出方案，说一声就行。\n\n你希望它出现在哪个具体时刻？",
    greeting: "先想清楚，再动手做。",
    titlePlaceholder: "方案标题",
    bodyPlaceholder: "确认之后，方案会写在这里。也可以直接写。",
    inputPlaceholder: "描述你想做的事，或回答上面的问题",
    suggests: [
      { tag: "想法", prompt: "我想做一个给产品经理用的需求工具" },
      { tag: "跳过", prompt: "先别问了，按你的理解直接给方案" },
      { tag: "复述", prompt: "把目前聊清楚的部分复述给我" },
      { tag: "方案", prompt: "写成一份可以交给开发的方案" },
    ],
    instructions: [
      "你是头脑风暴助手。用中文对话，遵循下面的 skill。",
      "先弄清对方真正想要什么、为什么要，再给方案。每次回复只问一个开放问题，不要附带选项清单；对方卡住或说「你帮我想」时，再给一个具体猜测。",
      "第一条有效回复要说明：如果想跳过提问、直接做，说一声即可。",
      "理解清楚一部分后，用大约两百到三百字复述，并问缺了什么或哪里不对。你猜的内容要标明是猜测。",
      "对方明确同意之前，不要输出完整方案。对方说跳过提问时，用一句话说明你替他做的关键选择，然后直接写方案。",
      "回复末尾单独写 <phase>1</phase>、<phase>2</phase> 或 <phase>3</phase>，对应提问、复述、方案。",
      "写出或修改方案时，把完整 Markdown 放进 <doc> 和 </doc>。标签外面只留简短对话。",
    ],
  },
  competitor: {
    label: "竞品调研",
    skillUrl: "/.cursor/skills/pm-competitor-deconstructor/SKILL.md",
    extraUrl: "/.cursor/skills/pm-competitor-deconstructor/references/analysis-framework.md",
    phases: [
      { id: 1, label: "确认" },
      { id: 2, label: "拆解" },
      { id: 3, label: "建议" },
    ],
    opening: "先确认范围，再拆解。至少需要竞品名单、分析目标，以及你自己的产品。\n\n这次想看哪些竞品？先说出 2 到 5 个名字。",
    greeting: "拆完要能决定下一步做什么。",
    titlePlaceholder: "调研标题",
    bodyPlaceholder: "拆解、对比和建议会写在这里。也可以直接写。",
    inputPlaceholder: "写下竞品、目标，或补充链接和笔记",
    suggests: [
      { tag: "名单", prompt: "帮我拆解 Notion、飞书和语雀" },
      { tag: "差异", prompt: "我想找和竞品不一样的切入点" },
      { tag: "四维", prompt: "按策略、功能、体验、增长做对比" },
      { tag: "结论", prompt: "输出可借鉴、不可抄和行动清单" },
    ],
    instructions: [
      "你是竞品调研助手。用中文对话，遵循下面的 skill。",
      "先确认竞品名单、分析目标和用户自己的产品。信息不够时先补问，一次最多五个问题，按必须、建议排序。用户说「你帮我想」时给出假设，并标注 [假设]。",
      "信息足够后，按策略、功能、体验、增长拆每个竞品，再做横向对比，最后给出可借鉴、不可抄、差异化建议和行动清单。缺依据的判断标注 [假设]，关键结论注明信息来源。",
      "材料太少、无法正式拆解时，改输出竞品调研规划，不要编造完整分析。",
      "回复末尾单独写 <phase>1</phase>、<phase>2</phase> 或 <phase>3</phase>，对应确认、拆解、建议。",
      "写出或修改调研报告时，把完整 Markdown 放进 <doc> 和 </doc>。标签外面只留简短对话。对比用 Markdown 表格。",
    ],
  },
  prd: {
    label: "需求撰写",
    skillUrl: "/.cursor/skills/prd/skill1.md",
    phases: [
      { id: 1, label: "需求澄清" },
      { id: 2, label: "范围" },
      { id: 3, label: "需求方案" },
    ],
    opening: "先访谈，再写文档。不会跳过问题，也不会编造你没说过的技术栈。\n\n你想做什么产品或功能？用一两句话说明就行。",
    greeting: "今天要写哪一份需求？",
    titlePlaceholder: "请输入标题",
    bodyPlaceholder: "直接在这里写，或从右侧开始访谈。",
    inputPlaceholder: "发消息，或描述要写的需求",
    suggests: [
      { tag: "需求", prompt: "帮我把一个新功能写成产品需求" },
      { tag: "范围", prompt: "帮我划清这次做什么、不做什么" },
      { tag: "指标", prompt: "帮我把成功标准写成可以验收的数字" },
      { tag: "文档", prompt: "按目前的访谈起草 PRD" },
    ],
    instructions: [
      "你是 PRD 工作室里的产品访谈助手。用中文对话。",
      "严格遵守下面的 skill：先访谈，再划范围，最后起草。至少问清核心问题、成功指标和约束。未提及的技术细节写「待定」，不要编造。",
      "每次只问一个问题。用户明确同意起草之前，不要输出 PRD。",
      "回复末尾单独写 <phase>1</phase>、<phase>2</phase> 或 <phase>3</phase>，对应需求澄清、范围、需求方案。",
      "写出或修改 PRD 时，把完整 Markdown 放进 <doc> 和 </doc>。标签外面只留简短对话，不要把文档再复述一遍。",
    ],
  },
};

const PROJECTS_KEY = "prd-studio-projects";
const LAST_KEY = "prd-studio-last";

const logEl = document.querySelector("#log");
const heroEl = document.querySelector("#hero");
const greetingEl = document.querySelector(".greeting");
const suggestsEl = document.querySelector("#suggests");
const phasesEl = document.querySelector("#phases");
const modeTitleEl = document.querySelector("#mode-title");
const titleEl = document.querySelector("#doc-title");
const bodyEl = document.querySelector("#doc-body");
const statusEl = document.querySelector("#doc-status");
const statusSep = document.querySelector("#status-sep");
const launchSuggestsEl = document.querySelector("#launch-suggests");
const inputEl = document.querySelector("#input");
const sendBtn = document.querySelector("#send");
const formEl = document.querySelector("#composer");
const copyBtn = document.querySelector("#copy");
const downloadBtn = document.querySelector("#download");
const launchEl = document.querySelector("#launch");
const launchForm = document.querySelector("#launch-form");
const launchInput = document.querySelector("#launch-input");
const launchSend = document.querySelector("#launch-send");
const workspaceEl = document.querySelector(".workspace");
const viewSwitchEl = document.querySelector("#view-switch");
const recentEl = document.querySelector("#recent");
const newProjectBtn = document.querySelector("#new-project");

const skills = {};
let projects = loadProjects();
let mode = "prd";
let launchMode = "prd";
let activeId = null;
let state = createSession(mode);
let view = "compose";
let busy = false;
let appliedDoc = null;

function createSession(id) {
  return {
    phase: 1,
    doc: "",
    messages: [{ role: "assistant", text: MODES[id].opening }],
  };
}

function uid() {
  return crypto.randomUUID ? crypto.randomUUID() : `p-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function loadProjects() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PROJECTS_KEY));
    return Array.isArray(parsed) ? parsed.filter((item) => item && MODES[item.mode] && Array.isArray(item.messages)) : [];
  } catch {
    return [];
  }
}

function saveProjects() {
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  if (activeId) localStorage.setItem(LAST_KEY, activeId);
}

function clip(text) {
  return String(text || "").replace(/\s+/g, " ").trim().slice(0, 22);
}

function projectTitle(project, seed = "") {
  const heading = (project.doc || "").match(/^#\s+(.+)$/m);
  return clip(heading?.[1] || seed || project.messages.find((message) => message.role === "user")?.text) || MODES[project.mode].label;
}

function touchProject(seed = "") {
  if (!activeId) return;
  const project = projects.find((item) => item.id === activeId);
  if (!project) return;
  project.title = projectTitle(project, seed);
  project.updatedAt = Date.now();
  project.phase = state.phase;
  project.doc = state.doc;
  projects.sort((a, b) => b.updatedAt - a.updatedAt);
}

function ensureProject(seed) {
  if (activeId && projects.some((item) => item.id === activeId)) return;
  const project = {
    id: uid(),
    mode,
    title: clip(seed) || MODES[mode].label,
    updatedAt: Date.now(),
    phase: state.phase,
    doc: state.doc,
    messages: state.messages,
  };
  projects.unshift(project);
  activeId = project.id;
  state = project;
}

function relativeTime(stamp) {
  const delta = Date.now() - stamp;
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  if (delta < minute) return "刚刚编辑";
  if (delta < hour) return `${Math.floor(delta / minute)} 分钟前`;
  if (delta < day) return `${Math.floor(delta / hour)} 小时前`;
  if (delta < 7 * day) return `${Math.floor(delta / day)} 天前`;
  return new Date(stamp).toLocaleDateString("zh-CN");
}

function syncStatus(hasDoc) {
  const show = mode === "prd";
  statusEl.hidden = !show;
  statusSep.hidden = !show;
  statusEl.textContent = hasDoc ? "正在编辑" : "尚未开始";
}

function systemPrompt() {
  const spec = MODES[mode];
  const skill = [skills[spec.skillUrl], skills[spec.extraUrl]].filter(Boolean).join("\n\n");
  return [
    ...spec.instructions,
    "",
    skill || "按该功能的阶段推进，文档用 Markdown。",
  ].join("\n");
}

function documentContext() {
  const doc = markdownFromEditor();
  if (!doc) return "";
  return `\n\n用户正在左侧直接编辑的文档如下。回答和改稿时以这份内容为准：\n\n${doc}`;
}

function splitReply(raw) {
  const phase = Number((raw.match(/<phase>\s*([123])\s*<\/phase>/) || [])[1] || 0);
  const doc = (raw.match(/<doc>([\s\S]*?)<\/doc>/) || raw.match(/<prd>([\s\S]*?)<\/prd>/) || [])[1] || "";
  const visible = raw
    .replace(/<phase>\s*[123]\s*<\/phase>/g, "")
    .replace(/<doc>[\s\S]*?<\/doc>/g, "")
    .replace(/<prd>[\s\S]*?<\/prd>/g, "")
    .replace(/<(?:doc|prd|phase)>[\s\S]*$/, "")
    .trim();
  return { visible, phase, doc: doc.trim() };
}

async function streamReply(history) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [{ role: "system", content: systemPrompt() + documentContext() }, ...history],
    }),
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || `请求失败（${response.status}）`);
  }
  const type = response.headers.get("content-type") || "";
  if (type.includes("application/json")) {
    const data = await response.json();
    return data.choices?.[0]?.message?.content || "";
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let raw = "";
  let buffer = "";
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop();
    lines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed.startsWith("data:")) return;
      const data = trimmed.slice(5).trim();
      if (!data || data === "[DONE]") return;
      try {
        const json = JSON.parse(data);
        raw += json.choices?.[0]?.delta?.content || json.choices?.[0]?.message?.content || "";
      } catch {
        raw += "";
      }
    });
    const current = state.messages[state.messages.length - 1];
    current.text = splitReply(raw).visible || "正在写……";
    renderLog();
  }
  return raw;
}

function renderRecent() {
  const items = [...projects].sort((a, b) => b.updatedAt - a.updatedAt);
  if (!items.length) {
    recentEl.replaceChildren();
    const empty = document.createElement("p");
    empty.className = "recent-empty";
    empty.textContent = "发送第一个问题后，项目会出现在这里。";
    recentEl.append(empty);
    return;
  }
  recentEl.replaceChildren(...items.map((project) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `project${project.id === activeId && view === "studio" ? " current" : ""}`;
    const copy = document.createElement("span");
    copy.className = "project-copy";
    const title = document.createElement("strong");
    title.textContent = project.title || MODES[project.mode].label;
    const time = document.createElement("small");
    time.textContent = relativeTime(project.updatedAt);
    copy.append(title, time);
    button.append(copy);
    button.addEventListener("click", () => openProject(project.id));
    return button;
  }));
}

function render() {
  launchEl.hidden = view !== "compose";
  workspaceEl.hidden = view === "compose";
  viewSwitchEl.hidden = view === "compose";
  newProjectBtn.classList.toggle("current", view === "compose");
  document.querySelectorAll("[data-launch]").forEach((button) => {
    button.classList.toggle("current", button.dataset.launch === launchMode);
  });
  const launchSpec = MODES[launchMode];
  launchSuggestsEl.replaceChildren(...launchSpec.suggests.map((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.prompt;
    button.addEventListener("click", () => beginProject(launchMode, item.prompt));
    return button;
  }));
  renderRecent();

  const spec = MODES[mode];
  modeTitleEl.textContent = spec.label;
  titleEl.dataset.placeholder = spec.titlePlaceholder;
  bodyEl.dataset.placeholder = spec.bodyPlaceholder;
  inputEl.placeholder = spec.inputPlaceholder;
  greetingEl.textContent = spec.greeting;
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.classList.toggle("current", view === "studio" && button.dataset.mode === mode);
  });
  phasesEl.replaceChildren(...spec.phases.map((phase) => {
    const item = document.createElement("li");
    item.textContent = phase.label;
    if (state.phase > phase.id) item.className = "done";
    if (state.phase === phase.id) item.className = "current";
    return item;
  }));
  suggestsEl.replaceChildren(...spec.suggests.map((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.prompt = item.prompt;
    const tag = document.createElement("span");
    tag.textContent = item.tag;
    button.append(tag, document.createTextNode(item.prompt));
    button.addEventListener("click", () => submit(item.prompt));
    return button;
  }));

  renderLog();
  renderPaper();

  const hasDoc = Boolean(state.doc.trim());
  syncStatus(hasDoc);
  copyBtn.disabled = !hasDoc;
  downloadBtn.disabled = !hasDoc;
  sendBtn.disabled = busy;
}

function renderLog() {
  const started = state.messages.some((message) => message.role === "user");
  heroEl.hidden = started;
  const opening = MODES[mode].opening;
  const visible = started ? state.messages.filter((message) => message.text !== opening) : [];
  logEl.replaceChildren(...visible.map((message) => {
    const bubble = document.createElement("div");
    bubble.className = `bubble ${message.role}`;
    bubble.textContent = message.text;
    return bubble;
  }));
  logEl.scrollTop = logEl.scrollHeight;
}

function renderPaper() {
  if (state.doc === appliedDoc) {
    markEmpty(titleEl);
    markEmpty(bodyEl);
    return;
  }
  if (document.activeElement === titleEl || document.activeElement === bodyEl) return;
  appliedDoc = state.doc;
  const heading = state.doc.match(/^#\s+(.+)$/m);
  titleEl.textContent = heading ? heading[1].trim() : "";
  bodyEl.replaceChildren();
  const body = state.doc.replace(/^#\s+.+(?:\n|$)/m, "").trim();
  if (body) appendMarkdown(bodyEl, body);
  markEmpty(titleEl);
  markEmpty(bodyEl);
}

function markEmpty(node) {
  node.classList.toggle("is-empty", !node.textContent.trim());
}

function markdownFromEditor() {
  const title = titleEl.textContent.replace(/\u00a0/g, " ").trim();
  const chunks = [];
  const walk = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent.replace(/\u00a0/g, " ").trim();
      if (text) chunks.push(text);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const tag = node.tagName;
    if (tag === "H3" || tag === "H4") {
      const text = node.textContent.replace(/\u00a0/g, " ").trim();
      if (text) chunks.push(`${tag === "H3" ? "##" : "###"} ${text}`);
    } else if (tag === "UL" || tag === "OL") {
      [...node.children].forEach((item, index) => {
        const text = item.textContent.replace(/\u00a0/g, " ").trim();
        if (text) chunks.push(tag === "OL" ? `${index + 1}. ${text}` : `- ${text}`);
      });
    } else if (tag === "TABLE") {
      const rows = [...node.querySelectorAll("tr")].map((row) => [...row.children].map((cell) => cell.textContent.replace(/\u00a0/g, " ").trim()));
      if (!rows.length) return;
      const [header, ...rest] = rows;
      const separator = `| ${header.map(() => "---").join(" | ")} |`;
      chunks.push([
        `| ${header.join(" | ")} |`,
        separator,
        ...rest.map((row) => `| ${row.join(" | ")} |`),
      ].join("\n"));
    } else if (tag === "DIV" || tag === "P") {
      const nested = [...node.children].some((child) => ["UL", "OL", "H3", "H4", "DIV", "P", "TABLE"].includes(child.tagName));
      if (nested) [...node.childNodes].forEach(walk);
      else {
        const text = node.textContent.replace(/\u00a0/g, " ").trim();
        if (text) chunks.push(text);
      }
    } else if (tag !== "BR") {
      [...node.childNodes].forEach(walk);
    }
  };
  [...bodyEl.childNodes].forEach(walk);
  const body = chunks.join("\n\n");
  if (!title && !body) return "";
  return `${title ? `# ${title}\n\n` : ""}${body}`.trim();
}

function syncEditor() {
  if (view !== "studio") return;
  state.doc = markdownFromEditor();
  appliedDoc = state.doc;
  if (state.doc.trim()) ensureProject("");
  touchProject();
  saveProjects();
  const hasDoc = Boolean(state.doc);
  copyBtn.disabled = !hasDoc;
  downloadBtn.disabled = !hasDoc;
  syncStatus(hasDoc);
  markEmpty(titleEl);
  markEmpty(bodyEl);
  renderRecent();
}

function appendMarkdown(parent, text) {
  const lines = text.split("\n");
  let list = null;
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (/^\s*\|/.test(line)) {
      list = null;
      const tableLines = [];
      while (index < lines.length && /^\s*\|/.test(lines[index])) {
        tableLines.push(lines[index]);
        index += 1;
      }
      parent.append(renderTable(tableLines));
      continue;
    }
    const heading = line.match(/^(#{2,3})\s+(.+)$/);
    if (heading) {
      list = null;
      const node = document.createElement(heading[1].length === 2 ? "h3" : "h4");
      node.textContent = heading[2].trim();
      parent.append(node);
      index += 1;
      continue;
    }
    const bullet = line.match(/^\s*[-*]\s+(.+)$/);
    const numbered = line.match(/^\s*\d+[.)]\s+(.+)$/);
    if (bullet || numbered) {
      const ordered = Boolean(numbered);
      if (!list || list.dataset.ordered !== String(ordered)) {
        list = document.createElement(ordered ? "ol" : "ul");
        list.dataset.ordered = String(ordered);
        parent.append(list);
      }
      const item = document.createElement("li");
      item.textContent = (bullet || numbered)[1].replace(/\*\*/g, "");
      list.append(item);
      index += 1;
      continue;
    }
    list = null;
    if (line.trim()) {
      const paragraph = document.createElement("p");
      paragraph.className = "prose";
      paragraph.textContent = line.replace(/\*\*/g, "");
      parent.append(paragraph);
    }
    index += 1;
  }
}

function renderTable(lines) {
  const rows = lines
    .map((line) => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim()))
    .filter((row) => !row.every((cell) => /^:?-{3,}:?$/.test(cell)));
  const table = document.createElement("table");
  rows.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const node = document.createElement(rowIndex === 0 ? "th" : "td");
      node.textContent = cell.replace(/\*\*/g, "");
      tr.append(node);
    });
    table.append(tr);
  });
  return table;
}

function showCompose() {
  if (busy) return;
  if (view === "studio") syncEditor();
  view = "compose";
  activeId = null;
  render();
  launchInput.focus();
}

function openProject(id) {
  if (busy) return;
  const project = projects.find((item) => item.id === id);
  if (!project) return;
  if (view === "studio") syncEditor();
  activeId = project.id;
  mode = project.mode;
  state = project;
  view = "studio";
  appliedDoc = null;
  localStorage.setItem(LAST_KEY, activeId);
  render();
  inputEl.focus();
}

function openMode(next) {
  if (!MODES[next] || busy) return;
  if (view === "studio" && next === mode && activeId) return;
  if (view === "studio") syncEditor();
  const latest = projects.find((item) => item.mode === next);
  if (latest) {
    openProject(latest.id);
    return;
  }
  mode = next;
  activeId = null;
  state = createSession(next);
  view = "studio";
  appliedDoc = null;
  render();
  inputEl.focus();
}

function beginProject(nextMode, text) {
  if (!MODES[nextMode] || busy) return;
  const value = text.trim();
  if (!value) return;
  if (view === "studio") syncEditor();
  mode = nextMode;
  activeId = null;
  state = createSession(nextMode);
  view = "studio";
  appliedDoc = null;
  ensureProject(value);
  saveProjects();
  launchInput.value = "";
  launchSend.classList.remove("ready");
  render();
  submit(value);
}

async function submit(text) {
  const value = (text ?? inputEl.value).trim();
  if (!value || busy) return;
  busy = true;
  inputEl.value = "";
  sendBtn.classList.remove("ready");
  ensureProject(value);
  if (window.matchMedia("(max-width: 800px)").matches) showTalk();
  const last = state.messages[state.messages.length - 1];
  if (!(last && last.role === "user" && last.text === value)) {
    state.messages.push({ role: "user", text: value });
  }
  state.messages.push({ role: "assistant", text: "正在回复……" });
  render();
  try {
    const history = state.messages.slice(0, -1).map((message) => ({
      role: message.role,
      content: message.text,
    }));
    const raw = await streamReply(history);
    const parsed = splitReply(raw);
    state.messages[state.messages.length - 1].text = parsed.visible || (parsed.doc ? "草稿已更新，写在左侧。可以直接改。" : "模型没有返回内容。");
    if (parsed.phase) state.phase = parsed.phase;
    if (parsed.doc) {
      state.doc = parsed.doc;
      appliedDoc = null;
    }
  } catch (error) {
    state.messages[state.messages.length - 1].text = `模型请求失败：${error.message}`;
  }
  touchProject(value);
  saveProjects();
  busy = false;
  render();
  inputEl.focus();
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
});

inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    submit();
  }
});

[titleEl, bodyEl].forEach((node) => node.addEventListener("input", syncEditor));

document.querySelector("#reset").addEventListener("click", () => {
  const fresh = createSession(mode);
  state.phase = fresh.phase;
  state.doc = fresh.doc;
  state.messages = fresh.messages;
  if (activeId) {
    const project = projects.find((item) => item.id === activeId);
    if (project) {
      project.phase = fresh.phase;
      project.doc = "";
      project.messages = fresh.messages;
      project.title = MODES[mode].label;
      project.updatedAt = Date.now();
      state = project;
    }
    saveProjects();
  }
  appliedDoc = null;
  busy = false;
  inputEl.value = "";
  render();
  inputEl.focus();
});

document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => openMode(button.dataset.mode));
});

newProjectBtn.addEventListener("click", showCompose);

document.querySelectorAll("[data-launch]").forEach((button) => {
  button.addEventListener("click", () => {
    launchMode = button.dataset.launch;
    render();
    launchInput.focus();
  });
});

launchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  beginProject(launchMode, launchInput.value);
});

launchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    beginProject(launchMode, launchInput.value);
  }
});

launchInput.addEventListener("input", () => {
  launchSend.classList.toggle("ready", launchInput.value.trim().length > 0);
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "n") {
    event.preventDefault();
    showCompose();
  }
});

if (!/Mac|iPhone|iPad/.test(navigator.platform)) {
  document.querySelector("#new-key").textContent = "Ctrl N";
}

localStorage.removeItem("prd-studio-model");

copyBtn.addEventListener("click", async () => {
  if (!state.doc) return;
  await navigator.clipboard.writeText(state.doc);
  const previous = copyBtn.textContent;
  copyBtn.textContent = "已复制";
  setTimeout(() => { copyBtn.textContent = previous; }, 1200);
});

downloadBtn.addEventListener("click", () => {
  if (!state.doc) return;
  const title = (state.doc.match(/^#\s+(.+)$/m) || [])[1] || MODES[mode].label;
  const blob = new Blob([state.doc], { type: "text/markdown;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${title.replace(/[\\/:*?"<>|]/g, "").trim() || mode}.md`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1500);
});

function showTalk() {
  document.querySelector(".workspace").classList.add("show-talk");
  document.querySelectorAll("[data-view]").forEach((item) => {
    item.classList.toggle("current", item.dataset.view === "talk");
  });
}

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".workspace").classList.toggle("show-talk", button.dataset.view === "talk");
    document.querySelectorAll("[data-view]").forEach((item) => {
      item.classList.toggle("current", item === button);
    });
  });
});

inputEl.addEventListener("input", () => {
  sendBtn.classList.toggle("ready", inputEl.value.trim().length > 0);
});

Promise.all(Object.values(MODES).flatMap((spec) => [spec.skillUrl, spec.extraUrl].filter(Boolean).map(async (url) => {
  const response = await fetch(url);
  skills[url] = response.ok ? await response.text() : "";
}))).finally(() => {
  const last = projects.find((item) => item.id === localStorage.getItem(LAST_KEY));
  if (last) openProject(last.id);
  else {
    render();
    launchInput.focus();
  }
});
