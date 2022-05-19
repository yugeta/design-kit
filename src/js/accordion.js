document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");
  const toggleClass = "is-open";

  accordions.forEach((accordion) => {
    const accordionTitle = accordion.querySelector(".accordion-title");

    accordionTitle.addEventListener("click", () => {
      // 判定条件のクラスを持っているか?
      if (accordion.classList.contains(toggleClass)) {
        accordion.classList.remove(toggleClass);
      } else {
        accordion.classList.add(toggleClass);
      }
    });
  });
});
