# Design Tokens

Single source of truth for design decisions. JSON → CSS via style-dictionary.

---

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `black` | `#2B393C` | Primary dark |
| `white` | `#F0F2F2` | Primary light |
| `mint` | `#0FEEBB` | Accent |
| `dark-mint` | `#1D7B75` | Accent hover |
| `red` | `#F14A21` | Accent |
| `orange` | `#FA9826` | Accent |
| `yellow` | `#D6E437` | Accent |
| `green` | `#36F53A` | Accent |
| `blue` | `#71BDED` | Accent |
| `purple` | `#BF69EA` | Accent |
| `haze` | `#FFFFFF40` | Overlay |
| `grey-haze` | `#F0F2F266` | Overlay light |
| `scrim` | `#2B393CD9` | Modal backdrop |
| `purple-shadow` | `#BF69EA0D` | Subtle shadow |

---

## Typography

| Token | Font | Usage |
|-------|------|-------|
| `body` | IBM Plex Mono | Body text |
| `headline` | Rasa | Large headlines |
| `heading` | Inter | Section headings |
| `mono` | Inconsolata | Code/mono |

---

## Font Sizes

| Token | Value | Usage |
|-------|-------|-------|
| `caption` | `0.75rem` | Small labels |
| `base` | `1rem` | Body |
| `base-150` | `1.5rem` | Large body |
| `double` | `2rem` | Subheadings |
| `triple` | `3rem` | Section titles |
| `quadruple` | `4rem` | Large titles |
| `five` | `5rem` | Hero |
| `headline` | `7rem` | Homepage headline |
| `case-study-title` | `4rem` | Case study titles |

---

## Spacing

| Token | Value |
|-------|-------|
| `quarter` | `0.25rem` |
| `half` | `0.5rem` |
| `base` | `1rem` |
| `base-150` | `1.5rem` |
| `double` | `2rem` |
| `triple` | `3rem` |
| `four` | `4rem` |
| `five` | `5rem` |

---

## Usage

```bash
npm run tokens  # builds tokens/tokens.json → src/styles/tokens.css
```

CSS custom properties generated:
```css
:root {
  --color-mint: #0FEEBB;
  --font-family-body: "IBM Plex Mono";
  --font-size-headline: 7rem;
  --spacing-double: 2rem;
  /* ...etc */
}
```

---

## Adding Tokens

1. Edit `tokens/tokens.json`
2. Run `npm run tokens`
3. Commit both JSON and generated CSS