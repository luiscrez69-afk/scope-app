/**
 * Hero Component - SCOPE Web App (Nothing Tech Inspired)
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
        <!-- Outer Margin Decorative Miniature Architectural House Reticle Badges (Animated, Pure Graphic) -->
        <style>
          @keyframes reticle-spin-cw {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes reticle-spin-ccw {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes reticle-pulse-glow {
            0% { transform: scale(0.9); opacity: 0.75; }
            100% { transform: scale(1.08); opacity: 1; filter: drop-shadow(0 0 4px currentColor); }
          }
          @keyframes crosshair-scan-motion {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(45deg); }
            100% { transform: rotate(0deg); }
          }
          @keyframes emblem-float-l {
            0% { transform: translateY(0px) rotate(-6deg); }
            100% { transform: translateY(-6px) rotate(-2deg); }
          }
          @keyframes emblem-float-r {
            0% { transform: translateY(0px) rotate(6deg); }
            100% { transform: translateY(-6px) rotate(2deg); }
          }
        </style>

        <div class="hero-margin-stamps" style="position: absolute; width: 100%; top: -16px; left: 0; pointer-events: none; z-index: 10; display: flex; justify-content: space-between; padding: 0 0.5rem; box-sizing: border-box;">
          
          <!-- Left Animated Emblem (Pure Graphic) -->
          <div style="background: #000; border: 1px solid var(--border-color); border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.5); padding: 0.4rem; display: flex; align-items: center; justify-content: center; width: 44px; height: 42px; pointer-events: auto; animation: emblem-float-l 3.5s ease-in-out infinite alternate; box-sizing: border-box;">
            <svg viewBox="0 0 100 90" width="100%" height="100%" style="overflow: visible;">
              <!-- Pitch Roof -->
              <polygon points="50,6 6,32 94,32" fill="none" stroke="#FFF" stroke-width="3" stroke-linejoin="round" />
              <!-- 4-Storey Rectangular Frame -->
              <rect x="6" y="32" width="88" height="54" rx="2" fill="none" stroke="#FFF" stroke-width="3" />
              <line x1="6" y1="45.5" x2="94" y2="45.5" stroke="#FFF" stroke-width="1.2" opacity="0.6" />
              <line x1="6" y1="59" x2="94" y2="59" stroke="#FFF" stroke-width="1.2" opacity="0.6" />
              <line x1="6" y1="72.5" x2="94" y2="72.5" stroke="#FFF" stroke-width="1.2" opacity="0.6" />
              <!-- Outer Rotating Dotted Reticle -->
              <circle cx="50" cy="59" r="22" fill="none" stroke="var(--nothing-red)" stroke-width="2" stroke-dasharray="4 3" style="transform-origin: 50px 59px; animation: reticle-spin-cw 12s linear infinite;" />
              <!-- Inner Pulsing Solid Reticle -->
              <circle cx="50" cy="59" r="14.5" fill="none" stroke="var(--nothing-red)" stroke-width="2.5" style="transform-origin: 50px 59px; animation: reticle-pulse-glow 2.5s ease-in-out infinite alternate;" />
              <!-- Center Rotating Scanning Crosshairs -->
              <g style="transform-origin: 50px 59px; animation: crosshair-scan-motion 4s ease-in-out infinite alternate;">
                <line x1="35" y1="59" x2="65" y2="59" stroke="var(--nothing-red)" stroke-width="2.2" stroke-linecap="round" />
                <line x1="50" y1="44" x2="50" y2="74" stroke="var(--nothing-red)" stroke-width="2.2" stroke-linecap="round" />
              </g>
            </svg>
          </div>

          <!-- Right Animated Emblem (Pure Graphic) -->
          <div style="background: #000; border: 1px solid var(--border-color); border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.5); padding: 0.4rem; display: flex; align-items: center; justify-content: center; width: 44px; height: 42px; pointer-events: auto; animation: emblem-float-r 3.5s ease-in-out infinite alternate 0.5s; box-sizing: border-box;">
            <svg viewBox="0 0 100 90" width="100%" height="100%" style="overflow: visible;">
              <!-- Pitch Roof -->
              <polygon points="50,6 6,32 94,32" fill="none" stroke="#FFF" stroke-width="3" stroke-linejoin="round" />
              <!-- 4-Storey Rectangular Frame -->
              <rect x="6" y="32" width="88" height="54" rx="2" fill="none" stroke="#FFF" stroke-width="3" />
              <line x1="6" y1="45.5" x2="94" y2="45.5" stroke="#FFF" stroke-width="1.2" opacity="0.6" />
              <line x1="6" y1="59" x2="94" y2="59" stroke="#FFF" stroke-width="1.2" opacity="0.6" />
              <line x1="6" y1="72.5" x2="94" y2="72.5" stroke="#FFF" stroke-width="1.2" opacity="0.6" />
              <!-- Outer Rotating Dotted Reticle -->
              <circle cx="50" cy="59" r="22" fill="none" stroke="var(--nothing-red)" stroke-width="2" stroke-dasharray="4 3" style="transform-origin: 50px 59px; animation: reticle-spin-ccw 12s linear infinite;" />
              <!-- Inner Pulsing Solid Reticle -->
              <circle cx="50" cy="59" r="14.5" fill="none" stroke="var(--nothing-red)" stroke-width="2.5" style="transform-origin: 50px 59px; animation: reticle-pulse-glow 2.5s ease-in-out infinite alternate;" />
              <!-- Center Rotating Scanning Crosshairs -->
              <g style="transform-origin: 50px 59px; animation: crosshair-scan-motion 4s ease-in-out infinite alternate 0.5s;">
                <line x1="35" y1="59" x2="65" y2="59" stroke="var(--nothing-red)" stroke-width="2.2" stroke-linecap="round" />
                <line x1="50" y1="44" x2="50" y2="74" stroke="var(--nothing-red)" stroke-width="2.2" stroke-linecap="round" />
              </g>
            </svg>
          </div>

        </div>



        <!-- Giant Edge-to-Edge Typography Display -->
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
          <div class="hero-tagline-box" style="background: var(--bg-surface); border: var(--border-thick); border-radius: var(--radius-card); padding: 1.4rem 2rem; width: 100%; box-sizing: border-box; position: relative;">
            <div style="position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--nothing-red); color: #FFF; font-family: var(--font-mono); font-weight: 700; font-size: 0.75rem; padding: 0.25rem 0.9rem; border-radius: 4px; text-transform: uppercase; white-space: nowrap;">
              ● RESIDENTIAL & BYLAWS PORTAL
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
        <span class="ticker-item">● CONSTRUCTION COST ESTIMATOR</span>
        <span class="ticker-item">★ PERMIT & LEGAL COMPLIANCE HUB</span>
        <span class="ticker-item">● NBC 105:2020 & KMC BYLAWS 2078</span>
        <span class="ticker-item">★ CONSTRUCTION COST ESTIMATOR</span>
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
