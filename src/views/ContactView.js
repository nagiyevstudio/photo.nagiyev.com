export function renderContactView(t) {
  const container = document.createElement('div');
  container.className = 'w-full min-h-screen bg-[#08090b] text-white pt-28 pb-24 px-6 sm:px-12 lg:px-16';

  container.innerHTML = `
    <div class="max-w-5xl mx-auto space-y-20">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs font-mono text-[var(--color-accent)] tracking-widest uppercase pb-4 border-b border-white/10">
        <a href="#/" class="hover:underline">HOME</a>
        <span>/</span>
        <span>CREDENTIALS & INQUIRIES</span>
      </div>

      <!-- Section 1: Bio & Credentials -->
      <div>
        <div class="text-[11px] font-mono text-[var(--color-accent)] tracking-[0.3em] uppercase mb-3">
          ${t.about.badge}
        </div>
        <h1 class="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-white mb-8">
          ${t.about.title}
        </h1>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div class="lg:col-span-8 space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-normal">
            <p>${t.about.bio1}</p>
            <p>${t.about.bio2}</p>
            <p>${t.about.bio3}</p>
          </div>
          <div class="lg:col-span-4 space-y-3">
            <div class="p-6 bg-[#0f1115] border border-white/10">
              <div class="text-xs font-mono text-[var(--color-accent)] uppercase">Accolades</div>
              <div class="text-sm font-display font-bold text-white uppercase mt-1">Heydar Aliyev Center Finalist</div>
            </div>
            <div class="p-6 bg-[#0f1115] border border-white/10">
              <div class="text-xs font-mono text-[var(--color-accent)] uppercase">Hospitality</div>
              <div class="text-sm font-display font-bold text-white uppercase mt-1">150+ Hotels Documented</div>
            </div>
          </div>
        </div>

        <!-- Selected Clients List -->
        <div class="pt-8 border-t border-white/10">
          <div class="text-xs font-mono text-[var(--color-accent)] tracking-widest uppercase mb-4">
            ${t.about.clientsHeading}
          </div>
          <div class="flex flex-wrap gap-2.5">
            ${t.about.clientsList.map(c => `
              <span class="px-4 py-2.5 bg-[#101217] border border-white/10 text-xs font-mono text-white/90">
                ${c}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Section 2: Direct Contact Channels -->
      <div class="pt-12 border-t border-white/10">
        <div class="text-[11px] font-mono text-[var(--color-accent)] tracking-[0.3em] uppercase mb-3">
          ${t.contact.badge}
        </div>
        <h2 class="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
          ${t.contact.title}
        </h2>
        <p class="text-xs sm:text-sm text-white/60 mb-10 max-w-xl">
          ${t.contact.subtitle}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <!-- WhatsApp -->
          <a 
            href="https://wa.me/994503222142" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-6 bg-[#0f1115] hover:bg-[#141820] transition-all group flex flex-col justify-between h-36"
          >
            <div class="text-[10px] font-mono text-green-400 tracking-widest uppercase">FASTEST RESPONSE</div>
            <div>
              <div class="text-base font-display font-bold text-white uppercase group-hover:text-green-400 transition-colors">WhatsApp →</div>
              <div class="text-xs font-mono text-white/60 mt-1">+994 50 322 21 42</div>
            </div>
          </a>

          <!-- Telegram -->
          <a 
            href="https://t.me/faiknagiyev" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-6 bg-[#0f1115] hover:bg-[#141820] transition-all group flex flex-col justify-between h-36"
          >
            <div class="text-[10px] font-mono text-sky-400 tracking-widest uppercase">DIRECT CHAT</div>
            <div>
              <div class="text-base font-display font-bold text-white uppercase group-hover:text-sky-400 transition-colors">Telegram →</div>
              <div class="text-xs font-mono text-white/60 mt-1">@faiknagiyev</div>
            </div>
          </a>

          <!-- Direct Phone -->
          <a 
            href="tel:+994503222142" 
            class="p-6 bg-[#0f1115] hover:bg-[#141820] transition-all group flex flex-col justify-between h-36"
          >
            <div class="text-[10px] font-mono text-[var(--color-accent)] tracking-widest uppercase">VOICE CALL</div>
            <div>
              <div class="text-base font-display font-bold text-white uppercase group-hover:text-[var(--color-accent)] transition-colors">Direct Call →</div>
              <div class="text-xs font-mono text-white/60 mt-1">+994 50 322 21 42</div>
            </div>
          </a>

          <!-- Email (Protected against scrapers) -->
          <a 
            href="#" 
            data-protected-email
            class="p-6 bg-[#0f1115] hover:bg-[#141820] transition-all group flex flex-col justify-between h-36 cursor-pointer"
          >
            <div class="text-[10px] font-mono text-amber-400 tracking-widest uppercase">OFFICIAL EMAIL</div>
            <div>
              <div class="text-base font-display font-bold text-white uppercase group-hover:text-amber-400 transition-colors">
                <span data-email-text>faik&#64;nagiyev.com</span> →
              </div>
              <div class="text-xs font-mono text-white/60 mt-1">Commissions & PR</div>
            </div>
          </a>
        </div>

        <!-- Curated Portfolios & Social Channels -->
        <div class="pt-8 border-t border-white/10 mb-8">
          <div class="text-[11px] font-mono text-[var(--color-accent)] tracking-[0.25em] uppercase mb-4">
            CURATED PORTFOLIOS & PROFILES
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs font-mono">
            <a 
              href="https://35photo.pro/faik" 
              target="_blank" 
              rel="noopener noreferrer"
              class="p-3.5 bg-[#0f1115] hover:bg-[#161a22] text-white/80 hover:text-[var(--color-accent)] transition-colors flex items-center justify-between"
            >
              <span>35PHOTO</span>
              <span>↗</span>
            </a>
            <a 
              href="https://500px.com/p/faiknagiyev" 
              target="_blank" 
              rel="noopener noreferrer"
              class="p-3.5 bg-[#0f1115] hover:bg-[#161a22] text-white/80 hover:text-[var(--color-accent)] transition-colors flex items-center justify-between"
            >
              <span>500px</span>
              <span>↗</span>
            </a>
            <a 
              href="https://youpic.com/faiknagiyev" 
              target="_blank" 
              rel="noopener noreferrer"
              class="p-3.5 bg-[#0f1115] hover:bg-[#161a22] text-white/80 hover:text-[var(--color-accent)] transition-colors flex items-center justify-between"
            >
              <span>YouPic</span>
              <span>↗</span>
            </a>
            <a 
              href="https://www.instagram.com/faik.nagiyev" 
              target="_blank" 
              rel="noopener noreferrer"
              class="p-3.5 bg-[#0f1115] hover:bg-[#161a22] text-white/80 hover:text-[var(--color-accent)] transition-colors flex items-center justify-between"
            >
              <span>Instagram</span>
              <span>↗</span>
            </a>
            <a 
              href="https://www.facebook.com/faiknagiyev.photography" 
              target="_blank" 
              rel="noopener noreferrer"
              class="p-3.5 bg-[#0f1115] hover:bg-[#161a22] text-white/80 hover:text-[var(--color-accent)] transition-colors flex items-center justify-between"
            >
              <span>Facebook</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        <div class="text-xs font-mono text-white/50 tracking-wider">
          • ${t.contact.location}
        </div>
      </div>

      <!-- Section 3: FAQ & AEO Accordion -->
      <div class="pt-12 border-t border-white/10">
        <div class="text-[11px] font-mono text-[var(--color-accent)] tracking-[0.3em] uppercase mb-2">
          ${t.faq.badge}
        </div>
        <h2 class="text-2xl sm:text-4xl font-display font-bold uppercase text-white mb-8">
          ${t.faq.title}
        </h2>

        <div class="space-y-3">
          ${t.faq.items.map((item, idx) => `
            <div class="faq-item border border-white/10 bg-[#0d0f13] overflow-hidden">
              <button class="faq-btn w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-display font-bold text-white uppercase hover:text-[var(--color-accent)] transition-colors">
                <span>${item.q}</span>
                <span class="faq-icon text-[var(--color-accent)] font-mono text-lg">+</span>
              </button>
              <div class="faq-body hidden p-5 pt-0 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5">
                ${item.a}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // FAQ Accordion Behavior
  const items = container.querySelectorAll('.faq-item');
  items.forEach((item, index) => {
    const btn = item.querySelector('.faq-btn');
    const body = item.querySelector('.faq-body');
    const icon = item.querySelector('.faq-icon');

    if (index === 0) {
      body.classList.remove('hidden');
      icon.textContent = '−';
    }

    btn.addEventListener('click', () => {
      const isOpen = !body.classList.contains('hidden');
      items.forEach(other => {
        other.querySelector('.faq-body')?.classList.add('hidden');
        const ic = other.querySelector('.faq-icon');
        if (ic) ic.textContent = '+';
      });
      if (!isOpen) {
        body.classList.remove('hidden');
        icon.textContent = '−';
      }
    });
  });

  return container;
}
