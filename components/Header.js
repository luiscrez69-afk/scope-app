/**
 * Header Component - SCOPE Web App (Nothing Tech Inspired)
 * Features Header Logo Badge with Automated Bilingual Text Loop (SCOPE. ⇄ स्कोप.)
 * Accents Intact: Left LED dot and right branding remain stationary.
 */

export function createHeader(currentPath = '/') {
  const isHome = currentPath === '/' || currentPath === '' || currentPath === '/index.html';
  const isEstimator = currentPath === '/cost-estimator';
  const isLegal = currentPath === '/legal-hub';

  return `
    <header class="scope-header" id="scope-header">
      <div class="scope-container">
        <div class="floating-glass-nav">
          
          <!-- Header Logo Badge Container with Stationary Accents & Animated Inner Text -->
          <a href="/" class="brand-logo" data-route="/" style="display: inline-flex; align-items: center; text-decoration: none;">
            <span class="dot-led" style="flex-shrink: 0;"></span>
            NOTHING<span style="color: var(--nothing-red); font-size: 0.8rem; margin: 0 0.15rem;">®</span> // <span id="header-logo-text" style="display: inline-block; min-width: 3.2ch; text-align: center;">SCOPE</span>
          </a>

          <!-- Navigation Pill Dock (Completely Static) -->
          <nav class="centered-nav-container">
            <a href="/" class="pop-tab-card nav-tab-home ${isHome ? 'active' : ''}" data-route="/">
              <span style="font-family: var(--font-mono); font-size: 0.7rem; opacity: 0.7; margin-right: 0.3rem;">(01)</span> HOME
            </a>

            <a href="/cost-estimator" class="pop-tab-card nav-tab-estimator ${isEstimator ? 'active' : ''}" data-route="/cost-estimator">
              <span style="font-family: var(--font-mono); font-size: 0.7rem; opacity: 0.7; margin-right: 0.3rem;">(02)</span> COST ESTIMATOR
            </a>

            <a href="/legal-hub" class="pop-tab-card nav-tab-legal ${isLegal ? 'active' : ''}" data-route="/legal-hub">
              <span style="font-family: var(--font-mono); font-size: 0.7rem; opacity: 0.7; margin-right: 0.3rem;">(03)</span> LEGAL HUB
            </a>
          </nav>

          <!-- Live Status & User Login Tab -->
          <div style="display: flex; align-items: center; gap: 0.8rem;">
            <!-- User Login Tab -->
            <button id="header-login-btn" class="pop-login-tab" style="background: rgba(255,255,255,0.06); border: 1px solid var(--border-color); border-radius: var(--radius-pill); box-shadow: none; font-size: 0.72rem; padding: 0.35rem 0.85rem;" title="Kathmandu Valley Municipal & Architectural Login">
              <span id="header-login-indicator" style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--nothing-red); box-shadow: 0 0 6px var(--nothing-red);"></span>
              <span id="header-login-btn-text">USER LOGIN</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  `;
}

export function initHeaderEvents(onNavigate, onOpenLogin) {
  // Navigation Link Handlers
  document.querySelectorAll('[data-route]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const route = el.getAttribute('data-route');
      if (onNavigate) onNavigate(route);
    });
  });

  // User Login Tab Click Handler
  const loginBtn = document.getElementById('header-login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (onOpenLogin) {
        onOpenLogin();
      } else {
        const modal = document.getElementById('scope-login-modal');
        if (modal) modal.classList.add('active');
      }
    });
  }

  // Update Header Button State based on persistent user session
  try {
    const rawUser = localStorage.getItem('scope_user_session');
    if (rawUser) {
      const user = JSON.parse(rawUser);
      const textEl = document.getElementById('header-login-btn-text');
      const indicatorEl = document.getElementById('header-login-indicator');
      if (textEl && user.name) {
        textEl.textContent = user.name.toUpperCase();
        if (indicatorEl) {
          indicatorEl.style.background = '#00FF66';
          indicatorEl.style.boxShadow = '0 0 8px #00FF66';
        }
      }
    }
  } catch (e) {}

  // AUTOMATED BILINGUAL TRANSITION EXCLUSIVELY ON HEADER LOGO INNER TEXT (SCOPE ⇄ स्कोप)
  const logoTextEl = document.getElementById('header-logo-text');
  if (logoTextEl) {
    let isNepaliLogo = false;

    setInterval(() => {
      isNepaliLogo = !isNepaliLogo;
      const nextText = isNepaliLogo ? 'स्कोप' : 'SCOPE';
      const nextFont = isNepaliLogo 
        ? "'Noto Sans Devanagari', 'Mukta', sans-serif" 
        : "inherit";

      if (window.gsap) {
        window.gsap.to(logoTextEl, {
          y: -10,
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => {
            logoTextEl.textContent = nextText;
            logoTextEl.style.fontFamily = nextFont;
            logoTextEl.style.fontWeight = '900';

            window.gsap.fromTo(logoTextEl,
              { y: 10, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" }
            );
          }
        });
      } else {
        logoTextEl.textContent = nextText;
        logoTextEl.style.fontFamily = nextFont;
      }
    }, 3000);
  }
}
