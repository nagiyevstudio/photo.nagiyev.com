export function createPortfolioGrid(t, archImages, fineArtImages, onOpenLightbox) {
  const section = document.createElement('section');
  section.className = 'py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-current/10 bg-[var(--color-bg)]';

  section.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <!-- Section 1: Spaces & Architecture -->
      <div id="portfolio-arch" class="mb-24 scroll-mt-24">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-current/10">
          <div>
            <div class="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--color-accent)] mb-2">
              Portfolio 01
            </div>
            <h2 class="text-3xl sm:text-5xl font-serif font-bold text-current">
              ${t.portfolio.archTitle}
            </h2>
          </div>
          <p class="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-md mt-2 md:mt-0 leading-relaxed">
            ${t.portfolio.archSubtitle}
          </p>
        </div>

        <!-- Justified Container for Architecture -->
        <div id="arch-gallery" class="justified-gallery w-full"></div>
      </div>

      <!-- Section 2: Signature Fine Art & Landscapes -->
      <div id="portfolio-art" class="scroll-mt-24">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-current/10">
          <div>
            <div class="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--color-accent)] mb-2">
              Portfolio 02
            </div>
            <h2 class="text-3xl sm:text-5xl font-serif font-bold text-current">
              ${t.portfolio.artTitle}
            </h2>
          </div>
          <p class="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-md mt-2 md:mt-0 leading-relaxed">
            ${t.portfolio.artSubtitle}
          </p>
        </div>

        <!-- Justified Container for Fine Art -->
        <div id="art-gallery" class="justified-gallery w-full"></div>
      </div>
    </div>
  `;

  // Justified Row Layout Algorithm
  function renderJustified(container, images, targetHeight = 280, gap = 12) {
    if (!container || !images || images.length === 0) return;
    container.innerHTML = '';
    const containerWidth = container.clientWidth || (window.innerWidth - 48);

    let row = [];
    let rowAspectSum = 0;

    images.forEach((img, index) => {
      const aspect = img.aspect || (img.width / img.height) || 1.5;
      row.push({ ...img, aspect, originalIndex: index });
      rowAspectSum += aspect;

      const currentTotalWidth = rowAspectSum * targetHeight + (row.length - 1) * gap;

      if (currentTotalWidth >= containerWidth) {
        // Compute exact row height to fill containerWidth
        const availableWidth = containerWidth - (row.length - 1) * gap;
        const exactHeight = Math.floor(availableWidth / rowAspectSum);

        renderRow(container, row, exactHeight, gap);
        row = [];
        rowAspectSum = 0;
      }
    });

    // Handle last row
    if (row.length > 0) {
      // If last row has only a few items, keep targetHeight to avoid huge images
      renderRow(container, row, targetHeight, gap, true);
    }
  }

  function renderRow(container, row, rowHeight, gap, isLastRow = false) {
    const rowEl = document.createElement('div');
    rowEl.className = 'w-full flex items-center';
    rowEl.style.gap = gap + 'px';

    row.forEach(item => {
      const itemWidth = Math.floor(rowHeight * item.aspect);
      const div = document.createElement('div');
      div.className = 'justified-item group';
      div.style.height = rowHeight + 'px';
      div.style.width = isLastRow ? `${itemWidth}px` : `${itemWidth}px`;
      div.style.flex = isLastRow ? `0 0 ${itemWidth}px` : `${item.aspect} ${item.aspect} ${itemWidth}px`;

      div.innerHTML = `
        <img 
          src="${item.thumb || item.src}" 
          alt="Photography by Faik Nagiyev" 
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
          <span class="p-2.5 bg-black/60 text-white backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
            </svg>
          </span>
        </div>
      `;

      div.addEventListener('click', () => {
        onOpenLightbox(item.category === 'art' ? fineArtImages : archImages, item.originalIndex);
      });

      rowEl.appendChild(div);
    });

    container.appendChild(rowEl);
  }

  // Initial layout trigger
  const archContainer = section.querySelector('#arch-gallery');
  const artContainer = section.querySelector('#art-gallery');

  function updateAllLayouts() {
    const width = window.innerWidth;
    const targetH = width > 1024 ? 280 : width > 640 ? 220 : 170;
    renderJustified(archContainer, archImages.map(img => ({ ...img, category: 'arch' })), targetH, 12);
    renderJustified(artContainer, fineArtImages.map(img => ({ ...img, category: 'art' })), targetH, 12);
  }

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateAllLayouts, 150);
  });

  setTimeout(updateAllLayouts, 50);

  return section;
}
