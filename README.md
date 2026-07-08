# React Mini Profile Card

A responsive, grid-based team directory application built using functional React components and props[cite: 1]. This project displays professional business-card-sized tiles dynamically generated from an isolated data array[cite: 1].

---

## 📸 Preview & Evidence

Below is the visual evidence of the completed responsive grid and its hover animations as required by the handoff checklist:

![Project Preview Layout](./src/assets/preview.gif)

---

## 🚀 Features & Component Requirements Met

* **Component Architecture:** Structured cleanly with an entry layer, a layout-managing `App` hub, a reusable `ProfileCard` component, and a dedicated static data module (`profiles.js`).
* **Semantic JSX:** Built using strict semantic HTML structures (`<article>`, `<section>`, `<img>`, `<h2>`, `<p>`).
* **Responsive Grid CSS:** Styled using modern CSS Grid configurations to automatically organize profiles neatly depending on viewport dimensions.
* **Hover Interactions (Stretch Goal 1):** Features smooth card elevation (`box-shadow` lift) and micro-scaling transitions on the rounded profile avatars.
* **Conditional Formatting (Stretch Goal 2):** Automatically renders a fallback string (`"No bio provided."`) if a profile data object lacks a bio description.

---

## 📁 Meaningful Code Comments Documentation

To satisfy the handoff criteria, the source code includes explicit structural comments explaining why each component exists. Below is an overview of the structural intent behind our layout:

### 1. `src/App.jsx`
* **Purpose:** Serves as the core orchestrator and root layout shell of our application.
* **Logic:** Its primary responsibility is to house the grid container, import the raw static dataset, and map over the array to pass individual data blocks down using a predictable, one-way data flow.

### 2. `src/ProfileCard.jsx`
* **Purpose:** Acts as a modular, reusable presentation component responsible for rendering a standalone business-card tile.
* **Logic:** Accepts individual profile entities as raw props, extracts properties via object destructuring, utilizes semantic tags, and implements inline short-circuit evaluation for missing string data entries.

---

## 🛠️ Setup and Installation Instructions

Follow these steps to configure, install dependencies, and launch the local environment:

1. Extract the project compressed folder or clone the repository.
2. Open your terminal window and navigate directly into the root folder directory:
   ```bash
   cd react-profile-card-Helayel
   npm run dev