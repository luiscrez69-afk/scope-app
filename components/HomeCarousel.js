/**
 * HomeCarousel Component - SCOPE Web App (Nothing Tech Inspired)
 * Featured Section Header: THE CURRENT PREDICAMENT
 * Dynamic Issues List Container (Issue 01 & Issue 02)
 */

export function createHomeCarousel() {
  return `
    <section class="home-carousel-section" id="home-carousel-section" style="padding: 3.5rem 0 4.5rem; background: var(--bg-main); border-bottom: 1px solid var(--border-color);">
      <div class="scope-container">
        
        <!-- Header Section -->
        <div style="text-align: center; margin-bottom: 2.5rem;">
          <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255, 255, 255, 0.05); color: var(--text-main); font-family: var(--font-mono); font-size: 0.75rem; padding: 0.35rem 1rem; border-radius: var(--radius-pill); border: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1.5px;">
            <span style="color: var(--nothing-red)">●</span> KATHMANDU VALLEY PORTAL // CHALLENGES
          </div>

          <h2 style="font-family: var(--font-display); font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; color: var(--text-main); line-height: 1; margin: 0.4rem 0 0; text-transform: uppercase; letter-spacing: 1px;">
            THE CURRENT <span style="color: var(--nothing-red)">PREDICAMENT</span>
          </h2>
        </div>

        <!-- Current Issues List Container -->
        <div class="current-issues-container" style="max-width: 920px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem;">
          
          <!-- ISSUE 01 CARD -->
          <div class="issue-card" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-card); padding: 2.2rem; position: relative;">
            
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

            <!-- Issue Statement Quote Text -->
            <blockquote style="margin: 0 0 1.6rem 0; font-family: var(--font-display), sans-serif; font-size: clamp(1.4rem, 3.2vw, 2.2rem); font-weight: 700; color: var(--text-main); line-height: 1.25; letter-spacing: 0.3px;">
              "Based on trends, rural municipalities are forecasted to reach only 50% compliance next year unless engineer availability improves - since compliance strongly correlates with access to certified engineers."
            </blockquote>

            <!-- Metric Progress Indicator -->
            <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem 1.2rem;">
              <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.5rem; font-weight: 700; flex-wrap: wrap; gap: 0.4rem;">
                <span>PROJECTED COMPLIANCE RATE (NEXT YEAR)</span>
                <span style="color: var(--nothing-red); font-weight: 700;">50% FORECASTED CAP // ENGINEER BOTTLENECK</span>
              </div>
              <div style="width: 100%; height: 12px; background: #222; border-radius: 6px; position: relative; overflow: hidden;">
                <div style="width: 50%; height: 100%; background: var(--nothing-red); box-shadow: 0 0 10px var(--nothing-red);"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); margin-top: 0.4rem;">
                <span>0% UNGOVERNED</span>
                <span style="color: #FFF;">50% CURRENT TREND CAP</span>
                <span>100% TARGET</span>
              </div>
            </div>

          </div>

          <!-- ISSUE 02 CARD -->
          <div class="issue-card" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-card); padding: 2.2rem; position: relative;">
            
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

            <!-- Issue Statement Quote Text -->
            <blockquote style="margin: 0 0 1.6rem 0; font-family: var(--font-display), sans-serif; font-size: clamp(1.4rem, 3.2vw, 2.2rem); font-weight: 700; color: var(--text-main); line-height: 1.25; letter-spacing: 0.3px;">
              "Last year, 68% of houses in Kathmandu Metropolitan City had NBC-compliant designs approved before construction started,"
            </blockquote>

            <!-- Metric Progress Indicator -->
            <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem 1.2rem;">
              <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.5rem; font-weight: 700; flex-wrap: wrap; gap: 0.4rem;">
                <span>KMC NBC-COMPLIANT PERMIT RATE (PRIOR YEAR)</span>
                <span style="color: #FFE600; font-weight: 700;">68% APPROVED PRIOR TO BREAKING GROUND</span>
              </div>
              <div style="width: 100%; height: 12px; background: #222; border-radius: 6px; position: relative; overflow: hidden;">
                <div style="width: 68%; height: 100%; background: #00FF66; box-shadow: 0 0 10px #00FF66;"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); margin-top: 0.4rem;">
                <span>0% UNPERMITTED</span>
                <span style="color: #FFF;">68% KMC APPROVED</span>
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
