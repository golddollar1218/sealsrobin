(function () {
  const box = document.getElementById("meme-lightbox");
  const img = document.getElementById("meme-lightbox-img");
  const cap = document.getElementById("meme-lightbox-cap");
  const closeBtn = box?.querySelector(".meme-lightbox__close");
  if (!box || !img) return;

  const close = () => {
    box.hidden = true;
    img.removeAttribute("src");
    document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-meme]").forEach((card) => {
    card.addEventListener("click", () => {
      const photo = card.querySelector("img");
      if (!photo) return;
      img.src = photo.src;
      img.alt = photo.alt || "";
      cap.textContent = card.querySelector("figcaption strong")?.textContent || "";
      box.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn?.addEventListener("click", close);
  box.addEventListener("click", (event) => {
    if (event.target === box) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !box.hidden) close();
  });
})();
