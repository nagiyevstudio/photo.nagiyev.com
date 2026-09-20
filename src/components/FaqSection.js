export function createFaqSection(t) {
  const section = document.createElement('section');
  section.id = 'faq';
  section.className = 'py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-current/10 bg-[var(--color-surface)]';

  section.innerHTML = `
    <div class="max-w-4xl mx-auto">
      <div class="text-center max-w-2xl mx-auto mb-14">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
          ${t.faq.badge}
        </div>
        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-current mb-3">
          ${t.faq.title}
        </h2>
        <p class="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
          ${t.faq.subtitle}
        </p>
      </div>

      <div class="space-y-4">
        ${t.faq.items.map((item, idx) => `
          <div class="faq-item border border-current/10 rounded-xl bg-[var(--color-bg)] overflow-hidden transition-all duration-200">
            <button class="faq-question w-full px-6 py-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-current hover:text-[var(--color-accent)] transition-colors">
              <span>${item.q}</span>
              <svg class="faq-chevron w-4 h-4 transform transition-transform duration-300 text-[var(--color-accent)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="faq-answer hidden px-6 pb-6 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-current/5 pt-3">
              ${item.a}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Accordion toggle behavior
  const items = section.querySelectorAll('.faq-item');
  items.forEach((el, index) => {
    const btn = el.querySelector('.faq-question');
    const answer = el.querySelector('.faq-answer');
    const chevron = el.querySelector('.faq-chevron');

    // Open first by default
    if (index === 0) {
      answer.classList.remove('hidden');
      chevron.classList.add('rotate-180');
    }

    btn.addEventListener('click', () => {
      const isOpen = !answer.classList.contains('hidden');
      // close all
      items.forEach(other => {
        other.querySelector('.faq-answer')?.classList.add('hidden');
        other.querySelector('.faq-chevron')?.classList.remove('rotate-180');
      });
      // toggle current
      if (!isOpen) {
        answer.classList.remove('hidden');
        chevron.classList.add('rotate-180');
      }
    });
  });

  return section;
}
