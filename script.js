// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Back to Top Button
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Fade-in Animation on Scroll
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
fadeEls.forEach(el => observer.observe(el));
