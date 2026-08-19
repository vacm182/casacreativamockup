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
    id: "adzaneta-casa-1",
    operacion: "venta",
    zona: "Adzaneta del Maestrat",
    tipo: "Casa / chalet",
    precio: 103000,
    precioTexto: "103.000 €",
    hab: 7,
    m2: 200,
    planta: "3 plantas",
    ascensor: "No",
    garaje: "Sí",
    titulo: "Casa rústica reformada con encanto e historia",
    tituloEn: "Renovated rustic house full of character and history",
    desc: "Preciosa casa de piedra en el corazón de Atzeneta del Maestrat, reformada hace 8 años conservando su esencia rústica: chimenea, garaje privado, cocina americana equipada y hasta 7 habitaciones repartidas en tres plantas. Ideal como vivienda habitual, segunda residencia o turismo rural.",
    descEn: "A beautiful stone house in the heart of Atzeneta del Maestrat, renovated 8 years ago while keeping its rustic charm: fireplace, private garage, fitted open kitchen and up to 7 bedrooms across three floors. Ideal as a main home, second residence, or rural tourism investment.",
    imgs: [
      "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/6a/2b/87/1396713563.jpg"
    ]
  },
  {
    id: "benirredra-casa-1",
    operacion: "venta",
    zona: "Benirredrà",
    tipo: "Casa / chalet",
    precio: 223000,
    precioTexto: "223.000 €",
    hab: 1,
    m2: 241,
    planta: "3 alturas + buhardilla",
    ascensor: "No",
    garaje: "No",
    titulo: "Casa en esquina de 3 alturas con terrazas y vistas",
    tituloEn: "Corner house on 3 levels with terraces and views",
    desc: "Impresionante casa de esquina de tres alturas más buhardilla en Benirredrà - Oliva, con techos de hasta 4 metros, grandes ventanales en cada planta y terrazas con vistas a las montañas y a la iglesia del pueblo. Estructura diáfana con enorme potencial para diseñar el hogar a medida.",
    descEn: "An impressive three-storey corner house plus attic in Benirredrà - Oliva, with ceilings up to 4 metres high, large windows on every floor, and terraces with mountain and village-church views. Open-plan structure with huge potential to design a custom home.",
    imgs: [
      "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/b2/b1/69/1393038899.jpg"
    ]
  },
  {
    id: "alcantera-piso-1",
    operacion: "venta",
    zona: "Alcántera de Xuquer",
    tipo: "Piso",
    precio: 79000,
    precioTexto: "79.000 €",
    hab: 3,
    m2: 106,
    planta: "3ª planta exterior",
    ascensor: "No",
    garaje: "No",
    titulo: "Piso amplio y luminoso con balcón",
    tituloEn: "Bright, spacious apartment with balcony",
    desc: "Vivienda amplia y muy luminosa en Alcàntera de Xúquer, con 3 dormitorios, 1 baño completo, aseo de cortesía, amplio salón-comedor con balcón de vistas despejadas y cocina independiente totalmente armariada. Excelente relación calidad-precio en un entorno tranquilo.",
    descEn: "A spacious, bright home in Alcàntera de Xúquer with 3 bedrooms, a full bathroom, guest toilet, a large living-dining room with a balcony with open views, and a fully fitted independent kitchen. Excellent value in a peaceful setting.",
    imgs: [
      "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/ef/89/95/1461218266.jpg"
    ]
  },
  {
    id: "cullera-piso-1",
    operacion: "venta",
    zona: "Cullera",
    tipo: "Piso",
    precio: 157000,
    precioTexto: "157.000 €",
    hab: 1,
    m2: 47,
    planta: "5ª planta exterior",
    ascensor: "Sí",
    garaje: "No",
    titulo: "Apartamento con terraza y vistas al castillo y al mar",
    tituloEn: "Apartment with terrace and castle and sea views",
    desc: "Apartamento tipo loft muy luminoso en Cullera, con amplia terraza y vistas espectaculares al Castillo de Cullera, la montaña y el mar Mediterráneo. Posibilidad de crear un dormitorio independiente con puerta corredera. Edificio con 2 ascensores.",
    descEn: "A bright loft-style apartment in Cullera with a large terrace and spectacular views of Cullera Castle, the mountains and the Mediterranean Sea. Can be divided into a separate bedroom with a sliding door. Building with 2 lifts.",
    imgs: [
      "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/66/92/a5/1461220353.jpg"
    ]
  },
  {
    id: "alborache-casa-1",
    operacion: "venta",
    zona: "Alborache",
    tipo: "Casa / chalet",
    precio: 169000,
    precioTexto: "169.000 €",
    hab: 5,
    m2: 160,
    planta: "2 plantas",
    ascensor: "No",
    garaje: "No",
    titulo: "Casa rural legalizada con piscina y terreno de cultivo",
    tituloEn: "Legalised country house with pool and cultivated land",
    desc: "Casa rural totalmente legalizada en Alborache, con parcela de 2.700 m², huerto con árboles frutales, piscina privada, panel solar y agua de riego propia. 5 habitaciones repartidas en dos plantas, terraza con vistas a la montaña.",
    descEn: "A fully legalised country house in Alborache, on a 2,700 m² plot with a fruit-tree orchard, private pool, solar panel and its own irrigation water. 5 bedrooms across two floors, and a terrace with mountain views.",
    imgs: [
      "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/38/97/c7/1436160855.jpg"
    ]
  },
  {
    id: "antella-piso-1",
    operacion: "venta",
    zona: "Antella",
    tipo: "Piso",
    precio: 109000,
    precioTexto: "109.000 €",
    hab: 4,
    m2: 112,
    planta: "1ª planta exterior",
    ascensor: "No",
    garaje: "Sí",
    titulo: "Piso amplio con garaje y vistas al Assut de Antella",
    tituloEn: "Spacious apartment with garage and views of the Assut de Antella",
    desc: "Vivienda amplia y luminosa en Antella, con 4 habitaciones, 2 baños, balcón con vistas despejadas al Assut de Antella y plaza de garaje incluida en el precio. Entorno tranquilo rodeado de naturaleza.",
    descEn: "A spacious, bright home in Antella with 4 bedrooms, 2 bathrooms, a balcony with open views of the Assut de Antella, and a garage space included in the price. A peaceful setting surrounded by nature.",
    imgs: [
      "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/77/bf/c4/1436744112.jpg"
    ]
  },
  {
    id: "naquera-piso-1",
    operacion: "venta",
    zona: "Náquera",
    tipo: "Piso",
    precio: 170000,
    precioTexto: "170.000 €",
    hab: 1,
    m2: 74,
    planta: "2ª planta exterior",
    ascensor: "Sí",
    garaje: "Sí",
    titulo: "Apartamento con terraza en residencial con piscina y pista de squash",
    tituloEn: "Apartment with terrace in a complex with pool and squash court",
    desc: "Apartamento reformado en una de las urbanizaciones más completas de Náquera, con terraza, piscina comunitaria, jardines, zona de juegos y pista de squash. Vivienda amueblada, con suelos Porcelanosa y sanitarios Roca.",
    descEn: "A renovated apartment in one of Náquera's most complete developments, with a terrace, communal pool, gardens, play area and squash court. Furnished, with Porcelanosa floors and Roca fittings.",
    imgs: [
      "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/13/88/73/1439835818.jpg"
    ]
  }
];
