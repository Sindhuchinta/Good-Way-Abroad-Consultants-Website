# Good Way Abroad Consultant — Website

A multi-page React (Vite + JavaScript) website for **Good Way Abroad Consultant**, built in the
structure of mastersvisa.com: a home page, study-abroad country pages, service pages, FAQs,
About Us, News, and a free-counselling contact form.

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Building for production

```bash
npm run build
```

This creates a `dist/` folder you can upload to any static host (Netlify, Vercel, GitHub Pages,
your own server, etc.).

## What to customize before going live

- **`src/data/siteConfig.js`** — phone number, WhatsApp link, email, address, and social links.
  Email is currently blank and social links are `#` placeholders — fill these in.
- **`src/data/countries.js`**, **`src/data/services.js`**, **`src/data/faqs.js`**,
  **`src/data/news.js`** — edit copy, add/remove countries or services, or plug in real news
  posts.
- **Photos** — every photo on the site currently points to `picsum.photos` (a free placeholder
  photo service) so the layout has real imagery to preview. Swap these `image` fields in the
  data files (and the two inline photos in `Home.jsx` / `About.jsx`) for your own licensed
  photos of your office, team, and students before launch.
- **`src/assets/logo.png`** — your logo with a transparent background (already background-removed
  from your original file). `src/assets/logo-skyblue.png` is a version pre-composited onto a
  sky-blue backdrop if you want a flat image instead of the transparent one.
- **Contact form** (`src/pages/Contact.jsx`) — currently client-side only: it shows a thank-you
  message on submit but doesn't send anywhere yet. Connect it to an email service (e.g.
  Formspree, EmailJS) or your own backend API to actually receive enquiries.

## Structure

```
src/
  assets/        logo files
  data/          editable content (countries, services, faqs, news, site config)
  components/    Header, Footer, Breadcrumb, CtaBanner
  pages/         Home, StudyAbroad, CountryPage, Services, ServicePage, FAQs, About, News, Contact
  App.jsx        routes
  main.jsx       entry point
```
