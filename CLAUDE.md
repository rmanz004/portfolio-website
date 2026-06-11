# Portfolio Website — Claude Instructions

This is a static HTML/CSS/JS portfolio site for Richard Manzano. No build tools, no frameworks.

## CSS Rules

- **Always use `rem` for sizing** — font sizes, padding, margin, gap, border-radius, widths, heights. Never introduce new `px` values for these properties.
- The one exception: `1px` borders and lines (e.g. `border: 1px solid ...`) may stay in `px` — sub-pixel borders are fine.
- Match the existing design tokens in `style.css` (colors, transitions, border-radius patterns) before introducing new values.

## Code Style

- Keep HTML semantic and readable with consistent indentation (4 spaces).
- No external libraries or CDN dependencies beyond what already exists (Google Fonts, that's it).
- Inline SVGs for icons — no icon library.
- JavaScript stays vanilla — no frameworks, no npm.

## File Conventions

- Shared styles go in `style.css` — do not add `<style>` blocks to individual HTML files.
- Shared scripts go in `script.js` — do not add inline `<script>` blocks to individual HTML files.
- Sub-pages (`projects/*.html`) import shared assets via `../style.css` and `../script.js`.
- Audio files live in `assets/audio/`, images in `assets/images/`, textures in `assets/textures/`.
- Never use spaces in asset filenames — use underscores or hyphens instead (spaces break URLs on web servers).

## Design Aesthetic

- Background: `#f4f1eb` (warm parchment), text: `#111`
- Font: Inter (Google Fonts)
- Minimal and intentional — avoid decorative complexity that breaks the clean aesthetic.
