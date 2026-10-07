<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

## Architecture rules

- Keep public content on individual TanStack routes, with shared navigation/footer in SiteShell; each leaf owns its metadata for shareable pages.
- Keep the authentic optimized portfolio asset catalogue in a browser-safe shared module; photos use CSS perspective rather than WebGL to keep the experience lightweight.
- Consultation submissions use a validated public server function and private service-role-only table; visitors never receive enquiry read access.
- Use Radix Dialog for the fullscreen gallery and mobile menu to preserve focus management, escape handling and accessible modal semantics.
- The site header switches to ink tone via a geometry check in SiteShell (a light section under the header adds .on-light), so new light-background pages need no per-route header styling.
