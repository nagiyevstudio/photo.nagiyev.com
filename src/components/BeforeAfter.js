export function createBeforeAfter(t) {
  const section = document.createElement('section');
  section.id = 'before-after';
  section.className = 'py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-current/10 bg-[var(--color-bg)]';

  const casesData = [
    {
      id: 'case2',
      tab: t.beforeAfter.cases.case2.tab,
      title: t.beforeAfter.cases.case2.title,
      desc: t.beforeAfter.cases.case2.desc,
      beforeImg: '/images/before-after/case2-before.jpg',
      afterImg: '/images/before-after/case2-after.jpg',
      beforeLabel: t.beforeAfter.cases.case2.beforeLabel,
      afterLabel: t.beforeAfter.cases.case2.afterLabel,
      aspect: 'aspect-[3/2]'
    },
    {
      id: 'case3',
      tab: t.beforeAfter.cases.case3.tab,
      title: t.beforeAfter.cases.case3.title,
      desc: t.beforeAfter.cases.case3.desc,
      beforeImg: '/images/before-after/case3-before-aligned.jpg',
      afterImg: '/images/before-after/case3-after.jpg',
      beforeLabel: t.beforeAfter.cases.case3.beforeLabel,
      afterLabel: t.beforeAfter.cases.case3.afterLabel,
      aspect: 'aspect-[1486/1200]'
    },
    {
      id: 'case1',
      tab: t.beforeAfter.cases.case1.tab,
      title: t.beforeAfter.cases.case1.title,
      desc: t.beforeAfter.cases.case1.desc,
      beforeImg: '/images/before-after/case1-before.jpg',
      afterImg: '/images/before-after/case1-after.jpg',
      beforeLabel: t.beforeAfter.cases.case1.beforeLabel,
      afterLabel: t.beforeAfter.cases.case1.afterLabel,
      aspect: 'aspect-[616/338]'
    }
  ];

  let currentCaseIdx = 0;

  section.innerHTML = `
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
          ${t.beforeAfter.badge}
        </div>
        <h2 class="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-current mb-4">
          ${t.beforeAfter.title}
        </h2>
        <p class="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
          ${t.beforeAfter.subtitle}
        </p>
      </div>

      <!-- Case Selection Tabs -->
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
        ${casesData.map((c, idx) => `
          <button data-case-idx="${idx}" class="case-btn px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${idx === 0 ? 'bg-[var(--color-accent)] text-white shadow-lg' : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-current border border-current/10'}">
            ${c.tab}
          </button>
        `).join('')}
      </div>

      <!-- Active Case Information -->
      <div id="case-meta" class="text-center max-w-2xl mx-auto mb-6">
        <h3 id="case-title" class="text-xl sm:text-2xl font-serif font-bold text-current mb-2">
          ${casesData[0].title}
        </h3>
        <p id="case-desc" class="text-xs sm:text-sm text-[var(--color-text-muted)]">
          ${casesData[0].desc}
        </p>
      </div>

      <!-- Interactive Slider Container -->
      <div id="slider-wrapper" class="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-current/15 bg-black">
        <div id="ba-interactive" class="ba-container w-full ${casesData[0].aspect}">
          <!-- AFTER Image (Background) -->
          <div class="ba-after">
            <img id="after-img" src="${casesData[0].afterImg}" alt="After Staging">
            <span id="after-badge" class="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-[11px] font-bold tracking-wider uppercase shadow-lg pointer-events-none">
              ${casesData[0].afterLabel}
            </span>
          </div>

          <!-- BEFORE Image (Clipped Overlay) -->
          <div id="ba-clip" class="ba-before" style="width: 50%;">
            <img id="before-img" src="${casesData[0].beforeImg}" alt="Before Staging" style="width: 100%;">
            <span id="before-badge" class="absolute bottom-4 left-4 z-20 px-3 py-1 rounded-full bg-black/80 text-white border border-white/20 text-[11px] font-bold tracking-wider uppercase shadow-lg pointer-events-none">
              ${casesData[0].beforeLabel}
            </span>
          </div>

          <!-- Draggable Divider Handle -->
          <div id="ba-handle" class="ba-handle" style="left: 50%;"></div>
        </div>

        <!-- Instruction Overlay Hint -->
        <div class="absolute top-4 left-1/2 -translate-x-1/2 z-30 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-medium tracking-wider uppercase pointer-events-none flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-[var(--color-accent)] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
          </svg>
          ${t.beforeAfter.instruction}
        </div>
      </div>
    </div>
  `;

  // Interaction Logic
  const container = section.querySelector('#ba-interactive');
  const clip = section.querySelector('#ba-clip');
  const handle = section.querySelector('#ba-handle');
  const beforeImg = section.querySelector('#before-img');
  const afterImg = section.querySelector('#after-img');
  const caseTitle = section.querySelector('#case-title');
  const caseDesc = section.querySelector('#case-desc');
  const beforeBadge = section.querySelector('#before-badge');
  const afterBadge = section.querySelector('#after-badge');
  const caseBtns = section.querySelectorAll('.case-btn');

  let isDragging = false;

  function updateSliderPosition(clientX) {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    const percent = (x / rect.width) * 100;

    clip.style.width = percent + '%';
    handle.style.left = percent + '%';
    // Ensure inner image stays full container width despite parent clip
    beforeImg.style.width = rect.width + 'px';
    beforeImg.style.maxWidth = 'none';
  }

  // Handle window resize to keep beforeImg matching container width
  function syncImageWidth() {
    if (container && beforeImg) {
      beforeImg.style.width = container.clientWidth + 'px';
      beforeImg.style.maxWidth = 'none';
    }
  }
  window.addEventListener('resize', syncImageWidth);
  setTimeout(syncImageWidth, 100);

  // Mouse Events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX);
  });
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });
  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Events (Mobile)
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });
  container.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });
  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Switch Case tabs
  caseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-case-idx'), 10);
      currentCaseIdx = idx;
      const data = casesData[idx];

      // Update UI buttons
      caseBtns.forEach((b, i) => {
        if (i === idx) {
          b.className = 'case-btn px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all bg-[var(--color-accent)] text-white shadow-lg';
        } else {
          b.className = 'case-btn px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-current border border-current/10';
        }
      });

      // Update Case Info
      caseTitle.textContent = data.title;
      caseDesc.textContent = data.desc;
      beforeBadge.textContent = data.beforeLabel;
      afterBadge.textContent = data.afterLabel;

      // Update Images
      beforeImg.src = data.beforeImg;
      afterImg.src = data.afterImg;

      // Reset to 50%
      clip.style.width = '50%';
      handle.style.left = '50%';
      setTimeout(syncImageWidth, 50);
    });
  });

  return section;
}
