# RTL Style Guide

## Direction and Flow
- Set document direction using `document.documentElement.dir = 'rtl'` and `lang = 'ar'`.
- Use logical CSS properties where possible (`margin-inline`, `padding-inline`).
- Avoid hard-coded `left`/`right`; prefer flex alignment and gap utilities.

## Components
- Navigation: apply `flex-row-reverse` for horizontal menus in RTL.
- Breadcrumbs: use left chevrons in RTL, right chevrons in LTR.
- Forms: align inputs to the right in RTL; labels and helper text follow container direction.
- Icons: mirror only directional glyphs (chevrons/arrows). Neutral icons remain unchanged.

## Utilities
- Global input alignment: `[dir='rtl'] input, textarea, select { text-align: right; }`.
- Use `dir` attributes on containers that render mixed LTR content blocks.

## Spacing
- Prefer `gap-*` over `space-x-*` when possible to avoid reversal issues.
- For `space-x-*`, add reversal via `flex-row-reverse` on the parent in RTL.

## Testing Checklist
-- Verify layout: headers, footers, cards, lists.
-- Validate navigation order and focus flow.
-- Confirm form alignment and placeholder text direction.
-- Ensure breadcrumbs and pagination respect RTL chevrons.
