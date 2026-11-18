/**
 * Logix Software House - Global JavaScript Utilities
 * Handles Navigation, Mobile Drawer, Sticky Scroll, and Toasts
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileDrawer();
  highlightActiveNav();
});

// Sticky Header & Scroll Effects
function initNavbar() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

// Mobile Hamburger Menu Drawer
function initMobileDrawer() {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const drawer = document.querySelector(".mobile-menu-drawer");

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      drawer.classList.remove("open");
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      document.body.style.overflow = "";
    } else {
      drawer.classList.add("open");
      toggleBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      document.body.style.overflow = "hidden";
    }
  });

  // Close when clicking a link
  const links = drawer.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      document.body.style.overflow = "";
    });
  });
}

// Automatically highlight current active page in navigation
function highlightActiveNav() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Toast Notification Utility
window.showToast = function(message, type = "success") {
  let toast = document.querySelector(".toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }

  const icon = type === "success" 
    ? '<i class="fa-solid fa-circle-check"></i>' 
    : '<i class="fa-solid fa-circle-info"></i>';

  toast.className = `toast-notification toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
  `;

  setTimeout(() => toast.classList.add("show"), 50);

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
};


/* ==========================================================================
   INTERACTIVE ANIMATION LOGIC:
   - Full Screen Kinetic Text Rotator & Mouse Aura
   - Horizontal Scroll Controller (Buttons + Dragging + Wheel)
   - Image Reveal Intersection Observer
   - 3D Parallax Mouse Card Tilt
   - Interactive 3D Product Showcase Tabs
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initFullTextAnimation();
  initMouseAura();
  initHorizontalScroll();
  initImageReveal();
  init3DCardTilt();
  initProductShowcase();
});

// 1. Kinetic Text Rotator
function initFullTextAnimation() {
  const flipElement = document.getElementById("kinetic-flip-word");
  if (!flipElement) return;

  const words = ["ENTERPRISE SAAS", "AUTONOMOUS AI", "NEXT-GEN CLOUD", "MOBILE ECOSYSTEMS", "REACT & TYPESCRIPT"];
  let currentIndex = 0;

  setInterval(() => {
    flipElement.style.opacity = "0";
    flipElement.style.transform = "translateY(12px)";
    flipElement.style.transition = "all 0.35s ease";

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % words.length;
      flipElement.textContent = words[currentIndex];
      flipElement.style.opacity = "1";
      flipElement.style.transform = "translateY(0)";
    }, 350);
  }, 2800);
}

// 2. Interactive Mouse Aura
function initMouseAura() {
  const aura = document.querySelector(".interactive-mouse-aura");
  if (!aura) return;

  window.addEventListener("mousemove", (e) => {
    aura.style.left = `${e.clientX}px`;
    aura.style.top = `${e.clientY}px`;
  }, { passive: true });
}

// 3. Horizontal Scroll Controller
function initHorizontalScroll() {
  const container = document.getElementById("horizontal-track-container");
  const btnLeft = document.getElementById("scroll-left-btn");
  const btnRight = document.getElementById("scroll-right-btn");

  if (!container) return;

  if (btnLeft) {
    btnLeft.addEventListener("click", () => {
      container.scrollBy({ left: -460, behavior: "smooth" });
    });
  }

  if (btnRight) {
    btnRight.addEventListener("click", () => {
      container.scrollBy({ left: 460, behavior: "smooth" });
    });
  }

  // Drag-to-scroll support
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => { isDown = false; });
  container.addEventListener("mouseup", () => { isDown = false; });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  });
}

// 4. Image Reveal Animation with IntersectionObserver
function initImageReveal() {
  const revealWrappers = document.querySelectorAll(".reveal-wrapper");
  if (revealWrappers.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  revealWrappers.forEach(el => observer.observe(el));
}

// 5. 3D Parallax Perspective Mouse Tilt
function init3DCardTilt() {
  const cards = document.querySelectorAll(".tilt-card-3d");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  });
}

// 6. Interactive 3D Product Showcase
const PRODUCT_SHOWCASE_DATA = {
  cloudmesh: {
    title: "Logix CloudMesh™",
    subtitle: "Autonomous Cloud Infrastructure Orchestration",
    desc: "A distributed zero-trust mesh that deploys, monitors, and autoscales Kubernetes microservices across multi-region AWS and GCP with zero configuration overhead.",
    badge: "Cloud Infrastructure",
    metrics: [
      { label: "Deployment Speed", val: "0.4s" },
      { label: "Container Uptime", val: "99.99%" },
      { label: "Traffic Handled", val: "10M+/day" }
    ],
    code: `// Logix CloudMesh - Automated Multi-Cloud Cluster Provisioning
import { CloudMesh, ClusterConfig } from '@logix/cloudmesh';

const mesh = new CloudMesh({
  region: 'us-west-2',
  resilience: 'multi-az',
  autoScale: true,
  zeroTrustPolicy: 'strict'
});

await mesh.deployCluster({
  serviceName: 'enterprise-core-api',
  minReplicas: 3,
  maxReplicas: 50,
  tls: 'auto-lets-encrypt'
});
console.log('Cluster live across 3 availability zones!');`
  },
  synapse: {
    title: "Synapse AI Studio™",
    subtitle: "Enterprise Agentic LLM & RAG Engine",
    desc: "A proprietary semantic intelligence pipeline that transforms internal documentation, Jira, and databases into autonomous, hallucination-resistant engineering agents.",
    badge: "Generative AI & LLMs",
    metrics: [
      { label: "Query Latency", val: "18ms" },
      { label: "Embedding Precision", val: "99.4%" },
      { label: "Context Window", val: "128k Tokens" }
    ],
    code: `// Synapse AI - Enterprise Vector Retrieval & Agentic Execution
import { SynapseAgent, VectorDB } from '@logix/synapse-ai';

const agent = new SynapseAgent({
  model: 'synapse-enterprise-v4',
  vectorStore: VectorDB.PineconeCluster,
  verificationGuardrails: true
});

const response = await agent.query({
  prompt: 'Synthesize sprint delivery timeline from Q4 technical specs',
  temperature: 0.2
});
console.log('Validated Response:', response.markdown);`
  },
  nexus: {
    title: "Nexus Token System™",
    subtitle: "Cross-Platform Universal Design System",
    desc: "Synchronized design tokens mapped from Figma directly to React, React Native, and Tailwind CSS. Guarantees 100% pixel-perfect brand consistency across every viewport.",
    badge: "UI/UX & Frontend",
    metrics: [
      { label: "Component Sync", val: "Instant" },
      { label: "Tokens Managed", val: "1,200+" },
      { label: "Design Drift", val: "0.0%" }
    ],
    code: `// Nexus Design Engine - Universal Tokens
import { ThemeProvider, Button, Card } from '@logix/nexus-ui';

export const SaaSExperience = () => (
  <ThemeProvider mode="dark" variant="emerald-glow">
    <Card elevation="glass" radius="rounded-2xl">
      <Button variant="gradient-primary" ripple={true}>
        Deploy Instant Experience
      </Button>
    </Card>
  </ThemeProvider>
);`
  },
  hyperflow: {
    title: "HyperFlow CI/CD™",
    subtitle: "Continuous Testing & Instant Deployment Pipeline",
    desc: "Self-healing deployment orchestrator with automated Playwright and TypeScript test runners that halts regression bugs before they ever touch production branches.",
    badge: "DevOps & Quality",
    metrics: [
      { label: "Build Time", val: "42s" },
      { label: "Test Coverage", val: "100%" },
      { label: "Rollback Time", val: "Immediate" }
    ],
    code: `// HyperFlow Pipeline Configuration
export default definePipeline({
  triggers: ['push:main', 'pull_request'],
  stages: [
    { name: 'TypeScript Static Analysis', cmd: 'tsc --noEmit' },
    { name: 'Automated Playwright E2E', cmd: 'npm run test:e2e' },
    { name: 'Canary Deployment', target: 'production-green' }
  ]
});`
  }
};

function initProductShowcase() {
  const pills = document.querySelectorAll(".showcase-pill");
  const titleEl = document.getElementById("showcase-title");
  const subtitleEl = document.getElementById("showcase-subtitle");
  const descEl = document.getElementById("showcase-desc");
  const badgeEl = document.getElementById("showcase-badge");
  const codeEl = document.getElementById("showcase-code");
  const metricsContainer = document.getElementById("showcase-metrics");

  if (!pills.length || !titleEl) return;

  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const key = pill.getAttribute("data-product");
      const data = PRODUCT_SHOWCASE_DATA[key];
      if (!data) return;

      titleEl.textContent = data.title;
      subtitleEl.textContent = data.subtitle;
      descEl.textContent = data.desc;
      badgeEl.textContent = data.badge;
      codeEl.textContent = data.code;

      if (metricsContainer) {
        metricsContainer.innerHTML = data.metrics.map(m => `
          <div style="background: rgba(255,255,255,0.04); padding: 12px 18px; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.06); text-align: center;">
            <div style="font-size: 1.4rem; font-weight: 800; color: #fff;">${m.val}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${m.label}</div>
          </div>
        `).join("");
      }
    });
  });
}


/* ==========================================================================
   NEXT-GEN SCRIPT SUITE:
   1. Website Preloader with 0-100% Counter
   2. Smooth Magnetic Custom Cursor
   3. Split Text Staggered Reveal Engine
   4. Scrollytelling Progress Tracker
   5. Stacking Cards Scroll Physics
   6. 3D Card Gallery Carousel Controller
   7. Fullscreen Menu Overlay Toggle
   8. Page Transition Interceptor
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initWebsitePreloader();
  initCustomMagneticCursor();
  initSplitTextEngine();
  initScrollytelling();
  initStackingCards();
  init3DCardGallery();
  initFullscreenMenu();
  initPageTransitions();
});

// 1. Website Preloader
function initWebsitePreloader() {
  const preloader = document.querySelector(".site-preloader");
  const counter = document.querySelector(".preloader-counter");
  const progressFill = document.querySelector(".preloader-progress-fill");

  if (!preloader || !counter) return;

  let current = 0;
  const duration = 1400; // 1.4 seconds total
  const stepTime = 16;
  const stepIncrement = 100 / (duration / stepTime);

  const timer = setInterval(() => {
    current += stepIncrement;
    if (current >= 100) {
      current = 100;
      clearInterval(timer);
      counter.textContent = "100%";
      if (progressFill) progressFill.style.width = "100%";

      setTimeout(() => {
        preloader.classList.add("loaded");
        triggerInitialSplitText();
      }, 350);
    } else {
      const displayVal = Math.floor(current);
      counter.textContent = `${displayVal}%`;
      if (progressFill) progressFill.style.width = `${displayVal}%`;
    }
  }, stepTime);
}

// 2. Smooth Magnetic Custom Cursor
function initCustomMagneticCursor() {
  const dot = document.querySelector(".custom-cursor-dot");
  const ring = document.querySelector(".custom-cursor-ring");

  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  }, { passive: true });

  // Smooth lerp for ring follower
  function renderCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Expand ring on interactive elements
  const interactiveElements = document.querySelectorAll("a, button, input, select, textarea, .horizontal-card, .tilt-card-3d, .gallery-3d-card");
  interactiveElements.forEach(el => {
    el.addEventListener("mouseenter", () => ring.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => ring.classList.remove("cursor-hover"));
  });
}

// 3. Split Text Staggered Reveal Engine
function initSplitTextEngine() {
  const targets = document.querySelectorAll(".split-text-target");

  targets.forEach(target => {
    const text = target.textContent.trim();
    const words = text.split(" ");
    target.textContent = "";

    words.forEach((word) => {
      const lineSpan = document.createElement("span");
      lineSpan.className = "split-text-line";

      const chars = word.split("");
      chars.forEach((ch, ci) => {
        const charSpan = document.createElement("span");
        charSpan.className = "split-char";
        charSpan.textContent = ch;
        charSpan.style.transitionDelay = `${ci * 0.035}s`;
        lineSpan.appendChild(charSpan);
      });

      target.appendChild(lineSpan);
      target.appendChild(document.createTextNode(" "));
    });
  });

  // Observe and trigger animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("split-text-animated");
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(t => observer.observe(t));
}

function triggerInitialSplitText() {
  const heroes = document.querySelectorAll(".fullscreen-text-hero .split-text-target");
  heroes.forEach(h => h.classList.add("split-text-animated"));
}

// 4. Scrollytelling Progress Tracker
function initScrollytelling() {
  const steps = document.querySelectorAll(".scrolly-step-card");
  const displayTitle = document.getElementById("scrolly-active-title");
  const displayDesc = document.getElementById("scrolly-active-desc");
  const displayBadge = document.getElementById("scrolly-active-badge");
  const displayDiagram = document.getElementById("scrolly-active-diagram");

  if (!steps.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        steps.forEach(s => s.classList.remove("active-step"));
        entry.target.classList.add("active-step");

        const title = entry.target.getAttribute("data-title");
        const desc = entry.target.getAttribute("data-desc");
        const badge = entry.target.getAttribute("data-badge");
        const diagram = entry.target.getAttribute("data-diagram");

        if (displayTitle) displayTitle.textContent = title;
        if (displayDesc) displayDesc.textContent = desc;
        if (displayBadge) displayBadge.textContent = badge;
        if (displayDiagram && diagram) displayDiagram.innerHTML = diagram;
      }
    });
  }, { threshold: 0.6 });

  steps.forEach(s => observer.observe(s));
}

// 5. Stacking Cards Pinning & Scaling
function initStackingCards() {
  const cards = document.querySelectorAll(".stacked-card-item");
  if (!cards.length) return;

  window.addEventListener("scroll", () => {
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      if (rect.top <= 140) {
        const factor = Math.max(0.92, 1 - (140 - rect.top) * 0.0003);
        card.style.transform = `scale(${factor})`;
      } else {
        card.style.transform = "scale(1)";
      }
    });
  }, { passive: true });
}

// 6. 3D Card Gallery Carousel Controller
let currentGalleryAngle = 0;
function init3DCardGallery() {
  const stage = document.getElementById("gallery-3d-stage");
  const prevBtn = document.getElementById("gallery-prev-btn");
  const nextBtn = document.getElementById("gallery-next-btn");
  const cards = document.querySelectorAll(".gallery-3d-card");

  if (!stage || !cards.length) return;

  const totalCards = cards.length;
  const angleStep = 360 / totalCards;
  const radius = 380; // Distance from center

  cards.forEach((card, i) => {
    const cardAngle = i * angleStep;
    card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
  });

  function rotateStage(newAngle) {
    currentGalleryAngle = newAngle;
    stage.style.transform = `rotateY(${currentGalleryAngle}deg)`;
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      rotateStage(currentGalleryAngle + angleStep);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      rotateStage(currentGalleryAngle - angleStep);
    });
  }

  // Click on card rotates to front
  cards.forEach((card, i) => {
    card.addEventListener("click", () => {
      rotateStage(-(i * angleStep));
    });
  });
}

// 7. Fullscreen Menu Animation
function initFullscreenMenu() {
  const openBtn = document.getElementById("btn-open-fullscreen-menu");
  const overlay = document.getElementById("fullscreen-menu-overlay");
  const closeBtn = document.getElementById("btn-close-fs-menu");

  if (!overlay) return;

  function openMenu() {
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (openBtn) openBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  // Close on ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) {
      closeMenu();
    }
  });

  // Close when clicking a link
  const links = overlay.querySelectorAll("a");
  links.forEach(l => l.addEventListener("click", closeMenu));
}

// 8. Page Transition Animation
function initPageTransitions() {
  const curtain = document.querySelector(".page-transition-curtain");
  if (!curtain) return;

  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    const href = link.getAttribute("href");
    // Only intercept internal html links (not anchors or external)
    if (href && href.endsWith(".html") && !href.startsWith("http") && !href.startsWith("#")) {
      link.addEventListener("click", (e) => {
        // Allow ctrl+click or meta+click to open in new tab
        if (e.ctrlKey || e.metaKey || link.target === "_blank") return;

        e.preventDefault();
        curtain.classList.add("animating");

        setTimeout(() => {
          window.location.href = href;
        }, 400);
      });
    }
  });
}
