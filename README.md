# Checkout UI

A React + Vite implementation of the provided Figma checkout screen.

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Create a production build:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

## Project structure

- `src/components/` reusable UI pieces for the summary, wallet, and action buttons
- `src/` main app shell and page-level layout
- `src/assets/` project assets
- `src/styles/` global styles if additional shared styling is needed later

## Notes

- The implementation is responsive and uses semantic React components.
- The Figma source was gated in the browser, so the layout was reconstructed from the visible design preview and updated iteratively against the rendered screen.
