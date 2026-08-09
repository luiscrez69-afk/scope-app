/**
 * HomeCards Component - SCOPE Web App (Nothing Tech Inspired)
 * Centered Dual Entry Point Cards for Kathmandu Construction Cost Estimator & Legal Hub
 * Featuring Neobrutalist Contact & Consultation Callout Cards (scope.kathmandu@gmail.com)
 */

export function createHomeCards() {
  return `
    <section class="centered-dual-cards-section" id="centered-dual-cards" style="padding: 3.5rem 0 4.5rem; background: var(--bg-main); border-bottom: var(--border-thick);">
      <div class="scope-container">
        
        <!-- Centered Header Section -->
        <div style="margin-bottom: 3rem; text-align: center;">
          <div style="display: inline-block; background: var(--nothing-red); color: #FFFFFF; font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem; padding: 0.3rem 0.9rem; border-radius: 4px; margin-bottom: 0.8rem; text-transform: uppercase;">
            ● KATHMANDU VALLEY BUILDING PORTAL
          </div>

          <h1 style="font-family: 'ND Dot', 'DotGothic16', monospace; font-size: clamp(2.8rem, 6.5vw, 4.5rem); font-weight: 700; color: var(--text-main); line-height: 0.9; margin: 0.4rem 0 0.8rem; text-transform: uppercase;">
            SCOPE <span style="color: var(--nothing-red)">SERVICES</span>
          </h1>

          <p style="font-family: var(--font-mono); color: var(--text-muted); font-size: 0.9rem; max-width: 660px; margin: 0 auto; line-height: 1.6;">
            The home you dream covered with all the information you need — authoritative construction cost estimator and municipal permit compliance portal for residential building projects across Kathmandu, Lalitpur & Bhaktapur.
          </p>
        </div>

        <!-- Perfectly Centered Dual Entry Cards Grid -->
        <div class="grid-2" style="max-width: 1060px; margin: 0 auto; gap: 2.5rem; align-items: stretch;">
          
          <!-- CARD 1: KATHMANDU CONSTRUCTION COST ESTIMATOR -->
          <div class="warhol-card estimator-card" style="background: var(--bg-card); border: var(--border-thick); border-radius: var(--radius-card); padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between; position: relative;">
            <div style="position: absolute; top: -16px; right: 20px; background: var(--nothing-red); color: #FFFFFF; font-family: var(--font-mono); font-weight: 700; font-size: 0.75rem; padding: 0.3rem 0.8rem; border-radius: 4px;">
              POPULAR TOOL
            </div>

            <div>
              <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--nothing-red); font-weight: 700; margin-bottom: 0.5rem;">
                [ SERVICE 01 // CALCULATOR ]
              </div>

              <h2 style="font-family: var(--font-mono); font-size: 1.8rem; font-weight: 700; color: var(--text-main); line-height: 1.1; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">
                KATHMANDU CONSTRUCTION COST ESTIMATOR
              </h2>

              <p style="color: var(--text-muted); font-family: var(--font-sans); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">
                Calculate residential construction costs across Kathmandu, Lalitpur & Bhaktapur. Features Aana land conversion (1 Aana = 342.25 sq. ft.), storeys selection, finish quality tiers, municipality permits, and instant NPR Lakhs & Crores BOQ receipt generation.
              </p>

              <!-- Structured Neobrutalist Contact & Consultation Callout Block -->
              <div class="scope-contact-block" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem; margin-bottom: 1.8rem; position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.7rem; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.4rem;">
                  <span style="color: var(--nothing-red); font-weight: 700;">✉️ DIRECT MUNICIPAL & ARCHITECTURAL CONSULTATION</span>
                  <span style="background: var(--nothing-red); color: #FFF; font-weight: 700; padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.6rem;">[CONTACT & INQUIRIES]</span>
                </div>

                <div style="display: grid; grid-template-columns: 1fr; gap: 0.6rem; font-family: var(--font-mono); font-size: 0.8rem;">
                  <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 4px; padding: 0.6rem 0.8rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
                    <span style="color: var(--text-muted); font-weight: 700;">[EMAIL INQUIRIES]:</span>
                    <a href="mailto:scope.kathmandu@gmail.com" style="color: #FFF; font-weight: 700; text-decoration: underline;">scope.kathmandu@gmail.com</a>
                  </div>
                  <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 4px; padding: 0.6rem 0.8rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
                    <span style="color: var(--text-muted); font-weight: 700;">[PHONE / WHATSAPP]:</span>
                    <a href="tel:+9779800000000" style="color: #FFF; font-weight: 700; text-decoration: none;">+977 9800000000</a>
                  </div>
                  <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 4px; padding: 0.6rem 0.8rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
                    <span style="color: var(--text-muted); font-weight: 700;">[OFFICE LOCATION]:</span>
                    <span style="color: #FFF; font-weight: 700;">Kathmandu Valley, Bagmati, Nepal</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button class="btn-brutal yellow" data-route="/cost-estimator" style="width: 100%; justify-content: center; font-size: 1.05rem; padding: 1rem 1.5rem; border-radius: var(--radius-pill);">
                ⚡ LAUNCH CALCULATOR →
              </button>
            </div>
          </div>

          <!-- CARD 2: PERMIT & LEGAL COMPLIANCE HUB -->
          <div class="warhol-card legal-card" style="background: var(--bg-card); border: var(--border-thick); border-radius: var(--radius-card); padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between; position: relative;">
            <div style="position: absolute; top: -16px; right: 20px; background: var(--nothing-red); color: #FFFFFF; font-family: var(--font-mono); font-weight: 700; font-size: 0.75rem; padding: 0.3rem 0.8rem; border-radius: 4px;">
              COMPLIANCE HUB
            </div>

            <div>
              <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--nothing-red); font-weight: 700; margin-bottom: 0.5rem;">
                [ SERVICE 02 // LEGAL HUB ]
              </div>

              <h2 style="font-family: var(--font-mono); font-size: 1.8rem; font-weight: 700; color: var(--text-main); line-height: 1.1; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">
                PERMIT & LEGAL COMPLIANCE HUB
              </h2>

              <p style="color: var(--text-muted); font-family: var(--font-sans); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">
                Kathmandu Metropolitan City (KMC) & Lalitpur municipal building permit portal. Features 8-document master checklists with percentage readiness scoring, road-width bylaws checkers, 3-stage approval timelines, and zoning guidelines.
              </p>

              <!-- Structured Neobrutalist Contact & Consultation Callout Block -->
              <div class="scope-contact-block" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem; margin-bottom: 1.8rem; position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.7rem; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.4rem;">
                  <span style="color: var(--nothing-red); font-weight: 700;">📜 MUNICIPAL BYLAW & LEGAL CONSULTATION</span>
                  <span style="background: var(--nothing-red); color: #FFF; font-weight: 700; padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.6rem;">[CONTACT & INQUIRIES]</span>
                </div>

                <div style="display: grid; grid-template-columns: 1fr; gap: 0.6rem; font-family: var(--font-mono); font-size: 0.8rem;">
                  <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 4px; padding: 0.6rem 0.8rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
                    <span style="color: var(--text-muted); font-weight: 700;">[EMAIL INQUIRIES]:</span>
                    <a href="mailto:scope.kathmandu@gmail.com" style="color: #FFF; font-weight: 700; text-decoration: underline;">scope.kathmandu@gmail.com</a>
                  </div>
                  <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 4px; padding: 0.6rem 0.8rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
                    <span style="color: var(--text-muted); font-weight: 700;">[PHONE / WHATSAPP]:</span>
                    <a href="tel:+9779800000000" style="color: #FFF; font-weight: 700; text-decoration: none;">+977 9800000000</a>
                  </div>
                  <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 4px; padding: 0.6rem 0.8rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
                    <span style="color: var(--text-muted); font-weight: 700;">[OFFICE LOCATION]:</span>
                    <span style="color: #FFF; font-weight: 700;">Kathmandu Valley, Bagmati, Nepal</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button class="btn-brutal pink" data-route="/legal-hub" style="width: 100%; justify-content: center; font-size: 1.05rem; padding: 1rem 1.5rem; border-radius: var(--radius-pill);">
                📜 ACCESS LEGAL HUB →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
