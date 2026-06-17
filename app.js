/* HomePlus — interacción del sitio */
(function () {
  const WHATSAPP = "524423191121";
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const filterWrap = document.getElementById("filter");
  const statCount = document.getElementById("stat-count");

  // Iconos
  const iconBed = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg>';
  const iconBath = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 8.5 5.5a2.12 2.12 0 0 0-3 0L4 7M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1ZM6 20v2M18 20v2"/></svg>';
  const iconPin = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>';

  function waLink(p) {
    const msg = encodeURIComponent(
      `Hola HomePlus, me interesa "${p.titulo}" (${p.zona}). ¿Me dan más información?`
    );
    return `https://wa.me/${WHATSAPP}?text=${msg}`;
  }

  // ---- Tarjetas ----
  function cardHTML(p, idx) {
    return `
      <article class="card" data-zona="${p.zona}">
        <button class="card-media" style="background-image:url('${p.fotos[0]}')" data-open="${idx}" aria-label="Ver fotos de ${p.titulo}">
          <span class="card-zona">${iconPin} ${p.zona}</span>
          ${p.fotos.length > 1 ? `<span class="card-count">${p.fotos.length} fotos</span>` : ""}
        </button>
        <div class="card-body">
          <h3 class="card-title">${p.titulo}</h3>
          ${p.destacado ? `<p class="card-tag">${p.destacado}</p>` : ""}
          <div class="card-price">${p.precio}${/consultar/i.test(p.precio) ? "" : " <small>/ mes</small>"}</div>
          <div class="card-specs">
            <span>${iconBed} ${p.recamaras} rec.</span>
            <span>${iconBath} ${p.banos} ${p.banos === 1 ? "baño" : "baños"}</span>
          </div>
          <div class="card-actions">
            <button class="btn btn-ghost" data-open="${idx}">Ver detalles</button>
            <a class="btn btn-wa" href="${waLink(p)}" target="_blank" rel="noopener" aria-label="WhatsApp sobre ${p.titulo}">WhatsApp</a>
          </div>
        </div>
      </article>`;
  }

  function render(zona) {
    const list = PROPIEDADES.map((p, i) => ({ p, i })).filter(
      ({ p }) => !zona || zona === "todas" || p.zona === zona
    );
    grid.innerHTML = list.map(({ p, i }) => cardHTML(p, i)).join("");
    empty.hidden = list.length !== 0;
  }

  // ---- Filtro dinámico por zonas presentes ----
  function buildFilter() {
    const zonas = [...new Set(PROPIEDADES.map((p) => p.zona))];
    filterWrap.innerHTML =
      `<button class="chip is-active" data-zona="todas">Todas</button>` +
      zonas.map((z) => `<button class="chip" data-zona="${z}">${z}</button>`).join("");
    filterWrap.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        filterWrap.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        render(chip.dataset.zona);
      });
    });
  }

  // ---- Modal galería ----
  const modal = document.getElementById("modal");
  const mImg = document.getElementById("m-img");
  const mTitle = document.getElementById("m-title");
  const mTag = document.getElementById("m-tag");
  const mDesc = document.getElementById("m-desc");
  const mSpecs = document.getElementById("m-specs");
  const mPrice = document.getElementById("m-price");
  const mThumbs = document.getElementById("m-thumbs");
  const mWa = document.getElementById("m-wa");
  const mCounter = document.getElementById("m-counter");
  let current = { fotos: [], idx: 0 };

  function showPhoto(i) {
    const n = current.fotos.length;
    current.idx = (i + n) % n;
    mImg.style.backgroundImage = `url('${current.fotos[current.idx]}')`;
    mCounter.textContent = `${current.idx + 1} / ${n}`;
    mThumbs.querySelectorAll("button").forEach((b, bi) =>
      b.classList.toggle("is-active", bi === current.idx)
    );
  }

  function openModal(idx) {
    const p = PROPIEDADES[idx];
    current = { fotos: p.fotos, idx: 0 };
    mTitle.textContent = p.titulo;
    mTag.innerHTML = p.destacado ? `${iconPin} ${p.destacado}` : "";
    mTag.style.display = p.destacado ? "" : "none";
    mDesc.textContent = p.descripcion;
    mPrice.innerHTML = p.precio + (/consultar/i.test(p.precio) ? "" : " <small>/ mes</small>");
    mSpecs.innerHTML =
      `<span>${iconBed} ${p.recamaras} recámaras</span>` +
      `<span>${iconBath} ${p.banos} ${p.banos === 1 ? "baño" : "baños"}</span>`;
    mWa.href = waLink(p);
    const mapBtn = document.getElementById("m-map");
    if (p.mapa) {
      mapBtn.href = p.mapa;
      mapBtn.style.display = "";
    } else {
      mapBtn.style.display = "none";
    }
    mThumbs.innerHTML = p.fotos
      .map((f, i) => `<button style="background-image:url('${f}')" data-i="${i}" aria-label="Foto ${i + 1}"></button>`)
      .join("");
    mThumbs.querySelectorAll("button").forEach((b) =>
      b.addEventListener("click", () => showPhoto(+b.dataset.i))
    );
    showPhoto(0);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    const opener = e.target.closest("[data-open]");
    if (opener) openModal(+opener.dataset.open);
    if (e.target.matches("[data-close]")) closeModal();
  });
  document.getElementById("m-next").addEventListener("click", () => showPhoto(current.idx + 1));
  document.getElementById("m-prev").addEventListener("click", () => showPhoto(current.idx - 1));
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") showPhoto(current.idx + 1);
    if (e.key === "ArrowLeft") showPhoto(current.idx - 1);
  });

  // ---- Init ----
  if (statCount) statCount.textContent = PROPIEDADES.length;
  document.getElementById("year").textContent = new Date().getFullYear();
  buildFilter();
  render("todas");
})();
