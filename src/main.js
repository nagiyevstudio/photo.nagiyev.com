import './styles/main.css';
import { translations } from './data/translations.js';
import portfolioData from './data/portfolioData.json';

import { createHeader } from './components/Header.js';
import { createFullscreenMenu } from './components/FullscreenMenu.js';
import { createFooter } from './components/Footer.js';
import { createLightbox } from './components/Lightbox.js';

import { renderHomeView } from './views/HomeView.js';
import { renderArchitectureView } from './views/ArchitectureView.js';
import { renderFineArtView } from './views/FineArtView.js';
import { renderAiStagingView } from './views/AiStagingView.js';
import { renderClientVaultView } from './views/ClientVaultView.js';
import { renderContactView } from './views/ContactView.js';
import { setupProtectedEmails } from './utils/obfuscate.js';

// Legacy wfolio /disk/ redirects to gallery.nagiyev.com
const checkLegacyDiskRedirects = () => {
  const path = window.location.pathname.replace(/\/+$/, '');
  const hash = (window.location.hash || '').replace(/^#\/?/, '');
  const target = path || ('/' + hash);

  const diskMap = {
    '/disk/30-07-2025-karvansaray-hotel-qabala': 'https://gallery.nagiyev.com/karvansaray-hotel-qabala',
    '/disk/metrocity-hotel': 'https://gallery.nagiyev.com/metrocity-hotel',
    '/disk/alba-hotel': 'https://gallery.nagiyev.com/alba-hotel',
    '/disk/14-06-2025-yvi-garden-hotel': 'https://gallery.nagiyev.com/ivy-garden-hotel',
    '/disk/ivy-garden-hotel': 'https://gallery.nagiyev.com/ivy-garden-hotel'
  };

  for (const [legacyPath, targetUrl] of Object.entries(diskMap)) {
    if (target.includes(legacyPath) || path === legacyPath) {
      window.location.replace(targetUrl);
      return true;
    }
  }

  if (path.startsWith('/disk') || hash.startsWith('disk/')) {
    window.location.replace('https://gallery.nagiyev.com');
    return true;
  }
  return false;
};

if (typeof window !== 'undefined') {
  checkLegacyDiskRedirects();
}

class App {
  constructor() {
    this.appEl = document.getElementById('app');
    this.currentLang = localStorage.getItem('site_lang') || 'en';
    if (!translations[this.currentLang]) {
      this.currentLang = 'en';
    }
    document.documentElement.lang = this.currentLang;

    // Lightbox singleton attached to body
    this.lightbox = createLightbox();
    document.body.appendChild(this.lightbox.element);

    // Hash-based view routing
    window.addEventListener('hashchange', () => {
      this.render();
      window.scrollTo({ top: 0, behavior: 'instant' });
    });

    this.render();
  }

  setLang(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;
    this.render();
  }

  getRoute() {
    const hash = window.location.hash || '#/';
    return hash.split('?')[0];
  }

  render() {
    const t = translations[this.currentLang];
    const route = this.getRoute();

    this.appEl.innerHTML = '';

    // 1. Fullscreen Menu Overlay
    const menu = createFullscreenMenu(
      t,
      this.currentLang,
      (lang) => this.setLang(lang)
    );
    this.appEl.appendChild(menu.element);

    // 2. Fixed Minimalist Header with Menu trigger
    const header = createHeader(() => menu.open());
    this.appEl.appendChild(header);

    // 3. Main View Container
    const mainEl = document.createElement('main');
    mainEl.className = 'w-full min-h-screen';

    let viewEl;
    switch (route) {
      case '#/architecture':
        viewEl = renderArchitectureView(
          t,
          portfolioData.architecture,
          (list, idx) => this.lightbox.open(list, idx)
        );
        break;
      case '#/fine-art':
        viewEl = renderFineArtView(
          t,
          portfolioData.fineArt,
          (list, idx) => this.lightbox.open(list, idx)
        );
        break;
      case '#/ai-staging':
        viewEl = renderAiStagingView(t);
        break;
      case '#/client-vault':
        viewEl = renderClientVaultView(t);
        break;
      case '#/contact':
        viewEl = renderContactView(t);
        break;
      case '#/':
      default:
        viewEl = renderHomeView(
          t,
          portfolioData.hero,
          (list, idx) => this.lightbox.open(list, idx)
        );
        break;
    }

    mainEl.appendChild(viewEl);
    this.appEl.appendChild(mainEl);

    // 4. Dark Angular Footer with Language Switcher & Authority Links
    const footer = createFooter(
      t,
      this.currentLang,
      (lang) => this.setLang(lang)
    );
    this.appEl.appendChild(footer);

    // 5. Initialize protected email triggers
    setupProtectedEmails(this.appEl);
  }
}

// Boot application
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
