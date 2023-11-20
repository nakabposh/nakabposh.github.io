const hamburgerIconEl = document.querySelector(".hamburger-icon");
hamburgerIconEl.addEventListener("click", e =>
  e.target.classList.toggle("hamburger-icon--active")
);
