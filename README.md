# Nathaniel Herradura's Portfolio

A personal portfolio web application built using React + Vite, showcasing projects, skills, and development progress.

## Live Demo
https://ohnathani.github.io/

## About This Project
This portfolio was built to practice frontend development and demonstrate growth as a developer. It highlights projects, technical skills, and continuous learning in web development.

## Tech Stack
React  
Vite  
JavaScript (ES6+)  
HTML5  
CSS3  
gh-pages  

## Project Structure
```text
ohnathani.github.io/
├── src/
│   ├── data/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── public/
├── vite.config.js
├── package.json
└── README.md
````

## Installation

Clone the repository:

```bash
git clone https://github.com/ohnathani/ohnathani.github.io.git
cd ohnathani.github.io
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

## Build and Preview

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deployment (GitHub Pages)

Install deployment tool:

```bash
npm install gh-pages --save-dev
```

Add scripts to package.json:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Deploy:

```bash
npm run deploy
```

## Important Configuration

Since this repository is:
`ohnathani.github.io`

Your vite.config.js must be:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/"
})
```
