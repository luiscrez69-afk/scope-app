/**
 * HomeCards Component - SCOPE Web App (Warhol Pop-Art Edition)
 * Centered Dual Entry Point Cards for Kathmandu Construction Cost Estimator & Legal Hub
 * Featuring Neobrutalist Contact & Consultation Callout Cards (scope.kathmandu@gmail.com)
 */

export function createHomeCards() {
  return `
    <section class="centered-dual-cards-section" id="centered-dual-cards" style="padding: 3.5rem 0 4.5rem; background: var(--bg-main); border-bottom: var(--border-thick);">
      <div class="scope-container">
        
        <!-- Centered Header Section -->
        <div style="margin-bottom: 3rem; text-align: center;">
          <div style="display: inline-block; background: #FFE600; color: #000000; font-family: var(--font-mono); font-weight: 900; font-size: 0.8rem; padding: 0.3rem 0.9rem; border: 2px solid var(--border-color); box-shadow: 3px 3px 0px #FF2A85; margin-bottom: 0.8rem; text-transform: uppercase;">
            ★ KATHMANDU VALLEY BUILDING PORTAL
          </div>

          <h1 style="font-family: 'MangoGrotesque', var(--font-display); font-size: clamp(3.2rem, 7vw, 5rem); font-weight: 900; color: var(--text-main); line-height: 0.9; margin: 0.4rem 0 0.8rem; text-transform: uppercase;">
            THE CURRENT <span style="color: var(--cmyk-yellow)">PREDICAMENT</span>
          </h1>
        </div>

        <!-- Perfectly Centered Dual Entry Cards Grid -->
        <div class="grid-2" style="max-width: 1060px; margin: 0 auto; gap: 2.5rem; align-items: stretch;">
          
          <!-- CARD 1: KATHMANDU CONSTRUCTION COST ESTIMATOR -->
          <div class="warhol-card estimator-card" style="background: var(--bg-card); border: var(--border-thick); padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between; position: relative; box-shadow: 6px 6px 0px #FFD700; transition: transform 0.2s ease, box-shadow 0.2s ease;">
            <div style="position: absolute; top: -16px; right: 20px; background: #FF2A85; color: #FFFFFF; font-family: var(--font-mono); font-weight: 700; font-size: 0.75rem; padding: 0.3rem 0.8rem; border: 2px solid var(--border-color); box-shadow: 3px 3px 0px var(--shadow-color);">
              POPULAR TOOL
            </div>

            <div>
              <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cmyk-yellow); font-weight: 700; margin-bottom: 0.5rem;">
                [ SERVICE 01 // CALCULATOR ]
              </div>

              <h2 style="font-family: 'MangoGrotesque', var(--font-display); font-size: 2.8rem; font-weight: 700; color: var(--text-main); line-height: 0.95; margin-bottom: 1rem; text-transform: uppercase;">
                KATHMANDU CONSTRUCTION COST ESTIMATOR
              </h2>

              <p style="color: var(--text-muted); font-family: var(--font-sans); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">
                Calculate residential construction costs across Kathmandu, Lalitpur & Bhaktapur. Features Aana land conversion (1 Aana = 342.25 sq. ft.), storeys selection, finish quality tiers, municipality permits, and instant NPR Lakhs & Crores BOQ receipt generation.
              </p>

              <!-- Structured Neobrutalist Contact & Consultation Callout Block -->
              <div class="scope-contact-block" style="background: #0A0A0A; border: 2px solid #FFF; box-shadow: 4px 4px 0px var(--cmyk-yellow); padding: 1.2rem; margin-bottom: 1.8rem; position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.7rem; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.4rem;">
                  <span style="color: var(--cmyk-yellow); font-weight: 900;">✉️ DIRECT MUNICIPAL & ARCHITECTURAL CONSULTATION</span>
                  <span style="background: var(--cmyk-pink); color: #FFF; font-weight: 900; padding: 0.1rem 0.4rem; border: 1px solid #FFF; font-size: 0.6rem;">[CONTACT & INQUIRIES]</span>
                </div>

                <div style="display: grid; grid-template-columns: 1fr; gap: 0.6rem; font-family: var(--font-mono); font-size: 0.8rem;">
                  <div style="background: #000; border: 1px solid #FFF; padding: 0.6rem 0.8rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
                    <span style="color: var(--cmyk-cyan); font-weight: 700;">[EMAIL INQUIRIES]:</span>
                    <a href="mailto:scope.kathmandu@gmail.com" style="color: #FFF; font-weight: 900; text-decoration: underline;">scope.kathmandu@gmail.com</a>
                  </div>
                  <div style="background: #000; border: 1px solid #FFF; padding: 0.6rem 0.8rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
                    <span style="color: var(--cmyk-yellow); font-weight: 700;">[PHONE / WHATSAPP]:</span>
                    <a href="tel:+9779800000000" style="color: #FFF; font-weight: 900; text-decoration: none;">+977 9800000000</a>
                  </div>
                  <div style="background: #000; border: 1px solid #FFF; padding: 0.6rem 0.8rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
                    <span style="color: var(--cmyk-pink); font-weight: 700;">[OFFICE LOCATION]:</span>
                    <span style="color: #FFF; font-weight: 700;">Kathmandu Valley, Bagmati, Nepal</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button class="btn-brutal yellow" data-route="/cost-estimator" style="width: 100%; justify-content: center; font-size: 1.05rem; padding: 1rem 1.5rem;">
                ⚡ LAUNCH CALCULATOR →
              </button>
            </div>
          </div>

          <!-- CARD 2: PERMIT & LEGAL COMPLIANCE HUB -->
          <div class="warhol-card legal-card" style="background: var(--bg-card); border: var(--border-thick); padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between; position: relative; box-shadow: 6px 6px 0px #FF007F; transition: transform 0.2s ease, box-shadow 0.2s ease;">
            <div style="position: absolute; top: -16px; right: 20px; background: #FFE600; color: #000000; font-family: var(--font-mono); font-weight: 900; font-size: 0.75rem; padding: 0.3rem 0.8rem; border: 2px solid var(--border-color); box-shadow: 3px 3px 0px var(--shadow-color);">
              COMPLIANCE HUB
            </div>

            <div>
              <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cmyk-pink); font-weight: 700; margin-bottom: 0.5rem;">
                [ SERVICE 02 // LEGAL HUB ]
              </div>

              <h2 style="font-family: 'MangoGrotesque', var(--font-display); font-size: 2.8rem; font-weight: 700; color: var(--text-main); line-height: 0.95; margin-bottom: 1rem; text-transform: uppercase;">
                PERMIT & LEGAL COMPLIANCE HUB
              </h2>

              <p style="color: var(--text-muted); font-family: var(--font-sans); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">
                Kathmandu Metropolitan City (KMC) & Lalitpur municipal building permit portal. Features 8-document master checklists with percentage readiness scoring, road-width bylaws checkers, 3-stage approval timelines, and zoning guidelines.
              </p>

              <!-- Structured Neobrutalist Contact & Consultation Callout Block -->
              <div class="scope-contact-block" style="background: #0A0A0A; border: 2px solid #FFF; box-shadow: 4px 4px 0px #FF007F; padding: 1.2rem; margin-bottom: 1.8rem; position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.7rem; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.4rem;">
                  <span style="color: #FF007F; font-weight: 900;">📜 MUNICIPAL BYLAW & LEGAL CONSULTATION</span>
                  <span style="background: #FFE600; color: #000; font-weight: 900; padding: 0.1rem 0.4rem; border: 1px solid #FFF; font-size: 0.6rem;">[CONTACT & INQUIRIES]</span>
                </div>

                <div style="display: grid; grid-template-columns: 1fr; gap: 0.6rem; font-family: var(--font-mono); font-size: 0.8rem;">
                  <div style="background: #000; border: 1px solid #FFF; padding: 0.6rem 0.8rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
                    <span style="color: var(--cmyk-yellow); font-weight: 700;">[EMAIL INQUIRIES]:</span>
                    <a href="mailto:scope.kathmandu@gmail.com" style="color: #FFF; font-weight: 900; text-decoration: underline;">scope.kathmandu@gmail.com</a>
                  </div>
                  <div style="background: #000; border: 1px solid #FFF; padding: 0.6rem 0.8rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
                    <span style="color: #FF007F; font-weight: 700;">[PHONE / WHATSAPP]:</span>
                    <a href="tel:+9779800000000" style="color: #FFF; font-weight: 900; text-decoration: none;">+977 9800000000</a>
                  </div>
                  <div style="background: #000; border: 1px solid #FFF; padding: 0.6rem 0.8rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
                    <span style="color: var(--cmyk-cyan); font-weight: 700;">[OFFICE LOCATION]:</span>
                    <span style="color: #FFF; font-weight: 700;">Kathmandu Valley, Bagmati, Nepal</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button class="btn-brutal pink" data-route="/legal-hub" style="width: 100%; justify-content: center; font-size: 1.05rem; padding: 1rem 1.5rem;">
                📜 ACCESS LEGAL HUB →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
