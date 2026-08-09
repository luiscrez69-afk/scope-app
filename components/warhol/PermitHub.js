/**
 * PermitHub Component - SCOPE Web App (Warhol Pop-Art Edition)
 * Kathmandu Municipality Permit Blueprint & Legal Compliance Portal
 * Featuring Document Sample Popover Badges, Interactive SVG Road Setback Graphic,
 * and 4-Stage Visual SVG Workflow & Blueprint Stamping Pipeline
 */

export function createPermitHub() {
  return `
    <div id="legal" class="tab-pane active-pane">
      <div class="scope-container">
        
        <!-- Header Section -->
        <div class="section-title-wrap" style="margin-bottom: 2.5rem;">
          <div>
            <span class="section-tag" style="background: var(--cmyk-pink); color: #FFF; font-weight: 900;">KATHMANDU METROPOLITAN CITY // PERMIT PORTAL</span>
            <h2 class="section-title" style="margin-top: 0.5rem; font-family: 'MangoGrotesque', var(--font-display); font-size: clamp(3rem, 6vw, 4.5rem); line-height: 0.9;">
              LEGAL & PERMIT HUB
            </h2>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--cmyk-yellow); font-weight: 700;">
            [ NBC 105:2020 COMPLIANT // KMC NAKSHA PASS 2078 ]
          </div>
        </div>

        <!-- 1. BYLAWS CALCULATOR WITH INTERACTIVE SVG ROAD SETBACK GRAPHIC -->
        <div class="permit-bylaws-box" style="background: #000; border: 2px solid #FFF; box-shadow: 6px 6px 0px var(--cmyk-yellow); padding: 1.8rem; margin-bottom: 2.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; flex-wrap: wrap; gap: 1rem;">
            <div>
              <span class="badge brutal-badge yellow">RULE CHECKER</span>
              <h3 style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 900; color: #FFF; margin-top: 0.4rem; text-transform: uppercase;">
                1. KMC ROAD WIDTH & SETBACK CALCULATOR
              </h3>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cmyk-cyan);">
              MANDATORY SETBACK: 1.5m (5.0 FT)
            </div>
          </div>

          <p style="color: #CCC; font-size: 0.95rem; margin-bottom: 1.5rem; max-width: 800px;">
            Input the existing road width in front of your land plot to verify permitted building height, setback requirements, and balcony cantilever limits per Kathmandu Metropolitan City bylaws.
          </p>

          <div style="display: flex; gap: 1.5rem; align-items: flex-end; flex-wrap: wrap; margin-bottom: 1.2rem;">
            <div style="flex: 1; min-width: 240px;">
              <label style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--cmyk-cyan); font-weight: 700; display: block; margin-bottom: 0.5rem;">
                RIGHT-OF-WAY ROAD WIDTH (METERS):
              </label>
              <input type="number" id="road-width-input" value="4.0" step="0.5" min="2" max="15" style="width: 100%; background: #111; border: 2px solid #FFF; color: #FFF; font-family: var(--font-mono); font-size: 1.2rem; padding: 0.8rem 1rem; font-weight: 700; box-sizing: border-box;" />
            </div>

            <div id="bylaws-result-badge" style="flex: 2; min-width: 280px; background: #18181A; border: 2px solid var(--cmyk-cyan); padding: 0.9rem 1.2rem; font-family: var(--font-mono); font-size: 0.85rem;">
              <div style="color: var(--cmyk-cyan); font-weight: 700; margin-bottom: 0.3rem;">MAX ALLOWED HEIGHT:</div>
              <div id="bylaws-result-text" style="color: #FFF; font-weight: 900; font-size: 1.1rem;">
                2.5 STOREYS (35.0 FT) // 1.5M SETBACK MANDATORY
              </div>
            </div>
          </div>

          <!-- DYNAMIC NEOBRUTALIST ROAD SETBACK & BUILDING ENVELOPE SVG GRAPHIC -->
          <div id="bylaws-svg-container" style="background: #0A0A0A; border: 2px solid #FFF; box-shadow: 4px 4px 0px var(--cmyk-cyan); padding: 1.2rem; margin-top: 1.5rem; position: relative;">
            <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
              <span style="color: var(--cmyk-cyan); font-weight: 900;">🚧 KATHMANDU ROAD SETBACK & BUILDING ENVELOPE CROSS-SECTION</span>
              <span id="bylaws-status-stamp" style="background: #00FF66; color: #000; font-weight: 900; padding: 0.2rem 0.6rem; border: 1px solid #FFF; font-size: 0.7rem;">[KMC BYLAWS COMPLIANT]</span>
            </div>

            <div style="width: 100%; height: 220px; position: relative; background: #000; border: 1px dashed #333; overflow: hidden; display: flex; align-items: center; justify-content: center;">
              <svg id="bylaws-svg-canvas" viewBox="0 0 500 220" style="width: 100%; height: 100%;">
                <defs>
                  <pattern id="setback-no-build-hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="8" stroke="#FF007F" stroke-width="1.8" />
                  </pattern>
                </defs>

                <line x1="20" y1="180" x2="480" y2="180" stroke="#FFF" stroke-width="3" />
                <text x="25" y="195" fill="#888" font-family="monospace" font-size="9" font-weight="bold">ROAD DATUM ±0.00 M</text>

                <g id="road-profile-group">
                  <rect id="svg-road-rect" x="60" y="170" width="120" height="10" fill="#222" stroke="#444" stroke-width="1" />
                  <line id="svg-road-axis" x1="120" y1="140" x2="120" y2="180" stroke="#FFD700" stroke-width="1.5" stroke-dasharray="4,3" />
                  <text id="svg-road-width-lbl" x="120" y="132" fill="#FFD700" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">ROAD WIDTH = 4.0M</text>
                  <line x1="60" y1="162" x2="180" y2="162" stroke="#FFD700" stroke-width="1.5" />
                  <line x1="60" y1="157" x2="60" y2="167" stroke="#FFD700" stroke-width="1.5" />
                  <line x1="180" y1="157" x2="180" y2="167" stroke="#FFD700" stroke-width="1.5" />
                </g>

                <line x1="180" y1="30" x2="180" y2="180" stroke="#FFF" stroke-width="2" />
                <text x="183" y="42" fill="#FFF" font-family="monospace" font-size="9" font-weight="bold">PROP. BOUNDARY</text>

                <g id="setback-zone-group">
                  <rect x="180" y="50" width="60" height="130" fill="url(#setback-no-build-hatch)" fill-opacity="0.35" stroke="#FF007F" stroke-width="1.5" stroke-dasharray="4,3" />
                  <text x="210" y="115" fill="#FF007F" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle" transform="rotate(-90 210 115)">1.5M SETBACK (NO BUILD)</text>
                </g>

                <line x1="240" y1="30" x2="240" y2="180" stroke="#00E5FF" stroke-width="2" stroke-dasharray="5,4" />
                <text x="243" y="42" fill="#00E5FF" font-family="monospace" font-size="9" font-weight="bold">SETBACK LINE</text>

                <g id="bldg-envelope-group">
                  <rect id="svg-bldg-rect" x="240" y="60" width="200" height="120" fill="none" stroke="#00FF66" stroke-width="2.5" />

                  <line x1="240" y1="140" x2="440" y2="140" stroke="#00FF66" stroke-width="1" stroke-dasharray="3,3" />
                  <line x1="240" y1="100" x2="440" y2="100" stroke="#00FF66" stroke-width="1" stroke-dasharray="3,3" />

                  <line id="svg-height-cap-line" x1="220" y1="60" x2="460" y2="60" stroke="#FF007F" stroke-width="2" stroke-dasharray="5,4" />
                  <text id="svg-height-cap-txt" x="340" y="52" fill="#FF007F" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">BYLAW LIMIT: MAX 2.5 STOREYS (35 FT)</text>

                  <path d="M 240 100 L 220 100 L 220 120 L 240 120" fill="none" stroke="#FFD700" stroke-width="1.5" />
                  <text x="218" y="95" fill="#FFD700" font-family="monospace" font-size="8" font-weight="bold" text-anchor="end">MAX 1.0M BALCONY</text>
                </g>
              </svg>
            </div>

            <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: #AAA; margin-top: 0.8rem; border-top: 1px dashed #333; padding-top: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
              <div>SETBACK MANDATE: <span style="color: var(--cmyk-pink); font-weight: 700;">1.5M (5.0 FT) FROM PROPERTY LINE</span></div>
              <div>GROUND COVERAGE: <span style="color: var(--cmyk-cyan); font-weight: 700;">70% MAX GROUND RATIO</span></div>
              <div>BYLAW CODE: <span style="color: #00FF66; font-weight: 700;">NBC 105:2020 / KMC 2078</span></div>
            </div>
          </div>
        </div>

        <!-- 2. 4-STAGE VISUAL SVG WORKFLOW & BLUEPRINT STAMPING PIPELINE -->
        <div class="naksha-pipeline-container" style="background: #000; border: 3px solid #FFF; box-shadow: 8px 8px 0px var(--cmyk-pink); padding: 2rem; margin-bottom: 2.5rem;">
          
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.8rem; flex-wrap: wrap; gap: 1rem; border-bottom: 2px dashed #333; padding-bottom: 1.2rem;">
            <div>
              <span class="badge brutal-badge pink">OFFICIAL PIPELINE</span>
              <h3 style="font-family: 'MangoGrotesque', var(--font-display); font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 900; color: #FFF; margin-top: 0.3rem; line-height: 0.95; text-transform: uppercase;">
                2. KATHMANDU NAKSHA PASS 4-STAGE PIPELINE
              </h3>
            </div>
            
            <div style="text-align: right;">
              <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--cmyk-yellow); font-weight: 700; margin-bottom: 0.4rem;">
                TAP CARDS TO STAMP & APPROVE
              </div>
              <div id="naksha-progress-meter" style="background: #18181A; border: 2px solid #00FF66; color: #00FF66; font-family: var(--font-mono); font-weight: 900; padding: 0.4rem 0.8rem; font-size: 0.85rem;">
                NAKSHA PASS PROGRESS: [ 1 / 4 STAGES COMPLETED ]
              </div>
            </div>
          </div>

          <div style="width: 100%; height: 12px; background: #111; border: 2px solid #FFF; margin-bottom: 2rem; overflow: hidden;">
            <div id="pipeline-progress-fill" style="width: 25%; height: 100%; background: #00FF66; transition: width 0.4s ease;"></div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; position: relative;">
            
            <!-- STAGE 01 -->
            <div class="pipeline-stage-card active-stage" data-stage="1" style="background: #0A0A0A; border: 3px solid #FFF; box-shadow: 6px 6px 0px #00E5FF; padding: 1.2rem; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease;">
              <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem;">
                <span style="background: #00E5FF; color: #000; font-weight: 900; padding: 0.15rem 0.5rem;">STAGE 01</span>
                <span style="color: #AAA;">KAGAZ-PATRA</span>
              </div>
              <h4 style="font-weight: 900; font-size: 1.1rem; color: #FFF; margin-bottom: 0.8rem;">Document Dossier & CAD Blueprint</h4>

              <div style="width: 100%; height: 140px; background: #000; border: 1px dashed #333; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg viewBox="0 0 200 140" style="width: 100%; height: 100%;">
                  <rect x="20" y="20" width="160" height="100" fill="#0A0A0F" stroke="#00E5FF" stroke-width="1.5" />
                  <rect x="30" y="30" width="45" height="35" fill="none" stroke="#FFF" stroke-width="1" />
                  <text x="52" y="52" fill="#888" font-family="monospace" font-size="7" text-anchor="middle">LALPURJA</text>
                  <rect x="85" y="30" width="45" height="35" fill="none" stroke="#FFF" stroke-width="1" />
                  <text x="107" y="52" fill="#888" font-family="monospace" font-size="7" text-anchor="middle">NAPI MAP</text>
                  <rect x="30" y="72" width="100" height="38" fill="none" stroke="#00E5FF" stroke-width="1" stroke-dasharray="2,2" />
                  <text x="80" y="93" fill="#00E5FF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">NEC CAD BLUEPRINT</text>

                  <g id="stamp-stage-1" transform="translate(40, 50) rotate(-10)" opacity="1">
                    <rect x="0" y="0" width="120" height="26" fill="none" stroke="#00FF66" stroke-width="2" rx="3" />
                    <text x="60" y="17" fill="#00FF66" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">LALPURJA VERIFIED</text>
                  </g>
                </svg>
              </div>

              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #AAA;">
                Official land title deed, cadastral survey trace map, and structural blueprints signed by NEC engineer.
              </div>
            </div>

            <!-- STAGE 02 -->
            <div class="pipeline-stage-card" data-stage="2" style="background: #0A0A0A; border: 3px solid #FFF; box-shadow: 6px 6px 0px #FF007F; padding: 1.2rem; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease;">
              <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem;">
                <span style="background: #FF007F; color: #FFF; font-weight: 900; padding: 0.15rem 0.5rem;">STAGE 02</span>
                <span style="color: #AAA;">PLINTH LEVEL</span>
              </div>
              <h4 style="font-weight: 900; font-size: 1.1rem; color: #FFF; margin-bottom: 0.8rem;">Asthai Ijajat & Plinth Inspection</h4>

              <div style="width: 100%; height: 140px; background: #000; border: 1px dashed #333; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg viewBox="0 0 200 140" style="width: 100%; height: 100%;">
                  <rect x="20" y="90" width="160" height="25" fill="#222" stroke="#FF007F" stroke-width="1.5" />
                  <text x="100" y="106" fill="#FF007F" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">PLINTH BEAM CASTING +2'0"</text>
                  <rect x="40" y="25" width="120" height="50" fill="#111" stroke="#FFF" stroke-width="1.5" />
                  <text x="100" y="48" fill="#FFD700" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">15-DINE SUCHANA</text>
                  <text x="100" y="62" fill="#888" font-family="monospace" font-size="7" text-anchor="middle">PUBLIC MUNICIPAL NOTICE</text>

                  <g id="stamp-stage-2" transform="translate(35, 45) rotate(-8)" opacity="0">
                    <rect x="0" y="0" width="130" height="26" fill="none" stroke="#FF007F" stroke-width="2" rx="3" />
                    <text x="65" y="17" fill="#FF007F" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">ASTHAI PERMIT PASSED</text>
                  </g>
                </svg>
              </div>

              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #AAA;">
                15-day public notice publication followed by municipal engineer field site inspection of foundation plinth.
              </div>
            </div>

            <!-- STAGE 03 -->
            <div class="pipeline-stage-card" data-stage="3" style="background: #0A0A0A; border: 3px solid #FFF; box-shadow: 6px 6px 0px #FFD700; padding: 1.2rem; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease;">
              <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem;">
                <span style="background: #FFD700; color: #000; font-weight: 900; padding: 0.15rem 0.5rem;">STAGE 03</span>
                <span style="color: #AAA;">SUPERSTRUCTURE</span>
              </div>
              <h4 style="font-weight: 900; font-size: 1.1rem; color: #FFF; margin-bottom: 0.8rem;">Sthai Ijajat (Superstructure Approval)</h4>

              <div style="width: 100%; height: 140px; background: #000; border: 1px dashed #333; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg viewBox="0 0 200 140" style="width: 100%; height: 100%;">
                  <rect x="40" y="30" width="120" height="90" fill="none" stroke="#FFD700" stroke-width="2" />
                  <line x1="40" y1="75" x2="160" y2="75" stroke="#FFF" stroke-width="2" />
                  <rect x="45" y="30" width="10" height="90" fill="#FFD700" />
                  <rect x="95" y="30" width="10" height="90" fill="#FFD700" />
                  <rect x="145" y="30" width="10" height="90" fill="#FFD700" />
                  <text x="100" y="112" fill="#00E5FF" font-family="monospace" font-size="7" font-weight="bold" text-anchor="middle">KMC SETBACK & HEIGHT OK</text>

                  <g id="stamp-stage-3" transform="translate(40, 50) rotate(-6)" opacity="0">
                    <rect x="0" y="0" width="120" height="26" fill="none" stroke="#FFD700" stroke-width="2" rx="3" />
                    <text x="60" y="17" fill="#FFD700" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">STHAI APPROVED</text>
                  </g>
                </svg>
              </div>

              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #AAA;">
                Verification of setback compliance and RCC pillar reinforcement before casting upper floor slabs.
              </div>
            </div>

            <!-- STAGE 04 -->
            <div class="pipeline-stage-card" data-stage="4" style="background: #0A0A0A; border: 3px solid #FFF; box-shadow: 6px 6px 0px #00FF66; padding: 1.2rem; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease;">
              <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem;">
                <span style="background: #00FF66; color: #000; font-weight: 900; padding: 0.15rem 0.5rem;">STAGE 04</span>
                <span style="color: #AAA;">COMPLETION</span>
              </div>
              <h4 style="font-weight: 900; font-size: 1.1rem; color: #FFF; margin-bottom: 0.8rem;">Nirman Sampanna (Completion)</h4>

              <div style="width: 100%; height: 140px; background: #000; border: 1px dashed #333; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg viewBox="0 0 200 140" style="width: 100%; height: 100%;">
                  <polygon points="100,20 30,60 170,60" fill="none" stroke="#00FF66" stroke-width="2" />
                  <rect x="40" y="60" width="120" height="60" fill="none" stroke="#00FF66" stroke-width="2" />
                  <circle cx="160" cy="80" r="10" fill="#FFD700" />
                  <text x="160" y="83" fill="#000" font-family="monospace" font-size="7" font-weight="bold" text-anchor="middle">NEA</text>
                  <text x="100" y="95" fill="#FFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">UTILITY PERMIT ACTIVE</text>

                  <g id="stamp-stage-4" transform="translate(20, 50) rotate(-10)" opacity="0">
                    <rect x="0" y="0" width="160" height="28" fill="none" stroke="#00FF66" stroke-width="2.5" rx="3" />
                    <text x="80" y="18" fill="#00FF66" font-family="monospace" font-size="7.5" font-weight="bold" text-anchor="middle">NIRMAN SAMPANNA CERTIFICATE</text>
                  </g>
                </svg>
              </div>

              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #AAA;">
                Final government completion certificate authorizing permanent NEA electricity & KUKL water lines.
              </div>
            </div>

          </div>
        </div>

        <!-- 3. DOCUMENTATION CHECKLIST WITH SAMPLE PREVIEW POPOVERS -->
        <div style="background: var(--bg-card); border: var(--border-thick); box-shadow: 6px 6px 0px var(--cmyk-pink); padding: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <div>
              <span class="badge brutal-badge pink">DOCUMENTATION</span>
              <h3 style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 900; color: #FFF; margin-top: 0.4rem; text-transform: uppercase;">
                3. NAKSHA PASS MANDATORY CHECKLIST
              </h3>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cmyk-yellow);">
              [ HOVER OVER BADGES FOR SAMPLES ]
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.2rem;">
            
            <div class="doc-item-card" style="background: #000; border: 2px solid #FFF; padding: 1.2rem; position: relative;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.6rem;">
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cmyk-cyan); font-weight: 700;">DOC #01</span>
                
                <div class="doc-sample-trigger" style="position: relative; display: inline-block;">
                  <span class="badge brutal-badge yellow" style="font-size: 0.65rem; padding: 0.1rem 0.4rem; cursor: pointer;">🔍 DOC SAMPLE</span>
                  <div class="doc-sample-popover" style="display: none; position: absolute; right: 0; top: 120%; width: 180px; background: #0A0A0A; border: 2px solid #FFF; box-shadow: 4px 4px 0px var(--cmyk-yellow); z-index: 100; padding: 0.5rem;">
                    <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&q=80" alt="Lalpurja Land Ownership Certificate" style="width: 100%; height: 100px; object-fit: cover; border: 1px solid #FFF;">
                    <div style="font-family: var(--font-mono); font-size: 0.65rem; color: #FFF; margin-top: 0.4rem; text-align: center; font-weight: 700;">LALPURJA (LAND TITLE)</div>
                  </div>
                </div>
              </div>
              <h4 style="font-weight: 900; font-size: 1.1rem; color: #FFF; margin-bottom: 0.4rem;">Land Ownership Certificate (Lalpurja)</h4>
              <p style="font-size: 0.85rem; color: #AAA; line-height: 1.4;">Official government land title deed registered under Malpot Karyalaya.</p>
            </div>

            <div class="doc-item-card" style="background: #000; border: 2px solid #FFF; padding: 1.2rem; position: relative;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.6rem;">
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cmyk-pink); font-weight: 700;">DOC #02</span>
                
                <div class="doc-sample-trigger" style="position: relative; display: inline-block;">
                  <span class="badge brutal-badge pink" style="font-size: 0.65rem; padding: 0.1rem 0.4rem; cursor: pointer; color: #FFF;">🔍 DOC SAMPLE</span>
                  <div class="doc-sample-popover" style="display: none; position: absolute; right: 0; top: 120%; width: 180px; background: #0A0A0A; border: 2px solid #FFF; box-shadow: 4px 4px 0px var(--cmyk-pink); z-index: 100; padding: 0.5rem;">
                    <img src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=300&q=80" alt="Cadastral Map Trace" style="width: 100%; height: 100px; object-fit: cover; border: 1px solid #FFF;">
                    <div style="font-family: var(--font-mono); font-size: 0.65rem; color: #FFF; margin-top: 0.4rem; text-align: center; font-weight: 700;">CADASTRAL MAP TRACE</div>
                  </div>
                </div>
              </div>
              <h4 style="font-weight: 900; font-size: 1.1rem; color: #FFF; margin-bottom: 0.4rem;">Cadastral Trace Map (Char-Killa)</h4>
              <p style="font-size: 0.85rem; color: #AAA; line-height: 1.4;">Official Survey Department plot map showing adjacent land boundaries.</p>
            </div>

            <div class="doc-item-card" style="background: #000; border: 2px solid #FFF; padding: 1.2rem; position: relative;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.6rem;">
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cmyk-green); font-weight: 700;">DOC #03</span>
                
                <div class="doc-sample-trigger" style="position: relative; display: inline-block;">
                  <span class="badge brutal-badge cyan" style="font-size: 0.65rem; padding: 0.1rem 0.4rem; cursor: pointer; color: #000;">🔍 DOC SAMPLE</span>
                  <div class="doc-sample-popover" style="display: none; position: absolute; right: 0; top: 120%; width: 180px; background: #0A0A0A; border: 2px solid #FFF; box-shadow: 4px 4px 0px var(--cmyk-cyan); z-index: 100; padding: 0.5rem;">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80" alt="NEA Engineering Blueprints" style="width: 100%; height: 100px; object-fit: cover; border: 1px solid #FFF;">
                    <div style="font-family: var(--font-mono); font-size: 0.65rem; color: #FFF; margin-top: 0.4rem; text-align: center; font-weight: 700;">BLUEPRINT & ANALYSIS</div>
                  </div>
                </div>
              </div>
              <h4 style="font-weight: 900; font-size: 1.1rem; color: #FFF; margin-bottom: 0.4rem;">Architectural & Structural Drawings</h4>
              <p style="font-size: 0.85rem; color: #AAA; line-height: 1.4;">Signed NBC 105:2020 structural analysis and 3D architectural elevations.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  `;
}

export function initPermitHubEvents() {
  const roadWidthInput = document.getElementById('road-width-input');
  const resultBadge = document.getElementById('bylaws-result-badge');
  const resultText = document.getElementById('bylaws-result-text');

  function updateBylawsGraphic(roadWidth) {
    const roadWidthLbl = document.getElementById('svg-road-width-lbl');
    const roadRect = document.getElementById('svg-road-rect');
    const roadAxis = document.getElementById('svg-road-axis');
    const heightCapLine = document.getElementById('svg-height-cap-line');
    const heightCapTxt = document.getElementById('svg-height-cap-txt');
    const bldgRect = document.getElementById('svg-bldg-rect');
    const statusStamp = document.getElementById('bylaws-status-stamp');

    const widthM = parseFloat(roadWidth) || 4.0;
    if (roadWidthLbl) roadWidthLbl.textContent = `ROAD WIDTH = ${widthM.toFixed(1)}M`;

    const roadPx = Math.min(220, Math.max(80, widthM * 30));
    const roadX = 180 - roadPx;
    if (roadRect) {
      roadRect.setAttribute('x', roadX);
      roadRect.setAttribute('width', roadPx);
    }
    if (roadAxis) {
      const axisX = roadX + roadPx / 2;
      roadAxis.setAttribute('x1', axisX);
      roadAxis.setAttribute('x2', axisX);
      if (roadWidthLbl) roadWidthLbl.setAttribute('x', axisX);
    }

    if (widthM < 3.0) {
      if (statusStamp) {
        statusStamp.textContent = '[SPECIAL PERMIT REQUIRED // NARROW ACCESS]';
        statusStamp.style.background = 'var(--cmyk-yellow)';
        statusStamp.style.color = '#000';
      }
      if (heightCapLine) { heightCapLine.setAttribute('y1', 100); heightCapLine.setAttribute('y2', 100); }
      if (heightCapTxt) { heightCapTxt.setAttribute('y', 92); heightCapTxt.textContent = 'BYLAW LIMIT: MAX 1.5 STOREYS (NARROW ROAD)'; }
      if (bldgRect) { bldgRect.setAttribute('y', 100); bldgRect.setAttribute('height', 80); }
    } else if (widthM >= 3.0 && widthM < 6.0) {
      if (statusStamp) {
        statusStamp.textContent = '[KMC BYLAWS COMPLIANT]';
        statusStamp.style.background = '#00FF66';
        statusStamp.style.color = '#000';
      }
      if (heightCapLine) { heightCapLine.setAttribute('y1', 60); heightCapLine.setAttribute('y2', 60); }
      if (heightCapTxt) { heightCapTxt.setAttribute('y', 52); heightCapTxt.textContent = 'BYLAW LIMIT: MAX 2.5 STOREYS (35 FT)'; }
      if (bldgRect) { bldgRect.setAttribute('y', 60); bldgRect.setAttribute('height', 120); }
    } else {
      if (statusStamp) {
        statusStamp.textContent = '[KMC BYLAWS COMPLIANT // MULTI-STOREY HIGHWAY]';
        statusStamp.style.background = '#00FF66';
        statusStamp.style.color = '#000';
      }
      if (heightCapLine) { heightCapLine.setAttribute('y1', 35); heightCapLine.setAttribute('y2', 35); }
      if (heightCapTxt) { heightCapTxt.setAttribute('y', 27); heightCapTxt.textContent = 'BYLAW LIMIT: EXPANDED 3.5+ STOREYS (45 FT)'; }
      if (bldgRect) { bldgRect.setAttribute('y', 35); bldgRect.setAttribute('height', 145); }
    }
  }

  function calculateBylaws() {
    if (!roadWidthInput || !resultText) return;

    const width = parseFloat(roadWidthInput.value) || 0;

    let res = "";
    if (width < 3.0) {
      res = "⚠️ NARROW ACCESS (<3.0m): MAX 1.5 STOREYS // SPECIAL KMC BOARD PERMIT REQUIRED";
      if (resultBadge) resultBadge.style.borderColor = "var(--cmyk-orange)";
    } else if (width >= 3.0 && width < 6.0) {
      res = "✅ STANDARD RESIDENTIAL (3.0m - 6.0m): MAX 2.5 STOREYS (35.0 FT) // 1.5M SETBACK";
      if (resultBadge) resultBadge.style.borderColor = "var(--cmyk-cyan)";
    } else {
      res = "🚀 HIGHWAY / WIDE ACCESS (6.0m+): MAX 3.5+ STOREYS PERMITTED // 1.5M SETBACK";
      if (resultBadge) resultBadge.style.borderColor = "var(--cmyk-green)";
    }

    resultText.textContent = res;
    updateBylawsGraphic(width);
  }

  if (roadWidthInput) {
    roadWidthInput.addEventListener('input', calculateBylaws);
    calculateBylaws();
  }

  // 4-Stage Naksha Pass Pipeline Stamping Interaction
  const completedStages = new Set([1]);

  function updatePipelineProgress() {
    const meter = document.getElementById('naksha-progress-meter');
    const fill = document.getElementById('pipeline-progress-fill');

    const count = completedStages.size;
    if (meter) meter.textContent = `NAKSHA PASS PROGRESS: [ ${count} / 4 STAGES COMPLETED ]`;
    if (fill) fill.style.width = `${count * 25}%`;
  }

  const stageCards = document.querySelectorAll('.pipeline-stage-card');
  stageCards.forEach(card => {
    card.addEventListener('click', () => {
      const stageNum = parseInt(card.getAttribute('data-stage'), 10);
      const stamp = document.getElementById(`stamp-stage-${stageNum}`);

      if (completedStages.has(stageNum) && stageNum !== 1) {
        completedStages.delete(stageNum);
        card.classList.remove('active-stage');
        if (stamp) stamp.setAttribute('opacity', '0');
      } else {
        completedStages.add(stageNum);
        card.classList.add('active-stage');
        if (stamp) {
          stamp.setAttribute('opacity', '1');
          if (window.gsap) {
            window.gsap.fromTo(stamp, 
              { scale: 1.4, opacity: 0 }, 
              { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(1.7)" }
            );
          }
        }
      }
      updatePipelineProgress();
    });
  });

  // Hover Popovers for Document Samples
  const triggers = document.querySelectorAll('.doc-sample-trigger');
  triggers.forEach(trig => {
    const popover = trig.querySelector('.doc-sample-popover');
    if (popover) {
      trig.addEventListener('mouseenter', () => popover.style.display = 'block');
      trig.addEventListener('mouseleave', () => popover.style.display = 'none');
    }
  });
}
