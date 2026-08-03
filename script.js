document.addEventListener("DOMContentLoaded", () => {
  const whatsappIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.49A11.85 11.85 0 0 0 12.08 0C5.56 0 .25 5.31.25 11.83c0 2.08.54 4.12 1.58 5.91L.15 24l6.41-1.68a11.8 11.8 0 0 0 5.52 1.4h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.4-8.4zM12.09 21.7h-.01a9.82 9.82 0 0 1-5-1.37l-.36-.21-3.8 1 1.01-3.7-.24-.38a9.8 9.8 0 0 1-1.5-5.21c0-5.42 4.42-9.83 9.86-9.83a9.8 9.8 0 0 1 9.84 9.89c0 5.4-4.41 9.81-9.8 9.81zm5.39-7.36c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35z"/></svg>';

  const icons = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z"/></svg>'
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/></svg>'
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.83v1.64h.06c.53-.95 1.84-1.95 3.79-1.95 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.47c0-1.31-.02-2.99-1.82-2.99-1.83 0-2.11 1.43-2.11 2.9V21H10V9z"/></svg>'
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/",
      svg: whatsappIcon
    }
  ];

  document.querySelectorAll(".whatsapp-float").forEach((link) => {
    link.innerHTML = whatsappIcon;
  });

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
