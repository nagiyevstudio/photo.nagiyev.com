export function createContactSection(t) {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg)] scroll-mt-20';

  section.innerHTML = `
    <div class="max-w-5xl mx-auto text-center">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">
        <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
        ${t.contact.badge}
      </div>
      <h2 class="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-current mb-4">
        ${t.contact.title}
      </h2>
      <p class="text-sm sm:text-base text-[var(--color-text-muted)] max-w-xl mx-auto mb-12 leading-relaxed">
        ${t.contact.subtitle}
      </p>

      <!-- Contact Channels Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
        <!-- WhatsApp -->
        <a 
          href="https://wa.me/994503222142" 
          target="_blank" 
          rel="noopener noreferrer"
          class="p-6 rounded-2xl border border-current/10 bg-[var(--color-surface)] hover:border-green-500/50 hover:shadow-lg transition-all group flex flex-col items-center justify-center text-center"
        >
          <div class="w-12 h-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.564 5.714 5.864-1.538c1.701.928 3.652 1.458 5.72 1.458 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
            </svg>
          </div>
          <span class="text-xs uppercase tracking-wider font-semibold text-current mb-1">WhatsApp</span>
          <span class="text-[11px] text-[var(--color-text-muted)] font-mono">+994 50 322 21 42</span>
        </a>

        <!-- Telegram -->
        <a 
          href="https://t.me/faiknagiyev" 
          target="_blank" 
          rel="noopener noreferrer"
          class="p-6 rounded-2xl border border-current/10 bg-[var(--color-surface)] hover:border-sky-500/50 hover:shadow-lg transition-all group flex flex-col items-center justify-center text-center"
        >
          <div class="w-12 h-12 rounded-full bg-sky-500/10 text-sky-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.34-.675.34l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.957z"/>
            </svg>
          </div>
          <span class="text-xs uppercase tracking-wider font-semibold text-current mb-1">Telegram</span>
          <span class="text-[11px] text-[var(--color-text-muted)] font-mono">@faiknagiyev</span>
        </a>

        <!-- Direct Call -->
        <a 
          href="tel:+994503222142" 
          class="p-6 rounded-2xl border border-current/10 bg-[var(--color-surface)] hover:border-[var(--color-accent)]/50 hover:shadow-lg transition-all group flex flex-col items-center justify-center text-center"
        >
          <div class="w-12 h-12 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>
          <span class="text-xs uppercase tracking-wider font-semibold text-current mb-1">${t.contact.call}</span>
          <span class="text-[11px] text-[var(--color-text-muted)] font-mono">+994 50 322 21 42</span>
        </a>

        <!-- Email (Protected against scrapers) -->
        <a 
          href="#" 
          data-protected-email
          class="p-6 rounded-2xl border border-current/10 bg-[var(--color-surface)] hover:border-amber-500/50 hover:shadow-lg transition-all group flex flex-col items-center justify-center text-center cursor-pointer"
        >
          <div class="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <span class="text-xs uppercase tracking-wider font-semibold text-current mb-1">Email</span>
          <span class="text-[11px] text-[var(--color-text-muted)] font-mono" data-email-text>faik&#64;nagiyev.com</span>
        </a>
      </div>

      <!-- Location Badge -->
      <div class="inline-flex items-center gap-2 text-xs text-[var(--color-text-muted)] tracking-wider">
        <svg class="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        ${t.contact.location}
      </div>
    </div>
  `;

  return section;
}
