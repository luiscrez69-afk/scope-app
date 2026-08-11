/**
 * PermitHub Component - SCOPE Web App (Nothing Tech Inspired)
 * Kathmandu Municipality Permit Blueprint & Legal Compliance Portal
 * Featuring Expanded Interactive BYLAWS CALCULATOR with Multi-Parameter Control Panel,
 * Dynamic Engineering Bylaws Engine, Integrated SVG Cross-Section Envelope,
 * and 4-Stage Visual SVG Workflow & Blueprint Stamping Pipeline.
 */

const AANA_TO_SQFT = 342.25;

export function createPermitHub() {
  return `
    <div id="legal" class="tab-pane active-pane">
      <div class="scope-container">
        
        <!-- Header Section -->
        <div class="section-title-wrap" style="margin-bottom: 2.5rem;">
          <div>
            <span class="section-tag">● KATHMANDU METROPOLITAN CITY // PERMIT PORTAL</span>
            <h2 class="section-title" style="margin-top: 0.6rem;">
              LEGAL & PERMIT HUB
            </h2>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); font-weight: 700; letter-spacing: 1px;">
            [ NBC 105:2020 COMPLIANT // KMC NAKSHA PASS BYLAWS 2078 ]
          </div>
        </div>

        <!-- 1. INTERACTIVE EXPANDED BYLAWS CALCULATOR MODULE -->
        <div class="permit-bylaws-box" style="background: var(--bg-card); border: var(--border-thick); border-radius: var(--radius-card); padding: 1.8rem; margin-bottom: 2.5rem; position: relative;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; flex-wrap: wrap; gap: 1rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 1rem;">
            <div>
              <span class="badge brutal-badge yellow" style="background: var(--nothing-red); color: #FFF;">MUNICIPAL RULE CHECKER</span>
              <h3 style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: #FFF; margin-top: 0.4rem; text-transform: uppercase; letter-spacing: 1px;">
                1. BYLAWS CALCULATOR
              </h3>
            </div>
            <div id="bylaws-status-stamp" style="background: var(--nothing-red); color: #FFF; font-family: var(--font-mono); font-weight: 700; padding: 0.4rem 0.8rem; border-radius: 4px; font-size: 0.8rem;">
              [BYLAWS COMPLIANT // APPROVED ENVELOPE]
            </div>
          </div>

          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem; max-width: 850px;">
            Configure road width access, land zoning classification, plot dimensions, and environmental corridor clearance buffers to compute real-time Kathmandu Metropolitan City (KMC) building envelopes, max storeys, allowed ground coverage %, and mandatory setbacks per NBC 105:2020.
          </p>

          <!-- MULTI-PARAMETER INPUT FORM GRID -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 1.8rem;">
            
            <!-- COLUMN 1: ROAD ACCESS & PRESETS -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem;">
              <label style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--nothing-red); font-weight: 700; display: block; margin-bottom: 0.6rem;">
                🛣️ ROAD ACCESS WIDTH (METERS):
              </label>
              <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 0.8rem;">
                <input type="range" id="bylaws-road-slider" class="brutal-slider" min="2.0" max="12.0" step="0.5" value="4.0" style="flex: 1; height: 14px; accent-color: var(--nothing-red);" />
                <span id="bylaws-road-val-lbl" style="font-family: var(--font-mono); font-size: 1.1rem; font-weight: 700; color: #FFF; background: #111; padding: 0.3rem 0.6rem; border: 1px solid var(--border-color); border-radius: 4px; min-width: 75px; text-align: center;">4.0M</span>
              </div>

              <!-- Quick Road Presets -->
              <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                <button class="bylaws-road-preset btn-brutal white" data-width="2.0" style="padding: 0.3rem 0.5rem; font-size: 0.7rem; border-radius: 4px;">2.0m</button>
                <button class="bylaws-road-preset btn-brutal white" data-width="3.0" style="padding: 0.3rem 0.5rem; font-size: 0.7rem; border-radius: 4px;">3.0m</button>
                <button class="bylaws-road-preset btn-brutal cyan active" data-width="4.0" style="padding: 0.3rem 0.5rem; font-size: 0.7rem; border-radius: 4px; background: var(--nothing-red); color: #FFF;">4.0m</button>
                <button class="bylaws-road-preset btn-brutal white" data-width="6.0" style="padding: 0.3rem 0.5rem; font-size: 0.7rem; border-radius: 4px;">6.0m</button>
                <button class="bylaws-road-preset btn-brutal white" data-width="8.0" style="padding: 0.3rem 0.5rem; font-size: 0.7rem; border-radius: 4px;">8.0m+</button>
              </div>
            </div>

            <!-- COLUMN 2: LAND ZONING CLASSIFICATION -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem;">
              <label style="font-family: var(--font-mono); font-size: 0.85rem; color: #FFF; font-weight: 700; display: block; margin-bottom: 0.6rem;">
                🏛️ LAND ZONING CLASSIFICATION:
              </label>
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <button class="bylaws-zone-btn btn-brutal yellow active" data-zone="residential" style="justify-content: space-between; font-size: 0.8rem; padding: 0.5rem 0.8rem; border-radius: 4px; background: var(--nothing-red); color: #FFF;">
                  <span>🏡 RESIDENTIAL ZONE</span>
                  <span style="font-size: 0.65rem; font-family: var(--font-mono);">70% / 60% COVERAGE</span>
                </button>
                <button class="bylaws-zone-btn btn-brutal white" data-zone="commercial" style="justify-content: space-between; font-size: 0.8rem; padding: 0.5rem 0.8rem; border-radius: 4px;">
                  <span>🏢 MIXED-COMMERCIAL</span>
                  <span style="font-size: 0.65rem; font-family: var(--font-mono);">65% MAX COVERAGE</span>
                </button>
                <button class="bylaws-zone-btn btn-brutal white" data-zone="heritage" style="justify-content: space-between; font-size: 0.8rem; padding: 0.5rem 0.8rem; border-radius: 4px;">
                  <span>🛕 HERITAGE / CORE ZONE</span>
                  <span style="font-size: 0.65rem; font-family: var(--font-mono);">70% TRADITIONAL</span>
                </button>
              </div>
            </div>

            <!-- COLUMN 3: PLOT AREA & SPECIAL CLEARANCE BUFFERS -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem;">
              <div style="margin-bottom: 1rem;">
                <label style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--nothing-red); font-weight: 700; display: flex; justify-content: space-between;">
                  <span>📐 PLOT SIZE (AANA):</span>
                  <span id="bylaws-plot-val-lbl" style="color: #FFF;">4.0 AANA (1,369 SQFT)</span>
                </label>
                <input type="range" id="bylaws-plot-slider" class="brutal-slider" min="2.0" max="20.0" step="0.5" value="4.0" style="width: 100%; height: 14px; margin-top: 0.4rem; accent-color: var(--nothing-red);" />
              </div>

              <div style="border-top: 1px dashed var(--border-color); padding-top: 0.6rem;">
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); font-weight: 700; display: block; margin-bottom: 0.4rem;">
                  RIVER / CORRIDOR CLEARANCE TOGGLES:
                </span>
                <div style="display: flex; flex-direction: column; gap: 0.4rem; font-family: var(--font-mono); font-size: 0.75rem;">
                  <label style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; color: var(--text-muted);">
                    <span>🌊 Bagmati / Bishnumati (20m Setback)</span>
                    <input type="checkbox" id="chk-corridor-bagmati" style="accent-color: var(--nothing-red);" />
                  </label>
                  <label style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; color: var(--text-muted);">
                    <span>💧 Dhobi Khola / Tukucha (9m Setback)</span>
                    <input type="checkbox" id="chk-corridor-dhobikhola" style="accent-color: var(--nothing-red);" />
                  </label>
                  <label style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; color: var(--text-muted);">
                    <span>⚡ High-Tension Power Line (+3m)</span>
                    <input type="checkbox" id="chk-hightension" style="accent-color: var(--nothing-red);" />
                  </label>
                </div>
              </div>
            </div>

          </div>

          <!-- DYNAMIC COMPUTED OUTPUT CARDS GRID -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.8rem;">
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem;">
              <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--nothing-red); font-weight: 700;">MANDATORY SETBACK</div>
              <div id="bylaw-out-setback" style="font-family: var(--font-mono); font-size: 1.3rem; font-weight: 700; color: #FFF; margin: 0.2rem 0;">1.5M (5.0 FT)</div>
              <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">RIGHT-OF-WAY CLEARANCE</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem;">
              <div style="font-family: var(--font-mono); font-size: 0.7rem; color: #FFF; font-weight: 700;">MAX ALLOWED COVERAGE</div>
              <div id="bylaw-out-coverage" style="font-family: var(--font-mono); font-size: 1.3rem; font-weight: 700; color: #FFF; margin: 0.2rem 0;">70% COVERAGE</div>
              <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">SITE GROUND RATIO</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem;">
              <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--nothing-red); font-weight: 700;">PERMISSIBLE HEIGHT</div>
              <div id="bylaw-out-height" style="font-family: var(--font-mono); font-size: 1.3rem; font-weight: 700; color: #FFF; margin: 0.2rem 0;">2.5 STOREYS</div>
              <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">35.0 FT (10.67M) MAX</div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem;">
              <div style="font-family: var(--font-mono); font-size: 0.7rem; color: #FFF; font-weight: 700;">BUILDABLE FOOTPRINT</div>
              <div id="bylaw-out-footprint" style="font-family: var(--font-mono); font-size: 1.3rem; font-weight: 700; color: #FFF; margin: 0.2rem 0;">958.3 SQ. FT.</div>
              <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">MAX GROUND SLAB AREA</div>
            </div>
          </div>

          <!-- DYNAMIC ROAD SETBACK & BUILDING ENVELOPE SVG CROSS-SECTION GRAPHIC -->
          <div id="bylaws-svg-container" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem; position: relative;">
            <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
              <span style="color: var(--nothing-red); font-weight: 700;">🚧 KATHMANDU ROAD SETBACK & BUILDING ENVELOPE CROSS-SECTION</span>
              <span style="background: var(--bg-card); color: #FFF; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">BYLAW GRAPHIC MATRIX</span>
            </div>

            <div style="width: 100%; height: 230px; position: relative; background: #000; border: 1px dashed var(--border-color); border-radius: 4px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
              <svg id="bylaws-svg-canvas" viewBox="0 0 500 230" style="width: 100%; height: 100%;">
                <defs>
                  <pattern id="setback-no-build-hatch-n" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="8" stroke="#FF2800" stroke-width="1.8" />
                  </pattern>
                </defs>

                <line x1="20" y1="190" x2="480" y2="190" stroke="#FFF" stroke-width="3" />
                <text x="25" y="205" fill="#888" font-family="monospace" font-size="9" font-weight="bold">ROAD DATUM ±0.00 M</text>

                <!-- Road Profile -->
                <g id="road-profile-group">
                  <rect id="svg-road-rect" x="60" y="180" width="120" height="10" fill="#222" stroke="#444" stroke-width="1" />
                  <line id="svg-road-axis" x1="120" y1="140" x2="120" y2="190" stroke="#FF2800" stroke-width="1.5" stroke-dasharray="4,3" />
                  <text id="svg-road-width-lbl" x="120" y="132" fill="#FF2800" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">ROAD WIDTH = 4.0M</text>
                  <line x1="60" y1="172" x2="180" y2="172" stroke="#FF2800" stroke-width="1.5" />
                  <line x1="60" y1="167" x2="60" y2="177" stroke="#FF2800" stroke-width="1.5" />
                  <line x1="180" y1="167" x2="180" y2="177" stroke="#FF2800" stroke-width="1.5" />
                </g>

                <!-- Property Boundary Line -->
                <line x1="180" y1="20" x2="180" y2="190" stroke="#FFF" stroke-width="2" />
                <text x="183" y="32" fill="#FFF" font-family="monospace" font-size="9" font-weight="bold">PROP. BOUNDARY</text>

                <!-- No Build Setback Zone -->
                <g id="setback-zone-group">
                  <rect id="svg-setback-rect" x="180" y="45" width="60" height="145" fill="url(#setback-no-build-hatch-n)" fill-opacity="0.35" stroke="#FF2800" stroke-width="1.5" stroke-dasharray="4,3" />
                  <text id="svg-setback-lbl" x="210" y="115" fill="#FF2800" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle" transform="rotate(-90 210 115)">1.5M SETBACK (NO BUILD)</text>
                </g>

                <!-- Setback Boundary Line -->
                <line id="svg-setback-line" x1="240" y1="20" x2="240" y2="190" stroke="#FFF" stroke-width="2" stroke-dasharray="5,4" />
                <text id="svg-setback-line-lbl" x="243" y="32" fill="#FFF" font-family="monospace" font-size="9" font-weight="bold">SETBACK LINE</text>

                <!-- Building Envelope Silhouette -->
                <g id="bldg-envelope-group">
                  <rect id="svg-bldg-rect" x="240" y="60" width="200" height="130" fill="none" stroke="#FF2800" stroke-width="2.5" />

                  <line id="svg-bldg-floor-1" x1="240" y1="145" x2="440" y2="145" stroke="#FF2800" stroke-width="1" stroke-dasharray="3,3" />
                  <line id="svg-bldg-floor-2" x1="240" y1="100" x2="440" y2="100" stroke="#FF2800" stroke-width="1" stroke-dasharray="3,3" />

                  <line id="svg-height-cap-line" x1="220" y1="60" x2="460" y2="60" stroke="#FFF" stroke-width="2" stroke-dasharray="5,4" />
                  <text id="svg-height-cap-txt" x="340" y="52" fill="#FFF" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">BYLAW LIMIT: MAX 2.5 STOREYS (35 FT)</text>

                  <path d="M 240 100 L 220 100 L 220 120 L 240 120" fill="none" stroke="#FFF" stroke-width="1.5" />
                  <text x="218" y="95" fill="#FFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="end">MAX 1.0M BALCONY</text>
                </g>
              </svg>
            </div>

            <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-top: 0.8rem; border-top: 1px dashed var(--border-color); padding-top: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
              <div>SETBACK MANDATE: <span id="svg-meta-setback" style="color: var(--nothing-red); font-weight: 700;">1.5M (5.0 FT) FROM PROPERTY LINE</span></div>
              <div>GROUND COVERAGE: <span id="svg-meta-coverage" style="color: #FFF; font-weight: 700;">70% MAX GROUND RATIO</span></div>
              <div>BYLAW CODE: <span style="color: var(--nothing-red); font-weight: 700;">NBC 105:2020 / KMC 2078</span></div>
            </div>
          </div>
        </div>

        <!-- 2. 4-STAGE VISUAL SVG WORKFLOW & BLUEPRINT STAMPING PIPELINE -->
        <div class="naksha-pipeline-container" style="background: var(--bg-card); border: var(--border-thick); border-radius: var(--radius-card); padding: 2rem; margin-bottom: 2.5rem;">
          
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.8rem; flex-wrap: wrap; gap: 1rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 1.2rem;">
            <div>
              <span class="badge brutal-badge pink" style="background: var(--nothing-red); color: #FFF;">OFFICIAL PIPELINE</span>
              <h3 style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: #FFF; margin-top: 0.3rem; text-transform: uppercase; letter-spacing: 1px;">
                2. KATHMANDU NAKSHA PASS 4-STAGE PIPELINE
              </h3>
            </div>
            
            <div style="text-align: right;">
              <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--nothing-red); font-weight: 700; margin-bottom: 0.4rem;">
                TAP CARDS TO STAMP & APPROVE
              </div>
              <div id="naksha-progress-meter" style="background: var(--bg-surface); border: 1px solid var(--nothing-red); color: #FFF; font-family: var(--font-mono); font-weight: 700; padding: 0.4rem 0.8rem; border-radius: 4px; font-size: 0.85rem;">
                NAKSHA PASS PROGRESS: [ 1 / 4 STAGES COMPLETED ]
              </div>
            </div>
          </div>

          <div style="width: 100%; height: 8px; background: var(--bg-surface); border-radius: 4px; margin-bottom: 2rem; overflow: hidden;">
            <div id="pipeline-progress-fill" style="width: 25%; height: 100%; background: var(--nothing-red); transition: width 0.4s ease;"></div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; align-items: stretch; position: relative;">
            
            <!-- STAGE 01 -->
            <div class="pipeline-stage-card active-stage" data-stage="1" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem 1rem; cursor: pointer; transition: transform 0.2s ease; display: flex; flex-direction: column; justify-content: space-between; height: 100%; box-sizing: border-box;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem;">
                  <span style="color: var(--nothing-red); font-weight: 700;">STAGE 01</span>
                  <span class="doc-sample-trigger" style="position: relative; color: var(--nothing-red); cursor: pointer; text-decoration: underline;">
                    SAMPLE📄
                    <div class="doc-sample-popover" style="display: none; position: absolute; top: 120%; right: 0; background: #000; border: 1px solid var(--border-color); border-radius: 4px; padding: 0.8rem; width: 200px; z-index: 50; font-size: 0.7rem; color: #FFF;">
                      <strong>DRAFT DRAWING REQUIREMENT:</strong>
                      <ul style="margin: 0.4rem 0 0 1rem; padding: 0;">
                        <li>Site Plan 1:200</li>
                        <li>Floor Plans 1:100</li>
                        <li>4 Elevation Views</li>
                        <li>Drainage Layout</li>
                      </ul>
                    </div>
                  </span>
                </div>
                <div style="font-family: var(--font-mono); font-size: 0.95rem; font-weight: 700; color: #FFF; margin-bottom: 0.6rem; min-height: 2.8rem; display: flex; align-items: flex-start; line-height: 1.25; text-transform: uppercase;">
                  ARCHITECTURAL DRAFTING
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1.2rem; min-height: 3.5rem;">
                  <span style="background: rgba(255,40,0,0.15); border: 1px solid var(--nothing-red); color: var(--nothing-red); padding: 0.2rem 0.4rem; font-size: 0.65rem; font-family: var(--font-mono); font-weight: 700;">📐 SITE PLAN 1:200</span>
                  <span style="background: rgba(255,255,255,0.08); border: 1px solid #555; color: #DDD; padding: 0.2rem 0.4rem; font-size: 0.65rem; font-family: var(--font-mono);">✍️ NEA ER. SEAL</span>
                  <span style="background: rgba(255,255,255,0.08); border: 1px solid #555; color: #DDD; padding: 0.2rem 0.4rem; font-size: 0.65rem; font-family: var(--font-mono);">🏢 4 ELEVATIONS</span>
                </div>
              </div>

              <!-- SVG STAMP BADGE -->
              <div style="height: 55px; margin-top: auto; display: flex; align-items: center; justify-content: center; position: relative;">
                <svg viewBox="0 0 160 50" style="width: 100%; height: 100%;">
                  <g id="stamp-stage-1" opacity="1">
                    <rect x="5" y="5" width="150" height="40" fill="none" stroke="#FF2800" stroke-width="2" stroke-dasharray="4,2" />
                    <text x="80" y="24" fill="#FF2800" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">STAMP 01: DRAFTED</text>
                    <text x="80" y="38" fill="#FFF" font-family="monospace" font-size="8" text-anchor="middle">NEA ER. REGISTERED</text>
                  </g>
                </svg>
              </div>
            </div>

            <!-- STAGE 02 -->
            <div class="pipeline-stage-card" data-stage="2" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem 1rem; cursor: pointer; transition: transform 0.2s ease; display: flex; flex-direction: column; justify-content: space-between; height: 100%; box-sizing: border-box;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem;">
                  <span style="color: #FFF; font-weight: 700;">STAGE 02</span>
                  <span class="doc-sample-trigger" style="position: relative; color: var(--nothing-red); cursor: pointer; text-decoration: underline;">
                    SAMPLE📄
                    <div class="doc-sample-popover" style="display: none; position: absolute; top: 120%; right: 0; background: #000; border: 1px solid var(--border-color); border-radius: 4px; padding: 0.8rem; width: 200px; z-index: 50; font-size: 0.7rem; color: #FFF;">
                      <strong>WARD VERIFICATION:</strong>
                      <ul style="margin: 0.4rem 0 0 1rem; padding: 0;">
                        <li>Ward Clearance Seal</li>
                        <li>7-Day Public Notice</li>
                        <li>Boundary Field Report</li>
                      </ul>
                    </div>
                  </span>
                </div>
                <div style="font-family: var(--font-mono); font-size: 0.95rem; font-weight: 700; color: #FFF; margin-bottom: 0.6rem; min-height: 2.8rem; display: flex; align-items: flex-start; line-height: 1.25; text-transform: uppercase;">
                  WARD OFFICE VERIFICATION
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1.2rem; min-height: 3.5rem;">
                  <span style="background: rgba(255,255,255,0.12); border: 1px solid #888; color: #FFF; padding: 0.2rem 0.4rem; font-size: 0.65rem; font-family: var(--font-mono); font-weight: 700;">📢 7-DAY NOTICE</span>
                  <span style="background: rgba(255,255,255,0.08); border: 1px solid #555; color: #DDD; padding: 0.2rem 0.4rem; font-size: 0.65rem; font-family: var(--font-mono);">🏛️ WARD SEAL</span>
                  <span style="background: rgba(255,255,255,0.08); border: 1px solid #555; color: #DDD; padding: 0.2rem 0.4rem; font-size: 0.65rem; font-family: var(--font-mono);">🗺️ FIELD CHECK</span>
                </div>
              </div>

              <!-- SVG STAMP BADGE -->
              <div style="height: 55px; margin-top: auto; display: flex; align-items: center; justify-content: center; position: relative;">
                <svg viewBox="0 0 160 50" style="width: 100%; height: 100%;">
                  <g id="stamp-stage-2" opacity="0">
                    <rect x="5" y="5" width="150" height="40" fill="none" stroke="#FFF" stroke-width="2" />
                    <text x="80" y="24" fill="#FFF" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">STAMP 02: WARD PASSED</text>
                    <text x="80" y="38" fill="#FFF" font-family="monospace" font-size="8" text-anchor="middle">FIELD VERIFIED OK</text>
                  </g>
                </svg>
              </div>
            </div>

            <!-- STAGE 03 -->
            <div class="pipeline-stage-card" data-stage="3" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem 1rem; cursor: pointer; transition: transform 0.2s ease; display: flex; flex-direction: column; justify-content: space-between; height: 100%; box-sizing: border-box;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem;">
                  <span style="color: var(--nothing-red); font-weight: 700;">STAGE 03</span>
                  <span class="doc-sample-trigger" style="position: relative; color: var(--nothing-red); cursor: pointer; text-decoration: underline;">
                    SAMPLE📄
                    <div class="doc-sample-popover" style="display: none; position: absolute; top: 120%; right: 0; background: #000; border: 1px solid var(--border-color); border-radius: 4px; padding: 0.8rem; width: 200px; z-index: 50; font-size: 0.7rem; color: #FFF;">
                      <strong>TEMPORARY PERMIT:</strong>
                      <ul style="margin: 0.4rem 0 0 1rem; padding: 0;">
                        <li>Asthayi Swikriti Seal</li>
                        <li>Plinth Level Check</li>
                        <li>Plinth Inspection Pass</li>
                      </ul>
                    </div>
                  </span>
                </div>
                <div style="font-family: var(--font-mono); font-size: 0.95rem; font-weight: 700; color: #FFF; margin-bottom: 0.6rem; min-height: 2.8rem; display: flex; align-items: flex-start; line-height: 1.25; text-transform: uppercase;">
                  ASTHAYI SWIKRITI (TEMP PERMIT)
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1.2rem; min-height: 3.5rem;">
                  <span style="background: rgba(255,40,0,0.15); border: 1px solid var(--nothing-red); color: var(--nothing-red); padding: 0.2rem 0.4rem; font-size: 0.65rem; font-family: var(--font-mono); font-weight: 700;">📄 ASTHAYI PERMIT</span>
                  <span style="background: rgba(255,255,255,0.08); border: 1px solid #555; color: #DDD; padding: 0.2rem 0.4rem; font-size: 0.65rem; font-family: var(--font-mono);">🏗️ PLINTH CHECK</span>
                  <span style="background: rgba(255,255,255,0.08); border: 1px solid #555; color: #DDD; padding: 0.2rem 0.4rem; font-size: 0.65rem; font-family: var(--font-mono);">🧱 FOUNDATION PASS</span>
                </div>
              </div>

              <!-- SVG STAMP BADGE -->
              <div style="height: 55px; margin-top: auto; display: flex; align-items: center; justify-content: center; position: relative;">
                <svg viewBox="0 0 160 50" style="width: 100%; height: 100%;">
                  <g id="stamp-stage-3" opacity="0">
                    <rect x="5" y="5" width="150" height="40" fill="none" stroke="#FF2800" stroke-width="2" />
                    <text x="80" y="24" fill="#FF2800" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">STAMP 03: TEMP PERMIT</text>
                    <text x="80" y="38" fill="#FFF" font-family="monospace" font-size="8" text-anchor="middle">ASTHAYI APPROVED</text>
                  </g>
                </svg>
              </div>
            </div>

            <!-- STAGE 04 -->
            <div class="pipeline-stage-card" data-stage="4" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem 1rem; cursor: pointer; transition: transform 0.2s ease; display: flex; flex-direction: column; justify-content: space-between; height: 100%; box-sizing: border-box;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem;">
                  <span style="color: #FFF; font-weight: 700;">STAGE 04</span>
                  <span class="doc-sample-trigger" style="position: relative; color: var(--nothing-red); cursor: pointer; text-decoration: underline;">
                    SAMPLE📄
                    <div class="doc-sample-popover" style="display: none; position: absolute; top: 120%; right: 0; background: #000; border: 1px solid var(--border-color); border-radius: 4px; padding: 0.8rem; width: 200px; z-index: 50; font-size: 0.7rem; color: #FFF;">
                      <strong>FINAL CERTIFICATE:</strong>
                      <ul style="margin: 0.4rem 0 0 1rem; padding: 0;">
                        <li>Nirmana Sampanna Seal</li>
                        <li>NEA Power Connection</li>
                        <li>KUKL Water Meter Pass</li>
                      </ul>
                    </div>
                  </span>
                </div>
                <div style="font-family: var(--font-mono); font-size: 0.95rem; font-weight: 700; color: #FFF; margin-bottom: 0.6rem; min-height: 2.8rem; display: flex; align-items: flex-start; line-height: 1.25; text-transform: uppercase;">
                  NIRMAṆA SAMPANNA (FINAL CERT)
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1.2rem; min-height: 3.5rem;">
                  <span style="background: rgba(255,255,255,0.12); border: 1px solid #888; color: #FFF; padding: 0.2rem 0.4rem; font-size: 0.65rem; font-family: var(--font-mono); font-weight: 700;">🏆 FINAL CERTIFICATE</span>
                  <span style="background: rgba(255,255,255,0.08); border: 1px solid #555; color: #DDD; padding: 0.2rem 0.4rem; font-size: 0.65rem; font-family: var(--font-mono);">⚡ NEA POWER LINE</span>
                  <span style="background: rgba(255,255,255,0.08); border: 1px solid #555; color: #DDD; padding: 0.2rem 0.4rem; font-size: 0.65rem; font-family: var(--font-mono);">🚰 KUKL WATER METER</span>
                </div>
              </div>

              <!-- SVG STAMP BADGE -->
              <div style="height: 55px; margin-top: auto; display: flex; align-items: center; justify-content: center; position: relative;">
                <svg viewBox="0 0 160 50" style="width: 100%; height: 100%;">
                  <g id="stamp-stage-4" opacity="0">
                    <rect x="5" y="5" width="150" height="40" fill="none" stroke="#FFF" stroke-width="2.5" />
                    <text x="80" y="24" fill="#FFF" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">STAMP 04: FINAL CERT</text>
                    <text x="80" y="38" fill="#FFF" font-family="monospace" font-size="8" text-anchor="middle">COMPLETION GRANTED</text>
                  </g>
                </svg>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  `;
}

export function initPermitHubEvents() {
  const roadSlider = document.getElementById('bylaws-road-slider');
  const roadValLbl = document.getElementById('bylaws-road-val-lbl');
  const roadPresetBtns = document.querySelectorAll('.bylaws-road-preset');
  const zoneBtns = document.querySelectorAll('.bylaws-zone-btn');
  const plotSlider = document.getElementById('bylaws-plot-slider');
  const plotValLbl = document.getElementById('bylaws-plot-val-lbl');

  const chkBagmati = document.getElementById('chk-corridor-bagmati');
  const chkDhobikhola = document.getElementById('chk-corridor-dhobikhola');
  const chkHightension = document.getElementById('chk-hightension');

  const outSetback = document.getElementById('bylaw-out-setback');
  const outCoverage = document.getElementById('bylaw-out-coverage');
  const outHeight = document.getElementById('bylaw-out-height');
  const outFootprint = document.getElementById('bylaw-out-footprint');
  const statusStamp = document.getElementById('bylaws-status-stamp');

  const svgRoadRect = document.getElementById('svg-road-rect');
  const svgRoadAxis = document.getElementById('svg-road-axis');
  const svgRoadWidthLbl = document.getElementById('svg-road-width-lbl');
  const svgSetbackRect = document.getElementById('svg-setback-rect');
  const svgSetbackLbl = document.getElementById('svg-setback-lbl');
  const svgSetbackLine = document.getElementById('svg-setback-line');
  const svgSetbackLineLbl = document.getElementById('svg-setback-line-lbl');
  const svgBldgRect = document.getElementById('svg-bldg-rect');
  const svgHeightCapLine = document.getElementById('svg-height-cap-line');
  const svgHeightCapTxt = document.getElementById('svg-height-cap-txt');

  const svgMetaSetback = document.getElementById('svg-meta-setback');
  const svgMetaCoverage = document.getElementById('svg-meta-coverage');

  let currentZone = 'residential';

  function calculateBylawsEngine() {
    if (!roadSlider || !plotSlider) return;

    const roadWidth = parseFloat(roadSlider.value);
    const plotAana = parseFloat(plotSlider.value);
    const totalPlotSqft = plotAana * AANA_TO_SQFT;

    if (roadValLbl) roadValLbl.textContent = `${roadWidth.toFixed(1)}M`;
    if (plotValLbl) plotValLbl.textContent = `${plotAana.toFixed(1)} AANA (${Math.round(totalPlotSqft).toLocaleString()} SQFT)`;

    // 1. Mandatory Setback Calculation
    let setbackMeters = 1.5;
    let setbackLabel = "1.5M (5.0 FT)";
    let isCorridorRestricted = false;

    if (chkBagmati && chkBagmati.checked) {
      setbackMeters = 20.0;
      setbackLabel = "20.0M (RIVER CORRIDOR)";
      isCorridorRestricted = true;
    } else if (chkDhobikhola && chkDhobikhola.checked) {
      setbackMeters = 9.0;
      setbackLabel = "9.0M (KHOLA CORRIDOR)";
      isCorridorRestricted = true;
    } else if (chkHightension && chkHightension.checked) {
      setbackMeters = 4.5;
      setbackLabel = "4.5M (POWER CLEARANCE)";
      isCorridorRestricted = true;
    }

    // 2. Maximum Ground Coverage Calculation
    let coveragePct = 70;
    if (currentZone === 'residential') {
      coveragePct = plotAana <= 4.0 ? 70 : 60;
    } else if (currentZone === 'commercial') {
      coveragePct = 65;
    } else if (currentZone === 'heritage') {
      coveragePct = 70;
    }

    const buildableFootprintSqft = totalPlotSqft * (coveragePct / 100);

    // 3. Permissible Height & Storeys Calculation
    let maxStoreysText = "2.5 STOREYS";
    let heightFeetText = "35.0 FT (10.67M)";
    let isNarrowRoad = false;
    let bldgTopY = 60;
    let bldgH = 130;

    if (roadWidth < 3.0) {
      maxStoreysText = "2.5 STOREYS (RESTRICTED)";
      heightFeetText = "30.0 FT (9.14M) MAX";
      isNarrowRoad = true;
      bldgTopY = 85;
      bldgH = 105;
    } else if (roadWidth >= 3.0 && roadWidth < 4.0) {
      maxStoreysText = "2.5 STOREYS";
      heightFeetText = "35.0 FT (10.67M) MAX";
      bldgTopY = 60;
      bldgH = 130;
    } else if (roadWidth >= 4.0 && roadWidth < 6.0) {
      maxStoreysText = "3.5 STOREYS";
      heightFeetText = "45.0 FT (13.71M) MAX";
      bldgTopY = 40;
      bldgH = 150;
    } else {
      maxStoreysText = "4.5+ HIGH-RISE FAR";
      heightFeetText = "60.0+ FT (18.28M+)";
      bldgTopY = 20;
      bldgH = 170;
    }

    // Update Output Cards
    if (outSetback) outSetback.textContent = setbackLabel;
    if (outCoverage) outCoverage.textContent = `${coveragePct}% COVERAGE`;
    if (outHeight) outHeight.textContent = maxStoreysText;
    if (outFootprint) outFootprint.textContent = `${Math.round(buildableFootprintSqft).toLocaleString()} SQ. FT.`;

    // Status Stamp Badge Update
    if (statusStamp) {
      if (isCorridorRestricted) {
        statusStamp.textContent = '[CORRIDOR SETBACK APPLIED // MANDATORY CLEARANCE BUFFER]';
        statusStamp.style.background = 'var(--nothing-red)';
        statusStamp.style.color = '#FFF';
      } else if (isNarrowRoad) {
        statusStamp.textContent = '[BYLAW RESTRICTION // NARROW ACCESS HEIGHT CAP APPLIED]';
        statusStamp.style.background = 'var(--bg-surface)';
        statusStamp.style.color = '#FFF';
      } else {
        statusStamp.textContent = '[BYLAWS COMPLIANT // APPROVED ENVELOPE]';
        statusStamp.style.background = 'var(--nothing-red)';
        statusStamp.style.color = '#FFF';
      }
    }

    // Dynamic SVG Graphic Envelope Updates
    const roadPixelW = Math.min(170, 40 + roadWidth * 15);
    const setbackPixelW = Math.min(100, Math.max(30, setbackMeters * 8));
    const bldgPixelX = 180 + setbackPixelW;
    const bldgPixelW = Math.max(100, 450 - bldgPixelX);

    if (window.gsap) {
      if (svgRoadRect) window.gsap.to(svgRoadRect, { attr: { width: roadPixelW, x: 180 - roadPixelW }, duration: 0.3 });
      if (svgRoadAxis) window.gsap.to(svgRoadAxis, { attr: { x1: 180 - roadPixelW / 2, x2: 180 - roadPixelW / 2 }, duration: 0.3 });
      if (svgRoadWidthLbl) {
        svgRoadWidthLbl.textContent = `ROAD = ${roadWidth.toFixed(1)}M`;
        window.gsap.to(svgRoadWidthLbl, { attr: { x: 180 - roadPixelW / 2 }, duration: 0.3 });
      }

      if (svgSetbackRect) window.gsap.to(svgSetbackRect, { attr: { width: setbackPixelW }, duration: 0.3 });
      if (svgSetbackLbl) {
        svgSetbackLbl.textContent = `${setbackMeters.toFixed(1)}M SETBACK`;
        window.gsap.to(svgSetbackLbl, { attr: { x: 180 + setbackPixelW / 2 }, duration: 0.3 });
      }
      if (svgSetbackLine) window.gsap.to(svgSetbackLine, { attr: { x1: bldgPixelX, x2: bldgPixelX }, duration: 0.3 });
      if (svgSetbackLineLbl) window.gsap.to(svgSetbackLineLbl, { attr: { x: bldgPixelX + 3 }, duration: 0.3 });

      if (svgBldgRect) window.gsap.to(svgBldgRect, { attr: { x: bldgPixelX, width: bldgPixelW, y: bldgTopY, height: bldgH }, duration: 0.3 });
      if (svgHeightCapLine) window.gsap.to(svgHeightCapLine, { attr: { y1: bldgTopY, y2: bldgTopY }, duration: 0.3 });
      if (svgHeightCapTxt) {
        svgHeightCapTxt.textContent = `BYLAW LIMIT: ${maxStoreysText} (${heightFeetText})`;
        window.gsap.to(svgHeightCapTxt, { attr: { y: bldgTopY - 8 }, duration: 0.3 });
      }
    } else {
      if (svgRoadRect) { svgRoadRect.setAttribute('width', roadPixelW); svgRoadRect.setAttribute('x', 180 - roadPixelW); }
      if (svgRoadAxis) { svgRoadAxis.setAttribute('x1', 180 - roadPixelW / 2); svgRoadAxis.setAttribute('x2', 180 - roadPixelW / 2); }
      if (svgRoadWidthLbl) { svgRoadWidthLbl.textContent = `ROAD = ${roadWidth.toFixed(1)}M`; svgRoadWidthLbl.setAttribute('x', 180 - roadPixelW / 2); }

      if (svgSetbackRect) svgSetbackRect.setAttribute('width', setbackPixelW);
      if (svgSetbackLbl) { svgSetbackLbl.textContent = `${setbackMeters.toFixed(1)}M SETBACK`; svgSetbackLbl.setAttribute('x', 180 + setbackPixelW / 2); }
      if (svgSetbackLine) { svgSetbackLine.setAttribute('x1', bldgPixelX); svgSetbackLine.setAttribute('x2', bldgPixelX); }
      if (svgSetbackLineLbl) svgSetbackLineLbl.setAttribute('x', bldgPixelX + 3);

      if (svgBldgRect) { svgBldgRect.setAttribute('x', bldgPixelX); svgBldgRect.setAttribute('width', bldgPixelW); svgBldgRect.setAttribute('y', bldgTopY); svgBldgRect.setAttribute('height', bldgH); }
      if (svgHeightCapLine) { svgHeightCapLine.setAttribute('y1', bldgTopY); svgHeightCapLine.setAttribute('y2', bldgTopY); }
      if (svgHeightCapTxt) { svgHeightCapTxt.textContent = `BYLAW LIMIT: ${maxStoreysText} (${heightFeetText})`; svgHeightCapTxt.setAttribute('y', bldgTopY - 8); }
    }

    if (svgMetaSetback) svgMetaSetback.textContent = `${setbackMeters.toFixed(1)}M (${(setbackMeters * 3.28084).toFixed(1)} FT) FROM PROPERTY LINE`;
    if (svgMetaCoverage) svgMetaCoverage.textContent = `${coveragePct}% MAX GROUND COVERAGE`;
  }

  // Event Listeners
  if (roadSlider) roadSlider.addEventListener('input', calculateBylawsEngine);
  if (plotSlider) plotSlider.addEventListener('input', calculateBylawsEngine);

  roadPresetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      roadPresetBtns.forEach(b => { b.classList.remove('active'); b.style.background = 'var(--bg-surface)'; b.style.color = '#FFF'; });
      btn.classList.add('active');
      btn.style.background = 'var(--nothing-red)';
      btn.style.color = '#FFF';
      const val = parseFloat(btn.getAttribute('data-width'));
      if (roadSlider) roadSlider.value = val;
      calculateBylawsEngine();
    });
  });

  zoneBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      zoneBtns.forEach(b => { b.classList.remove('active'); b.style.background = 'var(--bg-surface)'; b.style.color = '#FFF'; });
      btn.classList.add('active');
      btn.style.background = 'var(--nothing-red)';
      btn.style.color = '#FFF';
      currentZone = btn.getAttribute('data-zone');
      calculateBylawsEngine();
    });
  });

  if (chkBagmati) {
    chkBagmati.addEventListener('change', () => {
      if (chkBagmati.checked && chkDhobikhola) chkDhobikhola.checked = false;
      calculateBylawsEngine();
    });
  }
  if (chkDhobikhola) {
    chkDhobikhola.addEventListener('change', () => {
      if (chkDhobikhola.checked && chkBagmati) chkBagmati.checked = false;
      calculateBylawsEngine();
    });
  }
  if (chkHightension) chkHightension.addEventListener('change', calculateBylawsEngine);

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

  // Initial Engine Calculation
  calculateBylawsEngine();
}
