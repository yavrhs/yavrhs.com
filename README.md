# yavrhs portfolio — how it's built

Plain HTML/CSS, no build step, no framework. Every page is a separate
.html file that shares one stylesheet (style.css). Font is Manrope,
loaded from Google Fonts.

## Pages and how each one works

- **Home** (`index.html`) — nav + footer only.
- **Photography** (`photography.html`) — scrolling stack of images,
  data in the script at the bottom of the file.
- **Posters** (`posters.html`) — same idea, data in `posters-data.js`.
- **Branding** (`branding.html` + `branding-project.html`) — an
  overview list of projects, each opening its own project page with
  an image slider. Data lives in `branding-data.js`.
- **Web** (`web.html` + `web-project.html`) — identical mechanism to
  Branding, but the project title on the detail page links out to the
  live site. Data in `web-data.js`.
- **Print** (`print.html`) — every project shown inline on one page,
  each with its own little slider (no separate pages). Data in
  `print-data.js`.
- **Music** (`music.html`) — same mechanism as Print, square covers.
  Data in `music-data.js`.
- **Exhibitions** (`exhibitions.html` + `exhibitions-project.html`) —
  overview with no arrows, opens into a detail page like Branding's.
  Data in `exhibitions-data.js`.
- **About** (`about.html`) — static content.

`site.js` holds the shared logic (the slider, the overview list
renderer, etc.) so each page's own script is just a few lines pointing
it at that page's data file.

## Adding more photos or posters

1. Drop your image file into `images/` (or `images/posters/`).
2. Open `photography.html` (or `posters-data.js`) and add the filename
   to the list — same pattern in both:

   const photos = [
     "images/photo-01.jpg",
     "images/photo-02.jpg",
     "images/photo-04.jpg",   // <-- just add a line like this
   ];

Photography crops to 780px wide, height follows the image. Posters are
fixed at 780×1104.

## Adding a Branding / Web / Exhibitions project

Open the matching `*-data.js` file (`branding-data.js`, `web-data.js`,
`exhibitions-data.js`) and copy one of the existing objects in the
array, then change the values:

- `id` — must be unique, it's what shows up in the URL for that project
- `cover` / `coverHover` — the two images on the overview page (Web/Branding only — the picture that changes on hover)
- `images` — the full set shown on the project's own page
- `title`, `description` — plain text
- `url` (Web only) — the live site the title links to

No HTML editing needed — the page pulls the list automatically.

## Adding a Print / Music project

Same idea in `print-data.js` / `music-data.js`, but there's no separate
page — just add an object with a `title` and an `images` array and it
shows up as its own slider directly on the page.

## Hiding Exhibitions

Open `config.js` and set `showExhibitions: false`. That removes it from
the nav on every page — the pages still work if you (or anyone) has
the direct link, so you can keep building it privately. Flip it back
to `true` when you're ready to make it public.

## Deploying

This is a static site — upload the whole folder as-is to any static
host (Netlify, Vercel, GitHub Pages, or your own server) and it works
with no configuration. Just make sure `images/` travels with it.
