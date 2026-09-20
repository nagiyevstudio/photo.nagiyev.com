export function renderAiStagingView(t) {
  const container = document.createElement('div');
  container.className = 'w-full min-h-screen bg-[#08090b] text-white pt-28 pb-24 px-6 sm:px-12 lg:px-16';

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

  container.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs font-mono text-[var(--color-accent)] tracking-widest uppercase mb-8 pb-4 border-b border-white/10">
        <a href="#/" class="hover:underline">HOME</a>
        <span>/</span>
        <span>HYBRID AI PRODUCTION</span>
      </div>

      <!-- Main Two-Column Editorial Spread -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <!-- Left Column: Editorial Analysis & Case Selector -->
        <div class="lg:col-span-5 space-y-8">
          <div>
            <div class="text-[11px] font-mono text-[var(--color-accent)] tracking-[0.3em] uppercase mb-2">
              TECHNICAL MANIFESTO
            </div>
            <h1 class="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6 leading-[1.08]">
              ${t.beforeAfter.title}
            </h1>
            <p class="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 font-normal">
              ${t.beforeAfter.subtitle}
            </p>
          </div>

          <!-- Case Switcher Buttons (Angular Style) -->
          <div class="space-y-3">
            <span class="text-[10px] font-mono text-white/50 tracking-widest uppercase block">
              SELECT STUDY CASE:
            </span>
            <div class="flex flex-col gap-2">
              ${casesData.map((c, idx) => `
                <button data-case-btn="${idx}" class="case-btn w-full text-left p-4 border transition-all ${idx === 0 ? 'border-[var(--color-accent)] bg-[#12151b] text-white' : 'border-white/10 bg-[#0d0f13] text-white/60 hover:text-white hover:border-white/30'}">
                  <div class="text-[11px] font-mono text-[var(--color-accent)] font-semibold mb-1">${c.tab}</div>
                  <div class="text-sm font-display font-bold text-current">${c.title}</div>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Active Case Narrative Note -->
          <div class="p-6 border border-white/10 bg-[#0e1014]">
            <span class="text-[10px] font-mono text-white/50 tracking-widest uppercase block mb-2">
              APPLIED RETOUCHING & STAGING:
            </span>
            <p id="active-case-desc" class="text-xs sm:text-sm text-white/80 leading-relaxed">
              ${casesData[0].desc}
            </p>
          </div>
        </div>

        <!-- Right Column: Sharp Angular Before / After Draggable Slider -->
        <div class="lg:col-span-7">
          <div class="relative w-full border border-white/15 bg-black overflow-hidden shadow-2xl">
            <!-- Slider Container -->
            <div id="staging-slider" class="ba-container w-full ${casesData[0].aspect}">
              <!-- AFTER IMAGE -->
              <div class="ba-after">
                <img id="staging-after-img" src="${casesData[0].afterImg}" alt="Staged Result">
                <span id="staging-after-tag" class="absolute bottom-4 right-4 z-20 px-3 py-1.5 bg-[var(--color-accent)] text-white text-[10px] font-mono font-bold tracking-widest uppercase pointer-events-none">
                  ${casesData[0].afterLabel}
                </span>
              </div>

              <!-- BEFORE IMAGE (CLIPPED) -->
              <div id="staging-clip" class="ba-before" style="width: 50%;">
                <img id="staging-before-img" src="${casesData[0].beforeImg}" alt="Raw Source" style="width: 100%;">
                <span id="staging-before-tag" class="absolute bottom-4 left-4 z-20 px-3 py-1.5 bg-black/90 text-white border border-white/20 text-[10px] font-mono font-bold tracking-widest uppercase pointer-events-none">
                  ${casesData[0].beforeLabel}
                </span>
              </div>

              <!-- Draggable Divider Line -->
              <div id="staging-handle" class="ba-handle" style="left: 50%;"></div>
            </div>

            <!-- Hint Bar -->
            <div class="p-3 bg-[#0d0f13] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50 uppercase tracking-wider">
              <span>← Drag handle to compare →</span>
              <span class="text-[var(--color-accent)] font-bold">100% Lossless RAW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Interactive Drag Logic
  const containerEl = container.querySelector('#staging-slider');
  const clipEl = container.querySelector('#staging-clip');
  const handleEl = container.querySelector('#staging-handle');
  const beforeImg = container.querySelector('#staging-before-img');
  const afterImg = container.querySelector('#staging-after-img');
  const beforeTag = container.querySelector('#staging-before-tag');
  const afterTag = container.querySelector('#staging-after-tag');
  const descEl = container.querySelector('#active-case-desc');
  const btns = container.querySelectorAll('[data-case-btn]');

  let isDragging = false;

  function updatePosition(clientX) {
    const rect = containerEl.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    const percent = (x / rect.width) * 100;

    clipEl.style.width = percent + '%';
    handleEl.style.left = percent + '%';
    beforeImg.style.width = rect.width + 'px';
    beforeImg.style.maxWidth = 'none';
  }

  function syncWidth() {
    if (containerEl && beforeImg) {
      beforeImg.style.width = containerEl.clientWidth + 'px';
      beforeImg.style.maxWidth = 'none';
    }
  }

  window.addEventListener('resize', syncWidth);
  setTimeout(syncWidth, 100);

  containerEl.addEventListener('mousedown', (e) => {
    isDragging = true;
    updatePosition(e.clientX);
  });
  window.addEventListener('mousemove', (e) => {
    if (isDragging) updatePosition(e.clientX);
  });
  window.addEventListener('mouseup', () => { isDragging = false; });

  containerEl.addEventListener('touchstart', (e) => {
    isDragging = true;
    updatePosition(e.touches[0].clientX);
  }, { passive: true });
  containerEl.addEventListener('touchmove', (e) => {
    if (isDragging) updatePosition(e.touches[0].clientX);
  }, { passive: true });
  window.addEventListener('touchend', () => { isDragging = false; });

  // Switch Cases
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-case-btn'), 10);
      const data = casesData[idx];

      btns.forEach((b, i) => {
        b.className = i === idx 
          ? 'case-btn w-full text-left p-4 border border-[var(--color-accent)] bg-[#12151b] text-white transition-all'
          : 'case-btn w-full text-left p-4 border border-white/10 bg-[#0d0f13] text-white/60 hover:text-white hover:border-white/30 transition-all';
      });

      descEl.textContent = data.desc;
      beforeTag.textContent = data.beforeLabel;
      afterTag.textContent = data.afterLabel;
      beforeImg.src = data.beforeImg;
      afterImg.src = data.afterImg;

      clipEl.style.width = '50%';
      handleEl.style.left = '50%';
      setTimeout(syncWidth, 50);
    });
  });

  return container;
}
