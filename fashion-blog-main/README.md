# Fashion Blog (Glow)

A refined, Tailwind + React starter for a beauty/fashion blog with luxurious typography and subtle ambient effects.

**Tech stack:**

- React + Vite
- Tailwind CSS
- ES modules, modern tooling

**Highlights**

- Playfair Display serif for an elegant, luxurious look (see `src/index.css`).
- Category card glow effect using lavender `#8e69ab` applied to image cards (`src/components/Categories.jsx`).
- Responsive layout and accessible focus states.

## Quick Start

Prerequisites: Node.js (>=16) and npm/yarn.

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

If your `package.json` uses different script names, run `npm run` to list available scripts.

## Project Structure (important files)

- `src/index.css` — global styles, fonts, and the `.category-glow` CSS that controls the lavender glow.
- `src/components/Categories.jsx` — category cards and image markup where the glow is applied.
- `src/components/About.jsx` — About section styling and content.
- `index.html` — includes Google Fonts preconnect/link for `Playfair Display`.

## Customize the Glow

- To change color or intensity: edit `.category-glow::after` in `src/index.css` and adjust `box-shadow`, `filter: blur()`, or `opacity`.
- To apply the effect to additional cards, add the `category-glow` class to the card wrapper in the desired component (for example, `Featured.jsx`).

## Accessibility & Notes

- The glow appears on hover and keyboard focus (`:focus-within`) so it's accessible for keyboard users.
- Overlays and text are layered with z-index to keep content readable while glow sits beneath images.

## Contributing

- Fork, create a branch, and open a PR. Keep changes focused and add notes for visual/UX tweaks.

---

If you'd like, I can: add a pulsing animation to the glow, apply the glow to `Featured` and `Reviews`, or create a small screenshot/demo page. Which would you prefer?

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
