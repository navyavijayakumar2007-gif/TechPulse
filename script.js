/* ==========================================================================
   TechPulse - Multi-Source Technical News Portal JavaScript Logic
   Author: 2nd-Year B.Tech Computer Science & Engineering Student Project
   Description: Local news data array, DOM rendering, Live Search, Category Filter,
                LocalStorage Bookmarks, Dark/Light Mode, and Modal Popup.
   ========================================================================== */

// ==========================================================================
// 1. LOCAL SAMPLE NEWS DATASET (24 Articles across 8 Categories)
// ==========================================================================
const sampleNewsData = [
  // ------------------- Category 1: AI & Machine Learning -------------------
  {
    id: 1,
    headline: "Generative AI Models Achieve New Breakthrough in Multimodal Code Generation",
    category: "AI & Machine Learning",
    source: "TechCrunch",
    date: "Sep 18, 2026",
    image: "assets/images/ai_ml.svg",
    summary: "New transformer architectures can now generate fully tested full-stack web applications directly from visual UI sketches and voice prompts with 95% accuracy.",
    content: `
      <p>Researchers have announced a massive leap forward in Generative Artificial Intelligence. The newest multimodal foundation models can analyze handwritten UI wireframes, software architecture diagrams, and voice prompts to auto-generate production-ready frontend and backend codebases.</p>
      <p>The breakthrough relies on hybrid attention mechanisms that dramatically lower hallucination rates in syntax generation. In automated benchmarks, the system produced clean, modular JavaScript, HTML, and CSS that adhered to modern accessibility and performance guidelines without human intervention.</p>
      <p>Industry leaders expect this technology to streamline developer workflows, allowing engineers to focus on architectural decision-making while AI handles repetitive boilerplate generation.</p>
    `,
    keywords: ["AI", "Machine Learning", "Generative AI", "Coding", "Multimodal", "LLM", "TechCrunch"],
    url: "https://techcrunch.com"
  },
  {
    id: 2,
    headline: "Open-Source Foundation Models Reach Parity with Proprietary LLMs",
    category: "AI & Machine Learning",
    source: "GitHub Blog",
    date: "Sep 15, 2026",
    image: "assets/images/ai_ml.svg",
    summary: "Community-driven open-source AI models are matching commercial APIs in reasoning, mathematics, and code execution performance while running locally.",
    content: `
      <p>The global open-source developer community has achieved a major milestone: open-weights artificial intelligence models now match or exceed proprietary AI APIs on standard reasoning benchmarks.</p>
      <p>By leveraging parameter-efficient fine-tuning (PEFT) and quantized model weights, software engineers can run high-performing LLMs locally on standard developer laptops without transmitting sensitive user data to external cloud servers.</p>
      <p>This democratization of artificial intelligence ensures greater privacy, reduced API costs, and freedom from vendor lock-in for startups and independent developers.</p>
    `,
    keywords: ["Open Source", "LLM", "GitHub", "AI", "Local AI", "Machine Learning"],
    url: "https://github.blog"
  },
  {
    id: 3,
    headline: "Machine Learning Algorithms Accelerate Quantum Computing Simulations",
    category: "AI & Machine Learning",
    source: "Wired",
    date: "Sep 10, 2026",
    image: "assets/images/ai_ml.svg",
    summary: "Deep neural networks are solving complex quantum error correction algorithms, cutting quantum computer simulation times from days to milliseconds.",
    content: `
      <p>Computational physicists have integrated neural network approximators into quantum simulation pipelines. The combined AI-Quantum system predicts error patterns in qubits instantaneously, overcoming one of quantum computing's biggest hurdles: decoherence.</p>
      <p>By predicting qubit drift before it ruins calculations, researchers can simulate novel chemical reactions and pharmaceutical compounds at sub-atomic resolution.</p>
    `,
    keywords: ["Quantum Computing", "Deep Learning", "Wired", "Physics", "AI"],
    url: "https://wired.com"
  },

  // ------------------- Category 2: Career & Jobs -------------------
  {
    id: 4,
    headline: "Top 10 Essential Skills CSE Graduates Need in the AI-Augmented Era",
    category: "Career & Jobs",
    source: "TechCrunch",
    date: "Sep 19, 2026",
    image: "assets/images/careers.svg",
    summary: "Industry leaders highlight systems architecture, cybersecurity, cloud infrastructure, and AI engineering as mandatory skills for B.Tech CSE students.",
    content: `
      <p>As AI tools take over entry-level syntax writing, tech recruiters are shifting focus toward high-order problem solving and core Computer Science fundamentals for university campus hiring.</p>
      <p>A recent hiring survey reveals that engineering managers prioritize candidates who excel in Data Structures, System Design, Cloud Native DevOps, and API integration over simple language syntax familiarity.</p>
      <p>"Understanding how software components interact at scale is far more critical today than memorizing language syntax," noted a leading Silicon Valley engineering recruiter.</p>
    `,
    keywords: ["Careers", "Jobs", "CSE", "B.Tech", "Skills", "Internships", "TechCrunch"],
    url: "https://techcrunch.com"
  },
  {
    id: 5,
    headline: "Remote Tech Jobs See Surge in Demand for Full-Stack & DevOps Engineers",
    category: "Career & Jobs",
    source: "Wired",
    date: "Sep 14, 2026",
    image: "assets/images/careers.svg",
    summary: "Global software teams are actively recruiting remote developers skilled in modern web stacks, containerization, and distributed database management.",
    content: `
      <p>Global tech employment reports show a steady rise in remote position openings for Full-Stack JavaScript developers and DevOps specialists skilled in Docker and Kubernetes.</p>
      <p>Companies are adopting asynchronous work cultures, rewarding developers who demonstrate strong technical documentation skills, clean Git practices, and proactive problem-solving abilities.</p>
    `,
    keywords: ["Remote Work", "Full Stack", "DevOps", "Careers", "Wired"],
    url: "https://wired.com"
  },
  {
    id: 6,
    headline: "How to Build an Outstanding GitHub Portfolio for CSE College Campus Hiring",
    category: "Career & Jobs",
    source: "GitHub Blog",
    date: "Sep 08, 2026",
    image: "assets/images/careers.svg",
    summary: "A practical guide for 2nd and 3rd year Computer Science students on highlighting real-world open-source contributions and structured projects.",
    content: `
      <p>Your GitHub profile is your modern technical resume. Recruiters recommend pinning 3 to 4 well-documented projects with clear README files, clean commit histories, and hosted live preview links.</p>
      <p>Key tips include solving real developer pain points, adding interactive frontend previews, participating in open-source hackathons, and showcasing clean code modularity.</p>
    `,
    keywords: ["GitHub", "Portfolio", "Resume", "College", "CSE", "Students"],
    url: "https://github.blog"
  },

  // ------------------- Category 3: Tech & IT Companies -------------------
  {
    id: 7,
    headline: "Microsoft & Google Announce Next-Gen AI Datacenter Infrastructure",
    category: "Tech & IT Companies",
    source: "Microsoft",
    date: "Sep 20, 2026",
    image: "assets/images/companies.svg",
    summary: "Tech giants invest over $100 Billion in eco-friendly liquid-cooled server clusters and custom silicon to power future enterprise cloud workloads.",
    content: `
      <p>In a joint industry press conference, major cloud providers unveiled next-generation hyperscale datacenter architectures engineered specifically for massive AI training workloads.</p>
      <p>The new facilities feature direct-to-chip liquid cooling systems that cut power consumption by 40% while doubling compute density per rack unit, setting new benchmarks for sustainable cloud computing.</p>
    `,
    keywords: ["Microsoft", "Google", "Datacenter", "Cloud", "Tech Companies"],
    url: "https://microsoft.com"
  },
  {
    id: 8,
    headline: "Apple Unveils On-Device Neural Processing Architecture for Mac & iPad",
    category: "Tech & IT Companies",
    source: "The Verge",
    date: "Sep 16, 2026",
    image: "assets/images/companies.svg",
    summary: "New hardware silicon enables real-time local machine learning inference without compromising device battery life or user privacy.",
    content: `
      <p>Apple has unveiled its latest M-series processors featuring dedicated hardware acceleration units for deep learning inference. The chip design allows complex privacy-focused AI models to process video, audio, and text locally on user hardware.</p>
    `,
    keywords: ["Apple", "The Verge", "Silicon", "Hardware", "Mac"],
    url: "https://theverge.com"
  },
  {
    id: 9,
    headline: "NVIDIA Introduces Ultra-Fast Quantum-AI Hybrid Compute Accelerators",
    category: "Tech & IT Companies",
    source: "Engadget",
    date: "Sep 12, 2026",
    image: "assets/images/companies.svg",
    summary: "The new hardware acceleration platform seamlessly blends GPU parallelism with quantum processing units for complex scientific simulations.",
    content: `
      <p>NVIDIA’s latest hardware platform establishes low-latency interconnects between GPU clusters and quantum hardware, unlocking unprecedented simulation speeds for genomics and materials science.</p>
    `,
    keywords: ["NVIDIA", "GPU", "Engadget", "Hardware", "Compute"],
    url: "https://engadget.com"
  },

  // ------------------- Category 4: New Inventions -------------------
  {
    id: 10,
    headline: "Researchers Invent Ultra-Low Power Neuromorphic Microchips",
    category: "New Inventions",
    source: "Wired",
    date: "Sep 17, 2026",
    image: "assets/images/inventions.svg",
    summary: "Inspired by human brain synapses, new microprocessors compute complex AI tasks using a fraction of the electricity required by traditional CPUs.",
    content: `
      <p>Electrical engineers have fabricated a working neuromorphic chip that mimics biological synapses. Unlike von Neumann architectures, neuromorphic computing processes and stores data in the same location, eliminating memory bus bottlenecks.</p>
      <p>Tests demonstrate a 100x efficiency boost for edge IoT devices, wearable medical sensors, and autonomous robotics operating in remote locations.</p>
    `,
    keywords: ["Neuromorphic", "Chips", "Inventions", "Wired", "Microchip", "Hardware"],
    url: "https://wired.com"
  },
  {
    id: 11,
    headline: "Graphene Battery Tech Achieves 5-Minute Smartphone & Laptop Charging",
    category: "New Inventions",
    source: "Engadget",
    date: "Sep 13, 2026",
    image: "assets/images/inventions.svg",
    summary: "Nanomaterial electrode breakthroughs enable ultra-fast energy transfer with zero thermal degradation over 5,000 charge cycles.",
    content: `
      <p>Material scientists have successfully scaled graphene-composite battery cells. The technology achieves rapid ion transfer without overheating, paving the way for ultra-fast charging smartphones, laptops, and electric vehicles.</p>
    `,
    keywords: ["Graphene", "Battery", "Engadget", "Inventions", "Hardware"],
    url: "https://engadget.com"
  },
  {
    id: 12,
    headline: "Solid-State Storage Breakthrough Doubles Data Transfer Speeds for Servers",
    category: "New Inventions",
    source: "IBM",
    date: "Sep 07, 2026",
    image: "assets/images/inventions.svg",
    summary: "Next-gen optical storage drives use laser-photonic channels to transmit multi-terabit data streams with near-zero latency.",
    content: `
      <p>IBM Research has demonstrated a photonic storage drive that utilizes micro-laser channels for chip-to-chip communication. The technology eliminates copper wire resistance limits in high-performance cloud servers.</p>
    `,
    keywords: ["Storage", "IBM", "Photonic", "Inventions", "Hardware"],
    url: "https://ibm.com"
  },

  // ------------------- Category 5: Silicon Valley -------------------
  {
    id: 13,
    headline: "Silicon Valley Tech Hubs Invest $50 Billion in Autonomous Mobility",
    category: "Silicon Valley",
    source: "TechCrunch",
    date: "Sep 19, 2026",
    image: "assets/images/silicon_valley.svg",
    summary: "Major Bay Area venture capital firms double down on autonomous drones, robotaxis, and smart urban logistics infrastructure.",
    content: `
      <p>Venture funding in Silicon Valley has reached historic highs as Bay Area startups deploy commercial autonomous transit fleets across California cities.</p>
      <p>Investments focus heavily on LiDAR sensor miniaturization, edge compute safety validation, and real-time computer vision navigation models.</p>
    `,
    keywords: ["Silicon Valley", "Venture Capital", "TechCrunch", "Autonomous", "California"],
    url: "https://techcrunch.com"
  },
  {
    id: 14,
    headline: "Venture Capital Funding Surges for Early-Stage DeepTech Startups",
    category: "Silicon Valley",
    source: "The Verge",
    date: "Sep 15, 2026",
    image: "assets/images/silicon_valley.svg",
    summary: "Investors shift focus from consumer social apps toward core engineering solutions in robotics, biotech, and clean energy tech.",
    content: `
      <p>Quarterly venture capital reports highlight a major structural pivot in Silicon Valley. Investors are allocating capital into hard engineering ventures—specifically humanoid robotics, synthetic biology, and grid-scale battery storage.</p>
    `,
    keywords: ["Silicon Valley", "DeepTech", "Venture Capital", "The Verge", "Startups"],
    url: "https://theverge.com"
  },
  {
    id: 15,
    headline: "Palo Alto Global Tech Summit Focuses on AI Governance & Ethical Standards",
    category: "Silicon Valley",
    source: "TechCrunch",
    date: "Sep 11, 2026",
    image: "assets/images/silicon_valley.svg",
    summary: "Founders, researchers, and policymakers draft global blueprints for transparent algorithmic decision-making and data privacy.",
    content: `
      <p>The annual Palo Alto Tech Summit concluded with an agreement on voluntary safety frameworks for training Frontier AI models, emphasizing dataset transparency and copyright compliance.</p>
    `,
    keywords: ["Silicon Valley", "Ethics", "Palo Alto", "TechCrunch", "Policy"],
    url: "https://techcrunch.com"
  },

  // ------------------- Category 6: Indian Technology News -------------------
  {
    id: 16,
    headline: "India’s Semiconductor Mission Boosts Domestic Chip Fabrication Plants",
    category: "Indian Technology News",
    source: "Economic Times Tech",
    date: "Sep 21, 2026",
    image: "assets/images/india_tech.svg",
    summary: "New semiconductor manufacturing units in Gujarat and Karnataka begin commercial production of microcontrollers and automotive chips.",
    content: `
      <p>India’s national semiconductor ecosystem achieved a landmark milestone as state-of-the-art silicon fabrication plants in Dholera and Bengaluru began commercial wafer production.</p>
      <p>The initiative creates over 100,000 high-skilled engineering jobs for CSE, ECE, and VLSI engineering graduates while reducing import dependencies for electronics manufacturing.</p>
    `,
    keywords: ["India", "Semiconductor", "Bengaluru", "Hardware", "Indian Tech", "Chips"],
    url: "https://economictimes.indiatimes.com"
  },
  {
    id: 17,
    headline: "Bengaluru & Hyderabad Emerge as Leading Global AI & Cloud R&D Hubs",
    category: "Indian Technology News",
    source: "Times of India Tech",
    date: "Sep 16, 2026",
    image: "assets/images/india_tech.svg",
    summary: "Multinational technology corporations establish large-scale Innovation Labs and Global Capability Centers (GCCs) in South India.",
    content: `
      <p>Global Capability Centers (GCCs) across Indian tech corridors are evolving from back-office support into primary drivers of global core product development and generative AI innovation.</p>
      <p>Top technology firms cite India’s massive pool of talented Computer Science graduates and software engineers as the key factor behind their R&D center expansions.</p>
    `,
    keywords: ["India", "Bengaluru", "Hyderabad", "GCC", "R&D", "Indian Tech"],
    url: "https://timesofindia.indiatimes.com"
  },
  {
    id: 18,
    headline: "Indian Tech Startups Expand High-Speed Fiber & Cloud Infrastructure to Tier-2 Cities",
    category: "Indian Technology News",
    source: "Moneycontrol Tech",
    date: "Sep 09, 2026",
    image: "assets/images/india_tech.svg",
    summary: "EdTech, FinTech, and SaaS platforms experience rapid growth driven by reliable high-speed 5G networks in non-metro regions.",
    content: `
      <p>Digital infrastructure rollout across Tier-2 and Tier-3 Indian cities has sparked a surge in regional software development hubs, empowering local developers to build global SaaS applications without relocating to metro cities.</p>
    `,
    keywords: ["India", "Startups", "5G", "SaaS", "Moneycontrol", "Indian Tech"],
    url: "https://moneycontrol.com"
  },

  // ------------------- Category 7: World Technology News -------------------
  {
    id: 19,
    headline: "European Union Enforces Strict Cybersecurity Standards for Connected IoT Devices",
    category: "World Technology News",
    source: "Wired",
    date: "Sep 20, 2026",
    image: "assets/images/world_tech.svg",
    summary: "Mandatory firmware updates, hardware encryption, and vulnerability disclosure rules take effect across 27 EU member countries.",
    content: `
      <p>The European Union has activated new Cyber Resilience regulations requiring all internet-connected hardware sold within the EU to meet strict hardware encryption and automated security patch requirements.</p>
      <p>Tech manufacturers must provide minimum 5-year security update guarantees, setting a global benchmark for consumer electronics security.</p>
    `,
    keywords: ["EU", "Cybersecurity", "IoT", "Wired", "World Tech", "Regulations"],
    url: "https://wired.com"
  },
  {
    id: 20,
    headline: "Japan Unveils World’s Fastest Exascale Supercomputer for Climate Modeling",
    category: "World Technology News",
    source: "The Verge",
    date: "Sep 14, 2026",
    image: "assets/images/world_tech.svg",
    summary: "The next-generation supercomputer computes over 2 Exaflops to simulate real-time weather phenomena and natural disaster early warnings.",
    content: `
      <p>Japan’s RIKEN research institute has turned on its newest exascale supercomputing platform. Powered by custom ARM-based processors, the machine models global climate patterns with millimeter precision.</p>
    `,
    keywords: ["Japan", "Supercomputer", "Exascale", "The Verge", "World Tech"],
    url: "https://theverge.com"
  },
  {
    id: 21,
    headline: "Transatlantic Subsea Fiber-Optic Cable Upgrade Boosts Global Data Speeds",
    category: "World Technology News",
    source: "Engadget",
    date: "Sep 06, 2026",
    image: "assets/images/world_tech.svg",
    summary: "New optical amplification technology increases intercontinental internet capacity by 500 Terabits per second.",
    content: `
      <p>An international consortium of telecom providers completed a major optical transceiver upgrade along transatlantic subsea cables, significantly lowering latency for cross-border cloud communication.</p>
    `,
    keywords: ["Subsea Cable", "Fiber Optic", "Engadget", "World Tech", "Internet"],
    url: "https://engadget.com"
  },

  // ------------------- Category 8: DevOps & Cloud -------------------
  {
    id: 22,
    headline: "AWS & Kubernetes Introduce Automated Multi-Cloud Failover Management",
    category: "DevOps & Cloud",
    source: "AWS",
    date: "Sep 18, 2026",
    image: "assets/images/devops_cloud.svg",
    summary: "Cloud-native tooling now automates zero-downtime microservice migration between public cloud providers during outages.",
    content: `
      <p>AWS and the Cloud Native Computing Foundation (CNCF) announced new declarative Kubernetes operator specifications that allow cloud architects to configure multi-cloud redundancy with zero downtime.</p>
      <p>If an entire availability zone experiences service disruption, traffic is rerouted across secondary cloud regions dynamically without dropping active user connections or database transactions.</p>
    `,
    keywords: ["AWS", "Kubernetes", "DevOps", "Cloud", "Microservices", "Docker"],
    url: "https://aws.amazon.com"
  },
  {
    id: 23,
    headline: "The Rise of Platform Engineering: Simplifying CI/CD Developer Pipelines",
    category: "DevOps & Cloud",
    source: "GitHub Blog",
    date: "Sep 12, 2026",
    image: "assets/images/devops_cloud.svg",
    summary: "Internal Developer Portals (IDPs) are replacing complex manual deployment scripts, allowing developers to self-service cloud infrastructure.",
    content: `
      <p>Platform engineering has emerged as a dominant trend in modern software engineering. By building internal developer portals, senior DevOps teams provide standardized, secure deployment templates for feature developers.</p>
      <p>This abstraction layer reduces cognitive load, allowing developers to deploy code safely using automated testing pipelines.</p>
    `,
    keywords: ["Platform Engineering", "DevOps", "CI/CD", "GitHub", "Cloud"],
    url: "https://github.blog"
  },
  {
    id: 24,
    headline: "Serverless Architecture Best Practices for Scalable Enterprise Microservices",
    category: "DevOps & Cloud",
    source: "IBM",
    date: "Sep 05, 2026",
    image: "assets/images/devops_cloud.svg",
    summary: "Event-driven architecture patterns eliminate server idle costs while ensuring instant auto-scaling under peak traffic spikes.",
    content: `
      <p>IBM Cloud architects released a comprehensive whitepaper detailing event-driven serverless design patterns. By decoupling state management and leveraging fast cold-start runtimes, backend teams reduce hosting costs by up to 70%.</p>
    `,
    keywords: ["Serverless", "IBM", "Cloud", "DevOps", "Architecture"],
    url: "https://ibm.com"
  }
];

// ==========================================================================
// 2. STATE MANAGEMENT & DOM SELECTORS
// ==========================================================================
let currentCategory = "All";
let searchQuery = "";
let bookmarks = JSON.parse(localStorage.getItem("techpulse_bookmarks")) || [];
let currentTheme = localStorage.getItem("techpulse_theme") || "dark";

// DOM Elements
const newsGrid = document.getElementById("news-grid");
const emptyState = document.getElementById("empty-state");
const emptyTitle = document.getElementById("empty-title");
const emptyDesc = document.getElementById("empty-desc");
const emptyResetBtn = document.getElementById("empty-reset-btn");

const categoryPillsContainer = document.getElementById("category-pills");
const sectionHeading = document.getElementById("section-heading");
const sectionSubheading = document.getElementById("section-subheading");

const headerSearchInput = document.getElementById("header-search-input");
const clearSearchBtn = document.getElementById("clear-search-btn");
const searchStatusBar = document.getElementById("search-status-bar");
const searchQueryDisplay = document.getElementById("search-query-display");
const resetSearchBtn = document.getElementById("reset-search-btn");

const bookmarkCountBadge = document.getElementById("bookmark-count");
const themeToggleBtn = document.getElementById("theme-toggle");

const navBookmarksBtn = document.getElementById("nav-bookmarks");
const heroExploreBtn = document.getElementById("hero-explore-btn");
const heroBookmarksBtn = document.getElementById("hero-bookmarks-btn");

const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Modal Elements
const articleModal = document.getElementById("article-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalImg = document.getElementById("modal-img");
const modalCategory = document.getElementById("modal-category");
const modalSource = document.getElementById("modal-source");
const modalDate = document.getElementById("modal-date");
const modalHeadline = document.getElementById("modal-headline");
const modalContent = document.getElementById("modal-content");
const modalExternalLink = document.getElementById("modal-external-link");
const modalBookmarkBtn = document.getElementById("modal-bookmark-btn");
const modalBookmarkText = document.getElementById("modal-bookmark-text");

let activeModalArticleId = null;

// ==========================================================================
// 3. INITIALIZATION FUNCTION
// ==========================================================================
function init() {
  // Apply saved theme preference
  document.documentElement.setAttribute("data-theme", currentTheme);
  
  // Update header bookmark count badge
  updateBookmarkBadge();

  // Render initial news cards (All news)
  filterAndRenderArticles();

  // Setup Event Listeners
  setupEventListeners();

  console.log("TechPulse Web Application initialized successfully. Total articles loaded:", sampleNewsData.length);
}

// ==========================================================================
// 4. CARD RENDERING & FILTERING LOGIC
// ==========================================================================

/**
 * Main filtering function: combines active category pill and active search query
 */
function filterAndRenderArticles() {
  let filtered = sampleNewsData;

  // 1. Filter by Category or Bookmarks
  if (currentCategory === "Bookmarks") {
    filtered = filtered.filter(article => bookmarks.includes(article.id));
    sectionHeading.textContent = "Saved Bookmarks";
    sectionSubheading.textContent = `Displaying ${filtered.length} saved article(s) stored in your browser`;
  } else if (currentCategory !== "All") {
    filtered = filtered.filter(article => article.category === currentCategory);
    sectionHeading.textContent = currentCategory;
    sectionSubheading.textContent = `Showing stories in ${currentCategory}`;
  } else {
    sectionHeading.textContent = "Latest Technical News";
    sectionSubheading.textContent = "Browsing top stories from leading tech publications";
  }

  // 2. Filter by Search Query
  if (searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(article => {
      const matchHeadline = article.headline.toLowerCase().includes(query);
      const matchCategory = article.category.toLowerCase().includes(query);
      const matchSource = article.source.toLowerCase().includes(query);
      const matchSummary = article.summary.toLowerCase().includes(query);
      const matchKeywords = article.keywords.some(kw => kw.toLowerCase().includes(query));

      return matchHeadline || matchCategory || matchSource || matchSummary || matchKeywords;
    });

    // Show active search status bar
    searchStatusBar.style.display = "flex";
    searchQueryDisplay.textContent = `"${searchQuery}"`;
  } else {
    searchStatusBar.style.display = "none";
  }

  // Update Section Counter Badge
  const newsCountBadge = document.getElementById("news-count-badge");
  if (newsCountBadge) {
    newsCountBadge.textContent = `${filtered.length} Article${filtered.length === 1 ? '' : 's'}`;
  }

  const countBookmarksEl = document.getElementById("count-bookmarks");
  if (countBookmarksEl) {
    countBookmarksEl.textContent = bookmarks.length;
  }

  // 3. Render or Display Empty State
  if (filtered.length === 0) {
    newsGrid.style.display = "none";
    emptyState.style.display = "block";

    if (currentCategory === "Bookmarks") {
      emptyTitle.textContent = "No saved bookmarks yet.";
      emptyDesc.textContent = "Click the bookmark icon on any news card to save articles for offline reading.";
    } else {
      emptyTitle.textContent = "No news found matching your search.";
      emptyDesc.textContent = `We couldn't find any news articles matching "${searchQuery}". Try searching for terms like "AI", "Cloud", or "India".`;
    }
  } else {
    emptyState.style.display = "none";
    newsGrid.style.display = "grid";
    renderNewsGrid(filtered);
  }
}

/**
 * Injects array of articles into DOM as clean news cards
 */
function renderNewsGrid(articles) {
  newsGrid.innerHTML = ""; // Clear existing grid cards

  articles.forEach(article => {
    const isBookmarked = bookmarks.includes(article.id);
    
    // Create card element
    const card = document.createElement("article");
    card.className = "news-card";
    card.setAttribute("data-id", article.id);

    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${article.image}" alt="${article.headline}" loading="lazy">
        <span class="category-badge">${article.category}</span>
        <button class="card-bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" 
                aria-label="Bookmark article" 
                title="${isBookmarked ? 'Remove Bookmark' : 'Save Bookmark'}" 
                onclick="handleBookmarkClick(event, ${article.id})">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>

      <div class="card-body">
        <div class="card-meta">
          <span class="card-source">${article.source}</span>
          <span>•</span>
          <span class="card-date">${article.date}</span>
        </div>

        <h3 class="card-headline">${article.headline}</h3>
        <p class="card-summary">${article.summary}</p>

        <div class="card-footer">
          <button class="btn-read-more" onclick="openArticleModal(${article.id})">
            Read More 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    `;

    newsGrid.appendChild(card);
  });
}

// ==========================================================================
// 5. BOOKMARK ENGINE (LocalStorage Persistence)
// ==========================================================================

/**
 * Handles bookmark toggle click on cards or inside modal
 */
function handleBookmarkClick(event, articleId) {
  if (event) event.stopPropagation();

  const index = bookmarks.indexOf(articleId);
  if (index > -1) {
    // Article is already bookmarked -> Remove it
    bookmarks.splice(index, 1);
  } else {
    // Article is not bookmarked -> Add it
    bookmarks.push(articleId);
  }

  // Save updated bookmarks array to browser LocalStorage
  localStorage.setItem("techpulse_bookmarks", JSON.stringify(bookmarks));

  // Update counter badge in header
  updateBookmarkBadge();

  // Re-render current view
  filterAndRenderArticles();

  // If modal is open, update modal bookmark button state
  if (activeModalArticleId === articleId) {
    updateModalBookmarkBtn(bookmarks.includes(articleId));
  }
}

/**
 * Updates header badge text count
 */
function updateBookmarkBadge() {
  bookmarkCountBadge.textContent = bookmarks.length;
}

// ==========================================================================
// 6. ARTICLE DETAILS MODAL POPUP LOGIC
// ==========================================================================

/**
 * Opens detailed view modal for a given article ID
 */
function openArticleModal(articleId) {
  const article = sampleNewsData.find(item => item.id === articleId);
  if (!article) return;

  activeModalArticleId = articleId;

  // Populate modal fields
  modalImg.src = article.image;
  modalImg.alt = article.headline;
  modalCategory.textContent = article.category;
  modalSource.textContent = article.source;
  modalDate.textContent = article.date;
  modalHeadline.textContent = article.headline;
  modalContent.innerHTML = article.content;
  modalExternalLink.href = article.url;

  // Update modal bookmark button state
  const isBookmarked = bookmarks.includes(articleId);
  updateModalBookmarkBtn(isBookmarked);

  // Configure modal bookmark button handler
  modalBookmarkBtn.onclick = (e) => handleBookmarkClick(e, articleId);

  // Show modal popup
  articleModal.classList.add("active");
  articleModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Disable background page scrolling
}

/**
 * Updates bookmark button appearance inside modal
 */
function updateModalBookmarkBtn(isBookmarked) {
  if (isBookmarked) {
    modalBookmarkBtn.classList.add("bookmarked");
    modalBookmarkText.textContent = "Bookmarked ✓";
    modalBookmarkBtn.querySelector("svg").setAttribute("fill", "currentColor");
  } else {
    modalBookmarkBtn.classList.remove("bookmarked");
    modalBookmarkText.textContent = "Bookmark Article";
    modalBookmarkBtn.querySelector("svg").setAttribute("fill", "none");
  }
}

/**
 * Closes modal popup
 */
function closeModal() {
  articleModal.classList.remove("active");
  articleModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // Restore background scrolling
  activeModalArticleId = null;
}

// ==========================================================================
// 7. DARK / LIGHT THEME TOGGLE LOGIC
// ==========================================================================
function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("techpulse_theme", currentTheme);
}

// ==========================================================================
// 8. EVENT LISTENERS SETUP
// ==========================================================================
function setupEventListeners() {
  
  // Category Pills Clicking
  categoryPillsContainer.addEventListener("click", (e) => {
    const target = e.target.closest(".category-pill");
    if (!target) return;

    // Update active pill UI class
    document.querySelectorAll(".category-pill").forEach(pill => pill.classList.remove("active"));
    target.classList.add("active");

    // Set category state and filter
    currentCategory = target.getAttribute("data-category");
    filterAndRenderArticles();
  });

  // Header Search Input (Dynamic keyup / input event)
  headerSearchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery.length > 0 ? "block" : "none";
    filterAndRenderArticles();
  });

  // Clear Search Input Button
  clearSearchBtn.addEventListener("click", () => {
    headerSearchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    filterAndRenderArticles();
    headerSearchInput.focus();
  });

  // Reset Search Status Bar Button
  resetSearchBtn.addEventListener("click", () => {
    headerSearchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    filterAndRenderArticles();
  });

  // Empty State Reset Button
  emptyResetBtn.addEventListener("click", () => {
    headerSearchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    currentCategory = "All";

    // Reset pills UI
    document.querySelectorAll(".category-pill").forEach(pill => pill.classList.remove("active"));
    const allPill = document.querySelector('.category-pill[data-category="All"]');
    if (allPill) allPill.classList.add("active");

    filterAndRenderArticles();
  });

  // Theme Switcher Toggle Button
  themeToggleBtn.addEventListener("click", toggleTheme);

  // Bookmarks Nav Button
  navBookmarksBtn.addEventListener("click", () => {
    currentCategory = "Bookmarks";
    
    // Update active pill UI
    document.querySelectorAll(".category-pill").forEach(pill => pill.classList.remove("active"));
    const bookmarkPill = document.querySelector(".bookmark-pill");
    if (bookmarkPill) bookmarkPill.classList.add("active");

    filterAndRenderArticles();
    
    // Smooth scroll to news section
    document.getElementById("news-section").scrollIntoView({ behavior: "smooth" });
  });

  // Hero Section CTA Bookmarks Button
  heroBookmarksBtn.addEventListener("click", () => {
    navBookmarksBtn.click();
  });

  // Modal Close Button & Overlay Click
  modalCloseBtn.addEventListener("click", closeModal);
  articleModal.addEventListener("click", (e) => {
    if (e.target === articleModal) closeModal();
  });

  // Keyboard Navigation: Escape key closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && articleModal.classList.contains("active")) {
      closeModal();
    }
  });

  // Mobile Menu Drawer Toggle
  mobileMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Footer Category Quick Links
  document.querySelectorAll(".footer-cat-link").forEach(link => {
    link.addEventListener("click", (e) => {
      const cat = link.getAttribute("data-cat");
      if (cat) {
        currentCategory = cat;
        
        // Activate matching pill
        document.querySelectorAll(".category-pill").forEach(pill => pill.classList.remove("active"));
        const matchingPill = document.querySelector(`.category-pill[data-category="${cat}"]`);
        if (matchingPill) matchingPill.classList.add("active");

        filterAndRenderArticles();
      }
    });
  });

  // Back to Top Floating Button Scroll Listener
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// Start application when DOM Content is fully loaded
document.addEventListener("DOMContentLoaded", init);
