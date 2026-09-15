// Lake Country Local Produce (LCLP) — site interactions

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.textContent = isOpen ? "✕" : "☰";
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.textContent = "☰";
      });
    });
  }

  // Back-to-top button
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("visible", window.scrollY > 500);
    });
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Newsletter signup (front-end only, no backend wired up yet)
  const newsletterForm = document.querySelector(".newsletter-form");
  const newsletterStatus = document.querySelector(".newsletter-status");
  if (newsletterForm && newsletterStatus) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector("input[type='email']");
      const email = emailInput.value.trim();
      if (!email) return;
      newsletterStatus.textContent = `Thanks! We'll send fresh-picked updates to ${email}.`;
      newsletterForm.reset();
    });
  }

  // Contact form (front-end only, no backend wired up yet)
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const statusEl = contactForm.querySelector(".form-status");
      if (statusEl) {
        statusEl.textContent = "Thanks for reaching out — we'll get back to you soon!";
      }
      contactForm.reset();
    });
  }

  // Highlight current nav section on scroll
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".main-nav a");

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              link.style.color = link.getAttribute("href") === `#${id}` ? "var(--orange-dark)" : "";
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // Footer year
  const yearEl = document.querySelector("#footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
