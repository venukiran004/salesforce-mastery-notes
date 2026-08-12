# Salesforce Mastery Notes — A to Z

A complete, self-contained study system for Salesforce: **33 modules** covering Admin, Security, Apex, LWC,
Integration, the clouds, AI and DevOps — with diagrams, runnable code, use cases and interview questions on
every page.

Built as a static site. No build step, no dependencies, no tracking — just open `index.html`.

## What's inside

| | |
|---|---|
| Modules | 33 |
| Diagrams | 79 inline SVG, theme-aware |
| Code samples | 203 (Apex, LWC, SOQL, REST, CLI) |
| Comparison tables | 138 |
| Q&A and quizzes | 425 |

### Coverage

**Foundations & Admin** — Fundamentals · Admin Essentials · Identity & Access · Security & Sharing ·
Flow Builder · Reports & Dashboards · CRM Analytics · Data Management

**Clouds & Products** — Sales & Service Cloud · CPQ & Revenue Cloud · Marketing & Pardot ·
Field Service · Experience Cloud

**Apex** — Core & SOQL/SOSL · Triggers & Order of Execution · Advanced Apex · Asynchronous Apex ·
Test Classes · Governor Limits

**UI** — LWC Core · LWC Data & Events · Visualforce & Aura · App Builder, UX & Mobile ·
Einstein, AI & Data Cloud

**Integration** — APIs & Callouts · Events, CDC & Connect · Patterns & Approach · Postman In Detail

**Ship & Practice** — Deployment & DevOps · Debugging & Troubleshooting · Governance & Ecosystem ·
Practice Q&A Bank · Certifications & Career

## Features

- **Search by concept** — `Ctrl` + `K` filters the sidebar against a keyword index, not just page titles
- **Dark / light theme** — every diagram is drawn with theme-aware colours
- **Copy-ready code** — each snippet has a copy button
- **Print to PDF** — `Ctrl` + `P` on any page gives a clean, sidebar-free PDF with all answers expanded
- **Interview questions** on every module page, graded Easy / Medium / Hard with full model answers

## Running locally

Clone and open `index.html` in a browser. Nothing to install.

```bash
git clone <repo-url>
cd salesforce-mastery-notes
start index.html          # Windows
open index.html           # macOS
```

## Structure

```
index.html               Hub, learning roadmap and syllabus coverage map
assets/css/style.css     Design system (theme tokens, diagram classes, print styles)
assets/js/nav.js         Site map — single source of truth for the sidebar and prev/next
assets/js/app.js         TOC, scrollspy, syntax highlighter, quizzes, theme, copy buttons
pages/                   33 topic pages
```

Adding a page means creating the HTML and adding one entry to `SITE` in `assets/js/nav.js` — the sidebar,
search index and prev/next links all derive from it.

## Accuracy

Salesforce changes three times a year. Limits, product names and feature availability were correct to the
best of the author's knowledge at time of writing — always confirm specifics against
[Salesforce documentation](https://developer.salesforce.com/docs) before relying on them in production or an exam.

## Licence

Free to use for personal study.
