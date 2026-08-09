/**
 * Navbar Component - SCOPE Web App
 * Pop-Art Header Navigation with CMYK Mode Switcher
 */

export function createNavbar() {
  return `
    <header class="scope-header">
      <div class="scope-container">
        <nav class="nav-wrapper">
          <a href="#" class="brand-logo" id="nav-brand">
            <span class="dot"></span>
            SCOPE<span style="color: var(--cmyk-yellow)">.</span>
          </a>

          <ul class="nav-links">
            <li><a href="#gallery-section" class="nav-link">01 // GALLERY</a></li>
            <li><a href="#studio-section" class="nav-link">02 // CMYK STUDIO</a></li>
            <li><a href="#quote-section" class="nav-link">03 // QUOTES</a></li>
            <li><a href="#schedule-section" class="nav-link">04 // SCHEDULE</a></li>
          </ul>

          <div style="display: flex; gap: 1rem; align-items: center;">
            <div class="hero-badge" style="font-size: 0.75rem; padding: 0.2rem 0.6rem; cursor: default;">
              <span>● LIVE</span>
              <span style="color: var(--cmyk-yellow); font-weight: 900;">NYC-FACTORY</span>
            </div>
            
            <button id="cmyk-mode-btn" class="btn-brutal cyan" style="font-size: 0.85rem; padding: 0.4rem 0.9rem;">
              CMYK FX: OFF
            </button>
          </div>
        </nav>
      </div>
    </header>
  `;
}

export function initNavbarEvents() {
  const cmykBtn = document.getElementById('cmyk-mode-btn');
  let activeFX = false;

  if (cmykBtn) {
    cmykBtn.addEventListener('click', () => {
      activeFX = !activeFX;
      document.body.classList.toggle('cmyk-split-mode', activeFX);
      cmykBtn.textContent = activeFX ? 'CMYK FX: ON' : 'CMYK FX: OFF';
      cmykBtn.style.background = activeFX ? 'var(--cmyk-pink)' : 'var(--cmyk-cyan)';
      cmykBtn.style.color = activeFX ? '#FFFFFF' : '#000000';
    });
  }
}
