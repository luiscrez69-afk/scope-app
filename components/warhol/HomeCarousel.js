/**
 * HomeCarousel Component - SCOPE Web App (Warhol Pop-Art Edition)
 * Featured Section Header: THE CURRENT PREDICAMENT
 * Interactive Brutalist Issues Carousel (Issue 01 & Issue 02)
 */

export function createHomeCarousel() {
  return `
    <section class="home-carousel-section" id="home-carousel-section" style="padding: 3.5rem 0 4.5rem; background: var(--bg-main); border-bottom: var(--border-thick);">
      <div class="scope-container">
        
        <!-- Header Section -->
        <div style="text-align: center; margin-bottom: 2.5rem;">
          <div style="display: inline-block; background: #FFE600; color: #000000; font-family: var(--font-mono); font-weight: 900; font-size: 0.8rem; padding: 0.35rem 1rem; border: 2px solid var(--border-color); box-shadow: 4px 4px 0px #FF2A85; margin-bottom: 0.8rem; text-transform: uppercase;">
            ★ SYSTEMIC CHALLENGES
          </div>

          <h1 style="font-family: 'MangoGrotesque', var(--font-display); font-size: clamp(3.2rem, 7vw, 5rem); font-weight: 900; color: var(--text-main); line-height: 0.9; margin: 0.4rem 0 0; text-transform: uppercase;">
            THE CURRENT <span style="color: var(--cmyk-yellow)">PREDICAMENT</span>
          </h1>
        </div>

        <!-- Interactive Brutalist Issues Carousel Wrapper -->
        <div class="issues-carousel-container" style="max-width: 920px; margin: 0 auto; position: relative;">
          
          <!-- Top Control Bar -->
          <div class="carousel-top-bar" style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-surface); border: var(--border-thick); border-bottom: none; padding: 0.8rem 1.2rem; flex-wrap: wrap; gap: 0.8rem;">
            <div style="display: flex; align-items: center; gap: 0.8rem;">
              <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: #FF007F; box-shadow: 0 0 8px #FF007F;"></span>
              <span style="font-family: var(--font-mono); font-weight: 700; font-size: 0.85rem; color: var(--text-main); text-transform: uppercase;">
                ISSUE <span id="issues-carousel-slide-num" style="color: var(--cmyk-yellow);">01 / 02</span>
              </span>
            </div>

            <!-- Slide Dots -->
            <div class="issues-carousel-dots" style="display: flex; gap: 0.6rem;">
              <button class="carousel-dot active" data-slide="0" aria-label="Issue 01: Rural Compliance Gap" style="width: 14px; height: 14px; background: var(--cmyk-yellow); border: 2px solid var(--border-color); cursor: pointer; transition: transform 0.2s ease;"></button>
              <button class="carousel-dot" data-slide="1" aria-label="Issue 02: KMC Permit Rate" style="width: 14px; height: 14px; background: var(--text-muted); border: 2px solid var(--border-color); cursor: pointer; transition: transform 0.2s ease;"></button>
            </div>

            <!-- Keyboard & Swipe Helper Badge -->
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cmyk-cyan); font-weight: 700;">
              [ USE ◀ ▶ ARROWS OR SWIPE ]
            </div>
          </div>

          <!-- Carousel Stage Viewport -->
          <div class="issues-carousel-viewport" style="overflow: hidden; border: var(--border-thick); background: var(--bg-card); box-shadow: 8px 8px 0px #FFD700; position: relative;">
            <div class="issues-carousel-track" style="display: flex; transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1); width: 200%;">
              
              <!-- SLIDE 1: ISSUE 01 -->
              <div class="issues-carousel-slide" style="width: 50%; padding: 2rem 2.2rem; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; flex-shrink: 0; min-height: 420px; position: relative;">
                
                <!-- Top Meta Ribbon Bar -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; flex-wrap: wrap; gap: 0.8rem; border-bottom: 2px dashed #333; padding-bottom: 0.9rem;">
                  <div style="display: flex; align-items: center; gap: 0.8rem; flex-wrap: wrap;">
                    <span class="badge brutal-badge pink" style="background: #FF2A85; color: #FFF; font-family: var(--font-mono); font-weight: 900; font-size: 0.75rem; padding: 0.3rem 0.8rem; border: 2px solid #FFF; box-shadow: 3px 3px 0px #000; text-transform: uppercase;">
                      ⚠️ CRITICAL ISSUE // 01
                    </span>
                    <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--cmyk-yellow); font-weight: 700;">
                      [ RURAL MUNICIPAL COMPLIANCE GAP ]
                    </span>
                  </div>
                  <div style="background: #FFE600; color: #000; font-family: var(--font-mono); font-weight: 900; padding: 0.25rem 0.7rem; border: 1.5px solid #000; font-size: 0.75rem;">
                    FORECAST: 50% CAP
                  </div>
                </div>

                <!-- Enlarged Arch Meter & Dual KPI Columns (Style 1: Semi-Circular Gauge) -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.2rem; align-items: center; width: 100%; margin: 0.5rem 0 0.8rem;">
                  
                  <!-- Left Metric Pillar -->
                  <div style="background: #000; border: 2px solid #FFF; padding: 1.2rem; box-shadow: 4px 4px 0px #FFE600; display: flex; flex-direction: column; justify-content: center; height: 100%;">
                    <div style="font-family: var(--font-mono); font-size: 0.7rem; font-weight: 900; color: #FFE600; letter-spacing: 1px; margin-bottom: 0.4rem;">
                      ● 50% COMPLIANT
                    </div>
                    <div style="font-family: 'MangoGrotesque', var(--font-display); font-size: clamp(2.4rem, 4.5vw, 3.5rem); font-weight: 900; color: #FFF; line-height: 0.9;">
                      50% CAP
                    </div>
                    <div style="font-family: var(--font-mono); font-size: 0.7rem; color: #AAA; margin-top: 0.5rem; line-height: 1.3;">
                      Projected ceiling under current municipal technical staffing
                    </div>
                  </div>

                  <!-- Center: Enlarged Semicircular Radial Arch Gauge -->
                  <div style="background: #0A0A0A; border: 2px solid #FFF; padding: 1.2rem; box-shadow: 5px 5px 0px #FF2A85; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">
                    <div style="width: 100%; max-width: 260px; height: 135px; position: relative;">
                      <svg viewBox="0 0 260 140" width="100%" height="100%" style="overflow: visible;">
                        <!-- Gauge Background Outer Track -->
                        <path d="M 30 130 A 100 100 0 0 1 230 130" fill="none" stroke="#222" stroke-width="22" stroke-linecap="round" />
                        
                        <!-- Left Arc: 50% Compliant (Yellow) -->
                        <path d="M 30 130 A 100 100 0 0 1 130 30" fill="none" stroke="#FFE600" stroke-width="22" stroke-linecap="round" />
                        
                        <!-- Right Arc: 50% Deficit (Pink) -->
                        <path d="M 130 30 A 100 100 0 0 1 230 130" fill="none" stroke="#FF2A85" stroke-width="22" stroke-linecap="round" />
                        
                        <!-- Divider Notch at Top (50%) -->
                        <line x1="130" y1="15" x2="130" y2="45" stroke="#000" stroke-width="4" />
                        
                        <!-- Center Core Hub -->
                        <circle cx="130" cy="130" r="45" fill="#000" stroke="#FFF" stroke-width="2" />
                        <text x="130" y="118" text-anchor="middle" font-family="'Space Mono', monospace" font-size="28" font-weight="900" fill="#FFF">50%</text>
                        <text x="130" y="132" text-anchor="middle" font-family="'Space Mono', monospace" font-size="7.5" font-weight="900" fill="#FFE600" letter-spacing="1">CEILING</text>
                        
                        <!-- 0% and 100% Labels -->
                        <text x="30" y="150" text-anchor="middle" font-family="'Space Mono', monospace" font-size="9" font-weight="700" fill="#777">0%</text>
                        <text x="130" y="10" text-anchor="middle" font-family="'Space Mono', monospace" font-size="9" font-weight="900" fill="#FFE600">50% CAP</text>
                        <text x="230" y="150" text-anchor="middle" font-family="'Space Mono', monospace" font-size="9" font-weight="700" fill="#777">100%</text>
                      </svg>
                    </div>
                    <div style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 700; color: #AAA; text-align: center; margin-top: 0.6rem; letter-spacing: 0.5px;">
                      NBC 105:2020 BYLAW CAPACITY GAUGE
                    </div>
                  </div>

                  <!-- Right Metric Pillar -->
                  <div style="background: #000; border: 2px solid #FFF; padding: 1.2rem; box-shadow: 4px 4px 0px #FF2A85; display: flex; flex-direction: column; justify-content: center; height: 100%;">
                    <div style="font-family: var(--font-mono); font-size: 0.7rem; font-weight: 900; color: #FF2A85; letter-spacing: 1px; margin-bottom: 0.4rem;">
                      ▲ 50% DEFICIT
                    </div>
                    <div style="font-family: 'MangoGrotesque', var(--font-display); font-size: clamp(2.4rem, 4.5vw, 3.5rem); font-weight: 900; color: #FF2A85; line-height: 0.9;">
                      GAP 50%
                    </div>
                    <div style="font-family: var(--font-mono); font-size: 0.7rem; color: #AAA; margin-top: 0.5rem; line-height: 1.3;">
                      Engineer availability bottleneck across rural ward offices
                    </div>
                  </div>

                </div>

              </div>

              <!-- SLIDE 2: ISSUE 02 -->
              <div class="issues-carousel-slide" style="width: 50%; padding: 2rem 2.2rem; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; flex-shrink: 0; min-height: 420px; position: relative;">
                
                <!-- Top Meta Ribbon Bar -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; flex-wrap: wrap; gap: 0.8rem; border-bottom: 2px dashed #333; padding-bottom: 0.9rem;">
                  <div style="display: flex; align-items: center; gap: 0.8rem; flex-wrap: wrap;">
                    <span class="badge brutal-badge yellow" style="background: #FFE600; color: #000; font-family: var(--font-mono); font-weight: 900; font-size: 0.75rem; padding: 0.3rem 0.8rem; border: 2px solid #FFF; box-shadow: 3px 3px 0px #000; text-transform: uppercase;">
                      ⚡ CRITICAL ISSUE // 02
                    </span>
                    <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--cmyk-pink); font-weight: 700;">
                      [ KMC PRE-CONSTRUCTION PERMIT COMPLIANCE ]
                    </span>
                  </div>
                  <div style="background: #00FF66; color: #000; font-family: var(--font-mono); font-weight: 900; padding: 0.25rem 0.7rem; border: 1.5px solid #000; font-size: 0.75rem;">
                    LAST YEAR: 68% APPROVED
                  </div>
                </div>

                <!-- Enlarged 100-Unit Waffle Grid & Radial Polar Panel (Style 2: Matrix & Target) -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; align-items: center; width: 100%; margin: 0.5rem 0 0.8rem;">
                  
                  <!-- Left: 100-House Waffle Matrix Visual -->
                  <div style="background: #000; border: 2px solid #FFF; padding: 1.2rem; box-shadow: 5px 5px 0px #00FF66;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 900; border-bottom: 1px solid #333; padding-bottom: 0.4rem; flex-wrap: wrap; gap: 0.4rem;">
                      <span style="color: #00FF66;">■ 68% PRE-APPROVED (68/100)</span>
                      <span style="color: #FF2A85;">■ 32% UNREGULATED (32/100)</span>
                    </div>

                    <!-- 10x10 Matrix Cells -->
                    <div style="display: grid; grid-template-columns: repeat(10, 1fr); gap: 4px; margin-bottom: 0.8rem;">
                      ${Array.from({ length: 100 }).map((_, i) => `
                        <div style="aspect-ratio: 1; border-radius: 1px; background: ${i < 68 ? '#00FF66' : '#FF2A85'}; box-shadow: 0 0 ${i < 68 ? '3px #00FF66' : '3px #FF2A85'}; opacity: ${i < 68 ? '0.95' : '0.8'};"></div>
                      `).join('')}
                    </div>

                    <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.65rem; color: #AAA;">
                      <span>KMC RESIDENTIAL HOUSES SAMPLE (N = 100)</span>
                      <span style="color: #00FF66; font-weight: 700;">NBC-COMPLIANT CLEARANCE</span>
                    </div>
                  </div>

                  <!-- Right: Target Summary Card -->
                  <div style="background: #0A0A0A; border: 2px solid #FFF; padding: 1.3rem; box-shadow: 5px 5px 0px #FF007F; display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
                    <div>
                      <div style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 900; color: #00FF66; letter-spacing: 1px; margin-bottom: 0.4rem;">
                        ● PRE-CONSTRUCTION AUDIT
                      </div>
                      <div style="font-family: 'MangoGrotesque', var(--font-display); font-size: clamp(2.8rem, 5.5vw, 4.2rem); font-weight: 900; color: #00FF66; line-height: 0.85;">
                        68% APPROVED
                      </div>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 0.6rem; margin-top: 1rem; border-top: 1px solid #333; padding-top: 0.8rem;">
                      <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem;">
                        <span style="color: #AAA;">Pre-Build NBC Permit:</span>
                        <span style="color: #00FF66; font-weight: 900;">68% (Passed)</span>
                      </div>
                      <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem;">
                        <span style="color: #AAA;">Began Prior to Swikriti:</span>
                        <span style="color: #FF2A85; font-weight: 900;">32% (Unregulated)</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

          <!-- Bottom Navigation Controls Bar -->
          <div class="carousel-bottom-nav" style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; gap: 1rem;">
            <button id="issues-carousel-prev" class="btn-brutal cyan" style="font-size: 0.95rem; padding: 0.8rem 1.5rem;">
              ◀ PREV ISSUE
            </button>

            <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted); text-align: center;">
              <span id="issues-carousel-title-badge" style="color: var(--cmyk-yellow); font-weight: 700;">ISSUE 01: RURAL MUNICIPAL COMPLIANCE GAP</span>
            </div>

            <button id="issues-carousel-next" class="btn-brutal yellow" style="font-size: 0.95rem; padding: 0.8rem 1.5rem;">
              NEXT ISSUE ▶
            </button>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function initHomeCarouselEvents(navigateTo) {
  const track = document.querySelector('.issues-carousel-track');
  const slideNum = document.getElementById('issues-carousel-slide-num');
  const titleBadge = document.getElementById('issues-carousel-title-badge');
  const dots = document.querySelectorAll('.issues-carousel-dots .carousel-dot');
  const prevBtn = document.getElementById('issues-carousel-prev');
  const nextBtn = document.getElementById('issues-carousel-next');
  const container = document.querySelector('.issues-carousel-viewport');

  if (!track) return;

  let currentSlide = 0;
  const totalSlides = 2;

  const slideTitles = [
    "ISSUE 01: RURAL MUNICIPAL COMPLIANCE GAP",
    "ISSUE 02: KMC PRE-CONSTRUCTION PERMIT COMPLIANCE"
  ];

  function updateCarousel(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 50}%)`;

    if (slideNum) {
      slideNum.textContent = `0${currentSlide + 1} / 0${totalSlides}`;
    }

    if (titleBadge) {
      titleBadge.textContent = slideTitles[currentSlide];
      titleBadge.style.color = currentSlide === 0 ? 'var(--cmyk-yellow)' : 'var(--cmyk-pink)';
    }

    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.classList.add('active');
        dot.style.background = currentSlide === 0 ? 'var(--cmyk-yellow)' : 'var(--cmyk-pink)';
        dot.style.transform = 'scale(1.2)';
      } else {
        dot.classList.remove('active');
        dot.style.background = '#333';
        dot.style.transform = 'scale(1)';
      }
    });
  }

  // Prev / Next button listeners
  if (prevBtn) prevBtn.addEventListener('click', () => updateCarousel(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateCarousel(currentSlide + 1));

  // Dot navigation listeners
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const index = parseInt(e.currentTarget.getAttribute('data-slide'), 10);
      updateCarousel(index);
    });
  });

  // Keyboard Left / Right Navigation (Scoped)
  const handleKeyDown = (e) => {
    if (!document.getElementById('home-issues-carousel')) return;
    if (document.activeElement && ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
    if (e.key === 'ArrowLeft') {
      updateCarousel(currentSlide - 1);
    } else if (e.key === 'ArrowRight') {
      updateCarousel(currentSlide + 1);
    }
  };
  document.addEventListener('keydown', handleKeyDown);

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  if (container) {
    container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        updateCarousel(currentSlide + 1);
      } else if (touchEndX - touchStartX > 50) {
        updateCarousel(currentSlide - 1);
      }
    }, { passive: true });
  }
}
