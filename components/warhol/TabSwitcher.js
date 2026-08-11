/**
 * SCOPE Web Application - TabSwitcher Component
 * Tab 1: Kathmandu Valley Construction Cost Calculator
 * Tab 2: Legal & Permit Compliance Hub (Checklist, Readiness Score, Road Width Bylaws Checker, 3-Stage Approval Timeline, FAQ Accordion)
 */

// Kathmandu Valley Construction Formula Constants
const AANA_TO_SQFT = 342.25;
const FINISH_RATES = {
  basic: 3800,
  standard: 4800,
  premium: 6800
};

function formatNprLakhsCrores(nprAmount) {
  const crores = nprAmount / 10000000;
  const lakhs = nprAmount / 100000;

  if (crores >= 1) {
    return `NPR ${crores.toFixed(2)} Crore`;
  } else {
    return `NPR ${lakhs.toFixed(2)} Lakhs`;
  }
}

export function renderTabSwitcher() {
  return `
    <section class="tab-switcher-section" id="tab-switcher-section">
      <div class="container">
        
        <!-- Persistent Tab Bar Header -->
        <div class="tab-nav-bar">
          <button class="scope-tab-btn active" data-tab="estimate" id="tab-btn-estimate">
            <span class="tab-badge">01</span>
            <span class="tab-title">COST ESTIMATOR (KTM VALLEY)</span>
          </button>
          
          <button class="scope-tab-btn" data-tab="legal" id="tab-btn-legal">
            <span class="tab-badge">02</span>
            <span class="tab-title">PERMIT & LEGAL HUB</span>
          </button>
        </div>

        <!-- Tab Views Wrapper -->
        <div class="tab-views-container">
          
          <!-- TAB 1: KATHMANDU VALLEY CONSTRUCTION COST ESTIMATOR -->
          <div class="tab-content-view active-view" id="view-estimate">
            <div class="estimator-grid">
              
              <!-- Estimator Inputs Column -->
              <div class="estimator-form-box">
                <div style="border-bottom: var(--border-thick); padding-bottom: 1rem; margin-bottom: 1rem;">
                  <span class="mono-badge yellow">KATHMANDU VALLEY EDITION</span>
                  <h3 style="margin-top: 0.5rem; font-size: 1.8rem; line-height: 1.1;">CONSTRUCTION COST CALCULATOR</h3>
                  <p style="font-size: 0.95rem; color: var(--color-mid-gray);">Estimate residential building construction costs across Kathmandu, Lalitpur & Bhaktapur.</p>
                </div>

                <!-- 1. Land Area Slider (Aana) -->
                <div class="control-group">
                  <label class="control-label">
                    <span>1. Land Area (Aana)</span>
                    <span class="mono-meta" id="land-aana-display">4.0 Aana (1,369 sq. ft.)</span>
                  </label>
                  <input type="range" class="range-slider" id="land-aana-slider" min="2" max="10" value="4" step="0.25">
                  <span class="mono-meta" style="font-size: 0.7rem; color: var(--color-mid-gray);">1 Aana = 342.25 sq. ft.</span>
                </div>

                <!-- 2. Storeys Selector -->
                <div class="control-group">
                  <label class="control-label">
                    <span>2. Number of Storeys</span>
                    <span class="mono-meta" id="storeys-label">2.5 Storeys</span>
                  </label>
                  <div class="presets-row" id="storeys-btn-group">
                    <button class="preset-btn" data-storeys="1">1 Storey</button>
                    <button class="preset-btn" data-storeys="2">2 Storeys</button>
                    <button class="preset-btn active" data-storeys="2.5">2.5 Storeys</button>
                    <button class="preset-btn" data-storeys="3">3 Storeys</button>
                  </div>
                </div>

                <!-- 3. Finish Quality Tier -->
                <div class="control-group">
                  <label class="control-label">
                    <span>3. Finish Quality Tier</span>
                  </label>
                  <div class="presets-row" id="finish-btn-group">
                    <button class="preset-btn" data-finish="basic">Basic (NPR 3,800/sqft)</button>
                    <button class="preset-btn active" data-finish="standard">Standard (NPR 4,800/sqft)</button>
                    <button class="preset-btn" data-finish="premium">Premium (NPR 6,800/sqft)</button>
                  </div>
                </div>

                <!-- 4. Optional Permit Checkboxes -->
                <div class="control-group" style="background: var(--bg-cream-alt); border: var(--border-thin); padding: 1rem;">
                  <label class="control-label" style="margin-bottom: 0.5rem;">
                    <span>4. Optional Permits & Reports</span>
                  </label>
                  
                  <label style="display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.85rem; cursor: pointer; margin-bottom: 0.5rem;">
                    <input type="checkbox" id="chk-naksha" checked style="width: 18px; height: 18px; accent-color: var(--color-black);">
                    <span>Naksha Pass / Municipality Fee (NPR 60,000)</span>
                  </label>

                  <label style="display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.85rem; cursor: pointer;">
                    <input type="checkbox" id="chk-soil" checked style="width: 18px; height: 18px; accent-color: var(--color-black);">
                    <span>Soil Test & Structural Report (NPR 45,000)</span>
                  </label>
                </div>
              </div>

              <!-- Estimator Sticker Receipt Output -->
              <div class="estimator-result-box">
                <div class="pop-sticker-receipt" id="sticker-receipt">
                  
                  <!-- Receipt Header -->
                  <div class="receipt-header">
                    <span class="mono-badge pink">OFFICIAL ESTIMATE STICKER</span>
                    <span class="mono-meta" style="font-size: 0.7rem; font-weight: 700;">NO. KTM-2026-VAL</span>
                  </div>

                  <!-- Real-time Cost Display (Lakhs & Crores) -->
                  <div class="receipt-headline-wrap">
                    <span class="mono-meta" style="color: var(--color-mid-gray); font-weight: 700;">TOTAL ESTIMATED COST</span>
                    <div class="receipt-price-lakhs" id="receipt-lakhs-crores">NPR 1.64 Crore</div>
                    <div class="receipt-exact-npr" id="receipt-exact-npr">NPR 16,473,000 Exact</div>
                  </div>

                  <!-- Breakdown Table -->
                  <div class="line-items-table" style="margin-top: 1.25rem;">
                    <div class="line-item-row">
                      <span>Land Area</span>
                      <strong id="rec-land-area">4.0 Aana</strong>
                    </div>
                    <div class="line-item-row">
                      <span>Total Built Area</span>
                      <strong id="rec-built-area">3,422.5 Sq. Ft.</strong>
                    </div>
                    <div class="line-item-row">
                      <span>Finish Rate</span>
                      <strong id="rec-finish-rate">NPR 4,800 / sqft</strong>
                    </div>
                    <div class="line-item-row">
                      <span>Base Structure</span>
                      <strong id="rec-base-cost">NPR 1.64 Crore</strong>
                    </div>
                    <div class="line-item-row">
                      <span>Permits & Fees</span>
                      <strong id="rec-permit-cost">NPR 105,000</strong>
                    </div>
                    <div class="line-item-row total-row" style="background: var(--cmyk-yellow); padding: 0.5rem; border: var(--border-thin);">
                      <span>GRAND TOTAL</span>
                      <strong id="rec-grand-total">NPR 1.64 Crore</strong>
                    </div>
                  </div>

                  <!-- Barcode Graphic -->
                  <div class="receipt-barcode">
                    <div class="barcode-lines">||| | |||| ||| || |||| | ||||| ||| ||| |||</div>
                    <span class="mono-meta" style="font-size: 0.65rem;">KATHMANDU • LALITPUR • BHAKTAPUR VERIFIED</span>
                  </div>

                  <!-- CTA Button -->
                  <button class="pop-button yellow" id="download-boq-btn" style="width: 100%; margin-top: 1.25rem; font-size: 0.9rem;">
                    📥 Download Detailed BOQ Receipt
                  </button>

                </div>
              </div>

            </div>
          </div>

          <!-- TAB 2: LEGAL & PERMIT COMPLIANCE HUB -->
          <div class="tab-content-view" id="view-legal">
            
            <div style="margin-bottom: 2rem;">
              <span class="mono-badge cyan">KATHMANDU METROPOLITAN COMPLIANCE</span>
              <h2 style="margin-top: 0.5rem; font-size: 2.75rem;">PERMIT & LEGAL COMPLIANCE HUB</h2>
              <p style="font-size: 1.05rem; color: var(--color-mid-gray); max-width: 680px;">
                Verify Naksha Pass document readiness, check road width building height bylaws, and track municipal permit stage milestones.
              </p>
            </div>

            <!-- Top Grid: Document Checklist & Road Width Checker -->
            <div class="legal-top-grid">
              
              <!-- 1. Interactive Document Checklist -->
              <div class="legal-panel-box">
                <div class="panel-header-row">
                  <div>
                    <span class="mono-badge yellow">DOCUMENT CHECKLIST</span>
                    <h3 style="font-size: 1.4rem; margin-top: 0.25rem;">NAKSHA PASS MANDATORY DOCUMENTS</h3>
                  </div>
                  <!-- Permit Readiness Score Badge -->
                  <div class="readiness-score-badge" id="readiness-score-box">
                    <span class="mono-meta" style="font-size: 0.65rem;">READINESS SCORE</span>
                    <div class="score-percent" id="score-percent-val">0%</div>
                  </div>
                </div>

                <!-- Score Progress Bar -->
                <div class="score-progress-bar-wrap">
                  <div class="score-progress-fill" id="score-progress-bar" style="width: 0%;"></div>
                </div>

                <div class="checklist-items-list" id="doc-checklist">
                  
                  <label class="doc-chk-item">
                    <input type="checkbox" class="doc-checkbox" data-doc="lalpurja">
                    <span class="chk-custom"></span>
                    <div>
                      <div class="doc-name">1. Lalpurja (Land Ownership Certificate)</div>
                      <div class="doc-sub">Certified copy issued by Malpot Office</div>
                    </div>
                  </label>

                  <label class="doc-chk-item">
                    <input type="checkbox" class="doc-checkbox" data-doc="nagrikta">
                    <span class="chk-custom"></span>
                    <div>
                      <div class="doc-name">2. Nagrikta (Citizenship Certificate Copy)</div>
                      <div class="doc-sub">Landowner citizenship verification document</div>
                    </div>
                  </label>

                  <label class="doc-chk-item">
                    <input type="checkbox" class="doc-checkbox" data-doc="malpot">
                    <span class="chk-custom"></span>
                    <div>
                      <div class="doc-name">3. Malpot Tax Clearance Receipt</div>
                      <div class="doc-sub">Current fiscal year municipal property tax receipt</div>
                    </div>
                  </label>

                  <label class="doc-chk-item">
                    <input type="checkbox" class="doc-checkbox" data-doc="napi">
                    <span class="chk-custom"></span>
                    <div>
                      <div class="doc-name">4. Char-Killa Napi Trace Map</div>
                      <div class="doc-sub">Official survey map & four-boundary verification</div>
                    </div>
                  </label>

                  <label class="doc-chk-item">
                    <input type="checkbox" class="doc-checkbox" data-doc="blueprint">
                    <span class="chk-custom"></span>
                    <div>
                      <div class="doc-name">5. Structural & Architectural Blueprint</div>
                      <div class="doc-sub">NEA Er. Signed drawing under NBC 105:2020 seismic code</div>
                    </div>
                  </label>

                </div>

                <div class="readiness-status-footer">
                  <span class="mono-meta" id="readiness-status-text">STATUS: INCOMPLETE (0/5 REQUIRED DOCUMENTS)</span>
                </div>
              </div>

              <!-- 2. Road Width Bylaws Checker -->
              <div class="legal-panel-box">
                <div style="border-bottom: var(--border-thin); padding-bottom: 0.75rem; margin-bottom: 1.25rem;">
                  <span class="mono-badge pink">KMC BYLAWS CHECKER</span>
                  <h3 style="font-size: 1.4rem; margin-top: 0.25rem;">BYLAWS CALCULATOR</h3>
                  <p style="font-size: 0.85rem; color: var(--color-mid-gray);">Check maximum allowed storeys & setbacks based on Kathmandu road width.</p>
                </div>

                <!-- Input for Road Width -->
                <div class="control-group" style="margin-bottom: 1.25rem;">
                  <label class="control-label">
                    <span>Adjoining Road Width (Meters / Feet)</span>
                    <span class="mono-meta" id="road-width-val-display">4.5 Meters (14.8 ft)</span>
                  </label>
                  <input type="range" class="range-slider" id="road-width-slider" min="2.0" max="10.0" value="4.5" step="0.5">
                  <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                    <input type="number" id="road-width-num-input" class="footer-input" value="4.5" step="0.1" min="1.5" max="25" style="width: 130px; font-weight: 700;">
                    <span class="mono-meta" style="align-self: center;">Meters</span>
                  </div>
                </div>

                <!-- Output Bylaw Result Box -->
                <div class="bylaw-result-card" id="bylaw-result-card">
                  
                  <div class="bylaw-row">
                    <span class="mono-meta">MAX PERMITTED STOREYS</span>
                    <strong class="bylaw-val" id="bylaw-max-storeys">2.5 Storeys</strong>
                  </div>

                  <div class="bylaw-row">
                    <span class="mono-meta">MAX BUILDING HEIGHT</span>
                    <strong class="bylaw-val" id="bylaw-max-height">35 Ft (10.67 m)</strong>
                  </div>

                  <div class="bylaw-row">
                    <span class="mono-meta">MINIMUM SETBACK FROM ROAD</span>
                    <strong class="bylaw-val" id="bylaw-min-setback">1.5 Meters (5.0 ft)</strong>
                  </div>

                  <div class="bylaw-row">
                    <span class="mono-meta">RIGHT OF WAY CLEARANCE</span>
                    <strong class="bylaw-val" id="bylaw-row-clearance">3.0m Total Row</strong>
                  </div>

                </div>

                <div style="margin-top: 1rem; background: var(--cmyk-yellow-soft); border: var(--border-thin); padding: 0.75rem;">
                  <span class="mono-meta" style="font-size: 0.75rem; font-weight: 700;" id="bylaw-summary-text">
                    ★ Compliant for standard 2.5 Storey Residential Construction in KMC/LMC.
                  </span>
                </div>
              </div>

            </div>

            <!-- 3. Approval Timeline Tracker -->
            <div class="legal-panel-box" style="margin-top: 2.5rem;">
              <div style="margin-bottom: 1.5rem;">
                <span class="mono-badge cyan">MUNICIPAL PROCESS</span>
                <h3 style="font-size: 1.6rem; margin-top: 0.25rem;">3-STAGE PERMIT APPROVAL TIMELINE</h3>
                <p style="font-size: 0.9rem; color: var(--color-mid-gray);">Official sequential stages required for legal residential occupancy in Nepal.</p>
              </div>

              <div class="approval-timeline-grid">
                
                <!-- Stage 1 -->
                <div class="timeline-step-card active-step">
                  <div class="step-num-badge">STAGE 01</div>
                  <h4>ĀSTHĀĪ IJĀJAT (PLINTH PERMIT)</h4>
                  <p>Initial drawing submission & Ward registration. Authorizes site excavation & foundation construction up to Plinth Level (DPC).</p>
                  <div class="step-footer-meta">
                    <span class="mono-meta">DURATION: 7 - 14 DAYS</span>
                  </div>
                </div>

                <!-- Stage 2 -->
                <div class="timeline-step-card">
                  <div class="step-num-badge">STAGE 02</div>
                  <h4>STHĀĪ IJĀJAT (PERMANENT PERMIT)</h4>
                  <p>Municipal engineer field site verification of plinth beam setbacks. Grants full permission for superstructure framing & slab casting.</p>
                  <div class="step-footer-meta">
                    <span class="mono-meta">DURATION: 15 - 30 DAYS</span>
                  </div>
                </div>

                <!-- Stage 3 -->
                <div class="timeline-step-card">
                  <div class="step-num-badge">STAGE 03</div>
                  <h4>NIRMĀṆA SAMPANNA (COMPLETION CERT)</h4>
                  <p>Final building inspection verifying completion against approved drawings. Issues official utility connection permit (Electricity & Water).</p>
                  <div class="step-footer-meta">
                    <span class="mono-meta">DURATION: 10 - 20 DAYS</span>
                  </div>
                </div>

              </div>
            </div>

            <!-- 4. Legal & Bylaws Accordion Panel FAQs -->
            <div class="legal-panel-box" style="margin-top: 2.5rem;">
              <div style="margin-bottom: 1.5rem;">
                <span class="mono-badge yellow">KNOW YOUR RIGHTS</span>
                <h3 style="font-size: 1.6rem; margin-top: 0.25rem;">LEGAL & BYLAWS ACCORDION FAQs</h3>
              </div>

              <div class="faq-accordion-list">
                
                <div class="accordion-item">
                  <button class="accordion-header" aria-expanded="false">
                    <span>What is the minimum setback required from property boundary lines in Kathmandu?</span>
                    <span class="accordion-icon">+</span>
                  </button>
                  <div class="accordion-body">
                    <p>Under Kathmandu Metropolitan City (KMC) Building Bylaws 2075, a minimum setback of 1.5 meters (5 feet) is mandatory from neighboring property lines for windows and openings. If building a dead wall without openings, a reduced setback of 1.0 meter (3.3 feet) may be permitted subject to neighbor consent.</p>
                  </div>
                </div>

                <div class="accordion-item">
                  <button class="accordion-header" aria-expanded="false">
                    <span>What is Floor Area Ratio (FAR) and how does it apply to residential plots?</span>
                    <span class="accordion-icon">+</span>
                  </button>
                  <div class="accordion-body">
                    <p>Floor Area Ratio (FAR) is the ratio of total built-up floor area relative to total land plot size. For residential sub-zones in Kathmandu Valley, max allowed FAR is typically 2.0 to 2.5 depending on road width access.</p>
                  </div>
                </div>

                <div class="accordion-item">
                  <button class="accordion-header" aria-expanded="false">
                    <span>Is a structural engineer seal mandatory for 2.5 storey residential houses?</span>
                    <span class="accordion-icon">+</span>
                  </button>
                  <div class="accordion-body">
                    <p>Yes. Under mandatory Nepal National Building Code (NBC 105:2020 seismic code guidelines), all structures exceeding 2 storeys require signed structural analysis blueprints and soil bearing capacity test reports certified by a registered NEC engineer.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

export function initTabSwitcher(showToast) {
  const btnEstimate = document.getElementById('tab-btn-estimate');
  const btnLegal = document.getElementById('tab-btn-legal');
  const viewEstimate = document.getElementById('view-estimate');
  const viewLegal = document.getElementById('view-legal');

  if (!btnEstimate || !btnLegal || !viewEstimate || !viewLegal) return;

  function switchTab(tabId, animate = true) {
    const isEstimate = tabId === 'estimate';

    btnEstimate.classList.toggle('active', isEstimate);
    btnLegal.classList.toggle('active', !isEstimate);

    const activeView = isEstimate ? viewEstimate : viewLegal;
    const inactiveView = isEstimate ? viewLegal : viewEstimate;

    if (activeView.classList.contains('active-view')) return;

    inactiveView.classList.remove('active-view');
    inactiveView.style.display = 'none';

    activeView.style.display = 'block';
    activeView.classList.add('active-view');

    if (animate && window.gsap) {
      window.gsap.fromTo(activeView,
        { x: isEstimate ? -40 : 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.35, ease: 'power2.out' }
      );
    }
  }

  btnEstimate.addEventListener('click', () => {
    window.location.hash = 'estimate';
    switchTab('estimate');
  });

  btnLegal.addEventListener('click', () => {
    window.location.hash = 'legal';
    switchTab('legal');
  });

  function handleHashRoute() {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#legal') {
      switchTab('legal', false);
    } else if (hash === '#estimate') {
      switchTab('estimate', false);
    }
  }

  window.addEventListener('hashchange', handleHashRoute);
  handleHashRoute();

  // Initialize Tab 1 & Tab 2 Logic
  initKathmanduCalculator(showToast);
  initLegalHubLogic(showToast);
}

function initKathmanduCalculator(showToast) {
  const aanaSlider = document.getElementById('land-aana-slider');
  const aanaDisplay = document.getElementById('land-aana-display');
  const storeysGroup = document.getElementById('storeys-btn-group');
  const finishGroup = document.getElementById('finish-btn-group');
  const chkNaksha = document.getElementById('chk-naksha');
  const chkSoil = document.getElementById('chk-soil');

  const lakhsCroresEl = document.getElementById('receipt-lakhs-crores');
  const exactNprEl = document.getElementById('receipt-exact-npr');
  const recLandArea = document.getElementById('rec-land-area');
  const recBuiltArea = document.getElementById('rec-built-area');
  const recFinishRate = document.getElementById('rec-finish-rate');
  const recBaseCost = document.getElementById('rec-base-cost');
  const recPermitCost = document.getElementById('rec-permit-cost');
  const recGrandTotal = document.getElementById('rec-grand-total');

  let currentStoreys = 2.5;
  let currentFinishTier = 'standard';

  function calculateCosts() {
    if (!aanaSlider) return;

    const landAana = parseFloat(aanaSlider.value);
    const landSqFt = landAana * AANA_TO_SQFT;
    const totalBuiltSqFt = landSqFt * currentStoreys;

    const ratePerSqFt = FINISH_RATES[currentFinishTier] || 4800;
    const baseConstructionCost = totalBuiltSqFt * ratePerSqFt;

    const nakshaFee = (chkNaksha && chkNaksha.checked) ? 60000 : 0;
    const soilFee = (chkSoil && chkSoil.checked) ? 45000 : 0;
    const totalPermitCost = nakshaFee + soilFee;

    const grandTotalNpr = baseConstructionCost + totalPermitCost;

    const formattedLakhsCrores = formatNprLakhsCrores(grandTotalNpr);
    const formattedExactNpr = `NPR ${Math.round(grandTotalNpr).toLocaleString()}`;

    if (aanaDisplay) {
      aanaDisplay.textContent = `${landAana.toFixed(2)} Aana (${Math.round(landSqFt).toLocaleString()} sq. ft.)`;
    }

    if (lakhsCroresEl) lakhsCroresEl.textContent = formattedLakhsCrores;
    if (exactNprEl) exactNprEl.textContent = formattedExactNpr;

    if (recLandArea) recLandArea.textContent = `${landAana.toFixed(2)} Aana`;
    if (recBuiltArea) recBuiltArea.textContent = `${Math.round(totalBuiltSqFt).toLocaleString()} Sq. Ft.`;
    if (recFinishRate) recFinishRate.textContent = `NPR ${ratePerSqFt.toLocaleString()} / sqft`;
    if (recBaseCost) recBaseCost.textContent = formatNprLakhsCrores(baseConstructionCost);
    if (recPermitCost) recPermitCost.textContent = `NPR ${totalPermitCost.toLocaleString()}`;
    if (recGrandTotal) recGrandTotal.textContent = formattedLakhsCrores;
  }

  if (aanaSlider) aanaSlider.addEventListener('input', calculateCosts);

  if (storeysGroup) {
    const sBtns = storeysGroup.querySelectorAll('.preset-btn');
    sBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        sBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentStoreys = parseFloat(e.currentTarget.getAttribute('data-storeys'));
        const label = document.getElementById('storeys-label');
        if (label) label.textContent = `${currentStoreys} Storeys`;
        calculateCosts();
      });
    });
  }

  if (finishGroup) {
    const fBtns = finishGroup.querySelectorAll('.preset-btn');
    fBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        fBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentFinishTier = e.currentTarget.getAttribute('data-finish');
        calculateCosts();
      });
    });
  }

  if (chkNaksha) chkNaksha.addEventListener('change', calculateCosts);
  if (chkSoil) chkSoil.addEventListener('change', calculateCosts);

  const downloadBtn = document.getElementById('download-boq-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const landAana = parseFloat(aanaSlider.value);
      const totalBuiltSqFt = landAana * AANA_TO_SQFT * currentStoreys;
      const ratePerSqFt = FINISH_RATES[currentFinishTier] || 4800;
      const grandTotalNpr = (totalBuiltSqFt * ratePerSqFt) + ((chkNaksha?.checked ? 60000 : 0) + (chkSoil?.checked ? 45000 : 0));
      
      const boqText = `====================================================
SCOPE KATHMANDU VALLEY CONSTRUCTION BILL OF QUANTITIES
====================================================
Date: ${new Date().toLocaleDateString()}
Land Area: ${landAana} Aana (${(landAana * AANA_TO_SQFT).toFixed(2)} sq. ft.)
Storeys: ${currentStoreys}
Total Built Area: ${totalBuiltSqFt.toFixed(2)} sq. ft.
Finish Tier: ${currentFinishTier.toUpperCase()} (NPR ${ratePerSqFt}/sq.ft.)

----------------------------------------------------
COST BREAKDOWN:
----------------------------------------------------
Base Construction: NPR ${(totalBuiltSqFt * ratePerSqFt).toLocaleString()}
Naksha Pass Fee: NPR ${chkNaksha?.checked ? '60,000' : '0'}
Soil Test & Struct: NPR ${chkSoil?.checked ? '45,000' : '0'}
----------------------------------------------------
GRAND TOTAL: ${formatNprLakhsCrores(grandTotalNpr)} (NPR ${Math.round(grandTotalNpr).toLocaleString()})
====================================================`;

      const blob = new Blob([boqText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `KTM_Construction_BOQ_${landAana}Aana.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      if (showToast) showToast(`📥 Downloaded Detailed BOQ for ${landAana} Aana Construction!`);
    });
  }

  calculateCosts();
}

/* --------------------------------------------------------------------------
   TAB 2: LEGAL & PERMIT HUB LOGIC
   -------------------------------------------------------------------------- */
function initLegalHubLogic(showToast) {
  // 1. Document Checklist & Readiness Score
  const docCheckboxes = document.querySelectorAll('.doc-checkbox');
  const scorePercentVal = document.getElementById('score-percent-val');
  const scoreProgressBar = document.getElementById('score-progress-bar');
  const readinessText = document.getElementById('readiness-status-text');

  function updateReadinessScore() {
    const total = docCheckboxes.length;
    let checkedCount = 0;
    docCheckboxes.forEach(chk => {
      if (chk.checked) checkedCount++;
    });

    const percent = Math.round((checkedCount / total) * 100);

    if (scorePercentVal) scorePercentVal.textContent = `${percent}%`;
    if (scoreProgressBar) scoreProgressBar.style.width = `${percent}%`;

    if (readinessText) {
      if (percent === 100) {
        readinessText.textContent = `★ READY FOR MUNICIPAL SUBMISSION! (${checkedCount}/${total} VERIFIED)`;
        readinessText.style.color = 'var(--cmyk-green)';
      } else if (percent >= 60) {
        readinessText.textContent = `STATUS: PARTIAL COMPLIANCE (${checkedCount}/${total} DOCUMENTS READY)`;
        readinessText.style.color = 'var(--cmyk-yellow)';
      } else {
        readinessText.textContent = `STATUS: INCOMPLETE (${checkedCount}/${total} DOCUMENTS READY)`;
        readinessText.style.color = 'var(--cmyk-pink)';
      }
    }
  }

  docCheckboxes.forEach(chk => {
    chk.addEventListener('change', (e) => {
      updateReadinessScore();
      if (e.target.checked && showToast) {
        const item = e.target.closest('.doc-chk-item');
        const title = item ? item.querySelector('.doc-name').textContent : 'Document';
        showToast(`✔ Verified: ${title}`);
      }
    });
  });

  updateReadinessScore();

  // 2. Road Width Bylaws Checker Logic
  const roadSlider = document.getElementById('road-width-slider');
  const roadNumInput = document.getElementById('road-width-num-input');
  const roadDisplay = document.getElementById('road-width-val-display');

  const maxStoreysEl = document.getElementById('bylaw-max-storeys');
  const maxHeightEl = document.getElementById('bylaw-max-height');
  const minSetbackEl = document.getElementById('bylaw-min-setback');
  const rowClearanceEl = document.getElementById('bylaw-row-clearance');
  const summaryTextEl = document.getElementById('bylaw-summary-text');

  function calculateBylaws(widthMeters) {
    let maxStoreys = "2 Storeys";
    let maxHeight = "28 Ft (8.53 m)";
    let setback = "1.5 Meters (5.0 ft)";
    let row = `${(widthMeters / 2).toFixed(1)}m Centerline Row`;
    let summary = "★ Compliant for small residential building under 3m road rules.";

    if (widthMeters >= 6.0) {
      maxStoreys = "3.5 - 4 Storeys";
      maxHeight = "45 Ft (13.71 m)";
      setback = "2.0 Meters (6.56 ft)";
      row = `${(widthMeters / 2).toFixed(1)}m Centerline Row`;
      summary = "★ High road width: Supports up to 4 Storeys residential construction.";
    } else if (widthMeters >= 4.5) {
      maxStoreys = "3.0 Storeys";
      maxHeight = "38 Ft (11.58 m)";
      setback = "1.5 Meters (5.0 ft)";
      row = `${(widthMeters / 2).toFixed(1)}m Centerline Row`;
      summary = "★ Standard Road Width (4.5m+): Supports 3 Storeys residential construction.";
    } else if (widthMeters >= 3.0) {
      maxStoreys = "2.5 Storeys";
      maxHeight = "35 Ft (10.67 m)";
      setback = "1.5 Meters (5.0 ft)";
      row = `${(widthMeters / 2).toFixed(1)}m Centerline Row`;
      summary = "★ Standard Residential Access (3m-4.5m): Supports 2.5 Storeys.";
    }

    const widthFt = (widthMeters * 3.28084).toFixed(1);
    if (roadDisplay) roadDisplay.textContent = `${widthMeters.toFixed(1)} Meters (${widthFt} ft)`;
    if (maxStoreysEl) maxStoreysEl.textContent = maxStoreys;
    if (maxHeightEl) maxHeightEl.textContent = maxHeight;
    if (minSetbackEl) minSetbackEl.textContent = setback;
    if (rowClearanceEl) rowClearanceEl.textContent = row;
    if (summaryTextEl) summaryTextEl.textContent = summary;
  }

  if (roadSlider && roadNumInput) {
    roadSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      roadNumInput.value = val.toFixed(1);
      calculateBylaws(val);
    });

    roadNumInput.addEventListener('input', (e) => {
      let val = parseFloat(e.target.value);
      if (isNaN(val)) val = 3.0;
      roadSlider.value = val;
      calculateBylaws(val);
    });
  }

  // 3. Legal FAQs Accordion
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(hdr => {
    hdr.addEventListener('click', (e) => {
      const isExpanded = hdr.getAttribute('aria-expanded') === 'true';
      accordionHeaders.forEach(h => {
        h.setAttribute('aria-expanded', 'false');
        h.querySelector('.accordion-icon').textContent = '+';
        const body = h.nextElementSibling;
        if (body) body.style.display = 'none';
      });

      if (!isExpanded) {
        hdr.setAttribute('aria-expanded', 'true');
        hdr.querySelector('.accordion-icon').textContent = '−';
        const body = hdr.nextElementSibling;
        if (body) body.style.display = 'block';
      }
    });
  });
}
