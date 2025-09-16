// Toggle drawer
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const dynamicSection = document.getElementById("dynamic-section");
const heroSection = document.querySelector(".main-header");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// =============================
// Section Content with content-box
// =============================
const sections = {
  about: `
    <section class="section about">
      <div class="content-box">
        <h2>About Us</h2>
        <p>Founded in 1997 by <b>Mr. Sanjay Gupta</b>, Shri Nath Ji Bag Industries has been delivering quality and durable bags for more than 28 years.</p>
      </div>
    </section>
  `,
  team: `
    <section class="section team">
      <div class="content-box">
        <h2>Our Team</h2>
        <p>In 2025, <b>Parichay Gupta</b> joined as Co-Founder, bringing new innovations while continuing our legacy.</p>
      </div>
    </section>
  `,
  journey: `
    <section class="section journey">
      <div class="content-box">
        <h2>Our Journey</h2>
        <p>From a small start in Kanpur to becoming a trusted name in bag manufacturing, our journey reflects dedication, quality, and customer trust.</p>
      </div>
    </section>
  `,
  products: `
    <section class="section products">
      <div class="content-box">
        <h2>Our Products</h2>
        <p>We manufacture School Bags, Travel Bags, Office Bags, and Custom Solutions for industries & events.</p>
        
        <!-- Gallery inside Products -->
        <div class="carousel">
          <button class="prev">&#10094;</button>
          <div class="carousel-track">
            <img src="assets/bag1.jpg" alt="Bag 1" class="active">
            <img src="assets/bag2.jpg" alt="Bag 2">
            <img src="assets/bag3.jpg" alt="Bag 3">
            <img src="assets/bag4.jpg" alt="Bag 4">
            <img src="assets/bag5.jpg" alt="Bag 4">
            <img src="assets/bag6.jpg" alt="Bag 4">
          </div>
          <button class="next">&#10095;</button>
        </div>
      </div>
    </section>
  `,
  contact: `
    <section class="section contact" id="contact">
      <div class="content-box">
        <h2>Contact Us</h2>
        <p>Email: info@shrjnathbags.com</p>
        <p>Phone: +91-XXXXXXXXXX</p>
        <p>Location: Kanpur, Uttar Pradesh, India</p>
      </div>
    </section>
  `
};

// =============================
// Drawer Menu Navigation
// =============================
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const section = e.target.getAttribute("data-section");

    if (sections[section]) {
      heroSection.style.display = "none";
      dynamicSection.innerHTML = sections[section];
      window.scrollTo({ top: 0, behavior: "smooth" });

      if (section === "products") {
        initCarousel(); // initialize carousel when Products loads
      }
    }

    // Home case
    if (e.target.id === "homeLink") {
      heroSection.style.display = "flex";
      dynamicSection.innerHTML = "";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    navLinks.classList.remove("show");
  });
});

// =============================
// Login Popup
// =============================
const loginLink = document.getElementById("loginLink");
const popup = document.getElementById("loginPopup");
const closeBtn = document.querySelector(".popup .close");

loginLink.addEventListener("click", e => {
  e.preventDefault();
  popup.style.display = "flex";
  navLinks.classList.remove("show");
});

closeBtn.addEventListener("click", () => popup.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === popup) popup.style.display = "none";
});

// =============================
// Navbar Shadow on Scroll
// =============================
window.addEventListener("scroll", () => {
  document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 20);
});

// =============================
// Carousel Logic (Manual + Auto)
// =============================
let carouselIndex = 0;
let autoSlideInterval;

function showSlide(index) {
  const track = document.querySelector(".carousel-track");
  const images = document.querySelectorAll(".carousel-track img");

  if (!track || images.length === 0) return;

  images.forEach(img => img.classList.remove("active"));
  images[index].classList.add("active");
  track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  const images = document.querySelectorAll(".carousel-track img");
  if (images.length === 0) return;
  carouselIndex = (carouselIndex + 1) % images.length;
  showSlide(carouselIndex);
}

function prevSlide() {
  const images = document.querySelectorAll(".carousel-track img");
  if (images.length === 0) return;
  carouselIndex = (carouselIndex - 1 + images.length) % images.length;
  showSlide(carouselIndex);
}

function initCarousel() {
  carouselIndex = 0;
  showSlide(carouselIndex);

  // Manual controls
  document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });
  document.querySelector(".prev").addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  // Auto-slide
  startAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000);
}
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

