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
              <div class="issues-carousel-slide" style="width: 50%; padding: 2rem 2.2rem; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; flex-shrink: 0; min-height: 400px; position: relative;">
                
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
                    FORECAST: 50% CAP
                  </div>
                </div>

                <!-- 2-Column Content + Visual Pie Chart Matrix -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.8rem; align-items: center; margin-bottom: 0.5rem;">
                  
                  <!-- Left: Quote & Analytical Context -->
                  <div>
                    <blockquote style="margin: 0 0 1rem 0; font-family: var(--font-display), sans-serif; font-size: clamp(1.3rem, 2.8vw, 1.8rem); font-weight: 700; color: var(--text-main); line-height: 1.25; letter-spacing: 0.3px;">
                      "Based on trends, rural municipalities are forecasted to reach only 50% compliance next year unless engineer availability improves."
                    </blockquote>
                    <div style="display: flex; align-items: center; gap: 0.5rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--nothing-red); font-weight: 700;">
                      <span>● NBC 105:2020 TECHNICAL WORKFORCE DEFICIT</span>
                    </div>
                  </div>

                  <!-- Right: Translucent Glass Pie Chart Card -->
                  <div style="background: rgba(0,0,0,0.5); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.6);">
                    <div style="font-family: var(--font-mono); font-size: 0.7rem; font-weight: 700; color: var(--text-muted); letter-spacing: 1px; margin-bottom: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.4rem; display: flex; justify-content: space-between;">
                      <span>FORECAST BREAKDOWN</span>
                      <span style="color: var(--nothing-red);">[ 50/50 SPLIT ]</span>
                    </div>

                    <div style="display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap; justify-content: center;">
                      <!-- Visual SVG Pie / Donut Chart -->
                      <div style="width: 130px; height: 130px; flex-shrink: 0; position: relative;">
                        <svg viewBox="0 0 200 200" width="100%" height="100%" style="overflow: visible;">
                          <!-- Outer Dotted Guideline -->
                          <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" stroke-dasharray="3 3" />
                          
                          <!-- Segment A: 50% Compliance (White) -->
                          <circle cx="100" cy="100" r="70" fill="none" stroke="#FFFFFF" stroke-width="24"
                            stroke-dasharray="219.9 219.9" stroke-dashoffset="0"
                            transform="rotate(-90 100 100)" />
                          
                          <!-- Segment B: 50% Deficit (Nothing Red) -->
                          <circle cx="100" cy="100" r="70" fill="none" stroke="var(--nothing-red)" stroke-width="24"
                            stroke-dasharray="219.9 219.9" stroke-dashoffset="-219.9"
                            transform="rotate(-90 100 100)" />
                          
                          <!-- Inner Core & Readout -->
                          <circle cx="100" cy="100" r="54" fill="#0A0A0A" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
                          <text x="100" y="97" text-anchor="middle" font-family="'Space Mono', monospace" font-size="24" font-weight="700" fill="#FFF">50%</text>
                          <text x="100" y="115" text-anchor="middle" font-family="'Space Mono', monospace" font-size="7.5" font-weight="700" fill="var(--nothing-red)" letter-spacing="1">CAP LIMIT</text>
                        </svg>
                      </div>

                      <!-- Legend Items -->
                      <div style="flex: 1; min-width: 130px; display: flex; flex-direction: column; gap: 0.6rem;">
                        <div style="background: rgba(255,255,255,0.04); border-left: 3px solid #FFF; padding: 0.35rem 0.5rem; border-radius: 0 4px 4px 0;">
                          <div style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: #FFF;">50% COMPLIANT</div>
                          <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">Forecasted under current trends</div>
                        </div>
                        <div style="background: rgba(215,25,33,0.08); border-left: 3px solid var(--nothing-red); padding: 0.35rem 0.5rem; border-radius: 0 4px 4px 0;">
                          <div style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: var(--nothing-red);">50% GAP / DEFICIT</div>
                          <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">Engineer availability shortage</div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <!-- SLIDE 2: ISSUE 02 -->
              <div class="issues-carousel-slide" style="width: 50%; padding: 2rem 2.2rem; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; flex-shrink: 0; min-height: 400px; position: relative;">
                
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

                <!-- 2-Column Content + Visual Pie Chart Matrix -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.8rem; align-items: center; margin-bottom: 0.5rem;">
                  
                  <!-- Left: Quote & Analytical Context -->
                  <div>
                    <blockquote style="margin: 0 0 1rem 0; font-family: var(--font-display), sans-serif; font-size: clamp(1.3rem, 2.8vw, 1.8rem); font-weight: 700; color: var(--text-main); line-height: 1.25; letter-spacing: 0.3px;">
                      "Last year, 68% of houses in Kathmandu Metropolitan City had NBC-compliant designs approved before construction started,"
                    </blockquote>
                    <div style="display: flex; align-items: center; gap: 0.5rem; font-family: var(--font-mono); font-size: 0.75rem; color: #00FF66; font-weight: 700;">
                      <span>● KMC NAKSHA PASS PRE-CLEARANCE RATE</span>
                    </div>
                  </div>

                  <!-- Right: Translucent Glass Pie Chart Card -->
                  <div style="background: rgba(0,0,0,0.5); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.6);">
                    <div style="font-family: var(--font-mono); font-size: 0.7rem; font-weight: 700; color: var(--text-muted); letter-spacing: 1px; margin-bottom: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.4rem; display: flex; justify-content: space-between;">
                      <span>KMC PERMIT STATUS</span>
                      <span style="color: #00FF66;">[ 68% PRE-CLEARED ]</span>
                    </div>

                    <div style="display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap; justify-content: center;">
                      <!-- Visual SVG Pie / Donut Chart -->
                      <div style="width: 130px; height: 130px; flex-shrink: 0; position: relative;">
                        <svg viewBox="0 0 200 200" width="100%" height="100%" style="overflow: visible;">
                          <!-- Outer Dotted Guideline -->
                          <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" stroke-dasharray="3 3" />
                          
                          <!-- Segment A: 68% Approved (Neon Green) -->
                          <circle cx="100" cy="100" r="70" fill="none" stroke="#00FF66" stroke-width="24"
                            stroke-dasharray="299.1 140.7" stroke-dashoffset="0"
                            transform="rotate(-90 100 100)" />
                          
                          <!-- Segment B: 32% Unapproved (Nothing Red) -->
                          <circle cx="100" cy="100" r="70" fill="none" stroke="var(--nothing-red)" stroke-width="24"
                            stroke-dasharray="140.7 299.1" stroke-dashoffset="-299.1"
                            transform="rotate(-90 100 100)" />
                          
                          <!-- Inner Core & Readout -->
                          <circle cx="100" cy="100" r="54" fill="#0A0A0A" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
                          <text x="100" y="97" text-anchor="middle" font-family="'Space Mono', monospace" font-size="24" font-weight="700" fill="#FFF">68%</text>
                          <text x="100" y="115" text-anchor="middle" font-family="'Space Mono', monospace" font-size="7.5" font-weight="700" fill="#00FF66" letter-spacing="1">APPROVED</text>
                        </svg>
                      </div>

                      <!-- Legend Items -->
                      <div style="flex: 1; min-width: 130px; display: flex; flex-direction: column; gap: 0.6rem;">
                        <div style="background: rgba(0,255,102,0.06); border-left: 3px solid #00FF66; padding: 0.35rem 0.5rem; border-radius: 0 4px 4px 0;">
                          <div style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: #00FF66;">68% PRE-APPROVED</div>
                          <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">NBC designs cleared before build</div>
                        </div>
                        <div style="background: rgba(215,25,33,0.08); border-left: 3px solid var(--nothing-red); padding: 0.35rem 0.5rem; border-radius: 0 4px 4px 0;">
                          <div style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: var(--nothing-red);">32% UNREGULATED</div>
                          <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">Started without prior permit</div>
                        </div>
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
