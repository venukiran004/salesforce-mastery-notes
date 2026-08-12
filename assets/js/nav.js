/* ============================================================
   Site map — single source of truth for sidebar + prev/next
   ============================================================ */
const SITE = [
  {
    title: "Start Here", icon: "🚀",
    items: [
      { f: "index.html", t: "Home & Syllabus Map", i: "🏠", root: true,
        k: "home syllabus coverage roadmap index map checklist" },
      { f: "pages/fundamentals.html", t: "Salesforce Fundamentals", i: "☁️",
        k: "crm cloud multitenancy architecture editions org types sandbox mvc metadata release trailhead licenses" },
    ]
  },
  {
    title: "Admin & Declarative", icon: "⚙️",
    items: [
      { f: "pages/admin.html", t: "Admin Essentials", i: "🧩", pill: "13",
        k: "relationships lookup master detail junction many to many duplicate rule matching rule record types page layouts validation rules custom settings custom metadata custom labels web-to-lead email-to-case approval process assignment rules queues standard objects lead opportunity case end to end process" },
      { f: "pages/security.html", t: "Security & Sharing", i: "🔐",
        k: "owd org wide defaults role hierarchy sharing rules manual sharing apex sharing profile permission set permission set group fls field level security crud record level security data security restriction rules scoping rules teams" },
      { f: "pages/identity.html", t: "Identity & Access", i: "🪪",
        k: "sso saml oidc openid connect identity provider service provider federation id jit provisioning scim connected app mfa multi factor authentication my domain session security high assurance login ip ranges trusted ip login hours delegated administration break glass deactivate freeze user" },
      { f: "pages/flows.html", t: "Flow Builder (Deep)", i: "🌊",
        k: "flow screen flow record triggered flow scheduled autolaunched platform event triggered flow elements loops fault path best practices subflow orchestration" },
      { f: "pages/reports.html", t: "Reports & Dashboards", i: "📊",
        k: "reports report types tabular summary matrix joined bucket cross filter formula pareto dashboards dynamic dashboard filters components snapshots" },
      { f: "pages/analytics.html", t: "CRM Analytics", i: "📈",
        k: "crm analytics einstein analytics tableau dataset recipe dataflow lens dashboard saql security predicate sharing inheritance einstein discovery data prep bindings widget" },
      { f: "pages/data-management.html", t: "Data Management", i: "🗄️",
        k: "data loader import wizard bulk api migration external id storage big object async soql skinny table custom index data skew ownership skew lookup skew archiving backup restore weekly export recycle bin gdpr data mask shield encryption individual object consent data quality merge dedupe ldv large data volumes" },
    ]
  },
  {
    title: "Clouds & Products", icon: "☁️",
    items: [
      { f: "pages/sales-service.html", t: "Sales & Service Cloud", i: "🤝",
        k: "sales cloud service cloud campaign lead account contact opportunity product price book pricebookentry quote contract order forecast category opportunity split territory path sales process case support process case team entitlement milestone sla business hours omni-channel routing skills knowledge kav data category macros quick text open cti chat field service person accounts csat" },
      { f: "pages/cpq.html", t: "CPQ & Revenue Cloud", i: "💰",
        k: "cpq configure price quote quote line bundle product option product feature price rule product rule discount schedule pricing waterfall list price special price customer price net price subscription amendment renewal proration quote calculator plugin sbqq revenue cloud" },
      { f: "pages/marketing.html", t: "Marketing & Pardot", i: "📣",
        k: "marketing cloud account engagement pardot journey builder automation studio email studio content builder contact builder data extension ampscript ssjs subscriber prospect scoring grading engagement studio completion action connected campaigns campaign influence deliverability spf dkim dmarc consent opt-in" },
      { f: "pages/field-service.html", t: "Field Service", i: "🔧",
        k: "field service fsl work order work order line item service appointment service resource assigned resource service territory operating hours skills resource absence work type scheduling policy work rules service objectives dispatcher console optimization gantt mobile offline service report maintenance plan crew complex work product item products consumed" },
      { f: "pages/experience-cloud.html", t: "Experience Cloud", i: "🌐",
        k: "experience cloud community portal guest user sharing set share group external owd customer community plus partner community portal role super user lwr aura template experience builder audience targeting self registration moderation case deflection help centre site" },
    ]
  },
  {
    title: "Apex Programming", icon: "💻",
    items: [
      { f: "pages/apex-core.html", t: "Apex Core & SOQL/SOSL", i: "📘", pill: "core",
        k: "data types primitives collections list set map sobject enum oop class interface inheritance soql sosl relationship queries parent child aggregate dml database methods allornone upsert savepoint" },
      { f: "pages/apex-triggers.html", t: "Triggers & Order of Exec", i: "⚡",
        k: "trigger context variables trigger.new trigger.old trigger.newmap before after insert update delete undelete order of execution recursion static boolean trigger handler framework bulkification practice questions" },
      { f: "pages/apex-advanced.html", t: "Advanced Apex", i: "🧠",
        k: "wrapper class dynamic apex schema describe json serialize deserialize interfaces comparable queueable callable custom iterator exception handling custom exception with sharing without sharing inherited sharing static best practices design patterns singleton" },
      { f: "pages/async-apex.html", t: "Asynchronous Apex", i: "⏳",
        k: "future queueable batch apex database.batchable schedulable cron chaining stateful callouts asynchronous limits platform events transaction finalizer" },
      { f: "pages/testing.html", t: "Test Classes", i: "🧪",
        k: "test class istest testsetup assert system.runas httpcalloutmock webservicemock test data factory code coverage seealldata startTest stopTest mocking stub api" },
      { f: "pages/governor-limits.html", t: "Governor Limits", i: "🚦",
        k: "governor limits soql 100 dml 150 heap size cpu time callouts limits class methods synchronous asynchronous limit exception optimization" },
    ]
  },
  {
    title: "UI Development", icon: "🎨",
    items: [
      { f: "pages/lwc-core.html", t: "LWC Core", i: "🔷",
        k: "lightning web component lifecycle hooks connectedcallback renderedcallback disconnectedcallback errorcallback constructor shadow dom decorators api track wire properties data binding getter setter conditional rendering lwc:if for:each iterator template slots css styling" },
      { f: "pages/lwc-advanced.html", t: "LWC Data & Events", i: "🔶",
        k: "wire service imperative apex importing apex methods lightning data service getrecord createrecord recordform recordeditform events custom event parent to child child to parent publish subscribe pubsub lightning message service lms navigation navigationmixin toast" },
      { f: "pages/visualforce.html", t: "Visualforce & Aura", i: "📄",
        k: "visualforce page controller extension standard controller viewstate apex:page apex:repeat aura component attribute helper handler application event component event lwc vs aura vs visualforce" },
      { f: "pages/ux-mobile.html", t: "App Builder, UX & Mobile", i: "📱",
        k: "lightning app builder record page app page home page dynamic forms dynamic actions dynamic related lists component visibility slds styling hooks base components accessibility wcag aria keyboard contrast mobile app mobile publisher briefcase builder compact layout quick action page performance ept lightning usage app" },
      { f: "pages/einstein-ai.html", t: "Einstein, AI & Data Cloud", i: "🤖",
        k: "einstein ai prompt builder agentforce copilot trust layer grounding generative predictive prediction builder lead scoring opportunity scoring case classification next best action bots data cloud unified profile identity resolution calculated insights zero copy dmo dlo llm rag" },
    ]
  },
  {
    title: "Integration", icon: "🔌",
    items: [
      { f: "pages/integration-core.html", t: "APIs & Callouts", i: "🌐", pill: "big",
        k: "api inbound outbound rest callout soap callout http httprequest httpresponse named credential remote site setting oauth flows jwt standard rest api standard soap api composite api batch tree sobject tree status codes 200 201 400 401 403 404 500 apex rest api restresource httpget httppost apex soap api webservice keyword wsdl2apex outbound message external services openapi swagger" },
      { f: "pages/integration-events.html", t: "Events, CDC & Connect", i: "📡",
        k: "platform events publish subscribe eventbus change data capture cdc streaming api pushtopic generic event bus replay id salesforce connect external objects odata cross org adapter" },
      { f: "pages/integration-patterns.html", t: "Patterns & Approach", i: "🗺️",
        k: "integration patterns remote process invocation request reply fire and forget batch data synchronization remote call in ui data virtualization middleware mulesoft etl decision matrix approach" },
      { f: "pages/postman.html", t: "Postman In Detail", i: "📮",
        k: "postman collection environment variables connected app oauth 2.0 access token refresh token pre-request script tests newman collection runner salesforce platform apis collection" },
    ]
  },
  {
    title: "Ship & Practice", icon: "🎯",
    items: [
      { f: "pages/devops.html", t: "Deployment & DevOps", i: "🚢",
        k: "change sets sfdx sf cli metadata api unlocked package scratch org vs code git ci cd deployment validation quick deploy ant migration tool" },
      { f: "pages/debugging.html", t: "Debugging & Troubleshooting", i: "🐞",
        k: "debug log trace flag finest cumulative limit usage code unit started developer console checkpoint heap dump execute anonymous replay debugger apex log analyzer error lookup null pointer list has no rows setup audit trail optimizer health check apex exception email error log" },
      { f: "pages/governance.html", t: "Governance & Ecosystem", i: "🏛️",
        k: "governance center of excellence coe well-architected technical debt optimizer health check single org multi org divisions appexchange managed package unlocked package security review isv lma mulesoft tableau slack heroku commerce localisation localization multi-currency advanced currency management dated exchange rates translation workbench custom labels locale timezone fiscal year state country picklists irreversible settings" },
      { f: "pages/practice.html", t: "Practice Q&A Bank", i: "❓", pill: "65",
        k: "interview questions practice scenario answers apex triggers lwc integration admin quiz" },
      { f: "pages/certifications.html", t: "Certifications & Career", i: "🎓",
        k: "certification admin platform developer app builder consultant architect cta exam guide trailhead superbadge maintenance study plan exam technique career path" },
    ]
  }
];

/* ---------- Build sidebar ---------- */
(function buildNav() {
  const base = document.body.dataset.base || "";
  const here = location.pathname.split("/").pop() || "index.html";
  const inPages = location.pathname.includes("/pages/");
  const sb = document.getElementById("sidebar");
  if (!sb) return;

  const flat = [];
  let html = "";

  SITE.forEach(group => {
    html += `<div class="nav-group"><div class="nav-title">${group.icon} ${group.title}<span class="line"></span></div>`;
    group.items.forEach(it => {
      const href = base + it.f;
      const file = it.f.split("/").pop();
      const isSame = file === here && (it.root ? !inPages : inPages);
      flat.push({ href, t: it.t, i: it.i, active: isSame });
      html += `<a class="nav-link${isSame ? " active" : ""}" href="${href}" data-k="${it.k || ""}">
                 <span class="ni">${it.i}</span><span>${it.t}</span>
                 ${it.pill ? `<span class="pill">${it.pill}</span>` : ""}
               </a>`;
    });
    html += `</div>`;
  });

  sb.innerHTML = html;
  window.__NAVFLAT = flat;
  buildPageNav(flat);
})();

/* ---------- Prev / Next footer ---------- */
function buildPageNav(flat) {
  const holder = document.getElementById("pageNav");
  if (!holder) return;
  const idx = flat.findIndex(x => x.active);
  if (idx === -1) return;
  const prev = flat[idx - 1], next = flat[idx + 1];
  let h = "";
  if (prev) h += `<a href="${prev.href}"><div class="pn-lbl">← Previous</div><div class="pn-title">${prev.i} ${prev.t}</div></a>`;
  if (next) h += `<a class="next" href="${next.href}"><div class="pn-lbl">Next →</div><div class="pn-title">${next.t} ${next.i}</div></a>`;
  holder.innerHTML = h;
}

/* ---------- Sidebar filter ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("navSearch");
  if (!box) return;
  const sb = document.getElementById("sidebar");
  box.addEventListener("input", () => {
    const q = box.value.trim().toLowerCase();
    let shown = 0;
    sb.querySelectorAll(".nav-group").forEach(g => {
      let gShown = 0;
      g.querySelectorAll(".nav-link").forEach(a => {
        const hay = (a.textContent + " " + (a.dataset.k || "")).toLowerCase();
        const hit = !q || q.split(/\s+/).every(w => hay.includes(w));
        a.style.display = hit ? "" : "none";
        if (hit) { gShown++; shown++; }
      });
      g.style.display = gShown ? "" : "none";
    });
    let empty = sb.querySelector(".nav-empty");
    if (!shown) {
      if (!empty) { empty = document.createElement("div"); empty.className = "nav-empty"; sb.appendChild(empty); }
      empty.textContent = `No page matches "${box.value}"`;
      empty.style.display = "";
    } else if (empty) empty.style.display = "none";
  });
});
