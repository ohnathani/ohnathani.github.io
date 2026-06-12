# Nathaniel Herradura's Portfolio

A personal portfolio web application built using React + Vite, showcasing projects, skills, and development progress.

---

## Live Demo

https://ohnathani.github.io/

---

## About This Project

This portfolio was built to practice frontend development and demonstrate growth as a developer. It highlights projects, technical skills, and continuous learning in web development.

---

## Tech Stack

React  
Vite  
JavaScript (ES6+)  
HTML5  
CSS3  
gh-pages  

---

## Project Structure

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

---

## Installation

Clone the repository:

`git clone https://github.com/ohnathani/ohnathani.github.io.git`  
`cd ohnathani.github.io`  

Install dependencies:

`npm install`  

Run development server:

`npm run dev`  

---

## Build and Preview

Build for production:

`npm run build`  

Preview production build:

`npm run preview`  

---

## Deployment (GitHub Pages)

Install deployment tool:

`npm install gh-pages --save-dev`  

Add scripts to package.json:

```json id="pkg1"
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
