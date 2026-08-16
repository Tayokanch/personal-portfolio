# Design — Omotayo Quadri Portfolio

A locked design system for this portfolio. Every page redesign reads this file before emitting code.

## Genre

Editorial.

## Macrostructure family

- Marketing pages: Editorial Index — asymmetric masthead, information rail, offset imagery and ruled content sequences.
- App pages: not applicable.
- Content pages: Long Document — narrow reading measure interrupted by full-width maps and data tables.

## Theme

- Paper: off-white `oklch(98.5% 0.003 85)`.
- Ink: ink-toned midnight `oklch(18% 0.018 260)`.
- Muted text: `oklch(45% 0.018 255)`.
- Rules: `oklch(83% 0.012 250)`.
- Single accent: muted mineral blue `oklch(48% 0.07 235)`.

## Typography

- Primary headings: Fraunces, weight 500–700, roman.
- Secondary headings: Space Grotesk Variable, weight 600, roman.
- Body: Inter, weight 400–600.
- Display tracking: `-0.035em`.
- Type scale anchor: `clamp(4rem, 10vw, 9rem)`.

## Spacing

Four-point named scale in `tokens.css`. Hero sections use extreme breathing room; navigation remains micro-spaced.

## Motion

- Transform and opacity only.
- Short, restrained transitions using the named easing tokens.
- Reduced-motion fallback removes spatial movement.

## CTA voice

- Primary CTA: square-edged ink fill with compact editorial label.
- Secondary CTA: text link with a directional rule.

## What pages MUST share

- Wordmark, accent, display/body fonts, rule language, CTA voice and asymmetric section rhythm.
- No glows, harsh gradients, generic rounded cards or hover scaling.

## Per-page allowances

- Marketing pages may use existing portfolio imagery as full-bleed editorial plates.
- Case studies may use maps as wide interruptions to the reading column.
- Copy and information architecture remain unchanged.

## Exports

The canonical CSS export is `tokens.css`. Tailwind consumes the same values through `src/index.css`.
