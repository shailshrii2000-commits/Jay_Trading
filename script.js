document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelectorAll("[data-year]");
  year.forEach((item) => {
    item.textContent = new Date().getFullYear();
  });

  const slides = document.querySelectorAll(".hero-slide");
  let slideIndex = 0;
  if (slides.length > 1) {
    setInterval(() => {
      slides[slideIndex].classList.remove("active");
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].classList.add("active");
    }, 4000);
  }

  const items = document.querySelectorAll("#productList li");
  let itemIndex = 0;
  if (items.length) {
    items[0].classList.add("show");
    setInterval(() => {
      if (itemIndex < items.length) {
        items[itemIndex].classList.add("show");
        itemIndex += 1;
      } else {
        items.forEach((item) => item.classList.remove("show"));
        itemIndex = 0;
      }
    }, 850);
  }
});
