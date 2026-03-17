/**
 * Marea – Shared footer component (FR + EN)
 * Usage: add <div id="site-footer"></div> where the footer should appear,
 * then call renderFooter('fr', 'page-en.html') or renderFooter('en', 'page.html').
 */
(function () {
  var INSTAGRAM = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>';
  var FACEBOOK  = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';

  var SOCIAL = [
    '<div class="flex gap-4">',
    '  <a href="https://instagram.com/mareaferret" target="_blank" class="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-terra hover:text-terra text-white/60 transition-colors" aria-label="Instagram">' + INSTAGRAM + '</a>',
    '  <a href="https://facebook.com/mareaferret" target="_blank" class="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-terra hover:text-terra text-white/60 transition-colors" aria-label="Facebook">' + FACEBOOK + '</a>',
    '</div>'
  ].join('\n');

  function footerHTML(lang, langSwitchUrl) {
    var fr = lang === 'fr';

    var desc = fr
      ? "Location de vacances au Cap Ferret. Le Grand Lodge &amp; The Nest à Petit Piquey, Bassin d'Arcachon."
      : "Holiday rental in Cap Ferret. Le Grand Lodge &amp; The Nest in Petit Piquey, Arcachon Bay.";

    var nav = fr ? [
      '<li><a href="/" class="text-white/60 hover:text-terra transition-colors text-sm">Accueil</a></li>',
      '<li><a href="/lodge/" class="text-white/60 hover:text-terra transition-colors text-sm">Le Grand Lodge</a></li>',
      '<li><a href="/thenest/" class="text-white/60 hover:text-ocean transition-colors text-sm">The Nest</a></li>',
      '<li><a href="/reserver/" class="text-white/60 hover:text-terra transition-colors text-sm">Réserver</a></li>',
      '<li><a href="/contact/" class="text-white/60 hover:text-terra transition-colors text-sm">Contact</a></li>',
      '<li><a href="/pourquoi-marea/" class="text-white/60 hover:text-terra transition-colors text-sm">Qui sommes-nous</a></li>'
    ].join('\n') : [
      '<li><a href="/index-en/" class="text-white/60 hover:text-terra transition-colors text-sm">Home</a></li>',
      '<li><a href="/lodge-en/" class="text-white/60 hover:text-terra transition-colors text-sm">Le Grand Lodge</a></li>',
      '<li><a href="/thenest-en/" class="text-white/60 hover:text-ocean transition-colors text-sm">The Nest</a></li>',
      '<li><a href="/reserver-en/" class="text-white/60 hover:text-terra transition-colors text-sm">Book</a></li>',
      '<li><a href="/contact-en/" class="text-white/60 hover:text-terra transition-colors text-sm">Contact</a></li>',
      '<li><a href="/pourquoi-marea-en/" class="text-white/60 hover:text-terra transition-colors text-sm">About Us</a></li>'
    ].join('\n');

    var location2 = fr ? "Bassin d'Arcachon, France" : "Arcachon Bay, France";
    var copyright = fr ? "© 2026 Marea – Tous droits réservés" : "© 2026 Marea – All rights reserved";
    var legalLabel = fr ? "Mentions légales" : "Legal";
    var cgvLabel   = fr ? "CGV" : "Terms";
    var langLabel  = fr ? "English" : "Français";

    return [
      '<footer class="py-12 md:py-16 px-6 bg-navy border-t border-white/10">',
      '  <div class="max-w-6xl mx-auto">',
      '    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">',
      '',
      '      <div class="col-span-2">',
      '        <div class="mb-6"><img src="/images/logo-dark-bg.png" alt="Marea" class="w-32 h-auto"></div>',
      '        <p class="text-white/60 text-sm leading-relaxed max-w-sm font-light mb-6">' + desc + '</p>',
      '        ' + SOCIAL,
      '      </div>',
      '',
      '      <div>',
      '        <h4 class="text-white font-sans text-sm tracking-wider mb-4">NAVIGATION</h4>',
      '        <ul class="space-y-2">' + nav + '</ul>',
      '      </div>',
      '',
      '      <div>',
      '        <h4 class="text-white font-sans text-sm tracking-wider mb-4">CONTACT</h4>',
      '        <ul class="space-y-2 text-sm text-white/60">',
      '          <li>Petit Piquey, Cap Ferret</li>',
      '          <li>' + location2 + '</li>',
      '          <li class="pt-2"><a href="mailto:mareaferret@gmail.com" class="hover:text-terra transition-colors">mareaferret@gmail.com</a></li>',
      '          <li><a href="tel:+33676886769" class="hover:text-terra transition-colors">+33 6 76 88 67 69</a></li>',
      '        </ul>',
      '      </div>',
      '',
      '    </div>',
      '    <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">',
      '      <p class="text-white/40 text-sm">' + copyright + '</p>',
      '      <div class="flex gap-6 text-sm text-white/40">',
      '        <a href="/mentions-legales/" class="hover:text-white transition-colors">' + legalLabel + '</a>',
      '        <a href="/cgv/" class="hover:text-white transition-colors">' + cgvLabel + '</a>',
      '        <a href="' + langSwitchUrl + '" class="hover:text-white transition-colors">' + langLabel + '</a>',
      '      </div>',
      '    </div>',
      '  </div>',
      '</footer>'
    ].join('\n');
  }

  window.renderFooter = function (lang, langSwitchUrl) {
    var el = document.getElementById('site-footer');
    if (!el) return;
    el.outerHTML = footerHTML(lang, langSwitchUrl);
  };
})();
