export function createFullscreenMenu(t, currentLang, onLangChange) {
  const overlay = document.createElement('div');
  overlay.id = 'fullscreen-menu';
  overlay.className = 'menu-overlay fixed inset-0 z-[100] bg-[#07080a]/96 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 lg:p-16 select-none overflow-y-auto';

  overlay.innerHTML = `
    <!-- Top Bar: Logo & Close -->
    <div class="flex items-center justify-between border-b border-white/10 pb-6">
      <div class="flex items-center gap-3">
        <img src="/images/logo.png" alt="FN" class="w-7 h-7 object-contain" />
        <span class="text-sm font-display font-bold tracking-[0.25em] text-white">FAIK NAGIYEV</span>
      </div>
      <button id="menu-close" aria-label="Close Menu" class="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-widest uppercase transition-colors">
        <span>CLOSE</span>
        <svg class="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- Center Navigation Links (Large Architectural Typography) -->
    <div class="my-auto py-8">
      <nav class="flex flex-col space-y-4 sm:space-y-6">
        <a href="#/" class="menu-nav-link group flex items-baseline gap-4 sm:gap-6 py-2">
          <span class="text-xs sm:text-sm font-mono text-[var(--color-accent)] tracking-widest">01</span>
          <span class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white group-hover:text-[var(--color-accent)] group-hover:translate-x-3 transition-all duration-300">
            ${t.nav.hero}
          </span>
        </a>

        <a href="#/architecture" class="menu-nav-link group flex items-baseline gap-4 sm:gap-6 py-2">
          <span class="text-xs sm:text-sm font-mono text-[var(--color-accent)] tracking-widest">02</span>
          <span class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white group-hover:text-[var(--color-accent)] group-hover:translate-x-3 transition-all duration-300">
            ${t.nav.architecture}
          </span>
        </a>

        <a href="#/fine-art" class="menu-nav-link group flex items-baseline gap-4 sm:gap-6 py-2">
          <span class="text-xs sm:text-sm font-mono text-[var(--color-accent)] tracking-widest">03</span>
          <span class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white group-hover:text-[var(--color-accent)] group-hover:translate-x-3 transition-all duration-300">
            ${t.nav.fineArt}
          </span>
        </a>

        <a href="#/ai-staging" class="menu-nav-link group flex items-baseline gap-4 sm:gap-6 py-2">
          <span class="text-xs sm:text-sm font-mono text-[var(--color-accent)] tracking-widest">04</span>
          <span class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white group-hover:text-[var(--color-accent)] group-hover:translate-x-3 transition-all duration-300">
            ${t.nav.beforeAfter}
          </span>
        </a>

        <a href="#/client-vault" class="menu-nav-link group flex items-baseline gap-4 sm:gap-6 py-2">
          <span class="text-xs sm:text-sm font-mono text-[var(--color-accent)] tracking-widest">05</span>
          <span class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white group-hover:text-[var(--color-accent)] group-hover:translate-x-3 transition-all duration-300">
            ${t.nav.clientVault}
          </span>
        </a>

        <a href="#/contact" class="menu-nav-link group flex items-baseline gap-4 sm:gap-6 py-2">
          <span class="text-xs sm:text-sm font-mono text-[var(--color-accent)] tracking-widest">06</span>
          <span class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white group-hover:text-[var(--color-accent)] group-hover:translate-x-3 transition-all duration-300">
            ${t.nav.contact}
          </span>
        </a>
      </nav>
    </div>

    <!-- Bottom Bar: Language Switcher & Quick Contacts -->
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10 pt-6">
      <!-- Language Switcher in Menu (Borderless) -->
      <div class="flex items-center gap-2">
        <span class="text-xs font-mono text-white/50 tracking-widest uppercase mr-2">Language:</span>
        <div class="flex items-center text-xs font-mono gap-1">
          <button data-menu-lang="en" class="px-2.5 py-1 transition-colors ${currentLang === 'en' ? 'text-[var(--color-accent)] font-bold' : 'text-white/60 hover:text-white'}">EN</button>
          <span class="text-white/20">/</span>
          <button data-menu-lang="az" class="px-2.5 py-1 transition-colors ${currentLang === 'az' ? 'text-[var(--color-accent)] font-bold' : 'text-white/60 hover:text-white'}">AZ</button>
          <span class="text-white/20">/</span>
          <button data-menu-lang="ru" class="px-2.5 py-1 transition-colors ${currentLang === 'ru' ? 'text-[var(--color-accent)] font-bold' : 'text-white/60 hover:text-white'}">RU</button>
        </div>
      </div>

      <!-- Quick Social & Direct Channels -->
      <div class="flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-5 text-xs font-mono text-white/70">
        <div class="flex flex-wrap items-center gap-4 sm:gap-5 uppercase tracking-wider">
          <a href="https://35photo.pro/faik" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-accent)] transition-colors">35PHOTO</a>
          <a href="https://500px.com/p/faiknagiyev" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-accent)] transition-colors">500px</a>
          <a href="https://youpic.com/faiknagiyev" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-accent)] transition-colors">YouPic</a>
          <a href="https://www.instagram.com/faik.nagiyev" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-accent)] transition-colors">Instagram</a>
          <a href="https://www.facebook.com/faiknagiyev.photography" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-accent)] transition-colors">Facebook</a>
        </div>
        <span class="hidden xl:inline text-white/20">|</span>
        <div class="flex flex-wrap items-center gap-4 sm:gap-5 uppercase tracking-wider">
          <a href="https://wa.me/994503222142" target="_blank" rel="noopener noreferrer" class="text-white hover:text-[var(--color-accent)] transition-colors">WhatsApp</a>
          <a href="https://t.me/faiknagiyev" target="_blank" rel="noopener noreferrer" class="text-white hover:text-[var(--color-accent)] transition-colors">Telegram</a>
          <a href="mailto:faik@nagiyev.com" class="text-white hover:text-[var(--color-accent)] transition-colors">faik@nagiyev.com</a>
        </div>
      </div>
    </div>
  `;

  function open() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  overlay.querySelector('#menu-close')?.addEventListener('click', close);
  overlay.querySelectorAll('.menu-nav-link').forEach(link => {
    link.addEventListener('click', close);
  });

  // Language buttons inside menu
  overlay.querySelectorAll('[data-menu-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-menu-lang');
      if (selected !== currentLang) {
        onLangChange(selected);
        close();
      }
    });
  });

  return { element: overlay, open, close };
}
