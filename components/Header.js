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

          <!-- Live Status Indicator Pill & Switcher -->
          <div style="display: flex; align-items: center; gap: 0.8rem;">
            <!-- Link to Original Warhol Design -->
            <a href="/warhol.html#/" title="View Original Warhol Dark Pop-Art Design" style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); text-decoration: none; border: 1px solid rgba(255, 255, 255, 0.2); padding: 0.35rem 0.8rem; border-radius: var(--radius-pill); transition: all 0.2s ease; font-weight: 700; letter-spacing: 0.5px;">
              ⚡ WARHOL DESIGN
            </a>

            <div style="display: flex; align-items: center; gap: 0.5rem; background: rgba(255, 255, 255, 0.05); padding: 0.35rem 0.85rem; border-radius: var(--radius-pill); border: 1px solid rgba(255, 255, 255, 0.12);">
              <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--nothing-red); box-shadow: 0 0 8px var(--nothing-red);"></span>
              <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-main); font-weight: 700; letter-spacing: 1px;">KMC // LIVE</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  `;
}

export function initHeaderEvents(onNavigate) {
  // Navigation Link Handlers
  document.querySelectorAll('[data-route]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const route = el.getAttribute('data-route');
      if (onNavigate) onNavigate(route);
    });
  });

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
