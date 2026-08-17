/**
 * User Login Modal & Authentication Controller
 * Provides interactive login modal with roles (Homeowner, Architect/NEC, Municipal Admin),
 * instant guest demo access, and persistent session state.
 */

const STORAGE_KEY = 'scope_user_session';

export function getLoggedInUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function setLoggedInUser(user) {
  try {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (e) {}
}

export function createLoginModal() {
  const user = getLoggedInUser();

  return `
    <div class="scope-modal-overlay" id="scope-login-modal">
      <div class="scope-modal-card">
        
        <!-- Top Title Bar -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.2rem; border-bottom: 2px solid #222; padding-bottom: 0.8rem;">
          <div>
            <div style="display: inline-block; background: var(--cmyk-yellow, #FFE600); color: #000; font-family: var(--font-mono); font-size: 0.65rem; font-weight: 900; padding: 0.15rem 0.5rem; text-transform: uppercase; margin-bottom: 0.3rem;">
              ● SCOPE PORTAL AUTH
            </div>
            <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 900; color: #FFF; margin: 0; text-transform: uppercase;">
              ${user ? 'USER PROFILE & SESSION' : 'MUNICIPAL PORTAL LOGIN'}
            </h3>
          </div>
          <button id="modal-close-btn" style="background: none; border: 1.5px solid #666; color: #FFF; font-family: var(--font-mono); font-size: 1rem; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.15s ease;">
            ✕
          </button>
        </div>

        ${user ? `
          <!-- Logged In Profile View -->
          <div style="margin-bottom: 1.5rem;">
            <div style="display: flex; align-items: center; gap: 1rem; background: #141414; border: 1px solid #333; padding: 1rem; margin-bottom: 1rem;">
              <div style="width: 48px; height: 48px; background: #00FF66; color: #000; font-family: var(--font-display); font-weight: 900; font-size: 1.4rem; display: flex; align-items: center; justify-content: center; border: 2px solid #FFF;">
                ${user.name.charAt(0)}
              </div>
              <div>
                <div style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 900; color: #FFF;">
                  ${user.name}
                </div>
                <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #00FF66; font-weight: 700; margin-top: 0.15rem;">
                  ● ${user.role} [${user.idTag}]
                </div>
              </div>
            </div>

            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #AAA; line-height: 1.6; background: #0A0A0A; border: 1px solid #222; padding: 0.8rem; margin-bottom: 1.2rem;">
              <div>• <strong>Access Clearance:</strong> Kathmandu Valley NBC 105:2020 / KMC 2078</div>
              <div>• <strong>Jurisdiction:</strong> KMC Ward 01-32, Lalitpur, Bhaktapur</div>
              <div>• <strong>Auth Token:</strong> <span style="color: #FFF;">AUTH_KMC_2026_VALID</span></div>
            </div>

            <button id="modal-logout-btn" class="btn-brutal pink" style="width: 100%; padding: 0.7rem; font-size: 0.85rem; font-weight: 900; text-align: center; cursor: pointer;">
              SIGN OUT OF SESSION
            </button>
          </div>
        ` : `
          <!-- Login Form View -->
          <form id="scope-auth-form" style="display: flex; flex-direction: column; gap: 1rem;">
            
            <!-- Role Selection -->
            <div>
              <label style="display: block; font-family: var(--font-mono); font-size: 0.7rem; color: #AAA; font-weight: 700; text-transform: uppercase; margin-bottom: 0.4rem;">
                Select User Discipline
              </label>
              <div style="display: flex; gap: 0.4rem;">
                <button type="button" class="modal-role-btn active" data-role="Architect / Engineer" data-tag="NEC #8492-C" data-user="Er. Sajan K.C.">
                  📐 ARCHITECT
                </button>
                <button type="button" class="modal-role-btn" data-role="Municipal Officer" data-tag="KMC-WARD-04" data-user="Officer R. Shrestha">
                  🏛️ WARD ADMIN
                </button>
                <button type="button" class="modal-role-btn" data-role="Homeowner / Client" data-tag="CL-2026" data-user="Homeowner Client">
                  🏠 CLIENT
                </button>
              </div>
            </div>

            <!-- Identity Input -->
            <div>
              <label for="auth-user-id" style="display: block; font-family: var(--font-mono); font-size: 0.7rem; color: #AAA; font-weight: 700; text-transform: uppercase; margin-bottom: 0.35rem;">
                Council License ID / Email
              </label>
              <input type="text" id="auth-user-id" class="scope-auth-input" placeholder="e.g. nec-8492@scope.edu.np" value="sajan.arch@kathmandu-urban.edu.np" required />
            </div>

            <!-- Passcode Input -->
            <div>
              <label for="auth-password" style="display: block; font-family: var(--font-mono); font-size: 0.7rem; color: #AAA; font-weight: 700; text-transform: uppercase; margin-bottom: 0.35rem;">
                Security PIN / Password
              </label>
              <input type="password" id="auth-password" class="scope-auth-input" placeholder="••••••••" value="scope2026" required />
            </div>

            <!-- Submit Buttons -->
            <div style="display: flex; flex-direction: column; gap: 0.6rem; margin-top: 0.5rem;">
              <button type="submit" class="pop-tab-card nav-tab-home" style="width: 100%; text-align: center; justify-content: center; padding: 0.75rem; font-size: 0.9rem; font-weight: 900; background: #00E5FF; color: #000; border-color: #00E5FF; box-shadow: 4px 4px 0px #FFF;">
                LOGIN TO PORTAL →
              </button>

              <button type="button" id="modal-quick-demo-btn" style="background: none; border: 1.5px dashed var(--cmyk-yellow, #FFE600); color: var(--cmyk-yellow, #FFE600); font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; padding: 0.55rem; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px; transition: all 0.15s ease;">
                ⚡ Quick 1-Click Academic Demo Login
              </button>
            </div>

          </form>
        `}

      </div>
    </div>
  `;
}

export function initLoginModalEvents(onAuthChange) {
  const modalOverlay = document.getElementById('scope-login-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const form = document.getElementById('scope-auth-form');
  const quickDemoBtn = document.getElementById('modal-quick-demo-btn');
  const logoutBtn = document.getElementById('modal-logout-btn');
  const roleBtns = document.querySelectorAll('.modal-role-btn');

  let selectedRole = 'Architect / Engineer';
  let selectedTag = 'NEC #8492-Civil';
  let selectedName = 'Er. Sajan K.C.';

  // Role button selector
  roleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      roleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedRole = btn.getAttribute('data-role');
      selectedTag = btn.getAttribute('data-tag');
      selectedName = btn.getAttribute('data-user');
    });
  });

  // Close modal
  const closeModal = () => {
    if (modalOverlay) modalOverlay.classList.remove('active');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Handle Login Submit
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = {
        name: selectedName,
        role: selectedRole,
        idTag: selectedTag,
        loggedInAt: new Date().toLocaleTimeString()
      };
      setLoggedInUser(user);
      closeModal();
      if (onAuthChange) onAuthChange(user);
    });
  }

  // Handle Quick Demo
  if (quickDemoBtn) {
    quickDemoBtn.addEventListener('click', () => {
      const user = {
        name: 'Er. Sajan K.C.',
        role: 'Senior Project Architect',
        idTag: 'NEC #8492-Civil',
        loggedInAt: new Date().toLocaleTimeString()
      };
      setLoggedInUser(user);
      closeModal();
      if (onAuthChange) onAuthChange(user);
    });
  }

  // Handle Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      setLoggedInUser(null);
      closeModal();
      if (onAuthChange) onAuthChange(null);
    });
  }
}
