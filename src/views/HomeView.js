export function renderHomeView(t, heroImages, onOpenLightbox) {
  const container = document.createElement('div');
  container.className = 'w-full min-h-screen bg-[#08090b] text-white';

  const slides = heroImages && heroImages.length > 0 ? heroImages : [
    { src: '/images/hero/fool-mooon-logo.jpg' },
    { src: '/images/hero/img-0840-hdr-edit.jpg' },
    { src: '/images/hero/img-0858-hdr.jpg' },
    { src: '/images/hero/img-3206-edit.jpg' },
    { src: '/images/hero/img-4604-hdr-edit.jpg' },
    { src: '/images/hero/img-4882.jpg' },
    { src: '/images/hero/img-5481-edit.jpg' },
    { src: '/images/hero/img-7249-edit.jpg' }
  ];

  container.innerHTML = `
    <!-- Screen 1: Cinematic Full-Bleed Hero (NASA / Nature style) -->
    <section class="relative w-full h-screen min-h-[640px] flex flex-col justify-between p-6 sm:p-12 lg:p-16 overflow-hidden">
      <!-- Background Slideshow -->
      <div id="home-slideshow" class="absolute inset-0 z-0 bg-black">
        ${slides.map((s, idx) => `
          <div class="home-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}" data-slide="${idx}">
            <img src="${s.thumb || s.src}" alt="Faik Nagiyev Masterwork" class="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.08]" loading="${idx === 0 ? 'eager' : 'lazy'}" decoding="async">
          </div>
        `).join('')}
        <!-- Subtle Vignette Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#08090b] via-black/30 to-black/60 z-20 pointer-events-none"></div>
      </div>

      <!-- Top Header Spacer -->
      <div class="relative z-30 pt-16 sm:pt-20"></div>

      <!-- Center Hero Stage: Typography (Left) + Architectural Viewfinder Frame (Right, Desktop) -->
      <div class="relative z-30 w-full my-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8 xl:gap-16">
        <!-- Left: Master Typography -->
        <div class="max-w-2xl xl:max-w-3xl">
          <div class="text-[11px] sm:text-xs font-mono font-bold tracking-[0.35em] text-[var(--color-accent)] uppercase mb-4">
            SPATIAL VISION • EST. 1994
          </div>
          <h1 class="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-display font-extrabold tracking-tight text-white uppercase leading-[0.92] mb-6">
            FAIK<br>NAGIYEV
          </h1>
          <p class="text-base sm:text-xl text-white/80 max-w-xl font-normal leading-relaxed">
            ${t.hero.headline}
          </p>
        </div>

        <!-- Right: Synchronized Desktop Photograph (Clean 5px Offset Border, No Text) -->
        <div class="hidden lg:block w-[460px] xl:w-[540px] 2xl:w-[620px] shrink-0">
          <div id="hero-frame-trigger" class="p-[5px] border border-white/25 hover:border-[var(--color-accent)] transition-colors duration-300 shadow-2xl cursor-pointer group">
            <div class="relative aspect-[16/10] overflow-hidden bg-black">
              ${slides.map((s, idx) => `
                <div class="hero-frame-slide absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}" data-frame-slide="${idx}">
                  <img src="${s.thumb || s.src}" alt="Faik Nagiyev Masterwork" class="w-full h-full object-cover object-center filter brightness-100 contrast-[1.05]" loading="${idx === 0 ? 'eager' : 'lazy'}" decoding="async">
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Teasers & Slide Pagination (YogaSpot & NASA inspiration) -->
      <div class="relative z-30 w-full pt-8 border-t border-white/15">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
          <div class="text-xs font-mono tracking-widest text-white/60 uppercase">
            Curated Portfolios & Showcases
          </div>
          <!-- Numeric Slide Indicator & Slide Controls (Clean, No Borders) -->
          <div class="flex items-center gap-3 text-xs font-mono text-white/70">
            <button id="hero-prev" aria-label="Previous Slide" class="p-1.5 text-white/60 hover:text-[var(--color-accent)] transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <div class="flex items-center gap-2">
              <span id="slide-num" class="text-[var(--color-accent)] font-bold text-sm">01</span>
              <span class="w-6 h-[1px] bg-white/20"></span>
              <span>${String(slides.length).padStart(2, '0')}</span>
            </div>
            <button id="hero-next" aria-label="Next Slide" class="p-1.5 text-white/60 hover:text-[var(--color-accent)] transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        <!-- 4 Sharp Horizontal Cards (Borderless Pure Image Blocks) -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <!-- Card 1: Architecture -->
          <a href="#/architecture" class="group relative overflow-hidden h-28 sm:h-36 bg-[#101217]">
            <img src="/images/thumbs/architecture/baku-night.webp" alt="Spaces & Architecture" class="absolute inset-0 w-full h-full object-cover filter brightness-[0.5] group-hover:scale-105 group-hover:brightness-[0.7] transition-all duration-500" loading="lazy" decoding="async">
            <div class="absolute inset-0 p-4 flex flex-col justify-between z-10">
              <span class="text-[10px] font-mono text-[var(--color-accent)] tracking-widest uppercase">01 / ARCHITECTURE</span>
              <span class="text-xs sm:text-sm font-display font-bold text-white tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                ${t.nav.architecture} →
              </span>
            </div>
          </a>

          <!-- Card 2: AI Staging -->
          <a href="#/ai-staging" class="group relative overflow-hidden h-28 sm:h-36 bg-[#101217]">
            <img src="/images/before-after/case2-after.jpg" alt="AI Staging" class="absolute inset-0 w-full h-full object-cover filter brightness-[0.5] group-hover:scale-105 group-hover:brightness-[0.7] transition-all duration-500" loading="lazy" decoding="async">
            <div class="absolute inset-0 p-4 flex flex-col justify-between z-10">
              <span class="text-[10px] font-mono text-[var(--color-accent)] tracking-widest uppercase">02 / HYBRID AI</span>
              <span class="text-xs sm:text-sm font-display font-bold text-white tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                ${t.nav.beforeAfter} →
              </span>
            </div>
          </a>

          <!-- Card 3: Client Vault -->
          <a href="#/client-vault" class="group relative overflow-hidden h-28 sm:h-36 bg-[#101217]">
            <img src="/images/client-vault/alba-hotel.png" alt="Client Vault" class="absolute inset-0 w-full h-full object-cover filter brightness-[0.5] group-hover:scale-105 group-hover:brightness-[0.7] transition-all duration-500" loading="lazy" decoding="async">
            <div class="absolute inset-0 p-4 flex flex-col justify-between z-10">
              <span class="text-[10px] font-mono text-[var(--color-accent)] tracking-widest uppercase">03 / INVESTOR VAULT</span>
              <span class="text-xs sm:text-sm font-display font-bold text-white tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                ${t.nav.clientVault} →
              </span>
            </div>
          </a>

          <!-- Card 4: Fine Art -->
          <a href="#/fine-art" class="group relative overflow-hidden h-28 sm:h-36 bg-[#101217]">
            <img src="/images/thumbs/fine-art/fool-mooon-logo.webp" alt="Signature Fine Art" class="absolute inset-0 w-full h-full object-cover filter brightness-[0.5] group-hover:scale-105 group-hover:brightness-[0.7] transition-all duration-500" loading="lazy" decoding="async">
            <div class="absolute inset-0 p-4 flex flex-col justify-between z-10">
              <span class="text-[10px] font-mono text-[var(--color-accent)] tracking-widest uppercase">04 / FINE ART</span>
              <span class="text-xs sm:text-sm font-display font-bold text-white tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                ${t.nav.fineArt} →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Screen 2: Atmospheric Manifesto & Landmark Stats -->
    <section class="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-16 border-t border-white/10 bg-[#0c0e12]">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7">
            <div class="text-xs font-mono text-[var(--color-accent)] tracking-[0.3em] uppercase mb-4">
              THREE DECADES OF PRECISION
            </div>
            <h2 class="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight uppercase leading-[1.05] mb-8">
              OPTICAL PURITY.<br>SPATIAL PERFECTION.
            </h2>
            <p class="text-sm sm:text-base text-white/70 leading-relaxed mb-6 max-w-2xl">
              ${t.about.bio1}
            </p>
            <p class="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
              ${t.about.bio3}
            </p>
          </div>

          <div class="lg:col-span-5 grid grid-cols-2 gap-4">
            <div class="p-6 bg-[#12151b]/80">
              <div class="text-4xl sm:text-5xl font-display font-bold text-[var(--color-accent)]">${t.stats.yearsTotal}</div>
              <div class="text-xs font-mono text-white/60 tracking-wider uppercase mt-2">${t.stats.yearsTotalLabel}</div>
            </div>
            <div class="p-6 bg-[#12151b]/80">
              <div class="text-4xl sm:text-5xl font-display font-bold text-[var(--color-accent)]">${t.stats.yearsArch}</div>
              <div class="text-xs font-mono text-white/60 tracking-wider uppercase mt-2">${t.stats.yearsArchLabel}</div>
            </div>
            <div class="p-6 bg-[#12151b]/80">
              <div class="text-4xl sm:text-5xl font-display font-bold text-[var(--color-accent)]">${t.stats.hotels}</div>
              <div class="text-xs font-mono text-white/60 tracking-wider uppercase mt-2">${t.stats.hotelsLabel}</div>
            </div>
            <div class="p-6 bg-[#12151b]/80">
              <div class="text-4xl sm:text-5xl font-display font-bold text-[var(--color-accent)]">${t.stats.exhibition}</div>
              <div class="text-xs font-mono text-white/60 tracking-wider uppercase mt-2">${t.stats.exhibitionLabel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Slideshow Logic
  const slideEls = container.querySelectorAll('.home-slide');
  const frameSlideEls = container.querySelectorAll('.hero-frame-slide');
  const slideNumEl = container.querySelector('#slide-num');
  const frameCounterEl = container.querySelector('#hero-frame-counter');
  const btnPrev = container.querySelector('#hero-prev');
  const btnNext = container.querySelector('#hero-next');
  const frameTrigger = container.querySelector('#hero-frame-trigger');
  let current = 0;
  let timer = null;

  function show(idx) {
    current = (idx + slides.length) % slides.length;

    // Ambient background slides
    slideEls.forEach((el, i) => {
      if (i === current) {
        el.classList.remove('opacity-0', 'z-0');
        el.classList.add('opacity-100', 'z-10');
      } else {
        el.classList.remove('opacity-100', 'z-10');
        el.classList.add('opacity-0', 'z-0');
      }
    });

    // Foreground viewfinder frame slides
    frameSlideEls.forEach((el, i) => {
      if (i === current) {
        el.classList.remove('opacity-0', 'z-0');
        el.classList.add('opacity-100', 'z-10');
      } else {
        el.classList.remove('opacity-100', 'z-10');
        el.classList.add('opacity-0', 'z-0');
      }
    });

    const numStr = String(current + 1).padStart(2, '0');
    const totalStr = String(slides.length).padStart(2, '0');
    if (slideNumEl) {
      slideNumEl.textContent = numStr;
    }
    if (frameCounterEl) {
      frameCounterEl.textContent = `${numStr} / ${totalStr}`;
    }
  }

  function next() {
    if (!container.isConnected) {
      if (timer) clearInterval(timer);
      return;
    }
    show(current + 1);
  }

  function prev() {
    show(current - 1);
  }

  function resetTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(next, 3500);
  }

  btnNext?.addEventListener('click', () => {
    next();
    resetTimer();
  });

  btnPrev?.addEventListener('click', () => {
    prev();
    resetTimer();
  });

  frameTrigger?.addEventListener('click', () => {
    if (onOpenLightbox) {
      onOpenLightbox(slides, current);
    }
  });

  resetTimer();

  return container;
}
