export function createNavbar(t, currentLang, currentTheme, onLangChange, onThemeToggle) {
  const nav = document.createElement('header');
  nav.className = 'fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b' + 
    (currentTheme === 'light' 
      ? ' bg-white/85 border-gray-200/80 text-gray-900' 
      : ' bg-[#0c0d10]/85 border-white/10 text-white');

  nav.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <!-- Brand Logo -->
      <a href="#hero" class="flex flex-col group">
        <span class="text-xl sm:text-2xl font-serif tracking-[0.2em] font-semibold text-current group-hover:text-[var(--color-accent)] transition-colors">
          FAIK NAGIYEV
        </span>
        <span class="text-[10px] tracking-[0.25em] uppercase text-[var(--color-text-muted)] font-sans -mt-1">
          Spatial & Fine Art
        </span>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden lg:flex items-center space-x-7 text-xs tracking-wider uppercase font-medium">
        <a href="#portfolio-arch" class="hover:text-[var(--color-accent)] transition-colors py-2">${t.nav.architecture}</a>
        <a href="#portfolio-art" class="hover:text-[var(--color-accent)] transition-colors py-2">${t.nav.fineArt}</a>
        <a href="#before-after" class="hover:text-[var(--color-accent)] transition-colors py-2 flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
          ${t.nav.beforeAfter}
        </a>
        <a href="#client-vault" class="hover:text-[var(--color-accent)] transition-colors py-2">${t.nav.clientVault}</a>
        <a href="#about" class="hover:text-[var(--color-accent)] transition-colors py-2">${t.nav.about}</a>
        <a href="#contact" class="hover:text-[var(--color-accent)] transition-colors py-2">${t.nav.contact}</a>
      </nav>

      <!-- Action Controls: Lang + Theme + CTA -->
      <div class="flex items-center space-x-3 sm:space-x-4">
        <!-- Language Switcher -->
        <div class="flex items-center rounded-full p-1 border border-current/15 text-[11px] font-semibold tracking-wider">
          <button data-lang="en" class="px-2 py-0.5 rounded-full transition-all ${currentLang === 'en' ? 'bg-[var(--color-accent)] text-white' : 'text-current/70 hover:text-current'}">EN</button>
          <button data-lang="az" class="px-2 py-0.5 rounded-full transition-all ${currentLang === 'az' ? 'bg-[var(--color-accent)] text-white' : 'text-current/70 hover:text-current'}">AZ</button>
          <button data-lang="ru" class="px-2 py-0.5 rounded-full transition-all ${currentLang === 'ru' ? 'bg-[var(--color-accent)] text-white' : 'text-current/70 hover:text-current'}">RU</button>
        </div>

        <!-- Theme Toggle -->
        <button id="theme-toggle" aria-label="Toggle theme" class="p-2 rounded-full border border-current/15 text-current/80 hover:text-current hover:border-[var(--color-accent)] transition-all">
          ${currentTheme === 'light' ? `
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          ` : `
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          `}
        </button>

        <!-- CTA Button -->
        <a href="#contact" class="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-xs font-semibold tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-sm">
          ${t.nav.bookBtn}
        </a>

        <!-- Mobile Menu Hamburger -->
        <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg border border-current/15" aria-label="Open mobile menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div id="mobile-menu" class="hidden lg:hidden px-6 py-6 border-t border-current/10 space-y-4 text-sm font-medium tracking-wider uppercase bg-inherit">
      <a href="#portfolio-arch" class="block py-2 hover:text-[var(--color-accent)]">${t.nav.architecture}</a>
      <a href="#portfolio-art" class="block py-2 hover:text-[var(--color-accent)]">${t.nav.fineArt}</a>
      <a href="#before-after" class="block py-2 hover:text-[var(--color-accent)]">${t.nav.beforeAfter}</a>
      <a href="#client-vault" class="block py-2 hover:text-[var(--color-accent)]">${t.nav.clientVault}</a>
      <a href="#about" class="block py-2 hover:text-[var(--color-accent)]">${t.nav.about}</a>
      <a href="#contact" class="block py-2 hover:text-[var(--color-accent)]">${t.nav.contact}</a>
      <a href="#contact" class="inline-block w-full text-center px-5 py-3 rounded-full bg-[var(--color-accent)] text-white font-semibold mt-2">
        ${t.nav.bookBtn}
      </a>
    </div>
  `;

  // Attach language click events
  nav.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      if (selected !== currentLang) {
        onLangChange(selected);
      }
    });
  });

  // Attach theme toggle
  const themeBtn = nav.querySelector('#theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', onThemeToggle);
  }

  // Mobile menu toggle
  const mobileBtn = nav.querySelector('#mobile-menu-btn');
  const mobileDrawer = nav.querySelector('#mobile-menu');
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
    mobileDrawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileDrawer.classList.add('hidden'));
    });
  }

  return nav;
}
