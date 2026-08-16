/**
 * HomeCarousel Component - SCOPE Web App (Nothing Tech Inspired)
 * Featured Section Header: THE CURRENT PREDICAMENT
 * Interactive Hardware Issues Carousel (Issue 01 & Issue 02)
 */

export function createHomeCarousel() {
  return `
    <section class="home-carousel-section" id="home-carousel-section" style="padding: 3.5rem 0 4.5rem; background: var(--bg-main); border-bottom: 1px solid var(--border-color);">
      <div class="scope-container">
        
        <!-- Header Section -->
        <div style="text-align: center; margin-bottom: 2.5rem;">
          <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255, 255, 255, 0.05); color: var(--text-main); font-family: var(--font-mono); font-size: 0.75rem; padding: 0.35rem 1rem; border-radius: var(--radius-pill); border: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1.5px;">
            <span style="color: var(--nothing-red)">●</span> SYSTEMIC CHALLENGES
          </div>

          <h2 style="font-family: var(--font-display); font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; color: var(--text-main); line-height: 1; margin: 0.4rem 0 0; text-transform: uppercase; letter-spacing: 1px;">
            THE CURRENT <span style="color: var(--nothing-red)">PREDICAMENT</span>
          </h2>
        </div>

        <!-- Interactive Hardware Issues Carousel Wrapper -->
        <div class="issues-carousel-container" style="max-width: 920px; margin: 0 auto; position: relative;">
          
          <!-- Top Control Header Bar -->
          <div class="carousel-top-bar" style="display: flex; justify-content: space-between; align-items: center; background: rgba(18, 18, 18, 0.9); backdrop-filter: blur(16px); border: 1px solid var(--border-color); border-bottom: none; border-radius: var(--radius-lg) var(--radius-lg) 0 0; padding: 1rem 1.5rem; flex-wrap: wrap; gap: 0.8rem;">
            <div style="display: flex; align-items: center; gap: 0.8rem;">
              <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--nothing-red); box-shadow: 0 0 10px var(--nothing-red);"></span>
              <span style="font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem; color: var(--text-main); letter-spacing: 1.5px; text-transform: uppercase;">
                ISSUE <span id="issues-carousel-slide-num" style="color: var(--nothing-red);">01 / 02</span>
              </span>
            </div>

            <!-- Slide Dots -->
            <div class="issues-carousel-dots" style="display: flex; gap: 0.6rem;">
              <button class="carousel-dot active" data-slide="0" aria-label="Issue 01" style="width: 12px; height: 12px; background: var(--nothing-red); border: 1px solid #FFF; cursor: pointer; transition: transform 0.2s ease;"></button>
              <button class="carousel-dot" data-slide="1" aria-label="Issue 02" style="width: 12px; height: 12px; background: #333; border: 1px solid #555; cursor: pointer; transition: transform 0.2s ease;"></button>
            </div>

            <!-- Helper Tag -->
            <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); font-weight: 700; letter-spacing: 1px;">
              [ USE ◀ ▶ ARROWS OR SWIPE ]
            </div>
          </div>

          <!-- Carousel Stage Viewport -->
          <div class="issues-carousel-viewport" style="overflow: hidden; border: 1px solid var(--border-color); border-radius: 0 0 var(--radius-lg) var(--radius-lg); background: var(--bg-card); position: relative;">
            <div class="issues-carousel-track" style="display: flex; transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1); width: 200%;">
              
              <!-- SLIDE 1: ISSUE 01 -->
              <div class="issues-carousel-slide" style="width: 50%; padding: 2rem 2.2rem; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; flex-shrink: 0; min-height: 420px; position: relative;">
                
                <!-- Top Meta Ribbon Bar -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; flex-wrap: wrap; gap: 0.8rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.9rem;">
                  <div style="display: flex; align-items: center; gap: 0.8rem; flex-wrap: wrap;">
                    <span class="badge" style="background: var(--nothing-red); color: #FFF; font-family: var(--font-mono); font-weight: 700; font-size: 0.75rem; padding: 0.3rem 0.8rem; border-radius: 4px; text-transform: uppercase;">
                      ⚠️ CRITICAL ISSUE // 01
                    </span>
                    <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); font-weight: 700;">
                      [ RURAL MUNICIPAL COMPLIANCE GAP ]
                    </span>
                  </div>
                  <div style="background: rgba(255,255,255,0.08); color: var(--text-main); font-family: var(--font-mono); font-weight: 700; padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.75rem; border: 1px solid rgba(255,255,255,0.15);">
                    FORECAST: 50% GAP
                  </div>
                </div>

                <!-- Enlarged Arch Meter & Symmetrical Full-Space KPI Matrix -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.4rem; align-items: stretch; width: 100%; margin: 0.4rem 0 0.6rem; flex: 1;">
                  
                  <!-- Left Metric Pillar (Compliant Section with 50% COMPLIANCE & Architectural Drawing) -->
                  <div style="background: rgba(0,0,0,0.5); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.3rem 1.1rem; display: flex; flex-direction: column; justify-content: space-between; height: 100%; box-sizing: border-box; overflow: hidden;">
                    <div>
                      <div style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: #FFF; letter-spacing: 1px; margin-bottom: 0.4rem; text-transform: uppercase;">
                        ● COMPLIANCE FORECAST
                      </div>
                      <div style="font-family: var(--font-display); font-size: clamp(2.6rem, 4.5vw, 3.6rem); font-weight: 700; color: #FFF; line-height: 0.85;">
                        50%
                      </div>
                      <div style="font-family: var(--font-mono); font-size: clamp(0.85rem, 1.3vw, 1.1rem); font-weight: 700; color: #FFF; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 0.25rem;">
                        COMPLIANCE
                      </div>

                      <!-- Architectural Drawing: Reinforced NBC Standard Frame -->
                      <div style="width: 100%; height: 62px; margin: 0.8rem 0 0.4rem; background: rgba(0,0,0,0.4); border: 1px dashed rgba(255,255,255,0.25); border-radius: 4px; padding: 4px; box-sizing: border-box; display: flex; align-items: center; justify-content: center;">
                        <svg viewBox="0 0 160 50" width="100%" height="100%" style="overflow: visible;">
                          <!-- Ground Line -->
                          <line x1="8" y1="44" x2="152" y2="44" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-dasharray="3 2" />
                          <!-- Reinforced Frame -->
                          <rect x="22" y="16" width="50" height="28" fill="none" stroke="#FFFFFF" stroke-width="1.5" />
                          <line x1="22" y1="30" x2="72" y2="30" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2 2" />
                          <line x1="47" y1="16" x2="47" y2="44" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2 2" />
                          <!-- Diagonal Seismic Ties -->
                          <line x1="22" y1="16" x2="47" y2="44" stroke="#FFFFFF" stroke-width="0.8" opacity="0.5" />
                          <line x1="47" y1="16" x2="72" y2="44" stroke="#FFFFFF" stroke-width="0.8" opacity="0.5" />
                          <!-- Roof Gable -->
                          <polygon points="18,16 47,4 76,16" fill="none" stroke="#FFFFFF" stroke-width="1.5" />
                          <!-- Verified NBC Stamp -->
                          <circle cx="118" cy="24" r="14" fill="#0A0A0A" stroke="#00FF66" stroke-width="1.5" />
                          <polyline points="111,24 116,29 126,18" fill="none" stroke="#00FF66" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                          <text x="118" y="44" text-anchor="middle" font-family="'Space Mono', monospace" font-size="7" font-weight="700" fill="#00FF66">NBC OK</text>
                        </svg>
                      </div>
                    </div>

                    <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); line-height: 1.35; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 0.6rem; margin-top: 0.5rem;">
                      Forecasted municipal trajectory reaches 50% regulatory compliance ceiling.
                    </div>
                  </div>

                  <!-- Center: Enlarged Semicircular Radial Arch Gauge with Lifted Readout -->
                  <div style="background: rgba(0,0,0,0.6); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.2rem 1rem; display: flex; flex-direction: column; align-items: center; justify-content: space-between; position: relative; box-sizing: border-box; overflow: hidden;">
                    <div style="width: 100%; max-width: 270px; height: 145px; position: relative; margin-top: 0.2rem;">
                      <svg viewBox="0 0 280 155" width="100%" height="100%" style="overflow: visible;">
                        <!-- Gauge Background Outer Track -->
                        <path d="M 35 130 A 105 105 0 0 1 245 130" fill="none" stroke="#222" stroke-width="22" stroke-linecap="round" />
                        
                        <!-- Left Arc: 50% Compliant (White) -->
                        <path d="M 35 130 A 105 105 0 0 1 140 25" fill="none" stroke="#FFFFFF" stroke-width="22" stroke-linecap="round" />
                        
                        <!-- Right Arc: 50% Deficit (Nothing Red) -->
                        <path d="M 140 25 A 105 105 0 0 1 245 130" fill="none" stroke="var(--nothing-red)" stroke-width="22" stroke-linecap="round" />
                        
                        <!-- Top Notch -->
                        <line x1="140" y1="12" x2="140" y2="40" stroke="#000" stroke-width="4" />
                        
                        <!-- Raised Center Core Hub for High Legibility -->
                        <circle cx="140" cy="110" r="46" fill="#0A0A0A" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
                        <text x="140" y="98" text-anchor="middle" font-family="'Space Mono', monospace" font-size="28" font-weight="700" fill="#FFF">50%</text>
                        <text x="140" y="117" text-anchor="middle" font-family="'Space Mono', monospace" font-size="8.5" font-weight="700" fill="var(--nothing-red)" letter-spacing="2">CEILING</text>
                        
                        <!-- Radial Labels -->
                        <text x="35" y="150" text-anchor="middle" font-family="'Space Mono', monospace" font-size="9.5" font-weight="700" fill="#777">0%</text>
                        <text x="140" y="8" text-anchor="middle" font-family="'Space Mono', monospace" font-size="9.5" font-weight="700" fill="#FFF">50% CEILING</text>
                        <text x="245" y="150" text-anchor="middle" font-family="'Space Mono', monospace" font-size="9.5" font-weight="700" fill="#777">100%</text>
                      </svg>
                    </div>
                    <div style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: var(--text-muted); text-align: center; margin-top: 0.5rem; letter-spacing: 0.5px;">
                      NBC 105:2020 BYLAW CAPACITY GAUGE
                    </div>
                  </div>

                  <!-- Right Metric Pillar (Deficit Section with 50% DEFICIT & Engineering Shortage Drawing) -->
                  <div style="background: rgba(215,25,33,0.06); border: 1px solid var(--nothing-red); border-radius: var(--radius-md); padding: 1.3rem 1.1rem; display: flex; flex-direction: column; justify-content: space-between; height: 100%; box-sizing: border-box; overflow: hidden;">
                    <div>
                      <div style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: var(--nothing-red); letter-spacing: 1px; margin-bottom: 0.4rem; text-transform: uppercase;">
                        ▲ CRITICAL BOTTLENECK
                      </div>
                      <div style="font-family: var(--font-display); font-size: clamp(2.6rem, 4.5vw, 3.6rem); font-weight: 700; color: var(--nothing-red); line-height: 0.85;">
                        50%
                      </div>
                      <div style="font-family: var(--font-mono); font-size: clamp(0.85rem, 1.3vw, 1.1rem); font-weight: 700; color: var(--nothing-red); letter-spacing: 1.5px; text-transform: uppercase; margin-top: 0.25rem;">
                        DEFICIT
                      </div>

                      <!-- Architectural Drawing: Unreinforced / Shortage Warning Frame -->
                      <div style="width: 100%; height: 62px; margin: 0.8rem 0 0.4rem; background: rgba(215,25,33,0.08); border: 1px dashed var(--nothing-red); border-radius: 4px; padding: 4px; box-sizing: border-box; display: flex; align-items: center; justify-content: center;">
                        <svg viewBox="0 0 160 50" width="100%" height="100%" style="overflow: visible;">
                          <!-- Ground Line -->
                          <line x1="8" y1="44" x2="152" y2="44" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-dasharray="3 2" />
                          <!-- Unreinforced Deficit Frame -->
                          <rect x="22" y="16" width="50" height="28" fill="none" stroke="var(--nothing-red)" stroke-width="1.5" stroke-dasharray="4 2" />
                          <line x1="22" y1="30" x2="72" y2="30" stroke="var(--nothing-red)" stroke-width="1" stroke-dasharray="2 2" />
                          <!-- Structural Stress / Fracture Vector -->
                          <path d="M 47 16 L 43 25 L 51 34 L 46 44" fill="none" stroke="var(--nothing-red)" stroke-width="1.8" />
                          <!-- Roof Gable -->
                          <polygon points="18,16 47,4 76,16" fill="none" stroke="var(--nothing-red)" stroke-width="1.5" stroke-dasharray="3 2" />
                          <!-- Shortage Warning Badge -->
                          <circle cx="118" cy="24" r="14" fill="#0A0A0A" stroke="var(--nothing-red)" stroke-width="1.5" />
                          <text x="118" y="29" text-anchor="middle" font-family="'Space Mono', monospace" font-size="16" font-weight="700" fill="var(--nothing-red)">!</text>
                          <text x="118" y="44" text-anchor="middle" font-family="'Space Mono', monospace" font-size="7" font-weight="700" fill="var(--nothing-red)">DEFICIT</text>
                        </svg>
                      </div>
                    </div>

                    <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); line-height: 1.35; border-top: 1px solid rgba(215,25,33,0.2); padding-top: 0.6rem; margin-top: 0.5rem;">
                      Severe shortfall in certified municipal engineers across rural ward offices.
                    </div>
                  </div>

                </div>

              </div>

              <!-- SLIDE 2: ISSUE 02 -->
              <div class="issues-carousel-slide" style="width: 50%; padding: 2rem 2.2rem; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; flex-shrink: 0; min-height: 420px; position: relative;">
                
                <!-- Top Meta Ribbon Bar -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; flex-wrap: wrap; gap: 0.8rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.9rem;">
                  <div style="display: flex; align-items: center; gap: 0.8rem; flex-wrap: wrap;">
                    <span class="badge" style="background: #FFE600; color: #000; font-family: var(--font-mono); font-weight: 700; font-size: 0.75rem; padding: 0.3rem 0.8rem; border-radius: 4px; text-transform: uppercase;">
                      ⚡ CRITICAL ISSUE // 02
                    </span>
                    <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); font-weight: 700;">
                      [ KMC PRE-CONSTRUCTION PERMIT COMPLIANCE ]
                    </span>
                  </div>
                  <div style="background: rgba(255,255,255,0.08); color: var(--text-main); font-family: var(--font-mono); font-weight: 700; padding: 0.25rem 0.7rem; border-radius: 4px; font-size: 0.75rem; border: 1px solid rgba(255,255,255,0.15);">
                    LAST YEAR: 68% APPROVED
                  </div>
                </div>

                <!-- Enlarged 100-Unit Waffle Grid & Target Matrix (Style 2: Matrix & Target) -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; align-items: center; width: 100%; margin: 0.5rem 0 0.8rem;">
                  
                  <!-- Left: 100-House Waffle Matrix Visual -->
                  <div style="background: rgba(0,0,0,0.5); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.2rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.4rem; flex-wrap: wrap; gap: 0.4rem;">
                      <span style="color: #00FF66;">■ 68% PRE-APPROVED (68/100)</span>
                      <span style="color: var(--nothing-red);">■ 32% UNREGULATED (32/100)</span>
                    </div>

                    <!-- 10x10 Matrix Cells -->
                    <div style="display: grid; grid-template-columns: repeat(10, 1fr); gap: 4px; margin-bottom: 0.8rem;">
                      ${Array.from({ length: 100 }).map((_, i) => `
                        <div style="aspect-ratio: 1; border-radius: 2px; background: ${i < 68 ? '#00FF66' : 'var(--nothing-red)'}; box-shadow: 0 0 ${i < 68 ? '4px rgba(0,255,102,0.4)' : '4px rgba(215,25,33,0.4)'}; opacity: ${i < 68 ? '0.95' : '0.8'};"></div>
                      `).join('')}
                    </div>

                    <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">
                      <span>KMC RESIDENTIAL HOUSES SAMPLE (N = 100)</span>
                      <span style="color: #00FF66; font-weight: 700;">NBC-COMPLIANT CLEARANCE</span>
                    </div>
                  </div>

                  <!-- Right: Target Summary Card -->
                  <div style="background: rgba(0,0,0,0.5); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.3rem 1.1rem; display: flex; flex-direction: column; justify-content: space-between; height: 100%; box-sizing: border-box; overflow: hidden;">
                    <div>
                      <div style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: #00FF66; letter-spacing: 1px; margin-bottom: 0.4rem; text-transform: uppercase;">
                        ● PRE-CONSTRUCTION AUDIT
                      </div>
                      <div style="font-family: var(--font-display); font-size: clamp(2.6rem, 4.5vw, 3.6rem); font-weight: 700; color: #00FF66; line-height: 0.85;">
                        68%
                      </div>
                      <div style="font-family: var(--font-mono); font-size: clamp(0.85rem, 1.3vw, 1.1rem); font-weight: 700; color: #00FF66; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 0.25rem;">
                        APPROVAL RATE
                      </div>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 0.6rem; margin-top: 1rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 0.8rem;">
                      <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem;">
                        <span style="color: var(--text-muted);">Pre-Build NBC Permit:</span>
                        <span style="color: #00FF66; font-weight: 700;">68% (Passed)</span>
                      </div>
                      <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem;">
                        <span style="color: var(--text-muted);">Began Prior to Swikriti:</span>
                        <span style="color: var(--nothing-red); font-weight: 700;">32% (Unregulated)</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

          <!-- Bottom Control Bar -->
          <div class="carousel-bottom-nav" style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; gap: 1rem;">
            <button id="issues-carousel-prev" class="btn-brutal cyan" style="font-size: 0.95rem; padding: 0.8rem 1.5rem;">
              ◀ PREV ISSUE
            </button>

            <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted); text-align: center;">
              <span id="issues-carousel-title-badge" style="color: var(--nothing-red); font-weight: 700;">ISSUE 01: RURAL MUNICIPAL COMPLIANCE GAP</span>
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
      titleBadge.style.color = currentSlide === 0 ? 'var(--nothing-red)' : '#FFE600';
    }

    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.classList.add('active');
        dot.style.background = currentSlide === 0 ? 'var(--nothing-red)' : '#FFE600';
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
