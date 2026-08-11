/**
 * HomeCarousel Component - SCOPE Web App (Nothing Tech Inspired)
 * Hardware Presentation Carousel for Featured Services (Cost Estimator & Legal Hub)
 */

export function createHomeCarousel() {
  return `
    <section class="home-carousel-section" id="home-carousel-section" style="padding: 4.5rem 0; background: var(--bg-main); border-bottom: 1px solid var(--border-color);">
      <div class="scope-container">
        
        <!-- Header Section -->
        <div style="margin-bottom: 3rem; text-align: center;">
          <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255, 255, 255, 0.05); color: var(--text-main); font-family: var(--font-mono); font-size: 0.75rem; padding: 0.35rem 1rem; border-radius: var(--radius-pill); border: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1.5px;">
            <span style="color: var(--nothing-red)">●</span> KATHMANDU VALLEY PORTAL // SHOWCASE
          </div>

          <h2 style="font-family: var(--font-display); font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; color: var(--text-main); line-height: 1; margin: 0.4rem 0 0.8rem; text-transform: uppercase; letter-spacing: 1px;">
            THE CURRENT <span style="color: var(--nothing-red)">PREDICAMENT</span>
          </h2>
        </div>

        <!-- Nothing Hardware Carousel Box -->
        <div class="home-carousel-container" style="max-width: 960px; margin: 0 auto; position: relative;">
          
          <!-- Top Control Header Bar -->
          <div class="carousel-top-bar" style="display: flex; justify-content: space-between; align-items: center; background: rgba(18, 18, 18, 0.9); backdrop-filter: blur(16px); border: 1px solid var(--border-color); border-bottom: none; border-radius: var(--radius-lg) var(--radius-lg) 0 0; padding: 1rem 1.5rem; flex-wrap: wrap; gap: 0.8rem;">
            <div style="display: flex; align-items: center; gap: 0.8rem;">
              <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--nothing-red); box-shadow: 0 0 10px var(--nothing-red);"></span>
              <span style="font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem; color: var(--text-main); letter-spacing: 1.5px; text-transform: uppercase;">
                SERVICE <span id="home-carousel-slide-num" style="color: var(--nothing-red);">01 / 02</span>
              </span>
            </div>

            <!-- Slide Dots -->
            <div class="home-carousel-dots" style="display: flex; gap: 0.6rem;">
              <button class="carousel-dot active" data-slide="0" aria-label="Slide 1: Cost Estimator" style="width: 12px; height: 12px; background: var(--nothing-red); border: 1px solid #FFF; cursor: pointer; transition: transform 0.2s ease;"></button>
              <button class="carousel-dot" data-slide="1" aria-label="Slide 2: Legal Hub" style="width: 12px; height: 12px; background: #333; border: 1px solid #555; cursor: pointer; transition: transform 0.2s ease;"></button>
            </div>

            <!-- Helper Tag -->
            <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); font-weight: 700; letter-spacing: 1px;">
              [ USE ◀ ▶ ARROWS OR SWIPE ]
            </div>
          </div>

          <!-- Carousel Stage Viewport -->
          <div class="home-carousel-viewport" style="overflow: hidden; border: 1px solid var(--border-color); border-radius: 0 0 var(--radius-lg) var(--radius-lg); background: var(--bg-glass); backdrop-filter: blur(20px); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7); position: relative;">
            <div class="home-carousel-track" style="display: flex; transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1); width: 200%;">
              
              <!-- SLIDE 1: KATHMANDU CONSTRUCTION COST ESTIMATOR -->
              <div class="home-carousel-slide" style="width: 50%; padding: 2.8rem; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; flex-shrink: 0; min-height: 460px; position: relative;">
                
                <div style="position: absolute; top: 24px; right: 24px;" class="card-tag pink">
                  POPULAR TOOL // 01
                </div>

                <div>
                  <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--nothing-red); font-weight: 700; margin-bottom: 0.6rem; letter-spacing: 1.5px;">
                    [ SERVICE 01 // KATHMANDU CALCULATOR ]
                  </div>

                  <h3 style="font-family: var(--font-ndot); font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 700; color: var(--text-main); line-height: 1; margin-bottom: 1.2rem; text-transform: uppercase; letter-spacing: 1px;">
                    KATHMANDU CONSTRUCTION COST ESTIMATOR
                  </h3>

                  <p style="color: var(--text-muted); font-family: var(--font-sans); font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem; max-width: 720px;">
                    Calculate accurate residential construction budgets across Kathmandu, Lalitpur & Bhaktapur. Features Aana land area conversion (1 Aana = 342.25 sq. ft.), storeys picker (1 to 3 storeys), finish quality tiers, municipality approval fees, and instant NPR Lakhs & Crores BOQ summary reports.
                  </p>

                  <div class="feature-highlights" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2.2rem;">
                    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-md); padding: 0.9rem 1.1rem;">
                      <div style="color: var(--text-main); font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem; letter-spacing: 1px;">📏 LAND CONVERSION</div>
                      <div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.3rem;">2.0 to 10.0 Aana Precision Slider</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-md); padding: 0.9rem 1.1rem;">
                      <div style="color: var(--text-main); font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem; letter-spacing: 1px;">🏢 STOREYS & TIERS</div>
                      <div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.3rem;">Basic, Standard & Premium Rates</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-md); padding: 0.9rem 1.1rem;">
                      <div style="color: var(--nothing-red); font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem; letter-spacing: 1px;">🧾 BOQ RECEIPT</div>
                      <div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.3rem;">Instant Export & Breakdown</div>
                    </div>
                  </div>
                </div>

                <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                  <button class="btn-brutal" data-route="/cost-estimator">
                    LAUNCH COST CALCULATOR →
                  </button>
                  <button class="home-carousel-next-btn btn-brutal cyan" style="font-size: 0.85rem; padding: 0.8rem 1.4rem;">
                    NEXT SLIDE (LEGAL HUB) ➔
                  </button>
                </div>
              </div>

              <!-- SLIDE 2: PERMIT & LEGAL COMPLIANCE HUB -->
              <div class="home-carousel-slide" style="width: 50%; padding: 2.8rem; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; flex-shrink: 0; min-height: 460px; position: relative;">
                
                <div style="position: absolute; top: 24px; right: 24px;" class="card-tag yellow">
                  COMPLIANCE HUB // 02
                </div>

                <div>
                  <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--nothing-red); font-weight: 700; margin-bottom: 0.6rem; letter-spacing: 1.5px;">
                    [ SERVICE 02 // MUNICIPAL LEGAL PORTAL ]
                  </div>

                  <h3 style="font-family: var(--font-ndot); font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 700; color: var(--text-main); line-height: 1; margin-bottom: 1.2rem; text-transform: uppercase; letter-spacing: 1px;">
                    PERMIT & LEGAL COMPLIANCE HUB
                  </h3>

                  <p style="color: var(--text-muted); font-family: var(--font-sans); font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem; max-width: 720px;">
                    Authoritative legal compliance portal for Kathmandu Metropolitan City (KMC) & Lalitpur. Features 8-document master checklist with live percentage readiness score, road-width bylaws calculator, 3-stage Naksha Pass approval timeline, and zoning regulations.
                  </p>

                  <div class="feature-highlights" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2.2rem;">
                    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-md); padding: 0.9rem 1.1rem;">
                      <div style="color: var(--text-main); font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem; letter-spacing: 1px;">📋 MASTER CHECKLIST</div>
                      <div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.3rem;">8-Document Readiness Scoring</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-md); padding: 0.9rem 1.1rem;">
                      <div style="color: var(--text-main); font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem; letter-spacing: 1px;">🏛️ BYLAWS CALCULATOR</div>
                      <div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.3rem;">Road Width & Setback Standards</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-md); padding: 0.9rem 1.1rem;">
                      <div style="color: var(--nothing-red); font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem; letter-spacing: 1px;">📜 NAKSHA PASS STAGES</div>
                      <div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.3rem;">3-Stage Approval Timeline & Fees</div>
                    </div>
                  </div>
                </div>

                <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                  <button class="btn-brutal" data-route="/legal-hub">
                    ACCESS LEGAL HUB →
                  </button>
                  <button class="home-carousel-prev-btn btn-brutal cyan" style="font-size: 0.85rem; padding: 0.8rem 1.4rem;">
                    ⬅ PREVIOUS SLIDE (CALCULATOR)
                  </button>
                </div>
              </div>

            </div>
          </div>

          <!-- Bottom Control Bar -->
          <div class="carousel-bottom-nav" style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; gap: 1rem;">
            <button id="home-carousel-prev" class="btn-brutal cyan" style="font-size: 0.85rem; padding: 0.7rem 1.4rem;">
              ◀ PREV SERVICE
            </button>

            <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); text-align: center; letter-spacing: 1px;">
              <span id="home-carousel-title-badge" style="color: var(--nothing-red); font-weight: 700;">SLIDE 1: KATHMANDU COST CALCULATOR</span>
            </div>

            <button id="home-carousel-next" class="btn-brutal yellow" style="font-size: 0.85rem; padding: 0.7rem 1.4rem;">
              NEXT SERVICE ▶
            </button>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function initHomeCarouselEvents(navigateTo) {
  const track = document.querySelector('.home-carousel-track');
  const slideNum = document.getElementById('home-carousel-slide-num');
  const titleBadge = document.getElementById('home-carousel-title-badge');
  const dots = document.querySelectorAll('.home-carousel-dots .carousel-dot');
  const prevBtn = document.getElementById('home-carousel-prev');
  const nextBtn = document.getElementById('home-carousel-next');
  const inlineNextBtn = document.querySelector('.home-carousel-next-btn');
  const inlinePrevBtn = document.querySelector('.home-carousel-prev-btn');
  const container = document.querySelector('.home-carousel-viewport');

  if (!track) return;

  let currentSlide = 0;
  const totalSlides = 2;

  const slideTitles = [
    "SLIDE 1: KATHMANDU COST CALCULATOR",
    "SLIDE 2: PERMIT & LEGAL HUB"
  ];

  function updateCarousel(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 50}%)`;

    if (slideNum) {
      slideNum.textContent = `0${currentSlide + 1} / 0${totalSlides}`;
    }

    if (titleBadge) {
      titleBadge.textContent = slideTitles[currentSlide];
    }

    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.classList.add('active');
        dot.style.background = 'var(--nothing-red)';
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
  if (inlineNextBtn) inlineNextBtn.addEventListener('click', () => updateCarousel(currentSlide + 1));
  if (inlinePrevBtn) inlinePrevBtn.addEventListener('click', () => updateCarousel(currentSlide - 1));

  // Dot navigation listeners
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const index = parseInt(e.currentTarget.getAttribute('data-slide'), 10);
      updateCarousel(index);
    });
  });

  // Keyboard Left / Right Navigation
  const handleKeyDown = (e) => {
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

  // CTA Route Buttons
  document.querySelectorAll('.home-carousel-slide [data-route]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetRoute = btn.getAttribute('data-route');
      if (navigateTo) navigateTo(targetRoute);
    });
  });
}
