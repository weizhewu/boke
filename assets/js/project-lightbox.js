(function () {
  const detail = document.querySelector(".project-detail");
  const lightbox = document.getElementById("project-lightbox");
  if (!detail || !lightbox) return;

  const imgEl = lightbox.querySelector(".project-lightbox__img");
  const captionEl = lightbox.querySelector(".project-lightbox__caption");
  const closeBtn = lightbox.querySelector(".project-lightbox__close");
  let lastActive = null;

  function fullSrcUrl(src) {
    const url = new URL(src, window.location.href);
    url.searchParams.set("full", "1");
    return url.href;
  }

  function fitLightboxImage() {
    const nw = imgEl.naturalWidth;
    const nh = imgEl.naturalHeight;
    if (!nw || !nh) return;

    const dpr = window.devicePixelRatio || 1;
    const viewportMaxW = window.innerWidth * 0.96;
    const viewportMaxH = window.innerHeight * 0.85;
    const scale = Math.min(viewportMaxW / nw, viewportMaxH / nh, 1, 1 / dpr);

    imgEl.style.width = `${Math.round(nw * scale)}px`;
    imgEl.style.height = `${Math.round(nh * scale)}px`;
  }

  function loadFullResolution(src) {
    return new Promise((resolve, reject) => {
      const loader = new Image();
      loader.decoding = "sync";
      loader.onload = () => resolve(loader);
      loader.onerror = reject;
      loader.src = fullSrcUrl(src);
    });
  }

  async function open(src, alt, caption, preferredFullSrc) {
    lastActive = document.activeElement;
    imgEl.removeAttribute("style");
    imgEl.removeAttribute("src");
    imgEl.alt = alt || "";
    captionEl.textContent = caption || alt || "";
    captionEl.hidden = !captionEl.textContent;
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("project-lightbox-open");

    const targetSrc = preferredFullSrc || src;

    try {
      const loader = await loadFullResolution(targetSrc);
      imgEl.src = loader.src;
      fitLightboxImage();
    } catch {
      imgEl.onload = () => fitLightboxImage();
      imgEl.src = fullSrcUrl(targetSrc);
      if (imgEl.complete) fitLightboxImage();
    }

    closeBtn.focus();
  }

  function close() {
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("project-lightbox-open");
    imgEl.onload = null;
    imgEl.removeAttribute("src");
    imgEl.removeAttribute("style");
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
    const thumbSrc = img.currentSrc || img.src;
    const fullSrc = img.dataset.fullSrc || thumbSrc;
    open(thumbSrc, img.alt, caption, fullSrc);
  });

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) close();
  });
  window.addEventListener("resize", () => {
    if (!lightbox.hidden && imgEl.src) fitLightboxImage();
  });
})();
