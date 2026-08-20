// =====================================================================
// PROPIEDADES.JS — aquí se agregan/editan/borran los inmuebles reales.
//
// Para agregar una propiedad nueva: copia un bloque completo { ... },
// pégalo antes del cierre "];", cámbiale el id (único, sin espacios)
// y rellena los datos. Aparecerá sola en Home, Comprar/Alquilar y su ficha.
//
// operacion: "venta" o "alquiler"
// tipo: usar SOLO "Piso" o "Casa / chalet" (son los únicos valores que
//       reconoce el buscador/filtro — no uses variantes como "Apartamento"
//       o "Casa adosada", o el filtro de tipo no las va a encontrar)
// imgs: pon 1 o más fotos (la primera se usa como foto principal)
// url: opcional, link al anuncio original en Idealista (solo referencia)
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
    precio: 129000,
    precioTexto: "129.000 €",
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
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20de%20Moss%C3%A8n%20Pere%2C%20Adzaneta%20del%20Maestrat%20%E2%80%94%20idealista/imgi_101_1396713684.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20de%20Moss%C3%A8n%20Pere%2C%20Adzaneta%20del%20Maestrat%20%E2%80%94%20idealista/imgi_103_1396713686.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20de%20Moss%C3%A8n%20Pere%2C%20Adzaneta%20del%20Maestrat%20%E2%80%94%20idealista/imgi_105_1396713689.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20de%20Moss%C3%A8n%20Pere%2C%20Adzaneta%20del%20Maestrat%20%E2%80%94%20idealista/imgi_107_1396713691.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20de%20Moss%C3%A8n%20Pere%2C%20Adzaneta%20del%20Maestrat%20%E2%80%94%20idealista/imgi_109_1396713693.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20de%20Moss%C3%A8n%20Pere%2C%20Adzaneta%20del%20Maestrat%20%E2%80%94%20idealista/imgi_111_1396713705.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20de%20Moss%C3%A8n%20Pere%2C%20Adzaneta%20del%20Maestrat%20%E2%80%94%20idealista/imgi_113_1396713707.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20de%20Moss%C3%A8n%20Pere%2C%20Adzaneta%20del%20Maestrat%20%E2%80%94%20idealista/imgi_115_1396713709.webp"
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
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Ample%2C%20Benirredra%20%E2%80%94%20idealista/imgi_100_1393038971.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Ample%2C%20Benirredra%20%E2%80%94%20idealista/imgi_102_1393038972.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Ample%2C%20Benirredra%20%E2%80%94%20idealista/imgi_104_1393038973.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Ample%2C%20Benirredra%20%E2%80%94%20idealista/imgi_106_1393038974.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Ample%2C%20Benirredra%20%E2%80%94%20idealista/imgi_108_1393038848.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Ample%2C%20Benirredra%20%E2%80%94%20idealista/imgi_110_1393038849.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Ample%2C%20Benirredra%20%E2%80%94%20idealista/imgi_112_1393038850.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Ample%2C%20Benirredra%20%E2%80%94%20idealista/imgi_114_1393038851.webp"
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
      "Images/Piso%20en%20venta%20en%20Calle%20Pintor%20Juan%20Frances%2C%2011%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_101_1459823274.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Pintor%20Juan%20Frances%2C%2011%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_103_1459823285.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Pintor%20Juan%20Frances%2C%2011%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_105_1459823295.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Pintor%20Juan%20Frances%2C%2011%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_107_1459823257.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Pintor%20Juan%20Frances%2C%2011%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_109_1459823297.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Pintor%20Juan%20Frances%2C%2011%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_111_1459823298.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Pintor%20Juan%20Frances%2C%2011%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_113_1459823258.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Pintor%20Juan%20Frances%2C%2011%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_115_1459823286.webp"
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
    precio: 83000,
    precioTexto: "83.000 €",
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
      "Images/Piso%20en%20venta%20en%20Avenida%20la%20Vall%20Farta%2C%20Alc%C3%A1ntera%20de%20Xuquer%20%E2%80%94%20idealista/imgi_101_1461218284.webp",
      "Images/Piso%20en%20venta%20en%20Avenida%20la%20Vall%20Farta%2C%20Alc%C3%A1ntera%20de%20Xuquer%20%E2%80%94%20idealista/imgi_103_1461218285.webp",
      "Images/Piso%20en%20venta%20en%20Avenida%20la%20Vall%20Farta%2C%20Alc%C3%A1ntera%20de%20Xuquer%20%E2%80%94%20idealista/imgi_105_1461218286.webp",
      "Images/Piso%20en%20venta%20en%20Avenida%20la%20Vall%20Farta%2C%20Alc%C3%A1ntera%20de%20Xuquer%20%E2%80%94%20idealista/imgi_107_1461218287.webp",
      "Images/Piso%20en%20venta%20en%20Avenida%20la%20Vall%20Farta%2C%20Alc%C3%A1ntera%20de%20Xuquer%20%E2%80%94%20idealista/imgi_109_1461218224.webp",
      "Images/Piso%20en%20venta%20en%20Avenida%20la%20Vall%20Farta%2C%20Alc%C3%A1ntera%20de%20Xuquer%20%E2%80%94%20idealista/imgi_111_1461218295.webp",
      "Images/Piso%20en%20venta%20en%20Avenida%20la%20Vall%20Farta%2C%20Alc%C3%A1ntera%20de%20Xuquer%20%E2%80%94%20idealista/imgi_113_1461218296.webp",
      "Images/Piso%20en%20venta%20en%20Avenida%20la%20Vall%20Farta%2C%20Alc%C3%A1ntera%20de%20Xuquer%20%E2%80%94%20idealista/imgi_115_1461218297.webp"
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
    tipo: "Piso",
    precio: 167000,
    precioTexto: "167.000 €",
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
      "Images/Piso%20en%20venta%20en%20Calle%20de%20l%27Actor%20Ismael%20Merlo%2C%20Rac%C3%B3%2C%20Cullera%20%E2%80%94%20idealista/imgi_101_1461220524.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20l%27Actor%20Ismael%20Merlo%2C%20Rac%C3%B3%2C%20Cullera%20%E2%80%94%20idealista/imgi_103_1461220525.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20l%27Actor%20Ismael%20Merlo%2C%20Rac%C3%B3%2C%20Cullera%20%E2%80%94%20idealista/imgi_105_1461220526.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20l%27Actor%20Ismael%20Merlo%2C%20Rac%C3%B3%2C%20Cullera%20%E2%80%94%20idealista/imgi_107_1461220527.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20l%27Actor%20Ismael%20Merlo%2C%20Rac%C3%B3%2C%20Cullera%20%E2%80%94%20idealista/imgi_109_1461220528.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20l%27Actor%20Ismael%20Merlo%2C%20Rac%C3%B3%2C%20Cullera%20%E2%80%94%20idealista/imgi_111_1461220529.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20l%27Actor%20Ismael%20Merlo%2C%20Rac%C3%B3%2C%20Cullera%20%E2%80%94%20idealista/imgi_113_1461220496.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20l%27Actor%20Ismael%20Merlo%2C%20Rac%C3%B3%2C%20Cullera%20%E2%80%94%20idealista/imgi_115_1461220506.webp"
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
    precio: 179000,
    precioTexto: "179.000 €",
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
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Reverendo%20Jos%C3%A9%20Vinat%2C%20Alborache%20%E2%80%94%20idealista/imgi_101_1436160708.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Reverendo%20Jos%C3%A9%20Vinat%2C%20Alborache%20%E2%80%94%20idealista/imgi_103_1436160709.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Reverendo%20Jos%C3%A9%20Vinat%2C%20Alborache%20%E2%80%94%20idealista/imgi_105_1436160710.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Reverendo%20Jos%C3%A9%20Vinat%2C%20Alborache%20%E2%80%94%20idealista/imgi_107_1436160711.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Reverendo%20Jos%C3%A9%20Vinat%2C%20Alborache%20%E2%80%94%20idealista/imgi_109_1436160712.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Reverendo%20Jos%C3%A9%20Vinat%2C%20Alborache%20%E2%80%94%20idealista/imgi_111_1436160713.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Reverendo%20Jos%C3%A9%20Vinat%2C%20Alborache%20%E2%80%94%20idealista/imgi_113_1436160714.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Reverendo%20Jos%C3%A9%20Vinat%2C%20Alborache%20%E2%80%94%20idealista/imgi_115_1436160885.webp"
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
    precio: 113000,
    precioTexto: "113.000 €",
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
      "Images/Piso%20en%20venta%20en%20Calle%20de%20la%20Pur%C3%ADssima%2C%20Antella%20%E2%80%94%20idealista/imgi_23_es.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20la%20Pur%C3%ADssima%2C%20Antella%20%E2%80%94%20idealista/imgi_25_1436744112.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20la%20Pur%C3%ADssima%2C%20Antella%20%E2%80%94%20idealista/imgi_26_1436744112.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20la%20Pur%C3%ADssima%2C%20Antella%20%E2%80%94%20idealista/imgi_35_1436744112.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20la%20Pur%C3%ADssima%2C%20Antella%20%E2%80%94%20idealista/imgi_37_1436744113.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20la%20Pur%C3%ADssima%2C%20Antella%20%E2%80%94%20idealista/imgi_39_1436744077.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20la%20Pur%C3%ADssima%2C%20Antella%20%E2%80%94%20idealista/imgi_40_1436744112.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20la%20Pur%C3%ADssima%2C%20Antella%20%E2%80%94%20idealista/imgi_42_1436744112.webp"
    ],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/111444006/"
  },

  // ================================================================
  // 8. SIMAT DE LA VALLDIGNA — CALLE MAJOR
  // ⚠️ Este link daba error 404 al revisarlo — probablemente ya no
  // está disponible en Idealista. Confirmar con Lizeth si sigue en venta.
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
    ascensor: "No",
    garaje: "No",
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
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_100_1393049149.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_100_1436160381.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_100_1439835897.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_102_1393049150.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_102_1436160382.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_102_1439835898.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_104_1393049151.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_104_1436160383.webp"
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
    imgs: [
      "Images/Piso%20en%20venta%20en%20Avenida%20Jaume%20I%2C%20Simat%20de%20la%20Valldigna%20%E2%80%94%20idealista/imgi_100_1439502962.webp",
      "Images/Piso%20en%20venta%20en%20Avenida%20Jaume%20I%2C%20Simat%20de%20la%20Valldigna%20%E2%80%94%20idealista/imgi_102_1439502963.webp",
      "Images/Piso%20en%20venta%20en%20Avenida%20Jaume%20I%2C%20Simat%20de%20la%20Valldigna%20%E2%80%94%20idealista/imgi_104_1439502964.webp",
      "Images/Piso%20en%20venta%20en%20Avenida%20Jaume%20I%2C%20Simat%20de%20la%20Valldigna%20%E2%80%94%20idealista/imgi_106_1439502965.webp",
      "Images/Piso%20en%20venta%20en%20Avenida%20Jaume%20I%2C%20Simat%20de%20la%20Valldigna%20%E2%80%94%20idealista/imgi_108_1439502966.webp",
      "Images/Piso%20en%20venta%20en%20Avenida%20Jaume%20I%2C%20Simat%20de%20la%20Valldigna%20%E2%80%94%20idealista/imgi_110_1439502887.webp",
      "Images/Piso%20en%20venta%20en%20Avenida%20Jaume%20I%2C%20Simat%20de%20la%20Valldigna%20%E2%80%94%20idealista/imgi_112_1439502888.webp",
      "Images/Piso%20en%20venta%20en%20Avenida%20Jaume%20I%2C%20Simat%20de%20la%20Valldigna%20%E2%80%94%20idealista/imgi_114_1439502889.webp"
    ],
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
    imgs: [
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Just%20Ram%C3%ADrez%2C%20Tormos%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_23_es.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Just%20Ram%C3%ADrez%2C%20Tormos%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_25_1449712388.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Just%20Ram%C3%ADrez%2C%20Tormos%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_37_1449712388.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Just%20Ram%C3%ADrez%2C%20Tormos%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_39_1449712397.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Just%20Ram%C3%ADrez%2C%20Tormos%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_41_1449712399.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Just%20Ram%C3%ADrez%2C%20Tormos%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_42_1449712388.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Just%20Ram%C3%ADrez%2C%20Tormos%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_44_1449712397.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Just%20Ram%C3%ADrez%2C%20Tormos%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_46_1449712399.webp"
    ],
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
    imgs: [
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_100_1393049149.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_100_1436160381.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_100_1439835897.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_102_1393049150.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_102_1436160382.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_102_1439835898.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_104_1393049151.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Miguel%20Angel%20Blanco%2C%20Casco%20Urbano%2C%20N%C3%A1quera%20%E2%80%94%20idealista/imgi_104_1436160383.webp"
    ],
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
    imgs: [
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Gandia%2C%20Barx%20%E2%80%94%20idealista/imgi_100_1452162255.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Gandia%2C%20Barx%20%E2%80%94%20idealista/imgi_102_1452162256.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Gandia%2C%20Barx%20%E2%80%94%20idealista/imgi_104_1452162257.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Gandia%2C%20Barx%20%E2%80%94%20idealista/imgi_106_1452162258.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Gandia%2C%20Barx%20%E2%80%94%20idealista/imgi_108_1452162259.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Gandia%2C%20Barx%20%E2%80%94%20idealista/imgi_110_1452162260.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Gandia%2C%20Barx%20%E2%80%94%20idealista/imgi_112_1452162261.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Gandia%2C%20Barx%20%E2%80%94%20idealista/imgi_114_1452162262.webp"
    ],
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
    imgs: [
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Plaza%20Adolfo%20Gimenez%20del%20Rio%2C%20Chella%20%E2%80%94%20idealista/imgi_101_1396613445.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Plaza%20Adolfo%20Gimenez%20del%20Rio%2C%20Chella%20%E2%80%94%20idealista/imgi_103_1396613447.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Plaza%20Adolfo%20Gimenez%20del%20Rio%2C%20Chella%20%E2%80%94%20idealista/imgi_105_1396613448.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Plaza%20Adolfo%20Gimenez%20del%20Rio%2C%20Chella%20%E2%80%94%20idealista/imgi_107_1396613449.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Plaza%20Adolfo%20Gimenez%20del%20Rio%2C%20Chella%20%E2%80%94%20idealista/imgi_109_1396613450.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Plaza%20Adolfo%20Gimenez%20del%20Rio%2C%20Chella%20%E2%80%94%20idealista/imgi_111_1396613452.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Plaza%20Adolfo%20Gimenez%20del%20Rio%2C%20Chella%20%E2%80%94%20idealista/imgi_113_1396613453.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Plaza%20Adolfo%20Gimenez%20del%20Rio%2C%20Chella%20%E2%80%94%20idealista/imgi_115_1396613454.webp"
    ],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/109671927/"
  },

  // ================================================================
  // 15. FAVARA — CASA
  // ================================================================
  {
    id: "favara-casa-1",
    operacion: "venta",
    zona: "Favara",
    tipo: "Casa / chalet",
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
    imgs: [
      "Images/Chalet%20adosado%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_100_1423713182.webp",
      "Images/Chalet%20adosado%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_102_1423713184.webp",
      "Images/Chalet%20adosado%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_104_1423713186.webp",
      "Images/Chalet%20adosado%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_106_1423713188.webp",
      "Images/Chalet%20adosado%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_108_1423713190.webp",
      "Images/Chalet%20adosado%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_110_1423713192.webp",
      "Images/Chalet%20adosado%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_112_1423713194.webp",
      "Images/Chalet%20adosado%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_114_1423713205.webp"
    ],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/110336997/"
  },

  // ================================================================
  // 16. FAVARA — CHALET
  // ================================================================
  {
    id: "favara-casa-2",
    operacion: "venta",
    zona: "Favara",
    tipo: "Casa / chalet",
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
    imgs: [
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_100_1436159723.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_102_1436159724.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_104_1436159702.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_106_1436159703.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_108_1436159704.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_110_1436159725.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_112_1436159726.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Favara%2C%20Ribera%20Baixa%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_114_1436159727.webp"
    ],
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
    imgs: [
      "Images/Piso%20en%20venta%20en%20Calle%20R%C3%B2tova%2C%20Benipeixcar%20-%20El%20Raval%2C%20Gandia%20%E2%80%94%20idealista/imgi_101_1464582441.jpg",
      "Images/Piso%20en%20venta%20en%20Calle%20R%C3%B2tova%2C%20Benipeixcar%20-%20El%20Raval%2C%20Gandia%20%E2%80%94%20idealista/imgi_105_1464582443.jpg",
      "Images/Piso%20en%20venta%20en%20Calle%20R%C3%B2tova%2C%20Benipeixcar%20-%20El%20Raval%2C%20Gandia%20%E2%80%94%20idealista/imgi_107_1464582444.jpg",
      "Images/Piso%20en%20venta%20en%20Calle%20R%C3%B2tova%2C%20Benipeixcar%20-%20El%20Raval%2C%20Gandia%20%E2%80%94%20idealista/imgi_109_1464582455.jpg",
      "Images/Piso%20en%20venta%20en%20Calle%20R%C3%B2tova%2C%20Benipeixcar%20-%20El%20Raval%2C%20Gandia%20%E2%80%94%20idealista/imgi_111_1464582456.jpg",
      "Images/Piso%20en%20venta%20en%20Calle%20R%C3%B2tova%2C%20Benipeixcar%20-%20El%20Raval%2C%20Gandia%20%E2%80%94%20idealista/imgi_113_1464582457.jpg",
      "Images/Piso%20en%20venta%20en%20Calle%20R%C3%B2tova%2C%20Benipeixcar%20-%20El%20Raval%2C%20Gandia%20%E2%80%94%20idealista/imgi_115_1464582458.jpg",
      "Images/Piso%20en%20venta%20en%20Calle%20R%C3%B2tova%2C%20Benipeixcar%20-%20El%20Raval%2C%20Gandia%20%E2%80%94%20idealista/imgi_117_1464582460.jpg"
    ],
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
    imgs: [
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Murta%2C%20Centre%2C%20Alzira%20%E2%80%94%20idealista/imgi_101_1462179155.jpg",
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Murta%2C%20Centre%2C%20Alzira%20%E2%80%94%20idealista/imgi_105_1462179157.jpg",
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Murta%2C%20Centre%2C%20Alzira%20%E2%80%94%20idealista/imgi_107_1462179159.jpg",
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Murta%2C%20Centre%2C%20Alzira%20%E2%80%94%20idealista/imgi_111_1462179149.jpg",
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Murta%2C%20Centre%2C%20Alzira%20%E2%80%94%20idealista/imgi_113_1462179151.jpg",
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Murta%2C%20Centre%2C%20Alzira%20%E2%80%94%20idealista/imgi_115_1462179180.jpg",
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Murta%2C%20Centre%2C%20Alzira%20%E2%80%94%20idealista/imgi_117_1462179153.jpg",
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Murta%2C%20Centre%2C%20Alzira%20%E2%80%94%20idealista/imgi_121_1462179184.jpg"
    ],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/112205628/"
  },

  // ================================================================
  // 19. XÀTIVA — CASA
  // ================================================================
  {
    id: "xativa-casa-1",
    operacion: "venta",
    zona: "Xàtiva",
    tipo: "Casa / chalet",
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
    imgs: [
      "Images/Chalet%20adosado%20en%20venta%20en%20Calle%20Forn%20na%20Pinyola%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_100_1457971296.webp",
      "Images/Chalet%20adosado%20en%20venta%20en%20Calle%20Forn%20na%20Pinyola%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_102_1457971231.webp",
      "Images/Chalet%20adosado%20en%20venta%20en%20Calle%20Forn%20na%20Pinyola%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_104_1457971250.webp",
      "Images/Chalet%20adosado%20en%20venta%20en%20Calle%20Forn%20na%20Pinyola%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_106_1457971232.webp",
      "Images/Chalet%20adosado%20en%20venta%20en%20Calle%20Forn%20na%20Pinyola%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_108_1457971233.webp",
      "Images/Chalet%20adosado%20en%20venta%20en%20Calle%20Forn%20na%20Pinyola%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_110_1457971234.webp",
      "Images/Chalet%20adosado%20en%20venta%20en%20Calle%20Forn%20na%20Pinyola%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_112_1457971305.webp",
      "Images/Chalet%20adosado%20en%20venta%20en%20Calle%20Forn%20na%20Pinyola%2C%20X%C3%A1tiva%20%E2%80%94%20idealista/imgi_114_1457971291.webp"
    ],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/112077005/"
  },

  // ================================================================
  // 20. VALENCIA — EL PILAR (antes "pendiente de verificar")
  // ================================================================
  {
    id: "valencia-elpilar-piso-1",
    operacion: "venta",
    zona: "El Pilar, València",
    tipo: "Piso",
    precio: 710000,
    precioTexto: "710.000 €",
    hab: 4,
    m2: 171,
    planta: "3ª planta exterior",
    ascensor: "Sí",
    garaje: "Sí",
    titulo: "Gran piso con garaje y trastero junto a Torres de Quart",
    tituloEn: "Large apartment with garage and storage near Torres de Quart",
    desc: "Magnífico piso en una de las zonas más emblemáticas de Valencia, junto a las históricas Torres de Quart y a escasos metros del Jardín del Turia. Cuatro dormitorios dobles con armarios empotrados, dos baños completos, amplio salón-comedor, cocina independiente equipada, climatización por conductos y garaje más trastero incluidos. Se vende amueblado.",
    descEn: "Magnificent apartment in one of Valencia's most iconic areas, next to the historic Torres de Quart and just steps from the Turia Gardens. Four double bedrooms with fitted wardrobes, two full bathrooms, a spacious living-dining room, a fully equipped independent kitchen, ducted air conditioning, and garage plus storage room included. Sold furnished.",
    imgs: [
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Guillem%20de%20Castro%2C%20El%20Pilar%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_101_1402306755.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Guillem%20de%20Castro%2C%20El%20Pilar%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_103_1402306756.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Guillem%20de%20Castro%2C%20El%20Pilar%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_105_1402306757.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Guillem%20de%20Castro%2C%20El%20Pilar%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_107_1402306758.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Guillem%20de%20Castro%2C%20El%20Pilar%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_109_1402306759.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Guillem%20de%20Castro%2C%20El%20Pilar%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_111_1402306760.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Guillem%20de%20Castro%2C%20El%20Pilar%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_113_1402306761.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20de%20Guillem%20de%20Castro%2C%20El%20Pilar%2C%20Val%C3%A8ncia%20%E2%80%94%20idealista/imgi_115_1402306762.webp"
    ],
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
    imgs: [
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Virgen%20del%20Carmen%2C%20Mogente%20%E2%80%94%20idealista/imgi_100_1392937569.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Virgen%20del%20Carmen%2C%20Mogente%20%E2%80%94%20idealista/imgi_102_1392937570.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Virgen%20del%20Carmen%2C%20Mogente%20%E2%80%94%20idealista/imgi_104_1392937572.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Virgen%20del%20Carmen%2C%20Mogente%20%E2%80%94%20idealista/imgi_106_1392937574.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Virgen%20del%20Carmen%2C%20Mogente%20%E2%80%94%20idealista/imgi_108_1392937557.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Virgen%20del%20Carmen%2C%20Mogente%20%E2%80%94%20idealista/imgi_110_1392937558.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Virgen%20del%20Carmen%2C%20Mogente%20%E2%80%94%20idealista/imgi_112_1392937559.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Calle%20Virgen%20del%20Carmen%2C%20Mogente%20%E2%80%94%20idealista/imgi_114_1392937560.webp"
    ],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/108163156/"
  },

  // ================================================================
  // 22. VINARÒS
  // ================================================================
  {
    id: "vinaros-casa-1",
    operacion: "venta",
    zona: "Vinaròs",
    tipo: "Casa / chalet",
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
    imgs: [
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Avenida%20de%20Francisco%20Jos%C3%A9%20Balada%2C%20Zona%20Boverals%2C%20Vinar%C3%B3s%20%E2%80%94%20idealista/imgi_100_1399753951.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Avenida%20de%20Francisco%20Jos%C3%A9%20Balada%2C%20Zona%20Boverals%2C%20Vinar%C3%B3s%20%E2%80%94%20idealista/imgi_102_1399753952.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Avenida%20de%20Francisco%20Jos%C3%A9%20Balada%2C%20Zona%20Boverals%2C%20Vinar%C3%B3s%20%E2%80%94%20idealista/imgi_104_1399753953.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Avenida%20de%20Francisco%20Jos%C3%A9%20Balada%2C%20Zona%20Boverals%2C%20Vinar%C3%B3s%20%E2%80%94%20idealista/imgi_106_1399753954.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Avenida%20de%20Francisco%20Jos%C3%A9%20Balada%2C%20Zona%20Boverals%2C%20Vinar%C3%B3s%20%E2%80%94%20idealista/imgi_108_1399754067.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Avenida%20de%20Francisco%20Jos%C3%A9%20Balada%2C%20Zona%20Boverals%2C%20Vinar%C3%B3s%20%E2%80%94%20idealista/imgi_110_1399754069.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Avenida%20de%20Francisco%20Jos%C3%A9%20Balada%2C%20Zona%20Boverals%2C%20Vinar%C3%B3s%20%E2%80%94%20idealista/imgi_112_1399754071.webp",
      "Images/Casa%20o%20chalet%20independiente%20en%20venta%20en%20Avenida%20de%20Francisco%20Jos%C3%A9%20Balada%2C%20Zona%20Boverals%2C%20Vinar%C3%B3s%20%E2%80%94%20idealista/imgi_114_1399754073.webp"
    ],
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
    imgs: [
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Cendra%2C%20L%27Olleria%20%E2%80%94%20idealista/imgi_100_1393341365.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Cendra%2C%20L%27Olleria%20%E2%80%94%20idealista/imgi_102_1393341366.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Cendra%2C%20L%27Olleria%20%E2%80%94%20idealista/imgi_104_1393341367.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Cendra%2C%20L%27Olleria%20%E2%80%94%20idealista/imgi_106_1393341368.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Cendra%2C%20L%27Olleria%20%E2%80%94%20idealista/imgi_108_1393341369.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Cendra%2C%20L%27Olleria%20%E2%80%94%20idealista/imgi_110_1393341370.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Cendra%2C%20L%27Olleria%20%E2%80%94%20idealista/imgi_112_1393341371.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20la%20Cendra%2C%20L%27Olleria%20%E2%80%94%20idealista/imgi_114_1393341372.webp"
    ],
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
    imgs: [
      "Images/Piso%20en%20venta%20en%20Plaza%20El%C3%ADptica-Rep%C3%BAblica%20Argentina%2C%20Centro%20Ciudad%2C%20Gandia%20%E2%80%94%20idealista/imgi_23_es.webp",
      "Images/Piso%20en%20venta%20en%20Plaza%20El%C3%ADptica-Rep%C3%BAblica%20Argentina%2C%20Centro%20Ciudad%2C%20Gandia%20%E2%80%94%20idealista/imgi_25_1413386152.webp",
      "Images/Piso%20en%20venta%20en%20Plaza%20El%C3%ADptica-Rep%C3%BAblica%20Argentina%2C%20Centro%20Ciudad%2C%20Gandia%20%E2%80%94%20idealista/imgi_33_1413386152.webp",
      "Images/Piso%20en%20venta%20en%20Plaza%20El%C3%ADptica-Rep%C3%BAblica%20Argentina%2C%20Centro%20Ciudad%2C%20Gandia%20%E2%80%94%20idealista/imgi_35_1413386153.webp",
      "Images/Piso%20en%20venta%20en%20Plaza%20El%C3%ADptica-Rep%C3%BAblica%20Argentina%2C%20Centro%20Ciudad%2C%20Gandia%20%E2%80%94%20idealista/imgi_37_1413386154.webp",
      "Images/Piso%20en%20venta%20en%20Plaza%20El%C3%ADptica-Rep%C3%BAblica%20Argentina%2C%20Centro%20Ciudad%2C%20Gandia%20%E2%80%94%20idealista/imgi_38_1413386152.webp",
      "Images/Piso%20en%20venta%20en%20Plaza%20El%C3%ADptica-Rep%C3%BAblica%20Argentina%2C%20Centro%20Ciudad%2C%20Gandia%20%E2%80%94%20idealista/imgi_40_1413386153.webp",
      "Images/Piso%20en%20venta%20en%20Plaza%20El%C3%ADptica-Rep%C3%BAblica%20Argentina%2C%20Centro%20Ciudad%2C%20Gandia%20%E2%80%94%20idealista/imgi_42_1413386154.webp"
    ],
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
    imgs: [
      "Images/Piso%20en%20venta%20en%20Calle%20Maestro%20Octavio%20Abat%2C%20Altura%20%E2%80%94%20idealista/imgi_23_es.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Maestro%20Octavio%20Abat%2C%20Altura%20%E2%80%94%20idealista/imgi_25_1392960191.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Maestro%20Octavio%20Abat%2C%20Altura%20%E2%80%94%20idealista/imgi_33_1392960191.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Maestro%20Octavio%20Abat%2C%20Altura%20%E2%80%94%20idealista/imgi_35_1392960192.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Maestro%20Octavio%20Abat%2C%20Altura%20%E2%80%94%20idealista/imgi_37_1392960193.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Maestro%20Octavio%20Abat%2C%20Altura%20%E2%80%94%20idealista/imgi_38_1392960191.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Maestro%20Octavio%20Abat%2C%20Altura%20%E2%80%94%20idealista/imgi_40_1392960192.webp",
      "Images/Piso%20en%20venta%20en%20Calle%20Maestro%20Octavio%20Abat%2C%20Altura%20%E2%80%94%20idealista/imgi_42_1392960193.webp"
    ],
    url: "https://www.idealista.com/pro/casa-creativa-inmobiliaria/inmueble/109195032/"
  }
];
