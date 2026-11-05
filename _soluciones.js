/* El catálogo de soluciones, el cotizador y los paquetes.
 *
 * SOLUCIONES es la única fuente de verdad de la página: fichas, paquetes,
 * cotizador y barra leen de aquí. Si una solución cambia de precio o de
 * promesa, se cambia en un solo lugar.
 *
 * El acento de cada solución sale del degradado de la casa
 * —#1aab99 → #0066ff → #3533cd— repartido en el orden de las capas: el color
 * dice también en qué parte del camino está la pieza. Ninguno se eligió suelto.
 *
 * Los precios marcados PROVISIONAL son de referencia para la presentación y
 * están pendientes de cerrar. El «Modo trabajo» del pie permite ajustarlos en
 * vivo durante una reunión: se guardan en este dispositivo y no tocan la
 * página publicada.
 */
(function () {
  'use strict';

  var SOLUCIONES = [
    {
      id: 'scanx', acento: '#1aab99', nombre: 'SCANx', logo: 'logos/scanx-negro.png', capa: '00 · La puerta',
      dolor: '«Sé que algo no está bien y no sé por dónde empezar.»',
      que: 'Autodiagnóstico de la empresa completa: siete pilares por tres lentes —diseño, despliegue y desempeño— con lectura asistida por inteligencia artificial.',
      impacto: 'La dirección deja de discutir síntomas: sabe en qué pilar está el problema y cuáles son sus tres prioridades para escalar.',
      cuando: 'La misma sesión',
      implementacion: 0, mensualidad: 0, gratis: true,
      paraQuien: 'Dirección general y dueños que todavía no saben qué contratar.',
      mide: 'Score de madurez por pilar, brecha por lente y la correlación más relevante.',
      incluye: [
        'El cuestionario por pilar, con el avance guardado',
        'Perfil y tipo de empresa',
        'Score de madurez y brecha dominante',
        'Narrativa ejecutiva y plan de acción por horizonte: inmediato, corto y mediano',
        'Resultados para descargar y presentar',
      ],
    },
    {
      id: 'dx49', acento: '#108fc2', nombre: 'DX49', marca: 'DX49', capa: '01 · El diagnóstico',
      dolor: '«Voy a comprar una herramienta o a automatizar, y no sé si el problema es de proceso.»',
      que: 'Diagnóstico de madurez operativa de un área, tarea por tarea, contrastado con los registros de sus propios sistemas y validado con entrevistas y observación.',
      impacto: 'Cada tarea del área queda con destino: se ordena, se mide o se automatiza — y en ese orden.',
      cuando: 'Al cierre del levantamiento',
      implementacion: 35000, mensualidad: null,
      paraQuien: 'Dirección que está por invertir en herramienta, capacitación o automatización.',
      mide: 'Tareas levantadas, brechas por proceso y el destino de cada tarea.',
      incluye: [
        'Un área levantada sin huecos: sistemas, procesos y tareas',
        'Catálogo de procesos estándar confirmado con el equipo',
        'Indicadores calculados desde la tarea y sumados hacia arriba',
        'Hallazgos con su causa, no solo con su síntoma',
        'Hoja de ruta con secuencia: qué primero y por qué',
        'Presentación de resultados a Dirección',
      ],
    },
    {
      id: 'scalex', acento: '#0574eb', nombre: 'SCALEx', logo: 'logos/scalex-negro.png', capa: '02 · La estrategia',
      dolor: '«Tengo plan y no baja a la operación. Cada trimestre empezamos de cero.»',
      que: 'La metodología completa de escalabilidad —estrategia, procesos, ritmo y finanzas—, cada pieza con su tablero.',
      impacto: 'El plan baja a rituales, indicadores y responsables; el trimestre arranca donde terminó el anterior.',
      cuando: 'Un trimestre',
      implementacion: 45000, mensualidad: 8500, provisional: true,
      paraQuien: 'Empresas con plan escrito que no se convierte en operación.',
      mide: 'Avance del plan estratégico, cumplimiento de ritmo y objetivos trimestrales cerrados.',
      incluye: [
        'ADN de la empresa',
        'One Page Strategic Plan',
        'Rituales y ritmo: pulso diario y junta semanal',
        'Reflejo: PIE, MAPE y PRISMA',
        'Vector: norte, trimestre y objetivos',
        'Flujo y costeo por operación',
        'Presentación ejecutiva del trimestre',
      ],
    },
    {
      id: 'teamx', acento: '#0b5cf5', nombre: 'TEAMx', logo: 'logos/teamx-negro.png', capa: '03 · La ejecución',
      dolor: '«Mi gente no rinde y no sé si es la persona, el puesto o que nadie la dirige.»',
      que: 'Gestión de equipos al máximo rendimiento en ciclos de catorce semanas, con los parámetros de evaluación que cada empresa defina.',
      impacto: 'Se puede decir con evidencia si el problema es la persona, el puesto o que nadie la está dirigiendo.',
      cuando: 'Un ciclo de catorce semanas',
      implementacion: 35000, mensualidad: 6500, provisional: true,
      paraQuien: 'Dirección y gerencias con equipo a cargo.',
      mide: 'Evaluación por parámetro, evolución entre ciclos y sesiones sostenidas.',
      incluye: [
        'Parámetros, competencias y escalas configurables',
        'Evaluación por persona y por equipo',
        'Sesiones de coaching con registro de lo acordado',
        'Áreas de oportunidad por persona',
        'Reportes ejecutivos y evolución entre ciclos',
        'Copiloto para preparar la sesión',
      ],
    },
    {
      id: 'boardx', acento: '#2047e1', nombre: 'BOARDx', logo: 'logos/boardx-negro.png', capa: '04 · El gobierno',
      dolor: '«El consejo se reúne, se acuerda, y al trimestre nadie sabe qué pasó con eso.»',
      que: 'El consejo técnico trimestral con su mesa, su scorecard, sus acuerdos y su acta.',
      impacto: 'Los acuerdos del consejo tienen dueño, fecha y acta; la sesión siguiente arranca con el seguimiento hecho.',
      cuando: 'La primera sesión',
      implementacion: 40000, mensualidad: 7500, provisional: true,
      paraQuien: 'Empresas con consejo. Sin consejo, se instala como la mesa trimestral de dirección.',
      mide: 'Acuerdos cumplidos a tiempo y scorecard trimestral.',
      incluye: [
        'Mesa y directorio de consejeros',
        'Agenda y convocatoria por sesión',
        'Scorecard trimestral',
        'Acuerdos con responsable, fecha y estado',
        'Acta por reunión',
        'Métricas de la mesa y canal de seguimiento',
      ],
    },
    {
      id: 'flowhub', acento: '#3533cd', nombre: 'Flow Hub CRM', marca: 'Flow Hub CRM', capa: '05 · La operación',
      dolor: '«Entran leads y se enfrían. No sé qué pasó con cada uno ni quién lo tenía.»',
      que: 'El CRM con agente de inteligencia artificial que atiende, califica y entrega el lead a una persona cuando toca.',
      impacto: 'Ningún lead se enfría sin que alguien lo sepa, y el seguimiento queda por escrito.',
      cuando: 'Semanas',
      implementacion: 30000, mensualidad: 4000, mensualidadDesde: true,
      paraQuien: 'Empresas con leads entrando y sin control de qué pasó con cada uno.',
      mide: 'Leads por origen, tasa de cierre, tiempo de respuesta y pipeline en vuelo.',
      incluye: [
        'Pipeline por etapas con el agente operando',
        'WhatsApp e Instagram en una sola bandeja',
        'Calificación automática y entrega a vendedor',
        'Agenda, recordatorios y compromisos con fecha',
        'Actividades del día con responsable',
        'Reportes por origen, etapa y vendedor',
      ],
    },
  ];

  /* Las afinidades. Es lo que convierte un combo en un plan: la razón por la
     que esas dos van juntas, dicha en una línea. */
  var AFINIDADES = [
    ['scanx', 'dx49', 'SCANx dice en qué pilar está el problema; DX49 especifica qué hacer en el área donde se manifiesta.'],
    ['scanx', 'scalex', 'El diagnóstico define por dónde entra la metodología.'],
    ['scanx', 'teamx', 'Si la brecha sale en la gente, el ciclo de catorce semanas es el siguiente paso.'],
    ['scanx', 'boardx', 'Si la brecha sale en gobierno, la mesa trimestral es el siguiente paso.'],
    ['scanx', 'flowhub', 'Si la brecha sale en comercial, el CRM es el siguiente paso.'],
    ['dx49', 'flowhub', 'DX49 dice qué ordenar antes de automatizar; el CRM es donde se automatiza. Automatizar una operación desordenada acelera el desorden.'],
    ['dx49', 'scalex', 'El diagnóstico aterriza la metodología en procesos reales, no en los del manual.'],
    ['scalex', 'teamx', 'SCALEx fija el rumbo; TEAMx es cómo baja a cada persona.'],
    ['scalex', 'boardx', 'El consejo revisa contra el plan. Sin plan, revisa contra opiniones.'],
    ['teamx', 'boardx', 'El scorecard del consejo se alimenta del desempeño real del equipo.'],
    ['teamx', 'flowhub', 'El equipo comercial medido sobre el pipeline y no sobre percepción.'],
  ];

  /* Iconos planos, de una sola silueta. Sin contornos ni huecos: a 20px un
     icono de línea se deshace, y la silueta aguanta el degradado del paquete
     completo sin romperse. */
  var ICONOS = {
    bandera:  'M5 2.5h2.2v19H5zM8.6 3.6h11.5l-3.1 4.2 3.1 4.2H8.6z',
    norte:    'M12.6 2.4l8.4 8.4h-5.2v10.8H9.4V10.8H4.2z',
    columnas: 'M12 2l9.2 5.1H2.8zM4.9 9h2.6v9H4.9zM10.7 9h2.6v9h-2.6zM16.5 9h2.6v9h-2.6zM2.8 19.2h18.4v2.6H2.8z',
    embudo:   'M2.6 3.4h18.8l-7.3 8.4v9.4l-4.2-2.3v-7.1z',
    barras:   'M2.8 14.6h4.3v6.9H2.8zM9.9 9.4h4.3v12.1H9.9zM16.9 3.3h4.3v18.2h-4.3z',
    bloques:  'M2.8 2.8h8.1v8.1H2.8zM13.1 2.8h8.1v8.1h-8.1zM2.8 13.1h8.1v8.1H2.8zM13.1 13.1h8.1v8.1h-8.1z',
  };

  /* Cada paquete toma el acento de su pieza ancla, la que lo define. El
     Ecosistema lleva el degradado entero, porque las lleva todas. */
  var PAQUETES = [
    { id: 'arranque',   nombre: 'Arranque',   acento: '#1aab99', icono: 'bandera',  promesa: 'Saber qué pasa antes de invertir.',                      lleva: ['scanx', 'dx49'] },
    { id: 'direccion',  nombre: 'Dirección',  acento: '#0574eb', icono: 'norte',    promesa: 'El plan que sí baja a la gente.',                        lleva: ['scalex', 'teamx'] },
    { id: 'gobierno',   nombre: 'Gobierno',   acento: '#2047e1', icono: 'columnas', promesa: 'Estrategia, equipo y consejo en el mismo tablero.',      lleva: ['scalex', 'teamx', 'boardx'] },
    { id: 'comercial',  nombre: 'Comercial',  acento: '#3533cd', icono: 'embudo',   promesa: 'Ordenar la operación y después automatizar la venta.',   lleva: ['dx49', 'flowhub'] },
    { id: 'escalar',    nombre: 'Escalar',    acento: '#108fc2', icono: 'barras',   promesa: 'Diagnóstico, rumbo y la máquina comercial encendida.',   lleva: ['scanx', 'dx49', 'scalex', 'flowhub'] },
    { id: 'ecosistema', nombre: 'Ecosistema', acento: 'var(--marca)', icono: 'bloques', promesa: 'La empresa completa en un solo sistema.',            lleva: SOLUCIONES.map(function (s) { return s.id; }), full: true },
  ];

  /* La escalera. Cuenta solo las soluciones con costo: SCANx es gratis y dejarla
     subir el escalón regalaría margen por una pieza que no cuesta nada. */
  var ESCALERA = [
    { min: 5, pct: 25, codigo: 'MIXFULL' },
    { min: 4, pct: 20, codigo: 'MIX4' },
    { min: 3, pct: 15, codigo: 'MIX3' },
    { min: 2, pct: 10, codigo: 'MIX2' },
  ];

  // ── Estado ────────────────────────────────────────────────────────
  var LLAVE_SEL = 'fh_paquete', LLAVE_PRE = 'fh_precios';
  var sel = new Set();
  var abiertas = new Set();

  function leer(llave) {
    try { return JSON.parse(localStorage.getItem(llave) || 'null'); } catch (e) { return null; }
  }
  function guardar(llave, valor) {
    try { localStorage.setItem(llave, JSON.stringify(valor)); } catch (e) {}
  }

  (function recuperar() {
    var g = leer(LLAVE_SEL);
    if (Array.isArray(g)) g.forEach(function (id) { if (porId(id)) sel.add(id); });
    var p = leer(LLAVE_PRE);
    if (p) SOLUCIONES.forEach(function (s) {
      if (!p[s.id]) return;
      if (typeof p[s.id].i === 'number') s.implementacion = p[s.id].i;
      if (typeof p[s.id].m === 'number') s.mensualidad = p[s.id].m;
    });
  })();

  function porId(id) {
    for (var i = 0; i < SOLUCIONES.length; i++) if (SOLUCIONES[i].id === id) return SOLUCIONES[i];
    return null;
  }

  // ── Dinero ────────────────────────────────────────────────────────
  var pesos = function (n) { return '$' + Math.round(n).toLocaleString('es-MX'); };

  /* Un precio en cero que no es gratis está por definir, y decirlo es más
     honesto que pintar un $0 que nadie cree. */
  function precioTexto(s, campo) {
    if (s.gratis) return 'Sin costo';
    var v = s[campo];
    if (v === null) return 'No aplica';
    if (!v) return 'Por definir';
    return pesos(v) + (campo === 'mensualidad' ? ' /mes' : '');
  }

  function razonesDe(id, otros) {
    var r = [];
    AFINIDADES.forEach(function (a) {
      var otro = a[0] === id ? a[1] : a[1] === id ? a[0] : null;
      if (otro && otros.indexOf(otro) !== -1) r.push({ con: otro, texto: a[2] });
    });
    return r;
  }

  // ── Las fichas ────────────────────────────────────────────────────
  function marca(s) {
    return s.logo
      ? '<img src="' + s.logo + '" alt="' + s.nombre + '">'
      : '<span class="fi__tipo">' + s.marca + '</span>';
  }

  function pintarFichas() {
    document.getElementById('fichas').innerHTML = SOLUCIONES.map(function (s) {
      var razones = razonesDe(s.id, SOLUCIONES.map(function (x) { return x.id; }));
      return '' +
        '<article class="fi" data-id="' + s.id + '" style="--acento:' + s.acento + '">' +
          '<div class="fi__marca">' + marca(s) +
            '<span class="fi__capa">' + s.capa + '</span>' +
            '<span class="fi__afin"></span>' +
          '</div>' +
          '<p class="fi__dolor">' + s.dolor + '</p>' +
          '<p class="fi__que">' + s.que + '</p>' +
          '<div class="fi__impacto"><b>El impacto</b><span>' + s.impacto + '</span>' +
            '<em>Se nota en: ' + s.cuando + '</em></div>' +
          '<div class="fi__precio">' +
            '<div><b>Implementación</b><span>' + precioTexto(s, 'implementacion') + '</span>' +
              (s.gratis ? '<em>La puerta de entrada</em>' : '<em>pago único</em>') + '</div>' +
            '<div><b>Mensualidad</b><span>' +
              (s.mensualidadDesde && s.mensualidad ? 'desde ' + pesos(s.mensualidad) : precioTexto(s, 'mensualidad')) +
              '</span><em>' + (s.gratis ? 'sin recurrencia' : s.mensualidad === null ? 'entrega única' : 'por organización') + '</em></div>' +
          '</div>' +
          '<div class="fi__pie">' +
            '<button class="fi__b" data-poner="' + s.id + '"></button>' +
            '<button class="fi__ver" data-ver="' + s.id + '">Ver la ficha completa</button>' +
          '</div>' +
          '<div class="fi__detalle"><dl>' +
            '<dt>Qué incluye</dt><dd><ul>' + s.incluye.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></dd>' +
            '<dt>Para quién es</dt><dd>' + s.paraQuien + '</dd>' +
            '<dt>Qué se puede medir</dt><dd>' + s.mide + '</dd>' +
            (razones.length ? '<dt>Con qué combina</dt><dd><ul>' + razones.map(function (r) {
              return '<li><strong>' + porId(r.con).nombre + '</strong> — ' + r.texto + '</li>';
            }).join('') + '</ul></dd>' : '') +
          '</dl></div>' +
        '</article>';
    }).join('');
  }

  /* El Ecosistema lleva degradado, y un `fill` no acepta uno: se pinta con un
     <linearGradient> propio. Los demás heredan el color del título. */
  function icono(p) {
    var grad = p.full
      ? '<defs><linearGradient id="g-' + p.id + '" x1="0" y1="1" x2="1" y2="0">' +
        '<stop offset="0" stop-color="#1aab99"/><stop offset=".5" stop-color="#0066ff"/>' +
        '<stop offset="1" stop-color="#3533cd"/></linearGradient></defs>' : '';
    var relleno = p.full ? 'url(#g-' + p.id + ')' : p.acento;
    return '<svg class="pq__icono" viewBox="0 0 24 24" aria-hidden="true">' + grad +
      '<path fill="' + relleno + '" d="' + ICONOS[p.icono] + '"/></svg>';
  }

  function pintarPaquetes() {
    document.getElementById('paq').innerHTML = PAQUETES.map(function (p) {
      return '' +
        '<article class="pq' + (p.full ? ' pq--full' : '') + '" style="--acento:' + p.acento + '">' +
          '<h3>' + icono(p) + p.nombre + '</h3>' +
          '<p class="pq__promesa">' + p.promesa + '</p>' +
          '<div class="pq__lleva">' + p.lleva.map(function (id) {
            return '<span>' + porId(id).nombre + '</span>';
          }).join('') + '</div>' +
          '<button class="pq__b" data-paq="' + p.id + '">Cargar este paquete</button>' +
        '</article>';
    }).join('');
  }

  // ── El cotizador ──────────────────────────────────────────────────
  function cuentas() {
    var items = SOLUCIONES.filter(function (s) { return sel.has(s.id); });
    var impl = 0, mens = 0, conCosto = 0, porDefinir = 0, hayDesde = false;
    items.forEach(function (s) {
      if (s.gratis) return;
      /* Sin implementación y sin mensualidad, el precio todavía no existe. Se
         cuenta para avisar que el total está incompleto. */
      if (!s.implementacion && !s.mensualidad) porDefinir++;
      impl += s.implementacion || 0;
      mens += s.mensualidad || 0;
      if (s.mensualidadDesde) hayDesde = true;
      conCosto++;
    });
    var esc = null;
    for (var i = 0; i < ESCALERA.length; i++) if (conCosto >= ESCALERA[i].min) { esc = ESCALERA[i]; break; }
    var descuento = esc ? Math.round(impl * esc.pct / 100) : 0;
    return {
      items: items, impl: impl, mens: mens, conCosto: conCosto, porDefinir: porDefinir,
      hayDesde: hayDesde, esc: esc, descuento: descuento, implFinal: impl - descuento,
    };
  }

  function pintarCotizador() {
    var c = cuentas(), caja = document.getElementById('cot');

    if (!c.items.length) {
      caja.innerHTML = '<p class="cot__vacio">Todavía no hay nada seleccionado. Marque las soluciones ' +
        'que le hagan sentido o cargue uno de los paquetes recomendados, y aquí aparece el ' +
        'desglose con su precio.</p>';
    } else {
      var filas = c.items.map(function (s) {
        return '<tr><td><strong>' + s.nombre + '</strong>' +
          '<button class="cot__quita" data-quita="' + s.id + '">quitar</button></td>' +
          '<td class="num" data-et="Implementación">' + precioTexto(s, 'implementacion') + '</td>' +
          '<td class="num" data-et="Mensualidad">' + (s.mensualidadDesde && s.mensualidad ? 'desde ' + pesos(s.mensualidad) + ' /mes' : precioTexto(s, 'mensualidad')) + '</td></tr>';
      }).join('');

      var desc = c.esc
        ? '<tr class="cot__desc"><td>Paquete de ' + c.conCosto + ' · descuento de ' + c.esc.pct +
            '% sobre la implementación</td><td class="num" data-et="Implementación">− ' + pesos(c.descuento) + '</td><td class="num" data-et="Mensualidad">sin cambio</td></tr>'
        : '<tr class="cot__desc"><td>Agregue una segunda solución con costo para que entre el descuento</td><td class="num" data-et="Implementación">—</td><td class="num" data-et="Mensualidad">—</td></tr>';

      caja.innerHTML = '' +
        '<table><thead><tr><th>Solución</th><th>Implementación</th><th>Mensualidad</th></tr></thead>' +
        '<tbody>' + filas + desc +
        '<tr class="cot__total"><td>Total</td>' +
          '<td class="num" data-et="Implementación">' + pesos(c.implFinal) + '</td>' +
          '<td class="num" data-et="Mensualidad">' + (c.hayDesde ? 'desde ' : '') + pesos(c.mens) + ' /mes</td></tr>' +
        '</tbody></table>' +
        (c.esc ? '<div class="cot__codigo"><b>Código</b> ' + c.esc.codigo + '</div>' : '') +
        '<p class="cot__regla">La implementación es un pago único y es donde muerde el descuento, ' +
        'porque ahí hay un ahorro real: el diagnóstico ya está hecho y el equipo ya se conoce. ' +
        'La mensualidad se queda íntegra. SCANx no cuenta para la escalera porque no tiene costo. ' +
        'Implementación y diagnóstico van más IVA; la mensualidad lo lleva incluido.' +
        (c.porDefinir ? ' <strong>Hay precios por definir en esta selección, así que el total está incompleto.</strong>' : '') +
        '</p>' +
        '<div class="cot__ctas">' +
          '<a class="btn" href="https://wa.me/19563684588?text=' + encodeURIComponent(
            'Hola, armé este paquete en la página: ' + c.items.map(function (s) { return s.nombre; }).join(', ') +
            (c.esc ? ' (código ' + c.esc.codigo + ')' : '') + '. Quiero una cotización formal.'
          ) + '" target="_blank" rel="noopener"><span>Pedir cotización formal</span></a>' +
          '<button class="btn btn--ghost" id="cotLimpiar"><span>Empezar de nuevo</span></button>' +
        '</div>';
    }

    // Barra fija
    var barra = document.getElementById('barra');
    barra.setAttribute('data-visible', c.items.length ? 'si' : 'no');
    document.body.setAttribute('data-barra', c.items.length ? 'si' : 'no');
    document.getElementById('barraCuenta').innerHTML = '<b>' + c.items.length + '</b> ' +
      (c.items.length === 1 ? 'solución' : 'soluciones') + ' en su paquete';
    document.getElementById('barraImpl').textContent = c.items.length ? pesos(c.implFinal) : '—';
    document.getElementById('barraMens').textContent = c.items.length ? pesos(c.mens) : '—';

    // Estado de cada ficha + insignia de afinidad
    var puestos = Array.from(sel);
    SOLUCIONES.forEach(function (s) {
      var el = document.querySelector('.fi[data-id="' + s.id + '"]');
      if (!el) return;
      var dentro = sel.has(s.id);
      el.setAttribute('data-puesta', dentro ? 'si' : 'no');
      el.setAttribute('data-abierta', abiertas.has(s.id) ? 'si' : 'no');
      el.querySelector('[data-poner]').textContent = dentro ? 'Quitar del paquete' : 'Agregar al paquete';
      el.querySelector('[data-ver]').textContent = abiertas.has(s.id) ? 'Cerrar la ficha' : 'Ver la ficha completa';

      var razones = dentro ? [] : razonesDe(s.id, puestos);
      el.setAttribute('data-afin', razones.length ? 'si' : 'no');
      if (razones.length) {
        el.querySelector('.fi__afin').textContent = 'Va bien con ' + porId(razones[0].con).nombre;
        el.querySelector('.fi__afin').title = razones[0].texto;
      }
    });
  }

  function cambiar(fn) { fn(); guardar(LLAVE_SEL, Array.from(sel)); pintarCotizador(); }

  // ── Modo trabajo ──────────────────────────────────────────────────
  function pintarTrabajo() {
    document.getElementById('trabajoRej').innerHTML = SOLUCIONES.map(function (s) {
      if (s.gratis) return '';
      return '<label><strong>' + s.nombre + '</strong><div class="trabajo__par">' +
        '<input type="number" min="0" step="500" data-pre="' + s.id + '" data-campo="implementacion" ' +
          'value="' + (s.implementacion || '') + '" placeholder="Implementación">' +
        (s.mensualidad === null ? '<input type="text" value="No aplica" disabled>' :
          '<input type="number" min="0" step="500" data-pre="' + s.id + '" data-campo="mensualidad" ' +
            'value="' + (s.mensualidad || '') + '" placeholder="Mensualidad">') +
        '</div></label>';
    }).join('');
  }

  // ── Arranque ──────────────────────────────────────────────────────
  pintarFichas();
  pintarPaquetes();
  pintarTrabajo();
  pintarCotizador();

  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-poner],[data-ver],[data-paq],[data-quita]') : null;

    if (t && t.hasAttribute('data-poner')) {
      var id = t.getAttribute('data-poner');
      cambiar(function () { sel.has(id) ? sel.delete(id) : sel.add(id); });
      return;
    }
    if (t && t.hasAttribute('data-ver')) {
      var v = t.getAttribute('data-ver');
      abiertas.has(v) ? abiertas.delete(v) : abiertas.add(v);
      pintarCotizador();
      return;
    }
    if (t && t.hasAttribute('data-quita')) {
      var q = t.getAttribute('data-quita');
      cambiar(function () { sel.delete(q); });
      return;
    }
    if (t && t.hasAttribute('data-paq')) {
      var p = PAQUETES.filter(function (x) { return x.id === t.getAttribute('data-paq'); })[0];
      cambiar(function () { sel = new Set(p.lleva); });
      document.getElementById('cotizador').scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    var boton = e.target.closest ? e.target.closest('button,a') : null;
    if (boton && boton.id === 'cotLimpiar') { cambiar(function () { sel = new Set(); }); return; }
    if (boton && boton.id === 'barraB') {
      document.getElementById('cotizador').scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (boton && boton.id === 'abrirTrabajo') {
      e.preventDefault();
      var caja = document.getElementById('trabajo');
      var abierto = caja.getAttribute('data-abierto') === 'si';
      caja.setAttribute('data-abierto', abierto ? 'no' : 'si');
      if (!abierto) caja.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (boton && boton.id === 'trabajoReset') {
      try { localStorage.removeItem(LLAVE_PRE); } catch (err) {}
      location.reload();
    }
  });

  document.addEventListener('input', function (e) {
    var el = e.target;
    if (!el.hasAttribute || !el.hasAttribute('data-pre')) return;
    var s = porId(el.getAttribute('data-pre'));
    if (!s) return;
    s[el.getAttribute('data-campo')] = el.value === '' ? 0 : Number(el.value);
    var guardados = leer(LLAVE_PRE) || {};
    guardados[s.id] = { i: s.implementacion || 0, m: s.mensualidad === null ? null : (s.mensualidad || 0) };
    guardar(LLAVE_PRE, guardados);
    pintarFichas();
    pintarCotizador();
  });
})();
