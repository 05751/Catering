const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-navigation");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  navigation.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelector("#year").textContent = new Date().getFullYear();

const enquiryForm = document.querySelector("#enquiry-form");
const formFeedback = document.querySelector("#form-feedback");

enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formFeedback.classList.remove("is-error");

  if (!enquiryForm.reportValidity()) {
    formFeedback.textContent = "Please complete the required fields and check your email address.";
    formFeedback.classList.add("is-error");
    return;
  }

  formFeedback.textContent = "Your details are valid, but this form is not connected and nothing has been sent. Please contact the business directly or connect a form service.";
});

enquiryForm.addEventListener("input", () => {
  formFeedback.textContent = "";
  formFeedback.classList.remove("is-error");
});

enquiryForm.addEventListener("change", () => {
  formFeedback.textContent = "";
  formFeedback.classList.remove("is-error");
});
