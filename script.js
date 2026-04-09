/* =====================================================
   GAVIN-KAI VIDA — Personal Website
   Blueprint Theme / REV.1 / 2026
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* =====================================================
     1. INTRO SVG — set correct stroke-dasharray lengths
     ===================================================== */

  // Each SVG stroked element needs dasharray = its own path length
  // so the draw animation works at the right speed
  document.querySelectorAll('.blueprint-svg .bp').forEach(el => {
    try {
      const len = el.getTotalLength ? el.getTotalLength() : 3000;
      el.style.strokeDasharray = len;
      // stroke-dashoffset is set to same value in @keyframes `from`
      // via CSS variable --len. We set it here as an inline style too
      // so the initial hidden state is correct before animation fires.
      el.style.strokeDashoffset = len;
    } catch (_) {
      el.style.strokeDasharray = 3000;
      el.style.strokeDashoffset = 3000;
    }
  });


  /* =====================================================
     2. INTRO DISMISS
     ===================================================== */

  const intro   = document.getElementById('intro');
  const skipBtn = document.getElementById('skip-btn');
  const nav     = document.getElementById('nav');

  function dismissIntro() {
    intro.classList.add('hidden');
    nav.classList.add('visible');
    document.body.style.overflow = '';
  }

  // Lock scroll during intro
  document.body.style.overflow = 'hidden';

  const enterBtn = document.getElementById('enter-btn');

  // Skip jumps straight through, bypassing the animation wait
  skipBtn.addEventListener('click', dismissIntro);

  // Enter button appears after animations finish and waits for the user
  if (enterBtn) enterBtn.addEventListener('click', dismissIntro);


  /* =====================================================
     3. NAV — show after intro, highlight active section
     ===================================================== */

  const navLinks = document.querySelectorAll('.nav-links a');

  // Track which section is in view and update nav highlight
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(link => {
        const target = link.getAttribute('href').replace('#', '');
        link.classList.toggle('active', target === id);
      });
    });
  }, { threshold: 0.45 });

  document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));


  /* =====================================================
     4. SCROLL REVEAL — fade + slide up on enter
     ===================================================== */

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  /* =====================================================
     5. SKILL BARS — animate fill when scrolled into view
     ===================================================== */

  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('animated');
      skillObserver.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.skill-row').forEach(row => skillObserver.observe(row));


  /* =====================================================
     6. SYSTEM CARDS — watermark number from sys-num text
     ===================================================== */

  // Pulls the "SYS-001" text and sets it as the ::after watermark
  document.querySelectorAll('.sys-card').forEach(card => {
    const numEl = card.querySelector('.sys-num');
    if (numEl) {
      card.setAttribute('data-sys-num', numEl.textContent.replace('SYS-', ''));
    }
  });


  /* =====================================================
     7. HERO DIAGRAM — subtle parallax on mouse move
     ===================================================== */

  const heroDiagram = document.querySelector('.hero-diagram');

  if (heroDiagram) {
    document.addEventListener('mousemove', e => {
      // Only run on desktop
      if (window.innerWidth < 860) return;

      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx; // -1 to +1
      const dy = (e.clientY - cy) / cy;

      // Very subtle: max 8px shift
      const tx = dx * 8;
      const ty = dy * 8;

      heroDiagram.style.transform = `translate(${tx}px, ${ty}px)`;
    });
  }


  /* =====================================================
     8. SMOOTH SCROLL — nav links
     ===================================================== */

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });


  /* =====================================================
     9. CARD BLUEPRINT GRID EFFECT — subtle grid on hover
     ===================================================== */

  // On hover, cards briefly show a slightly brighter internal grid
  // via a CSS transition — already handled in CSS.
  // Nothing extra needed here.


  /* =====================================================
     10. SYSTEM CARDS — stagger reveal
     ===================================================== */

  document.querySelectorAll('.sys-card.reveal').forEach((card, i) => {
    card.style.transitionDelay = `${i * 70}ms`;
  });


  /* =====================================================
     11. SLIDESHOWS — reading and fun sections (infinite)
     ===================================================== */

  document.querySelectorAll('[data-slideshow]').forEach(slideshow => {
    const track    = slideshow.querySelector('.slide-track');
    const prevBtn  = slideshow.querySelector('.slide-prev');
    const nextBtn  = slideshow.querySelector('.slide-next');
    const dotsCont = slideshow.querySelector('.slide-dots');

    const CLONES     = 3;
    const origSlides = Array.from(track.querySelectorAll('.slide'));
    const origCount  = origSlides.length;

    // Prepend clones of last CLONES slides (in order)
    const preFrag = document.createDocumentFragment();
    for (let i = origCount - CLONES; i < origCount; i++) {
      const c = origSlides[i].cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      preFrag.appendChild(c);
    }
    track.insertBefore(preFrag, track.firstChild);

    // Append clones of first CLONES slides
    for (let i = 0; i < CLONES; i++) {
      const c = origSlides[i].cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      track.appendChild(c);
    }

    // current indexes into allSlides; CLONES = offset to first real slide
    let current = CLONES;

    function getVisible() {
      return window.innerWidth >= 860 ? 3 : 1;
    }

    function realIdx() {
      return ((current - CLONES) % origCount + origCount) % origCount;
    }

    function setPos(animate) {
      if (!animate) {
        track.style.transition = 'none';
        track.style.transform = `translateX(-${current * (100 / getVisible())}%)`;
        track.offsetHeight; // flush paint
        track.style.transition = '';
      } else {
        track.style.transform = `translateX(-${current * (100 / getVisible())}%)`;
      }
    }

    function updateDots() {
      const ri = realIdx();
      dotsCont.querySelectorAll('.slide-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === ri);
      });
    }

    function buildDots() {
      dotsCont.innerHTML = '';
      for (let i = 0; i < origCount; i++) {
        const dot = document.createElement('span');
        dot.className = 'slide-dot';
        dot.addEventListener('click', () => {
          current = i + CLONES;
          setPos(true);
          updateDots();
        });
        dotsCont.appendChild(dot);
      }
    }

    // After transition ends, silently jump if in clone territory
    track.addEventListener('transitionend', () => {
      if (current < CLONES) {
        current += origCount;
        setPos(false);
      } else if (current >= CLONES + origCount) {
        current -= origCount;
        setPos(false);
      }
    });

    prevBtn.addEventListener('click', () => { current--; setPos(true); updateDots(); });
    nextBtn.addEventListener('click', () => { current++; setPos(true); updateDots(); });

    buildDots();
    setPos(false);
    updateDots();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { buildDots(); setPos(false); updateDots(); }, 100);
    });
  });

});
