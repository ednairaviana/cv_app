# CV Builder

A modern, minimalist CV builder built with React.

🔗 [Live Demo](https://ednairaviana.github.io/cv_app/) &nbsp;|&nbsp; 📚 [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-cv-application)

## About

This project was built to study `useState` structure and how to manage state to trigger re-renders correctly.

## Features

- Real-time CV preview as you type
- Dynamic forms for personal info, education, and work experience
- Cloneable fields (add/remove entries)
- Clean, responsive design with a simple mobile version

## How it works

Form fields are generated automatically from a `tabs` JSON config.
An initial `cvData` object is derived from that config, serving as the single source of truth for the entire application.

The main hook exposes:
- `cvState` — the latest CV data
- Functions to update common fields
- Functions to add, update, and remove cloneable fields (education, experience)

The `CV` component consumes `cvState` to render the preview, while the form uses the hook's functions to update data.

## Built with

- React
- Vite
