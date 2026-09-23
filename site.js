// =========================================================================
// Runs on every page. Depends on config.js being loaded first.
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {
  applyNavVisibility();
  buildMobileNav();
  applyMediaPageBlend();
  initImageLightbox();
});

function applyNavVisibility() {
  if (typeof SITE_CONFIG === "undefined") return;
  if (!SITE_CONFIG.showExhibitions) {
    const link = document.querySelector('[data-page="exhibitions"]');
    if (link) link.style.display = "none";
  }
}

// On Photography/Posters, both the nav circle and the copyright footer
// sit directly on top of a full-bleed photo — flag them so CSS can give
// them the white + exclusion treatment. Everywhere else they stay plain
// black, always visible against the white background.
function applyMediaPageBlend() {
  if (!document.querySelector(".photo-scroll, .poster-scroll")) return;
  const toggle = document.querySelector(".mobile-nav-toggle");
  if (toggle) toggle.classList.add("blend-icon");
  const footer = document.querySelector(".site-footer");
  if (footer) footer.classList.add("blend-icon");
}

// -------------------------------------------------------------------------
// Lightbox: tap/click any Photography or Poster image to see it in full,
// uncropped (object-fit: contain), since the grid crops to fill the frame.
// -------------------------------------------------------------------------
function initImageLightbox() {
  const thumbs = document.querySelectorAll(".photo-scroll img, .poster-scroll img");
  if (!thumbs.length) return;

  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "lightbox-close";
  closeBtn.setAttribute("aria-label", "Close");
  closeBtn.textContent = "\u00D7";

  const fullImg = document.createElement("img");

  overlay.appendChild(closeBtn);
  overlay.appendChild(fullImg);
  document.body.appendChild(overlay);

  function open(src, alt) {
    fullImg.src = src;
    fullImg.alt = alt || "";
    overlay.classList.add("open");
    document.body.classList.add("mobile-nav-locked");
  }
  function close() {
    overlay.classList.remove("open");
    document.body.classList.remove("mobile-nav-locked");
  }

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => open(thumb.src, thumb.alt));
  });
}

// -------------------------------------------------------------------------
// Mobile nav: a hamburger button (top-left) that opens a full-screen white
// menu with the same links as the desktop sidebar, plus the copyright line
// pinned at the bottom. Built once from the existing .site-nav, so it stays
// in sync automatically — nothing to duplicate per page.
// -------------------------------------------------------------------------
function buildMobileNav() {
  const nav = document.querySelector(".site-nav");
  if (!nav) return;

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "mobile-nav-toggle";
  toggle.setAttribute("aria-label", "Open menu");
  toggle.innerHTML = '<span class="dot"></span>';

  const overlay = document.createElement("div");
  overlay.className = "mobile-nav-overlay";

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "mobile-nav-close";
  closeBtn.setAttribute("aria-label", "Close menu");
  closeBtn.textContent = "\u00D7";

  const linksWrap = document.createElement("div");
  linksWrap.className = "mobile-nav-links";
  nav.querySelectorAll("a").forEach((a) => {
    linksWrap.appendChild(a.cloneNode(true));
  });

  const foot = document.createElement("div");
  foot.className = "mobile-nav-footer";
  foot.textContent = "\u00A9 YAVRHS";

  overlay.appendChild(closeBtn);
  overlay.appendChild(linksWrap);
  overlay.appendChild(foot);

  document.body.appendChild(toggle);
  document.body.appendChild(overlay);

  function openMenu() {
    overlay.classList.add("open");
    document.body.classList.add("mobile-nav-locked");
  }
  function closeMenu() {
    overlay.classList.remove("open");
    document.body.classList.remove("mobile-nav-locked");
  }

  toggle.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  linksWrap.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });
}

// -------------------------------------------------------------------------
// Slider: a row of images you can flip through with prev/next arrows,
// with a horizontal slide transition. Used on Branding/Web/Exhibitions
// detail pages (one slider) and inline on Print/Music (one per project).
// -------------------------------------------------------------------------
function buildSlider(images) {
  const wrap = document.createElement("div");
  wrap.className = "slider";

  const track = document.createElement("div");
  track.className = "slider-track";
  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    track.appendChild(img);
  });
  wrap.appendChild(track);

  const arrows = document.createElement("div");
  arrows.className = "row-arrows";
  arrows.innerHTML = `<button type="button" aria-label="Previous">&larr;</button><button type="button" aria-label="Next">&rarr;</button>`;

  let index = 0;
  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }
  arrows.children[0].addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    update();
  });
  arrows.children[1].addEventListener("click", () => {
    index = (index + 1) % images.length;
    update();
  });

  // Swipe support (mobile) — swipe left = next, swipe right = previous.
  let touchStartX = null;
  wrap.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  wrap.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const SWIPE_THRESHOLD = 40;
    if (dx > SWIPE_THRESHOLD) {
      index = (index - 1 + images.length) % images.length;
      update();
    } else if (dx < -SWIPE_THRESHOLD) {
      index = (index + 1) % images.length;
      update();
    }
    touchStartX = null;
  });

  return { sliderEl: wrap, arrowsEl: arrows };
}

// -------------------------------------------------------------------------
// Overview list — Branding / Web / Exhibitions "all projects" pages.
// options: { size: 580|780, hover: true|false, linkPrefix }
// -------------------------------------------------------------------------
function renderOverviewList(containerEl, projects, options) {
  const { size, hover, linkPrefix } = options;
  projects.forEach((p) => {
    const row = document.createElement("div");
    row.className = `project-row size-${size}`;

    const thumb = document.createElement("a");
    thumb.className = "project-thumb";
    thumb.href = `${linkPrefix}?id=${encodeURIComponent(p.id)}`;

    const img1 = document.createElement("img");
    img1.src = p.cover;
    img1.alt = p.title;
    thumb.appendChild(img1);

    if (hover && p.coverHover) {
      const img2 = document.createElement("img");
      img2.className = "thumb-hover";
      img2.src = p.coverHover;
      img2.alt = "";
      thumb.appendChild(img2);
    }

    row.appendChild(thumb);

    const title = document.createElement("div");
    title.className = "project-title";
    title.textContent = p.title;
    row.appendChild(title);

    containerEl.appendChild(row);
  });
}

// -------------------------------------------------------------------------
// Inline slider list — Print / Music "all projects on one page" layout.
// Each project is its own media-row with its own slider + caption.
// options: { size: "w780"|"w500" }
// -------------------------------------------------------------------------
function renderInlineSliderList(containerEl, projects, options) {
  const { size } = options;
  projects.forEach((p) => {
    const row = document.createElement("div");
    row.className = `media-row ${size}`;

    const { sliderEl, arrowsEl } = buildSlider(p.images);
    row.appendChild(sliderEl);
    row.appendChild(arrowsEl);

const title = document.createElement("div");
    title.className = "row-title";

    if (p.link) {
      const a = document.createElement("a");
      a.href = p.link;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = p.title;
      title.appendChild(a);
    } else {
      title.textContent = p.title;
    }

    row.appendChild(title);

    containerEl.appendChild(row);
  });
}

// -------------------------------------------------------------------------
// Detail page — single project, opened from an overview list.
// Reads ?id= from the URL and looks it up in the given data array.
// options: { titleLinksToUrl: true|false } (used by Web projects)
// -------------------------------------------------------------------------
function renderDetailPage(containerEl, projects, options) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = projects.find((p) => p.id === id) || projects[0];
  if (!project) {
    containerEl.textContent = "Project not found.";
    return;
  }

  const row = document.createElement("div");
  row.className = "media-row w780";
  const { sliderEl, arrowsEl } = buildSlider(project.images);
  row.appendChild(sliderEl);
  row.appendChild(arrowsEl);
  containerEl.appendChild(row);

  const title = document.createElement("div");
  title.className = "detail-title";
  if (options && options.titleLinksToUrl && project.url) {
    const a = document.createElement("a");
    a.href = project.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = project.title;
    title.appendChild(a);
  } else {
    title.textContent = project.title;
  }
  containerEl.appendChild(title);

  if (project.description) {
    const text = document.createElement("p");
    text.className = "detail-text";
    text.textContent = project.description;
    containerEl.appendChild(text);
  }
}
