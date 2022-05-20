document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".dk-accordion");
  const toggleClass = "is-open";

  accordions.forEach((accordion) => {
    const accordionTitle = accordion.querySelector(".dk-accordion-title");

    accordionTitle.addEventListener("click", () => {
      accordion.toggleClass(toggleClass);
    });
  });
});
