# Tripple K Engineering Limited — Website

Company website for **Tripple K Engineering Limited (TKEL)**, built with Next.js (App Router),
TypeScript and Tailwind CSS, ready to deploy on Vercel.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Yes, for the Quote/Contact/Careers forms to actually deliver email | Get a free key at [web3forms.com](https://web3forms.com) — sign up with the inbox that should receive submissions, no domain/DNS setup needed. Must keep the `NEXT_PUBLIC_` prefix: the form calls Web3Forms directly from the browser (their free plan rejects server-to-server calls), so the key ships in the public bundle by design — Web3Forms's spam protection is domain restriction + honeypot, not key secrecy. |
| `NEXT_PUBLIC_SITE_URL` | No | Your production domain, used for SEO metadata and the sitemap. Defaults to `https://www.tripplekeng.com`. |

Without `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` set, the forms will render and validate normally but
show a friendly error asking visitors to contact you directly by phone/email instead of failing
silently.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com/new), import the repository — it will auto-detect Next.js, no
   configuration needed.
3. Before the first deploy (or any time after, under **Project → Settings → Environment
   Variables**), add:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` — your key from web3forms.com
   - `NEXT_PUBLIC_SITE_URL` — your production domain, e.g. `https://www.tripplekeng.com`
4. Deploy. Once live, attach your custom domain under **Project → Settings → Domains** and update
   `NEXT_PUBLIC_SITE_URL` to match, then redeploy.

## Project Structure

- `src/app/` — pages (App Router): home, about, services (+ dynamic `[slug]` detail pages),
  products, projects, careers, contact, quote, plus `sitemap.ts`/`robots.ts` for SEO.
- `src/components/InquiryForm.tsx` — the shared Quote/Contact/Careers form. Submits directly to
  Web3Forms from the browser (client-side fetch) — see the Environment Variables note above for why.
- `src/components/` — shared UI: header/nav, footer, hero sections, the reusable inquiry form, etc.
- `src/data/` — all site content (services, products, projects, brands/clients, company info) as
  typed TypeScript modules — edit these to update copy without touching page markup.
- `public/images/` — curated, resized photos and brand logos.

## Editing Content

Most copy lives in `src/data/*.ts`, not scattered across page files:

- `services.ts` — the 7 services and their detail-page content
- `products.ts` — the product/valve/pump catalog on `/products`
- `projects.ts` — project case studies on `/projects`
- `brands.ts` — supplier logos and client wordmarks
- `company.ts` — stats, values, role/trade lists, and contact details (phone, email, address)

## Scripts

```bash
npm run dev     # local dev server
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint (not run automatically during `next build`)
```
