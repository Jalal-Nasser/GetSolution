# Localization Best Practices

## Content Strategy
- Write source text clearly; avoid idioms that do not translate well.
- Keep sentences short and unambiguous.

## Keys and Structure
- Use namespaced keys (e.g., `header.getStarted`, `contact.info.hoursText`).
- Avoid hard-coded dynamic text inside strings; use placeholders if needed.

## Formatting
- Use `Intl` APIs for numbers, dates, and currencies.
- Avoid manual string formatting for locale-sensitive content.

## Accessibility
- Ensure focus order is logical in RTL.
- Provide `aria-label`s consistent with the current locale.

## QA Checklist
-- Verify fallback behavior when keys are missing.
-- Test mixed LTR/RTL content blocks.
-- Confirm no layout regressions at common breakpoints.
