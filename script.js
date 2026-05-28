document.addEventListener("DOMContentLoaded", () => {
  // 1. EFEITO GLASS NO HEADER AO FAZER SCROLL
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 2. MENU MOBILE RESPONSIVO
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const icon = menuToggle.querySelector("i");
    if (navLinks.classList.contains("open")) {
      icon.classList.replace("fa-bars-staggered", "fa-xmark");
    } else {
      icon.classList.replace("fa-xmark", "fa-bars-staggered");
    }
  });

  // Fechar menu ao clicar em algum link interno
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle
        .querySelector("i")
        .classList.replace("fa-xmark", "fa-bars-staggered");
    });
  });

  // 3. ANIMAÇÕES MODERNAS DE SCROLL (INTERSECTION OBSERVER)
  const revealElements = document.querySelectorAll(".scroll-reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  // 4. CARROSSEL DE PROJETOS SMOOTH
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".next-btn");
  const prevButton = document.querySelector(".prev-btn");
  const dotsNav = document.querySelector(".carousel-nav");
  const dots = Array.from(dotsNav.children);

  let currentIndex = 0;

  const updateSlidePosition = (index) => {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot) => dot.classList.remove("current-indicator"));
    dots[index].classList.add("current-indicator");

    currentIndex = index;
  };

  nextButton.addEventListener("click", () => {
    let index = currentIndex + 1;
    if (index >= slides.length) index = 0;
    updateSlidePosition(index);
  });

  prevButton.addEventListener("click", () => {
    let index = currentIndex - 1;
    if (index < 0) index = slides.length - 1;
    updateSlidePosition(index);
  });

  dotsNav.addEventListener("click", (e) => {
    const targetDot = e.target.closest("button");
    if (!targetDot) return;
    const targetIndex = dots.indexOf(targetDot);
    updateSlidePosition(targetIndex);
  });

  // 5. BOTÃO MOSTRAR MAIS NOS CARDS DE PROJETOS
  const moreButtons = document.querySelectorAll(".btn-more");

  moreButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const card = e.target.closest(".project-card");
      card.classList.toggle("expanded");

      const textNode = button.childNodes[0];
      if (card.classList.contains("expanded")) {
        textNode.textContent = "Mostrar menos ";
      } else {
        textNode.textContent = "Mostrar mais ";
      }
    });
  });

  // 6. ALTERNADOR DE ABAS (CONTACTE-ME)
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".contact-tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTabId = button.getAttribute("data-target");

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      button.classList.add("active");
      document.getElementById(targetTabId).classList.add("active");
    });
  });
});
