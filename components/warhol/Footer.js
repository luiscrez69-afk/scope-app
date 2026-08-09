/**
 * Footer Component - SCOPE Web App (Warhol Pop-Art Edition)
 * Dark Pop-Art Footer with Interactive Neobrutalist Direct Consultation Tape Banner
 * Featuring scope.kathmandu@gmail.com Infinite Marquee Ticker Loop
 */

export function createFooter() {
  return `
    <footer style="background: var(--bg-main); border-top: var(--border-thick); padding: 2rem 0 2rem;">
      <div class="scope-container">
        
        <!-- HIGH-IMPACT DIRECT CONSULTATION TAPE BANNER (REPLACES NEWSLETTER SUB FORM) -->
        <div class="direct-consultation-tape-wrap" id="consultation-tape-banner" style="background: var(--cmyk-yellow); border: 3px solid #000; box-shadow: 4px 4px 0px #00E5FF; padding: 1rem 0; overflow: hidden; position: relative; margin-bottom: 2.5rem; cursor: pointer;">
          <div class="consultation-ticker-track" id="consultation-ticker-track" style="display: flex; white-space: nowrap; width: max-content;">
            <a href="mailto:scope.kathmandu@gmail.com" class="consultation-ticker-item" style="display: inline-flex; align-items: center; gap: 1.5rem; font-family: var(--font-mono); font-size: 0.95rem; font-weight: 900; color: #000; text-decoration: none; text-transform: uppercase; padding: 0 1.5rem;">
              <span>★ DIRECT ARCHITECTURAL & MUNICIPAL CONSULTATION</span>
              <span class="email-highlight-badge" style="background: #000; color: #FFD700; padding: 0.25rem 0.7rem; border: 1px solid #FFF; font-size: 0.9rem;">➔ EMAIL: SCOPE.KATHMANDU@GMAIL.COM</span>
              <span>➔ PHONE/WHATSAPP: +977 9800000000</span>
              <span>➔ KATHMANDU VALLEY, NEPAL</span>
            </a>
            <a href="mailto:scope.kathmandu@gmail.com" class="consultation-ticker-item" style="display: inline-flex; align-items: center; gap: 1.5rem; font-family: var(--font-mono); font-size: 0.95rem; font-weight: 900; color: #000; text-decoration: none; text-transform: uppercase; padding: 0 1.5rem;">
              <span>★ DIRECT ARCHITECTURAL & MUNICIPAL CONSULTATION</span>
              <span class="email-highlight-badge" style="background: #000; color: #FFD700; padding: 0.25rem 0.7rem; border: 1px solid #FFF; font-size: 0.9rem;">➔ EMAIL: SCOPE.KATHMANDU@GMAIL.COM</span>
              <span>➔ PHONE/WHATSAPP: +977 9800000000</span>
              <span>➔ KATHMANDU VALLEY, NEPAL</span>
            </a>
          </div>
        </div>

        <div class="grid-2" style="margin-bottom: 2.5rem; align-items: center;">
          <div>
            <a href="#" class="brand-logo" style="font-size: 2.8rem; margin-bottom: 0.8rem; display: inline-flex; align-items: center; gap: 0.6rem;">
              <span class="dot" style="background: var(--cmyk-yellow);"></span>
              SCOPE<span style="color: var(--cmyk-pink)">.</span>
            </a>
            <p style="color: var(--text-muted); max-width: 500px; font-size: 0.9rem; line-height: 1.6; margin: 0;">
              SCOPE: The home you dream covered with all the information you need. Authoritative residential construction cost estimator & municipal permit portal for Kathmandu Valley.
            </p>
          </div>

          <!-- Structured Contact Details Block -->
          <div style="background: #0A0A0A; border: 2px solid #FFF; box-shadow: 4px 4px 0px var(--cmyk-pink); padding: 1.2rem; font-family: var(--font-mono); font-size: 0.8rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
              <span style="color: var(--cmyk-yellow); font-weight: 900;">DIRECT CONSULTATION HELPLINE</span>
              <span style="background: var(--cmyk-pink); color: #FFF; font-weight: 900; padding: 0.1rem 0.4rem; border: 1px solid #FFF; font-size: 0.6rem;">[ACTIVE 24/7]</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              <div>EMAIL: <a href="mailto:scope.kathmandu@gmail.com" style="color: #FFF; font-weight: 900; text-decoration: underline;">scope.kathmandu@gmail.com</a></div>
              <div>PHONE / WHATSAPP: <a href="tel:+9779800000000" style="color: #FFF; font-weight: 900; text-decoration: none;">+977 9800000000</a></div>
              <div>LOCATION: <span style="color: #AAA;">Kathmandu Valley, Bagmati Province, Nepal</span></div>
            </div>
          </div>
        </div>

        <div style="border-top: 1px dashed #333; padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; font-size: 0.8rem; color: var(--text-muted);">
          <div>
            © 2026 SCOPE DIGITAL FACTORY. CONTEMPORARY POP-ART STUDIO.
          </div>

          <div style="display: flex; gap: 1.5rem;">
            <span style="color: var(--cmyk-yellow);">C:100 M:100 Y:100 K:100</span>
            <span id="live-time-display" style="color: var(--cmyk-green);">SYS: 09:27:19 UTC</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function initFooterEvents() {
  const tapeWrap = document.getElementById('consultation-tape-banner');
  const track = document.getElementById('consultation-ticker-track');

  let tween = null;

  if (track && window.gsap) {
    tween = window.gsap.to(track, {
      xPercent: -50,
      repeat: -1,
      duration: 15,
      ease: "none"
    });

    if (tapeWrap) {
      tapeWrap.addEventListener('mouseenter', () => {
        if (tween) tween.pause();
        tapeWrap.style.background = 'var(--cmyk-pink)';
      });

      tapeWrap.addEventListener('mouseleave', () => {
        if (tween) tween.play();
        tapeWrap.style.background = 'var(--cmyk-yellow)';
      });
    }
  }

  const timeDisplay = document.getElementById('live-time-display');
  if (timeDisplay) {
    setInterval(() => {
      const now = new Date();
      timeDisplay.textContent = `SYS: ${now.toTimeString().split(' ')[0]} UTC`;
    }, 1000);
  }
}
