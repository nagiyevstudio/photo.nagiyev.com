export function renderFineArtView(t, fineArtImages, onOpenLightbox) {
  const container = document.createElement('div');
  container.className = 'w-full min-h-screen bg-[#08090b] text-white pt-28 pb-24 px-6 sm:px-12 lg:px-16';

  container.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <!-- Breadcrumb & Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono text-[var(--color-accent)] tracking-widest uppercase mb-2">
            <a href="#/" class="hover:underline">HOME</a>
            <span>/</span>
            <span>PORTFOLIO 02</span>
          </div>
          <h1 class="text-4xl sm:text-6xl font-display font-bold uppercase tracking-tight text-white">
            ${t.portfolio.artTitle}
          </h1>
        </div>
        <p class="text-xs sm:text-sm text-white/60 max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
          ${t.portfolio.artSubtitle}
        </p>
      </div>

      <!-- Justified Gallery Container -->
      <div id="fineart-gallery-justified" class="justified-gallery w-full"></div>
    </div>
  `;

  const galleryEl = container.querySelector('#fineart-gallery-justified');

  function renderJustified(images, targetHeight = 300, gap = 12) {
    if (!galleryEl || !images || images.length === 0) return;
    galleryEl.innerHTML = '';
    const containerWidth = galleryEl.clientWidth || (window.innerWidth - 64);

    let row = [];
    let rowAspectSum = 0;

    images.forEach((img, idx) => {
      const aspect = img.aspect || (img.width / img.height) || 1.5;
      row.push({ ...img, aspect, originalIndex: idx });
      rowAspectSum += aspect;

      const currentTotalWidth = rowAspectSum * targetHeight + (row.length - 1) * gap;

      if (currentTotalWidth >= containerWidth) {
        const availableWidth = containerWidth - (row.length - 1) * gap;
        const exactHeight = Math.floor(availableWidth / rowAspectSum);

        const rowEl = document.createElement('div');
        rowEl.className = 'w-full flex items-center';
        rowEl.style.gap = gap + 'px';

        row.forEach(item => {
          const itemWidth = Math.floor(exactHeight * item.aspect);
          const div = document.createElement('div');
          div.className = 'justified-item group';
          div.style.height = exactHeight + 'px';
          div.style.flex = `${item.aspect} ${item.aspect} ${itemWidth}px`;

          div.innerHTML = `
            <img src="${item.thumb || item.src}" alt="Fine Art by Faik Nagiyev" loading="lazy" decoding="async" />
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
              <span class="p-3 bg-black/70 text-white border border-white/20">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
              </span>
            </div>
          `;

          div.addEventListener('click', () => onOpenLightbox(images, item.originalIndex));
          rowEl.appendChild(div);
        });

        galleryEl.appendChild(rowEl);
        row = [];
        rowAspectSum = 0;
      }
    });

    if (row.length > 0) {
      const rowEl = document.createElement('div');
      rowEl.className = 'w-full flex items-center';
      rowEl.style.gap = gap + 'px';

      row.forEach(item => {
        const itemWidth = Math.floor(targetHeight * item.aspect);
        const div = document.createElement('div');
        div.className = 'justified-item group';
        div.style.height = targetHeight + 'px';
        div.style.flex = `0 0 ${itemWidth}px`;

        div.innerHTML = `
          <img src="${item.thumb || item.src}" alt="Fine Art by Faik Nagiyev" loading="lazy" decoding="async" />
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
            <span class="p-3 bg-black/70 text-white border border-white/20">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
            </span>
          </div>
        `;

        div.addEventListener('click', () => onOpenLightbox(images, item.originalIndex));
        rowEl.appendChild(div);
      });

      galleryEl.appendChild(rowEl);
    }
  }

  function update() {
    if (!container.isConnected) {
      window.removeEventListener('resize', update);
      return;
    }
    const width = window.innerWidth;
    const targetH = width > 1024 ? 300 : width > 640 ? 230 : 180;
    renderJustified(fineArtImages, targetH, 12);
  }

  window.addEventListener('resize', update);
  setTimeout(update, 50);

  return container;
}
