# ⚡ TechPulse – A Multi-Source Technical News Aggregation and Information Portal

**Academic Project Submission**  
**Course:** B.Tech Computer Science & Engineering (2nd Year)  
**Stack:** HTML5, CSS3, Vanilla JavaScript (Frontend-Only, Static Local Data)

---

## 📌 1. Project Overview & Objective

**TechPulse** is a responsive, modern technical news aggregation portal designed to bring together technology updates, emerging engineering trends, artificial intelligence breakthroughs, career guidance, and tech company developments into a single centralized web application.

Built strictly using core web fundamentals (**HTML5, CSS3, and Vanilla JavaScript**), TechPulse eliminates external API dependencies and complex framework setups. All article data is stored in modular, well-structured local JavaScript objects, making it fast, 100% offline-capable, and simple to present, customize, and explain during academic evaluations.

---

## ✨ 2. Key Features

- **📰 Dynamic News Grid**: Renders technical news cards with rich metadata (headline, summary, category badge, publication source, publication date, and thumbnail graphics).
- **🏷️ 8 Core News Categories**:
  1. AI & Machine Learning
  2. Career & Jobs
  3. Tech & IT Companies
  4. New Inventions
  5. Silicon Valley
  6. Indian Technology News
  7. World Technology News
  8. DevOps & Cloud
- **🔍 Real-Time Search Bar**: Instant filtering by headline, category name, news source, summary content, and internal keywords with an automatic empty search state message.
- **🔖 Persistent Bookmarks System**: Save favorite articles locally using browser `localStorage`. Bookmarked items persist across browser reloads and feature a live header counter badge `[0]`.
- **📖 Article Details Modal Popup**: Displays full article content, category badge, publication meta, and a "Read Original Article ↗" button opening original sources in a new tab.
- **🌙 Dark / Light Mode Switcher**: Modern Glassmorphism aesthetic defaults to a sleek dark technology theme. Users can toggle themes smoothly with preferences saved in `localStorage`.
- **📱 Fully Responsive Design**: Adapts fluidly across mobile phones, tablets, laptops, and desktop monitors with a custom mobile navigation drawer.

---

## 🛠️ 3. Technologies Used

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<dialog>`).
- **CSS3**: Custom CSS Variables, Flexbox, CSS Grid, Glassmorphism backdrop filters, Media Queries (`@media`).
- **Vanilla JavaScript (ES6+)**: DOM manipulation, Array methods (`filter`, `find`, `includes`, `forEach`), Event Listeners, and `localStorage` API.
- **SVG Vector Graphics**: Custom inline and asset SVG illustrations.
- **Development & Version Control**: Visual Studio Code, Git, GitHub.

---

## 📁 4. Project Structure

```text
TechPulse/
├── index.html              # Main HTML markup & structure
├── style.css               # Glassmorphism design system & responsive CSS
├── script.js               # 24 sample news items + DOM interaction logic
├── assets/
│   └── images/             # Vector SVG artwork for all categories
│       ├── ai_ml.svg
│       ├── careers.svg
│       ├── companies.svg
│       ├── inventions.svg
│       ├── silicon_valley.svg
│       ├── india_tech.svg
│       ├── world_tech.svg
│       └── devops_cloud.svg
└── README.md               # Project documentation & GitHub submission guide
```

---

## 🚀 5. How to Run the Project locally

### Method 1: Direct File Opening
1. Double-click `index.html` inside the `TechPulse` folder to open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Brave.

### Method 2: Using Visual Studio Code Live Server (Recommended)
1. Launch **Visual Studio Code**.
2. Go to **File -> Open Folder...** and select the `TechPulse` folder.
3. Install the **Live Server** extension by *Ritwick Dey* (from VS Code Extensions sidebar `Ctrl+Shift+X`).
4. Right-click `index.html` and select **"Open with Live Server"**.
5. The portal will automatically launch at `http://127.0.0.1:5500`.

---

### 💻 Developer Profile
- **Project Title:** TechPulse Portal
- **Developer:** B.Tech CSE 2nd-Year Student
- **License:** Open Source for Academic Learning
