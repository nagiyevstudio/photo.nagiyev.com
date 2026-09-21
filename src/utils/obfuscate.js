// Dynamic Email Obfuscation Helper
// Prevents spam scrapers from harvesting email addresses via static regex/HTML crawlers

const U = 'faik';
const D = 'nagiyev.com';

export function getEmail() {
  return `${U}@${D}`;
}

export function getMailto() {
  return `mailto:${getEmail()}`;
}

/**
 * Binds on-demand email reveal to elements with [data-protected-email].
 * Scrapers never see 'mailto:faik@nagiyev.com' in the initial markup or DOM.
 * Live users get instant access upon hover, touch, focus, or click.
 */
export function setupProtectedEmails(container = document) {
  const elements = container.querySelectorAll('[data-protected-email]');
  elements.forEach(el => {
    // Populate visible text dynamically
    const displayTarget = el.querySelector('[data-email-text]') || el;
    if (displayTarget.hasAttribute('data-email-text')) {
      displayTarget.textContent = getEmail();
    }

    const attachMailto = () => {
      if (el.tagName === 'A') {
        el.href = getMailto();
      }
    };

    el.addEventListener('pointerenter', attachMailto, { once: true });
    el.addEventListener('touchstart', attachMailto, { once: true, passive: true });
    el.addEventListener('focus', attachMailto, { once: true });
    
    el.addEventListener('click', (e) => {
      attachMailto();
      if (el.tagName !== 'A' || el.getAttribute('href') === '#' || el.getAttribute('href') === 'javascript:void(0)') {
        e.preventDefault();
        window.location.href = getMailto();
      }
    });
  });
}
