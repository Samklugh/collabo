// ========================================
// DHS STUDIO - CUSTOM JAVASCRIPT
// Tailored EXACTLY to your class structure
// ========================================


// ----------------------------------------
// 1. HEADER SCROLL EFFECT (Premium feel)
// ----------------------------------------
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 30) {
    header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.6)";
    header.style.transition = "0.3s ease";
  } else {
    header.style.boxShadow = "none";
  }
});


// ----------------------------------------
// 2. BUTTON HOVER GLOW (Matches your neon/bronze theme)
// Targets ONLY your actual buttons
// ----------------------------------------
const buttons = document.querySelectorAll(
  ".home a, .profile-left a, .about-left a, .music-production .right a, .sound-mixing .right a, .audio-editing .right a, .form button"
);

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-3px)";
    btn.style.boxShadow = "0 0 20px rgba(76, 252, 15, 0.6)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0)";
    btn.style.boxShadow = "none";
  });
});


// ----------------------------------------
// 3. SCROLL REVEAL ANIMATION (For your sections)
// Works with:
// .about-home
// .profile-home
// .main-services
// .main-contact
// ----------------------------------------
const revealSections = document.querySelectorAll(
  ".about-home, .profile-home, .main-services, .main-contact, .music-production, .sound-mixing, .audio-editing"
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 80) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
}

// Initial hidden state (smooth entrance)
revealSections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ----------------------------------------
// 4. CONTACT FORM VALIDATION (Your exact form structure)
// ----------------------------------------
const form = document.querySelector(".form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
      firstName.value.trim() === "" ||
      lastName.value.trim() === "" ||
      email.value.trim() === "" ||
      phone.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Message submitted successfully! DHS Studio will contact you soon.");
    form.reset();
  });
}


// ----------------------------------------
// 5. SERVICES PAGE - Animated Dotted Circles Glow
// Targets your .circle-1 class specifically
// ----------------------------------------
const circles = document.querySelectorAll(".circle-1");

circles.forEach((circle, index) => {
  circle.style.opacity = "0";
  circle.style.transform = "scale(0.5)";
  circle.style.transition = "all 0.6s ease " + index * 0.2 + "s";
});

function animateCircles() {
  circles.forEach((circle) => {
    const circleTop = circle.getBoundingClientRect().top;
    if (circleTop < window.innerHeight - 50) {
      circle.style.opacity = "1";
      circle.style.transform = "scale(1)";
    }
  });
}

window.addEventListener("scroll", animateCircles);
window.addEventListener("load", animateCircles);


// ----------------------------------------
// 6. IMAGE HOVER ZOOM (Home + About images)
// ----------------------------------------
const images = document.querySelectorAll(
  ".profile-right img, .about-right img, .contact-image"
);

images.forEach((img) => {
  img.style.transition = "transform 0.6s ease";

  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.03)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});