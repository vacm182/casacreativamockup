// =====================================================================
// MAIN.JS — lógica compartida por todas las páginas
// =====================================================================

// ⚠️ CAMBIA ESTE NÚMERO por el WhatsApp real de la agencia
// Formato: código de país + número, SIN "+" y SIN espacios. Ej: 34612345678
const WHATSAPP_NUMERO = "+34660602633";

function abrirWhatsApp(mensaje){
  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

// ---- Tarjeta de propiedad (se usa en index, comprar y alquilar) ----
function tarjetaHTML(p){
  const specs = p.operacion === "alquiler"
    ? `<span>${p.hab} hab.</span><span>${p.m2} m²</span>`
    : `<span>${p.hab} hab.</span><span>${p.m2} m²</span><span>${p.planta}</span>`;
  return `
    <a class="card" href="ficha.html?id=${p.id}">
      <div class="thumb">
        <img src="${p.imgs[0]}" alt="${p.titulo}">
        <span class="tag">${p.operacion === "alquiler" ? "En alquiler" : "En venta"}</span>
      </div>
      <div class="price">${p.precioTexto}</div>
      <div class="title">${p.titulo}</div>
      <div class="loc">${p.zona}, Valencia</div>
      <div class="specs">${specs}</div>
    </a>`;
}

function pintarGrid(contenedorId, lista){
  const el = document.getElementById(contenedorId);
  if(!el) return;
  if(lista.length === 0){
    el.innerHTML = `<p style="grid-column:1/-1; text-align:center; font-family:'Inter',sans-serif; color:var(--gray); padding:40px 0;">No hay inmuebles que coincidan con esos filtros. Prueba a ampliar la búsqueda.</p>`;
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
  if(titulo) titulo.textContent = `${lista.length} vivienda${lista.length===1?'':'s'} encontrada${lista.length===1?'':'s'}`;
}

// ---- Formularios → WhatsApp ----
function enviarValoracion(prefijo){
  const dir = document.getElementById(prefijo+'-direccion').value.trim();
  const tipo = document.getElementById(prefijo+'-tipo')?.value || "";
  const tel = document.getElementById(prefijo+'-telefono').value.trim();
  if(!dir || !tel){ alert('Por favor completa la dirección y el teléfono.'); return; }
  const msg = `Hola! Quiero pedir una valoración gratuita.\nDirección: ${dir}\nTipo de vivienda: ${tipo || 'no especificado'}\nMi teléfono: ${tel}`;
  abrirWhatsApp(msg);
}

function enviarVende(){
  const dir = document.getElementById('vende-direccion').value.trim();
  const op = document.getElementById('vende-operacion').value;
  const tel = document.getElementById('vende-telefono').value.trim();
  if(!dir || !tel){ alert('Por favor completa la dirección y el teléfono.'); return; }
  const msg = `Hola! Quiero ${op.toLowerCase()} mi vivienda.\nDirección: ${dir}\nMi teléfono: ${tel}`;
  abrirWhatsApp(msg);
}

function enviarContacto(){
  const nombre = document.getElementById('contacto-nombre').value.trim();
  const tel = document.getElementById('contacto-telefono').value.trim();
  const mensaje = document.getElementById('contacto-mensaje').value.trim();
  if(!nombre || !tel){ alert('Por favor completa tu nombre y teléfono.'); return; }
  const msg = `Hola! Soy ${nombre}.\n${mensaje || '(sin mensaje adicional)'}\nMi teléfono: ${tel}`;
  abrirWhatsApp(msg);
}

function contactarFicha(tipo){
  const id = new URLSearchParams(window.location.search).get('id');
  const p = PROPIEDADES.find(x => x.id === id);
  const nombre = p ? p.titulo : "un inmueble";
  const msg = tipo === 'visita'
    ? `Hola! Quisiera agendar una visita para: ${nombre}`
    : `Hola! Me interesa más información sobre: ${nombre}`;
  abrirWhatsApp(msg);
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
