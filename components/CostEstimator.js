/**
 * CostEstimator Component - SCOPE Web App (Nothing Tech Inspired)
 * Kathmandu Valley Construction Cost Calculator with Guided 5-Step Carousel Wizard, Finishing Tier Visual Previews,
 * Dynamic Neobrutalist Architectural Land Plot Graphic SVG, Architectural Structural Elevation Graphic SVG,
 * Pure Visual SVG Material Assembly Cutaway & Swatch Matrix Graphic Diagram,
 * Dynamic SVG Municipal Permit & Geotechnical Soil Stamp Graphic Board,
 * and Cost Allocation Stacked Bar & Raw Material Quantity Counter Board
 */

const AANA_TO_SQFT = 342.25;
const GROUND_COVERAGE_RATIO = 0.70; // 70% municipality ground coverage ratio

export const FINISH_TIERS = {
  basic: { name: "BASIC", rate: 3800, label: "NPR 3,800/sq.ft", desc: "Local brick, standard tiles, PVC & local fittings", img: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=400&q=80" },
  standard: { name: "STANDARD", rate: 4800, label: "NPR 4,800/sq.ft", desc: "AAC/Red brick, quality porcelain, CP fittings, aluminum doors", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" },
  premium: { name: "PREMIUM", rate: 6800, label: "NPR 6,800/sq.ft", desc: "Italian marble, Kohler sanitary, teak wood, structural steel", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80" }
};

export function createCostEstimator() {
  return `
    <div id="estimate" class="tab-pane active-pane">
      <div class="scope-container">
        
        <!-- Header Banner -->
        <div class="section-title-wrap" style="margin-bottom: 2.5rem;">
          <div>
            <span class="section-tag">● KATHMANDU VALLEY // 5-STEP GUIDED CONSOLE</span>
            <h2 class="section-title" style="margin-top: 0.6rem;">
              CONSTRUCTION COST CALCULATOR
            </h2>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); font-weight: 700; letter-spacing: 1px;">
            [ 1 AANA = 342.25 SQ. FT. // 70% GROUND COVERAGE ]
          </div>
        </div>

        <!-- 5-STEP CAROUSEL WIZARD CONTAINER -->
        <div class="estimator-wizard-box" style="background: var(--bg-card); border: var(--border-thick); border-radius: var(--radius-card); padding: 2.5rem; position: relative;">
          
          <!-- Top Wizard Progress Bar -->
          <div style="margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; margin-bottom: 0.8rem;">
              <span id="wizard-step-badge" style="color: var(--nothing-red);">STEP 01 OF 05 // LAND AREA</span>
              <span id="wizard-percent-badge" style="color: var(--text-muted);">20% COMPLETE</span>
            </div>

            <!-- Dot Matrix Progress Bar -->
            <div style="width: 100%; height: 8px; background: var(--bg-surface); border-radius: 4px; overflow: hidden;">
              <div id="wizard-progress-fill" style="width: 20%; height: 100%; background: var(--nothing-red); transition: width 0.4s ease;"></div>
            </div>

            <!-- Step Dots Navigation Bar -->
            <div class="wizard-steps-nav" style="display: flex; justify-content: space-between; margin-top: 1.2rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
              <button class="wiz-step-btn active" data-step="1" style="background: none; border: none; cursor: pointer; color: #FFF; font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 0.4rem;">
                <span class="wiz-dot" style="width: 24px; height: 24px; border-radius: 50%; background: var(--nothing-red); color: #FFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 900;">1</span>
                <span>LAND AREA</span>
              </button>
              <button class="wiz-step-btn" data-step="2" style="background: none; border: none; cursor: pointer; color: #666; font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 0.4rem;">
                <span class="wiz-dot" style="width: 24px; height: 24px; border-radius: 50%; background: #222; color: #FFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 900;">2</span>
                <span>STOREYS</span>
              </button>
              <button class="wiz-step-btn" data-step="3" style="background: none; border: none; cursor: pointer; color: #666; font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 0.4rem;">
                <span class="wiz-dot" style="width: 24px; height: 24px; border-radius: 50%; background: #222; color: #FFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 900;">3</span>
                <span>FINISH TIER</span>
              </button>
              <button class="wiz-step-btn" data-step="4" style="background: none; border: none; cursor: pointer; color: #666; font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 0.4rem;">
                <span class="wiz-dot" style="width: 24px; height: 24px; border-radius: 50%; background: #222; color: #FFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 900;">4</span>
                <span>PERMITS</span>
              </button>
              <button class="wiz-step-btn" data-step="5" style="background: none; border: none; cursor: pointer; color: #666; font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 0.4rem;">
                <span class="wiz-dot" style="width: 24px; height: 24px; border-radius: 50%; background: #222; color: #FFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 900;">5</span>
                <span>BOQ SUMMARY</span>
              </button>
            </div>
          </div>

          <!-- CAROUSEL SLIDE VIEWPORT -->
          <div class="wizard-carousel-viewport" style="overflow: hidden; min-height: 440px; position: relative;">
            <div class="wizard-carousel-track" style="display: flex; transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1); width: 500%;">
              
              <!-- STEP 1: LAND AREA SLIDER & DYNAMIC ARCHITECTURAL LAND PLOT GRAPHIC -->
              <div class="wizard-slide" style="width: 20%; padding: 1.5rem; box-sizing: border-box; flex-shrink: 0;">
                <h3 style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: var(--nothing-red); text-transform: uppercase; margin-bottom: 0.8rem; letter-spacing: 1px;">
                  1. SELECT LAND AREA IN AANA
                </h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
                  Use the slider below to set your plot size in Kathmandu Aana units (1 Aana = 342.25 sq. ft.).
                </p>

                <div class="control-group" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-card); padding: 1.8rem; margin-bottom: 1.5rem;">
                  <div class="control-label" style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                    <span style="color: var(--text-muted); font-weight: 700; font-size: 1rem;">PLOT SIZE:</span>
                    <span id="ktm-aana-val" style="color: #FFF; font-weight: 700; font-size: 1.3rem; font-family: var(--font-mono);">4.0 AANA (1,369 SQ. FT.)</span>
                  </div>
                  <input type="range" id="ktm-aana-slider" class="brutal-slider" min="2" max="10" step="0.5" value="4" style="width: 100%; height: 12px; cursor: pointer; accent-color: var(--nothing-red);" />
                  <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.8rem; color: #888; margin-top: 0.8rem;">
                    <span>2.0 Aana (Min)</span>
                    <span>5.0 Aana</span>
                    <span>10.0 Aana (Max)</span>
                  </div>
                </div>

                <!-- DYNAMIC NEOBRUTALIST ARCHITECTURAL LAND PLOT GRAPHIC SVG -->
                <div class="land-plot-graphic-container" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-card); padding: 1.2rem; position: relative;">
                  <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
                    <span style="color: var(--nothing-red); font-weight: 700;">📐 INTERACTIVE LAND BOUNDARY & BUILDABLE FOOTPRINT</span>
                    <span style="background: var(--nothing-red); color: #FFF; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">VISUAL SCALE // 1 AANA = 342.25 SQ FT</span>
                  </div>

                  <div style="width: 100%; height: 210px; position: relative; background: #000; border: 1px dashed var(--border-color); border-radius: 6px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <svg id="plot-svg-canvas" viewBox="0 0 400 200" style="width: 100%; height: 100%;">
                      <defs>
                        <pattern id="hatch-pattern-nothing" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                          <line x1="0" y1="0" x2="0" y2="10" stroke="#FF2800" stroke-width="2" />
                        </pattern>
                      </defs>

                      <g stroke="#1A1A1E" stroke-width="1">
                        <line x1="0" y1="40" x2="400" y2="40" />
                        <line x1="0" y1="80" x2="400" y2="80" />
                        <line x1="0" y1="120" x2="400" y2="120" />
                        <line x1="0" y1="160" x2="400" y2="160" />
                        <line x1="80" y1="0" x2="80" y2="200" />
                        <line x1="160" y1="0" x2="160" y2="200" />
                        <line x1="240" y1="0" x2="240" y2="200" />
                        <line x1="320" y1="0" x2="320" y2="200" />
                      </g>

                      <rect id="svg-plot-rect" x="80" y="20" width="240" height="160" fill="none" stroke="#FFFFFF" stroke-width="3" />
                      <rect id="svg-setback-rect" x="96" y="32" width="208" height="136" fill="none" stroke="#FF2800" stroke-width="2" stroke-dasharray="5,4" />
                      <rect id="svg-build-rect" x="106" y="40" width="188" height="120" fill="url(#hatch-pattern-nothing)" fill-opacity="0.3" stroke="#FF2800" stroke-width="2" />
                      <text id="svg-plot-dim-w" x="200" y="14" fill="#FFFFFF" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">37.0 FT (WIDTH)</text>
                      <text id="svg-plot-dim-h" x="345" y="105" fill="#FFFFFF" font-family="monospace" font-size="11" font-weight="bold" text-anchor="start">37.0 FT (DEPTH)</text>
                      <text id="svg-build-footprint-txt" x="200" y="96" fill="#FFFFFF" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">BUILDABLE FOOTPRINT (70%)</text>
                      <text id="svg-plot-sqft-txt" x="200" y="116" fill="#FF2800" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">958 SQ. FT. GROUND COVERAGE</text>
                    </svg>
                  </div>

                  <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: #AAA; margin-top: 0.8rem; border-top: 1px dashed var(--border-color); padding-top: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div>PLOT AREA: <span id="plot-spec-total" style="color: #FFF; font-weight: 700;">1,369 SQ. FT.</span></div>
                    <div>SETBACK BUFFER: <span style="color: var(--nothing-red); font-weight: 700;">5.0 FT (1.5M)</span></div>
                    <div>MAX GROUND COVERAGE (70%): <span id="plot-spec-built" style="color: #FFF; font-weight: 700;">958.3 SQ. FT.</span></div>
                  </div>
                </div>

              </div>

              <!-- STEP 2: STOREYS SELECTOR & DYNAMIC ARCHITECTURAL ELEVATION GRAPHIC -->
              <div class="wizard-slide" style="width: 20%; padding: 1.5rem; box-sizing: border-box; flex-shrink: 0;">
                <h3 style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: #FFF; text-transform: uppercase; margin-bottom: 0.8rem; letter-spacing: 1px;">
                  2. NUMBER OF STOREYS
                </h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
                  Select the total storeys for the proposed building structure (70% municipal ground coverage applied).
                </p>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.2rem; margin-bottom: 1.5rem;">
                  <button class="storey-btn btn-brutal white" data-storey="1" style="padding: 1.5rem 1rem; flex-direction: column; gap: 0.5rem; align-items: center; text-align: center; border-radius: var(--radius-card);">
                    <span style="font-size: 2rem;">🏡</span>
                    <span style="font-weight: 700; font-size: 1.1rem;">1 STOREY</span>
                    <span style="font-size: 0.75rem; color: #888;">Single Floor Bungalow</span>
                  </button>
                  <button class="storey-btn btn-brutal cyan" data-storey="2" style="padding: 1.5rem 1rem; flex-direction: column; gap: 0.5rem; align-items: center; text-align: center; border-radius: var(--radius-card);">
                    <span style="font-size: 2rem;">🏠</span>
                    <span style="font-weight: 700; font-size: 1.1rem;">2 STOREYS</span>
                    <span style="font-size: 0.75rem; color: #888;">Double Storey Residence</span>
                  </button>
                  <button class="storey-btn btn-brutal yellow active" data-storey="2.5" style="padding: 1.5rem 1rem; flex-direction: column; gap: 0.5rem; align-items: center; text-align: center; border-radius: var(--radius-card);">
                    <span style="font-size: 2rem;">🏢</span>
                    <span style="font-weight: 700; font-size: 1.1rem;">2.5 STOREYS</span>
                    <span style="font-size: 0.75rem; color: var(--nothing-red);">Standard KTM Residence</span>
                  </button>
                  <button class="storey-btn btn-brutal pink" data-storey="3" style="padding: 1.5rem 1rem; flex-direction: column; gap: 0.5rem; align-items: center; text-align: center; border-radius: var(--radius-card);">
                    <span style="font-size: 2rem;">🏬</span>
                    <span style="font-weight: 700; font-size: 1.1rem;">3 STOREYS</span>
                    <span style="font-size: 0.75rem; color: #888;">Full 3-Storey Villa</span>
                  </button>
                </div>

                <!-- DYNAMIC NEOBRUTALIST ARCHITECTURAL ELEVATION GRAPHIC SVG -->
                <div class="elevation-graphic-container" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-card); padding: 1.2rem; position: relative;">
                  <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
                    <span style="color: var(--nothing-red); font-weight: 700;">🏛️ STRUCTURAL ELEVATION CROSS-SECTION</span>
                    <span style="background: var(--nothing-red); color: #FFF; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">STRUCTURAL CROSS-SECTION // ELEVATION SCALE</span>
                  </div>

                  <div style="width: 100%; height: 210px; position: relative; background: #000; border: 1px dashed var(--border-color); border-radius: 6px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <svg id="elevation-svg-canvas" viewBox="0 0 400 210" style="width: 100%; height: 100%;">
                      <line x1="20" y1="185" x2="380" y2="185" stroke="#FFF" stroke-width="3" />
                      <text x="25" y="198" fill="#888" font-family="monospace" font-size="9" font-weight="bold">GROUND DATUM ±0.00 M</text>
                      <text x="250" y="198" fill="#FF2800" font-family="monospace" font-size="9" font-weight="bold">PLINTH LEVEL +2'0"</text>

                      <g stroke="#FFF" stroke-width="1.5">
                        <line id="elev-dim-line" x1="45" y1="185" x2="45" y2="65" />
                        <line x1="40" y1="185" x2="50" y2="185" />
                        <line id="elev-dim-top-cap" x1="40" y1="65" x2="50" y2="65" />
                      </g>
                      <text id="elev-height-txt" x="40" y="125" fill="#FFF" font-family="monospace" font-size="10" font-weight="bold" text-anchor="end" transform="rotate(-90 40 125)">28.5 FT TOTAL HEIGHT</text>

                      <g id="floor-l1" opacity="1">
                        <rect x="75" y="140" width="160" height="45" fill="none" stroke="#FFF" stroke-width="2" />
                        <line x1="75" y1="140" x2="235" y2="140" stroke="#FFF" stroke-width="3" />
                        <rect x="80" y="140" width="12" height="45" fill="#FFF" />
                        <rect x="150" y="140" width="12" height="45" fill="#FFF" />
                        <rect x="218" y="140" width="12" height="45" fill="#FFF" />
                        <rect x="105" y="152" width="32" height="22" fill="none" stroke="#FF2800" stroke-width="1.5" />
                        <text x="245" y="165" fill="#FFF" font-family="monospace" font-size="10" font-weight="bold">L01: GROUND PLINTH (10.0 FT)</text>
                      </g>

                      <g id="floor-l2" opacity="1">
                        <rect x="75" y="95" width="160" height="45" fill="none" stroke="#FF2800" stroke-width="2" />
                        <line x1="75" y1="95" x2="235" y2="95" stroke="#FFF" stroke-width="3" />
                        <rect x="80" y="95" width="12" height="45" fill="#FF2800" />
                        <rect x="150" y="95" width="12" height="45" fill="#FF2800" />
                        <rect x="218" y="95" width="12" height="45" fill="#FF2800" />
                        <rect x="105" y="107" width="32" height="22" fill="none" stroke="#FFF" stroke-width="1.5" />
                        <rect x="175" y="107" width="32" height="22" fill="none" stroke="#FFF" stroke-width="1.5" />
                        <text x="245" y="120" fill="#FF2800" font-family="monospace" font-size="10" font-weight="bold">L02: UPPER RESIDENCE (10.0 FT)</text>
                      </g>

                      <g id="floor-l2-5" opacity="1">
                        <rect x="75" y="65" width="85" height="30" fill="none" stroke="#FFF" stroke-width="2" />
                        <line x1="75" y1="65" x2="160" y2="65" stroke="#FFF" stroke-width="2.5" />
                        <line x1="160" y1="85" x2="235" y2="85" stroke="#FF2800" stroke-width="2" stroke-dasharray="3,3" />
                        <rect x="80" y="65" width="10" height="30" fill="#FFF" />
                        <rect x="145" y="65" width="10" height="30" fill="#FFF" />
                        <text x="245" y="80" fill="#FFF" font-family="monospace" font-size="10" font-weight="bold">L0.5: TERRACE CABIN (8.5 FT)</text>
                      </g>

                      <g id="floor-l3" opacity="0">
                        <rect x="75" y="50" width="160" height="45" fill="none" stroke="#FF2800" stroke-width="2" />
                        <line x1="75" y1="50" x2="235" y2="50" stroke="#FFF" stroke-width="3" />
                        <rect x="80" y="50" width="12" height="45" fill="#FF2800" />
                        <rect x="150" y="50" width="12" height="45" fill="#FF2800" />
                        <rect x="218" y="50" width="12" height="45" fill="#FF2800" />
                        <text x="245" y="65" fill="#FF2800" font-family="monospace" font-size="10" font-weight="bold">L03: TOP VILLA FLOOR (10.0 FT)</text>
                      </g>
                    </svg>
                  </div>

                  <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: #AAA; margin-top: 0.8rem; border-top: 1px dashed var(--border-color); padding-top: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div>STRUCTURE: <span id="elev-spec-type" style="color: #FFF; font-weight: 700;">2.5 STOREYS (KTM STANDARD)</span></div>
                    <div>FRAME: <span style="color: var(--nothing-red); font-weight: 700;">RCC PILLAR & BEAM</span></div>
                    <div>HEIGHT: <span id="elev-spec-height" style="color: #FFF; font-weight: 700;">28.5 FT (8.68M)</span></div>
                  </div>
                </div>

              </div>

              <!-- STEP 3: FINISH QUALITY TIERS WITH PURE VECTOR SVG MATERIAL ASSEMBLY GRAPHIC -->
              <div class="wizard-slide" style="width: 20%; padding: 1.5rem; box-sizing: border-box; flex-shrink: 0;">
                <h3 style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: #FFF; text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 1px;">
                  3. FINISH QUALITY TIER
                </h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
                  Select material tier standard per sq. ft. Zero text clutter—pure architectural vector swatches below.
                </p>

                <div style="display: flex; flex-direction: column; gap: 1.2rem; margin-bottom: 1.5rem;">
                  <button class="tier-btn btn-brutal white" data-tier="basic" style="justify-content: space-between; width: 100%; text-align: left; padding: 1.2rem 1.4rem; gap: 1rem; align-items: center; border-radius: var(--radius-card);">
                    <div style="display: flex; align-items: center; gap: 1.2rem;">
                      <div style="width: 76px; height: 54px; border: 2px solid #FFF; border-radius: 4px; overflow: hidden; flex-shrink: 0; position: relative;">
                        <img src="${FINISH_TIERS.basic.img}" alt="Basic Kathmandu Finish" style="width: 100%; height: 100%; object-fit: cover;">
                        <span style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.85); color: #FFF; font-family: var(--font-mono); font-size: 0.55rem; text-align: center; font-weight: 900; padding: 1px 0;">BASIC</span>
                      </div>
                      <div>
                        <div style="font-weight: 700; font-size: 1.05rem;">🔨 BASIC TIER</div>
                        <div style="font-size: 0.8rem; color: #888; margin-top: 0.2rem;">Local brick, standard porcelain tiles, PVC & local fittings</div>
                      </div>
                    </div>
                    <span style="font-family: var(--font-mono); font-size: 1rem; font-weight: 700; color: #FFF; white-space: nowrap;">NPR 3,800 / SQ. FT.</span>
                  </button>

                  <button class="tier-btn btn-brutal yellow active" data-tier="standard" style="justify-content: space-between; width: 100%; text-align: left; padding: 1.2rem 1.4rem; gap: 1rem; align-items: center; border-radius: var(--radius-card);">
                    <div style="display: flex; align-items: center; gap: 1.2rem;">
                      <div style="width: 76px; height: 54px; border: 2px solid var(--nothing-red); border-radius: 4px; overflow: hidden; flex-shrink: 0; position: relative;">
                        <img src="${FINISH_TIERS.standard.img}" alt="Standard Kathmandu Finish" style="width: 100%; height: 100%; object-fit: cover;">
                        <span style="position: absolute; bottom: 0; left: 0; right: 0; background: var(--nothing-red); color: #FFF; font-family: var(--font-mono); font-size: 0.55rem; text-align: center; font-weight: 900; padding: 1px 0;">RECOMMENDED</span>
                      </div>
                      <div>
                        <div style="font-weight: 700; font-size: 1.05rem; color: var(--nothing-red);">🏢 STANDARD TIER (RECOMMENDED)</div>
                        <div style="font-size: 0.8rem; color: #AAA; margin-top: 0.2rem;">AAC/Red brick, quality tiles, CP fittings, aluminum doors & windows</div>
                      </div>
                    </div>
                    <span style="font-family: var(--font-mono); font-size: 1rem; font-weight: 700; color: var(--nothing-red); white-space: nowrap;">NPR 4,800 / SQ. FT.</span>
                  </button>

                  <button class="tier-btn btn-brutal pink" data-tier="premium" style="justify-content: space-between; width: 100%; text-align: left; padding: 1.2rem 1.4rem; gap: 1rem; align-items: center; border-radius: var(--radius-card);">
                    <div style="display: flex; align-items: center; gap: 1.2rem;">
                      <div style="width: 76px; height: 54px; border: 2px solid #FFF; border-radius: 4px; overflow: hidden; flex-shrink: 0; position: relative;">
                        <img src="${FINISH_TIERS.premium.img}" alt="Premium Luxury Finish" style="width: 100%; height: 100%; object-fit: cover;">
                        <span style="position: absolute; bottom: 0; left: 0; right: 0; background: #FFF; color: #000; font-family: var(--font-mono); font-size: 0.55rem; text-align: center; font-weight: 900; padding: 1px 0;">LUXURY</span>
                      </div>
                      <div>
                        <div style="font-weight: 700; font-size: 1.05rem;">✨ PREMIUM LUXURY TIER</div>
                        <div style="font-size: 0.8rem; color: #888; margin-top: 0.2rem;">Italian marble, Kohler sanitary, teak wood doors, structural steel retrofitting</div>
                      </div>
                    </div>
                    <span style="font-family: var(--font-mono); font-size: 1rem; font-weight: 700; color: #FFF; white-space: nowrap;">NPR 6,800 / SQ. FT.</span>
                  </button>
                </div>

                <!-- DYNAMIC PURE VECTOR SVG MATERIAL ASSEMBLY CUTAWAY & SWATCH GRAPHIC CONTAINER -->
                <div id="material-spec-container" class="material-spec-container" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-card); padding: 1.2rem; position: relative; transition: border-color 0.3s ease;">
                  <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
                    <span id="mat-spec-tier-badge" style="color: var(--nothing-red); font-weight: 700;">📐 ARCHITECTURAL MATERIAL ASSEMBLY & VECTOR SWATCH DIAGRAM</span>
                    <span style="background: var(--nothing-red); color: #FFF; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">VECTOR ASSEMBLY // ZERO TEXT MATRIX</span>
                  </div>

                  <div style="width: 100%; height: 230px; position: relative; background: #000; border: 1px dashed var(--border-color); border-radius: 6px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <svg id="mat-assembly-svg" viewBox="0 0 500 230" style="width: 100%; height: 100%;">
                      <defs>
                        <pattern id="pat-basic-tile-n" width="16" height="16" patternUnits="userSpaceOnUse">
                          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#555" stroke-width="1" />
                        </pattern>
                        <pattern id="pat-std-tile-n" width="28" height="28" patternUnits="userSpaceOnUse">
                          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#FF2800" stroke-width="1.2" />
                        </pattern>
                        <pattern id="pat-hpl-cladding-n" width="12" height="20" patternUnits="userSpaceOnUse">
                          <rect width="12" height="20" fill="none" stroke="#FFFFFF" stroke-width="1" />
                          <line x1="0" y1="10" x2="12" y2="10" stroke="#FFFFFF" stroke-width="1" />
                        </pattern>
                      </defs>

                      <g id="cutaway-group">
                        <rect x="20" y="155" width="200" height="35" fill="#18181A" stroke="#FFF" stroke-width="2" />
                        <text x="25" y="177" fill="#666" font-family="monospace" font-size="9" font-weight="bold">RCC STRUCTURAL SLAB 150MM</text>
                        <rect id="cutaway-floor-layer" x="20" y="140" width="200" height="15" fill="url(#pat-std-tile-n)" stroke="#FF2800" stroke-width="1.5" />
                        <rect x="170" y="25" width="50" height="115" fill="#111" stroke="#FFF" stroke-width="2" />
                        <rect id="cutaway-wall-layer" x="215" y="25" width="12" height="115" fill="#FF2800" opacity="0.8" />
                        <rect id="cutaway-window-frame" x="125" y="50" width="45" height="60" fill="none" stroke="#FFF" stroke-width="2" />
                        <line id="cutaway-glass-1" x1="140" y1="50" x2="140" y2="110" stroke="#FFF" stroke-width="2" />
                        <line id="cutaway-glass-2" x1="155" y1="50" x2="155" y2="110" stroke="#FFF" stroke-width="1.5" stroke-dasharray="2,2" />
                        <path d="M 70 130 L 100 130 L 110 145" fill="none" stroke="#FF2800" stroke-width="1.5" />
                        <text id="lbl-callout-floor" x="30" y="126" fill="#FF2800" font-family="monospace" font-size="9" font-weight="bold">---> FLOOR FINISH</text>
                        <path d="M 100 75 L 125 75" fill="none" stroke="#FFF" stroke-width="1.5" />
                        <text id="lbl-callout-win" x="35" y="78" fill="#FFF" font-family="monospace" font-size="9" font-weight="bold">---> PROFILE</text>
                      </g>

                      <line x1="245" y1="15" x2="245" y2="215" stroke="#333" stroke-width="1.5" stroke-dasharray="4,4" />

                      <g id="swatch-matrix-group">
                        <g id="swatch-tile-1" transform="translate(260, 20)">
                          <rect x="0" y="0" width="100" height="90" fill="#000" stroke="#FFF" stroke-width="1.5" />
                          <rect id="swatch-bg-1" x="5" y="5" width="90" height="60" fill="url(#pat-std-tile-n)" />
                          <rect x="0" y="65" width="100" height="25" fill="#18181A" stroke="#FFF" stroke-width="1" />
                          <text id="swatch-lbl-1" x="50" y="81" fill="#FF2800" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">VITRIFIED // 600x600</text>
                          <text x="5" y="15" fill="#FFF" font-family="monospace" font-size="8" font-weight="bold">[01] FLOOR</text>
                        </g>

                        <g id="swatch-tile-2" transform="translate(375, 20)">
                          <rect x="0" y="0" width="100" height="90" fill="#000" stroke="#FFF" stroke-width="1.5" />
                          <g id="swatch-joinery-graphic" stroke="#FF2800" stroke-width="1.5" fill="none">
                            <rect x="15" y="12" width="70" height="46" />
                            <line x1="50" y1="12" x2="50" y2="58" />
                            <circle cx="43" cy="35" r="2" fill="#FF2800" />
                          </g>
                          <rect x="0" y="65" width="100" height="25" fill="#18181A" stroke="#FFF" stroke-width="1" />
                          <text id="swatch-lbl-2" x="50" y="81" fill="#FF2800" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">UPVC // SAL WOOD</text>
                          <text x="5" y="15" fill="#FFF" font-family="monospace" font-size="8" font-weight="bold">[02] JOINERY</text>
                        </g>

                        <g id="swatch-tile-3" transform="translate(260, 120)">
                          <rect x="0" y="0" width="100" height="90" fill="#000" stroke="#FFF" stroke-width="1.5" />
                          <g id="swatch-sanitary-graphic" stroke="#FFF" stroke-width="1.5" fill="none">
                            <path d="M 25 20 C 25 45, 75 45, 75 20 Z" />
                            <rect x="35" y="15" width="30" height="8" />
                            <circle cx="50" cy="32" r="3" fill="#FFF" />
                          </g>
                          <rect x="0" y="65" width="100" height="25" fill="#18181A" stroke="#FFF" stroke-width="1" />
                          <text id="swatch-lbl-3" x="50" y="81" fill="#FFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">CONCEALED // CP</text>
                          <text x="5" y="15" fill="#FF2800" font-family="monospace" font-size="8" font-weight="bold">[03] SANITARY</text>
                        </g>

                        <g id="swatch-tile-4" transform="translate(375, 120)">
                          <rect x="0" y="0" width="100" height="90" fill="#000" stroke="#FFF" stroke-width="1.5" />
                          <rect id="swatch-bg-4" x="5" y="5" width="90" height="60" fill="none" stroke="#FF2800" stroke-width="1" stroke-dasharray="3,3" />
                          <rect x="0" y="65" width="100" height="25" fill="#18181A" stroke="#FFF" stroke-width="1" />
                          <text id="swatch-lbl-4" x="50" y="81" fill="#FF2800" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">APEX // ACRYLIC</text>
                          <text x="5" y="15" fill="#FFF" font-family="monospace" font-size="8" font-weight="bold">[04] FACADE</text>
                        </g>
                      </g>
                    </svg>
                  </div>

                  <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: #AAA; margin-top: 0.8rem; border-top: 1px dashed var(--border-color); padding-top: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div>ASSEMBLY TIER: <span id="mat-spec-grade" style="color: #FFF; font-weight: 700;">STANDARD A-GRADE RESIDENTIAL</span></div>
                    <div>VECTOR CUTAWAY: <span style="color: var(--nothing-red); font-weight: 700;">LIVE STRUCTURAL JUNCTION</span></div>
                    <div>RATE: <span id="mat-spec-rate" style="color: #FFF; font-weight: 700;">NPR 4,800 / SQ. FT.</span></div>
                  </div>
                </div>

              </div>

              <!-- STEP 4: MUNICIPAL PERMIT & GEOTECHNICAL SOIL STAMP GRAPHIC BOARD -->
              <div class="wizard-slide" style="width: 20%; padding: 1.5rem; box-sizing: border-box; flex-shrink: 0;">
                <h3 style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: #FFF; text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 1px;">
                  4. MUNICIPALITY PERMITS & ADD-ONS
                </h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
                  Select official government fees and mandatory structural engineering tests required for building permit approval.
                </p>

                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-card); padding: 1.5rem; display: flex; flex-direction: column; gap: 1.2rem; margin-bottom: 1.5rem;">
                  <label style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: var(--font-mono); font-size: 0.95rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem;">
                    <div>
                      <span style="font-weight: 700; color: #FFF;">📜 Naksha Pass / Municipality Approval Fee</span>
                      <div style="font-size: 0.8rem; color: #888; margin-top: 0.2rem;">KMC / Lalitpur municipal blueprint registration fee</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.8rem;">
                      <span style="color: var(--nothing-red); font-weight: 700; font-size: 1rem;">+NPR 60,000</span>
                      <input type="checkbox" id="chk-naksha" checked style="width: 20px; height: 20px; accent-color: var(--nothing-red);" />
                    </div>
                  </label>

                  <label style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: var(--font-mono); font-size: 0.95rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem;">
                    <div>
                      <span style="font-weight: 700; color: #FFF;">🧪 Geotechnical Soil Test & Structural Report</span>
                      <div style="font-size: 0.8rem; color: #888; margin-top: 0.2rem;">Mandatory borehole bearing test (NBC 105:2020 standard)</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.8rem;">
                      <span style="color: #FFF; font-weight: 700; font-size: 1rem;">+NPR 45,000</span>
                      <input type="checkbox" id="chk-soil" checked style="width: 20px; height: 20px; accent-color: var(--nothing-red);" />
                    </div>
                  </label>
                </div>

                <!-- DYNAMIC NEOBRUTALIST MUNICIPAL PERMIT & VERIFICATION STAMP GRAPHIC SVG BOARD -->
                <div id="permit-stamp-container" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-card); padding: 1.2rem; position: relative;">
                  <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
                    <span style="color: var(--nothing-red); font-weight: 700;">📜 DIGITAL PERMIT BLUEPRINT & APPROVAL SEAL BOARD</span>
                    <span style="background: var(--nothing-red); color: #FFF; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">MUNICIPAL CLEARANCE MATRIX // KATHMANDU METRO REGULATION</span>
                  </div>

                  <div style="width: 100%; height: 230px; position: relative; background: #000; border: 1px dashed var(--border-color); border-radius: 6px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <svg id="permit-stamp-svg" viewBox="0 0 500 230" style="width: 100%; height: 100%;">
                      <defs>
                        <pattern id="excluded-hatch-n" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                          <line x1="0" y1="0" x2="0" y2="10" stroke="#444" stroke-width="1.5" />
                        </pattern>
                        <pattern id="soil-bedrock-pattern-n" width="12" height="12" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1.5" fill="#888" />
                          <circle cx="8" cy="8" r="1" fill="#555" />
                        </pattern>
                      </defs>

                      <g id="state-excluded" opacity="0">
                        <rect x="20" y="20" width="460" height="190" fill="url(#excluded-hatch-n)" fill-opacity="0.3" stroke="#444" stroke-width="1.5" stroke-dasharray="4,4" />
                        <rect x="60" y="85" width="380" height="50" fill="#111" stroke="#FFF" stroke-width="2" />
                        <text x="250" y="115" fill="#FFF" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">PERMIT & SOIL FEES EXCLUDED - CALCULATING BASIC STRUCTURE ONLY</text>
                      </g>

                      <g id="state-included" opacity="1">
                        <!-- LEFT BOARD: Mini CAD Blueprint & Rubber Stamp -->
                        <g id="group-naksha-stamp" opacity="1">
                          <rect x="20" y="20" width="220" height="190" fill="#0A0A0F" stroke="#FFF" stroke-width="1.5" />
                          <text x="30" y="38" fill="#FFF" font-family="monospace" font-size="9" font-weight="bold">[CAD BLUEPRINT TRACE]</text>

                          <g stroke="#FFF" stroke-width="1" fill="none" opacity="0.6">
                            <rect x="35" y="48" width="100" height="70" />
                            <line x1="35" y1="83" x2="135" y2="83" />
                            <line x1="85" y1="48" x2="85" y2="118" />
                            <circle cx="160" cy="70" r="15" />
                          </g>

                          <g transform="translate(30, 130)">
                            <text x="0" y="0" fill="#888" font-family="monospace" font-size="8" font-weight="bold">APPROVAL PIPELINE:</text>
                            
                            <rect id="led-stage-1" x="0" y="8" width="55" height="16" fill="#FF2800" stroke="#FFF" stroke-width="1" />
                            <text x="27" y="19" fill="#FFF" font-family="monospace" font-size="7" font-weight="bold" text-anchor="middle">WARD</text>

                            <rect id="led-stage-2" x="60" y="8" width="55" height="16" fill="#FF2800" stroke="#FFF" stroke-width="1" />
                            <text x="87" y="19" fill="#FFF" font-family="monospace" font-size="7" font-weight="bold" text-anchor="middle">REGISTRATION</text>

                            <rect id="led-stage-3" x="120" y="8" width="55" height="16" fill="#FF2800" stroke="#FFF" stroke-width="1" />
                            <text x="147" y="19" fill="#FFF" font-family="monospace" font-size="7" font-weight="bold" text-anchor="middle">IJAJAT</text>
                          </g>

                          <g transform="translate(30, 172)">
                            <text x="0" y="0" fill="#AAA" font-family="monospace" font-size="8" font-weight="bold">FEE ALLOCATION (NPR 60K):</text>
                            <rect x="0" y="6" width="40" height="10" fill="#FFF" />
                            <rect x="40" y="6" width="100" height="10" fill="#FF2800" />
                            <rect x="140" y="6" width="60" height="10" fill="#888" />
                          </g>

                          <g transform="translate(45, 65) rotate(-8)">
                            <rect x="0" y="0" width="170" height="32" fill="none" stroke="#FF2800" stroke-width="2.5" rx="3" />
                            <text x="85" y="14" fill="#FF2800" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">KMC MUNICIPAL PERMIT</text>
                            <text x="85" y="24" fill="#FF2800" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">APPROVED // NPR 60,000</text>
                          </g>
                        </g>

                        <!-- RIGHT BOARD: Geotechnical Soil Core Sample -->
                        <g id="group-soil-stamp" opacity="1">
                          <rect x="260" y="20" width="220" height="190" fill="#0A0A0F" stroke="#FFF" stroke-width="1.5" />
                          <text x="270" y="38" fill="#FFF" font-family="monospace" font-size="9" font-weight="bold">[GEOTECHNICAL SOIL CORE]</text>

                          <g transform="translate(270, 48)">
                            <rect x="0" y="0" width="100" height="20" fill="#222" stroke="#444" stroke-width="1" />
                            <text x="5" y="13" fill="#AAA" font-family="monospace" font-size="8">TOPSOIL 1.0M</text>

                            <rect x="0" y="20" width="100" height="25" fill="#333" stroke="#444" stroke-width="1" />
                            <text x="5" y="35" fill="#FFF" font-family="monospace" font-size="8">CLAY / SILT 2.5M</text>

                            <rect x="0" y="45" width="100" height="30" fill="url(#soil-bedrock-pattern-n)" stroke="#444" stroke-width="1" />
                            <text x="5" y="62" fill="#FF2800" font-family="monospace" font-size="8">HARD STRATA 4.0M</text>

                            <rect x="115" y="10" width="80" height="65" fill="none" stroke="#FFF" stroke-width="1.5" />
                            <path d="M 135 10 L 135 50 L 120 65 L 190 65 L 175 50 L 175 10 Z" fill="#FF2800" fill-opacity="0.3" stroke="#FF2800" stroke-width="1.5" />
                            <text x="155" y="35" fill="#FFF" font-family="monospace" font-size="8" text-anchor="middle">RCC FOOTING</text>
                          </g>

                          <g transform="translate(275, 140)">
                            <rect x="0" y="0" width="190" height="32" fill="none" stroke="#FFF" stroke-width="2" rx="3" />
                            <text x="95" y="14" fill="#FFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">SOIL BEARING CAPACITY</text>
                            <text x="95" y="24" fill="#FFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">VERIFIED // NPR 45,000</text>
                          </g>

                          <text x="270" y="196" fill="#888" font-family="monospace" font-size="8" font-weight="bold">BEARING CAPACITY: 150 KN/M²</text>
                        </g>
                      </g>
                    </svg>
                  </div>

                  <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: #AAA; margin-top: 0.8rem; border-top: 1px dashed var(--border-color); padding-top: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div>ADD-ONS STATUS: <span id="permit-spec-status" style="color: var(--nothing-red); font-weight: 700;">BOTH PERMITS INCLUDED (+NPR 105,000)</span></div>
                    <div>VALIDATION: <span style="color: #FFF; font-weight: 700;">NEC REGISTERED STAMP</span></div>
                    <div>LEGAL CODE: <span style="color: var(--nothing-red); font-weight: 700;">NBC 105:2020</span></div>
                  </div>
                </div>

              </div>

              <!-- STEP 5: FINAL BOQ SUMMARY RECEIPT & DYNAMIC COST DISTRIBUTION / RAW MATERIAL BOARD -->
              <div class="wizard-slide" style="width: 20%; padding: 1.5rem; box-sizing: border-box; flex-shrink: 0;">
                <h3 style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: var(--nothing-red); text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 1px;">
                  5. ESTIMATED BOQ COST BREAKDOWN
                </h3>
                
                <div id="cost-summary-card" class="receipt-card" style="background: var(--bg-surface); border: 1px solid var(--nothing-red); border-radius: var(--radius-card); padding: 1.8rem; margin-bottom: 1.8rem;">
                  <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1.2rem;">
                    <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--nothing-red); font-weight: 700;">
                      KATHMANDU CONSTRUCTION BOQ SUMMARY
                    </div>
                    <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #888;">
                      [ VER. 2026.1 ]
                    </div>
                  </div>

                  <div style="margin-bottom: 1.5rem;">
                    <div style="font-family: var(--font-mono); font-size: 0.85rem; color: #AAA;">ESTIMATED TOTAL BUDGET:</div>
                    <div id="summary-total-price" style="font-family: var(--font-mono); font-size: clamp(2.8rem, 5vw, 3.8rem); font-weight: 700; color: #FFF; line-height: 1; margin: 0.2rem 0;">
                      NPR 1.15 Crore
                    </div>
                    <div id="summary-price-exact" style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--nothing-red); font-weight: 700;">
                      Exact: NPR 11,540,650
                    </div>
                  </div>

                  <div style="font-family: var(--font-mono); font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.6rem; border-top: 1px dashed var(--border-color); padding-top: 1rem; margin-bottom: 1.5rem;">
                    <div style="display: flex; justify-content: space-between;">
                      <span style="color: #888;">Plot Area:</span>
                      <span id="sum-plot-area" style="color: #FFF; font-weight: 700;">4.0 Aana (1,369 sq. ft.)</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                      <span style="color: #888;">Built-up Area (70%):</span>
                      <span id="sum-built-area" style="color: #FFF; font-weight: 700;">2,395.75 sq. ft. (2.5 Storeys)</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                      <span style="color: #888;">Rate per sq. ft.:</span>
                      <span id="sum-rate-sqft" style="color: var(--nothing-red); font-weight: 700;">NPR 4,800 / sq. ft. (Standard)</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                      <span style="color: #888;">Structural Construction:</span>
                      <span id="sum-struct-cost" style="color: #FFF; font-weight: 700;">NPR 11,499,600</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                      <span style="color: #888;">Permits & Soil Test:</span>
                      <span id="sum-permit-cost" style="color: var(--nothing-red); font-weight: 700;">NPR 105,000</span>
                    </div>
                  </div>

                  <button id="btn-print-boq" class="btn-brutal green" style="width: 100%; justify-content: center; font-size: 1rem; padding: 0.9rem; border-radius: 6px;">
                    🖨️ PRINT OFFICIAL BOQ RECEIPT
                  </button>
                </div>

                <!-- DYNAMIC NEOBRUTALIST COST DISTRIBUTION BAR & RAW MATERIAL QUANTITY GRAPHIC SVG -->
                <div id="material-quantity-container" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-card); padding: 1.5rem; position: relative;">
                  <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
                    <span style="color: var(--nothing-red); font-weight: 700;">📊 COST BREAKDOWN ALLOCATION & RAW MATERIAL ESTIMATOR</span>
                    <span style="background: var(--nothing-red); color: #FFF; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">NBC 105:2020 MATERIAL MATRIX</span>
                  </div>

                  <!-- MODULE A: DYNAMIC COST ALLOCATION STACKED BAR -->
                  <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem; margin-bottom: 1.5rem;">
                    <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #FFF; font-weight: 700; margin-bottom: 0.8rem;">
                      MODULE A // BUDGET ALLOCATION PERCENTAGES:
                    </div>

                    <div style="width: 100%; height: 24px; display: flex; border: 1px solid var(--border-color); border-radius: 4px; overflow: hidden; margin-bottom: 0.8rem;">
                      <div id="bar-civil" style="width: 40%; background: #FFF; transition: width 0.4s ease;" title="Civil Structure & RCC (40%)"></div>
                      <div id="bar-finish" style="width: 35%; background: var(--nothing-red); transition: width 0.4s ease;" title="Finishing & Joinery (35%)"></div>
                      <div id="bar-mep" style="width: 15%; background: #888; transition: width 0.4s ease;" title="MEP / Plumbing & Electrical (15%)"></div>
                      <div id="bar-labor" style="width: 10%; background: #444; transition: width 0.4s ease;" title="Labor & Supervision (10%)"></div>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.8rem; font-family: var(--font-mono); font-size: 0.75rem;">
                      <div>
                        <span style="color: #FFF; font-weight: 700;">■ CIVIL & RCC (40%)</span>
                        <div id="cost-val-civil" style="color: #FFF; font-weight: 700;">NPR 46.0 Lakhs</div>
                      </div>
                      <div>
                        <span style="color: var(--nothing-red); font-weight: 700;">■ FINISHING (35%)</span>
                        <div id="cost-val-finish" style="color: #FFF; font-weight: 700;">NPR 40.2 Lakhs</div>
                      </div>
                      <div>
                        <span style="color: #888; font-weight: 700;">■ MEP SERVICES (15%)</span>
                        <div id="cost-val-mep" style="color: #FFF; font-weight: 700;">NPR 17.3 Lakhs</div>
                      </div>
                      <div>
                        <span style="color: #444; font-weight: 700;">■ LABOR (10%)</span>
                        <div id="cost-val-labor" style="color: #FFF; font-weight: 700;">NPR 11.5 Lakhs</div>
                      </div>
                    </div>
                  </div>

                  <!-- MODULE B: RAW MATERIAL QUANTITY COUNTER GRID -->
                  <div>
                    <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #FFF; font-weight: 700; margin-bottom: 0.8rem;">
                      MODULE B // ESTIMATED RAW MATERIAL QUANTITY MATRIX:
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem;">
                      
                      <!-- Cement Bags -->
                      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem; position: relative;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                          <span style="font-size: 1.5rem;">🧱</span>
                          <span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--nothing-red); font-weight: 700;">EST. MATERIAL</span>
                        </div>
                        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">CEMENT BAGS</div>
                        <div id="mat-cnt-cement" style="font-family: var(--font-mono); font-size: 1.3rem; font-weight: 700; color: #FFF; margin: 0.2rem 0;">~840 BAGS</div>
                        <div style="font-family: var(--font-mono); font-size: 0.65rem; color: #888;">OPC 43/53 GRADE</div>
                      </div>

                      <!-- Steel Rebar -->
                      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem; position: relative;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                          <span style="font-size: 1.5rem;">⛓️</span>
                          <span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--nothing-red); font-weight: 700;">EST. MATERIAL</span>
                        </div>
                        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">STEEL REBAR</div>
                        <div id="mat-cnt-steel" style="font-family: var(--font-mono); font-size: 1.3rem; font-weight: 700; color: #FFF; margin: 0.2rem 0;">~8.4 TONS</div>
                        <div style="font-family: var(--font-mono); font-size: 0.65rem; color: #888;">TMT FE500D GRADE</div>
                      </div>

                      <!-- Bricks -->
                      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem; position: relative;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                          <span style="font-size: 1.5rem;">🧱</span>
                          <span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--nothing-red); font-weight: 700;">EST. MATERIAL</span>
                        </div>
                        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">RED BRICKS</div>
                        <div id="mat-cnt-bricks" style="font-family: var(--font-mono); font-size: 1.3rem; font-weight: 700; color: #FFF; margin: 0.2rem 0;">~34,700 PCS</div>
                        <div style="font-family: var(--font-mono); font-size: 0.65rem; color: #888;">MACHINE-PRESSED</div>
                      </div>

                      <!-- Sand & Aggregate -->
                      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem; position: relative;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                          <span style="font-size: 1.5rem;">🚛</span>
                          <span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--nothing-red); font-weight: 700;">EST. MATERIAL</span>
                        </div>
                        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">SAND & AGGREGATE</div>
                        <div id="mat-cnt-sand" style="font-family: var(--font-mono); font-size: 1.3rem; font-weight: 700; color: #FFF; margin: 0.2rem 0;">~43 TRIPS</div>
                        <div style="font-family: var(--font-mono); font-size: 0.65rem; color: #888;">RIVER SAND & CRUSHED</div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <!-- Bottom Control Bar (Prev / Next Buttons) -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <button id="wizard-prev-btn" class="btn-brutal white" style="font-size: 0.95rem; padding: 0.8rem 1.6rem; visibility: hidden; border-radius: var(--radius-pill);">
              ⬅ PREVIOUS STEP
            </button>

            <div style="font-family: var(--font-mono); font-size: 0.85rem; color: #888;">
              NAVIGATE STEPS OR TAP NUMBERS ABOVE
            </div>

            <button id="wizard-next-btn" class="btn-brutal yellow" style="font-size: 0.95rem; padding: 0.8rem 1.6rem; border-radius: var(--radius-pill);">
              NEXT STEP ➔
            </button>
          </div>

        </div>

      </div>
    </div>
  `;
}

export function initCostEstimatorEvents() {
  const slider = document.getElementById('ktm-aana-slider');
  const aanaValDisplay = document.getElementById('ktm-aana-val');
  const storeyBtns = document.querySelectorAll('.storey-btn');
  const tierBtns = document.querySelectorAll('.tier-btn');
  const chkNaksha = document.getElementById('chk-naksha');
  const chkSoil = document.getElementById('chk-soil');

  // Summary Elements
  const sumTotal = document.getElementById('summary-total-price');
  const sumExact = document.getElementById('summary-price-exact');
  const sumPlot = document.getElementById('sum-plot-area');
  const sumBuilt = document.getElementById('sum-built-area');
  const sumRate = document.getElementById('sum-rate-sqft');
  const sumStruct = document.getElementById('sum-struct-cost');
  const sumPermit = document.getElementById('sum-permit-cost');
  const printBtn = document.getElementById('btn-print-boq');

  // Carousel Wizard Elements
  const track = document.querySelector('.wizard-carousel-track');
  const stepBadge = document.getElementById('wizard-step-badge');
  const percentBadge = document.getElementById('wizard-percent-badge');
  const progressFill = document.getElementById('wizard-progress-fill');
  const prevBtn = document.getElementById('wizard-prev-btn');
  const nextBtn = document.getElementById('wizard-next-btn');
  const stepNavBtns = document.querySelectorAll('.wiz-step-btn');

  let activeStorey = 2.5;
  let activeTierKey = 'standard';
  let currentStep = 1;
  const totalSteps = 5;

  const stepNames = [
    "LAND AREA",
    "STOREYS",
    "FINISH TIER",
    "PERMITS",
    "BOQ SUMMARY"
  ];

  function updateMaterialQuantityBoard(totalCost, builtUpSqft) {
    const costCivil = document.getElementById('cost-val-civil');
    const costFinish = document.getElementById('cost-val-finish');
    const costMep = document.getElementById('cost-val-mep');
    const costLabor = document.getElementById('cost-val-labor');

    const cntCement = document.getElementById('mat-cnt-cement');
    const cntSteel = document.getElementById('mat-cnt-steel');
    const cntBricks = document.getElementById('mat-cnt-bricks');
    const cntSand = document.getElementById('mat-cnt-sand');

    const civilVal = totalCost * 0.40;
    const finishVal = totalCost * 0.35;
    const mepVal = totalCost * 0.15;
    const laborVal = totalCost * 0.10;

    function fmtLakhs(n) {
      const lakhs = n / 100000;
      return `NPR ${lakhs.toFixed(1)} Lakhs`;
    }

    if (costCivil) costCivil.textContent = fmtLakhs(civilVal);
    if (costFinish) costFinish.textContent = fmtLakhs(finishVal);
    if (costMep) costMep.textContent = fmtLakhs(mepVal);
    if (costLabor) costLabor.textContent = fmtLakhs(laborVal);

    const targetCement = Math.round(builtUpSqft * 0.35);
    const targetSteel = (builtUpSqft * 0.0035).toFixed(1);
    const targetBricks = Math.round(builtUpSqft * 14.5);
    const targetSand = Math.round(builtUpSqft * 0.018);

    if (cntCement) cntCement.textContent = `~${targetCement.toLocaleString()} BAGS`;
    if (cntSteel) cntSteel.textContent = `~${targetSteel} TONS`;
    if (cntBricks) cntBricks.textContent = `~${targetBricks.toLocaleString()} PCS`;
    if (cntSand) cntSand.textContent = `~${targetSand} TRIPS`;

    if (window.gsap && cntCement) {
      window.gsap.fromTo([cntCement, cntSteel, cntBricks, cntSand], 
        { opacity: 0.4, scale: 0.95 }, 
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }

  function updatePermitStampGraphic(nakshaChecked, soilChecked) {
    const stateExcluded = document.getElementById('state-excluded');
    const stateIncluded = document.getElementById('state-included');
    const groupNaksha = document.getElementById('group-naksha-stamp');
    const groupSoil = document.getElementById('group-soil-stamp');
    const specStatus = document.getElementById('permit-spec-status');

    if (!nakshaChecked && !soilChecked) {
      if (stateExcluded) stateExcluded.setAttribute('opacity', '1');
      if (stateIncluded) stateIncluded.setAttribute('opacity', '0');
      if (specStatus) {
        specStatus.textContent = 'EXCLUDED (NPR 0 ADD-ONS)';
        specStatus.style.color = '#888';
      }
    } else {
      if (stateExcluded) stateExcluded.setAttribute('opacity', '0');
      if (stateIncluded) stateIncluded.setAttribute('opacity', '1');

      if (groupNaksha) groupNaksha.setAttribute('opacity', nakshaChecked ? '1' : '0.2');
      if (groupSoil) groupSoil.setAttribute('opacity', soilChecked ? '1' : '0.2');

      let totalAdd = 0;
      if (nakshaChecked) totalAdd += 60000;
      if (soilChecked) totalAdd += 45000;

      if (specStatus) {
        specStatus.textContent = `PERMITS ACTIVE (+NPR ${totalAdd.toLocaleString()})`;
        specStatus.style.color = 'var(--nothing-red)';
      }
    }

    const svgCanvas = document.getElementById('permit-stamp-svg');
    if (window.gsap && svgCanvas) {
      window.gsap.fromTo(svgCanvas, { opacity: 0.5 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
    }
  }

  const VECTOR_MATERIAL_DATA = {
    basic: {
      tierBadge: "📐 ARCHITECTURAL MATERIAL ASSEMBLY // BASIC TIER (NPR 3,800/SQ. FT.)",
      shadowColor: "#FFF",
      grade: "BASIC B-GRADE / RENTAL FOCUS",
      rate: "NPR 3,800 / SQ. FT.",
      floorPattern: "url(#pat-basic-tile-n)",
      floorStroke: "#FFF",
      wallFill: "#FFF",
      winFrameStroke: "#FFF",
      swatchLbl1: "CERAMIC // 300x300",
      swatchLbl1Color: "#FFF",
      swatchLbl2: "ALUMINUM // FLUSH",
      swatchLbl2Color: "#FFF",
      swatchLbl3: "STANDARD // PVC",
      swatchLbl3Color: "#FFF",
      swatchLbl4: "WEATHERCOAT // DISTEMPER",
      swatchLbl4Color: "#FFF"
    },
    standard: {
      tierBadge: "📐 ARCHITECTURAL MATERIAL ASSEMBLY // STANDARD TIER (NPR 4,800/SQ. FT.)",
      shadowColor: "var(--nothing-red)",
      grade: "STANDARD A-GRADE RESIDENTIAL",
      rate: "NPR 4,800 / SQ. FT.",
      floorPattern: "url(#pat-std-tile-n)",
      floorStroke: "#FF2800",
      wallFill: "#FF2800",
      winFrameStroke: "#FF2800",
      swatchLbl1: "VITRIFIED // 600x600",
      swatchLbl1Color: "#FF2800",
      swatchLbl2: "UPVC // SAL WOOD",
      swatchLbl2Color: "#FF2800",
      swatchLbl3: "CONCEALED // CP",
      swatchLbl3Color: "#FF2800",
      swatchLbl4: "APEX // ACRYLIC",
      swatchLbl4Color: "#FF2800"
    },
    premium: {
      tierBadge: "📐 ARCHITECTURAL MATERIAL ASSEMBLY // PREMIUM LUXURY TIER (NPR 6,800/SQ. FT.)",
      shadowColor: "#FFF",
      grade: "PREMIUM LUXURY VILLA GRADE",
      rate: "NPR 6,800 / SQ. FT.",
      floorPattern: "url(#pat-hpl-cladding-n)",
      floorStroke: "#FFF",
      wallFill: "#FFF",
      winFrameStroke: "#FFF",
      swatchLbl1: "ITALIAN MARBLE // SLAB",
      swatchLbl1Color: "#FFF",
      swatchLbl2: "THERMAL UPVC // TEAK",
      swatchLbl2Color: "#FFF",
      swatchLbl3: "KOHLER // RAINSHOWER",
      swatchLbl3Color: "#FFF",
      swatchLbl4: "HPL PANEL // CLADDING",
      swatchLbl4Color: "#FFF"
    }
  };

  function updateMaterialSpecGraphic(tierKey) {
    const data = VECTOR_MATERIAL_DATA[tierKey] || VECTOR_MATERIAL_DATA.standard;
    const container = document.getElementById('material-spec-container');
    const badge = document.getElementById('mat-spec-tier-badge');
    const grade = document.getElementById('mat-spec-grade');
    const rate = document.getElementById('mat-spec-rate');

    const cutFloor = document.getElementById('cutaway-floor-layer');
    const cutWall = document.getElementById('cutaway-wall-layer');
    const cutWin = document.getElementById('cutaway-window-frame');

    const lbl1 = document.getElementById('swatch-lbl-1');
    const lbl2 = document.getElementById('swatch-lbl-2');
    const lbl3 = document.getElementById('swatch-lbl-3');
    const lbl4 = document.getElementById('swatch-lbl-4');

    const bg1 = document.getElementById('swatch-bg-1');
    const bg4 = document.getElementById('swatch-bg-4');

    if (container) container.style.borderColor = data.shadowColor;
    if (badge) {
      badge.textContent = data.tierBadge;
      badge.style.color = data.shadowColor;
    }
    if (grade) {
      grade.textContent = data.grade;
      grade.style.color = data.shadowColor;
    }
    if (rate) rate.textContent = data.rate;

    if (cutFloor) {
      cutFloor.setAttribute('fill', data.floorPattern);
      cutFloor.setAttribute('stroke', data.floorStroke);
    }
    if (cutWall) cutWall.setAttribute('fill', data.wallFill);
    if (cutWin) cutWin.setAttribute('stroke', data.winFrameStroke);

    if (bg1) bg1.setAttribute('fill', data.floorPattern);
    if (bg4) bg4.setAttribute('stroke', data.shadowColor);

    if (lbl1) { lbl1.textContent = data.swatchLbl1; lbl1.setAttribute('fill', data.swatchLbl1Color); }
    if (lbl2) { lbl2.textContent = data.swatchLbl2; lbl2.setAttribute('fill', data.swatchLbl2Color); }
    if (lbl3) { lbl3.textContent = data.swatchLbl3; lbl3.setAttribute('fill', data.swatchLbl3Color); }
    if (lbl4) { lbl4.textContent = data.swatchLbl4; lbl4.setAttribute('fill', data.swatchLbl4Color); }

    const svgCanvas = document.getElementById('mat-assembly-svg');
    if (window.gsap && svgCanvas) {
      window.gsap.fromTo(svgCanvas, { opacity: 0.4, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
    }
  }

  function updatePlotGraphic(aana) {
    const plotSqft = aana * AANA_TO_SQFT;
    const sideFt = Math.sqrt(plotSqft);
    const groundSqft = plotSqft * GROUND_COVERAGE_RATIO;

    const minWidth = 140;
    const maxWidth = 290;
    const minHeight = 85;
    const maxHeight = 165;

    const scaleRatio = (aana - 2) / (10 - 2);
    const rectW = minWidth + (maxWidth - minWidth) * scaleRatio;
    const rectH = minHeight + (maxHeight - minHeight) * scaleRatio;
    const rectX = 200 - rectW / 2;
    const rectY = 100 - rectH / 2;

    const setX = rectX + 12;
    const setY = rectY + 10;
    const setW = rectW - 24;
    const setH = rectH - 20;

    const bldX = rectX + 20;
    const bldY = rectY + 16;
    const bldW = rectW - 40;
    const bldH = rectH - 32;

    const svgPlotRect = document.getElementById('svg-plot-rect');
    const svgSetbackRect = document.getElementById('svg-setback-rect');
    const svgBuildRect = document.getElementById('svg-build-rect');

    const dimW = document.getElementById('svg-plot-dim-w');
    const dimH = document.getElementById('svg-plot-dim-h');
    const footTxt = document.getElementById('svg-build-footprint-txt');
    const sqftTxt = document.getElementById('svg-plot-sqft-txt');

    const specTotal = document.getElementById('plot-spec-total');
    const specBuilt = document.getElementById('plot-spec-built');

    if (window.gsap) {
      window.gsap.to(svgPlotRect, { attr: { x: rectX, y: rectY, width: rectW, height: rectH }, duration: 0.35, ease: "power2.out" });
      window.gsap.to(svgSetbackRect, { attr: { x: setX, y: setY, width: setW, height: setH }, duration: 0.35, ease: "power2.out" });
      window.gsap.to(svgBuildRect, { attr: { x: bldX, y: bldY, width: bldW, height: bldH }, duration: 0.35, ease: "power2.out" });
    } else {
      if (svgPlotRect) { svgPlotRect.setAttribute('x', rectX); svgPlotRect.setAttribute('y', rectY); svgPlotRect.setAttribute('width', rectW); svgPlotRect.setAttribute('height', rectH); }
      if (svgSetbackRect) { svgSetbackRect.setAttribute('x', setX); svgSetbackRect.setAttribute('y', setY); svgSetbackRect.setAttribute('width', setW); svgSetbackRect.setAttribute('height', setH); }
      if (svgBuildRect) { svgBuildRect.setAttribute('x', bldX); svgBuildRect.setAttribute('y', bldY); svgBuildRect.setAttribute('width', bldW); svgBuildRect.setAttribute('height', bldH); }
    }

    if (dimW) dimW.textContent = `${sideFt.toFixed(1)} FT (WIDTH)`;
    if (dimH) {
      dimH.textContent = `${sideFt.toFixed(1)} FT (DEPTH)`;
      dimH.setAttribute('x', Math.min(380, rectX + rectW + 15));
      dimH.setAttribute('y', rectY + rectH / 2 + 4);
    }

    if (footTxt) footTxt.setAttribute('y', rectY + rectH / 2 - 6);
    if (sqftTxt) {
      sqftTxt.textContent = `${Math.round(groundSqft).toLocaleString()} SQ. FT. GROUND COVERAGE`;
      sqftTxt.setAttribute('y', rectY + rectH / 2 + 12);
    }

    if (specTotal) specTotal.textContent = `${Math.round(plotSqft).toLocaleString()} SQ. FT.`;
    if (specBuilt) specBuilt.textContent = `${Math.round(groundSqft).toLocaleString()} SQ. FT.`;
  }

  function updateElevationGraphic(storey) {
    const l1 = document.getElementById('floor-l1');
    const l2 = document.getElementById('floor-l2');
    const l25 = document.getElementById('floor-l2-5');
    const l3 = document.getElementById('floor-l3');

    const dimLine = document.getElementById('elev-dim-line');
    const dimTopCap = document.getElementById('elev-dim-top-cap');
    const heightTxt = document.getElementById('elev-height-txt');

    const specType = document.getElementById('elev-spec-type');
    const specHeight = document.getElementById('elev-spec-height');

    let totalHeightFt = 10.0;
    let topY = 140;

    let l1Op = 1, l2Op = 0, l25Op = 0, l3Op = 0;
    let typeLabel = "1 STOREY RESIDENCE";

    if (storey === 1) {
      l1Op = 1; l2Op = 0; l25Op = 0; l3Op = 0;
      totalHeightFt = 10.0;
      topY = 140;
      typeLabel = "1 STOREY RESIDENCE";
    } else if (storey === 2) {
      l1Op = 1; l2Op = 1; l25Op = 0; l3Op = 0;
      totalHeightFt = 20.0;
      topY = 95;
      typeLabel = "2 STOREYS RESIDENCE";
    } else if (storey === 2.5) {
      l1Op = 1; l2Op = 1; l25Op = 1; l3Op = 0;
      totalHeightFt = 28.5;
      topY = 65;
      typeLabel = "2.5 STOREYS (KTM STANDARD)";
    } else if (storey === 3) {
      l1Op = 1; l2Op = 1; l25Op = 0; l3Op = 1;
      totalHeightFt = 30.0;
      topY = 50;
      typeLabel = "3 STOREYS FULL VILLA";
    }

    const meters = (totalHeightFt * 0.3048).toFixed(2);

    if (window.gsap) {
      if (l1) window.gsap.to(l1, { opacity: l1Op, duration: 0.35, ease: "power2.out" });
      if (l2) window.gsap.to(l2, { opacity: l2Op, duration: 0.35, ease: "power2.out" });
      if (l25) window.gsap.to(l25, { opacity: l25Op, duration: 0.35, ease: "power2.out" });
      if (l3) window.gsap.to(l3, { opacity: l3Op, duration: 0.35, ease: "power2.out" });

      if (dimLine) window.gsap.to(dimLine, { attr: { y2: topY }, duration: 0.35, ease: "power2.out" });
      if (dimTopCap) window.gsap.to(dimTopCap, { attr: { y1: topY, y2: topY }, duration: 0.35, ease: "power2.out" });
    } else {
      if (l1) l1.style.opacity = l1Op;
      if (l2) l2.style.opacity = l2Op;
      if (l25) l25.style.opacity = l25Op;
      if (l3) l3.style.opacity = l3Op;

      if (dimLine) dimLine.setAttribute('y2', topY);
      if (dimTopCap) { dimTopCap.setAttribute('y1', topY); dimTopCap.setAttribute('y2', topY); }
    }

    if (heightTxt) heightTxt.textContent = `${totalHeightFt.toFixed(1)} FT TOTAL HEIGHT`;
    if (specType) specType.textContent = typeLabel;
    if (specHeight) specHeight.textContent = `${totalHeightFt.toFixed(1)} FT (${meters}M)`;
  }

  function updateWizardStep(step) {
    currentStep = Math.max(1, Math.min(totalSteps, step));
    
    if (track) {
      track.style.transform = `translateX(-${(currentStep - 1) * 20}%)`;
    }

    if (stepBadge) stepBadge.textContent = `STEP 0${currentStep} OF 05 // ${stepNames[currentStep - 1]}`;
    const percent = Math.round((currentStep / totalSteps) * 100);
    if (percentBadge) percentBadge.textContent = `${percent}% COMPLETE`;
    if (progressFill) progressFill.style.width = `${percent}%`;

    // Toggle Prev / Next button states
    if (prevBtn) prevBtn.style.visibility = currentStep === 1 ? 'hidden' : 'visible';
    if (nextBtn) {
      if (currentStep === totalSteps) {
        nextBtn.textContent = 'RECALCULATE 🔄';
      } else {
        nextBtn.textContent = 'NEXT STEP ➔';
      }
    }

    // Step dots active styles
    stepNavBtns.forEach((btn, idx) => {
      const dot = btn.querySelector('.wiz-dot');
      if (idx + 1 === currentStep) {
        btn.style.color = '#FFF';
        btn.classList.add('active');
        if (dot) {
          dot.style.background = 'var(--nothing-red)';
          dot.style.color = '#FFF';
        }
      } else if (idx + 1 < currentStep) {
        btn.style.color = '#FFF';
        btn.classList.remove('active');
        if (dot) {
          dot.style.background = '#444';
          dot.style.color = '#FFF';
        }
      } else {
        btn.style.color = '#666';
        btn.classList.remove('active');
        if (dot) {
          dot.style.background = '#222';
          dot.style.color = '#FFF';
        }
      }
    });

    calculateCosts();
  }

  function calculateCosts() {
    if (!slider) return;

    const aana = parseFloat(slider.value);
    const totalLandSqft = aana * AANA_TO_SQFT;
    const groundCoverageSqft = totalLandSqft * GROUND_COVERAGE_RATIO;
    const totalBuiltUpSqft = groundCoverageSqft * activeStorey;

    const tierObj = FINISH_TIERS[activeTierKey] || FINISH_TIERS.standard;
    const ratePerSqft = tierObj.rate;
    const structuralCost = totalBuiltUpSqft * ratePerSqft;

    let nakshaOn = chkNaksha && chkNaksha.checked;
    let soilOn = chkSoil && chkSoil.checked;

    let permitCost = 0;
    if (nakshaOn) permitCost += 60000;
    if (soilOn) permitCost += 45000;

    const totalEstimate = structuralCost + permitCost;

    // Formatters
    const crores = totalEstimate / 10000000;
    const lakhs = totalEstimate / 100000;
    let formattedShort = crores >= 1 ? `NPR ${crores.toFixed(2)} Crore` : `NPR ${lakhs.toFixed(2)} Lakhs`;

    if (aanaValDisplay) {
      aanaValDisplay.textContent = `${aana.toFixed(1)} AANA (${Math.round(totalLandSqft).toLocaleString()} SQ. FT.)`;
    }

    if (sumTotal) sumTotal.textContent = formattedShort;
    if (sumExact) sumExact.textContent = `Exact: NPR ${Math.round(totalEstimate).toLocaleString()}`;
    if (sumPlot) sumPlot.textContent = `${aana.toFixed(1)} Aana (${Math.round(totalLandSqft).toLocaleString()} sq. ft.)`;
    if (sumBuilt) sumBuilt.textContent = `${Math.round(totalBuiltUpSqft).toLocaleString()} sq. ft. (${activeStorey} Storeys)`;
    if (sumRate) sumRate.textContent = `NPR ${ratePerSqft.toLocaleString()} / sq. ft. (${tierObj.name})`;
    if (sumStruct) sumStruct.textContent = `NPR ${Math.round(structuralCost).toLocaleString()}`;
    if (sumPermit) sumPermit.textContent = `NPR ${permitCost.toLocaleString()}`;

    // Update Interactive Land Plot Graphic SVG
    updatePlotGraphic(aana);

    // Update Interactive Architectural Elevation Graphic SVG
    updateElevationGraphic(activeStorey);

    // Update Interactive Pure Vector Material Specification Grid
    updateMaterialSpecGraphic(activeTierKey);

    // Update Interactive Digital Permit & Soil Stamp Board
    updatePermitStampGraphic(nakshaOn, soilOn);

    // Update Interactive Cost Distribution Bar & Raw Material Quantity Counter Board
    updateMaterialQuantityBoard(totalEstimate, totalBuiltUpSqft);
  }

  // Event Handlers
  if (slider) slider.addEventListener('input', calculateCosts);

  storeyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      storeyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeStorey = parseFloat(btn.getAttribute('data-storey'));
      calculateCosts();
    });
  });

  tierBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tierBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTierKey = btn.getAttribute('data-tier');
      calculateCosts();
    });
  });

  if (chkNaksha) chkNaksha.addEventListener('change', calculateCosts);
  if (chkSoil) chkSoil.addEventListener('change', calculateCosts);

  // Wizard Navigation
  if (prevBtn) prevBtn.addEventListener('click', () => updateWizardStep(currentStep - 1));
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep === totalSteps) {
        updateWizardStep(1);
      } else {
        updateWizardStep(currentStep + 1);
      }
    });
  }

  stepNavBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const step = parseInt(e.currentTarget.getAttribute('data-step'), 10);
      updateWizardStep(step);
    });
  });

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Initial Calculation & Setup
  updateWizardStep(1);
}
