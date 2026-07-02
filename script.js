// ============================================
// PRELOADER
// ============================================
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    // পেজ পুরোপুরি লোড হওয়ার পর লোডার হাইড হবে (অল্প delay দেওয়া হলো স্মুথ ট্রানজিশনের জন্য)
    setTimeout(() => {
      preloader.classList.add("hidden");
      // ফেইড আউট অ্যানিমেশন শেষ হওয়ার পর DOM থেকে রিমুভ করে দেওয়া
      setTimeout(() => {
        preloader.remove();
      }, 600);
    }, 500);
  }
});
// as soon as JS runs, remove the no-js safety class
document.documentElement.classList.remove("no-js");

// ============================================
// SCROLL REVEAL (Moved to Top to fix ReferenceError)
// ============================================
let observer;
function observeReveal() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
  }
  document
    .querySelectorAll(".reveal:not(.in)")
    .forEach((el) => observer.observe(el));
}

// safety net: force-reveal anything the observer missed after a short delay
setTimeout(() => {
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
    el.classList.add("in");
  });
}, 1200);

// ============================================
// PROJECT DATA
// ============================================
const projects = [
  {
    title: "Infinity Horizon — Real Estate Website",
    desc: "A modern, responsive real estate platform with property search, filters for location/BHK/budget, featured listings, agent profiles and testimonials.",
    image: "./assets/infinity.jpeg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "webdev",
    links: [{ label: "Live Site", url: "https://sdlc-6d9t.vercel.app/" }],
  },
  {
    title: "Subscription Grocery Website",
    desc: "Premium grocery subscription concept with homepage, categorized shop page, flexible subscription plans and order flow.",
    image: "./assets/subGrocery.jpeg",
    tags: ["Figma", "UI/UX"],
    category: "uiux",
    links: [{ label: "View Design", url: "https://www.figma.com/design/ERxYB1KZx10aCNfy2GVgrT/Untitled?node-id=0-1" }],
  },
  {
    title: "FURNIRO — Premium Furniture",
    desc: "Fully responsive furniture e-commerce site with dynamic cart, checkout flow and brand storytelling pages.",
    image: "./assets/furniro.jpeg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "webdev",
    links: [{ label: "View Project", url: "https://duttaakshay.github.io/Furniro-Final-Project/" }],
  },
  {
    title: "Doctor Appointment Booking",
    desc: "Multi-page booking platform for finding doctors, viewing profiles and confirming appointments, designed end-to-end in Figma.",
    image: "./assets/zdoc.jpeg",
    tags: ["Figma", "UI/UX"],
    category: "uiux",
    links: [{ label: "View Design", url: "https://www.figma.com/design/w86tsr1yer5KwTBichP1bn/Untitled?node-id=0-1&p=f" }],
  },
  {
    title: "BECON ONE CAPITAL",
    desc: "Corporate finance website concept designed in Figma and built out with HTML, CSS and JavaScript.",
    image: "./assets/beacon.jpeg",
    tags: ["HTML", "CSS", "JS", "Figma"],
    category: "webdev",
    links: [{ label: "View Project", url: "https://duttaakshay.github.io/final-assessment/" }],
  },
  {
    title: "Beauty Parlour Website",
    desc: "Elegant booking platform for beauty services with a soft pink/beige palette and refined typography.",
    image: "./assets/beauty.jpeg",
    tags: ["Figma", "UI/UX"],
    category: "uiux",
    links: [{ label: "View Design", url: "https://www.figma.com/design/wojLDmGLIo1A6SRWQLhpcM/Untitled?node-id=0-1&p=f" }],
  },
  {
    title: "CHARIX — Charity Platform",
    desc: "A donor-and-volunteer connection platform designed to make giving simple, transparent and impactful.",
    image: "./assets/charix.jpeg",
    tags: ["Figma", "UI/UX"],
    category: "uiux",
    links: [{ label: "View Design", url: "https://www.figma.com/design/wojLDmGLIo1A6SRWQLhpcM/Untitled?node-id=0-1&p=f" }],
  },
  {
    title: "Future Real Estate",
    desc: "Property platform homepage with responsive layout highlighting premium listings and trending locations.",
    image: "./assets/realEstate.jpeg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "webdev",
    links: [{ label: "View Project", url: "https://www.figma.com/design/IDA1iK2eG8tvNaoYnhyRUe/Untitled?node-id=0-1&p=f" }],
  },
  {
    title: "Illustrator Base Project",
    desc: "My first frontend project — an illustration-based landing page designed in Figma and coded in HTML/CSS.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/042/058/009/small/bird-3d-logo-design-shiny-mockup-logo-with-textured-wall-realistic-illustration-vector.jpg",
    tags: ["HTML", "CSS", "Figma"],
    category: "webdev",
    links: [{ label: "View Project", url: "" }],
  },
  {
    title: "EV Cycle Landing Page",
    desc: "Single-page EV cycle concept built on a Bootstrap grid with a considered colour palette and high-quality imagery.",
    image:
      "https://img.magnific.com/free-psd/3d-interface-website-presentation-mockup-isolated_359791-202.jpg",
    tags: ["Figma", "Bootstrap"],
    category: "uiux",
    links: [{ label: "View Design", url: "https://tinyurl.com/Zcgmkdyv" }],
  },
  {
    title: "Educational Logo",
    desc: "Scalable logo mark reflecting knowledge and growth, built in Adobe Illustrator with a Figma mockup pass.",
    image:
      "https://imgs.search.brave.com/44hmADGJs_NaI41PrsVIuj9RXQvhq4k2pKpeSzdTM08/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RzLzQwNC83/OTM3ZjAxOTM5ODYy/NTMuWTNKdmNDdzBP/RFE0TERNM09USXNN/Q3d3LnBuZw",
    tags: ["Illustrator", "Figma"],
    category: "branding",
    links: [{ label: "View Design", url: "https://tinyurl.com/25250224" }],
  },
  {
    title: "Coffee Shop Logo",
    desc: "Brand mark for a coffee shop, designed in Illustrator and presented through a Figma mockup.",
    image:
      "https://imgs.search.brave.com/thXZWMUjt62uhwLhaRnqx4YCNi0uA5DlQXbkNRnaFy8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDcv/MzUxLzA1OC9zbWFs/bC93b21hbi1kcmlu/a2luZy1hLWN1cC1v/Zi1jb2ZmZWUtbG9n/by1kZXNpZ24tY29u/Y2VwdC1mb3ItY29m/ZmVlLXNob3AtdmVj/dG9yLmpwZw",
    tags: ["Illustrator", "Figma"],
    category: "branding",
    links: [{ label: "View Design", url: "https://tinyurl.com/z6htebwe" }],
  },
  {
    title: "Coronavirus Awareness",
    desc: "An informational landing page on staying safe, designed thoughtfully in Adobe Photoshop.",
    image:
      "https://imgs.search.brave.com/B6w37KXZkO3AgENpx8LNfwh7_Vcx3K93uEXQ1HP0_iw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vMzY1d2Vi/cmVzb3VyY2VzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMy9Db3JvbmF2/aXJ1cy1DT1ZJRC0x/OS1QcmV2ZW50aW9u/LUluZm9ybWF0aWNz/LVBTRC5wbmc_cmVz/aXplPTk1MCw2Mzkm/c3NsPTE",
    tags: ["Photoshop"],
    category: "branding",
    links: [{ label: "View Design", url: "https://tinyurl.com/lyt4nlfuq" }],
  },
  {
    title: "COYCLE — Cycle Store",
    desc: "A friendly, colourful cycle store brand and layout for kids and adults, built in Photoshop with an Illustrator logo.",
    image:"https://html.design/uploads/templates/Jetcycle.jpg",
    tags: ["Photoshop", "Illustrator"],
    category: "branding",
    links: [{ label: "View Design", url: "https://tinyurl.com/yobvzdZc" }],
  },
  {
    title: "BLOGR — Blog Platform",
    desc: "Clean, modern blog landing page with a dark header/footer and light content area, designed in Photoshop.",
    image:"https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/ce0f8d1e2b62e79226cf3b9ef6182847ae8dbba1",
    tags: ["Photoshop"],
    category: "branding",
    links: [{ label: "View Design", url: "https://www.behance.net/gallery/245590601/design-blog" }],
  },
];

// ============================================
// RENDER PROJECTS
// ============================================
const grid = document.getElementById("projectGrid");

function initials(title) {
  return (
    title
      .split(" ")
      .filter((w) => /^[A-Z0-9]/.test(w))
      .slice(0, 2)
      .map((w) => w[0])
      .join("") || title[0]
  );
}

function renderProjects(filter) {
  grid.innerHTML = "";
  const list =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  list.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.style.transitionDelay = `${(i % 3) * 0.06}s`;

    const linksHTML = p.links
      .map(
        (l) =>
          `<a class="project-link" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`,
      )
      .join("");

    const thumbContent = p.image
      ? `<img src="${p.image}" alt="${p.title}" class="project-img">`
      : `<span>${initials(p.title)}</span>`;

    card.innerHTML = `
            <div class="project-thumb">${thumbContent}</div>
            <div class="project-body">
                <h3 class="project-title">${p.title}</h3>
                <p class="project-desc">${p.desc}</p>
                <div class="project-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
                <div class="project-links">${linksHTML}</div>
            </div>
        `;
    grid.appendChild(card);
  });

  observeReveal();
}

renderProjects("all");

// filter buttons
document.getElementById("filterBar").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderProjects(btn.dataset.filter);
});

// ============================================
// CURSOR SPOTLIGHT
// ============================================
const spotlight = document.getElementById("spotlight");
window.addEventListener("pointermove", (e) => {
  spotlight.style.setProperty("--x", `${e.clientX}px`);
  spotlight.style.setProperty("--y", `${e.clientY}px`);
});

// ============================================
// NAV: scroll state + mobile toggle
// ============================================
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ============================================
// FOOTER YEAR
// ============================================
document.getElementById("year").textContent = new Date().getFullYear();
