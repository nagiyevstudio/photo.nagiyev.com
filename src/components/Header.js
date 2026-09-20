export function createHeader(onOpenMenu) {
  const header = document.createElement('header');
  header.className = 'fixed top-0 left-0 w-full z-50 px-6 sm:px-12 py-6 flex items-center justify-between pointer-events-none transition-all duration-300';

  header.innerHTML = `
    <!-- Brand: Logo Emblem + Name with Matching Frosted Backdrop Plate -->
    <a href="#/" class="pointer-events-auto flex items-center gap-3.5 px-4 py-2 sm:px-5 sm:py-2.5 bg-black/60 hover:bg-black/80 backdrop-blur-md transition-all duration-300 group">
      <img 
        src="/images/logo.png" 
        alt="FN Monogram" 
        class="w-6 h-6 sm:w-7 sm:h-7 object-contain group-hover:scale-105 transition-transform"
      />
      <div class="flex flex-col">
        <span class="text-xs sm:text-sm font-display font-bold tracking-[0.25em] uppercase text-white group-hover:text-[var(--color-accent)] transition-colors">
          FAIK NAGIYEV
        </span>
        <span class="text-[8px] sm:text-[9px] tracking-[0.35em] uppercase text-white/50 -mt-0.5">
          Spatial & Fine Art
        </span>
      </div>
    </a>

    <!-- Right: Minimalist MENU Trigger Button with Matching Backdrop Plate -->
    <div class="pointer-events-auto flex items-center gap-4">
      <button 
        id="menu-trigger" 
        aria-label="Open Navigation Menu"
        class="flex items-center gap-3 px-5 py-2.5 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 group"
      >
        <span class="group-hover:text-[var(--color-accent)] transition-colors">MENU</span>
        <div class="flex flex-col gap-1 w-4">
          <span class="w-full h-[1.5px] bg-white group-hover:bg-[var(--color-accent)] transition-colors"></span>
          <span class="w-2/3 h-[1.5px] bg-white group-hover:bg-[var(--color-accent)] transition-colors ml-auto"></span>
        </div>
      </button>
    </div>
  `;

  header.querySelector('#menu-trigger')?.addEventListener('click', onOpenMenu);

  return header;
}
