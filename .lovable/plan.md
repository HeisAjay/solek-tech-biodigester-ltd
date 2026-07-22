# SolekTech Premium Website

A multi-route TanStack Start site for SolekTech — biodigester sewage / wastewater solutions — with a world-class engineering-firm aesthetic (Apple / Tesla / Siemens quality bar).

## Design System

Set tokens in `src/styles.css` (oklch equivalents of the requested hex):

- Primary Deep Green `#0F766E`, Secondary Ocean Blue `#2563EB`, Accent Emerald `#10B981`
- Background White `#FFFFFF`, Muted `#F8FAFC`, Text Charcoal `#111827`
- Gradients: `--gradient-hero` (deep green → ocean blue), `--gradient-emerald`
- Shadows: `--shadow-soft`, `--shadow-elegant`, `--shadow-glass`
- Radii: rounded-2xl default for cards
- Typography: **Inter** (body) + **Geist** for display, loaded via `<link>` in `__root.tsx`

Global utilities: `.glass` (backdrop-blur + white/40 border), `.animate-fade-in`, `.animate-scale-in`, scroll-reveal via IntersectionObserver hook.

## Routes

```
src/routes/
  __root.tsx          → shared shell: sticky blurred nav + premium dark footer
  index.tsx           → Home (hero + all summary sections)
  about.tsx           → About SolekTech
  services.tsx        → Services & Industries Served
  projects.tsx        → Featured Projects showcase
  process.tsx         → How It Works (timeline)
  faq.tsx             → FAQ accordion
  contact.tsx         → Contact form + info
```

Each route has its own `head()` with unique title, description, og:title, og:description. Home has no og:image (hosting injects screenshot); leaf routes add og:image where a hero image exists.

## Home Page Sections (in order)

1. **Full-screen Hero** — background: engineering photograph with dark gradient overlay
   - H1: "Engineering Smarter Wastewater Solutions for a Cleaner Future"
   - Subhead: full SolekTech blurb
   - Two CTAs: primary "Request a Free Site Assessment" (→ /contact), ghost "View Our Projects" (→ /projects)
2. **Animated Trust Bar** — marquee/scroll: Eco-Friendly · Odor-Free · Low Maintenance · Long Service Life · Expert Installation
3. **About** — split layout, image + copy, link to /about
4. **Services** — 6 rounded glass cards with Lucide engineering icons, hover lift
5. **Industries Served** — icon grid: Homes, Estates, Hotels, Schools, Hospitals, Commercial, Industries, Government
6. **Why Choose SolekTech** — bento grid of differentiators
7. **How It Works** — horizontal timeline: Consultation → Site Assessment → System Design → Installation → Maintenance
8. **Animated Stats** — counters: Projects Completed, Client Satisfaction %, Years of Experience, 24/7 Technical Support
9. **Featured Projects** — large image cards with hover zoom + case-study preview overlay
10. **Testimonials** — premium quote cards, subtle glass style
11. **FAQ** — shadcn Accordion, smooth animations
12. **Full-width CTA band** — gradient background, "Schedule a Free Consultation"
13. **Dark Footer** — nav, contact info, office address, socials, WhatsApp button

## Components

`src/components/`:

- `SiteHeader.tsx` — sticky nav with blur on scroll, mobile sheet
- `SiteFooter.tsx` — dark premium footer + WhatsApp float
- `Hero.tsx`, `TrustBar.tsx`, `ServiceCard.tsx`, `IndustryGrid.tsx`, `Stats.tsx` (uses `useInView` + counter), `Timeline.tsx`, `ProjectCard.tsx`, `TestimonialCard.tsx`, `FaqAccordion.tsx`, `CtaBand.tsx`
- `hooks/use-reveal.ts` — IntersectionObserver-driven fade-in

Use `framer-motion` for entrance animations and hover micro-interactions. Install via `bun add framer-motion`.

## Imagery

Generate 8–10 premium engineering photos with `imagegen` (standard quality) and save under `src/assets/`:

- Hero: aerial view of modern biodigester installation at a residential estate, golden hour
- About: engineers reviewing plans on-site
- Services thumbnails (residential, commercial, hospital, hotel)
- 3 project showcase images (school, estate, industrial plant)
- Process/timeline background texture

## Motion & Interactions

- Sticky nav: transparent → `backdrop-blur-xl bg-white/70` after 40px scroll
- Section reveals: fade + 12px translateY on enter
- Stat counters animate on in-view
- Card hover: `-translate-y-1` + shadow-elegant
- FAQ accordion: shadcn built-ins
- Smooth-scroll behavior globally

## SEO & Accessibility

- Unique per-route `head()` metadata
- Semantic sections, single H1 per page, descriptive alt text
- Focus rings on all interactives, aria-labels on icon buttons
- Responsive: mobile-first, verified at 375 / 768 / 1280

## Out of Scope (this pass)

- Backend / Lovable Cloud, form submission persistence (contact form is presentational; can wire later)
- CMS for projects/testimonials (content hardcoded)
- Auth, dashboard

Confirm and I'll build it.
