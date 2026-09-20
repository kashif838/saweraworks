# Savera Works — Next.js site

Rebuild of https://www.saveraworks.com/ from the approved design (see `../design/` and the design canvas).
Next.js 16 App Router, TypeScript, plain CSS (global tokens + CSS Modules), no UI library.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things are

| Path | What |
|---|---|
| `src/content/site.ts` | Every word on the site, taken verbatim from the audit. Edit copy here only. |
| `src/app/globals.css` | Design tokens (colour, type, buttons, forms, motion). |
| `src/components/` | Header (translucent bar + mobile sheet), Hero (optional background video), Footer, Blocks (bullets, photo pair, collage, steps, CTA split), Flag, Icons. |
| `src/app/` | `/`, `/about-us`, `/our-services`, `/submit-resume`, `/contact-us`, `not-found`. |
| `src/app/api/resume`, `src/app/api/contact` | Form handlers: validate, log, return `{ ok: true }`. |
| `public/images/`, `public/video/` | Photos, logo, hero loop and poster (sources in `../design/photos-unsplash/SOURCES.txt` and `../design/video/SOURCE.txt`). |
| `next.config.ts` | 308 redirects for the WordPress leftovers (`/sample-page`, `/2026/04/02/hello-world`). |

## Hero video

`public/video/hero.mp4` is a muted 12-second loop (Mixkit, free licence, commercial use, no attribution required).
It autoplays inline behind the Home hero; `public/images/hero-poster.jpg` is the poster and the
`prefers-reduced-motion` fallback. Swap both files to change the clip; no code change needed.

## Content flags

Copy that needs client approval (typos, template filler, stale claims) is shown verbatim with a dashed orange tag.
Set `NEXT_PUBLIC_CONTENT_FLAGS=0` to hide every tag once the copy in `site.ts` has been corrected.

One presentational change is marked: the benefits sentence is split into a heading and a paragraph for layout.
The wording is unchanged and the original sentence is kept in `benefits.full`.

## Before launch (deliberately not built yet)

- **Form delivery.** Both API routes only `console.info` the submission. Wire them to an email provider (Resend, SES) and, for resumes, to storage (S3). Marked `ponytail:` in the route files.
- **Privacy policy.** None exists; the resume form collects name, address, phone and a file. Add a page and link it from the form and footer.
- **Social links.** Footer shows the five icons under "Connect With Us" with a Cleanup flag; the live site never had URLs. Supply them or remove the icons (`Footer.tsx`).
- **Employer CTA.** "Start Hiring" goes to `/contact-us` (the live site sent employers to the resume form). Confirm with the client.
- **Photography licence.** Unsplash images are free to use; attribution is appreciated, or replace with client photos of the same kind.
- **Spam protection.** Add a honeypot or Turnstile to both forms before exposing the API routes publicly.
# saveraworks
