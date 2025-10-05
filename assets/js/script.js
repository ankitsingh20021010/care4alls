/* ================================
   NGO Website – script.js
   Author: Ankit Singh
   ================================ */

/* ===== NAVBAR TOGGLE (Mobile) ===== */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  navToggle.classList.toggle("toggle");
});

/* ===== SMOOTH SCROLL ===== */
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* ===== GALLERY LIGHTBOX ===== */
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

galleryItems.forEach(item => {
  item.addEventListener("click", e => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = item.querySelector("img").src;
    
    // Clear previous image
    while(lightbox.firstChild){
      lightbox.removeChild(lightbox.firstChild);
    }
    
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", e => {
  if(e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});

/* ===== SIMPLE CONTACT FORM ALERT ===== */
const contactForm = document.querySelector("#contact-form");
if(contactForm){
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for contacting us! We will reach you soon.");
    contactForm.reset();
  });
}

/* ===== OPTIONAL: STICKY HEADER ON SCROLL ===== */
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
