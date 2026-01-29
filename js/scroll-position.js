// Viking Line - Scroll Position Manager
// Hanterar scroll-position vid navigering mellan tabbar
(function() {
  const STORAGE_KEY = 'vl_scroll_position';

  // 1. ÅTERSTÄLL position vid sidladdning (körs först)
  document.addEventListener('DOMContentLoaded', () => {
    const savedPos = sessionStorage.getItem(STORAGE_KEY);
    if (savedPos) {
      // Använd requestAnimationFrame för att säkerställa att rendering är klar
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(savedPos));
        console.log('📍 Återställde scroll-position:', savedPos + 'px');
      });
      // Rensa lagrad position
      sessionStorage.removeItem(STORAGE_KEY);
    }
  });

  // 2. SPARA position vid klick på flikar
  document.addEventListener('DOMContentLoaded', () => {
    // Välj alla tab-länkar
    const tabLinks = document.querySelectorAll('.tab-link');

    tabLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Spara nuvarande scroll-position
        const currentScroll = window.scrollY;
        sessionStorage.setItem(STORAGE_KEY, currentScroll.toString());
        console.log('💾 Sparade scroll-position:', currentScroll + 'px');

        // Låt normal navigation fortsätta
      });
    });

    // Markera aktiv tab baserat på URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    tabLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage ||
          (currentPage === 'index.html' && linkPage === 'kryssningar.html') ||
          (currentPage === '' && linkPage === 'kryssningar.html')) {
        link.classList.add('active');
      }
    });
  });

  // Debug-info i konsolen
  console.log('✅ Scroll Position Manager laddad');
})();
