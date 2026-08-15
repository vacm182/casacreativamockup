// =====================================================================
// PROPIEDADES.JS — aquí se agregan/editan/borran los inmuebles reales.
//
// Para agregar una propiedad nueva: copia un bloque completo { ... },
// pégalo antes del cierre "];", cámbiale el id (único, sin espacios)
// y rellena los datos. Aparecerá sola en Home, Comprar/Alquilar y su ficha.
//
// operacion: "venta" o "alquiler"
// imgs: pon 1, 2 o 3 fotos (la primera se usa como foto principal)
// =====================================================================

const PROPIEDADES = [
  {
    id: "xativa-piso-1",
    operacion: "venta",
    zona: "Xàtiva",
    tipo: "Piso",
    precio: 193000,
    precioTexto: "193.000 €",
    hab: 3,
    m2: 153,
    planta: "5ª, exterior",
    ascensor: "Sí",
    garaje: "Sí",
    titulo: "Piso con garaje y trastero, 5ª planta exterior",
    tituloEn: "Apartment with garage and storage room, 5th floor",
    desc: "Vivienda situada en una de las mejores zonas de Xàtiva, dentro de un conjunto residencial con piscina — ideal para quienes buscan tranquilidad, comodidad y calidad de vida sin renunciar a estar cerca del centro histórico y del castillo.",
    descEn: "A home in one of Xàtiva's best areas, within a residential complex with a pool — ideal for those seeking peace and comfort while staying close to the historic centre and the castle.",
    imgs: [
      "https://images.unsplash.com/photo-1760235674447-fe0cc115b697?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1648425731270-ebd373a19149?w=500&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1764526624453-db32c24eca55?w=500&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "cullera-apto-1",
    operacion: "venta",
    zona: "Cullera",
    tipo: "Piso",
    precio: 167000,
    precioTexto: "167.000 €",
    hab: 1,
    m2: 47,
    planta: "5ª planta",
    ascensor: "Sí",
    garaje: "No",
    titulo: "Apartamento con vistas al mar y al castillo",
    tituloEn: "Apartment with sea and castle views",
    desc: "Apartamento luminoso a pocos minutos de la playa, con vistas al mar y al castillo de Cullera. Ideal como primera vivienda, inversión o segunda residencia.",
    descEn: "Bright apartment just minutes from the beach, with views of the sea and Cullera castle. Ideal as a first home, investment, or second residence.",
    imgs: [
      "https://images.unsplash.com/photo-1767045572136-868c9407818b?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1648425731270-ebd373a19149?w=500&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "alborache-rural-1",
    operacion: "venta",
    zona: "Alborache",
    tipo: "Casa / chalet",
    precio: 179000,
    precioTexto: "179.000 €",
    hab: 5,
    m2: 160,
    planta: "Planta baja",
    ascensor: "No",
    garaje: "Sí",
    titulo: "Casa de campo legalizada con piscina y terreno",
    tituloEn: "Legalised country house with pool and land",
    desc: "Casa de campo totalmente legalizada, con piscina propia y amplio terreno. Perfecta para quienes buscan tranquilidad sin alejarse demasiado de Valencia capital.",
    descEn: "Fully legalised country house with its own pool and generous plot of land. Perfect for those seeking peace and quiet without straying too far from Valencia city.",
    imgs: [
      "https://images.unsplash.com/photo-1457079585111-4f7fc5d8a98b?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1619381214782-3ae09a2ce563?w=500&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "naquera-piso-1",
    operacion: "venta",
    zona: "Náquera",
    tipo: "Piso",
    precio: 234385,
    precioTexto: "234.385 €",
    hab: 3,
    m2: 92,
    planta: "2ª planta",
    ascensor: "Sí",
    garaje: "Sí",
    titulo: "Piso en residencial con piscina y garaje",
    tituloEn: "Apartment in residential complex with pool and garage",
    desc: "Piso en urbanización con piscina comunitaria y zonas ajardinadas, garaje incluido en el precio. Zona muy solicitada por familias.",
    descEn: "Apartment in a development with a communal pool and landscaped areas, garage included in the price. A highly sought-after area for families.",
    imgs: [
      "https://images.unsplash.com/photo-1648425731270-ebd373a19149?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1760235674447-fe0cc115b697?w=500&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "chella-chalet-1",
    operacion: "venta",
    zona: "Chella",
    tipo: "Casa / chalet",
    precio: 383000,
    precioTexto: "383.000 €",
    hab: 3,
    m2: 155,
    planta: "Dos plantas",
    ascensor: "No",
    garaje: "Sí",
    titulo: "Chalet independiente con licencia turística",
    tituloEn: "Detached villa with tourist licence",
    desc: "Chalet independiente con parcela de 19.000 m², piscina propia y licencia turística activa — ideal como inversión de alquiler vacacional.",
    descEn: "Detached villa on a 19,000 m² plot, with its own pool and an active tourist licence — ideal as a holiday-rental investment.",
    imgs: [
      "https://images.unsplash.com/photo-1619381214782-3ae09a2ce563?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1457079585111-4f7fc5d8a98b?w=500&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "favara-casa-1",
    operacion: "venta",
    zona: "Favara",
    tipo: "Casa / chalet",
    precio: 124000,
    precioTexto: "124.000 €",
    hab: 4,
    m2: 183,
    planta: "Dos plantas",
    ascensor: "No",
    garaje: "No",
    titulo: "Casa con gran potencial de reforma",
    tituloEn: "House with great renovation potential",
    desc: "Casa amplia en el centro de Favara, con mucho potencial para reformar a gusto del comprador. Buena oportunidad de inversión.",
    descEn: "Spacious house in the centre of Favara, with plenty of potential to renovate to the buyer's taste. A good investment opportunity.",
    imgs: [
      "https://images.unsplash.com/photo-1764526624453-db32c24eca55?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1760235674447-fe0cc115b697?w=500&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "xativa-alquiler-1",
    operacion: "alquiler",
    zona: "Xàtiva",
    tipo: "Piso",
    precio: 650,
    precioTexto: "650 €/mes",
    hab: 2,
    m2: 75,
    planta: "3ª planta",
    ascensor: "Sí",
    garaje: "No",
    titulo: "Piso en alquiler, listo para entrar a vivir",
    tituloEn: "Apartment for rent, move-in ready",
    desc: "[Ejemplo — reemplazar con un inmueble real en alquiler]. Piso amueblado y reformado, a pocos minutos del centro de Xàtiva.",
    descEn: "[Example — replace with a real rental listing]. Furnished, renovated apartment just minutes from the centre of Xàtiva.",
    imgs: [
      "https://images.unsplash.com/photo-1648425731270-ebd373a19149?w=900&q=80&auto=format&fit=crop"
    ]
  },
  {
    id: "valencia-alquiler-1",
    operacion: "alquiler",
    zona: "Valencia",
    tipo: "Piso",
    precio: 950,
    precioTexto: "950 €/mes",
    hab: 3,
    m2: 100,
    planta: "1ª planta",
    ascensor: "Sí",
    garaje: "Sí",
    titulo: "Piso amplio en alquiler con garaje",
    tituloEn: "Spacious apartment for rent with garage",
    desc: "[Ejemplo — reemplazar con un inmueble real en alquiler]. Piso luminoso con garaje incluido en el precio del alquiler.",
    descEn: "[Example — replace with a real rental listing]. Bright apartment with garage included in the rental price.",
    imgs: [
      "https://images.unsplash.com/photo-1760235674447-fe0cc115b697?w=900&q=80&auto=format&fit=crop"
    ]
  }
];
