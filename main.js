// La página EN debe definir "const LANG = 'en';" ANTES de cargar este script.
// Si no está definida, se asume español.
const CURRENT_LANG = (typeof LANG !== 'undefined') ? LANG : 'es';

const UI = {
  es: {
    venta: "En venta", alquiler: "En alquiler",
    hab: "hab.", found: (n) => `${n} vivienda${n===1?'':'s'} encontrada${n===1?'':'s'}`,
    noResults: "No hay inmuebles que coincidan con esos filtros. Prueba a ampliar la búsqueda.",
    fillFields: "Por favor completa la dirección y el teléfono.",
    fillContact: "Por favor completa tu nombre y teléfono.",
    comprar: "Comprar", alquilar: "Alquilar",
    habitaciones: "Habitaciones", superficie: "Superficie", planta: "Planta",
    ascensor: "Ascensor", garaje: "Garaje",
    notFound: "No encontramos ese inmueble", backToList: "Volver al listado",
    whatsappBtn: "Contactar por WhatsApp", visitBtn: "Solicitar visita",
    agentRole: "Agencia local · Valencia",
    alsoOn: "También publicado en los principales portales inmobiliarios."
  },
  en: {
    venta: "For sale", alquiler: "For rent",
    hab: "bed", found: (n) => `${n} propert${n===1?'y':'ies'} found`,
    noResults: "No properties match those filters. Try widening your search.",
    fillFields: "Please fill in the address and phone number.",
    fillContact: "Please fill in your name and phone number.",
    comprar: "Buy", alquilar: "Rent",
    habitaciones: "Bedrooms", superficie: "Size", planta: "Floor",
    ascensor: "Lift", garaje: "Parking",
    notFound: "We couldn't find that property", backToList: "Back to listings",
    whatsappBtn: "Contact via WhatsApp", visitBtn: "Request a viewing",
    agentRole: "Local agency · Valencia",
    alsoOn: "Also listed on the main property portals."
  }
}[CURRENT_LANG];

// =====================================================================
// MAIN.JS — lógica compartida por todas las páginas
// =====================================================================

// ⚠️ CAMBIA ESTOS NÚMEROS por los WhatsApp reales de la agencia
// Formato: código de país + número, SIN "+" y SIN espacios. Ej: 34612345678
const WHATSAPP_NUMERO_VENTA = "34660602633";
const WHATSAPP_NUMERO_ALQUILER = "34744608271";

function abrirWhatsApp(mensaje, operacion){
  const numero = operacion === "alquiler" ? WHATSAPP_NUMERO_ALQUILER : WHATSAPP_NUMERO_VENTA;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

// ---- Tarjeta de propiedad (se usa en index, comprar y alquilar) ----
function tarjetaHTML(p){
  const titulo = (CURRENT_LANG === 'en' && p.tituloEn) ? p.tituloEn : p.titulo;
  const specs = p.operacion === "alquiler"
    ? `<span>${p.hab} ${UI.hab}</span><span>${p.m2} m²</span>`
    : `<span>${p.hab} ${UI.hab}</span><span>${p.m2} m²</span><span>${p.planta}</span>`;
  return `
    <a class="card" href="ficha.html?id=${p.id}">
      <div class="thumb">
        <img src="${p.imgs[0]}" alt="${titulo}">
        <span class="tag">${p.operacion === "alquiler" ? UI.alquiler : UI.venta}</span>
        ${p.videos && p.videos.length ? `<span class="tag" style="left:auto; right:10px;">🎥</span>` : ''}
      </div>
      <div class="price">${p.precioTexto}</div>
      <div class="title">${titulo}</div>
      <div class="loc">${p.zona}, Valencia</div>
      <div class="specs">${specs}</div>
    </a>`;
}

function pintarGrid(contenedorId, lista){
  const el = document.getElementById(contenedorId);
  if(!el) return;
  if(lista.length === 0){
    el.innerHTML = `<p style="grid-column:1/-1; text-align:center; font-family:'Inter',sans-serif; color:var(--gray); padding:40px 0;">${UI.noResults}</p>`;
    return;
  }
  el.innerHTML = lista.map(tarjetaHTML).join("");
}

// ---- Filtros (comprar.html / alquilar.html) ----
function filtrarPropiedades(operacion, contenedorId, tituloId){
  const zona = document.getElementById('filtro-zona')?.value || "";
  const tipo = document.getElementById('filtro-tipo')?.value || "";
  const hab = parseInt(document.getElementById('filtro-hab')?.value || "0", 10);
  const precioMax = document.getElementById('filtro-precio')?.value || "";

  let lista = PROPIEDADES.filter(p => p.operacion === operacion);
  if(zona) lista = lista.filter(p => p.zona === zona);
  if(tipo) lista = lista.filter(p => p.tipo === tipo);
  if(hab) lista = lista.filter(p => p.hab >= hab);
  if(precioMax) lista = lista.filter(p => p.precio <= parseInt(precioMax, 10));

  pintarGrid(contenedorId, lista);
  const titulo = document.getElementById(tituloId);
  if(titulo) titulo.textContent = UI.found(lista.length);
}

// ---- Formularios → WhatsApp (mensajes siempre bilingües ES/EN) ----
function enviarValoracion(prefijo){
  const dir = document.getElementById(prefijo+'-direccion').value.trim();
  const tipo = document.getElementById(prefijo+'-tipo')?.value || "";
  const tel = document.getElementById(prefijo+'-telefono').value.trim();
  if(!dir || !tel){ alert(UI.fillFields); return; }
  const msg = `Hola! Quiero pedir una valoración gratuita. / Hi! I'd like to request a free valuation.\n`
    + `Dirección / Address: ${dir}\n`
    + `Tipo de vivienda / Property type: ${tipo || 'no especificado / not specified'}\n`
    + `Mi teléfono / My phone: ${tel}`;
  abrirWhatsApp(msg);
}

function enviarVende(){
  const dir = document.getElementById('vende-direccion').value.trim();
  const op = document.getElementById('vende-operacion').value; // valor siempre "Vender" o "Alquilar"
  const opEn = op === "Alquilar" ? "rent out" : "sell";
  const tel = document.getElementById('vende-telefono').value.trim();
  if(!dir || !tel){ alert(UI.fillFields); return; }
  const msg = `Hola! Quiero ${op.toLowerCase()} mi vivienda. / Hi! I'd like to ${opEn} my property.\n`
    + `Dirección / Address: ${dir}\n`
    + `Mi teléfono / My phone: ${tel}`;
  abrirWhatsApp(msg);
}

function enviarContacto(){
  const nombre = document.getElementById('contacto-nombre').value.trim();
  const tel = document.getElementById('contacto-telefono').value.trim();
  const mensaje = document.getElementById('contacto-mensaje').value.trim();
  if(!nombre || !tel){ alert(UI.fillContact); return; }
  const msg = `Hola! Soy ${nombre}. / Hi! I'm ${nombre}.\n`
    + `${mensaje || '(sin mensaje adicional / no additional message)'}\n`
    + `Mi teléfono / My phone: ${tel}`;
  abrirWhatsApp(msg);
}

function contactarFicha(tipo){
  const id = new URLSearchParams(window.location.search).get('id');
  const p = PROPIEDADES.find(x => x.id === id);
  const nombreEs = p ? p.titulo : "un inmueble";
  const nombreEn = p ? (p.tituloEn || p.titulo) : "a property";
  const msg = tipo === 'visita'
    ? `Hola! Quisiera concertar una visita para: ${nombreEs}\n/ Hi! I'd like to schedule a viewing for: ${nombreEn}`
    : `Hola! Me interesa más información sobre: ${nombreEs}\n/ Hi! I'm interested in more info about: ${nombreEn}`;
  abrirWhatsApp(msg, p ? p.operacion : "venta");
}

// ---- Marca el link activo en el menú según la página actual ----
document.addEventListener('DOMContentLoaded', () => {
  const actual = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.site-links a').forEach(a=>{
    if(a.getAttribute('href') === actual) a.classList.add('active');
  });

  // Menú hamburguesa (móvil)
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
});
