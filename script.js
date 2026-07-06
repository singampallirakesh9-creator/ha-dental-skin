// HA Dental & Skin Corner

document.addEventListener("DOMContentLoaded", () => {

  console.log("Website Loaded");

  // Smooth button animation
  document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });

  });

  // Fade animation
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.8s";
    observer.observe(section);
  });

});
