/* Toggle icon navbar */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/* Scroll section active link */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* Sticky navbar */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

/* Remove toggle icon and navbar when link is clicked */
menuIcon.classList.remove("fa-xmark");
navbar.classList.remove("active");

/* Scroll reveal */
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-content, .portfolio-box, .contact-form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

/* Typed.js */
const typed = new Typed(".multiple-text", {
  strings: ["UI/UX Designer", "Photographer", "Video Editor"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
