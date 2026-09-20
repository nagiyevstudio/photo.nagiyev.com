export function renderClientVaultView(t) {
  const container = document.createElement('div');
  container.className = 'w-full min-h-screen bg-[#08090b] text-white pt-28 pb-24 px-6 sm:px-12 lg:px-16';

  container.innerHTML = `
    <div class="max-w-6xl mx-auto space-y-24">
      <!-- Page Header -->
      <div>
        <div class="flex items-center gap-2 text-xs font-mono text-[var(--color-accent)] tracking-widest uppercase mb-4">
          <a href="#/" class="hover:underline">HOME</a>
          <span>/</span>
          <span>CLIENT VAULT & SHOWROOM</span>
        </div>
        <h1 class="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-white mb-6">
          ${t.clientVault.title}
        </h1>
        <p class="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-3xl">
          ${t.clientVault.subtitle}
        </p>
      </div>

      <!-- Blog Story 1: Adaptive Theming (Screenshot 01.png - Half Text, Half Image, No Cropping) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        <!-- Text Column (Half width) -->
        <div class="lg:col-span-5 space-y-5">
          <div class="text-[11px] font-mono text-[var(--color-accent)] tracking-[0.25em] uppercase">
            01 / ADAPTIVE EXPERIENCE
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase text-white leading-tight">
            ${t.clientVault.features[2].title}
          </h2>
          <p class="text-sm sm:text-base text-white/75 leading-relaxed">
            ${t.clientVault.features[2].desc}
          </p>
          <p class="text-sm sm:text-base text-white/60 leading-relaxed font-normal">
            Платформа автоматически подстраивается под цветовую тему гостя или бренд отеля: глубокий тёмный режим для кинематографичной атмосферы и чистый светлый режим для официальных презентаций.
          </p>
          <div class="pt-2">
            <a 
              href="https://gallery.nagiyev.com/alba-hotel" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-accent)] hover:underline uppercase tracking-wider"
            >
              <span>gallery.nagiyev.com/alba-hotel</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M14 4h6m0 0v6m0-6L10 14M6 6H4v14h14v-2"></path></svg>
            </a>
          </div>
        </div>

        <!-- Image Column: 01.png in full without cropping (Half width, Transparent PNG, No Background) -->
        <div class="lg:col-span-7 flex items-center justify-center">
          <img 
            src="/images/client-vault/01.png" 
            alt="Client Showroom Adaptive Dark & Light Themes" 
            class="w-full h-auto object-contain block"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Blog Story 2: Full Height Gallery View ('karvasaray-gallery.png' in full, No cropping) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        <!-- Gallery Screenshot in Full Height (No cropping, No headers, No footers) -->
        <div class="lg:col-span-7 order-2 lg:order-1">
          <img 
            src="/images/client-vault/karvasaray-gallery.png" 
            alt="Showroom Gallery Grid Layout" 
            class="w-full h-auto object-contain block shadow-2xl"
            loading="lazy"
          />
        </div>

        <!-- Text Column on Right (Sticky alongside full-height screenshot) -->
        <div class="lg:col-span-5 space-y-5 order-1 lg:order-2 lg:sticky lg:top-28">
          <div class="text-[11px] font-mono text-[var(--color-accent)] tracking-[0.25em] uppercase">
            02 / GALLERY STRUCTURE
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase text-white leading-tight">
            ${t.clientVault.features[1].title}
          </h2>
          <p class="text-sm sm:text-base text-white/75 leading-relaxed">
            ${t.clientVault.features[1].desc}
          </p>
          <p class="text-sm sm:text-base text-white/75 leading-relaxed">
            ${t.clientVault.features[0].desc}
          </p>
          <div class="pt-2">
            <a 
              href="https://gallery.nagiyev.com/alba-hotel" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-accent)] hover:underline uppercase tracking-wider"
            >
              <span>Explore Live Gallery Showcase</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M14 4h6m0 0v6m0-6L10 14M6 6H4v14h14v-2"></path></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Section 3: Complimentary Retention Framework (Clean, Borderless) -->
      <div class="p-8 sm:p-10 bg-[#0c0e12]">
        <div class="mb-8">
          <div class="text-[11px] font-mono text-[var(--color-accent)] tracking-widest uppercase mb-2">
            COMMERCIAL POLICY & RETENTION
          </div>
          <h3 class="text-2xl sm:text-4xl font-display font-bold uppercase text-white">
            ${t.clientVault.pricingTitle}
          </h3>
          <p class="text-xs sm:text-sm text-white/60 mt-1">
            ${t.clientVault.pricingSubtitle}
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
          ${t.clientVault.tiers.map(tier => `
            <div class="p-4 bg-[#12151b]/90">
              <span class="text-[10px] font-mono text-[var(--color-accent)] uppercase block mb-1">${tier.badge}</span>
              <div class="text-sm sm:text-base font-display font-bold text-white mb-1">${tier.cost}</div>
              <div class="text-xs text-white/70 font-mono">${tier.duration}</div>
            </div>
          `).join('')}
        </div>

        <div class="p-4 bg-white/5 text-xs sm:text-sm font-mono text-white/90 flex items-center gap-3">
          <span class="text-[var(--color-accent)] font-bold">→</span>
          <span>${t.clientVault.renewalNotice}</span>
        </div>
      </div>
    </div>
  `;

  return container;
}
