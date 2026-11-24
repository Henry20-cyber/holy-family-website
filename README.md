# Holy Family Novena Prayer Group

A Catholic ministry website built with React, Vite, Tailwind CSS and React Router.

## Tech stack

- React 19 + Vite
- JavaScript and JSX only
- Tailwind CSS v4 (design tokens in `src/index.css`)
- React Router
- Lucide React icons
- React Helmet Async for page titles and descriptions

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/founder` | Our Founder |
| `/ministry` | Our Ministry |
| `/programs` | Programs |
| `/novenas` | Novenas |
| `/gallery` | Gallery |
| `/news` | News and Updates |
| `/donate` | Support Our Mission |
| `/contact` | Contact Us |
| `/letters-to-god` | Letters to God |

## Brand tokens

The approved palette and typography are defined once in `src/index.css`:

- Warm Ivory `#F7F3ED` — primary background (60%)
- Bright Marian Blue `#2D6CC0` — structure, icons, secondary detail (30%)
- Cardinal Red `#B82035` — lines, active indicators, key accents (10%)

Supporting tints and shades only:

- Burgundy `#6B2938` — pressed/hover state for crimson buttons
- Pale Blue `#ECF2FA` — quiet blue-tinted surface

Headings: Cormorant Garamond. Body: Inter.

Use the Tailwind tokens (`bg-ivory`, `text-marian`, `bg-crimson`, etc.) rather than new colour values. The palette has no warm metallic accent: use white for detail on blue surfaces, crimson for decorative rules and active states, and Marian Blue for icons.

## Replacing image placeholders

`src/components/ui/ImagePlaceholder.jsx` accepts an optional `src` and `alt`. When an
approved photograph is available, pass it to the existing placeholder and the layout
continues to work without changes:

```jsx
<ImagePlaceholder
  label="Holy Family hero photograph"
  src="/images/hero.jpg"
  alt="Families gathered for prayer"
  className="h-[clamp(280px,52vh,500px)] rounded-t-[48%]"
/>
```

Gallery items are defined in `src/pages/Gallery.jsx`; add `src` and `alt` to any item
in the `galleryItems` array.

## Content awaiting confirmation

The website intentionally keeps the following items marked as placeholders rather than
inventing details:

- The founder’s approved biography, welcome message and portrait.
- Official contact details (email, phone and physical address).
- Donation account details, payees and payment instructions. The site does not process
  payments and has no payment gateway.
- News articles, event dates and schedules.
- Authentic photographs of ministry gatherings, members and events.
