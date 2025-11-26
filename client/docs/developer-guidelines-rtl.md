# Developer Guidelines for RTL Support

## Architecture
- Use the `I18nProvider` (`client/src/lib/i18n.tsx`) for locale, direction, and translations.
- Access `locale`, `dir`, and `t()` via `useI18n()`.
- Persist language preference in `localStorage` (`locale` key).

## Implementation Rules
- Wrap user-facing strings with `t('...')`. Provide sensible fallbacks where needed.
- Read `dir` and adjust component layout (e.g., add `flex-row-reverse` for horizontal groups in RTL).
- Avoid inline string concatenation for UI text; use message keys.
- Use `Intl.NumberFormat` and `Intl.DateTimeFormat` via provider helpers.

## Adding Translations
- Update `client/src/locales/en.ts` and `client/src/locales/ar.ts`.
- Keep keys stable and descriptive (e.g., `contact.form.submit`).
- Default to English if a key is missing; never crash.

## Visual QA
-- Check direction-sensitive components (Breadcrumb, Menus, Pagination).
-- Validate forms (labels, inputs, validation messages).
-- Confirm iconography behaves correctly (mirror chevrons where appropriate).

## Performance
- Translation lookup is O(depth) on key path; keep keys shallow.
- Avoid re-creating formatters per render; use provider helpers.
