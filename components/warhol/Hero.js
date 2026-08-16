/**
 * Hero Component - SCOPE Web App (Warhol Pop-Art Edition)
 * Features Giant Edge-to-Edge "SCOPE" Typography with Color-Coded Plain Architectural Texture In-Text Mask Reveals,
 * Universal Pointer/Touch Physics, Outer Margin Decorative Pop-Art Stamps, and Mobile Responsive Scaling
 */

export function createHero() {
  const letters = [
    { 
      char: 'S', 
      texture: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      filter: 'contrast(1.6) brightness(1.3) sepia(1) hue-rotate(145deg) saturate(5)'
    },
    { 
      char: 'C', 
      texture: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      filter: 'contrast(1.6) brightness(1.3) sepia(1) hue-rotate(5deg) saturate(6)'
    },
    { 
      char: 'O', 
      texture: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      filter: 'contrast(1.6) brightness(1.3) sepia(1) hue-rotate(290deg) saturate(6)'
    },
    { 
      char: 'P', 
      texture: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
      filter: 'contrast(1.6) brightness(1.3) sepia(1) hue-rotate(85deg) saturate(6)'
    },
    { 
      char: 'E', 
      texture: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      filter: 'contrast(1.6) brightness(1.3) sepia(1) hue-rotate(240deg) saturate(6)'
    }
  ];

  return `
    <section class="giant-hero-container" style="padding-top: 2.5rem; padding-bottom: 2rem; position: relative;">
      <div class="scope-container" style="position: relative;">
        
        <!-- Outer Margin Decorative Pop-Art Stamp Badges -->
        <div class="hero-margin-stamps" style="position: absolute; width: 100%; top: -10px; left: 0; pointer-events: none; z-index: 10; display: flex; justify-content: space-between; padding: 0 0.5rem; box-sizing: border-box;">
          <!-- Left Stamp: KMC APPROVED -->
          <div style="transform: rotate(-6deg); background: #000; border: 2px solid #FFF; box-shadow: 4px 4px 0px var(--cmyk-yellow); padding: 0.4rem 0.7rem; display: flex; align-items: center; gap: 0.6rem;">
            <div style="width: 28px; height: 28px; border: 1px solid #FFF; overflow: hidden; flex-shrink: 0;">
              <img src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=150&q=80" alt="KMC Approved" style="width: 100%; height: 100%; object-fit: cover; filter: contrast(1.5) sepia(1) hue-rotate(50deg);">
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.65rem; font-weight: 900; color: var(--cmyk-yellow); text-transform: uppercase; line-height: 1.1;">
              ★ KMC APPROVED<br><span style="color: #FFF; font-size: 0.55rem;">BYLAW 2026.1</span>
            </div>
          </div>

          <!-- Right Stamp: NEPAL NBC 105 -->
          <div style="transform: rotate(5deg); background: #000; border: 2px solid #FFF; box-shadow: 4px 4px 0px var(--cmyk-pink); padding: 0.4rem 0.7rem; display: flex; align-items: center; gap: 0.6rem;">
            <div style="width: 28px; height: 28px; border: 1px solid #FFF; overflow: hidden; flex-shrink: 0;">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=150&q=80" alt="Nepal NBC 105" style="width: 100%; height: 100%; object-fit: cover; filter: contrast(1.5) sepia(1) hue-rotate(290deg);">
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.65rem; font-weight: 900; color: var(--cmyk-pink); text-transform: uppercase; line-height: 1.1;">
              ● NEPAL NBC 105<br><span style="color: #FFF; font-size: 0.55rem;">SEISMIC CERTIFIED</span>
            </div>
          </div>
        </div>

        <!-- Tagline Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.8rem; padding-top: 0.5rem;">
          <div class="hero-badge">
            <span style="color: var(--cmyk-yellow)">★</span> Scope Design
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cmyk-cyan); font-weight: 700;">
            [ VOL. 01 — KATHMANDU BUILDING PORTAL ]
          </div>
        </div>

        <!-- Giant Edge-to-Edge Typography Display with Color-Coded In-Text Texture Masks -->
        <div class="giant-title-wrap">
          <h1 class="giant-title" id="giant-hero-title">
            ${letters.map(item => `
              <span class="letter-mask">
                <span class="letter-inner" data-letter="${item.char}" style="--bg-texture: url('${item.texture}'); --texture-filter: ${item.filter};">${item.char}</span>
              </span>
            `).join('')}
          </h1>
        </div>

        <!-- Sub-Hero Description below SCOPE -->
        <div class="hero-sub-meta" style="flex-direction: column; align-items: center; text-align: center; max-width: 840px; margin: 2rem auto 0; padding-top: 1.5rem;">
          <div class="hero-tagline-box" style="background: var(--bg-surface); border: var(--border-thick); padding: 1.4rem 2rem; box-shadow: 6px 6px 0px var(--cmyk-pink); width: 100%; box-sizing: border-box; position: relative;">
            <div style="position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--cmyk-yellow); color: #000; font-family: var(--font-mono); font-weight: 900; font-size: 0.75rem; padding: 0.25rem 0.9rem; border: 2px solid var(--border-color); box-shadow: 2px 2px 0px var(--shadow-color); text-transform: uppercase; white-space: nowrap;">
              ★ RESIDENTIAL & BYLAWS PORTAL
            </div>
            <p class="hero-tagline-text" style="font-family: var(--font-mono); font-size: 0.95rem; color: var(--text-main); line-height: 1.5; margin: 0.6rem 0 0; text-transform: uppercase; letter-spacing: 0.5px;">
              "The home you dream covered with all the information you need — construction cost calculator & municipal permit compliance hub across Kathmandu, Lalitpur & Bhaktapur"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Kinetic Marquee Ticker -->
    <div class="ticker-wrap">
      <div class="ticker">
        <span class="ticker-item">★ KATHMANDU VALLEY BUILDING PORTAL</span>
        <span class="ticker-item">● KATHMANDU CONSTRUCTION COST ESTIMATOR</span>
        <span class="ticker-item">★ PERMIT & LEGAL COMPLIANCE HUB</span>
        <span class="ticker-item">● NBC 105:2020 & KMC BYLAWS 2078</span>
        <span class="ticker-item">★ KATHMANDU CONSTRUCTION COST ESTIMATOR</span>
        <span class="ticker-item">● PERMIT & LEGAL COMPLIANCE HUB</span>
      </div>
    </div>
  `;
}

export function initHeroEvents() {
  const letterInners = document.querySelectorAll('.letter-inner');
  const heroContainer = document.querySelector('.giant-hero-container');

  if (!letterInners.length || !heroContainer) return;

  // GSAP Entrance Reveal Stagger
  if (window.gsap) {
    window.gsap.fromTo(letterInners,
      {
        yPercent: 130,
        rotationX: -45,
        opacity: 0
      },
      {
        yPercent: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1.25,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.2
      }
    );

    const taglineBox = document.querySelector('.hero-tagline-box');
    if (taglineBox) {
      window.gsap.fromTo(taglineBox,
        {
          y: 40,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.7
        }
      );
    }
  }

  // Universal Pointer/Touch & Mouse In-Text Background Position Translation
  letterInners.forEach(letter => {
    const handleMove = (e) => {
      if (!window.gsap) return;
      const rect = letter.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const xPercent = ((clientX - rect.left) / rect.width) * 100;
      const yPercent = ((clientY - rect.top) / rect.height) * 100;

      letter.classList.add('mobile-touch-active');
      window.gsap.to(letter, {
        backgroundPosition: `${xPercent}% ${yPercent}%`,
        duration: 0.3,
        ease: "power1.out"
      });
    };

    letter.addEventListener('mousemove', handleMove);
    letter.addEventListener('touchmove', handleMove, { passive: true });
    letter.addEventListener('pointermove', handleMove);

    letter.addEventListener('touchstart', (e) => {
      letter.classList.toggle('touch-revealed');
      handleMove(e);
    }, { passive: true });

    const handleLeave = () => {
      if (!window.gsap) return;
      letter.classList.remove('mobile-touch-active');
      window.gsap.to(letter, {
        backgroundPosition: '50% 50%',
        duration: 0.6,
        ease: "power2.out"
      });
    };

    letter.addEventListener('mouseleave', handleLeave);
    letter.addEventListener('touchend', handleLeave);
    letter.addEventListener('pointerleave', handleLeave);
  });

  // Cursor & Touch 3D Tilt Physics
  let mouseX = 0;
  let mouseY = 0;
  let isHovering = false;

  const updateCoordinates = (clientX, clientY) => {
    const rect = heroContainer.getBoundingClientRect();
    mouseX = (clientX - rect.left) / rect.width - 0.5;
    mouseY = (clientY - rect.top) / rect.height - 0.5;
    isHovering = true;
  };

  heroContainer.addEventListener('mousemove', (e) => updateCoordinates(e.clientX, e.clientY));
  heroContainer.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  const resetTilt = () => {
    isHovering = false;
    letterInners.forEach(letter => {
      if (window.gsap) {
        window.gsap.to(letter, {
          rotationY: 0,
          rotationX: 0,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      }
    });
  };

  heroContainer.addEventListener('mouseleave', resetTilt);
  heroContainer.addEventListener('touchend', resetTilt);

  function animateTilt() {
    if (isHovering && window.gsap) {
      letterInners.forEach((letter, idx) => {
        const factor = (idx - 2) * 8;
        const rotY = mouseX * 25 + factor;
        const rotX = -mouseY * 18;
        const translateY = mouseY * -12;

        window.gsap.to(letter, {
          rotationY: rotY,
          rotationX: rotX,
          y: translateY,
          duration: 0.3,
          ease: "power1.out"
        });
      });
    }
    requestAnimationFrame(animateTilt);
  }

  animateTilt();
}
