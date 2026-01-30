const heroStatsData = [
  {
    label: "Frontend launches",
    metric: 6,
    suffix: "+",
    detail: "React & Astro projects in production"
  },
  {
    label: "Stacks mastered",
    metric: 4,
    suffix: "",
    detail: "React · Astro · NestJS · Docker"
  },
  {
    label: "42 curriculum",
    metric: 3,
    suffix: " yrs",
    detail: "Continuous learning & pair programming"
  }
];

const experienceData = [
  {
    role: "Frontend Developer",
    company: "Agenz",
    period: "2025 – 2026",
    location: "Casablanca",
    highlights: [
      "Developed and maintained React & Astro design systems.",
      "Translated Figma specs to code with minimal CSS debt.",
      "Handled complex forms (image uploads, multi-step validation).",
      "Boosted performance and accessibility (Lighthouse 90+)."
    ],
    stack: ["React", "Astro", "TypeScript", "Figma"]
  },
  {
    role: "Full-stack Intern",
    company: "Chari",
    period: "Jul. 2024 – Jan. 2025",
    location: "Casablanca",
    highlights: [
      "Contributed to cartecadeau.ma, a live gift-card marketplace.",
      "Shipped frontend and backend features with modern JavaScript.",
      "Built responsive interfaces centered on user experience.",
      "Worked closely with product and QA teams."
    ],
    stack: ["React", "NestJS", "REST", "Docker"]
  }
];

const projectsData = [
  {
    title: "Real-time Chat App",
    description: "Instant messaging experience with live presence and offline handling.",
    impact: "Optimized for hundreds of messages per minute via WebSocket.",
    stack: ["React", "WebSocket", "Zustand"],
    category: "frontend",
    year: 2025,
    link: "https://github.com/mlalouli"
  },
  {
    title: "Inception",
    description: "Docker multi-service architecture for scale-ready apps.",
    impact: "Automated dev/prod environments with lean CI.",
    stack: ["Docker", "Nginx", "Shell"],
    category: "platform",
    year: 2024,
    link: "https://github.com/mlalouli"
  },
  {
    title: "User Profile System",
    description: "Secure NestJS API for managing user profiles.",
    impact: "Robust auth, server-side validation, and Swagger docs.",
    stack: ["NestJS", "PostgreSQL", "REST"],
    category: "platform",
    year: 2024,
    link: "https://github.com/mlalouli"
  },
  {
    title: "ft_irc",
    description: "C++ IRC server with low-level networking.",
    impact: "Multi-client support, RFC commands, and detailed logs.",
    stack: ["C++", "Networking", "Sockets"],
    category: "systems",
    year: 2023,
    link: "https://github.com/mlalouli"
  }
];

const skillGroups = [
  {
    title: "Frontend",
    summary: "React.js, Next.js, Astro, Vue.js",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind", "CSS Modules"]
  },
  {
    title: "Backend & APIs",
    summary: "NestJS, Node.js, REST APIs",
    items: ["Authentication", "File uploads", "Validation", "API testing"]
  },
  {
    title: "Tooling",
    summary: "Git, GitHub, Docker",
    items: ["Lean CI/CD", "Design tokens", "Storybook", "Lightweight monitoring"]
  },
  {
    title: "Soft skills",
    summary: "Collaboration & ownership",
    items: ["Problem solving", "Communication", "Time management", "Creativity"]
  }
];

const educationData = [
  {
    title: "42 School Certification",
    school: "1337 – 42 Network",
    period: "2022 – present",
    details: "Peer-learning path with system and web projects."
  },
  {
    title: "SMI: Computer Science",
    school: "Faculté Polydisciplinaire Khouribga",
    period: "2018 – 2022",
    details: "Algorithms, data structures, mathematics."
  },
  {
    title: "Baccalauréat in Mathematical Sciences",
    school: "Lycée Mokhtar Soussi",
    period: "2017 – 2018",
    details: "Track A, honors."
  }
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Intermediate" }
];

const passions = [
  "Web development",
  "UI/UX design",
  "Continuous learning",
  "Product discovery"
];

const testimonials = [
  {
    quote:
      "Meryem demonstrated strong React and Next.js mastery, embraced Astro quickly, and leveraged AI tools like GitHub Copilot with discernment to boost both velocity and quality.",
    highlights: [
      "Adapted to new frameworks with perseverance and curiosity",
      "Integrated seamlessly into a fast-paced, collaborative squad",
      "Used Anthropic/OpenAI models wisely to enhance productivity"
    ],
    author: "Badr Belkeziz",
    role: "CTO, Agenz",
    contact: {
      phone: "+212 6 80 81 56 34",
      email: "b.belkeziz@agenz.ma",
      location: "Technopark, Casablanca",
      date: "Jan 23, 2026"
    }
  }
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const heroStatsNode = document.querySelector("[data-hero-stats]");
if (heroStatsNode) {
  heroStatsNode.innerHTML = heroStatsData
    .map(
      (stat) => `
        <article class="stat-card animate-on-scroll">
          <small>${stat.label}</small>
          <strong data-count-target="${stat.metric}" data-count-suffix="${stat.suffix}">0</strong>
          <p>${stat.detail}</p>
        </article>
      `
    )
    .join("");
}

const experienceNode = document.querySelector("[data-experience]");
if (experienceNode) {
  experienceNode.innerHTML = experienceData
    .map(
      (item) => `
        <article class="timeline-card animate-on-scroll">
          <h3>${item.role} · ${item.company}</h3>
          <p class="meta">${item.period} · ${item.location}</p>
          <ul>
            ${item.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
          </ul>
          <div class="chip-row">
            ${item.stack.map((tool) => `<span class="chip">${tool}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

const projectsNode = document.querySelector("[data-projects]");
const filterButtons = document.querySelectorAll("[data-filter]");
let activeFilter = "all";

const renderProjects = () => {
  if (!projectsNode) return;
  const filtered =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  projectsNode.innerHTML = filtered
    .map(
      (project) => `
        <article class="project-card animate-on-scroll">
          <div>
            <p class="eyebrow">${project.year}</p>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="muted">${project.impact}</p>
          </div>
          <div class="chip-row">
            ${project.stack.map((item) => `<span class="chip">${item}</span>`).join("")}
          </div>
          <a class="btn ghost" href="${project.link}" target="_blank" rel="noreferrer">
            View code
          </a>
        </article>
      `
    )
    .join("");
};

renderProjects();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "all";
    filterButtons.forEach((btn) => btn.classList.remove("chip-active"));
    button.classList.add("chip-active");
    renderProjects();
  });
});

const skillNode = document.querySelector("[data-skill-groups]");
if (skillNode) {
  skillNode.innerHTML = skillGroups
    .map(
      (group) => `
        <article class="skill-card animate-on-scroll">
          <p class="eyebrow">${group.title}</p>
          <h3>${group.summary}</h3>
          <ul>
            ${group.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

const educationNode = document.querySelector("[data-education]");
if (educationNode) {
  educationNode.innerHTML = educationData
    .map(
      (school) => `
        <article class="timeline-card animate-on-scroll">
          <h3>${school.title}</h3>
          <p class="meta">${school.school} · ${school.period}</p>
          <p>${school.details}</p>
        </article>
      `
    )
    .join("");
}

const languageNode = document.querySelector("[data-languages]");
if (languageNode) {
  languageNode.innerHTML = languages
    .map((lang) => `<span class="animate-on-scroll">${lang.name} · ${lang.level}</span>`)
    .join("");
}

const passionNode = document.querySelector("[data-passions]");
if (passionNode) {
  passionNode.innerHTML = passions
    .map((tag) => `<span class="animate-on-scroll subtle-pill">${tag}</span>`)
    .join("");
}

const testimonialNode = document.querySelector("[data-testimonials]");
if (testimonialNode) {
  testimonialNode.innerHTML = testimonials
    .map(
      (item) => `
        <article class="testimonial-card animate-on-scroll">
          <p class="quote">${item.quote}</p>
          <ul>
            ${item.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
          </ul>
          <div class="testimonial-meta">
            <strong>${item.author}</strong>
            <span>${item.role}</span>
            <span>${item.contact.location} · ${item.contact.date}</span>
            <div class="contact-links">
              <a href="tel:${item.contact.phone.replace(/\s+/g, '')}">${item.contact.phone}</a>
              <a href="mailto:${item.contact.email}">${item.contact.email}</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

const animatedElements = document.querySelectorAll(".animate-on-scroll");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        const counter = entry.target.querySelector("[data-count-target]");
        if (counter && !counter.dataset.counted) {
          animateCounter(counter);
        }
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -40px"
  }
);

animatedElements.forEach((el) => observer.observe(el));

function animateCounter(node) {
  node.dataset.counted = "true";
  const target = Number(node.dataset.countTarget || 0);
  const suffix = node.dataset.countSuffix || "";
  const duration = 1200;
  const start = performance.now();

  const step = (timestamp) => {
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    node.textContent = `${Math.round(eased * target)}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

const typedTarget = document.querySelector("[data-typed]");
const caret = document.querySelector("[data-caret]");
const typedPhrases = [
  "pixel-perfect React interfaces",
  "blazing-fast Astro experiences",
  "collaborative design systems"
];

if (typedTarget) {
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typeLoop = () => {
    const current = typedPhrases[phraseIndex % typedPhrases.length];

    if (prefersReducedMotion) {
      typedTarget.textContent = current;
      return;
    }

    if (!deleting && charIndex <= current.length) {
      typedTarget.textContent = current.slice(0, charIndex++);
    } else if (deleting && charIndex >= 0) {
      typedTarget.textContent = current.slice(0, charIndex--);
    }

    if (charIndex === current.length + 1) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }

    if (charIndex < 0) {
      deleting = false;
      phraseIndex++;
      charIndex = 0;
    }

    const delay = deleting ? 45 : 85;
    setTimeout(typeLoop, delay);
  };

  typeLoop();

  if (caret && !prefersReducedMotion) {
    setInterval(() => caret.classList.toggle("hidden"), 500);
  }
}

const scrollTriggers = document.querySelectorAll("[data-scroll-target], .nav-links a[href^='#']");
scrollTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    const targetSelector = trigger.getAttribute("data-scroll-target") || trigger.getAttribute("href");
    if (!targetSelector) return;
    const section = document.querySelector(targetSelector);
    section?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
});

const orbs = document.querySelectorAll("[data-orb]");
if (orbs.length && !prefersReducedMotion) {
  const orbSettings = Array.from(orbs).map((orb, index) => ({
    element: orb,
    radius: 40 + index * 30,
    speed: 0.0005 + index * 0.0002,
    offset: index * 90
  }));

  const animateOrbs = (timestamp) => {
    orbSettings.forEach(({ element, radius, speed, offset }) => {
      const angle = timestamp * speed + offset;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      element.style.transform = `translate(${x}px, ${y}px)`;
    });
    requestAnimationFrame(animateOrbs);
  };

  requestAnimationFrame(animateOrbs);
}

if (prefersReducedMotion) {
  caret?.classList.remove("hidden");
  orbs.forEach((orb) => {
    orb.style.opacity = "0.35";
  });
}

const MAX_RIPPLES = 10;
const activeRipples = [];

const spawnRipple = (x, y) => {
  const ripple = document.createElement("span");
  ripple.className = "click-ripple";
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  document.body.appendChild(ripple);
  activeRipples.push(ripple);

  if (activeRipples.length > MAX_RIPPLES) {
    const old = activeRipples.shift();
    old?.remove();
  }

  ripple.addEventListener(
    "animationend",
    () => {
      ripple.remove();
      const index = activeRipples.indexOf(ripple);
      if (index >= 0) {
        activeRipples.splice(index, 1);
      }
    },
    { once: true }
  );
};

if (!prefersReducedMotion) {
  window.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    spawnRipple(event.clientX, event.clientY);
  });
}
