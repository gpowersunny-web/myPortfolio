// this select all sections
const sections = document.querySelectorAll("section");

// create an IntersectionObserver to detect when a section enters the viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); // Add "show" class to trigger CSS animation
    }
  });
}, { threshold: 0.2 }); // 20% of the section must be visible to trigger

// Observe each section
sections.forEach(section => observer.observe(section));
