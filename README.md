# 🏛️ The Sovereign Ledger

![Status: Ongoing](https://img.shields.io/badge/Status-Ongoing-blue)

**The Sovereign Ledger** is a premium, full-stack wealth management dashboard designed for absolute financial clarity. It combines a robust **Node.js/MongoDB** backend with a high-performance **Vanilla JavaScript** frontend, styled with the cutting-edge **Tailwind CSS v4** and animated via **GSAP**.

## 🚧 Project Status: Ongoing
This project is currently under active development. Current focus is on perfecting the transition from local storage to a persistent MongoDB cloud infrastructure and refining complex GSAP scroll interactions.

## 💎 The Vision
Most trackers feel like chores. **The Sovereign Ledger** is designed to feel like an asset. By utilizing complex scroll-triggered animations and a minimalist "Dark Mode" aesthetic, it treats your personal data with the architectural respect of a private bank.

## 🚀 Core Features

* **Persistent Transaction Engine:** Full CRUD operations synced with **MongoDB Atlas**.
* **Modern Styling:** Built with **Tailwind CSS v4**, leveraging CSS variables and high-speed utility processing.
* **Cinematic UI:** Integrated **GSAP (GreenSock)** for sticky card stacking and smooth expansion effects.
* **Unified Environment:** A single-command start using `concurrently` to manage the Tailwind compiler and the Express server.
* **Modular Backend:** Clean MVC (Model-View-Controller) architecture for easy scalability.

---

## 🛠️ Tech Stack

### **Frontend**
* **Language:** Vanilla JavaScript (ES6+)
* **Styles:** Tailwind CSS v4 (PostCSS/CLI)
* **Animation:** GSAP 3.x (GreenSock Animation Platform)

### **Backend**
* **Runtime:** Node.js
* **Framework:** Express v5
* **Database:** MongoDB via Mongoose
* **Utilities:** Dotenv, CORS, Concurrently, Nodemon

---

## 📂 Project Structure

```text
/The-Sovereign-Ledger
├── /public                # Client-facing assets
│   ├── /css               # Tailwind input/output (main.css)
│   ├── /js                # DOM logic & API fetch calls
│   └── index.html         # The Dashboard UI
├── /server                # Server-side logic
│   ├── /config            # MongoDB connection (db.js)
│   ├── /controllers       # Transaction business logic
│   ├── /models            # Mongoose Schemas (Transaction.js)
│   ├── /routes            # API endpoint definitions
│   └── server.js          # Entry point & Static file hosting
├── .env                   # DB credentials
└── package.json           # Scripts & Dependencies
