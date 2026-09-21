export function createHero(t, heroImages) {
  const section = document.createElement('section');
  section.id = 'hero';
  section.className = 'relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden';

  // Fallback if no images
  const slides = heroImages && heroImages.length > 0 ? heroImages : [
    { src: '/images/hero/fool-mooon-logo.jpg' },
    { src: '/images/hero/img-4604-hdr-edit.jpg' }
  ];

  section.innerHTML = `
    <!-- Background Slideshow Container -->
    <div id="hero-slider-bg" class="absolute inset-0 z-0 bg-black">
      ${slides.map((slide, idx) => `
        <div class="hero-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}" data-slide="${idx}">
          <img src="${slide.thumb || slide.src}" alt="Hero Background ${idx + 1}" class="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08] transform scale-100 transition-transform duration-[7000ms] ease-out" loading="${idx === 0 ? 'eager' : 'lazy'}" decoding="async">
        </div>
      `).join('')}
      <!-- Cinematic Vignette & Readability Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/40 to-black/60 z-20 pointer-events-none"></div>
    </div>

    <!-- Top Spacer -->
    <div class="relative z-30"></div>

    <!-- Main Hero Content -->
    <div class="relative z-30 max-w-5xl mx-auto text-center my-auto py-12">
      <!-- Tag / Sub-badge -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold tracking-[0.25em] uppercase mb-6 animate-fade-in">
        <span class="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
        ${t.hero.tag}
      </div>

      <!-- Main Headline (Serif Editorial) -->
      <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white font-bold leading-[1.05] mb-6 drop-shadow-lg">
        ${t.hero.headline}
      </h1>

      <!-- Description Paragraph -->
      <p class="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 font-normal leading-relaxed mb-10 drop-shadow">
        ${t.hero.subheadline}
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-4">
        <a href="#portfolio-arch" class="px-8 py-4 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-[var(--color-accent)]/30 flex items-center gap-2">
          ${t.hero.ctaPrimary}
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>

        <a href="#client-vault" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all transform hover:-translate-y-1">
          ${t.hero.ctaSecondary}
        </a>

        <a href="#contact" class="px-7 py-4 bg-white/5 hover:bg-white/15 text-white hover:text-[var(--color-accent)] text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all">
          ${t.hero.ctaContact}
        </a>
      </div>
    </div>

    <!-- Bottom Stat Bar & Slideshow Controls -->
    <div class="relative z-30 max-w-7xl mx-auto w-full pt-8 border-t border-white/15">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white mb-6">
        <!-- Stat 1 -->
        <div class="p-3">
          <div class="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-accent)]">${t.stats.yearsTotal}</div>
          <div class="text-xs uppercase tracking-wider text-gray-300 font-medium mt-1">${t.stats.yearsTotalLabel}</div>
        </div>
        <!-- Stat 2 -->
        <div class="p-3">
          <div class="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-accent)]">${t.stats.yearsArch}</div>
          <div class="text-xs uppercase tracking-wider text-gray-300 font-medium mt-1">${t.stats.yearsArchLabel}</div>
        </div>
        <!-- Stat 3 -->
        <div class="p-3">
          <div class="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-accent)]">${t.stats.hotels}</div>
          <div class="text-xs uppercase tracking-wider text-gray-300 font-medium mt-1">${t.stats.hotelsLabel}</div>
        </div>
        <!-- Stat 4 -->
        <div class="p-3">
          <div class="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-accent)]">${t.stats.exhibition}</div>
          <div class="text-xs uppercase tracking-wider text-gray-300 font-medium mt-1">${t.stats.exhibitionLabel}</div>
        </div>
      </div>

      <!-- Slide Indicators & Controls -->
      <div class="flex items-center justify-between text-xs text-white/70">
        <!-- Progress Indicators -->
        <div class="flex items-center space-x-2">
          ${slides.map((_, idx) => `
            <button class="hero-dot w-8 h-1 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-[var(--color-accent)] w-12' : 'bg-white/30'}" data-slide-target="${idx}"></button>
          `).join('')}
        </div>

        <!-- Mini Arrow Controls -->
        <div class="flex items-center space-x-2">
          <button id="hero-prev" aria-label="Previous slide" class="p-1.5 bg-white/10 hover:bg-white/25 text-white transition-colors">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button id="hero-next" aria-label="Next slide" class="p-1.5 bg-white/10 hover:bg-white/25 text-white transition-colors">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  `;

  // Slideshow Logic
  let current = 0;
  let timer = null;
  const slideEls = section.querySelectorAll('.hero-slide');
  const dotEls = section.querySelectorAll('.hero-dot');

  function showSlide(index) {
    slideEls.forEach((el, i) => {
      const img = el.querySelector('img');
      if (i === index) {
        el.classList.remove('opacity-0', 'z-0');
        el.classList.add('opacity-100', 'z-10');
        if (img) img.classList.add('scale-105');
      } else {
        el.classList.remove('opacity-100', 'z-10');
        el.classList.add('opacity-0', 'z-0');
        if (img) img.classList.remove('scale-105');
      }
    });

    dotEls.forEach((dot, i) => {
      if (i === index) {
        dot.classList.remove('bg-white/30', 'w-8');
        dot.classList.add('bg-[var(--color-accent)]', 'w-12');
      } else {
        dot.classList.remove('bg-[var(--color-accent)]', 'w-12');
        dot.classList.add('bg-white/30', 'w-8');
      }
    });
    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  function startTimer() {
    stopTimer();
    timer = setInterval(nextSlide, 4500);
  }

  function stopTimer() {
    if (timer) clearInterval(timer);
  }

  section.querySelector('#hero-prev')?.addEventListener('click', () => {
    prevSlide();
    startTimer();
  });

  section.querySelector('#hero-next')?.addEventListener('click', () => {
    nextSlide();
    startTimer();
  });

  dotEls.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-slide-target'), 10);
      showSlide(idx);
      startTimer();
    });
  });

  section.addEventListener('mouseenter', stopTimer);
  section.addEventListener('mouseleave', startTimer);

  startTimer();

  return section;
}
