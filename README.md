# Nathaniel Herradura's Portfolio

A personal portfolio web application built with React and Vite, showcasing projects, skills, and development progress.

## Live Demo

https://ohnathani.github.io/

## Tech Stack

- React
- Vite
- JavaScript
- HTML
- CSS
- GitHub Pages

## Project Structure

```text
ohnathani.github.io/
├── .github/workflows/deploy.yml
├── public/
├── src/
│   ├── data/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## GitHub Pages Deployment

This repository is named `ohnathani.github.io`, so it is served at the root URL:

```text
https://ohnathani.github.io/
```

The Vite base path is configured as `/` in `vite.config.js`.

Deployment is handled by `.github/workflows/deploy.yml`. On every push to `main`, GitHub Actions installs dependencies, builds the app, uploads the `dist` folder, and deploys it to GitHub Pages.

In the repository settings on GitHub, set **Pages > Build and deployment > Source** to **GitHub Actions**.
