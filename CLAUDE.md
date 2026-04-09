# Personal Website — CLAUDE.md

## Project

Gavin-Kai Vida's personal website. Static site (HTML/CSS/JS), hosted on GitHub Pages. No build step — everything is vanilla and runs directly in the browser.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Full single-page site |
| `styles.css` | All styles and animations |
| `script.js` | Intro sequence, scroll reveals, skill bar animations |
| `media/` | Local images (photos, not fetched from external sources) |

## Who Gavin Is

- UCLA Mechanical Engineering, Data Engineering minor. GPA 3.88. Expected Jun 2029.
- Valedictorian, Whitney High School (Cerritos, CA).
- Founder & CEO, CommonIntern.com — AI researcher-matching platform, 150+ MAU.
- Director of AI & Tech Strategy, UConsulting — clients include Uber, Snapchat, Vanguard, Rocketlab.
- AI Engineering Intern, STAX Engineering. Strategy Consultant, NASDAQ 100 co. (NDA). LA Metro intern.
- Founded SimplyCS (nonprofit) — taught Python to 80 youth, donated $6.6K in laptops to Elliot Elementary.
- Started in CS, switched to ME: LLMs are eating software, generalist robotics is the next frontier.
- End goal: build AND sell. YC-funded startup.
- Core thesis: "I think in systems. I think ahead."

## Design System

**Theme:** Engineering blueprint — dark navy background, cyan primary, orange accent, Space Mono for labels, Barlow Condensed for headings, Inter for body.

**Key CSS variables:**
```css
--bg: #060a10
--cyan: #00c8e8
--orange: #ff6b2b
--green: #3ddc84
--text: #c8d8e4
--text-bright: #e8f4f8
--text-dim: #6a8a9e
--border: rgba(0, 200, 232, 0.15)
--mono: 'Space Mono'
--cond: 'Barlow Condensed'
--sans: 'Inter'
```

## Site Structure

1. **Intro overlay** — SVG blueprint draws itself sequentially, "ENTER SITE →" button appears at ~5.2s. "SKIP INTRO" top-right.
2. **#hero** — Name, tagline, tags, actions. Right panel: education block (UCLA + valedictorian photo) + skill bars + tech chips + callout quote. BeachLover circular profile photo above name.
3. **#systems (SHEET 01)** — 3-col grid of work/project cards. SYS-001 (CommonIntern) is featured (spans 2 cols). SYS-002, SYS-004, SYS-006 have photo banners.
4. **#background (SHEET 02)** — Reading cards with book covers (Open Library API) or essay placeholders for PG essays.
5. **#fun (SHEET 03)** — "Not on the Resume" photo grid: talent show, flower enthusiast, arsonist & naturalist.
6. **#contact (SHEET 04)** — Heading, links (email, CommonIntern, LinkedIn, GitHub), status.

## Copy Rules

- No em dashes in prose. Use commas, periods, or restructure.
- No "not X, but Y" constructions.
- No "not X, just Y" constructions.
- Write in Gavin's voice: direct, slightly self-aware, dry humor. Not corporate.
- Avoid LLM-ish phrasing: "necessary counterweight", "testament to", "ultimately", "delve", etc.

## Media Files

| File | Used in |
|------|---------|
| `BeachLover.png` | Hero profile photo (circular crop) |
| `HSValedictorianatWHS(Cali#1).png` | Hero education block (portrait thumbnail) |
| `AIUConsulting.png` | SYS-002 card banner |
| `PresentingHallmate.png` | SYS-004 card banner |
| `TeachingKidsAtSimplyCS.png` | SYS-006 card banner |
| `SingingAtTalentShow.png` | Fun section |
| `FlowerEnthusiast.png` | Fun section |
| `CertifiedArsonistandNaturalist(joke).png` | Fun section |

## External Assets

- **Google Fonts:** Space Mono, Inter, Barlow Condensed (loaded via CDN in `<head>`)
- **Book covers:** Open Library Covers API — `https://covers.openlibrary.org/b/isbn/{ISBN}-L.jpg`
  - Atomic Habits: `9780735211292`
  - Ender's Game: `9780812550702`
  - Tomorrow x3: `9780593321201`

## Deployment

Push to `main` branch. In repo Settings → Pages → source: `main` / `root`. No build step needed.
