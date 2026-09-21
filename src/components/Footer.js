export function createFooter(t, currentLang, onLangChange) {
  const footer = document.createElement('footer');
  footer.className = 'w-full py-12 px-6 sm:px-12 lg:px-16 border-t border-white/10 bg-[#060709] text-xs text-white/60 select-none';

  footer.innerHTML = `
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
      <!-- Left: Brand & Copyright -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left">
        <div class="flex items-center gap-2.5 mb-2">
          <img src="/images/logo.png" alt="FN" class="w-5 h-5 object-contain" />
          <span class="text-sm font-display font-bold text-white tracking-[0.2em] uppercase">
            FAIK NAGIYEV
          </span>
        </div>
        <p class="font-mono text-[11px] text-white/50">${t.footer.copyright}</p>
        <p class="font-mono text-[10px] text-white/40 mt-0.5 tracking-wider">${t.footer.tagline}</p>
      </div>

      <!-- Center: Social & Authority Links -->
      <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-mono tracking-widest uppercase text-white/70">
        <a href="https://35photo.pro/faik" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-accent)] transition-colors">
          35PHOTO
        </a>
        <a href="https://500px.com/p/faiknagiyev" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-accent)] transition-colors">
          500px
        </a>
        <a href="https://youpic.com/faiknagiyev" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-accent)] transition-colors">
          YouPic
        </a>
        <a href="https://www.instagram.com/faik.nagiyev" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-accent)] transition-colors">
          Instagram
        </a>
        <a href="https://www.facebook.com/faiknagiyev.photography" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-accent)] transition-colors">
          Facebook
        </a>
        <a href="https://t.me/faiknagiyev" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-accent)] transition-colors">
          Telegram
        </a>
        <a href="https://wa.me/994503222142" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-accent)] transition-colors">
          WhatsApp
        </a>
        <a href="/llms.txt" target="_blank" class="text-[var(--color-accent)] hover:underline">
          llms.txt (AEO)
        </a>
      </div>

      <!-- Right: Language Switcher & Back to top -->
      <div class="flex items-center gap-4">
        <!-- Language Switcher (Borderless) -->
        <div class="flex items-center text-xs font-mono gap-1">
          <button data-footer-lang="en" class="px-2 py-1 transition-colors ${currentLang === 'en' ? 'text-[var(--color-accent)] font-bold' : 'text-white/50 hover:text-white'}">EN</button>
          <span class="text-white/20">/</span>
          <button data-footer-lang="az" class="px-2 py-1 transition-colors ${currentLang === 'az' ? 'text-[var(--color-accent)] font-bold' : 'text-white/50 hover:text-white'}">AZ</button>
          <span class="text-white/20">/</span>
          <button data-footer-lang="ru" class="px-2 py-1 transition-colors ${currentLang === 'ru' ? 'text-[var(--color-accent)] font-bold' : 'text-white/50 hover:text-white'}">RU</button>
        </div>

        <!-- Back to Top Button (Borderless) -->
        <button id="back-to-top" aria-label="Back to Top" class="flex items-center gap-1.5 px-3 py-1.5 text-white/70 hover:text-[var(--color-accent)] text-[11px] font-mono tracking-widest uppercase transition-colors">
          <span>TOP</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>
    </div>
  `;

  footer.querySelector('#back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  footer.querySelectorAll('[data-footer-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-footer-lang');
      if (selected !== currentLang && onLangChange) {
        onLangChange(selected);
      }
    });
  });

  return footer;
}
