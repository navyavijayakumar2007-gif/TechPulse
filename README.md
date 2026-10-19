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

## ✏️ 6. How to Add or Edit News Articles

All news items are defined inside `script.js` in the `sampleNewsData` array.

To add a new article, copy and paste this template into `sampleNewsData`:

```javascript
{
  id: 25, // Ensure ID is unique
  headline: "Your Custom Article Title",
  category: "AI & Machine Learning", // Must match one of the 8 categories
  source: "Tech Source Name",
  date: "Sep 22, 2026",
  image: "assets/images/ai_ml.svg",
  summary: "A brief summary of the article displayed on the news card.",
  content: `
    <p>First detailed paragraph of the article...</p>
    <p>Second detailed paragraph of the article...</p>
  `,
  keywords: ["Custom", "Keywords", "Here"],
  url: "https://example.com/article" // Original article source link
}
```

---

## 📤 7. How to Upload Project to GitHub

Follow these terminal commands to publish `TechPulse` to your GitHub account:

### Step 1: Initialize Git Repository
Open VS Code Terminal (`Ctrl + ~`) inside the `TechPulse` directory:
```bash
git init
git add .
git commit -m "Initial commit - TechPulse News Portal Project"
```

### Step 2: Push to GitHub
1. Create a new repository on [GitHub](https://github.com/new) named `TechPulse`.
2. Do **NOT** check "Initialize this repository with a README" (since we already have one).
3. Copy the repository URL and execute:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/TechPulse.git
git push -u origin main
```

---

## 🎓 8. College Presentation & Viva Voice Q&A Guide

Here are common questions examiners or faculty members may ask during your project defense:

1. **Q: Why did you use local JavaScript arrays instead of a backend database?**
   - *Answer:* For a 2nd-year CSE frontend web development project, static JS arrays allow fast offline demonstration, zero API key dependencies, instant rendering without network latency, and complete control over sample technical content.

2. **Q: How does the search and category filtering work without reloading the page?**
   - *Answer:* Filtering is driven by JavaScript DOM events. When a user types in the search bar or clicks a category pill, `filterAndRenderArticles()` filters the JavaScript array using `.filter()` and dynamically updates the DOM grid using `.innerHTML = ""`.

3. **Q: How are bookmarks persisted when the browser is closed?**
   - *Answer:* Bookmarked article IDs are stored in the browser's `localStorage` as a JSON string (`localStorage.setItem('techpulse_bookmarks', ...)`). On page load, `JSON.parse(localStorage.getItem(...))` retrieves the saved array.

4. **Q: How did you implement Dark and Light theme switching?**
   - *Answer:* Theme switching is implemented using CSS Custom Properties (`:root` variables) and the `data-theme` HTML attribute. Toggling the attribute between `'dark'` and `'light'` updates color variables globally across the document.

---

### 💻 Developer Profile
- **Project Title:** TechPulse Portal
- **Developer:** B.Tech CSE 2nd-Year Student
- **License:** Open Source for Academic Learning
