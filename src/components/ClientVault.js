export function createClientVault(t) {
  const section = document.createElement('section');
  section.id = 'client-vault';
  section.className = 'py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-current/10 bg-[var(--color-surface)] scroll-mt-20';

  section.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
          ${t.clientVault.badge}
        </div>
        <h2 class="text-3xl sm:text-5xl font-serif font-bold text-current mb-4">
          ${t.clientVault.title}
        </h2>
        <p class="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
          ${t.clientVault.subtitle}
        </p>
      </div>

      <!-- Feature Cards Grid (3 Columns) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        ${t.clientVault.features.map(f => `
          <div class="p-8 rounded-xl border border-current/10 bg-[var(--color-bg)] hover:border-[var(--color-accent)]/50 transition-all duration-300 shadow-sm hover:shadow-lg">
            <div class="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)] flex items-center justify-center mb-6">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-current mb-2">${f.title}</h3>
            <p class="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">${f.desc}</p>
          </div>
        `).join('')}
      </div>

      <!-- Live Showcase Previews (Alba Hotel & Karvansaray Hotel) -->
      <div class="mb-20">
        <div class="text-center mb-10">
          <h3 class="text-2xl sm:text-3xl font-serif font-bold text-current mb-2">
            ${t.clientVault.liveDemoTitle}
          </h3>
          <p class="text-xs sm:text-sm text-[var(--color-text-muted)]">
            Explore live working implementations running on the gallery.nagiyev.com cloud platform.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <!-- Alba Hotel Showcase Card -->
          <div class="rounded-2xl overflow-hidden border border-current/15 bg-[var(--color-bg)] shadow-xl group hover:border-[var(--color-accent)] transition-all">
            <div class="relative overflow-hidden aspect-[16/10] bg-black">
              <img 
                src="/images/client-vault/alba-hotel.png" 
                alt="ALBA Hotel Client Showcase" 
                class="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
              <div class="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <span class="text-[10px] tracking-widest uppercase text-[var(--color-accent)] font-semibold">Live Showcase 01</span>
                  <h4 class="text-xl font-bold font-serif">${t.clientVault.albaCard.name}</h4>
                </div>
                <span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-mono">1.5 GB RAW</span>
              </div>
            </div>
            <div class="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p class="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-sm">
                ${t.clientVault.albaCard.desc}
              </p>
              <a 
                href="https://gallery.nagiyev.com/alba-hotel" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-full sm:w-auto px-6 py-3 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-xs font-semibold tracking-wider uppercase transition-all text-center whitespace-nowrap shadow-md flex items-center justify-center gap-2"
              >
                ${t.clientVault.albaCard.btn}
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Karvansaray Hotel Showcase Card -->
          <div class="rounded-2xl overflow-hidden border border-current/15 bg-[var(--color-bg)] shadow-xl group hover:border-[var(--color-accent)] transition-all">
            <div class="relative overflow-hidden aspect-[16/10] bg-black">
              <img 
                src="/images/client-vault/karvansaray-hotel.png" 
                alt="Karvansaray Hotel Qabala Client Showcase" 
                class="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
              <div class="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <span class="text-[10px] tracking-widest uppercase text-[var(--color-accent)] font-semibold">Live Showcase 02</span>
                  <h4 class="text-xl font-bold font-serif">${t.clientVault.karvansarayCard.name}</h4>
                </div>
                <span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-mono">1.9 GB RAW</span>
              </div>
            </div>
            <div class="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p class="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-sm">
                ${t.clientVault.karvansarayCard.desc}
              </p>
              <a 
                href="https://gallery.nagiyev.com/alba-hotel" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-full sm:w-auto px-6 py-3 rounded-full border border-current/25 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] text-current text-xs font-semibold tracking-wider uppercase transition-all text-center whitespace-nowrap flex items-center justify-center gap-2"
              >
                ${t.clientVault.karvansarayCard.btn}
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Pricing & Retention Table -->
      <div class="max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl border border-current/15 bg-[var(--color-bg)] shadow-md">
        <div class="text-center mb-8">
          <h3 class="text-xl sm:text-2xl font-serif font-bold text-current mb-2">
            ${t.clientVault.pricingTitle}
          </h3>
          <p class="text-xs sm:text-sm text-[var(--color-text-muted)]">
            ${t.clientVault.pricingSubtitle}
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
          ${t.clientVault.tiers.map(tier => `
            <div class="p-4 rounded-xl border border-current/10 bg-[var(--color-surface)] text-center">
              <div class="text-[10px] tracking-wider uppercase font-semibold text-[var(--color-accent)] mb-1">${tier.badge}</div>
              <div class="text-sm sm:text-base font-bold text-current mb-1">${tier.cost}</div>
              <div class="text-xs text-[var(--color-text-muted)] font-medium">${tier.duration}</div>
            </div>
          `).join('')}
        </div>

        <div class="p-4 rounded-xl bg-[var(--color-accent-soft)] text-center text-xs sm:text-sm font-medium text-[var(--color-accent)]">
          <span class="font-bold">✓</span> ${t.clientVault.renewalNotice}
        </div>
      </div>
    </div>
  `;

  return section;
}
