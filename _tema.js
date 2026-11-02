/* Lo compartido por todas las páginas: el botón de tema y el menú de teléfono.
 *
 * Estaba copiado trece veces. Cada página nueva lo volvía a pegar, y un arreglo
 * había que hacerlo trece veces o no se hacía.
 *
 * El menú de teléfono no se escribe en el HTML de cada página: se construye
 * leyendo el nav que ya existe. Así nunca se desincroniza — si mañana entra
 * Educación al menú de escritorio, aparece sola en el de teléfono.
 */
(function () {
  'use strict';

  /* ── Tema ──────────────────────────────────────────────────────────
     Solo en las páginas que tienen el botón `.tema`. El landing trae el
     suyo propio, con otros iconos, y no se toca. */
  var SOL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2M12 19.4v2M2.6 12h2M19.4 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4"/></svg>';
  var LUNA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>';

  var raiz = document.documentElement;
  var boton = document.getElementById('tema');
  var logo = document.getElementById('logo');

  function aplicar(t) {
    raiz.setAttribute('data-theme', t);
    /* El logo se cambia sobre su propia ruta en vez de escribirla: las
       páginas de canal cuelgan de ../ y las de raíz no. */
    if (logo) logo.src = logo.src.replace(/logo%20[12]\.png/, 'logo%20' + (t === 'dark' ? '2' : '1') + '.png');
    if (boton) boton.innerHTML = t === 'dark' ? SOL : LUNA;
    try { localStorage.setItem('theme', t); } catch (e) {}
  }

  if (boton) {
    aplicar(raiz.getAttribute('data-theme') || 'light');
    boton.onclick = function () {
      aplicar(raiz.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    };
  }

  /* ── Menú de teléfono ──────────────────────────────────────────────
     Hasta hoy, por debajo del punto de quiebre el nav se escondía y no lo
     reemplazaba nada: veintidós páginas quedaban inalcanzables desde un
     teléfono. */

  function enlace(a) {
    return { href: a.getAttribute('href'), texto: (a.textContent || '').replace(/\s+/g, ' ').replace(/\s*→$/, '').trim() };
  }

  /* Lee el nav de la página, venga con la forma que venga. */
  function leerNav() {
    var grupos = [], cta = null;

    /* Páginas de canal e institucionales: una tira de enlaces y un CTA. */
    var barra = document.querySelector('.top nav');
    if (barra) {
      var sueltos = [];
      Array.prototype.forEach.call(barra.querySelectorAll('a'), function (a) {
        if (a.classList.contains('cta')) { cta = enlace(a); return; }
        sueltos.push(enlace(a));
      });
      if (sueltos.length) grupos.push({ items: sueltos });
      return { grupos: grupos, cta: cta };
    }

    /* Landing: tres menús desplegables y un enlace suelto. */
    var links = document.querySelector('nav .nav-links');
    if (!links) return { grupos: [], cta: null };

    Array.prototype.forEach.call(links.children, function (hijo) {
      if (hijo.tagName === 'A') { grupos.push({ items: [enlace(hijo)] }); return; }

      var disparador = hijo.querySelector('.nav-dd__t, .nav-mm__trigger');
      if (!disparador) return;
      var titulo = (disparador.textContent || '').replace(/\s+/g, ' ').trim();

      /* El mega-menú de Canales son seis columnas de logos con destinos
         repetidos. En un teléfono no se listan treinta y cinco: se listan
         las categorías, que es lo que sus propios títulos ya son. */
      if (hijo.classList.contains('nav-mm')) {
        var items = [enlace(disparador)];
        Array.prototype.forEach.call(hijo.querySelectorAll('.mm-col__t a'), function (a) {
          items.push(enlace(a));
        });
        grupos.push({ titulo: titulo, items: items });
        return;
      }

      var panel = hijo.querySelector('.nav-dd__p');
      if (!panel) return;
      var vistos = {}, lista = [];
      Array.prototype.forEach.call(panel.querySelectorAll('a'), function (a) {
        var h = a.getAttribute('href');
        if (!h || vistos[h]) return;
        vistos[h] = 1;
        var b = a.querySelector('b');
        lista.push({ href: h, texto: (b ? b.textContent : a.textContent).trim() });
      });
      grupos.push({ titulo: titulo, items: lista });
    });

    var diag = document.querySelector('.nav-cta a');
    if (diag) cta = enlace(diag);
    return { grupos: grupos, cta: cta };
  }

  var nav = leerNav();
  if (!nav.grupos.length) return;

  /* Los estilos van aquí y no en una hoja porque el landing y las páginas de
     lectura usan nombres de variable distintos —--gray-4 contra --g4—, así
     que el menú se pinta con sus propios colores y no depende de ninguna. */
  var css = document.createElement('style');
  css.textContent = [
    '.mnv__h{display:none;align-items:center;justify-content:center;width:38px;height:38px;padding:0;',
    'background:none;border:0;cursor:pointer;color:inherit;-webkit-tap-highlight-color:transparent}',
    '.mnv__h svg{width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:1.9;stroke-linecap:round}',
    '.mnv{position:fixed;inset:0;z-index:300;display:none}',
    '.mnv[data-abierto]{display:block}',
    '.mnv__v{position:absolute;inset:0;background:rgba(7,7,8,.45);opacity:0;transition:opacity .22s ease}',
    '.mnv[data-visible] .mnv__v{opacity:1}',
    '.mnv__p{position:absolute;top:0;right:0;bottom:0;width:min(86vw,340px);overflow-y:auto;',
    '-webkit-overflow-scrolling:touch;background:#fff;color:#070708;padding:18px 20px 32px;',
    'transform:translateX(100%);transition:transform .26s cubic-bezier(.4,0,.2,1);',
    'box-shadow:-18px 0 50px rgba(0,0,0,.18)}',
    '.mnv[data-visible] .mnv__p{transform:translateX(0)}',
    '[data-theme="dark"] .mnv__p{background:#0d0d0f;color:#fff;box-shadow:-18px 0 50px rgba(0,0,0,.6)}',
    '.mnv__x{display:flex;justify-content:flex-end;margin-bottom:8px}',
    '.mnv__x button{width:38px;height:38px;border:0;background:none;cursor:pointer;color:inherit;',
    'display:flex;align-items:center;justify-content:center}',
    '.mnv__x svg{width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:1.9;stroke-linecap:round}',
    '.mnv__g{padding:14px 0;border-top:1px solid rgba(0,0,0,.08)}',
    '[data-theme="dark"] .mnv__g{border-top-color:rgba(255,255,255,.12)}',
    '.mnv__g:first-of-type{border-top:0;padding-top:0}',
    '.mnv__t{font-size:10.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;',
    'color:#8e8e93;margin-bottom:6px}',
    '.mnv a{display:block;padding:11px 0;font-size:16px;font-weight:500;color:inherit;text-decoration:none}',
    '.mnv a:active{opacity:.55}',
    '.mnv__c{display:block;margin-top:20px;text-align:center;padding:15px 20px!important;',
    'border-radius:50px;background:#070708;color:#fff!important;font-weight:700;font-size:15px;',
    "font-family:'Plus Jakarta Sans',sans-serif}",
    '[data-theme="dark"] .mnv__c{background:#fff;color:#070708!important}',
    'body[data-mnv]{overflow:hidden}'
  ].join('');
  document.head.appendChild(css);

  var ICONO_MENU = '<svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
  var ICONO_CERRAR = '<svg viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19"/></svg>';

  var hamburguesa = document.createElement('button');
  hamburguesa.className = 'mnv__h';
  hamburguesa.setAttribute('aria-label', 'Abrir menú');
  hamburguesa.setAttribute('aria-expanded', 'false');
  hamburguesa.innerHTML = ICONO_MENU;

  var contenedor = document.querySelector('.top nav') || document.querySelector('nav .nav-cta');
  if (!contenedor) return;
  contenedor.appendChild(hamburguesa);

  var panel = document.createElement('div');
  panel.className = 'mnv';
  var html = '<div class="mnv__v"></div><div class="mnv__p"><div class="mnv__x">' +
             '<button aria-label="Cerrar menú">' + ICONO_CERRAR + '</button></div>';
  nav.grupos.forEach(function (g) {
    html += '<div class="mnv__g">';
    if (g.titulo) html += '<div class="mnv__t">' + g.titulo + '</div>';
    g.items.forEach(function (i) { html += '<a href="' + i.href + '">' + i.texto + '</a>'; });
    html += '</div>';
  });
  if (nav.cta) html += '<a class="mnv__c" href="' + nav.cta.href + '">' + nav.cta.texto + '</a>';
  html += '</div>';
  panel.innerHTML = html;
  document.body.appendChild(panel);

  function abrir() {
    panel.setAttribute('data-abierto', '');
    document.body.setAttribute('data-mnv', '');
    hamburguesa.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(function () { panel.setAttribute('data-visible', ''); });
  }
  function cerrar() {
    panel.removeAttribute('data-visible');
    hamburguesa.setAttribute('aria-expanded', 'false');
    document.body.removeAttribute('data-mnv');
    setTimeout(function () { panel.removeAttribute('data-abierto'); }, 260);
  }

  hamburguesa.onclick = abrir;
  panel.querySelector('.mnv__v').onclick = cerrar;
  panel.querySelector('.mnv__x button').onclick = cerrar;
  /* Un enlace a un ancla de esta misma página no recarga nada, así que el
     panel se quedaría abierto tapando justo lo que se fue a ver. */
  Array.prototype.forEach.call(panel.querySelectorAll('.mnv__p a'), function (a) {
    a.addEventListener('click', cerrar);
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrar(); });

  /* La hamburguesa aparece cuando el nav de escritorio ya no se ve, sin
     repetir el punto de quiebre: cada hoja de estilo tiene el suyo —1080 en
     el landing, 640 en las de lectura— y duplicarlo aquí sería inventar un
     tercero que se desalinea con los otros dos. */
  var referencia = document.querySelector('nav .nav-links') ||
                   document.querySelector('.top nav a:not(.cta)');
  function revisar() {
    var oculto = !referencia || getComputedStyle(referencia).display === 'none';
    hamburguesa.style.display = oculto ? 'flex' : 'none';
    if (!oculto) cerrar();
  }
  revisar();
  addEventListener('resize', revisar);
})();
