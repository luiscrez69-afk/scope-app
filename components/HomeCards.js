/**
 * HomeCards Component - SCOPE Web App (Nothing Tech Inspired)
 * Featured Section Header: THE CURRENT PREDICAMENT
 */

export function createHomeCards() {
  return `
    <section class="centered-dual-cards-section" id="centered-dual-cards" style="padding: 3.5rem 0 3rem; background: var(--bg-main); border-bottom: 1px solid var(--border-color);">
      <div class="scope-container">
        
        <!-- Header Section -->
        <div style="text-align: center;">
          <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255, 255, 255, 0.05); color: var(--text-main); font-family: var(--font-mono); font-size: 0.75rem; padding: 0.35rem 1rem; border-radius: var(--radius-pill); border: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1.5px;">
            ● KATHMANDU VALLEY BUILDING PORTAL
          </div>

          <h1 style="font-family: var(--font-display); font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; color: var(--text-main); line-height: 0.9; margin: 0.4rem 0 0; text-transform: uppercase;">
            THE CURRENT <span style="color: var(--nothing-red)">PREDICAMENT</span>
          </h1>
        </div>

      </div>
    </section>
  `;
}

export function initHomeCardsEvents(navigateTo) {
  // Event listeners for cards stage removed
}
