/**
 * HomeCards Component - SCOPE Web App (Warhol Pop-Art Edition)
 * Featured Section Header: THE CURRENT PREDICAMENT
 * Interactive Brutalist Issues Carousel (Issue 01 & Issue 02)
 */

export function createHomeCards() {
  return `
    <section class="centered-dual-cards-section" id="centered-dual-cards" style="padding: 3.5rem 0 4.5rem; background: var(--bg-main); border-bottom: var(--border-thick);">
      <div class="scope-container">
        
        <!-- Header Section -->
        <div style="text-align: center; margin-bottom: 2.5rem;">
          <div style="display: inline-block; background: #FFE600; color: #000000; font-family: var(--font-mono); font-weight: 900; font-size: 0.8rem; padding: 0.3rem 0.9rem; border: 2px solid var(--border-color); box-shadow: 3px 3px 0px #FF2A85; margin-bottom: 0.8rem; text-transform: uppercase;">
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
              <button class="carousel-dot active" data-slide="0" aria-label="Issue 01" style="width: 14px; height: 14px; background: var(--cmyk-yellow); border: 2px solid var(--border-color); cursor: pointer; transition: transform 0.2s ease;"></button>
              <button class="carousel-dot" data-slide="1" aria-label="Issue 02" style="width: 14px; height: 14px; background: var(--text-muted); border: 2px solid var(--border-color); cursor: pointer; transition: transform 0.2s ease;"></button>
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
              <div class="issues-carousel-slide" style="width: 50%; padding: 2.2rem; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; flex-shrink: 0; min-height: 380px; position: relative;">
                
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

                <!-- Issue Statement Quote Text -->
                <blockquote style="margin: 0 0 1.6rem 0; font-family: 'MangoGrotesque', var(--font-display), sans-serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; color: #FFF; line-height: 1.15; letter-spacing: 0.3px;">
                  "Based on trends, rural municipalities are forecasted to reach only 50% compliance next year unless engineer availability improves."
                </blockquote>

                <!-- Metric Progress Indicator -->
                <div style="background: #000; border: 2px solid #FFF; padding: 1rem 1.2rem; box-shadow: 4px 4px 0px var(--cmyk-yellow);">
                  <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: #AAA; margin-bottom: 0.5rem; font-weight: 700; flex-wrap: wrap; gap: 0.4rem;">
                    <span>PROJECTED COMPLIANCE RATE (NEXT YEAR)</span>
                    <span style="color: #FF2A85; font-weight: 900;">50% FORECASTED CAP // ENGINEER BOTTLENECK</span>
                  </div>
                  <div style="width: 100%; height: 16px; background: #222; border: 1px solid #555; position: relative; overflow: hidden;">
                    <div style="width: 50%; height: 100%; background: linear-gradient(90deg, #FF2A85, #FFE600); box-shadow: 0 0 10px #FF2A85;"></div>
                  </div>
                  <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.65rem; color: #777; margin-top: 0.4rem;">
                    <span>0% UNGOVERNED</span>
                    <span style="color: #FFE600;">50% CURRENT TREND CAP</span>
                    <span>100% TARGET</span>
                  </div>
                </div>

              </div>

              <!-- SLIDE 2: ISSUE 02 -->
              <div class="issues-carousel-slide" style="width: 50%; padding: 2.2rem; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; flex-shrink: 0; min-height: 380px; position: relative;">
                
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

                <!-- Issue Statement Quote Text -->
                <blockquote style="margin: 0 0 1.6rem 0; font-family: 'MangoGrotesque', var(--font-display), sans-serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; color: #FFF; line-height: 1.15; letter-spacing: 0.3px;">
                  "Last year, 68% of houses in Kathmandu Metropolitan City had NBC-compliant designs approved before construction started,"
                </blockquote>

                <!-- Metric Progress Indicator -->
                <div style="background: #000; border: 2px solid #FFF; padding: 1rem 1.2rem; box-shadow: 4px 4px 0px var(--cmyk-pink);">
                  <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: #AAA; margin-bottom: 0.5rem; font-weight: 700; flex-wrap: wrap; gap: 0.4rem;">
                    <span>KMC NBC-COMPLIANT PERMIT RATE (PRIOR YEAR)</span>
                    <span style="color: #FFE600; font-weight: 900;">68% APPROVED PRIOR TO BREAKING GROUND</span>
                  </div>
                  <div style="width: 100%; height: 16px; background: #222; border: 1px solid #555; position: relative; overflow: hidden;">
                    <div style="width: 68%; height: 100%; background: linear-gradient(90deg, #FFE600, #00FF66); box-shadow: 0 0 10px #00FF66;"></div>
                  </div>
                  <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.65rem; color: #777; margin-top: 0.4rem;">
                    <span>0% UNPERMITTED</span>
                    <span style="color: #00FF66;">68% KMC APPROVED</span>
                    <span>100% UNIVERSAL TARGET</span>
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

export function initHomeCardsEvents(navigateTo) {
  // Uses carousel events initialized in warhol-app.js
}
