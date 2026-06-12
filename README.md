Nathaniel Herradura's Portfolio

A personal portfolio web application built using React + Vite, showcasing projects, skills, and development progress.

Demo

If deployed via GitHub Pages:

https://https://ohnathani.github.io/

Tech Stack
React
Vite
JavaScript (ES6+)
HTML5 + CSS3
gh-pages (for deployment)

Project Structure
cs-portfolio-webapp/
├── src/
│   ├── data/
│   └── main.jsx
│   └── App.jsx
│   └── styles.css
├── public/
├── vite.config.js
├── package.json
└── README.md

Installation

Clone the repository:

git clone https://github.com/ohnathani/ohnathani.github.io.git
cd cs-portfolio-webapp

Install dependencies:

npm install

Run development server:

npm run dev

Build for production:

npm run build

Preview production build:

npm run preview
Deployment (GitHub Pages)

This project is configured for GitHub Pages deployment.

Install deployment tool:
npm install gh-pages --save-dev
Deploy:
npm run deploy
Ensure GitHub Pages settings:
Branch: gh-pages
Folder: / (root)
Notes

Make sure vite.config.js contains the correct base path:

base: "/YOUR_REPO_NAME/" 
Update repository name in URLs before deploying.

Purpose

This project is part of my learning journey in frontend development and building a professional software engineering portfolio.
