/* SquadVoxis launch page. No external services, analytics or cookies. */
(() => {
  'use strict';

  const translations = {
    es: {
      navHow: 'Cómo funciona', navFeatures: 'Características', navPricing: 'Planes',
      navCta: 'Ver planes <span aria-hidden="true">↗</span>',
      heroEyebrow: 'COMUNICACIONES TÁCTICAS · WINDOWS · EN DESARROLLO',
      heroTitle: 'UN COMANDANTE.<br><span class="gradient-text">TODOS LOS EQUIPOS.</span><br>CONECTADOS.',
      heroLead: 'Un canal de mando. Varios equipos independientes. Habla con todos, escucha solamente a los líderes autorizados y conserva las conversaciones privadas de cada escuadra.',
      heroPrimary: 'Ver cómo funciona', heroSecondary: 'Conoce la interfaz',
      heroFootnote: 'Próximamente · Ejecución local · Diseñado para comunidades de Discord',
      visualCommandOverline: 'CANAL PRINCIPAL', visualCommander: 'COMANDANTE',
      nodeOne: 'LÍDER ↗', nodeTwo: 'LÍDER ↗', nodeThree: 'LÍDER ↗', nodeFour: 'LÍDER ↗',
      visualLegendOne: 'Emisión del comandante', visualLegendTwo: 'Respuesta solo de líderes',
      stripOne: 'Aplicación local', stripTwo: 'Audio filtrado por roles', stripThree: 'Canales independientes', stripFour: 'Configuración guiada',
      howLabel: '01 / LA MISIÓN',
      howTitle: 'UNA SOLA RED DE VOZ.<br><span class="muted-title">SIN CONVERSACIONES CRUZADAS.</span>',
      howDesc: 'Cada escuadra mantiene su propia comunicación mientras sus líderes están conectados con el mando. Coordina los grupos sin cambiar constantemente de canal.',
      howOneTitle: 'Del comandante a los equipos', howOneBody: 'Habla desde el canal de mando y retransmite tu voz a las salas asignadas a cada escuadra.',
      howTwoTitle: 'De los líderes al comandante', howTwoBody: 'Solo se retransmite al mando la voz de quienes tienen el rol de líder configurado.',
      howThreeTitle: 'Conversaciones privadas por equipo', howThreeBody: 'Los jugadores normales hablan dentro de su propia sala. Los demás equipos no escuchan esa conversación local.',
      previewLabel: '02 / CENTRO DE MANDO',
      previewTitle: 'CONTROLA LAS COMUNICACIONES.<br><span class="muted-title">NO LA COMPLEJIDAD.</span>',
      previewBody: 'Asistente para configurar bots de Discord, canales, roles y controles de voz locales. Diseñado para comunidades, sin exigir conocimientos de administración de sistemas.',
      tagOne: 'Asistente guiado', tagTwo: 'Gestión de bots', tagThree: 'Control local',
      previewNote: 'Vista previa de la aplicación Windows en desarrollo. Las funciones y el diseño pueden cambiar antes del lanzamiento.',
      featuresLabel: '03 / CAPACIDADES',
      featuresTitle: 'PENSADO PARA EL EQUIPO.<br><span class="muted-title">DISEÑADO PARA EL LÍDER.</span>',
      featureOneTitle: 'Tus propios bots de Discord', featureOneBody: 'Configura un bot comandante y bots retransmisores con tus aplicaciones de Discord. Los tokens permanecen en tu equipo Windows.',
      featureTwoTitle: 'Múltiples salas de voz', featureTwoBody: 'Asigna canales a distintos equipos. Desde grupos pequeños hasta eventos más grandes.',
      featureThreeTitle: 'Control por roles', featureThreeBody: 'Elige quién puede dirigir las comunicaciones, administrar el sistema y responder como líder.',
      featureFourTitle: 'Funciona en tu Windows', featureFourBody: 'El motor de voz se ejecuta en tu ordenador, sin una suscripción de alojamiento de voz de SquadVoxis.',
      pricingLabel: '04 / ELIGE TU EQUIPAMIENTO',
      pricingTitle: 'UNA HERRAMIENTA.<br><span class="muted-title">TRES TAMAÑOS DE EQUIPO.</span>',
      pricingDesc: 'Opciones previstas de pago único. Los precios y la disponibilidad se confirmarán antes del lanzamiento.',
      oneTime: ' / pago único', oneTime2: ' / pago único', oneTime3: ' / pago único',
      starterDesc: 'Para grupos pequeños que quieren coordinarse.', proDesc: 'Más escuadras. Más coordinación.', premiumDesc: 'Para grandes comunidades y eventos.',
      relaysLabel: 'BOTS REPETIDORES', relaysLabel2: 'BOTS REPETIDORES', relaysLabel3: 'BOTS REPETIDORES*',
      planMain: 'Incluye 1 bot comandante', planMain2: 'Incluye 1 bot comandante', planMain3: 'Incluye 1 bot comandante',
      planRouting: 'Comunicación entre mando y líderes', planRouting2: 'Comunicación entre mando y líderes', planRouting3: 'Comunicación entre mando y líderes',
      planPopular: 'MÁS POPULAR', comingSoon: 'PRÓXIMAMENTE', comingSoon2: 'PRÓXIMAMENTE', comingSoon3: 'PRÓXIMAMENTE',
      pricingFootnote: '*Premium no impone un límite comercial de repetidores. La capacidad real depende de tu ordenador y los límites del servicio de Discord. Planes y precios provisionales; esta web no permite comprar.',
      faqLabel: '05 / INFORMACIÓN', faqTitle: 'PREGUNTAS FRECUENTES.',
      faqQ1: '¿Necesito contratar un servidor en la nube?', faqA1: 'La versión Windows prevista ejecuta el motor de voz en tu propio ordenador. Sí necesitarás conexión a internet para Discord.',
      faqQ2: '¿Pueden los jugadores normales hablar con el comandante?', faqA2: 'Con el filtro por líderes, solo se transmite al mando a los usuarios con el rol designado. Los demás pueden seguir hablando en su propia sala.',
      faqQ3: '¿Necesitaré programar o utilizar comandos?', faqA3: 'Nuestro objetivo es un asistente con instrucciones para crear los bots, elegir canales y roles, y controlar las sesiones visualmente. Algunos pasos se realizan en el portal oficial de desarrolladores de Discord.',
      faqQ4: '¿Puedo comprar o descargar SquadVoxis ahora?', faqA4: 'Todavía no. SquadVoxis sigue en desarrollo. Activaremos la tienda y las descargas oficiales después de las pruebas finales y la verificación comercial.',
      lastLabel: 'PREPARADOS PARA COORDINAR', lastTitle: 'MANTÉN LA FORMACIÓN.',
      lastDesc: 'Estamos desarrollando SquadVoxis para comunidades de Discord que necesitan coordinar varios equipos. La primera versión de escritorio está en camino.',
      lastStatus: 'EN DESARROLLO', footerDesc: 'Software independiente de retransmisión de voz táctica para comunidades de Discord.',
      footerDisclaimer: 'Proyecto independiente. No está afiliado, patrocinado ni respaldado por Discord.',
      footerPrivacy: 'Esta web informativa no utiliza analítica, cookies ni formularios de contacto.'
    }
  };

  const english = new Map();
  document.querySelectorAll('[data-i18n]').forEach((element) => english.set(element, element.innerHTML));
  const toggle = document.getElementById('lang-toggle');
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');
  let currentLanguage = 'en';

  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'es') return;
    currentLanguage = lang;
    for (const [element, original] of english) {
      element.innerHTML = lang === 'es' ? (translations.es[element.dataset.i18n] ?? original) : original;
    }
    document.documentElement.lang = lang;
    toggle.textContent = lang === 'en' ? 'ES ↗' : 'EN ↗';
    toggle.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English');
    document.title = lang === 'en'
      ? 'SquadVoxis — Tactical Voice Routing for Discord'
      : 'SquadVoxis — Comunicaciones tácticas para Discord';
  }

  toggle.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'es' : 'en'));
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
