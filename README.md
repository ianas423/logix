# LOGIX – Next-Gen Software House & Recruitment Platform

A modern, responsive, and animation-rich Software House company website and recruitment management portal built with semantic HTML5, modern CSS3, JavaScript, and TypeScript.

---

## 🚀 Features

- **10 Dedicated Pages**:
  1. `index.html` – Home page with Hero, Kinetic Typography, 3D Product Console, Featured Jobs, and CTAs.
  2. `about.html` – Company story, Mission, Vision, and Milestone Timeline.
  3. `services.html` – Software Development, Cloud Architecture, AI/ML, UI/UX, and DevOps capabilities.
  4. `team.html` – Executive leadership and engineering squad roster with 3D tilt cards.
  5. `careers.html` – Work culture, comprehensive perks, and candidate hiring journey.
  6. `jobs.html` – Live job openings with real-time search and multi-tag filtering.
  7. `job-details.html` – In-depth role descriptions, requirements, compensation, and apply links.
  8. `apply.html` – Interactive candidate application form with drag-and-drop CV upload and client-side validation.
  9. `contact.html` – Project inquiry and consultation form with direct contact channels.
  10. `dashboard.html` – Admin portal for managing employees, publishing jobs, and tracking applicant recruitment pipelines.

- **Creative Animations Included on Every Page**:
  - Website Preloader with numeric counter (0% – 100%)
  - Custom Magnetic Cursor with interactive hover states
  - Page Transition Curtain Animation
  - Fullscreen Navigation Menu Overlay
  - Split Text Character & Word Animation
  - Full Screen Kinetic Typography
  - Image Reveal Masks & Zoom Effects
  - 3D Parallax Tilt Cards
  - SVG Fluid Morphing Blob Backgrounds
  - Scrollytelling Interactive Step Sections
  - Stacking Sticky Cards
  - Infinite Two-Way Marquee
  - 3D Card Gallery Carousel
  - Interactive Product Showcase Console

---

## 🛠️ Tech Stack

- **HTML5 & Modern CSS3** (Custom Properties, Flexbox, Grid, Glassmorphism)
- **Vanilla JavaScript & TypeScript** (`assets/ts/types.ts`, `assets/ts/dashboard.ts`)
- **Lucide Icons**
- **LocalStorage Data Store** for state persistence across sessions
- **Zero-Dependency Node.js HTTP Server**

---

## 🏁 Quick Start

To preview and run the website locally:

```bash
# Clone the repository
git clone https://github.com/ianas423/logix.git
cd logix

# Start the local server
node server.js
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 📂 Project Structure

```
├── assets/
│   ├── css/
│   │   ├── style.css           # Global design system & animation rules
│   │   └── dashboard.css       # Admin dashboard styles
│   ├── js/
│   │   ├── main.js             # Animation controller & UI interactions
│   │   ├── jobs-data.js        # Recruitment & Employee LocalStorage state
│   │   ├── jobs.js             # Search & filter engine for jobs
│   │   ├── apply.js            # Job application submission handler
│   │   └── dashboard.js        # Admin dashboard CRUD controller
│   └── ts/
│       ├── types.ts            # TypeScript interfaces & types
│       └── dashboard.ts        # TypeScript dashboard controller
├── index.html
├── about.html
├── services.html
├── team.html
├── careers.html
├── jobs.html
├── job-details.html
├── apply.html
├── contact.html
├── dashboard.html
├── server.js
└── README.md
```
