export function createAboutSection(t) {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-current/10 bg-[var(--color-bg)] scroll-mt-20';

  section.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <!-- Left: Large Portrait / Brand Visual & Stats -->
        <div class="lg:col-span-5 space-y-6">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-current/15 aspect-[4/5] bg-black">
            <img 
              src="/images/fine-art/img-0858-hdr.jpg" 
              alt="Faik Nagiyev Landscape Masterwork" 
              class="w-full h-full object-cover filter contrast-[1.05]"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6 text-white">
              <span class="text-[10px] tracking-[0.25em] uppercase text-[var(--color-accent)] font-semibold block mb-1">
                Visual Authority
              </span>
              <h3 class="text-2xl sm:text-3xl font-serif font-bold leading-tight">
                Faik Nagiyev
              </h3>
              <p class="text-xs text-gray-300 mt-1">
                Baku, Azerbaijan • Architectural & Fine Art Photography
              </p>
            </div>
          </div>

          <!-- Quick Achievement Badges -->
          <div class="grid grid-cols-2 gap-3">
            <div class="p-4 rounded-xl border border-current/10 bg-[var(--color-surface)]">
              <div class="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-medium">Exhibitions</div>
              <div class="text-sm font-bold text-current mt-0.5">Heydar Aliyev Center</div>
            </div>
            <div class="p-4 rounded-xl border border-current/10 bg-[var(--color-surface)]">
              <div class="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-medium">Hospitality</div>
              <div class="text-sm font-bold text-current mt-0.5">150+ Hotels Documented</div>
            </div>
          </div>
        </div>

        <!-- Right: Narrative & Client Roster -->
        <div class="lg:col-span-7 space-y-8">
          <div>
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">
              <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
              ${t.about.badge}
            </div>
            <h2 class="text-3xl sm:text-5xl font-serif font-bold text-current mb-6 leading-tight">
              ${t.about.title}
            </h2>
            <div class="space-y-4 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              <p>${t.about.bio1}</p>
              <p>${t.about.bio2}</p>
              <p>${t.about.bio3}</p>
            </div>
          </div>

          <!-- Institutional Client List -->
          <div class="pt-6 border-t border-current/10">
            <h4 class="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)] mb-4">
              ${t.about.clientsHeading}
            </h4>
            <div class="flex flex-wrap gap-2.5">
              ${t.about.clientsList.map(c => `
                <span class="px-4 py-2 rounded-lg border border-current/10 bg-[var(--color-surface)] text-xs font-medium text-current hover:border-[var(--color-accent)] transition-colors">
                  ${c}
                </span>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
