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

- UCLA Mechanical Engineering, Data Science Engineering minor. GPA 3.8. Expected Jun 2029.
- Valedictorian, Whitney High School (Cerritos, CA).
- Co-founder & Head of Product, BesideAI (gobesideai.com) — AI implementation agency. This is the main thing now and stays the featured card.
- Founder & CEO, CommonIntern.com (Jun 2025 to Jun 2026) — AI researcher-matching platform, 150+ MAU.
- Director of AI & Tech Strategy, UConsulting — clients include Uber, Snapchat, Vanguard.
- Founder Intern, Hologram Labs (ReDirect iOS app). Project Manager & Strategy Consultant, Astor (YC S25).
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
2. **#hero** — Name, tagline, tags, actions. Right panel: NOW block (BesideAI) + education block (UCLA + valedictorian photo) + skill bars + tech chips + callout quote. BeachLover circular profile photo above name.
3. **#systems (SHEET 01)** — 3-col grid of work/project cards. SYS-001 (BesideAI) is featured (spans 2 cols, taller banner). SYS-001, SYS-002, SYS-005, SYS-007, SYS-009 have photo banners.
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
| `BesideAI.png` | SYS-001 card banner (featured) |
| `AIUConsulting.png` | SYS-002 card banner |
| `CommonIntern.png` | SYS-005 card banner |
| `PresentingHallmate.png` | SYS-007 card banner |
| `TeachingKidsAtSimplyCS.png` | SYS-009 card banner |
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
