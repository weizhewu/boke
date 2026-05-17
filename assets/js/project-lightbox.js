(function () {
  const detail = document.querySelector(".project-detail");
  const lightbox = document.getElementById("project-lightbox");
  if (!detail || !lightbox) return;

  const imgEl = lightbox.querySelector(".project-lightbox__img");
  const captionEl = lightbox.querySelector(".project-lightbox__caption");
  const closeBtn = lightbox.querySelector(".project-lightbox__close");
  let lastActive = null;

  function open(src, alt, caption) {
    lastActive = document.activeElement;
    imgEl.src = src;
    imgEl.alt = alt || "";
    captionEl.textContent = caption || alt || "";
    captionEl.hidden = !captionEl.textContent;
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("project-lightbox-open");
    closeBtn.focus();
  }

  function close() {
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("project-lightbox-open");
    imgEl.removeAttribute("src");
    if (lastActive && typeof lastActive.focus === "function") {
      lastActive.focus();
    }
    lastActive = null;
  }

  detail.addEventListener("click", (e) => {
    const img = e.target.closest(".project-detail-content img");
    if (!img) return;
    e.preventDefault();
    const card = img.closest(".project-shot-card");
    const caption = card?.querySelector("h3")?.textContent?.trim();
    open(img.currentSrc || img.src, img.alt, caption);
  });

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) close();
  });
})();
