document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".dk-accordion");
  const toggleClass = "is-open";

  accordions.forEach((accordion) => {
    const accordionTitle = accordion.querySelector(".dk-accordion-title");

    accordionTitle.addEventListener("click", () => {
      if (accordion.classList.contains(toggleClass)) {
        accordion.classList.remove(toggleClass);
      } else {
        accordion.classList.add(toggleClass);
      }
    });
  });
});
