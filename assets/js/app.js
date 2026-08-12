/* ============================================================
   App engine: theme, TOC, scrollspy, highlighting, quiz, tabs
   ============================================================ */

/* ---------------- Theme ---------------- */
(function theme() {
  const root = document.documentElement;
  if (!root.dataset.theme) root.dataset.theme = localStorage.getItem("sfTheme") || "dark";
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("themeBtn");
    if (!btn) return;
    const paint = () => (btn.textContent = root.dataset.theme === "dark" ? "☀️" : "🌙");
    paint();
    btn.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("sfTheme", root.dataset.theme);
      paint();
    });
  });
})();

/* ---------------- Syntax highlighting ---------------- */
const HL = (() => {
  const esc = s => s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

  const KW = "public|private|protected|global|static|final|abstract|virtual|override|class|interface|extends|implements|enum|new|return|if|else|for|while|do|break|continue|switch|on|when|try|catch|finally|throw|throws|this|super|instanceof|void|null|true|false|with|without|inherited|sharing|transient|testMethod|trigger|before|after|insert|update|delete|undelete|upsert|merge|const|let|var|function|import|export|from|default|async|await|typeof|of|in|yield|case|break";
  const SOQL = "SELECT|FROM|WHERE|AND|OR|NOT|IN|NOT IN|INCLUDES|EXCLUDES|LIKE|ORDER BY|GROUP BY|ROLLUP|CUBE|HAVING|LIMIT|OFFSET|ASC|DESC|NULLS FIRST|NULLS LAST|FOR UPDATE|FOR VIEW|FOR REFERENCE|WITH SECURITY_ENFORCED|WITH USER_MODE|WITH SYSTEM_MODE|USING SCOPE|FIND|RETURNING|TYPEOF|THEN|ELSE|END|ALL FIELDS|COUNT_DISTINCT|COUNT|SUM|AVG|MIN|MAX|GROUPING|FORMAT|CALENDAR_MONTH|CALENDAR_YEAR|TODAY|YESTERDAY|LAST_N_DAYS|THIS_MONTH|LAST_WEEK|NEXT_N_DAYS";

  const MODES = {
    apex: [
      ["tk-comment", "\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/"],
      ["tk-string", "'(?:[^'\\\\\\n]|\\\\.)*'|\"(?:[^\"\\\\\\n]|\\\\.)*\"|`(?:[^`\\\\]|\\\\.)*`"],
      ["tk-annot", "@[A-Za-z_][\\w.]*"],
      ["tk-soql", "\\b(?:" + SOQL + ")\\b"],
      ["tk-keyword", "\\b(?:" + KW + ")\\b"],
      ["tk-fn", "\\b[a-z_$][\\w$]*(?=\\s*\\()"],
      ["tk-type", "\\b[A-Z][A-Za-z0-9_]*\\b"],
      ["tk-number", "\\b\\d+(?:\\.\\d+)?\\b"],
      ["tk-punct", "[{}()\\[\\];,.<>=+\\-*/%!&|?:]"]
    ],
    html: [
      ["tk-comment", "<!--[\\s\\S]*?-->"],
      ["tk-tag", "<\\/?[A-Za-z][\\w:.-]*|\\/?>"],
      ["tk-string", "\"[^\"]*\"|'[^']*'"],
      ["tk-fn", "\\{[^}]*\\}"],
      ["tk-attr", "[A-Za-z_:@][\\w:.-]*(?=\\s*=)"]
    ],
    json: [
      ["tk-comment", "\\/\\/[^\\n]*"],
      ["tk-attr", "\"[^\"]*\"(?=\\s*:)"],
      ["tk-string", "\"(?:[^\"\\\\]|\\\\.)*\""],
      ["tk-keyword", "\\b(?:true|false|null)\\b"],
      ["tk-number", "-?\\b\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\b"],
      ["tk-punct", "[{}\\[\\],:]"]
    ],
    bash: [
      ["tk-comment", "#[^\\n]*"],
      ["tk-string", "\"[^\"]*\"|'[^']*'"],
      ["tk-annot", "\\s--?[A-Za-z][\\w-]*"],
      ["tk-fn", "^\\s*[a-z][\\w-]*", "m"],
      ["tk-number", "\\b\\d+\\b"]
    ]
  };
  MODES.java = MODES.apex; MODES.js = MODES.apex; MODES.javascript = MODES.apex;
  MODES.xml = MODES.html; MODES.soql = MODES.apex; MODES.css = MODES.html;

  function run(code, lang) {
    const rules = MODES[lang];
    if (!rules) return esc(code);
    const rx = new RegExp(rules.map(r => "(" + r[1] + ")").join("|"), "gm");
    let out = "", last = 0, m;
    while ((m = rx.exec(code)) !== null) {
      if (m[0] === "") { rx.lastIndex++; continue; }
      out += esc(code.slice(last, m.index));
      let cls = "tk-punct";
      for (let g = 1; g < m.length; g++) if (m[g] !== undefined) { cls = rules[g - 1][0]; break; }
      out += `<span class="${cls}">${esc(m[0])}</span>`;
      last = m.index + m[0].length;
    }
    out += esc(code.slice(last));
    return out;
  }
  return { run, esc };
})();

/* ---------------- Enhance code blocks ---------------- */
function enhanceCode() {
  document.querySelectorAll("pre > code").forEach(code => {
    if (code.dataset.hl) return;
    code.dataset.hl = "1";
    const pre = code.parentElement;
    const lang = (code.className.match(/language-([\w-]+)/) || [, "text"])[1];
    const file = pre.dataset.file || code.dataset.file || "";
    const raw = code.textContent;

    code.innerHTML = HL.run(raw, lang);

    const wrap = document.createElement("div");
    wrap.className = "code-wrap";
    pre.parentNode.insertBefore(wrap, pre);

    const head = document.createElement("div");
    head.className = "code-head";
    head.innerHTML =
      `<div class="code-dots"><i></i><i></i><i></i></div>
       <span class="code-lang">${lang}</span>
       ${file ? `<span class="code-file">${file}</span>` : ""}
       <button class="copy-btn" type="button">Copy</button>`;
    wrap.appendChild(head);
    wrap.appendChild(pre);

    head.querySelector(".copy-btn").addEventListener("click", e => {
      const b = e.currentTarget;
      navigator.clipboard.writeText(raw).then(() => {
        b.textContent = "Copied ✓"; b.classList.add("done");
        setTimeout(() => { b.textContent = "Copy"; b.classList.remove("done"); }, 1600);
      }).catch(() => { b.textContent = "Ctrl+C"; });
    });
  });
}

/* ---------------- TOC + scrollspy ---------------- */
function buildTOC() {
  const content = document.querySelector(".content");
  const toc = document.getElementById("toc");
  if (!content || !toc) return;

  const slug = t => t.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 60);
  const heads = [...content.querySelectorAll("h2, h3")];
  if (heads.length < 2) { toc.style.display = "none"; return; }

  const seen = {};
  let html = "<h4>On this page</h4>";
  heads.forEach(h => {
    if (!h.id) {
      let s = slug(h.textContent) || "sec";
      if (seen[s]) s += "-" + (++seen[s]); else seen[s] = 1;
      h.id = s;
    }
    const a = document.createElement("a");
    a.className = "anchor"; a.href = "#" + h.id; a.textContent = "#";
    a.setAttribute("aria-label", "Link to section");
    h.appendChild(a);
    const label = h.textContent.replace(/#$/, "").trim();
    html += `<a href="#${h.id}" class="lvl-${h.tagName[1]}">${label}</a>`;
  });
  toc.innerHTML = html;

  const links = [...toc.querySelectorAll("a")];
  const spy = () => {
    const y = window.scrollY + 110;
    let cur = heads[0];
    for (const h of heads) { if (h.offsetTop <= y) cur = h; else break; }
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + cur.id));
  };
  window.addEventListener("scroll", spy, { passive: true });
  spy();
}

/* ---------------- Quizzes ---------------- */
function initQuiz() {
  document.querySelectorAll(".quiz").forEach(q => {
    q.querySelectorAll(".opt").forEach(btn => {
      btn.addEventListener("click", () => {
        if (q.classList.contains("answered")) return;
        q.classList.add("answered");
        q.querySelectorAll(".opt").forEach(o => {
          if (o.dataset.correct === "1") o.classList.add("correct");
        });
        if (btn.dataset.correct !== "1") btn.classList.add("wrong");
      });
    });
  });
}

/* ---------------- Tabs ---------------- */
function initTabs() {
  document.querySelectorAll(".tabs").forEach(t => {
    const btns = [...t.querySelectorAll(".tab-btn")];
    const panes = [...t.querySelectorAll(".tab-panel")];
    btns.forEach((b, i) => b.addEventListener("click", () => {
      btns.forEach(x => x.classList.remove("active"));
      panes.forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      if (panes[i]) panes[i].classList.add("active");
    }));
    if (btns.length && !btns.some(b => b.classList.contains("active"))) {
      btns[0].classList.add("active");
      if (panes[0]) panes[0].classList.add("active");
    }
  });
}

/* ---------------- Chrome: progress, menu, top ---------------- */
function initChrome() {
  const bar = document.getElementById("progress");
  const top = document.getElementById("toTop");
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = h > 0 ? (window.scrollY / h) * 100 : 0;
    if (bar) bar.style.width = p + "%";
    if (top) top.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (top) top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const menu = document.getElementById("menuBtn");
  const sb = document.getElementById("sidebar");
  const scrim = document.getElementById("scrim");
  if (menu && sb) {
    const close = () => { sb.classList.remove("open"); scrim && scrim.classList.remove("show"); };
    menu.addEventListener("click", () => {
      sb.classList.toggle("open");
      scrim && scrim.classList.toggle("show", sb.classList.contains("open"));
    });
    scrim && scrim.addEventListener("click", close);
    sb.addEventListener("click", e => { if (e.target.closest("a")) close(); });
  }

  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const s = document.getElementById("navSearch");
      s && (s.focus(), s.select());
    }
    if (e.key === "Escape") {
      const s = document.getElementById("navSearch");
      if (s && document.activeElement === s) { s.value = ""; s.dispatchEvent(new Event("input")); s.blur(); }
    }
  });
}

/* ---------------- Boot ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  enhanceCode();
  buildTOC();
  initQuiz();
  initTabs();
  initChrome();
});
