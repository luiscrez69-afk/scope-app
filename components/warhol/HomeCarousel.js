/**
 * HomeCarousel Component - SCOPE Web App (Warhol Pop-Art Edition)
 * Featured Section Header: THE CURRENT PREDICAMENT
 * Dynamic Issues List Container (Issue 01 & Issue 02)
 */

export function createHomeCarousel() {
  return `
    <section class="home-carousel-section" id="home-carousel-section" style="padding: 3.5rem 0 4.5rem; background: var(--bg-main); border-bottom: var(--border-thick);">
      <div class="scope-container">
        
        <!-- Header Section -->
        <div style="text-align: center; margin-bottom: 2.5rem;">
          <div style="display: inline-block; background: #FFE600; color: #000000; font-family: var(--font-mono); font-weight: 900; font-size: 0.8rem; padding: 0.35rem 1rem; border: 2px solid var(--border-color); box-shadow: 4px 4px 0px #FF2A85; margin-bottom: 0.8rem; text-transform: uppercase;">
            ★ KATHMANDU VALLEY BUILDING PORTAL // SYSTEMIC CHALLENGES
          </div>

          <h1 style="font-family: 'MangoGrotesque', var(--font-display); font-size: clamp(3.2rem, 7vw, 5rem); font-weight: 900; color: var(--text-main); line-height: 0.9; margin: 0.4rem 0 0; text-transform: uppercase;">
            THE CURRENT <span style="color: var(--cmyk-yellow)">PREDICAMENT</span>
          </h1>
        </div>

        <!-- Current Issues List Container -->
        <div class="current-issues-container" style="max-width: 920px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem;">
          
          <!-- ISSUE 01 CARD -->
          <div class="issue-card brutal-issue-box" style="background: #0D0D0D; border: 3px solid #FFF; box-shadow: 6px 6px 0px var(--cmyk-pink); padding: 2.2rem; position: relative;">
            
            <!-- Top Meta Ribbon Bar -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; flex-wrap: wrap; gap: 0.8rem; border-bottom: 2px dashed #333; padding-bottom: 0.9rem;">
              <div style="display: flex; align-items: center; gap: 0.8rem; flex-wrap: wrap;">
                <span class="badge brutal-badge pink" style="background: #FF2A85; color: #FFF; font-family: var(--font-mono); font-weight: 900; font-size: 0.75rem; padding: 0.3rem 0.8rem; border: 2px solid #FFF; box-shadow: 3px 3px 0px #000; text-transform: uppercase;">
                  ⚠️ CRITICAL ISSUE // 01
                </span>
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cmyk-yellow); font-weight: 700;">
                  [ RURAL MUNICIPAL COMPLIANCE GAP ]
                </span>
              </div>
              <div style="background: #FFE600; color: #000; font-family: var(--font-mono); font-weight: 900; padding: 0.25rem 0.7rem; border: 1.5px solid #000; font-size: 0.75rem;">
                FORECAST: 50% CAP
              </div>
            </div>

            <!-- Issue Statement Quote Text -->
            <blockquote style="margin: 0 0 1.6rem 0; font-family: 'MangoGrotesque', var(--font-display), sans-serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; color: #FFF; line-height: 1.15; letter-spacing: 0.3px;">
              "Based on trends, rural municipalities are forecasted to reach only 50% compliance next year unless engineer availability improves - since compliance strongly correlates with access to certified engineers."
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

          <!-- ISSUE 02 CARD -->
          <div class="issue-card brutal-issue-box" style="background: #0D0D0D; border: 3px solid #FFF; box-shadow: 6px 6px 0px var(--cmyk-yellow); padding: 2.2rem; position: relative;">
            
            <!-- Top Meta Ribbon Bar -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; flex-wrap: wrap; gap: 0.8rem; border-bottom: 2px dashed #333; padding-bottom: 0.9rem;">
              <div style="display: flex; align-items: center; gap: 0.8rem; flex-wrap: wrap;">
                <span class="badge brutal-badge yellow" style="background: #FFE600; color: #000; font-family: var(--font-mono); font-weight: 900; font-size: 0.75rem; padding: 0.3rem 0.8rem; border: 2px solid #FFF; box-shadow: 3px 3px 0px #000; text-transform: uppercase;">
                  ⚡ CRITICAL ISSUE // 02
                </span>
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cmyk-pink); font-weight: 700;">
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
    </section>
  `;
}

export function initHomeCarouselEvents(navigateTo) {
  // Event listeners for issues display if needed
}
