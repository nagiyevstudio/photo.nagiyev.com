export function createLightbox() {
  const overlay = document.createElement('div');
  overlay.id = 'portfolio-lightbox';
  overlay.className = 'fixed inset-0 z-[100] hidden bg-[var(--lightbox-bg)] backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 transition-opacity duration-300 select-none';

  overlay.innerHTML = `
    <!-- Top Bar: Counter & Close -->
    <div class="flex items-center justify-between text-current z-20">
      <div id="lb-counter" class="text-xs font-mono tracking-widest uppercase opacity-70">
        1 / 1
      </div>
      <div class="flex items-center space-x-2">
        <button id="lb-zoom" aria-label="Toggle zoom" class="p-2.5 bg-black/60 border border-white/20 hover:border-[var(--color-accent)] text-white transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
          </svg>
        </button>
        <button id="lb-close" aria-label="Close viewer" class="p-2.5 bg-black/60 border border-white/20 hover:border-[var(--color-accent)] text-white transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Center Stage: Main Image & Arrow Nav -->
    <div class="relative flex-1 flex items-center justify-center overflow-hidden my-2">
      <!-- Prev Button -->
      <button id="lb-prev" aria-label="Previous photo" class="absolute left-2 sm:left-6 z-20 p-3 bg-black/70 border border-white/20 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] text-white backdrop-blur-md transition-all">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <!-- Image Canvas -->
      <div id="lb-img-container" class="max-w-full max-h-[85vh] flex items-center justify-center transition-transform duration-300">
        <img id="lb-img" src="" alt="Full resolution view" class="max-w-full max-h-[85vh] object-contain shadow-2xl cursor-grab">
      </div>

      <!-- Next Button -->
      <button id="lb-next" aria-label="Next photo" class="absolute right-2 sm:right-6 z-20 p-3 bg-black/70 border border-white/20 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] text-white backdrop-blur-md transition-all">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>

    <!-- Bottom Info / Hint -->
    <div class="text-center text-[11px] text-[var(--color-text-muted)] tracking-wider uppercase z-20">
      Use ← → arrows or swipe to navigate • Esc to close
    </div>
  `;

  let currentList = [];
  let currentIndex = 0;
  let isZoomed = false;

  const counterEl = overlay.querySelector('#lb-counter');
  const imgEl = overlay.querySelector('#lb-img');
  const imgContainer = overlay.querySelector('#lb-img-container');
  const btnClose = overlay.querySelector('#lb-close');
  const btnPrev = overlay.querySelector('#lb-prev');
  const btnNext = overlay.querySelector('#lb-next');
  const btnZoom = overlay.querySelector('#lb-zoom');

  function update() {
    if (!currentList[currentIndex]) return;
    imgEl.src = currentList[currentIndex].src;
    counterEl.textContent = `${currentIndex + 1} / ${currentList.length}`;
    resetZoom();
  }

  function resetZoom() {
    isZoomed = false;
    imgContainer.style.transform = 'scale(1)';
    imgContainer.classList.remove('cursor-zoom-out');
  }

  function toggleZoom() {
    isZoomed = !isZoomed;
    imgContainer.style.transform = isZoomed ? 'scale(1.5)' : 'scale(1)';
    imgContainer.style.cursor = isZoomed ? 'zoom-out' : 'grab';
  }

  function next() {
    currentIndex = (currentIndex + 1) % currentList.length;
    update();
  }

  function prev() {
    currentIndex = (currentIndex - 1 + currentList.length) % currentList.length;
    update();
  }

  function open(list, index = 0) {
    currentList = list;
    currentIndex = index;
    update();
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    resetZoom();
  }

  btnClose.addEventListener('click', close);
  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);
  btnZoom.addEventListener('click', toggleZoom);

  // Click outside to close (if not clicking on image or arrows)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === imgContainer) {
      close();
    }
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (overlay.classList.contains('hidden')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  // Mobile Touch Swipe
  let touchStartX = 0;
  overlay.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  overlay.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  }, { passive: true });

  return { element: overlay, open, close };
}
