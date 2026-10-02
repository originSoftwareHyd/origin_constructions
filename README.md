# Origin Construction

Premium architectural and construction studio website rebuilt with Next.js App Router, React, JavaScript, Tailwind CSS, Framer Motion, and optimized local assets.

## Tech stack

- Next.js 14 App Router
- React 18
- JavaScript / JSX only
- Tailwind CSS 3
- Framer Motion
- `next/image` for local image optimization

## Architecture

```text
origin-construction/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── AboutProcess.jsx
│   ├── Services.jsx
│   ├── PortfolioStats.jsx
│   ├── Team.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   └── ui/
│       ├── AnimatedCounter.jsx
│       ├── Button.jsx
│       ├── Container.jsx
│       ├── Icon.jsx
│       ├── Reveal.jsx
│       └── SectionHeading.jsx
├── data/
│   └── siteData.js
├── public/
│   ├── icons/
│   ├── images/
│   │   ├── hero/
│   │   ├── portfolio/
│   │   └── team/
│   └── logo/
├── next.config.js
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Content source of truth

Business content is centralized in `data/siteData.js`. Update text, contact details, navigation, social URLs, statistics, or team image paths there rather than scattering values through components.

## Team images

Team photographs live in `public/images/team/`.

Current supplied local photograph:

```text
public/images/team/mohammed-abdul-baseer.png
```

To add the other supplied team photographs later, place the files in the same folder and update only the matching `image` property in `data/siteData.js`.

The Team component also accepts an HTTPS image URL. Remote URLs are rendered with a native image element so the site does not require a broad or arbitrary `next/image` remote-host allowlist. Local photographs continue to use `next/image`.

## Contact form

No server API was supplied with the project, so the form performs client-side validation and opens the visitor's email client with a prepared `mailto:` enquiry addressed to the supplied company email. It does not pretend that a server submission occurred.

## Branding

The Origin Constructions logo used in the header and footer is stored at:

```text
public/logo/o3.png
```

The favicon uses the supplied logo mark treatment at:

```text
public/logo/origin-mark.png
```

The visual system uses the logo's sampled blue and neutral gray as the primary brand colors, with architectural gold retained only as a restrained secondary detail.

## Deployment

The project can be deployed to a standard Next.js-compatible host. No environment variables are required by the current implementation.

## Architectural decisions

- Server Components are the default.
- Client Components are limited to navigation interaction, motion, counters, and form state.
- Contact information is a CSS Grid layout with independent cards and a separate form column; it does not rely on absolute positioning or negative-margin overlap fixes.
- Long contact values use natural wrapping so the supplied email and address remain readable at constrained widths.
- Team assets are centralized in data and support a graceful initials fallback when a photo is not available.
- Social entries supplied as `#` are displayed without fake navigation until real URLs are provided.
