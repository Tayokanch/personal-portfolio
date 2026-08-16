# Design — Omotayo Quadri Portfolio

This document describes the portfolio as it is currently implemented. It is the reference for future visual changes.

## Design direction

Editorial geospatial portfolio: off-white reading surfaces, strong type hierarchy, ruled content divisions and map-led case studies. The interface is deliberately restrained; imagery and data visualisations provide the visual weight.

## Application architecture

- React 19, Vite 8 and Tailwind CSS 4.
- `src/App.jsx` owns routing and lazy-loads About, Projects and Project Detail pages.
- `/` combines the Home and Skills sections.
- `/about` is the profile and contact page.
- `/projects` is the filterable project index.
- `/projects/:slug` renders standard project details and the two dedicated GIS case-study layouts.
- Page styling is written in component-local Tailwind classes. `src/index.css` is intentionally limited to imports, theme mapping, global typography, interaction defaults and reduced-motion support.
- `tokens.css` is the canonical source for shared colour, font, spacing and motion tokens.

## Layout language

- Marketing pages use an asymmetric editorial index: large masthead, offset content and hairline rules.
- Case studies use a long-document rhythm: a broad project header followed by a contained reading column, full-width maps and ruled sections.
- Home uses a full-bleed GIS image with a dark legibility overlay and a structured contact rail.
- Skills use a contained aerial image plate followed by an asymmetrical two-column / offset-card composition.
- Project cards are square-edged, lightly ruled paper surfaces; they do not use soft outer shadows or hover scaling.
- Rounded pills are reserved for compact tags only.

## Colour roles

| Role | Token | Value | Usage |
| --- | --- | --- | --- |
| Paper | `--color-paper` | `oklch(98.5% 0.003 85)` | Primary page canvas |
| Paper, secondary | `--color-paper-2` | `oklch(95.8% 0.008 85)` | Project-card surface and subtle separation |
| Ink | `--color-ink` | `oklch(18% 0.018 260)` | Primary text and dark overlay base |
| Muted ink | `--color-ink-2` | `oklch(45% 0.018 255)` | Body copy and secondary metadata |
| Rule | `--color-rule` | `oklch(83% 0.012 250)` | Borders and editorial dividers |
| Text accent | `--color-accent` | `#6320EE` | Eyebrows, labels, case-study emphasis and interactive text |
| Teal utility accent | `--color-skill-card` | `#19747E` | Home CTA, home contact rule and contact icons |
| Blue heading / card accent | `--color-skill-card-blue` | `#057FB3` | Page `h1` values, project-card category labels and project links |
| Hero-name highlight | inline | `#90E0EF` | Only “Omotayo Quadri.” in the Home hero |

Do not replace these roles with new inline colours. Add or change the token first when a new role is genuinely needed.

## Typography

- `h1`: Fraunces, 500–700, roman. Page headings use `--color-skill-card-blue` except the white Home hero heading.
- `h2`, `h3` and `.font-display`: Space Grotesk Variable, usually weight 600, roman.
- Body: Inter, 400–600.
- Main display scale: `--text-display` = `clamp(4rem, 10vw, 9rem)`.
- Home hero name is a single light-blue highlight; its surrounding heading remains paper-coloured.
- Headings must wrap safely with `overflow-wrap: anywhere`; never italicise headings.

## Spacing and responsiveness

- Use the named spacing tokens in `tokens.css` for high-level rhythm: `--space-sm` through `--space-4xl`.
- Hero and page headers use the largest spacing values; navigation stays compact.
- Every page must work at 320, 375, 414 and 768 px without horizontal scrolling.
- Image-bearing grid columns use `minmax(0, …)`.
- At narrow widths: project grids reduce from three to two to one column; home and case-study headers collapse to one column; navigation labels remain single-line.

## Motion and accessibility

- Use only colour, opacity and transform transitions, with `--dur-short` and `--ease-out`.
- Do not use `transition-all`, hover scaling, glow effects or animated background treatments.
- Interactive controls require a visible `:focus-visible` outline using `--color-focus` and a clear active state.
- `prefers-reduced-motion` disables animations and shortens transitions globally.

## Component conventions

- Prefer component-local Tailwind classes that reference CSS tokens: `text-[var(--color-accent)]`, `bg-[var(--color-paper)]` and similar.
- Use `text-[length:var(--text-display)]` for tokenised font sizes so Tailwind treats the token as a length rather than a colour.
- Keep `src/index.css` free of page-specific selectors, structural selectors and visual overrides.
- Preserve existing copy, routes, imagery and project data unless a change explicitly asks for them.

## CTA conventions

- Home primary CTA: square-edged teal fill (`--color-skill-card`) on the image hero.
- Project repository CTA: light-blue fill (`rgb(144, 224, 239)`) with dark text.
- Live-project CTA: outlined treatment with the purple text accent.
- Project-card “View Case Study” links: `--color-skill-card-blue`.

## Exports

`tokens.css` is the canonical token export. `src/index.css` maps the font tokens into Tailwind v4 and supplies the global foundation.
