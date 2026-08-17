/**
 * Header Component - SCOPE Web App (Warhol Pop-Art Edition)
 * Features Header Logo Badge with Automated Bilingual Text Loop (SCOPE. ⇄ स्कोप.)
 * Accents Intact: Left glowing pink dot and right pink square period remain stationary.
 */

export function createHeader(currentPath = '/') {
  const isHome = currentPath === '/' || currentPath === '' || currentPath === '/index.html';
  const isEstimator = currentPath === '/cost-estimator';
  const isLegal = currentPath === '/legal-hub';

  return `
    <header class="scope-header" id="scope-header">
      <div class="scope-container" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.2rem 1.5rem; gap: 1.2rem;">
        
        <!-- Top Bar: Logo & Action Controls -->
        <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          
          <!-- Header Logo Container with Stationary Pink Accents & Animated Inner Text -->
          <a href="/" class="brand-logo" data-route="/" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
            <span class="dot" style="flex-shrink: 0;"></span>
            <span id="header-logo-text" style="display: inline-block; text-align: center; min-width: 3.2ch; font-family: var(--font-display); font-weight: 900;">SCOPE</span><span style="color: var(--cmyk-pink); flex-shrink: 0;">.</span>
          </a>

          <div style="display: flex; align-items: center; gap: 1rem;">
            ${!isHome ? `
              <a href="/" class="btn-brutal cyan" data-route="/" style="font-size: 0.8rem; padding: 0.4rem 0.9rem; min-height: 38px;">
                ← BACK TO SCOPE HOME
              </a>
            ` : ''}

            <!-- User Login Tab -->
            <button id="header-login-btn" class="pop-login-tab" title="Kathmandu Valley Municipal & Architectural Login">
              <span id="header-login-indicator" style="display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: var(--cmyk-yellow, #FFE600); box-shadow: 0 0 6px var(--cmyk-yellow, #FFE600);"></span>
              <span id="header-login-btn-text">USER LOGIN</span>
            </button>
          </div>
        </div>

        <!-- CENTERED PRIMARY NAVIGATION TABS (STANDALONE WARHOL POP-ART BORDERED CARDS - COMPLETELY STATIC) -->
        <nav class="centered-nav-container">
          <a href="/" class="pop-tab-card nav-tab-home ${isHome ? 'active' : ''}" data-route="/">
            <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; margin-right: 0.4rem;">01.</span> HOME
          </a>

          <a href="/cost-estimator" class="pop-tab-card nav-tab-estimator ${isEstimator ? 'active' : ''}" data-route="/cost-estimator">
            <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; margin-right: 0.4rem;">02.</span> COST ESTIMATOR
          </a>

          <a href="/legal-hub" class="pop-tab-card nav-tab-legal ${isLegal ? 'active' : ''}" data-route="/legal-hub">
            <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; margin-right: 0.4rem;">03.</span> LEGAL HUB
          </a>
        </nav>

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
        if (loginBtn) loginBtn.classList.add('logged-in');
        if (indicatorEl) {
          indicatorEl.style.background = '#00FF66';
          indicatorEl.style.boxShadow = '0 0 8px #00FF66';
        }
      }
    }
  } catch (e) {}

  // AUTOMATED BILINGUAL TRANSITION EXCLUSIVELY ON HEADER LOGO INNER TEXT (SCOPE ⇄ स्कोप)
  // Hold: 2.5s, Transition: 0.5s (Total cycle: 3000ms)
  const logoTextEl = document.getElementById('header-logo-text');
  if (logoTextEl) {
    let isNepaliLogo = false;

    setInterval(() => {
      isNepaliLogo = !isNepaliLogo;
      const nextText = isNepaliLogo ? 'स्कोप' : 'SCOPE';
      const nextFont = isNepaliLogo 
        ? "'Noto Sans Devanagari', 'Mukta', sans-serif" 
        : "var(--font-display)";

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
