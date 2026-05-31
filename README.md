# Barcelona Ergonomic Chair Guide

A lively, mobile-friendly static website built from the supplied research report about ergonomic office chairs for a 158 cm user in Barcelona.

## Project Structure

- `index.html` - page markup
- `styles.css` - responsive styling
- `script.js` - chair data, filters, search, and chart rendering
- `assets/` - generated visual assets
- `scripts/` - local serve, build, and validation helpers

## Run Locally

This package has no external runtime dependencies.

```bash
npm start
```

Then open the printed local URL, usually `http://localhost:4173`.

## Check The Site

```bash
npm run check
```

The check validates JavaScript syntax, confirms the interactive shortlist renders 20 chair cards, confirms the chart renders 10 rows, and checks for broken source-report placeholders.

## Build

```bash
npm run build
```

The build copies the static site into `dist/` for upload to any static host.

## Push To GitHub

```bash
git init
git add .
git commit -m "Add ergonomic chair guide site"
git branch -M main
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```

For GitHub Pages, this site can be served directly from the repository root because it is plain HTML, CSS, JavaScript, and images. In the repo settings, set Pages to deploy from the `main` branch root.
