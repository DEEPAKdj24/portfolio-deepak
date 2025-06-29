const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main .section");

function showSection(sectionId) {
  sections.forEach((section) => {
    section.classList.remove("active");
    section.classList.add("hidden");
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.remove("hidden");
    activeSection.classList.add("active");
  }

  navLinks.forEach((link) => link.classList.remove("active"));
  const activeLink = Array.from(navLinks).find(
    (link) => link.getAttribute("data-section") === sectionId
  );
  if (activeLink) activeLink.classList.add("active");
}

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute("data-section");
    if (sectionId) {
      showSection(sectionId);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  showSection("home");
});
