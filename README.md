# SUPERCARS digital showroom

Next.js static export for a private design and development preview. Run `npm install`, then `npm run dev`; build with `npm run build`.

## Source and content

- Business contact and services were checked against https://www.supercars.ec/ on 2026-11-08.
- Vehicle references were transcribed from the public Supercars dealer profile at https://ecuador.patiotuerca.com/ptx/dealers-profile/supercars/1368. This is not a live feed. Availability, pricing and specifications must be confirmed before public launch.
- The two supplied images are editorial references. Four AI-generated generic car photos now illustrate inventory cards and vehicle pages; each is labeled as illustrative and does not depict the listed unit. The image manifest is at `public/images/supercars/manifest.json` and generation prompts are in `public/images/supercars/inventory/README.md`.
- The current name is a text treatment because no licensed logo source was provided.

## Production handoff

- Replace static `src/data/site.ts` inventory with a live source or CMS, populate verified photographs, full specifications and inspection records, and confirm prices and status.
- Configure a server-side lead destination, spam protection and consent handling. The current validated forms open prefilled WhatsApp; they do not store leads or claim successful submission.
- Replace the preview origin in `src/data/site.ts` with the final approved domain. Remove the private-preview `noindex` rule in `src/app/layout.tsx` and `src/app/robots.ts` when the production site is ready.
- Obtain approved customer photos, testimonials, detailing before/after imagery and brand logo before replacing the corresponding editorial text treatments.
- Confirm business hours and legal/privacy wording with Supercars. Analytics are intentionally inactive until consent and account IDs are provided.
