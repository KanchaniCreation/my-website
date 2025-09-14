// Toggle drawer
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const dynamicSection = document.getElementById("dynamic-section");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Section content
const sections = {
  about: `
    <section class="section about">
      <h2>About Us</h2>
      <p>Founded in 1997 by <b>Mr. Sanjay Gupta</b>, Shri Nath Ji Bag Industries has been delivering quality and durable bags for more than 28 years.</p>
    </section>
  `,
  team: `
    <section class="section team">
      <h2>Our Team</h2>
      <p>In 2025, <b>Parichay Gupta</b> joined as Co-Founder, bringing new innovations while continuing our legacy.</p>
    </section>
  `,
  journey: `
    <section class="section journey">
      <h2>Our Journey</h2>
      <p>From a small start in Kanpur to becoming a trusted name in bag manufacturing, our journey reflects dedication, quality, and customer trust.</p>
    </section>
  `,
  products: `
    <section class="section products">
      <h2>Our Products</h2>
      <p>We manufacture School Bags, Travel Bags, Office Bags, and Custom Solutions for industries & events.</p>
    </section>
  `,
  contact: `
    <section class="section contact">
      <h2>Contact Us</h2>
      <p>Email: info@shrjnathbags.com</p>
      <p>Phone: +91-XXXXXXXXXX</p>
      <p>Location: Kanpur, Uttar Pradesh, India</p>
    </section>
  `
};

// Drawer menu click → content replace
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const section = e.target.getAttribute("data-section");
    if (sections[section]) {
      dynamicSection.innerHTML = sections[section];
    }
    navLinks.classList.remove("show"); // menu close
  });
});

// ==========================
// Login Popup Functionality
// ==========================
const loginLink = document.getElementById("loginLink");
const popup = document.getElementById("loginPopup");
const closeBtn = document.querySelector(".popup .close");

// Jab "Login" pe click ho → popup open
loginLink.addEventListener("click", function(e) {
  e.preventDefault();
  popup.style.display = "flex";
  navLinks.classList.remove("show"); // menu close after click
});

// Jab "X" pe click ho → popup close
closeBtn.addEventListener("click", function() {
  popup.style.display = "none";
});

// Agar user background pe click kare → popup close
window.addEventListener("click", function(e) {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
