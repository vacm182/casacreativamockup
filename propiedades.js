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
// =====================================================================
// PROPIEDADES.JS — CASA CREATIVA INMOBILIARIA
//
// Datos actualizados a partir de los anuncios de Idealista proporcionados.
// operacion: "venta"
// imgs: URLs de imágenes de Idealista
//
// NOTA:
// El inmueble 110336965 no está devolviendo actualmente información
// indexable fiable en Idealista. Se conserva como pendiente para evitar
// inventar datos.
// =====================================================================

const PROPIEDADES = [

  // ================================================================
  // 1. ADZANETA DEL MAESTRAT
  // ================================================================
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
    desc: "Preciosa casa de piedra situada en el corazón de Atzeneta del Maestrat, completamente reformada hace ocho años y conservando toda su esencia rústica. Cuenta con garaje privado, chimenea, salón-comedor, cocina americana equipada, terraza y siete habitaciones distribuidas en tres plantas. Ideal como vivienda habitual, segunda residencia o inversión para turismo rural.",
    descEn: "Beautiful stone house in the heart of Atzeneta del Maestrat, fully renovated eight years ago while preserving its rustic character. It features a private garage, fireplace, living-dining room, fitted open-plan kitchen, terrace and seven rooms distributed across three floors. Ideal as a main residence, second home or rural tourism investment.",
    imgs: [
      "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/6a/2b/87/1396713563.jpg"
    ],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/107593204/"
  },

  // ================================================================
  // 2. BENIRREDRÀ
  // ================================================================
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
    desc: "Impresionante casa de esquina de tres alturas más buhardilla en Benirredrà, con techos de hasta 4 metros, grandes ventanales y terrazas con vistas a las montañas y a la iglesia del pueblo. Una vivienda diáfana con enorme potencial para diseñar un hogar a medida.",
    descEn: "An impressive three-storey corner house plus attic in Benirredrà, with ceilings up to 4 metres high, large windows and terraces with mountain and village-church views. An open-plan property with huge potential to create a custom home.",
    imgs: [
      "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/b2/b1/69/1393038899.jpg"
    ],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/109629934/"
  },

  // ================================================================
  // 3. XÀTIVA — PISO
  // ================================================================
  {
    id: "xativa-piso-1",
    operacion: "venta",
    zona: "Xàtiva",
    tipo: "Piso",
    precio: 193000,
    precioTexto: "193.000 €",
    hab: 3,
    m2: 153,
    planta: "5ª planta exterior",
    ascensor: "Sí",
    garaje: "Sí",
    titulo: "Piso con piscina, garaje y trastero en residencial",
    tituloEn: "Apartment with pool, garage and storage room",
    desc: "Magnífica vivienda de 153 m² situada en una de las mejores zonas de Xàtiva, dentro de un conjunto residencial con piscina. Cuenta con 3 habitaciones, garaje, trastero, ascensor y una distribución amplia y luminosa.",
    descEn: "Magnificent 153 m² apartment in one of the best areas of Xàtiva, within a residential complex with a swimming pool. It features 3 bedrooms, garage, storage room, lift and a spacious, bright layout.",
    imgs: [
      "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/6a/2b/87/1396713563.jpg"
    ],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/112133846/"
  },

  // ================================================================
  // 4. ALCÀNTERA DE XÚQUER
  // ================================================================
  {
    id: "alcantera-piso-1",
    operacion: "venta",
    zona: "Alcàntera de Xúquer",
    tipo: "Piso",
    precio: 79000,
    precioTexto: "79.000 €",
    hab: 3,
    m2: 106,
    planta: "3ª planta exterior",
    ascensor: "No",
    garaje: "No",
    titulo: "Piso amplio y luminoso con balcón",
    tituloEn: "Bright and spacious apartment with balcony",
    desc: "Vivienda amplia y luminosa en Alcàntera de Xúquer, con 3 dormitorios, 1 baño completo, aseo de cortesía, salón-comedor con balcón de vistas despejadas y cocina independiente totalmente equipada. Dispone también de galería y aire acondicionado.",
    descEn: "A spacious and bright apartment in Alcàntera de Xúquer with 3 bedrooms, a full bathroom, guest toilet, living-dining room with open views from the balcony, and a fully fitted independent kitchen. It also features a utility gallery and air conditioning.",
    imgs: [
      "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/ef/89/95/1461218266.jpg"
    ],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/111864842/"
  },

  // ================================================================
  // 5. CULLERA
  // ================================================================
  {
    id: "cullera-piso-1",
    operacion: "venta",
    zona: "Cullera",
    tipo: "Apartamento",
    precio: 157000,
    precioTexto: "157.000 €",
    hab: 1,
    m2: 47,
    planta: "5ª planta exterior",
    ascensor: "Sí",
    garaje: "No",
    titulo: "Apartamento con gran terraza y vistas al castillo y al mar",
    tituloEn: "Apartment with large terrace and castle and sea views",
    desc: "Apartamento tipo loft muy luminoso en Cullera, con gran terraza y espectaculares vistas al Castillo de Cullera, la montaña y el mar Mediterráneo. Existe la posibilidad de crear un dormitorio independiente mediante una puerta corredera. Edificio con dos ascensores.",
    descEn: "A bright loft-style apartment in Cullera with a large terrace and spectacular views of Cullera Castle, the mountains and the Mediterranean Sea. A separate bedroom can be created using a sliding door. Building with two lifts.",
    imgs: [
      "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/66/92/a5/1461220353.jpg"
    ],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/111863835/"
  },

  // ================================================================
  // 6. ALBORACHE
  // ================================================================
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
    desc: "Casa rural totalmente legalizada en Alborache, con parcela de 2.700 m², huerto con árboles frutales, piscina privada, agua potable, riego propio y panel solar. Cuenta con 5 habitaciones distribuidas en dos plantas, terrazas, chimenea y vistas a la montaña.",
    descEn: "A fully legalised country house in Alborache, on a 2,700 m² plot with fruit trees, private pool, drinking water, irrigation water and a solar panel. It has 5 bedrooms across two floors, terraces, a fireplace and mountain views.",
    imgs: [
      "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/38/97/c7/1436160855.jpg"
    ],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/108176086/"
  },

  // ================================================================
  // 7. ANTELLA
  // ================================================================
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
    desc: "Vivienda amplia y luminosa en Antella, con 4 habitaciones, 2 baños completos, salón-comedor, cocina independiente, galería y balcón con vistas despejadas al Assut de Antella. Plaza de garaje incluida en el precio.",
    descEn: "A spacious and bright apartment in Antella with 4 bedrooms, 2 bathrooms, living-dining room, independent kitchen, utility gallery and balcony with open views of the Assut de Antella. Garage space included.",
    imgs: [
      "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/77/bf/c4/1436744112.jpg"
    ],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/111444006/"
  },

  // ================================================================
  // 8. SIMAT DE LA VALLDIGNA — CALLE MAJOR
  // ================================================================
  {
    id: "simat-piso-1",
    operacion: "venta",
    zona: "Simat de la Valldigna",
    tipo: "Piso",
    precio: 0,
    precioTexto: "Consultar precio",
    hab: 0,
    m2: 0,
    planta: "Consultar anuncio",
    ascensor: "Consultar",
    garaje: "Consultar",
    titulo: "Piso en Calle Major",
    tituloEn: "Apartment on Calle Major",
    desc: "Vivienda anunciada por Casa Creativa Inmobiliaria en Simat de la Valldigna. Consulta el anuncio original para conocer precio, superficie y características actualmente disponibles.",
    descEn: "Property advertised by Casa Creativa Inmobiliaria in Simat de la Valldigna. Please check the original listing for the current price, size and features.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/108227817/"
  },

  // ================================================================
  // 9. NÁQUERA — 1 HABITACIÓN
  // ================================================================
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
    titulo: "Apartamento con terraza en residencial con piscina",
    tituloEn: "Apartment with terrace in a residential complex with pool",
    desc: "Apartamento en una de las urbanizaciones más completas de Náquera, con terraza, piscina comunitaria, jardines y pista de squash. Dispone de 1 habitación, garaje, trastero y ascensor.",
    descEn: "Apartment in one of Náquera's most complete residential complexes, with terrace, communal pool, gardens and squash court. Includes 1 bedroom, garage, storage room and lift.",
    imgs: [
      "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/13/88/73/1439835818.jpg"
    ],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/111539823/"
  },

  // ================================================================
  // 10. SIMAT DE LA VALLDIGNA — AVENIDA JAUME I
  // ================================================================
  {
    id: "simat-piso-2",
    operacion: "venta",
    zona: "Simat de la Valldigna",
    tipo: "Piso",
    precio: 180000,
    precioTexto: "180.000 €",
    hab: 4,
    m2: 106,
    planta: "3ª planta exterior",
    ascensor: "Sí",
    garaje: "No",
    titulo: "Piso amplio con terraza y 4 dormitorios",
    tituloEn: "Spacious 4-bedroom apartment with terrace",
    desc: "Magnífico piso de 106 m² en Simat de la Valldigna con 4 dormitorios dobles, 2 baños, vestidor, salón-comedor con cocina americana, balcón, lavadero independiente y terraza privada. Edificio con ascensor.",
    descEn: "Magnificent 106 m² apartment in Simat de la Valldigna with 4 double bedrooms, 2 bathrooms, dressing room, living-dining room with open-plan kitchen, balcony, separate laundry room and private terrace. Building with lift.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/111529743/"
  },

  // ================================================================
  // 11. VALENCIA — TORMOS
  // ================================================================
  {
    id: "valencia-tormos-piso-1",
    operacion: "venta",
    zona: "Tormos, València",
    tipo: "Piso",
    precio: 213000,
    precioTexto: "213.000 €",
    hab: 3,
    m2: 89,
    planta: "4ª planta exterior",
    ascensor: "No",
    garaje: "No",
    titulo: "Piso totalmente amueblado y listo para entrar a vivir",
    tituloEn: "Fully furnished apartment ready to move into",
    desc: "Piso de 89 m² en Valencia, situado en una cuarta planta exterior sin ascensor. Cuenta con 3 habitaciones, balcón, salón-comedor, cocina independiente y se vende completamente amueblado.",
    descEn: "89 m² apartment in Valencia on the fourth exterior floor without a lift. It features 3 bedrooms, balcony, living-dining room and independent kitchen, and is sold fully furnished.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/111827230/"
  },

  // ================================================================
  // 12. NÁQUERA — 3 HABITACIONES
  // ================================================================
  {
    id: "naquera-piso-2",
    operacion: "venta",
    zona: "Náquera",
    tipo: "Piso",
    precio: 234385,
    precioTexto: "234.385 €",
    hab: 3,
    m2: 92,
    planta: "2ª planta exterior",
    ascensor: "Sí",
    garaje: "Sí",
    titulo: "Piso con garaje, piscina y pista de squash",
    tituloEn: "Apartment with garage, pool and squash court",
    desc: "Magnífico piso en una completa urbanización de Náquera con piscina, jardines y pista de squash. Cuenta con 3 habitaciones, garaje, trastero, ascensor y aire acondicionado por conductos.",
    descEn: "Magnificent apartment in a complete residential complex in Náquera with pool, gardens and squash court. It features 3 bedrooms, garage, storage room, lift and ducted air conditioning.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/110742038/"
  },

  // ================================================================
  // 13. BARX
  // ================================================================
  {
    id: "barx-piso-1",
    operacion: "venta",
    zona: "Barx",
    tipo: "Piso",
    precio: 105000,
    precioTexto: "105.000 €",
    hab: 4,
    m2: 132,
    planta: "2ª planta exterior",
    ascensor: "No",
    garaje: "No",
    titulo: "Piso amplio, luminoso y con trastero",
    tituloEn: "Spacious, bright apartment with storage room",
    desc: "Piso de 132 m² en Barx con 4 dormitorios, 2 baños, salón-comedor luminoso, cocina independiente con despensa, galería y trastero incluido. Vivienda muy luminosa y totalmente eléctrica.",
    descEn: "132 m² apartment in Barx with 4 bedrooms, 2 bathrooms, bright living-dining room, independent kitchen with pantry, utility gallery and storage room. Very bright, fully electric home.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/111901024/"
  },

  // ================================================================
  // 14. CHELLA
  // ================================================================
  {
    id: "chella-chalet-1",
    operacion: "venta",
    zona: "Chella",
    tipo: "Casa / chalet",
    precio: 383000,
    precioTexto: "383.000 €",
    hab: 3,
    m2: 155,
    planta: "Casa independiente",
    ascensor: "No",
    garaje: "No",
    titulo: "Chalet con piscina, licencia turística y 19.000 m²",
    tituloEn: "Villa with pool, tourist licence and 19,000 m² plot",
    desc: "Espectacular chalet independiente en el entorno natural de Chella, con piscina, licencia turística y una enorme parcela de aproximadamente 19.000 m². Una propiedad con gran potencial residencial y de inversión.",
    descEn: "Spectacular detached villa in the natural surroundings of Chella, with swimming pool, tourist licence and a huge plot of approximately 19,000 m². A property with excellent residential and investment potential.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/109671927/"
  },

  // ================================================================
  // 15. FAVARA — CASA ADOSADA
  // ================================================================
  {
    id: "favara-casa-1",
    operacion: "venta",
    zona: "Favara",
    tipo: "Casa / chalet adosado",
    precio: 124000,
    precioTexto: "124.000 €",
    hab: 4,
    m2: 183,
    planta: "Casa",
    ascensor: "No",
    garaje: "No",
    titulo: "Casa con gran potencial de reforma",
    tituloEn: "House with great renovation potential",
    desc: "Casa de 183 m² en Favara, amplia, luminosa y con mucho carácter. Conserva elementos originales como techos altos, suelos de mosaico, puerta antigua y chimenea decorativa. Una excelente oportunidad para crear una vivienda completamente personalizada.",
    descEn: "183 m² house in Favara, spacious, bright and full of character. Original features include high ceilings, mosaic floors, an old door and a decorative fireplace. An excellent opportunity to create a fully personalised home.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/110336997/"
  },

  // ================================================================
  // 16. FAVARA — CHALET
  // ================================================================
  {
    id: "favara-casa-2",
    operacion: "venta",
    zona: "Favara",
    tipo: "Casa / chalet independiente",
    precio: 149000,
    precioTexto: "149.000 €",
    hab: 5,
    m2: 233,
    planta: "1 planta",
    ascensor: "No",
    garaje: "Sí",
    titulo: "Chalet independiente amplio con terraza y garaje",
    tituloEn: "Spacious detached house with terrace and garage",
    desc: "Chalet independiente de 233 m² construidos sobre parcela de 116 m². Dispone de 5 habitaciones, 2 baños, amplio salón-comedor, cocina espaciosa, terraza, balcón, armarios empotrados y trastero. Vivienda en buen estado y lista para entrar.",
    descEn: "233 m² detached house on a 116 m² plot. It features 5 bedrooms, 2 bathrooms, spacious living-dining room, large kitchen, terrace, balcony, fitted wardrobes and storage room. In good condition and ready to move into.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/111189926/"
  },

  // ================================================================
  // 17. GANDIA — CALLE RÒTOVA
  // ================================================================
  {
    id: "gandia-rotova-piso-1",
    operacion: "venta",
    zona: "Gandia",
    tipo: "Piso",
    precio: 110000,
    precioTexto: "110.000 €",
    hab: 3,
    m2: 73,
    planta: "1ª planta exterior",
    ascensor: "No",
    garaje: "No",
    titulo: "Piso amplio, amueblado y con balcón",
    tituloEn: "Spacious furnished apartment with balcony",
    desc: "Piso de 73 m² en Gandia, completamente amueblado, con 3 habitaciones, baño, amplio salón-comedor, balcón cerrado, cocina independiente, galería y aire acondicionado.",
    descEn: "73 m² apartment in Gandia, fully furnished, with 3 bedrooms, bathroom, spacious living-dining room, enclosed balcony, independent kitchen, utility gallery and air conditioning.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/112278331/"
  },

  // ================================================================
  // 18. ALZIRA
  // ================================================================
  {
    id: "alzira-piso-1",
    operacion: "venta",
    zona: "Alzira",
    tipo: "Piso",
    precio: 165000,
    precioTexto: "165.000 €",
    hab: 2,
    m2: 77,
    planta: "1ª planta exterior",
    ascensor: "No",
    garaje: "No",
    titulo: "Piso reformado, luminoso y listo para entrar",
    tituloEn: "Renovated, bright apartment ready to move into",
    desc: "Acogedor piso de 77 m² en Alzira, reformado y listo para entrar a vivir. Cuenta con 2 habitaciones, baño, armarios empotrados y aire acondicionado. Una opción interesante tanto como vivienda habitual como inversión.",
    descEn: "Cosy 77 m² apartment in Alzira, renovated and ready to move into. It features 2 bedrooms, bathroom, fitted wardrobes and air conditioning. An interesting option both as a main home and as an investment.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/112205628/"
  },

  // ================================================================
  // 19. XÀTIVA — CASA
  // ================================================================
  {
    id: "xativa-casa-1",
    operacion: "venta",
    zona: "Xàtiva",
    tipo: "Casa / chalet adosado",
    precio: 220000,
    precioTexto: "220.000 €",
    hab: 6,
    m2: 291,
    planta: "Varias plantas",
    ascensor: "No",
    garaje: "No",
    titulo: "Casa amplia y reformada con dos terrazas",
    tituloEn: "Spacious renovated house with two terraces",
    desc: "Amplia casa de 291 m² en Xàtiva, reformada y distribuida en varias plantas. Cuenta con 6 habitaciones, 3 baños, dos terrazas y grandes espacios interiores. Una vivienda con mucha personalidad y capacidad para familias numerosas.",
    descEn: "Spacious 291 m² house in Xàtiva, renovated and distributed across several floors. It features 6 bedrooms, 3 bathrooms and two terraces. A characterful property with plenty of space for large families.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/112077005/"
  },

  // ================================================================
  // 20. INMUEBLE 110336965
  // ================================================================
  {
    id: "pendiente-110336965",
    operacion: "venta",
    zona: "Pendiente de verificar",
    tipo: "Pendiente de verificar",
    precio: 0,
    precioTexto: "Consultar",
    hab: 0,
    m2: 0,
    planta: "Pendiente",
    ascensor: "Pendiente",
    garaje: "Pendiente",
    titulo: "Inmueble pendiente de actualización",
    tituloEn: "Property pending update",
    desc: "Este anuncio está incluido en el listado original, pero actualmente no se ha podido recuperar información fiable del anuncio para evitar introducir datos incorrectos.",
    descEn: "This listing was included in the original list, but reliable current information could not be retrieved, so incorrect data has been avoided.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/110336965/"
  },

  // ================================================================
  // 21. MOGENTE
  // ================================================================
  {
    id: "mogente-casa-1",
    operacion: "venta",
    zona: "Mogente",
    tipo: "Casa / chalet",
    precio: 187000,
    precioTexto: "187.000 €",
    hab: 4,
    m2: 251,
    planta: "Casa",
    ascensor: "No",
    garaje: "No",
    titulo: "Casa reformada con gran terraza y apartamento independiente",
    tituloEn: "Renovated house with large terrace and independent apartment",
    desc: "Propiedad completamente reformada en Mogente, con una gran terraza de aproximadamente 50 m², vistas espectaculares y un apartamento independiente reformado. Una vivienda singular con posibilidades tanto residenciales como de inversión.",
    descEn: "Fully renovated property in Mogente with a large terrace of approximately 50 m², spectacular views and a renovated independent apartment. A unique property with both residential and investment potential.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/108163156/"
  },

  // ================================================================
  // 22. VINARÒS
  // ================================================================
  {
    id: "vinaros-casa-1",
    operacion: "venta",
    zona: "Vinaròs",
    tipo: "Casa / chalet adosado",
    precio: 175000,
    precioTexto: "175.000 €",
    hab: 2,
    m2: 114,
    planta: "Casa",
    ascensor: "No",
    garaje: "No",
    titulo: "Adosado junto a la playa en urbanización Las Cañas",
    tituloEn: "Townhouse near the beach in Las Cañas",
    desc: "Adosado de 114 m² en la Urbanización Las Cañas de Vinaròs, situado en la Costa Norte, a tan solo 30 metros de la playa y junto a Cala Foradada. Una excelente opción como segunda residencia o inversión.",
    descEn: "114 m² townhouse in Las Cañas residential complex in Vinaròs, located on the Costa Norte, just 30 metres from the beach and next to Cala Foradada. An excellent option as a second home or investment.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/109344107/"
  },

  // ================================================================
  // 23. L'OLLERIA
  // ================================================================
  {
    id: "olleria-piso-1",
    operacion: "venta",
    zona: "L'Olleria",
    tipo: "Piso",
    precio: 135000,
    precioTexto: "135.000 €",
    hab: 3,
    m2: 110,
    planta: "Planta baja",
    ascensor: "No",
    garaje: "No",
    titulo: "Piso con gran patio privado de 100 m²",
    tituloEn: "Apartment with a large 100 m² private patio",
    desc: "Espacioso piso de 110 m² en L'Olleria, con aproximadamente 89 m² de vivienda y un impresionante patio privado de 100 m². Cuenta con 3 habitaciones y ofrece un gran espacio exterior para disfrutar durante todo el año.",
    descEn: "Spacious 110 m² apartment in L'Olleria, with approximately 89 m² of living space and an impressive 100 m² private patio. It features 3 bedrooms and a large outdoor area to enjoy throughout the year.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/105750727/"
  },

  // ================================================================
  // 24. GANDIA — PLAZA ELÍPTICA
  // ================================================================
  {
    id: "gandia-elitica-piso-1",
    operacion: "venta",
    zona: "Gandia",
    tipo: "Piso",
    precio: 130000,
    precioTexto: "130.000 €",
    hab: 3,
    m2: 115,
    planta: "5ª planta exterior",
    ascensor: "No",
    garaje: "No",
    titulo: "Piso amplio, luminoso y con gran terraza",
    tituloEn: "Spacious, bright apartment with a large terrace",
    desc: "Piso de 115 m² en Gandia, completamente exterior y situado en una quinta planta sin ascensor. Cuenta con 3 dormitorios dobles, 2 baños, salón-comedor, cocina independiente y una gran terraza alargada. Se vende amueblado.",
    descEn: "115 m² apartment in Gandia, fully exterior and located on the fifth floor without a lift. It features 3 double bedrooms, 2 bathrooms, living-dining room, independent kitchen and a large terrace. Sold furnished.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/110718189/"
  },

  // ================================================================
  // 25. ALTURA
  // ================================================================
  {
    id: "altura-piso-1",
    operacion: "venta",
    zona: "Altura",
    tipo: "Piso",
    precio: 129000,
    precioTexto: "129.000 €",
    hab: 2,
    m2: 70,
    planta: "1ª planta exterior",
    ascensor: "No",
    garaje: "No",
    titulo: "Piso a estrenar en edificio de 2017",
    tituloEn: "Brand-new apartment in a 2017 building",
    desc: "Piso de 70 m² en Altura, situado en una primera planta exterior de un edificio construido en 2017. Cuenta con 2 habitaciones declaradas actualmente, 2 baños y orientación este-oeste. Una vivienda moderna y lista para entrar a vivir.",
    descEn: "70 m² apartment in Altura, located on the first exterior floor of a building constructed in 2017. It currently has 2 listed bedrooms, 2 bathrooms and east-west orientation. A modern home ready to move into.",
    imgs: [],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/109195032/"
  }

];
