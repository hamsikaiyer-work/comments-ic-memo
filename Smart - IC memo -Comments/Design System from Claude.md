# Design system — Premji

Source of truth: Figma file *Atoms — Premji Design System*. CSS variables in
[src/ui/tokens.css](../src/ui/tokens.css) mirror the Figma variable names 1:1
so handoff is direct.

## Tokens

### Colors

Raw palette only — **no semantic aliases**. Component-specific colors come from
each component's Figma CSS/JSON.

| Family | Token prefix | Steps |
|---|---|---|
| Primary / Pine (brand green) | `--pine-*` | 50–950 |
| Secondary / Husk (warm tan) | `--husk-*` | 50–950 |
| Pastels Dew (green pastel) | `--dew-*` | 50–500 |
| Pastels Shark (warm grey) | `--shark-*` | 50–500 |
| Neutrals Slate (cool grey) | `--slate-*` | 50–950 |
| Neutrals Grey (true grey) | `--grey-*` | 50–950 |
| Indicative Negative (red) | `--negative-*` | 50–950 |
| Indicative Neutral (amber) | `--neutral-*` | 50–950 |
| Indicative Info (blue) | `--info-*` | 50–950 |
| Indicative Positive (mirrors Pine) | `--positive-*` | 50–950 |
| White alphas | `--white-10/20/40/60/80/100` | |
| Black alphas | `--black-10/20/40/60/80/100` | |
| Chart palette | `--turquoise/violet/pink/amber/purple/sky/brick-*` | 50–950 |

**Page background is always `--slate-50`.** Asserted globally in `tokens.css`.

### Spacing

4-based scale. Use the variable, not raw px.

| Token | px |
|---|---|
| `--space-1` | 4 |
| `--space-2` | 8 |
| `--space-3` | 12 |
| `--space-4` | 16 |
| `--space-5` | 20 |
| `--space-6` | 24 |
| `--space-7` | 28 |
| `--space-8` | 32 |
| `--space-10` | 40 |
| `--space-12` | 48 |
| `--space-16` | 64 |

### Radius

`--radius-4`, `--radius-6`, `--radius-8`, `--radius-12` (rare), `--radius-full`.

### Typography

Two families, loaded from Google Fonts:

- **Space Grotesk** → display + headings + main buttons. Use weights 400 / 500 / 700.
- **Inter** → paragraph + subheading + secondary buttons. Use weights 400 / 600 / 700.

> ⚠️ **Inter "Medium" = 600 (semibold)**, not 500. Space Grotesk Medium = 500.
> The Figma name lies; the actual weight is what matters.

Use the type helper classes in `tokens.css` instead of writing font shorthand:

- `.t-d1-medium`, `.t-d1-bold`, `.t-d2-…` — display
- `.t-h1` … `.t-h6` (plus `-medium` / `-bold`) — Space Grotesk headings
- `.t-p1` … `.t-p5` (plus `-medium` / `-bold`) — Inter body
- `.t-s1` / `.t-s2` (plus `-medium` / `-bold`) — Inter subheadings (uppercase)
- `.t-btn-main-l/s`, `.t-btn-sec-l/s` — buttons

### Effects

Three focus rings: `--focus-pine`, `--focus-slate`, `--focus-negative`.

## Primitive workflow

For each new component the user designs in Figma:

1. **User pastes** the Figma Raw JSON (or per-state CSS) into chat. Optionally
   drops the JSON tree as a file in `~/Downloads/` and pastes the path.
2. **I create** `src/ui/primitives/<name>.{js,css}`. The JS module exports:
   - a factory function returning `{ html, bind }`
   - a `states` array for the design-system gallery
3. **I register** the primitive in `PRIMITIVES` in
   [src/design-system/index.js](../src/design-system/index.js). Gallery
   auto-renders each state.
4. **User verifies** in the preview. Iterates by pasting corrected CSS/JSON.

See [src/ui/primitives/top-nav.js](../src/ui/primitives/top-nav.js) as the
canonical example.

### Figma naming convention (proposed)

When the user wants a Figma frame to become a reusable primitive, prefix the
frame name with `[P]` (e.g. `[P] Segmented Control`). Un-prefixed frames are
treated as one-off layout compositions and won't get hoisted into the library.

## Gotchas / lessons learned

### 1. 1px strokes on pills must be `inset box-shadow`, not `border`

With `box-sizing: border-box` (which is set globally), a `border: 1px solid …`
eats 2px from the inner content area. Anything inside (a child pill, an avatar
bubble) ends up 1px above center.

```css
/* ❌ wrong — child content shifts up */
.pill { border: 1px solid var(--white-10); }

/* ✅ right — stroke takes no layout space */
.pill { box-shadow: inset 0 0 0 1px var(--white-10); }
```

### 2. Inter has top-heavy line metrics

Inter's `OS/2` typo-ascender is much larger than the descender, so when text is
flex-centered in a button, the visible glyphs sit a couple of px **above**
geometric center. If something looks too low/high, the fix is **not** more
padding — it's usually that the line-height is fine and the optical offset is
just how Inter renders. Verify by measuring the chip's outer offset first
(common confusion point).

### 3. Don't use border-radius `9999px` if the Figma spec says a specific value

E.g. the Figma segmented control uses `cornerRadius: 10` not full-pill. Faithful
copy matters; the eye picks up the difference.

### 4. Light mode only

Even though we may want dark mode later, do **not** ship dark-mode variables now.
We'll add them in one structured pass when ready, not piecemeal.

### 5. Don't invent semantic aliases

User explicitly does not want `--color-primary`, `--text-on-surface`, etc.
Every Figma file uses the raw palette directly. Stay consistent.
