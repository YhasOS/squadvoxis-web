/* SquadVoxis: localized artwork for three marketing cards, ES/EN/DE/FR.
   Requires existing #site-language and .market-card .market-scene elements. */
(() => {
  const assets = {
    es: ['marketing/hero-mmorpg.webp', 'marketing/hero-tactico.webp', 'marketing/hero-clanes.webp'],
    en: ['marketing/i18n/hero-mmorpg-en.webp', 'marketing/i18n/hero-tactico-en.webp', 'marketing/i18n/hero-clanes-en.webp'],
    de: ['marketing/i18n/hero-mmorpg-de.webp', 'marketing/i18n/hero-tactico-de.webp', 'marketing/i18n/hero-clanes-de.webp'],
    fr: ['marketing/i18n/hero-mmorpg-fr.webp', 'marketing/i18n/hero-tactico-fr.webp', 'marketing/i18n/hero-clanes-fr.webp']
  };
  const descriptions = {
    es: ['Gremio durante un asedio fantástico', 'Escuadrón táctico coordinado', 'Clan defendiendo su fortaleza'],
    en: ['Guild coordinating a fantasy siege', 'Tactical squad coordinating its teams', 'Clan defending its stronghold'],
    de: ['Gilde koordiniert eine Belagerung', 'Taktischer Trupp bei der Koordination', 'Clan verteidigt seine Festung'],
    fr: ['Guilde organisant un siège', 'Escouade tactique coordonnée', 'Clan défendant sa forteresse']
  };
  const cards = Array.from(document.querySelectorAll('#comunidades .market-card .market-scene'));
  if (cards.length !== 3) return;
  function applyLanguage() {
    const lang = (document.getElementById('site-language')?.value || document.documentElement.lang || 'es').slice(0,2).toLowerCase();
    const sources = assets[lang] || assets.es;
    const alts = descriptions[lang] || descriptions.es;
    cards.forEach((img, index) => {
      if (img.getAttribute('src') !== sources[index]) img.setAttribute('src', sources[index]);
      img.setAttribute('alt', alts[index]);
      img.setAttribute('loading', 'lazy');
      img.setAttribute('decoding', 'async');
    });
  }
  document.getElementById('site-language')?.addEventListener('change', applyLanguage);
  applyLanguage();
})();
