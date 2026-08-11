/**
 * HomeCarousel Component - SCOPE Web App
 * Interactive Dark Pop-Art Brutalist Carousel for Home Page Feature Services
 * (Kathmandu Construction Cost Estimator & Legal Compliance Hub)
 */

export function createHomeCarousel() {
  return `
    <section class="home-carousel-section" id="home-carousel-section" style="padding: 3.5rem 0 4.5rem; background: var(--bg-main); border-bottom: var(--border-thick);">
      <div class="scope-container">
        
        <!-- Header Section -->
        <div style="margin-bottom: 2.5rem; text-align: center;">
          <div style="display: inline-block; background: #FFE600; color: #000000; font-family: var(--font-mono); font-weight: 900; font-size: 0.8rem; padding: 0.35rem 1rem; border: 2px solid var(--border-color); box-shadow: 4px 4px 0px #FF2A85; margin-bottom: 0.8rem; text-transform: uppercase;">
            ★ KATHMANDU VALLEY BUILDING PORTAL // CAROUSEL SHOWCASE
          </div>

          <h1 style="font-family: 'MangoGrotesque', var(--font-display); font-size: clamp(3.2rem, 7vw, 5rem); font-weight: 900; color: var(--text-main); line-height: 0.9; margin: 0.4rem 0 0.8rem; text-transform: uppercase;">
            THE CURRENT <span style="color: var(--cmyk-yellow)">PREDICAMENT</span>
          </h1>
        </div>

        <!-- Brutalist Carousel Wrapper -->
        <div class="home-carousel-container" style="max-width: 900px; margin: 0 auto; position: relative;">
          
          <!-- Top Control Header Bar -->
          <div class="carousel-top-bar" style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-surface); border: var(--border-thick); border-bottom: none; padding: 0.8rem 1.2rem; flex-wrap: wrap; gap: 0.8rem;">
            <div style="display: flex; align-items: center; gap: 0.8rem;">
              <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: #FF007F; box-shadow: 0 0 8px #FF007F;"></span>
              <span style="font-family: var(--font-mono); font-weight: 700; font-size: 0.85rem; color: var(--text-main); text-transform: uppercase;">
                SERVICE <span id="home-carousel-slide-num" style="color: var(--cmyk-yellow);">01 / 02</span>
              </span>
            </div>

            <!-- Slide Dots -->
            <div class="home-carousel-dots" style="display: flex; gap: 0.6rem;">
              <button class="carousel-dot active" data-slide="0" aria-label="Slide 1: Cost Estimator" style="width: 14px; height: 14px; background: var(--cmyk-yellow); border: 2px solid var(--border-color); cursor: pointer; transition: transform 0.2s ease;"></button>
              <button class="carousel-dot" data-slide="1" aria-label="Slide 2: Legal Hub" style="width: 14px; height: 14px; background: var(--text-muted); border: 2px solid var(--border-color); cursor: pointer; transition: transform 0.2s ease;"></button>
            </div>

            <!-- Keyboard & Swipe Helper Badge -->
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cmyk-cyan); font-weight: 700;">
              [ USE ◀ ▶ ARROWS OR SWIPE ]
            </div>
          </div>

          <!-- Carousel Stage Viewport -->
          <div class="home-carousel-viewport" style="overflow: hidden; border: var(--border-thick); background: var(--bg-card); box-shadow: 8px 8px 0px #FFD700; position: relative;">
            <div class="home-carousel-track" style="display: flex; transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1); width: 200%;">
              
              <!-- SLIDE 1: KATHMANDU CONSTRUCTION COST ESTIMATOR -->
              <div class="home-carousel-slide" style="width: 50%; padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; flex-shrink: 0; min-height: 480px; position: relative;">
                
                <div style="position: absolute; top: 20px; right: 20px; background: #FF2A85; color: #FFFFFF; font-family: var(--font-mono); font-weight: 700; font-size: 0.75rem; padding: 0.3rem 0.8rem; border: 2px solid var(--border-color); box-shadow: 3px 3px 0px var(--shadow-color);">
                  POPULAR TOOL // 01
                </div>

                <div>
                  <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--cmyk-yellow); font-weight: 700; margin-bottom: 0.6rem;">
                    [ SERVICE 01 // KATHMANDU VALLEY CALCULATOR ]
                  </div>

                  <h2 style="font-family: 'MangoGrotesque', var(--font-display); font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 700; color: var(--text-main); line-height: 0.95; margin-bottom: 1.2rem; text-transform: uppercase;">
                    KATHMANDU CONSTRUCTION COST ESTIMATOR
                  </h2>

                  <p style="color: var(--text-muted); font-family: var(--font-sans); font-size: 1rem; line-height: 1.6; margin-bottom: 1.8rem; max-width: 720px;">
                    Calculate accurate residential construction budgets across Kathmandu, Lalitpur & Bhaktapur. Features Aana land area conversion (1 Aana = 342.25 sq. ft.), storeys picker (1 to 3 storeys), finish quality tiers, municipality approval fees, and instant NPR Lakhs & Crores BOQ summary reports.
                  </p>

                  <div class="feature-highlights" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                    <div style="background: var(--bg-surface); border: 2px solid var(--cmyk-yellow); padding: 0.8rem 1rem;">
                      <div style="color: var(--cmyk-yellow); font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem;">📏 LAND CONVERSION</div>
                      <div style="color: var(--text-main); font-size: 0.85rem; margin-top: 0.2rem;">2.0 to 10.0 Aana Precision Slider</div>
                    </div>
                    <div style="background: var(--bg-surface); border: 2px solid var(--cmyk-cyan); padding: 0.8rem 1rem;">
                      <div style="color: var(--cmyk-cyan); font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem;">🏢 STOREYS & TIERS</div>
                      <div style="color: var(--text-main); font-size: 0.85rem; margin-top: 0.2rem;">Basic, Standard & Premium Rates</div>
                    </div>
                    <div style="background: var(--bg-surface); border: 2px solid var(--cmyk-pink); padding: 0.8rem 1rem;">
                      <div style="color: var(--cmyk-pink); font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem;">🧾 BOQ RECEIPT</div>
                      <div style="color: var(--text-main); font-size: 0.85rem; margin-top: 0.2rem;">Instant Export & Breakdown</div>
                    </div>
                  </div>
                </div>

                <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                  <button class="btn-brutal yellow" data-route="/cost-estimator" style="font-size: 1.05rem; padding: 1rem 1.8rem;">
                    ⚡ LAUNCH COST CALCULATOR →
                  </button>
                  <button class="home-carousel-next-btn btn-brutal white" style="font-size: 0.9rem; padding: 1rem 1.2rem;">
                    NEXT SLIDE (LEGAL HUB) ➔
                  </button>
                </div>
              </div>

              <!-- SLIDE 2: PERMIT & LEGAL COMPLIANCE HUB -->
              <div class="home-carousel-slide" style="width: 50%; padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; flex-shrink: 0; min-height: 480px; position: relative;">
                
                <div style="position: absolute; top: 20px; right: 20px; background: #FFE600; color: #000000; font-family: var(--font-mono); font-weight: 900; font-size: 0.75rem; padding: 0.3rem 0.8rem; border: 2px solid var(--border-color); box-shadow: 3px 3px 0px var(--shadow-color);">
                  COMPLIANCE HUB // 02
                </div>

                <div>
                  <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--cmyk-pink); font-weight: 700; margin-bottom: 0.6rem;">
                    [ SERVICE 02 // MUNICIPAL LEGAL PORTAL ]
                  </div>

                  <h2 style="font-family: 'MangoGrotesque', var(--font-display); font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 700; color: var(--text-main); line-height: 0.95; margin-bottom: 1.2rem; text-transform: uppercase;">
                    PERMIT & LEGAL COMPLIANCE HUB
                  </h2>

                  <p style="color: var(--text-muted); font-family: var(--font-sans); font-size: 1rem; line-height: 1.6; margin-bottom: 1.8rem; max-width: 720px;">
                    Authoritative legal compliance portal for Kathmandu Metropolitan City (KMC) & Lalitpur. Features 8-document master checklist with live percentage readiness score, road-width bylaws calculator, 3-stage Naksha Pass approval timeline, and zoning regulations.
                  </p>

                  <div class="feature-highlights" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                    <div style="background: var(--bg-surface); border: 2px solid var(--cmyk-pink); padding: 0.8rem 1rem;">
                      <div style="color: var(--cmyk-pink); font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem;">📋 MASTER CHECKLIST</div>
                      <div style="color: var(--text-main); font-size: 0.85rem; margin-top: 0.2rem;">8-Document Readiness Scoring</div>
                    </div>
                    <div style="background: var(--bg-surface); border: 2px solid var(--cmyk-green); padding: 0.8rem 1rem;">
                      <div style="color: var(--cmyk-green); font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem;">🏛️ BYLAWS CALCULATOR</div>
                      <div style="color: var(--text-main); font-size: 0.85rem; margin-top: 0.2rem;">Road Width & Setback Standards</div>
                    </div>
                    <div style="background: var(--bg-surface); border: 2px solid var(--cmyk-yellow); padding: 0.8rem 1rem;">
                      <div style="color: var(--cmyk-yellow); font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem;">📜 NAKSHA PASS STAGES</div>
                      <div style="color: var(--text-main); font-size: 0.85rem; margin-top: 0.2rem;">3-Stage Approval Timeline & Fees</div>
                    </div>
                  </div>
                </div>

                <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                  <button class="btn-brutal pink" data-route="/legal-hub" style="font-size: 1.05rem; padding: 1rem 1.8rem;">
                    📜 ACCESS LEGAL HUB →
                  </button>
                  <button class="home-carousel-prev-btn btn-brutal white" style="font-size: 0.9rem; padding: 1rem 1.2rem;">
                    ⬅ PREVIOUS SLIDE (CALCULATOR)
                  </button>
                </div>
              </div>

            </div>
          </div>

          <!-- Bottom Control Bar with Big Brutalist Arrow Buttons -->
          <div class="carousel-bottom-nav" style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; gap: 1rem;">
            <button id="home-carousel-prev" class="btn-brutal cyan" style="font-size: 0.95rem; padding: 0.8rem 1.5rem;">
              ◀ PREV SERVICE
            </button>

            <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted); text-align: center;">
              <span id="home-carousel-title-badge" style="color: var(--cmyk-yellow); font-weight: 700;">SLIDE 1: KATHMANDU COST CALCULATOR</span>
            </div>

            <button id="home-carousel-next" class="btn-brutal yellow" style="font-size: 0.95rem; padding: 0.8rem 1.5rem;">
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
        updateCarousel(currentSlide + 1); // Swipe Left -> Next
      } else if (touchEndX - touchStartX > 50) {
        updateCarousel(currentSlide - 1); // Swipe Right -> Prev
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
