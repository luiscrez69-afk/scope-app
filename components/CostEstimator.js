/**
 * CostEstimator Component - SCOPE Web App (Nothing Tech Inspired)
 * Kathmandu Valley Construction Cost Calculator with Interactive 6-Category Building Carousel Selector,
 * Accurate Engineering Discipline Cost Ratios, Volume Scale Economy Tiers, Resort Master Planning Module,
 * EXPANDED HIGH-IMPACT VECTOR MATRIX GRAPHICS (Steps 1-4),
 * and Expandable BOQ Receipt Discipline Breakdown.
 */

const AANA_TO_SQFT = 342.25;
const GROUND_COVERAGE_RATIO = 0.70; // 70% municipality ground coverage ratio
const ROPANI_TO_SQFT = 5476; // 1 Ropani = 5,476 sq. ft.

export const BUILDING_CATEGORIES = [
  {
    id: "residential",
    title: "RESIDENTIAL & MIXED-USE HOUSING",
    icon: "🏡",
    badge: "HOUSING & DUPLEX",
    desc: "Single-family residences, duplex villas, and mixed-use private housing.",
    defaultRates: { basic: 3800, standard: 4800, premium: 6800 },
    scaleTiers: [
      { name: "Standard Tier", limitSqft: 3500, discountPct: 0, label: "Up to 3,500 sq. ft. (Standard Rate)" },
      { name: "Large Scale Volume Discount", limitSqft: Infinity, discountPct: 6, label: "> 3,500 sq. ft. (6% Volume Savings)" }
    ],
    disciplines: [
      { name: "Architectural Design & Detailing", pct: 50, color: "var(--nothing-red)" },
      { name: "Structural Engineering", pct: 20, color: "#FFF" },
      { name: "Sanitation & Plumbing", pct: 10, color: "#AAA" },
      { name: "Electrical & Lighting", pct: 10, color: "#888" },
      { name: "BoQ, Specifications & Contract Docs", pct: 10, color: "#666" }
    ],
    svgType: "residential"
  },
  {
    id: "commercial",
    title: "COMMERCIAL & OFFICE BUILDINGS",
    icon: "🏢",
    badge: "OFFICES & RETAIL TOWER",
    desc: "Commercial complexes, IT parks, retail centers, and office towers.",
    defaultRates: { basic: 4200, standard: 5400, premium: 7500 },
    scaleTiers: [
      { name: "Tier 1: Standard Commercial", limitSqft: 10000, discountPct: 0, label: "Up to 10,000 sq. ft." },
      { name: "Tier 2: Mid-Rise Volume Scale", limitSqft: 50000, discountPct: 5, label: "10k - 50k sq. ft. (5% Volume Economy)" },
      { name: "Tier 3: High-Rise Volume Scale", limitSqft: Infinity, discountPct: 10, label: "> 50k sq. ft. (10% High-Rise Economy)" }
    ],
    disciplines: [
      { name: "Architectural Design & Detailing", pct: 55, color: "var(--nothing-red)" },
      { name: "Structural Engineering", pct: 20, color: "#FFF" },
      { name: "Sanitation & Plumbing", pct: 7.5, color: "#AAA" },
      { name: "Electrical & Power Systems", pct: 7.5, color: "#888" },
      { name: "HVAC & Air Conditioning Systems", pct: 5.0, color: "#666" },
      { name: "BoQ, Specifications & Contract Docs", pct: 5.0, color: "#444" }
    ],
    svgType: "commercial"
  },
  {
    id: "hospitals",
    title: "HOSPITALS & HEALTH INSTITUTIONS",
    icon: "🏥",
    badge: "MEDICAL & HEALTHCARE",
    desc: "Hospitals, diagnostic centers, clinics, and medical research facilities.",
    defaultRates: { basic: 5200, standard: 6800, premium: 9200 },
    scaleTiers: [
      { name: "Tier 1: Community Hospital", limitSqft: 40000, discountPct: 0, label: "Up to 40,000 sq. ft." },
      { name: "Tier 2: Regional Medical Center", limitSqft: 100000, discountPct: 6, label: "40k - 100k sq. ft. (6% Medical Economy)" },
      { name: "Tier 3: Tertiary Care Hospital", limitSqft: Infinity, discountPct: 12, label: "> 100k sq. ft. (12% Scale Efficiency)" }
    ],
    disciplines: [
      { name: "Architectural Design & Medical Layouts", pct: 55, color: "var(--nothing-red)" },
      { name: "Structural Engineering", pct: 20, color: "#FFF" },
      { name: "Sanitation, Medical Plumbing & Gas", pct: 7.5, color: "#AAA" },
      { name: "Electrical & Emergency Power", pct: 7.5, color: "#888" },
      { name: "HVAC & Cleanroom Ventilation", pct: 5.0, color: "#666" },
      { name: "BoQ, Specifications & Contract Docs", pct: 5.0, color: "#444" }
    ],
    svgType: "hospitals"
  },
  {
    id: "resorts",
    title: "RESORTS & HOTEL BUILDINGS",
    icon: "🏖️",
    badge: "HOSPITALITY & MASTER PLAN",
    desc: "Luxury resorts, boutique hotels, eco-lodges, and master-planned retreats.",
    hasMasterPlanModule: true,
    defaultRates: { basic: 5500, standard: 7200, premium: 9800 },
    scaleTiers: [
      { name: "Tier 1: Boutique Resort", limitSqft: 40000, discountPct: 0, label: "Up to 40,000 sq. ft." },
      { name: "Tier 2: Premium Hotel Complex", limitSqft: 100000, discountPct: 5, label: "40k - 100k sq. ft. (5% Economy)" },
      { name: "Tier 3: Mega Resort Destination", limitSqft: Infinity, discountPct: 10, label: "> 100k sq. ft. (10% Scale Economy)" }
    ],
    masterPlanTiers: [
      { name: "Compact Master Plan", limitRopani: 20, feePerRopani: 150000, label: "Up to 20 Ropanis (NPR 1.5 Lakhs / Ropani)" },
      { name: "Mid-Scale Master Plan", limitRopani: 50, feePerRopani: 120000, label: "20–50 Ropanis (NPR 1.2 Lakhs / Ropani)" },
      { name: "Large Destination Plan", limitRopani: Infinity, feePerRopani: 95000, label: "Above 50 Ropanis (NPR 95k / Ropani)" }
    ],
    masterPlanBreakdown: [
      { name: "Conceptual Architecture & Zoning", pct: 60, color: "var(--nothing-red)" },
      { name: "Site Building Services", pct: 20, color: "#FFF" },
      { name: "Landscape Details & Amenities", pct: 10, color: "#AAA" },
      { name: "Site Infrastructure & Utilities", pct: 10, color: "#888" }
    ],
    disciplines: [
      { name: "Architectural & Hospitality Planning", pct: 55, color: "var(--nothing-red)" },
      { name: "Structural Engineering", pct: 20, color: "#FFF" },
      { name: "Sanitation & Plumbing", pct: 7.5, color: "#AAA" },
      { name: "Electrical & Accent Lighting", pct: 7.5, color: "#888" },
      { name: "HVAC Systems", pct: 5.0, color: "#666" },
      { name: "BoQ & Contract Docs", pct: 5.0, color: "#444" }
    ],
    svgType: "resorts"
  },
  {
    id: "apartments",
    title: "APARTMENT BUILDINGS",
    icon: "🏙️",
    badge: "HIGH-RISE RESIDENTIAL",
    desc: "Multi-family apartment towers, condominiums, and housing societies.",
    defaultRates: { basic: 4000, standard: 5000, premium: 7000 },
    scaleTiers: [
      { name: "Tier 1: Low-Rise Apartments", limitSqft: 10000, discountPct: 0, label: "Up to 10,000 sq. ft." },
      { name: "Tier 2: Mid-Rise Apartments", limitSqft: 50000, discountPct: 5, label: "10k - 50k sq. ft. (5% Volume Economy)" },
      { name: "Tier 3: High-Rise Condo Tower", limitSqft: Infinity, discountPct: 10, label: "> 50k sq. ft. (10% High-Rise Economy)" }
    ],
    disciplines: [
      { name: "Architectural Design & Unit Layouts", pct: 55, color: "var(--nothing-red)" },
      { name: "Structural Engineering", pct: 20, color: "#FFF" },
      { name: "Sanitation & Plumbing", pct: 7.5, color: "#AAA" },
      { name: "Electrical & Utility Services", pct: 7.5, color: "#888" },
      { name: "HVAC Systems", pct: 5.0, color: "#666" },
      { name: "BoQ & Contract Docs", pct: 5.0, color: "#444" }
    ],
    svgType: "apartments"
  },
  {
    id: "academic",
    title: "ACADEMIC INSTITUTIONS & MULTI-PURPOSE HALLS",
    icon: "🎓",
    badge: "EDUCATION & AUDITORIUM",
    desc: "Schools, university campuses, auditoriums, and community halls.",
    defaultRates: { basic: 3900, standard: 4900, premium: 6900 },
    scaleTiers: [
      { name: "Tier 1: School / Small Hall", limitSqft: 10000, discountPct: 0, label: "Up to 10,000 sq. ft." },
      { name: "Tier 2: College Campus / Hall", limitSqft: 50000, discountPct: 5, label: "10k - 50k sq. ft. (5% Campus Economy)" },
      { name: "Tier 3: University / Mega Complex", limitSqft: Infinity, discountPct: 10, label: "> 50k sq. ft. (10% Scale Efficiency)" }
    ],
    disciplines: [
      { name: "Architectural Design & Spatial Planning", pct: 55, color: "var(--nothing-red)" },
      { name: "Structural Engineering", pct: 20, color: "#FFF" },
      { name: "Sanitation & Public Washroom Services", pct: 7.5, color: "#AAA" },
      { name: "Electrical & Auditorium Acoustics/Lighting", pct: 7.5, color: "#888" },
      { name: "HVAC Systems", pct: 5.0, color: "#666" },
      { name: "BoQ & Contract Docs", pct: 5.0, color: "#444" }
    ],
    svgType: "academic"
  }
];

const VECTOR_MATERIAL_DATA = {
  basic: {
    tierBadge: "📐 ARCHITECTURAL MATERIAL ASSEMBLY // BASIC TIER",
    shadowColor: "var(--nothing-red)",
    grade: "BASIC B-GRADE / RENTAL FOCUS",
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
    tierBadge: "📐 ARCHITECTURAL MATERIAL ASSEMBLY // STANDARD TIER",
    shadowColor: "var(--nothing-red)",
    grade: "STANDARD A-GRADE RESIDENTIAL",
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
    tierBadge: "📐 ARCHITECTURAL MATERIAL ASSEMBLY // PREMIUM LUXURY TIER",
    shadowColor: "var(--nothing-red)",
    grade: "PREMIUM LUXURY VILLA GRADE",
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

export function createCostEstimator() {
  return `
    <div id="estimate" class="tab-pane active-pane">
      <div class="scope-container">
        
        <!-- Header Banner -->
        <div class="section-title-wrap" style="margin-bottom: 1.8rem;">
          <div>
            <span class="section-tag">● KATHMANDU VALLEY // ARCHITECTURAL ESTIMATOR</span>
            <h2 class="section-title" style="margin-top: 0.5rem;">
              CONSTRUCTION COST ESTIMATOR
            </h2>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); font-weight: 700; letter-spacing: 1px;">
            [ 6 BUILDING CATEGORIES // VOLUME ECONOMY OF SCALE ]
          </div>
        </div>

        <!-- 1. INTERACTIVE 6-CATEGORY BUILDING CAROUSEL SELECTOR -->
        <div class="building-category-carousel-wrap" style="background: var(--bg-card); border: var(--border-thick); border-radius: var(--radius-card); padding: 1.5rem; margin-bottom: 2rem; position: relative;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.8rem;">
            <div>
              <span class="badge brutal-badge yellow" style="background: var(--nothing-red); color: #FFF;">BUILDING CLASSIFICATION</span>
              <h3 style="font-family: var(--font-mono); font-size: 1.3rem; font-weight: 700; color: #FFF; margin-top: 0.4rem; text-transform: uppercase; letter-spacing: 1px;">
                SELECT BUILDING CATEGORY (6 TYPOLOGIES)
              </h3>
            </div>

            <!-- Carousel Nav Arrows -->
            <div style="display: flex; gap: 0.6rem; align-items: center;">
              <button id="cat-carousel-prev" class="btn-brutal white" style="padding: 0.4rem 0.8rem; font-size: 1.1rem; min-height: 40px; border-radius: 4px;">◀</button>
              <button id="cat-carousel-next" class="btn-brutal yellow" style="padding: 0.4rem 0.8rem; font-size: 1.1rem; min-height: 40px; border-radius: 4px; background: var(--nothing-red); color: #FFF;">▶</button>
            </div>
          </div>

          <!-- Carousel Cards Track -->
          <div id="cat-carousel-track-container" style="overflow-x: auto; -webkit-overflow-scrolling: touch; scroll-behavior: smooth; padding-bottom: 0.5rem;">
            <div style="display: flex; gap: 1rem; width: max-content;">
              ${BUILDING_CATEGORIES.map((cat, idx) => `
                <div class="building-cat-card ${idx === 0 ? 'active' : ''}" data-cat-id="${cat.id}" style="background: ${idx === 0 ? 'var(--nothing-red)' : 'var(--bg-surface)'}; color: #FFF; border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem 1.2rem; min-width: 220px; max-width: 260px; cursor: pointer; transition: all 0.2s ease; user-select: none;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                    <span style="font-size: 1.6rem;">${cat.icon}</span>
                    <span class="badge" style="font-family: var(--font-mono); font-size: 0.6rem; background: #000; color: #FFF; padding: 0.1rem 0.4rem; border-radius: 4px;">${cat.badge}</span>
                  </div>
                  <div style="font-family: var(--font-mono); font-size: 1.05rem; font-weight: 700; line-height: 1.1; margin-bottom: 0.3rem;">${cat.title}</div>
                  <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">${cat.desc}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- 5-STEP CAROUSEL WIZARD CONTAINER -->
        <div class="estimator-wizard-box" style="background: var(--bg-card); border: var(--border-thick); border-radius: var(--radius-card); padding: 2.5rem; position: relative;">
          
          <!-- Top Wizard Progress Bar -->
          <div style="margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; margin-bottom: 0.8rem;">
              <span id="wizard-step-badge" style="color: var(--nothing-red);">STEP 01 OF 05 // LAND & BUILT-UP AREA</span>
              <span id="wizard-percent-badge" style="color: #FFF;">20% COMPLETE</span>
            </div>

            <!-- Progress Bar -->
            <div style="width: 100%; height: 8px; background: var(--bg-surface); border-radius: 4px; overflow: hidden;">
              <div id="wizard-progress-fill" style="width: 20%; height: 100%; background: var(--nothing-red); transition: width 0.4s ease;"></div>
            </div>

            <!-- Step Dots Navigation Bar -->
            <div class="wizard-steps-nav" style="display: flex; justify-content: space-between; margin-top: 1rem; border-top: 1px dashed var(--border-color); padding-top: 1rem;">
              <button class="wiz-step-btn active" data-step="1" style="background: none; border: none; cursor: pointer; color: #FFF; font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 0.4rem;">
                <span class="wiz-dot" style="width: 24px; height: 24px; border-radius: 50%; background: var(--nothing-red); color: #FFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 700;">1</span>
                <span>AREA & SCALE</span>
              </button>
              <button class="wiz-step-btn" data-step="2" style="background: none; border: none; cursor: pointer; color: #666; font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 0.4rem;">
                <span class="wiz-dot" style="width: 24px; height: 24px; border-radius: 50%; background: #333; color: #FFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 700;">2</span>
                <span>STOREYS</span>
              </button>
              <button class="wiz-step-btn" data-step="3" style="background: none; border: none; cursor: pointer; color: #666; font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 0.4rem;">
                <span class="wiz-dot" style="width: 24px; height: 24px; border-radius: 50%; background: #333; color: #FFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 700;">3</span>
                <span>FINISH TIER</span>
              </button>
              <button class="wiz-step-btn" data-step="4" style="background: none; border: none; cursor: pointer; color: #666; font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 0.4rem;">
                <span class="wiz-dot" style="width: 24px; height: 24px; border-radius: 50%; background: #333; color: #FFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 700;">4</span>
                <span>PERMITS & MODULES</span>
              </button>
              <button class="wiz-step-btn" data-step="5" style="background: none; border: none; cursor: pointer; color: #666; font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 0.4rem;">
                <span class="wiz-dot" style="width: 24px; height: 24px; border-radius: 50%; background: #333; color: #FFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 700;">5</span>
                <span>BOQ SUMMARY</span>
              </button>
            </div>
          </div>

          <!-- CAROUSEL SLIDE VIEWPORT -->
          <div class="wizard-carousel-viewport" style="overflow: hidden; min-height: 560px; position: relative;">
            <div class="wizard-carousel-track" style="display: flex; transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1); width: 500%;">
              
              <!-- STEP 1 -->
              <div class="wizard-slide" style="width: 20%; padding: 1.5rem; box-sizing: border-box; flex-shrink: 0;">
                <h3 style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: var(--nothing-red); text-transform: uppercase; margin-bottom: 0.8rem; letter-spacing: 1px;">
                  1. SELECT PLOT & BUILT-UP AREA
                </h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
                  Set plot size in Aana or direct built-up area for the active building category (<span id="cat-title-step1" style="color: #FFF; font-weight: 700;">RESIDENTIAL & MIXED-USE HOUSING</span>).
                </p>

                <div class="control-group" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.8rem; margin-bottom: 1.5rem;">
                  <div class="control-label" style="display: flex; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
                    <span style="color: var(--nothing-red); font-weight: 700; font-size: 1.1rem;">PLOT AREA (AANA):</span>
                    <span id="ktm-aana-val" style="color: #FFF; font-weight: 700; font-size: 1.3rem; font-family: var(--font-mono);">4.0 AANA (1,369 SQ. FT.)</span>
                  </div>
                  <input type="range" id="ktm-aana-slider" class="brutal-slider" min="2" max="25" step="0.5" value="4" style="width: 100%; height: 16px; cursor: pointer; accent-color: var(--nothing-red);" />
                  <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.8rem; color: #888; margin-top: 0.8rem;">
                    <span>2.0 Aana (Small)</span>
                    <span>10.0 Aana</span>
                    <span>25.0 Aana (Large Complex)</span>
                  </div>
                </div>

                <!-- VOLUME SCALE TIER BADGE -->
                <div id="volume-tier-indicator-box" style="background: var(--bg-surface); border: 1px solid var(--nothing-red); border-radius: 6px; padding: 0.9rem 1.2rem; font-family: var(--font-mono); font-size: 0.85rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                  <div>
                    <span style="color: var(--text-muted);">VOLUME SCALE TIER:</span>
                    <span id="scale-tier-name" style="color: #FFF; font-weight: 700; margin-left: 0.4rem;">Standard Tier (Up to 3,500 sq. ft.)</span>
                  </div>
                  <span id="scale-tier-discount" style="background: var(--nothing-red); color: #FFF; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">STANDARD BASE RATE</span>
                </div>

                <!-- EXPANDED DYNAMIC ARCHITECTURAL LAND PLOT GRAPHIC SVG -->
                <div class="land-plot-graphic-container" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem; position: relative;">
                  <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
                    <span style="color: var(--nothing-red); font-weight: 700;">📐 INTERACTIVE LAND BOUNDARY & BUILDABLE FOOTPRINT MATRIX</span>
                    <span style="background: var(--nothing-red); color: #FFF; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">TYPOLOGY MATRIX // 70% COVERAGE RATIO</span>
                  </div>

                  <div style="width: 100%; height: 320px; position: relative; background: #000; border: 1px dashed var(--border-color); border-radius: 4px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <svg id="plot-svg-canvas" viewBox="0 0 500 280" style="width: 100%; height: 100%;">
                      <defs>
                        <pattern id="hatch-pattern-n" width="12" height="12" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                          <line x1="0" y1="0" x2="0" y2="12" stroke="#FF2800" stroke-width="2.5" />
                        </pattern>
                      </defs>
                      <g stroke="#1A1A1E" stroke-width="1">
                        <line x1="0" y1="40" x2="500" y2="40" />
                        <line x1="0" y1="80" x2="500" y2="80" />
                        <line x1="0" y1="120" x2="500" y2="120" />
                        <line x1="0" y1="160" x2="500" y2="160" />
                        <line x1="0" y1="200" x2="500" y2="200" />
                        <line x1="0" y1="240" x2="500" y2="240" />
                        <line x1="80" y1="0" x2="80" y2="280" />
                        <line x1="160" y1="0" x2="160" y2="280" />
                        <line x1="240" y1="0" x2="240" y2="280" />
                        <line x1="320" y1="0" x2="320" y2="280" />
                        <line x1="400" y1="0" x2="400" y2="280" />
                      </g>
                      <rect id="svg-plot-rect" x="60" y="25" width="380" height="230" fill="none" stroke="#FF2800" stroke-width="3.5" />
                      <rect id="svg-setback-rect" x="80" y="40" width="340" height="200" fill="none" stroke="#FFF" stroke-width="2.5" stroke-dasharray="6,4" />
                      <rect id="svg-build-rect" x="95" y="52" width="310" height="176" fill="url(#hatch-pattern-n)" fill-opacity="0.35" stroke="#FF2800" stroke-width="3" />
                      <text id="svg-plot-dim-w" x="250" y="18" fill="#FF2800" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">37.0 FT (WIDTH)</text>
                      <text id="svg-plot-dim-h" x="455" y="140" fill="#FF2800" font-family="monospace" font-size="12" font-weight="bold" text-anchor="start">37.0 FT (DEPTH)</text>
                      <text id="svg-build-footprint-txt" x="250" y="130" fill="#FFFFFF" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">BUILDABLE FOOTPRINT (70%)</text>
                      <text id="svg-plot-sqft-txt" x="250" y="155" fill="#FFF" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">958 SQ. FT. GROUND COVERAGE</text>
                    </svg>
                  </div>

                  <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-top: 0.8rem; border-top: 1px dashed var(--border-color); padding-top: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div>PLOT AREA: <span id="plot-spec-total" style="color: #FFF; font-weight: 700;">1,369 SQ. FT.</span></div>
                    <div>SETBACK BUFFER: <span style="color: var(--nothing-red); font-weight: 700;">5.0 FT (1.5M)</span></div>
                    <div>GROUND COVERAGE (70%): <span id="plot-spec-built" style="color: #FFF; font-weight: 700;">958.3 SQ. FT.</span></div>
                  </div>
                </div>

              </div>

              <!-- STEP 2 -->
              <div class="wizard-slide" style="width: 20%; padding: 1.5rem; box-sizing: border-box; flex-shrink: 0;">
                <h3 style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: var(--nothing-red); text-transform: uppercase; margin-bottom: 0.8rem; letter-spacing: 1px;">
                  2. NUMBER OF STOREYS
                </h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
                  Select total floor levels for <span id="cat-title-step2" style="color: #FFF; font-weight: 700;">RESIDENTIAL & MIXED-USE HOUSING</span>.
                </p>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1.2rem; margin-bottom: 1.5rem;">
                  <button class="storey-btn btn-brutal white" data-storey="1" style="padding: 1.5rem 1rem; flex-direction: column; gap: 0.5rem; align-items: center; text-align: center; border-radius: 6px;">
                    <span style="font-size: 2rem;">🏡</span>
                    <span style="font-weight: 700; font-size: 1.1rem;">1 STOREY</span>
                    <span style="font-size: 0.75rem; color: #555;">Low-Rise Structure</span>
                  </button>
                  <button class="storey-btn btn-brutal cyan" data-storey="2" style="padding: 1.5rem 1rem; flex-direction: column; gap: 0.5rem; align-items: center; text-align: center; border-radius: 6px;">
                    <span style="font-size: 2rem;">🏠</span>
                    <span style="font-weight: 700; font-size: 1.1rem;">2 STOREYS</span>
                    <span style="font-size: 0.75rem; color: #FFF;">Standard 2-Level Block</span>
                  </button>
                  <button class="storey-btn btn-brutal yellow active" data-storey="2.5" style="padding: 1.5rem 1rem; flex-direction: column; gap: 0.5rem; align-items: center; text-align: center; border-radius: 6px; background: var(--nothing-red); color: #FFF;">
                    <span style="font-size: 2rem;">🏢</span>
                    <span style="font-weight: 700; font-size: 1.1rem;">2.5 STOREYS</span>
                    <span style="font-size: 0.75rem; color: #FFF;">Standard KTM Standard</span>
                  </button>
                  <button class="storey-btn btn-brutal pink" data-storey="3" style="padding: 1.5rem 1rem; flex-direction: column; gap: 0.5rem; align-items: center; text-align: center; border-radius: 6px;">
                    <span style="font-size: 2rem;">🏬</span>
                    <span style="font-weight: 700; font-size: 1.1rem;">3 STOREYS</span>
                    <span style="font-size: 0.75rem; color: #FFF;">Full 3-Level Block</span>
                  </button>
                </div>

                <!-- EXPANDED ELEVATION GRAPHIC SVG -->
                <div class="elevation-graphic-container" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem; position: relative;">
                  <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
                    <span style="color: var(--nothing-red); font-weight: 700;">🏛️ STRUCTURAL ELEVATION CROSS-SECTION MATRIX</span>
                    <span style="background: var(--nothing-red); color: #FFF; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">ELEVATION MATRIX</span>
                  </div>

                  <div style="width: 100%; height: 320px; position: relative; background: #000; border: 1px dashed var(--border-color); border-radius: 4px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <svg id="elevation-svg-canvas" viewBox="0 0 500 300" style="width: 100%; height: 100%;">
                      <line x1="20" y1="265" x2="480" y2="265" stroke="#FFF" stroke-width="3.5" />
                      <text x="25" y="285" fill="#888" font-family="monospace" font-size="10" font-weight="bold">GROUND DATUM ±0.00 M</text>
                      <text x="320" y="285" fill="#FF2800" font-family="monospace" font-size="10" font-weight="bold">PLINTH LEVEL +2'0"</text>

                      <g stroke="#FF2800" stroke-width="2">
                        <line id="elev-dim-line" x1="45" y1="265" x2="45" y2="90" />
                        <line x1="38" y1="265" x2="52" y2="265" />
                        <line id="elev-dim-top-cap" x1="38" y1="90" x2="52" y2="90" />
                      </g>
                      <text id="elev-height-txt" x="38" y="180" fill="#FF2800" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90 38 180)">28.5 FT TOTAL HEIGHT</text>

                      <g id="floor-l1" opacity="1">
                        <rect x="75" y="200" width="240" height="65" fill="none" stroke="#FF2800" stroke-width="2.5" />
                        <line x1="75" y1="200" x2="315" y2="200" stroke="#FFF" stroke-width="3.5" />
                        <rect x="85" y="200" width="16" height="65" fill="#FF2800" />
                        <rect x="185" y="200" width="16" height="65" fill="#FF2800" />
                        <rect x="290" y="200" width="16" height="65" fill="#FF2800" />
                        <rect x="115" y="215" width="50" height="35" fill="none" stroke="#FFF" stroke-width="2" />
                        <text x="330" y="235" fill="#FF2800" font-family="monospace" font-size="11" font-weight="bold">L01: GROUND PLINTH (10.0 FT)</text>
                      </g>

                      <g id="floor-l2" opacity="1">
                        <rect x="75" y="135" width="240" height="65" fill="none" stroke="#FFF" stroke-width="2.5" />
                        <line x1="75" y1="135" x2="315" y2="135" stroke="#FFF" stroke-width="3.5" />
                        <rect x="85" y="135" width="16" height="65" fill="#FFF" />
                        <rect x="185" y="135" width="16" height="65" fill="#FFF" />
                        <rect x="290" y="135" width="16" height="65" fill="#FFF" />
                        <rect x="115" y="150" width="50" height="35" fill="none" stroke="#FF2800" stroke-width="2" />
                        <rect x="225" y="150" width="50" height="35" fill="none" stroke="#FF2800" stroke-width="2" />
                        <text x="330" y="170" fill="#FFF" font-family="monospace" font-size="11" font-weight="bold">L02: UPPER FLOOR (10.0 FT)</text>
                      </g>

                      <g id="floor-l2-5" opacity="1">
                        <rect x="75" y="90" width="130" height="45" fill="none" stroke="#FF2800" stroke-width="2.5" />
                        <line x1="75" y1="90" x2="205" y2="90" stroke="#FFF" stroke-width="3" />
                        <line x1="205" y1="120" x2="315" y2="120" stroke="#FF2800" stroke-width="2.5" stroke-dasharray="4,4" />
                        <rect x="85" y="90" width="14" height="45" fill="#FF2800" />
                        <rect x="180" y="90" width="14" height="45" fill="#FF2800" />
                        <text x="330" y="115" fill="#FF2800" font-family="monospace" font-size="11" font-weight="bold">L0.5: TERRACE CABIN (8.5 FT)</text>
                      </g>

                      <g id="floor-l3" opacity="0">
                        <rect x="75" y="70" width="240" height="65" fill="none" stroke="#FFF" stroke-width="2.5" />
                        <line x1="75" y1="70" x2="315" y2="70" stroke="#FFF" stroke-width="3.5" />
                        <rect x="85" y="70" width="16" height="65" fill="#FFF" />
                        <rect x="185" y="70" width="16" height="65" fill="#FFF" />
                        <rect x="290" y="70" width="16" height="65" fill="#FFF" />
                        <text x="330" y="105" fill="#FFF" font-family="monospace" font-size="11" font-weight="bold">L03: TOP LEVEL FLOOR (10.0 FT)</text>
                      </g>
                    </svg>
                  </div>

                  <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-top: 0.8rem; border-top: 1px dashed var(--border-color); padding-top: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div>STRUCTURE: <span id="elev-spec-type" style="color: #FFF; font-weight: 700;">2.5 STOREYS (KTM STANDARD)</span></div>
                    <div>FRAME: <span style="color: var(--nothing-red); font-weight: 700;">RCC PILLAR & BEAM</span></div>
                    <div>HEIGHT: <span id="elev-spec-height" style="color: #FFF; font-weight: 700;">28.5 FT (8.68M)</span></div>
                  </div>
                </div>

              </div>

              <!-- STEP 3 -->
              <div class="wizard-slide" style="width: 20%; padding: 1.5rem; box-sizing: border-box; flex-shrink: 0;">
                <h3 style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: var(--nothing-red); text-transform: uppercase; margin-bottom: 0.8rem; letter-spacing: 1px;">
                  3. FINISH QUALITY TIER
                </h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
                  Select material finishing standard per sq. ft. Rate adjusts based on category baseline.
                </p>

                <div style="display: flex; flex-direction: column; gap: 1.2rem; margin-bottom: 1.5rem;">
                  <button class="tier-btn btn-brutal white" data-tier="basic" style="justify-content: space-between; width: 100%; text-align: left; padding: 1.2rem 1.4rem; gap: 1rem; align-items: center; border-radius: 6px; background: var(--bg-surface); color: #FFF; border: 1px solid var(--border-color);">
                    <div>
                      <div style="font-weight: 700; font-size: 1.05rem;">🔨 BASIC TIER</div>
                      <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">Standard brick, PVC fittings, ceramic tiles</div>
                    </div>
                    <span id="rate-lbl-basic" style="font-family: var(--font-mono); font-size: 1rem; font-weight: 700; color: var(--nothing-red); white-space: nowrap;">NPR 3,800 / SQ. FT.</span>
                  </button>

                  <button class="tier-btn btn-brutal yellow active" data-tier="standard" style="justify-content: space-between; width: 100%; text-align: left; padding: 1.2rem 1.4rem; gap: 1rem; align-items: center; border-radius: 6px; background: var(--nothing-red); color: #FFF; border: 1px solid var(--nothing-red);">
                    <div>
                      <div style="font-weight: 700; font-size: 1.05rem;">🏢 STANDARD TIER (RECOMMENDED)</div>
                      <div style="font-size: 0.8rem; color: #FFF; margin-top: 0.2rem;">AAC/Red brick, vitrified tiles, CP fittings, aluminum joinery</div>
                    </div>
                    <span id="rate-lbl-standard" style="font-family: var(--font-mono); font-size: 1rem; font-weight: 700; color: #FFF; white-space: nowrap;">NPR 4,800 / SQ. FT.</span>
                  </button>

                  <button class="tier-btn btn-brutal pink" data-tier="premium" style="justify-content: space-between; width: 100%; text-align: left; padding: 1.2rem 1.4rem; gap: 1rem; align-items: center; border-radius: 6px; background: var(--bg-surface); color: #FFF; border: 1px solid var(--border-color);">
                    <div>
                      <div style="font-weight: 700; font-size: 1.05rem;">✨ PREMIUM LUXURY TIER</div>
                      <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">Italian marble, Kohler sanitary, teak wood, structural steel accents</div>
                    </div>
                    <span id="rate-lbl-premium" style="font-family: var(--font-mono); font-size: 1rem; font-weight: 700; color: var(--nothing-red); white-space: nowrap;">NPR 6,800 / SQ. FT.</span>
                  </button>
                </div>

                <!-- EXPANDED DYNAMIC MATERIAL ASSEMBLY SVG CONTAINER -->
                <div id="material-spec-container" class="material-spec-container" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem; position: relative;">
                  <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
                    <span id="mat-spec-tier-badge" style="color: var(--nothing-red); font-weight: 700;">📐 ARCHITECTURAL MATERIAL ASSEMBLY & VECTOR SWATCH DIAGRAM</span>
                    <span style="background: var(--nothing-red); color: #FFF; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">VECTOR MATRIX</span>
                  </div>

                  <div style="width: 100%; height: 320px; position: relative; background: #000; border: 1px dashed var(--border-color); border-radius: 4px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <svg id="mat-assembly-svg" viewBox="0 0 550 280" style="width: 100%; height: 100%;">
                      <defs>
                        <pattern id="pat-std-tile-n" width="32" height="32" patternUnits="userSpaceOnUse">
                          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#FF2800" stroke-width="1.5" />
                        </pattern>
                      </defs>

                      <g id="cutaway-group">
                        <rect x="20" y="210" width="250" height="45" fill="#18181A" stroke="#FFF" stroke-width="2.5" />
                        <text x="25" y="238" fill="#888" font-family="monospace" font-size="10" font-weight="bold">RCC STRUCTURAL SLAB 150MM</text>
                        <rect id="cutaway-floor-layer" x="20" y="190" width="250" height="20" fill="url(#pat-std-tile-n)" stroke="#FF2800" stroke-width="2" />
                        <rect x="215" y="25" width="55" height="165" fill="#111" stroke="#FFF" stroke-width="2.5" />
                        <rect id="cutaway-wall-layer" x="270" y="25" width="16" height="165" fill="#FF2800" opacity="0.85" />
                        <rect id="cutaway-window-frame" x="120" y="65" width="65" height="85" fill="none" stroke="#FFF" stroke-width="2.5" />
                      </g>

                      <line x1="305" y1="15" x2="305" y2="265" stroke="#333" stroke-width="1.5" stroke-dasharray="5,5" />

                      <g id="swatch-matrix-group">
                        <g id="swatch-tile-1" transform="translate(325, 25)">
                          <rect x="0" y="0" width="105" height="105" fill="#000" stroke="#FFF" stroke-width="2" />
                          <rect id="swatch-bg-1" x="6" y="6" width="93" height="68" fill="url(#pat-std-tile-n)" />
                          <text id="swatch-lbl-1" x="52" y="93" fill="#FF2800" font-family="monospace" font-size="8.5" font-weight="bold" text-anchor="middle">VITRIFIED // 600x600</text>
                        </g>

                        <g id="swatch-tile-2" transform="translate(438, 25)">
                          <rect x="0" y="0" width="105" height="105" fill="#000" stroke="#FFF" stroke-width="2" />
                          <text id="swatch-lbl-2" x="52" y="93" fill="#FFF" font-family="monospace" font-size="8.5" font-weight="bold" text-anchor="middle">UPVC // ALUMINUM</text>
                        </g>

                        <g id="swatch-tile-3" transform="translate(325, 145)">
                          <rect x="0" y="0" width="105" height="105" fill="#000" stroke="#FFF" stroke-width="2" />
                          <text id="swatch-lbl-3" x="52" y="93" fill="#FFF" font-family="monospace" font-size="8.5" font-weight="bold" text-anchor="middle">CONCEALED // CP</text>
                        </g>

                        <g id="swatch-tile-4" transform="translate(438, 145)">
                          <rect x="0" y="0" width="105" height="105" fill="#000" stroke="#FFF" stroke-width="2" />
                          <text id="swatch-lbl-4" x="52" y="93" fill="#FF2800" font-family="monospace" font-size="8.5" font-weight="bold" text-anchor="middle">APEX // ACRYLIC</text>
                        </g>
                      </g>
                    </svg>
                  </div>

                  <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-top: 0.8rem; border-top: 1px dashed var(--border-color); padding-top: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div>ASSEMBLY TIER: <span id="mat-spec-grade" style="color: #FFF; font-weight: 700;">STANDARD A-GRADE</span></div>
                    <div>RATE: <span id="mat-spec-rate" style="color: var(--nothing-red); font-weight: 700;">NPR 4,800 / SQ. FT.</span></div>
                  </div>
                </div>

              </div>

              <!-- STEP 4 -->
              <div class="wizard-slide" style="width: 20%; padding: 1.5rem; box-sizing: border-box; flex-shrink: 0;">
                <h3 style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: var(--nothing-red); text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 1px;">
                  4. MUNICIPAL PERMITS & SPECIAL MODULES
                </h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
                  Select official government permit clearances and category-specific planning modules.
                </p>

                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.5rem; display: flex; flex-direction: column; gap: 1.2rem; margin-bottom: 1.5rem;">
                  <label style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: var(--font-mono); font-size: 0.95rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 4px; padding: 1.2rem;">
                    <div>
                      <span style="font-weight: 700; color: #FFF;">📜 Naksha Pass / Municipality Approval Fee</span>
                      <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">KMC / Lalitpur municipal blueprint registration fee</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.8rem;">
                      <span style="color: var(--nothing-red); font-weight: 700; font-size: 1rem;">+NPR 60,000</span>
                      <input type="checkbox" id="chk-naksha" checked style="width: 22px; height: 22px; accent-color: var(--nothing-red);" />
                    </div>
                  </label>

                  <label style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: var(--font-mono); font-size: 0.95rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 4px; padding: 1.2rem;">
                    <div>
                      <span style="font-weight: 700; color: #FFF;">🧪 Geotechnical Soil Test & Structural Report</span>
                      <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">Mandatory borehole bearing test (NBC 105:2020 standard)</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.8rem;">
                      <span style="color: #FFF; font-weight: 700; font-size: 1rem;">+NPR 45,000</span>
                      <input type="checkbox" id="chk-soil" checked style="width: 22px; height: 22px; accent-color: var(--nothing-red);" />
                    </div>
                  </label>

                  <!-- OPTIONAL RESORT MASTER PLANNING MODULE -->
                  <div id="resort-masterplan-box" style="display: none; background: var(--bg-card); border: 1px solid var(--nothing-red); border-radius: 4px; padding: 1.2rem; margin-top: 0.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
                      <span style="font-family: var(--font-mono); color: var(--nothing-red); font-weight: 700; font-size: 0.95rem;">🏖️ RESORT MASTER PLANNING MODULE</span>
                      <input type="checkbox" id="chk-masterplan" style="width: 22px; height: 22px; accent-color: var(--nothing-red);" />
                    </div>

                    <div id="masterplan-controls" style="display: none; border-top: 1px dashed var(--border-color); padding-top: 0.8rem; margin-top: 0.8rem;">
                      <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.85rem; margin-bottom: 0.5rem;">
                        <span style="color: var(--text-muted);">TOTAL LAND AREA (ROPANIS):</span>
                        <span id="ropani-val-lbl" style="color: #FFF; font-weight: 700;">10 ROPANIS</span>
                      </div>
                      <input type="range" id="ropani-slider" class="brutal-slider" min="2" max="100" step="1" value="10" style="width: 100%; height: 14px; accent-color: var(--nothing-red);" />
                      <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: #888; margin-top: 0.4rem;">
                        <span>2 Ropanis</span>
                        <span>50 Ropanis</span>
                        <span>100 Ropanis</span>
                      </div>

                      <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 4px; padding: 0.8rem; margin-top: 0.8rem; font-family: var(--font-mono); font-size: 0.8rem;">
                        <div style="color: #FFF; font-weight: 700; margin-bottom: 0.4rem;">MASTER PLAN FEE BREAKDOWN:</div>
                        <div id="masterplan-fee-lbl" style="color: var(--nothing-red); font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem;">NPR 15.0 Lakhs (NPR 150,000 / Ropani)</div>
                        <div style="color: var(--text-muted); font-size: 0.75rem;">Includes Conceptual Architecture (60%), Site Services (20%), Landscape (10%), Site Infrastructure (10%).</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- EXPANDED DYNAMIC MUNICIPAL PERMIT GRAPHIC BOARD -->
                <div id="permit-stamp-container" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem; position: relative;">
                  <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
                    <span style="color: var(--nothing-red); font-weight: 700;">📜 MUNICIPAL PERMIT & ENGINEERING VERIFICATION BOARD</span>
                    <span style="background: var(--nothing-red); color: #FFF; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">NBC 105:2020 COMPLIANT</span>
                  </div>

                  <div style="width: 100%; height: 300px; position: relative; background: #000; border: 1px dashed var(--border-color); border-radius: 4px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <svg id="permit-stamp-svg" viewBox="0 0 520 260" style="width: 100%; height: 100%;">
                      <g transform="translate(20, 30)">
                        <rect x="0" y="0" width="230" height="200" fill="#0A0A0F" stroke="#FFF" stroke-width="2" />
                        <text x="15" y="30" fill="#FFF" font-family="monospace" font-size="11" font-weight="bold">KMC MUNICIPAL BLUEPRINT</text>
                        <rect x="20" y="48" width="190" height="130" fill="none" stroke="#FF2800" stroke-width="1.5" stroke-dasharray="4,4" />
                        <circle cx="115" cy="113" r="40" fill="none" stroke="#FF2800" stroke-width="2" />
                        <text x="115" y="108" fill="#FF2800" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">OFFICIAL SEAL</text>
                        <text x="115" y="123" fill="#FFF" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">APPROVED</text>
                      </g>
                      <g transform="translate(270, 30)">
                        <rect x="0" y="0" width="230" height="200" fill="#0A0A0F" stroke="#FFF" stroke-width="2" />
                        <text x="15" y="30" fill="#FFF" font-family="monospace" font-size="11" font-weight="bold">SOIL BEARING TEST REPORT</text>
                        <rect x="20" y="48" width="190" height="130" fill="none" stroke="#FF2800" stroke-width="1.5" stroke-dasharray="4,4" />
                        <circle cx="115" cy="113" r="40" fill="none" stroke="#FF2800" stroke-width="2" />
                        <text x="115" y="108" fill="#FF2800" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">GEOTECH OK</text>
                        <text x="115" y="123" fill="#FFF" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">150 KN/M²</text>
                      </g>
                    </svg>
                  </div>
                </div>

              </div>

              <!-- STEP 5 -->
              <div class="wizard-slide" style="width: 20%; padding: 1.5rem; box-sizing: border-box; flex-shrink: 0;">
                <h3 style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: var(--nothing-red); text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 1px;">
                  5. ESTIMATED BOQ COST BREAKDOWN
                </h3>
                
                <div id="cost-summary-card" class="receipt-card" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-card); padding: 1.8rem; margin-bottom: 1.8rem;">
                  <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed var(--border-color); padding-bottom: 1rem; margin-bottom: 1.2rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--nothing-red); font-weight: 700;">
                      KATHMANDU CONSTRUCTION BOQ SUMMARY
                    </div>
                    <div id="volume-badge-receipt" style="background: var(--nothing-red); color: #FFF; font-family: var(--font-mono); font-size: 0.7rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 4px;">
                      [VOLUME ECONOMY OF SCALE APPLIED]
                    </div>
                  </div>

                  <div style="margin-bottom: 1.5rem;">
                    <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);">ESTIMATED TOTAL BUDGET:</div>
                    <div id="summary-total-price" style="font-family: var(--font-mono); font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 700; color: var(--nothing-red); line-height: 1; margin: 0.2rem 0; letter-spacing: 1px;">
                      NPR 1.15 Crore
                    </div>
                    <div id="summary-price-exact" style="font-family: var(--font-mono); font-size: 0.85rem; color: #FFF; font-weight: 700;">
                      Exact: NPR 11,540,650
                    </div>
                  </div>

                  <div style="font-family: var(--font-mono); font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.6rem; border-top: 1px dashed var(--border-color); padding-top: 1rem; margin-bottom: 1.5rem;">
                    <div style="display: flex; justify-content: space-between;">
                      <span style="color: var(--text-muted);">Category:</span>
                      <span id="sum-category-title" style="color: #FFF; font-weight: 700;">RESIDENTIAL & MIXED-USE HOUSING</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                      <span style="color: var(--text-muted);">Built-up Area:</span>
                      <span id="sum-built-area" style="color: #FFF; font-weight: 700;">2,395.75 sq. ft. (2.5 Storeys)</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                      <span style="color: var(--text-muted);">Rate per sq. ft.:</span>
                      <span id="sum-rate-sqft" style="color: var(--nothing-red); font-weight: 700;">NPR 4,800 / sq. ft. (Standard)</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                      <span style="color: var(--text-muted);">Structural Execution:</span>
                      <span id="sum-struct-cost" style="color: #FFF; font-weight: 700;">NPR 11,499,600</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                      <span style="color: var(--text-muted);">Permits & Soil Test:</span>
                      <span id="sum-permit-cost" style="color: #FFF; font-weight: 700;">NPR 105,000</span>
                    </div>
                    <div id="row-resort-masterplan" style="display: none; justify-content: space-between;">
                      <span style="color: var(--text-muted);">Resort Master Planning:</span>
                      <span id="sum-masterplan-cost" style="color: var(--nothing-red); font-weight: 700;">NPR 15.0 Lakhs</span>
                    </div>
                  </div>

                  <!-- ACCORDION FOR DISCIPLINE ALLOCATION CHART -->
                  <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.2rem; margin-bottom: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;" id="btn-toggle-discipline-accordion">
                      <span style="font-family: var(--font-mono); font-size: 0.85rem; color: #FFF; font-weight: 700;">📊 ENGINEERING DISCIPLINE COST ALLOCATION</span>
                      <span id="accordion-arrow" style="font-size: 1rem; color: var(--nothing-red);">▲</span>
                    </div>

                    <div id="discipline-accordion-body" style="margin-top: 1rem; border-top: 1px dashed var(--border-color); padding-top: 1rem;">
                      <div id="discipline-list-container" style="display: flex; flex-direction: column; gap: 0.8rem; font-family: var(--font-mono); font-size: 0.8rem;">
                        <!-- Rendered dynamically -->
                      </div>
                    </div>
                  </div>

                  <button id="btn-print-boq" class="btn-brutal green" style="width: 100%; justify-content: center; font-size: 1rem; padding: 0.9rem; border-radius: 6px; background: var(--nothing-red); color: #FFF;">
                    🖨️ PRINT OFFICIAL BOQ RECEIPT
                  </button>
                </div>

                <!-- DYNAMIC RAW MATERIAL QUANTITY MATRIX -->
                <div id="material-quantity-container" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.5rem; position: relative;">
                  <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
                    <span style="color: var(--nothing-red); font-weight: 700;">📦 ESTIMATED RAW MATERIAL QUANTITY MATRIX</span>
                    <span style="background: var(--nothing-red); color: #FFF; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">NBC 105:2020 MATERIAL MATRIX</span>
                  </div>

                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem;">
                    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 4px; padding: 1rem;">
                      <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">CEMENT BAGS</div>
                      <div id="mat-cnt-cement" style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: #FFF; margin: 0.2rem 0;">~840 BAGS</div>
                      <div style="font-family: var(--font-mono); font-size: 0.65rem; color: #888;">OPC 43/53 GRADE</div>
                    </div>
                    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 4px; padding: 1rem;">
                      <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">STEEL REBAR</div>
                      <div id="mat-cnt-steel" style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: #FFF; margin: 0.2rem 0;">~8.4 TONS</div>
                      <div style="font-family: var(--font-mono); font-size: 0.65rem; color: #888;">TMT FE500D GRADE</div>
                    </div>
                    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 4px; padding: 1rem;">
                      <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">RED BRICKS / ACC</div>
                      <div id="mat-cnt-bricks" style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: #FFF; margin: 0.2rem 0;">~34,700 PCS</div>
                      <div style="font-family: var(--font-mono); font-size: 0.65rem; color: #888;">MACHINE-PRESSED</div>
                    </div>
                    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 4px; padding: 1rem;">
                      <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">SAND & AGGREGATE</div>
                      <div id="mat-cnt-sand" style="font-family: var(--font-mono); font-size: 1.4rem; font-weight: 700; color: #FFF; margin: 0.2rem 0;">~43 TRIPS</div>
                      <div style="font-family: var(--font-mono); font-size: 0.65rem; color: #888;">RIVER SAND & CRUSHED</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <!-- Bottom Control Bar -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; border-top: 1px dashed var(--border-color); padding-top: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <button id="wizard-prev-btn" class="btn-brutal white" style="font-size: 0.95rem; padding: 0.8rem 1.6rem; visibility: hidden; border-radius: 6px;">
              ⬅ PREVIOUS STEP
            </button>

            <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);">
              NAVIGATE STEPS OR TAP CAROUSEL / NUMBERS ABOVE
            </div>

            <button id="wizard-next-btn" class="btn-brutal yellow" style="font-size: 0.95rem; padding: 0.8rem 1.6rem; border-radius: 6px; background: var(--nothing-red); color: #FFF;">
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

  // Resort Master Plan Elements
  const resortBox = document.getElementById('resort-masterplan-box');
  const chkMasterPlan = document.getElementById('chk-masterplan');
  const masterPlanControls = document.getElementById('masterplan-controls');
  const ropaniSlider = document.getElementById('ropani-slider');
  const ropaniValLbl = document.getElementById('ropani-val-lbl');
  const masterPlanFeeLbl = document.getElementById('masterplan-fee-lbl');
  const rowResortMasterPlan = document.getElementById('row-resort-masterplan');
  const sumMasterPlanCost = document.getElementById('sum-masterplan-cost');

  // Category Carousel Elements
  const catCards = document.querySelectorAll('.building-cat-card');
  const carouselTrackContainer = document.getElementById('cat-carousel-track-container');
  const carouselPrevBtn = document.getElementById('cat-carousel-prev');
  const carouselNextBtn = document.getElementById('cat-carousel-next');

  const catTitleStep1 = document.getElementById('cat-title-step1');
  const catTitleStep2 = document.getElementById('cat-title-step2');
  const sumCategoryTitle = document.getElementById('sum-category-title');

  // Summary Elements
  const sumTotal = document.getElementById('summary-total-price');
  const sumExact = document.getElementById('summary-price-exact');
  const sumBuilt = document.getElementById('sum-built-area');
  const sumRate = document.getElementById('sum-rate-sqft');
  const sumStruct = document.getElementById('sum-struct-cost');
  const sumPermit = document.getElementById('sum-permit-cost');
  const printBtn = document.getElementById('btn-print-boq');
  const volumeBadgeReceipt = document.getElementById('volume-badge-receipt');

  const scaleTierName = document.getElementById('scale-tier-name');
  const scaleTierDiscount = document.getElementById('scale-tier-discount');

  // Discipline Accordion
  const btnToggleAccordion = document.getElementById('btn-toggle-discipline-accordion');
  const accordionBody = document.getElementById('discipline-accordion-body');
  const accordionArrow = document.getElementById('accordion-arrow');
  const disciplineListContainer = document.getElementById('discipline-list-container');

  // Rate Labels Step 3
  const rateLblBasic = document.getElementById('rate-lbl-basic');
  const rateLblStandard = document.getElementById('rate-lbl-standard');
  const rateLblPremium = document.getElementById('rate-lbl-premium');

  // Carousel Wizard Elements
  const track = document.querySelector('.wizard-carousel-track');
  const stepBadge = document.getElementById('wizard-step-badge');
  const percentBadge = document.getElementById('wizard-percent-badge');
  const progressFill = document.getElementById('wizard-progress-fill');
  const prevBtn = document.getElementById('wizard-prev-btn');
  const nextBtn = document.getElementById('wizard-next-btn');
  const stepNavBtns = document.querySelectorAll('.wiz-step-btn');

  let activeCategory = BUILDING_CATEGORIES[0];
  let activeStorey = 2.5;
  let activeTierKey = 'standard';
  let currentStep = 1;
  const totalSteps = 5;
  let isAccordionOpen = true;

  const stepNames = [
    "LAND & BUILT-UP AREA",
    "STOREYS",
    "FINISH TIER",
    "PERMITS & MODULES",
    "BOQ SUMMARY"
  ];

  // Accordion Toggle
  if (btnToggleAccordion) {
    btnToggleAccordion.addEventListener('click', () => {
      isAccordionOpen = !isAccordionOpen;
      if (accordionBody) accordionBody.style.display = isAccordionOpen ? 'block' : 'none';
      if (accordionArrow) accordionArrow.textContent = isAccordionOpen ? '▲' : '▼';
    });
  }

  // Category Carousel Scrolling
  if (carouselPrevBtn && carouselTrackContainer) {
    carouselPrevBtn.addEventListener('click', () => {
      carouselTrackContainer.scrollBy({ left: -240, behavior: 'smooth' });
    });
  }
  if (carouselNextBtn && carouselTrackContainer) {
    carouselNextBtn.addEventListener('click', () => {
      carouselTrackContainer.scrollBy({ left: 240, behavior: 'smooth' });
    });
  }

  // Category Card Selection
  catCards.forEach(card => {
    card.addEventListener('click', () => {
      const catId = card.getAttribute('data-cat-id');
      const found = BUILDING_CATEGORIES.find(c => c.id === catId);
      if (found) {
        activeCategory = found;
        
        catCards.forEach(c => {
          c.classList.remove('active');
          c.style.background = 'var(--bg-surface)';
          c.style.color = '#FFF';
        });

        card.classList.add('active');
        card.style.background = 'var(--nothing-red)';
        card.style.color = '#FFF';

        // Update category title displays
        if (catTitleStep1) catTitleStep1.textContent = activeCategory.title;
        if (catTitleStep2) catTitleStep2.textContent = activeCategory.title;
        if (sumCategoryTitle) sumCategoryTitle.textContent = activeCategory.title;

        // Toggle Resort Master Plan box visibility
        if (resortBox) {
          resortBox.style.display = activeCategory.hasMasterPlanModule ? 'block' : 'none';
        }

        // Update finish rates in Step 3
        const rates = activeCategory.defaultRates;
        if (rateLblBasic) rateLblBasic.textContent = `NPR ${rates.basic.toLocaleString()} / SQ. FT.`;
        if (rateLblStandard) rateLblStandard.textContent = `NPR ${rates.standard.toLocaleString()} / SQ. FT.`;
        if (rateLblPremium) rateLblPremium.textContent = `NPR ${rates.premium.toLocaleString()} / SQ. FT.`;

        calculateCosts();
      }
    });
  });

  // Resort Master Plan Checkbox & Slider
  if (chkMasterPlan) {
    chkMasterPlan.addEventListener('change', () => {
      if (masterPlanControls) masterPlanControls.style.display = chkMasterPlan.checked ? 'block' : 'none';
      if (rowResortMasterPlan) rowResortMasterPlan.style.display = chkMasterPlan.checked ? 'flex' : 'none';
      calculateCosts();
    });
  }

  if (ropaniSlider) {
    ropaniSlider.addEventListener('input', calculateCosts);
  }

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

    if (badge) badge.textContent = data.tierBadge;
    if (grade) grade.textContent = data.grade;
    
    const baseRates = activeCategory.defaultRates;
    const currentRate = baseRates[tierKey] || baseRates.standard;
    if (rate) rate.textContent = `NPR ${currentRate.toLocaleString()} / SQ. FT.`;

    if (cutFloor) {
      cutFloor.setAttribute('fill', data.floorPattern);
      cutFloor.setAttribute('stroke', data.floorStroke);
    }
    if (cutWall) cutWall.setAttribute('fill', data.wallFill);
    if (cutWin) cutWin.setAttribute('stroke', data.winFrameStroke);

    if (bg1) bg1.setAttribute('fill', data.floorPattern);

    if (lbl1) { lbl1.textContent = data.swatchLbl1; lbl1.setAttribute('fill', data.swatchLbl1Color); }
    if (lbl2) { lbl2.textContent = data.swatchLbl2; lbl2.setAttribute('fill', data.swatchLbl2Color); }
    if (lbl3) { lbl3.textContent = data.swatchLbl3; lbl3.setAttribute('fill', data.swatchLbl3Color); }
    if (lbl4) { lbl4.textContent = data.swatchLbl4; lbl4.setAttribute('fill', data.swatchLbl4Color); }

    const svgCanvas = document.getElementById('mat-assembly-svg');
    if (window.gsap && svgCanvas) {
      window.gsap.fromTo(svgCanvas, { opacity: 0.4, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
    }
  }

  function calculateCosts() {
    if (!slider) return;

    const aana = parseFloat(slider.value);
    const totalLandSqft = aana * AANA_TO_SQFT;
    const groundCoverageSqft = totalLandSqft * GROUND_COVERAGE_RATIO;
    const totalBuiltUpSqft = groundCoverageSqft * activeStorey;

    // Determine baseline rate from active category and finish tier
    const baseRates = activeCategory.defaultRates;
    let baseRate = baseRates[activeTierKey] || baseRates.standard;

    // Determine scale tier discount
    let appliedDiscountPct = 0;
    let activeScaleTierName = activeCategory.scaleTiers[0].name;

    for (let tier of activeCategory.scaleTiers) {
      if (totalBuiltUpSqft > (tier.limitSqft === Infinity ? 0 : 0)) {
        if (totalBuiltUpSqft > tier.limitSqft) continue;
        appliedDiscountPct = tier.discountPct;
        activeScaleTierName = tier.name;
        break;
      }
    }

    if (totalBuiltUpSqft > activeCategory.scaleTiers[activeCategory.scaleTiers.length - 1].limitSqft) {
      const lastTier = activeCategory.scaleTiers[activeCategory.scaleTiers.length - 1];
      appliedDiscountPct = lastTier.discountPct;
      activeScaleTierName = lastTier.name;
    }

    // Apply volume economy discount
    const effectiveRatePerSqft = baseRate * (1 - appliedDiscountPct / 100);
    const structuralCost = totalBuiltUpSqft * effectiveRatePerSqft;

    // Permits
    let nakshaOn = chkNaksha && chkNaksha.checked;
    let soilOn = chkSoil && chkSoil.checked;

    let permitCost = 0;
    if (nakshaOn) permitCost += 60000;
    if (soilOn) permitCost += 45000;

    // Resort Master Planning Fee Calculation
    let masterPlanFee = 0;
    if (activeCategory.hasMasterPlanModule && chkMasterPlan && chkMasterPlan.checked && ropaniSlider) {
      const ropanis = parseFloat(ropaniSlider.value);
      if (ropaniValLbl) ropaniValLbl.textContent = `${ropanis} ROPANIS (${Math.round(ropanis * ROPANI_TO_SQFT).toLocaleString()} SQ. FT.)`;

      let ratePerRopani = 150000;
      if (ropanis <= 20) ratePerRopani = 150000;
      else if (ropanis <= 50) ratePerRopani = 120000;
      else ratePerRopani = 95000;

      masterPlanFee = ropanis * ratePerRopani;
      const feeLakhs = masterPlanFee / 100000;
      if (masterPlanFeeLbl) {
        masterPlanFeeLbl.textContent = `NPR ${feeLakhs.toFixed(1)} Lakhs (NPR ${ratePerRopani.toLocaleString()} / Ropani)`;
      }
      if (sumMasterPlanCost) sumMasterPlanCost.textContent = `NPR ${feeLakhs.toFixed(1)} Lakhs`;
    }

    const totalEstimate = structuralCost + permitCost + masterPlanFee;

    // Formatters
    const crores = totalEstimate / 10000000;
    const lakhs = totalEstimate / 100000;
    let formattedShort = crores >= 1 ? `NPR ${crores.toFixed(2)} Crore` : `NPR ${lakhs.toFixed(2)} Lakhs`;

    if (aanaValDisplay) {
      aanaValDisplay.textContent = `${aana.toFixed(1)} AANA (${Math.round(totalLandSqft).toLocaleString()} SQ. FT.)`;
    }

    if (scaleTierName) scaleTierName.textContent = activeScaleTierName;
    if (scaleTierDiscount) {
      if (appliedDiscountPct > 0) {
        scaleTierDiscount.textContent = `${appliedDiscountPct}% VOLUME ECONOMY DISCOUNT APPLIED`;
        scaleTierDiscount.style.background = 'var(--nothing-red)';
        scaleTierDiscount.style.color = '#FFF';
      } else {
        scaleTierDiscount.textContent = `STANDARD BASE RATE`;
        scaleTierDiscount.style.background = 'var(--bg-card)';
        scaleTierDiscount.style.color = '#FFF';
      }
    }

    if (volumeBadgeReceipt) {
      if (appliedDiscountPct > 0) {
        volumeBadgeReceipt.textContent = `[${appliedDiscountPct}% VOLUME ECONOMY OF SCALE APPLIED]`;
        volumeBadgeReceipt.style.background = 'var(--nothing-red)';
      } else {
        volumeBadgeReceipt.textContent = `[STANDARD VOLUME SCALE]`;
        volumeBadgeReceipt.style.background = 'var(--bg-card)';
      }
    }

    if (sumTotal) sumTotal.textContent = formattedShort;
    if (sumExact) sumExact.textContent = `Exact: NPR ${Math.round(totalEstimate).toLocaleString()}`;
    if (sumBuilt) sumBuilt.textContent = `${Math.round(totalBuiltUpSqft).toLocaleString()} sq. ft. (${activeStorey} Storeys)`;
    if (sumRate) sumRate.textContent = `NPR ${Math.round(effectiveRatePerSqft).toLocaleString()} / sq. ft. (${activeTierKey.toUpperCase()})`;
    if (sumStruct) sumStruct.textContent = `NPR ${Math.round(structuralCost).toLocaleString()}`;
    if (sumPermit) sumPermit.textContent = `NPR ${permitCost.toLocaleString()}`;

    // Render Engineering Discipline Allocation List
    if (disciplineListContainer) {
      disciplineListContainer.innerHTML = activeCategory.disciplines.map(d => {
        const dCost = structuralCost * (d.pct / 100);
        const dLakhs = dCost / 100000;
        return `
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.2rem;">
              <span style="color: ${d.color}; font-weight: 700;">■ ${d.name} (${d.pct}%)</span>
              <span style="color: #FFF; font-weight: 700;">NPR ${dLakhs.toFixed(1)} Lakhs</span>
            </div>
            <div style="width: 100%; height: 6px; background: #222; border-radius: 3px; overflow: hidden;">
              <div style="width: ${d.pct}%; height: 100%; background: ${d.color};"></div>
            </div>
          </div>
        `;
      }).join('');
    }

    // Material Quantities
    const cntCement = document.getElementById('mat-cnt-cement');
    const cntSteel = document.getElementById('mat-cnt-steel');
    const cntBricks = document.getElementById('mat-cnt-bricks');
    const cntSand = document.getElementById('mat-cnt-sand');

    const targetCement = Math.round(totalBuiltUpSqft * 0.35);
    const targetSteel = (totalBuiltUpSqft * 0.0035).toFixed(1);
    const targetBricks = Math.round(totalBuiltUpSqft * 14.5);
    const targetSand = Math.round(totalBuiltUpSqft * 0.018);

    if (cntCement) cntCement.textContent = `~${targetCement.toLocaleString()} BAGS`;
    if (cntSteel) cntSteel.textContent = `~${targetSteel} TONS`;
    if (cntBricks) cntBricks.textContent = `~${targetBricks.toLocaleString()} PCS`;
    if (cntSand) cntSand.textContent = `~${targetSand} TRIPS`;

    // SVG Graphics
    updatePlotGraphic(aana);
    updateElevationGraphic(activeStorey);
    updateMaterialSpecGraphic(activeTierKey);
  }

  function updatePlotGraphic(aana) {
    const plotSqft = aana * AANA_TO_SQFT;
    const sideFt = Math.sqrt(plotSqft);
    const groundSqft = plotSqft * GROUND_COVERAGE_RATIO;

    const minWidth = 220;
    const maxWidth = 420;
    const minHeight = 130;
    const maxHeight = 220;

    const scaleRatio = Math.min(1, (aana - 2) / (25 - 2));
    const rectW = minWidth + (maxWidth - minWidth) * scaleRatio;
    const rectH = minHeight + (maxHeight - minHeight) * scaleRatio;
    const rectX = 250 - rectW / 2;
    const rectY = 140 - rectH / 2;

    const setX = rectX + 16;
    const setY = rectY + 14;
    const setW = rectW - 32;
    const setH = rectH - 28;

    const bldX = rectX + 28;
    const bldY = rectY + 24;
    const bldW = rectW - 56;
    const bldH = rectH - 48;

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
      dimH.setAttribute('x', Math.min(470, rectX + rectW + 15));
      dimH.setAttribute('y', rectY + rectH / 2 + 4);
    }

    if (footTxt) footTxt.setAttribute('y', rectY + rectH / 2 - 8);
    if (sqftTxt) {
      sqftTxt.textContent = `${Math.round(groundSqft).toLocaleString()} SQ. FT. GROUND COVERAGE`;
      sqftTxt.setAttribute('y', rectY + rectH / 2 + 14);
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
    let topY = 200;

    let l1Op = 1, l2Op = 0, l25Op = 0, l3Op = 0;
    let typeLabel = `${storey} STOREYS (${activeCategory.title})`;

    if (storey === 1) {
      l1Op = 1; l2Op = 0; l25Op = 0; l3Op = 0;
      totalHeightFt = 10.0;
      topY = 200;
    } else if (storey === 2) {
      l1Op = 1; l2Op = 1; l25Op = 0; l3Op = 0;
      totalHeightFt = 20.0;
      topY = 135;
    } else if (storey === 2.5) {
      l1Op = 1; l2Op = 1; l25Op = 1; l3Op = 0;
      totalHeightFt = 28.5;
      topY = 90;
    } else if (storey === 3) {
      l1Op = 1; l2Op = 1; l25Op = 0; l3Op = 1;
      totalHeightFt = 30.0;
      topY = 70;
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

    if (heightTxt) heightTxt.textContent = `${totalHeightFt.toFixed(1)} FT HEIGHT`;
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
        nextBtn.classList.remove('yellow');
        nextBtn.classList.add('green');
      } else {
        nextBtn.textContent = 'NEXT STEP ➔';
        nextBtn.classList.remove('green');
        nextBtn.classList.add('yellow');
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
          dot.style.background = '#FFF';
          dot.style.color = '#000';
        }
      } else {
        btn.style.color = '#666';
        btn.classList.remove('active');
        if (dot) {
          dot.style.background = '#333';
          dot.style.color = '#FFF';
        }
      }
    });

    calculateCosts();
  }

  // Event Handlers
  if (slider) slider.addEventListener('input', calculateCosts);

  storeyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      storeyBtns.forEach(b => {
        b.classList.remove('active');
        b.style.background = 'var(--bg-surface)';
        b.style.color = '#FFF';
      });
      btn.classList.add('active');
      btn.style.background = 'var(--nothing-red)';
      btn.style.color = '#FFF';
      activeStorey = parseFloat(btn.getAttribute('data-storey'));
      calculateCosts();
    });
  });

  tierBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tierBtns.forEach(b => {
        b.classList.remove('active');
        b.style.background = 'var(--bg-surface)';
        b.style.color = '#FFF';
        b.style.borderColor = 'var(--border-color)';
        const sub = b.querySelector('div > div:nth-child(2)');
        if (sub) sub.style.color = 'var(--text-muted)';
        const rate = b.querySelector('span[id^="rate-lbl"]');
        if (rate) rate.style.color = 'var(--nothing-red)';
      });

      btn.classList.add('active');
      activeTierKey = btn.getAttribute('data-tier');
      btn.style.background = 'var(--nothing-red)';
      btn.style.color = '#FFF';
      btn.style.borderColor = 'var(--nothing-red)';

      const sub = btn.querySelector('div > div:nth-child(2)');
      if (sub) sub.style.color = '#FFF';
      const rate = btn.querySelector('span[id^="rate-lbl"]');
      if (rate) rate.style.color = '#FFF';

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
