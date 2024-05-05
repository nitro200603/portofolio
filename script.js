document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("section");

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });

  // Highlighting current section in navigation
  window.addEventListener("scroll", function () {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });

  // Form submission
  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log("Form Data:", formDataObj);
    // You can add code here to handle form submission, like sending data to a server
    // or displaying a success message
    this.reset(); // Reset the form after submission
  });
});
