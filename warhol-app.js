/**
 * Main Application Router & Entrypoint - Original Warhol Pop-Art SCOPE
 * Implements Multi-Page Client Routing ('/', '/cost-estimator', '/legal-hub')
 */

import { createHeader, initHeaderEvents } from './components/warhol/Header.js';
import { createHero, initHeroEvents } from './components/warhol/Hero.js';
import { createHomeCarousel, initHomeCarouselEvents } from './components/warhol/HomeCarousel.js';
import { createCostEstimator, initCostEstimatorEvents } from './components/warhol/CostEstimator.js';
import { createPermitHub, initPermitHubEvents } from './components/warhol/PermitHub.js';
import { createFooter, initFooterEvents } from './components/warhol/Footer.js';
import { createLoginModal, initLoginModalEvents } from './components/LoginModal.js';

// Route Resolution Helper
function resolveRoute() {
  const pathname = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (hash.includes('legal-hub') || pathname.includes('legal-hub')) {
    return '/legal-hub';
  }
  if (hash.includes('cost-estimator') || pathname.includes('cost-estimator')) {
    return '/cost-estimator';
  }
  return '/';
}

function navigateTo(path) {
  if (path === '/cost-estimator') {
    window.location.hash = '#/cost-estimator';
  } else if (path === '/legal-hub') {
    window.location.hash = '#/legal-hub';
  } else {
    window.location.hash = '#/';
  }
  renderCurrentRoute();
}

function openLoginModal() {
  const modal = document.getElementById('scope-login-modal');
  if (modal) modal.classList.add('active');
}

function renderCurrentRoute() {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  const route = resolveRoute();

  if (route === '/cost-estimator') {
    appRoot.innerHTML = `
      ${createHeader('/cost-estimator')}
      <main>
        <section style="padding: 2.5rem 0 4rem; background: var(--bg-main);">
          ${createCostEstimator()}
        </section>
      </main>
      ${createFooter()}
      ${createLoginModal()}
    `;

    initHeaderEvents(navigateTo, openLoginModal);
    initCostEstimatorEvents();
    initFooterEvents();
    initLoginModalEvents(() => renderCurrentRoute());

  } else if (route === '/legal-hub') {
    appRoot.innerHTML = `
      ${createHeader('/legal-hub')}
      <main>
        <section style="padding: 2.5rem 0 4rem; background: var(--bg-main);">
          ${createPermitHub()}
        </section>
      </main>
      ${createFooter()}
      ${createLoginModal()}
    `;

    initHeaderEvents(navigateTo, openLoginModal);
    initPermitHubEvents();
    initFooterEvents();
    initLoginModalEvents(() => renderCurrentRoute());

  } else {
    appRoot.innerHTML = `
      ${createHeader('/')}
      <main>
        ${createHero()}
        ${createHomeCarousel()}
      </main>
      ${createFooter()}
      ${createLoginModal()}
    `;

    initHeaderEvents(navigateTo, openLoginModal);
    initHeroEvents();
    initHomeCarouselEvents(navigateTo);
    initFooterEvents();
    initLoginModalEvents(() => renderCurrentRoute());

    // Bind all data-route buttons
    document.querySelectorAll('[data-route]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetRoute = btn.getAttribute('data-route');
        navigateTo(targetRoute);
      });
    });
  }

  // Scroll to top on page navigation
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initApp() {
  renderCurrentRoute();
  window.addEventListener('hashchange', renderCurrentRoute);
  window.addEventListener('popstate', renderCurrentRoute);
  console.log('⚡ [WARHOL SCOPE] Original Warhol Router Active');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
