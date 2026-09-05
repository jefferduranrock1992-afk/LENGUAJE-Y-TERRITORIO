const categories = [
  { name: "Literatura y territorio", description: "Relatos, poemas y voces vinculadas con los lugares y sus comunidades." },
  { name: "Campo y agricultura", description: "Lecturas y actividades sobre café, caña, cultivos y saberes campesinos." },
  { name: "Deporte y comunidad", description: "Textos y experiencias deportivas como punto de partida para leer y escribir." },
  { name: "Comprensión e interpretación textual", description: "Recursos para fortalecer los niveles literal, inferencial y crítico." },
  { name: "Producción textual y creaciones estudiantiles", description: "Guías, plantillas, organizadores y producciones autorizadas para planear, escribir, revisar y publicar textos." },
  { name: "Recursos audiovisuales", description: "Videos, audios y materiales interactivos con intención pedagógica." }
];

const resources = [
  {
    title: "Comprensión de inferencias locales y globales",
    description: "Actividad interactiva que desarrolla la lectura inferencial mediante textos y situaciones vinculadas con experiencias del territorio rural.",
    category: "Comprensión e interpretación textual",
    type: "Recurso interactivo",
    level: "Grados 6.º y 7.º",
    format: "Genially",
    access: "Acceso en línea",
    year: "2026",
    author: "Pendiente de verificación",
    rights: "Consultar condiciones en el recurso",
    source: "Genially",
    keywords: ["inferencias", "territorio", "lectura"],
    url: "https://view.genially.com/6a931d45c05b027aa63a6036"
  },
  {
    title: "Los verbos en la vida cotidiana",
    description: "Actividad para reconocer y emplear verbos dentro de oraciones relacionadas con situaciones cotidianas y comunitarias.",
    category: "Producción textual y creaciones estudiantiles",
    type: "Actividad interactiva",
    level: "Educación básica y flexible",
    format: "Wordwall",
    access: "Acceso en línea",
    year: "2026",
    author: "Pendiente de verificación",
    rights: "Consultar condiciones en el recurso",
    source: "Wordwall",
    keywords: ["verbos", "oraciones", "vida cotidiana"],
    url: "https://wordwall.net/es/resource/118092960?wwmethod=link"
  },
  {
    title: "Prácticas agronómicas para el cultivo del café",
    description: "Infografía sobre siembra, variedades, condiciones de sol y sombra, fertilización y manejo del suelo en el cultivo del café.",
    category: "Campo y agricultura",
    type: "Infografía",
    level: "Educación básica secundaria y comunidad",
    format: "PDF y visualización web",
    access: "Consulta y descarga",
    year: "2024",
    author: "Centro Nacional de Investigaciones de Café (Cenicafé)",
    rights: "Creative Commons BY-NC-ND 4.0",
    source: "Portal de Publicaciones de Cenicafé",
    keywords: ["café", "agricultura", "suelo", "cultivo"],
    url: "https://publicaciones.cenicafe.org/index.php/infografias/article/view/2896"
  },
  {
    title: "Guía de aprendizaje: proyecto pedagógico productivo en huerta escolar",
    description: "Guía creada para instituciones educativas rurales que integra territorio, biodiversidad, saberes locales, prácticas productivas y trabajo pedagógico.",
    category: "Campo y agricultura",
    type: "Guía de aprendizaje",
    level: "Instituciones educativas rurales",
    format: "Libro digital en PDF",
    access: "Consulta y descarga",
    year: "2025",
    author: "Ramos Calderón et al.",
    rights: "Creative Commons BY-SA 4.0",
    source: "Editorial AGROSAVIA",
    keywords: ["huerta escolar", "territorio", "biodiversidad", "proyecto productivo"],
    url: "https://editorial.agrosavia.co/index.php/publicaciones/catalog/book/516"
  },
  {
    title: "Lenguaje 7.º: textos expositivos, informativos e instructivos",
    description: "Material de consulta de Aulas sin Fronteras con lecturas, actividades, esquemas y pautas para comprender y producir diferentes tipologías textuales.",
    category: "Comprensión e interpretación textual",
    type: "Guía para estudiantes",
    level: "Grado 7.º",
    format: "Recurso interactivo y anexo",
    access: "Consulta y descarga",
    year: "2026",
    author: "MEN, UNCOLI y Universidad Nacional de Colombia",
    rights: "Consulta desde el portal oficial Colombia Aprende",
    source: "Colombia Aprende",
    keywords: ["tipologías textuales", "resumen", "comprensión", "séptimo"],
    url: "https://www.colombiaaprende.edu.co/recurso-coleccion/material-de-consulta-estudiante-lenguaje-septimo-grado-tercer-bimestre"
  },
  {
    title: "Deportes y letras",
    description: "Recurso sonoro que relaciona deporte y literatura mediante relatos, escucha, reflexión y creación de historias deportivas.",
    category: "Deporte y comunidad",
    type: "Podcast educativo",
    level: "Educación básica y media",
    format: "Audio y recurso interactivo",
    access: "Acceso en línea",
    year: "2026",
    author: "Ministerio de Educación Nacional de Colombia",
    rights: "Consulta desde el portal oficial Colombia Aprende",
    source: "Historias en AltaVoz – Colombia Aprende",
    keywords: ["deporte", "literatura", "escucha", "relato deportivo"],
    url: "https://www.colombiaaprende.edu.co/recurso-coleccion/deportes-y-letras"
  },
  {
    title: "Guía 19: El microrrelato",
    description: "Lecturas y actividades para analizar significados implícitos y producir relatos breves con intención literaria.",
    category: "Literatura y territorio",
    type: "Guía pedagógica",
    level: "Grados 6.º a 9.º",
    format: "Recurso interactivo y anexo",
    access: "Consulta y descarga",
    year: "2026",
    author: "Ministerio de Educación Nacional de Colombia",
    rights: "Consulta desde el portal oficial Colombia Aprende",
    source: "Historias en AltaVoz – Colombia Aprende",
    keywords: ["microrrelato", "escritura creativa", "implícitos", "literatura"],
    url: "https://www.colombiaaprende.edu.co/recurso-coleccion/guia-19-el-microrrelato"
  },
  {
    title: "Sabor de mi tierra",
    description: "Episodio sobre comida, memoria, oralidad e identidad que permite reconocer cómo los sabores y las tradiciones cuentan la historia de los territorios.",
    category: "Recursos audiovisuales",
    type: "Recurso sonoro",
    level: "Educación básica y media",
    format: "Audio y recurso interactivo",
    access: "Acceso en línea",
    year: "2026",
    author: "Ministerio de Educación Nacional de Colombia",
    rights: "Consulta desde el portal oficial Colombia Aprende",
    source: "Historias en AltaVoz – Colombia Aprende",
    keywords: ["territorio", "tradición oral", "gastronomía", "identidad"],
    url: "https://www.colombiaaprende.edu.co/recurso-coleccion/sabor-de-mi-tierra"
  },
  {
    title: "Cuentos morales para niños formales",
    description: "Colección de Rafael Pombo que permite analizar personajes, acciones, consecuencias, valores y enseñanzas mediante relatos breves de la tradición literaria colombiana.",
    category: "Literatura y territorio",
    type: "Colección de relatos",
    level: "Grados 6.º y 7.º",
    format: "Libro digital en PDF",
    access: "Consulta y descarga",
    year: "1854",
    author: "Rafael Pombo (1833–1912)",
    rights: "Obra original en dominio público; consulta desde Banrepcultural",
    source: "Biblioteca Virtual del Banco de la República",
    keywords: ["cuento", "fábula", "personajes", "enseñanza", "literatura colombiana"],
    url: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/2718/"
  },
  {
    title: "María",
    description: "Novela de Jorge Isaacs ambientada en el Valle del Cauca. Favorece el análisis del paisaje rural, la voz narrativa, las relaciones sociales y las costumbres del siglo XIX.",
    category: "Literatura y territorio",
    type: "Novela",
    level: "Grados 8.º a 11.º",
    format: "Texto web, EPUB y PDF",
    access: "Lectura y descarga",
    year: "1870",
    author: "Jorge Isaacs (1837–1895)",
    rights: "Obra original en dominio público; texto de Wikisource bajo CC BY-SA 4.0",
    source: "Wikisource, biblioteca libre",
    keywords: ["novela", "paisaje rural", "Valle del Cauca", "romanticismo", "territorio"],
    url: "https://es.wikisource.org/wiki/Mar%C3%ADa_%28Isaacs%29"
  },
  {
    title: "En la diestra de Dios Padre",
    description: "Relato de Tomás Carrasquilla que recupera la oralidad campesina, el vocabulario regional, las creencias y las formas de vida de una comunidad rural colombiana.",
    category: "Literatura y territorio",
    type: "Cuento",
    level: "Grados 7.º a 10.º",
    format: "Texto web, EPUB y PDF",
    access: "Lectura y descarga",
    year: "1897",
    author: "Tomás Carrasquilla (1858–1940)",
    rights: "Obra original en dominio público; texto de Wikisource bajo CC BY-SA 4.0",
    source: "Wikisource, biblioteca libre",
    keywords: ["oralidad", "lenguaje regional", "campo", "tradición", "cuento colombiano"],
    url: "https://es.wikisource.org/wiki/En_la_diestra_de_Dios_Padre"
  },
  {
    title: "La vorágine",
    description: "Novela de José Eustasio Rivera sobre los llanos y la selva amazónica. Propicia una lectura crítica del territorio, la explotación cauchera y las relaciones entre sociedad y naturaleza.",
    category: "Literatura y territorio",
    type: "Novela",
    level: "Grados 9.º a 11.º",
    format: "Texto web",
    access: "Lectura en línea",
    year: "1924",
    author: "José Eustasio Rivera (1888–1928)",
    rights: "Obra original en dominio público; consulta desde la Biblioteca Virtual Miguel de Cervantes",
    source: "Biblioteca Virtual Miguel de Cervantes",
    keywords: ["selva", "llanos", "territorio", "caucho", "lectura crítica"],
    url: "https://www.cervantesvirtual.com/obra/la-voragine-989351/"
  },
  {
    title: "Los maderos de San Juan",
    description: "Poema narrativo de José Asunción Silva que relaciona infancia, memoria, familia y paso del tiempo; permite interpretar imágenes, repeticiones y sentidos implícitos.",
    category: "Literatura y territorio",
    type: "Poema narrativo",
    level: "Grados 7.º a 9.º",
    format: "Texto web, EPUB y PDF",
    access: "Lectura y descarga",
    year: "1892",
    author: "José Asunción Silva (1865–1896)",
    rights: "Obra original en dominio público; texto de Wikisource bajo CC BY-SA 4.0",
    source: "Wikisource, biblioteca libre",
    keywords: ["poesía", "memoria", "familia", "inferencias", "modernismo"],
    url: "https://es.wikisource.org/wiki/Los_maderos_de_San_Juan"
  },
  {
    title: "Lenguaje 6: guía del estudiante, unidad 2",
    description: "Guía descargable con actividades para interpretar anuncios publicitarios, reconocer su propósito, relacionar información verbal y visual y valorar mensajes de los medios.",
    category: "Comprensión e interpretación textual",
    type: "Guía para estudiantes",
    level: "Grado 6.º",
    format: "PDF",
    access: "Descarga directa",
    year: "2021",
    author: "Ministerio de Educación Nacional, UNCOLI y Universidad Nacional de Colombia",
    rights: "Consulta y descarga desde el portal oficial Colombia Aprende",
    source: "Aulas sin Fronteras – Colombia Aprende",
    keywords: ["publicidad", "texto multimodal", "propósito comunicativo", "sexto"],
    url: "https://www.colombiaaprende.edu.co/sites/default/files/files_public/2021-12/ASF_LEN_EST_G6_B2_PDF_WEB.pdf"
  },
  {
    title: "Lenguaje 7: opinión y argumentación",
    description: "Guía con lecturas, actividades y ejercicios evaluativos para reconocer opiniones, contrastar información, valorar argumentos e interpretar textos argumentativos.",
    category: "Comprensión e interpretación textual",
    type: "Guía para estudiantes",
    level: "Grado 7.º",
    format: "PDF",
    access: "Descarga directa",
    year: "2022",
    author: "Ministerio de Educación Nacional, UNCOLI y Universidad Nacional de Colombia",
    rights: "Consulta y descarga desde el portal oficial Colombia Aprende",
    source: "Aulas sin Fronteras – Colombia Aprende",
    keywords: ["opinión", "argumentación", "intención comunicativa", "séptimo"],
    url: "https://www.colombiaaprende.edu.co/sites/default/files/files_public/2022-10/Grado_7_%20gu%C3%ADa_estudiantes_LEN_B4IMPRESION-min.pdf"
  },
  {
    title: "Lenguaje 8: guía del estudiante, volumen 2",
    description: "Material descargable con lecturas y actividades de análisis para relacionar información, interpretar recursos expresivos y comprender diferentes tipologías textuales.",
    category: "Comprensión e interpretación textual",
    type: "Guía para estudiantes",
    level: "Grado 8.º",
    format: "PDF",
    access: "Descarga directa",
    year: "2021",
    author: "Ministerio de Educación Nacional, UNCOLI y Universidad Nacional de Colombia",
    rights: "Consulta y descarga desde el portal oficial Colombia Aprende",
    source: "Aulas sin Fronteras – Colombia Aprende",
    keywords: ["análisis textual", "tipologías textuales", "interpretación", "octavo"],
    url: "https://www.colombiaaprende.edu.co/sites/default/files/files_public/2021-12/LEN_8_VOL2_EST_WEB_COMPLETO.pdf"
  },
  {
    title: "Lenguaje 9: guía del estudiante, bimestre II",
    description: "Guía descargable para investigar, seleccionar información, reconocer fuentes, elaborar resúmenes, interpretar textos y construir argumentos sustentados.",
    category: "Comprensión e interpretación textual",
    type: "Guía para estudiantes",
    level: "Grado 9.º",
    format: "PDF",
    access: "Descarga directa",
    year: "2021",
    author: "Ministerio de Educación Nacional, UNCOLI y Universidad Nacional de Colombia",
    rights: "Consulta y descarga desde el portal oficial Colombia Aprende",
    source: "Aulas sin Fronteras – Colombia Aprende",
    keywords: ["fuentes", "resumen", "lectura crítica", "argumentación", "noveno"],
    url: "https://colombiaaprende.edu.co/sites/default/files/files_public/2021-12/LEN_9_B2_EST_WEB_COMPLETO.pdf"
  },
  {
    title: "Relatos en Serie Rural | 2023",
    description: "Serie documental sobre comunidades, memorias, oficios, alimentos y transformaciones de territorios rurales latinoamericanos, útil para analizar voces, imágenes y perspectivas.",
    category: "Recursos audiovisuales",
    type: "Serie documental",
    level: "Grados 7.º a 11.º",
    format: "Lista de reproducción en YouTube",
    access: "Acceso en línea",
    year: "2023",
    author: "Canal Trece Colombia",
    rights: "Consulta mediante el canal oficial; no se almacena ni redistribuye el contenido",
    source: "Canal Trece Colombia – YouTube",
    keywords: ["ruralidad", "memoria", "identidad", "documental", "territorio"],
    url: "https://www.youtube.com/playlist?list=PLGsF4QfCJgJliv_EdhLRRrW4SVNlYdTHd"
  },
  {
    title: "El podcast escolar que nació bajo un árbol y le dio voz al Vichada",
    description: "Crónica audiovisual sobre estudiantes rurales que producen un pódcast con recursos sencillos para narrar su comunidad y fortalecer la identidad territorial.",
    category: "Recursos audiovisuales",
    type: "Crónica audiovisual",
    level: "Grados 6.º a 11.º",
    format: "Video en YouTube",
    access: "Acceso en línea",
    year: "2025",
    author: "Ministerio de Educación Nacional de Colombia",
    rights: "Consulta mediante el canal oficial; no se almacena ni redistribuye el video",
    source: "Ministerio de Educación Nacional – YouTube",
    keywords: ["podcast escolar", "Vichada", "oralidad", "estudiantes rurales", "territorio"],
    url: "https://www.youtube.com/watch?v=mOVNCXZE8iA"
  },
  {
    title: "El Campo No Para: Colombia cultivada con alimentos",
    description: "Programa de la UPRA que presenta datos, testimonios y explicaciones sobre el uso productivo del suelo colombiano; permite interpretar información audiovisual y contrastar datos.",
    category: "Recursos audiovisuales",
    type: "Programa informativo",
    level: "Grados 8.º a 11.º",
    format: "Video en YouTube",
    access: "Acceso en línea",
    year: "2026",
    author: "Unidad de Planificación Rural Agropecuaria (UPRA)",
    rights: "Consulta mediante el canal oficial; no se almacena ni redistribuye el video",
    source: "UPRA Colombia – YouTube",
    keywords: ["agricultura", "suelo", "datos", "campo colombiano", "texto audiovisual"],
    url: "https://www.youtube.com/watch?v=KDKEHDZHd9Y"
  },
  {
    title: "Arte, tradición y patrimonio",
    description: "Cápsula educativa que recorre expresiones culturales de distintos territorios colombianos y permite interpretar la relación entre imagen, narración, identidad y patrimonio.",
    category: "Recursos audiovisuales",
    type: "Cápsula educativa",
    level: "Grados 6.º a 9.º",
    format: "Video en YouTube",
    access: "Acceso en línea",
    year: "s. f.",
    author: "Canal Trece Colombia",
    rights: "Consulta mediante el canal oficial; no se almacena ni redistribuye el video",
    source: "Canal Trece Colombia – YouTube",
    keywords: ["arte", "tradición", "patrimonio", "identidad", "Colombia"],
    url: "https://www.youtube.com/watch?v=t6j5tCOksPI"
  },
  {
    title: "Formación corporal, sensible y afectiva: grado 11",
    description: "Módulo para educación media rural con actividades sobre cuerpo, emociones, convivencia, juegos tradicionales, proyecto de vida y participación de la familia y la comunidad.",
    category: "Deporte y comunidad",
    type: "Guía para estudiantes",
    level: "Grado 11.º y educación media rural",
    format: "PDF",
    access: "Descarga directa",
    year: "2020",
    author: "Ministerio de Educación Nacional de Colombia",
    rights: "Consulta y descarga desde el portal oficial Colombia Aprende",
    source: "Programa de Educación Rural – Colombia Aprende",
    keywords: ["juegos tradicionales", "ruralidad", "convivencia", "emociones", "comunidad"],
    url: "https://www.colombiaaprende.edu.co/sites/default/files/files_public/rural-adultos/1_Coleccion_Avanzada_Programa_de_Educacion_Rural_PER/4-Modelos_Educativos_Flexibles/9-Media_rural_EMER/Materiales_Estudiantes/Formacion_corporal_sensible_afectiva_11.pdf"
  },
  {
    title: "Los valores del deporte en cada aula",
    description: "Guía pedagógica con actividades para trabajar respeto, equidad e inclusión mediante situaciones deportivas, diálogo, reflexión y aprendizaje activo.",
    category: "Deporte y comunidad",
    type: "Guía pedagógica",
    level: "Grado 6.º y orientación docente",
    format: "PDF y ficha web",
    access: "Consulta y descarga",
    year: "2021",
    author: "UNESCO y aliados del programa de educación en valores a través del deporte",
    rights: "Consulta y descarga desde la Biblioteca Digital de la UNESCO",
    source: "UNESDOC – UNESCO",
    keywords: ["valores", "respeto", "equidad", "inclusión", "deporte"],
    url: "https://unesdoc.unesco.org/ark:/48223/pf0000376710"
  },
  {
    title: "Historia del Movimiento Paralímpico",
    description: "Texto informativo y cronológico sobre el origen y desarrollo del deporte paralímpico, apropiado para trabajar inclusión, secuencia histórica, datos y lectura crítica.",
    category: "Deporte y comunidad",
    type: "Artículo informativo",
    level: "Grados 7.º a 11.º",
    format: "Texto web y recursos audiovisuales",
    access: "Acceso en línea",
    year: "s. f.",
    author: "Comité Paralímpico Internacional",
    rights: "Consulta desde el portal oficial; no se redistribuye el contenido",
    source: "International Paralympic Committee",
    keywords: ["paralimpismo", "inclusión", "historia", "discapacidad", "deporte"],
    url: "https://www.paralympic.org/es/ipc/history"
  },
  {
    title: "Deporte, cultura e historia: prácticas ancestrales en las regiones",
    description: "Artículo sobre la recuperación de prácticas ancestrales y el deporte social comunitario como puente entre memoria, cultura, inclusión y participación regional.",
    category: "Deporte y comunidad",
    type: "Artículo periodístico institucional",
    level: "Grados 8.º a 11.º",
    format: "Texto web",
    access: "Acceso en línea",
    year: "2020",
    author: "Prensa Ministerio del Deporte de Colombia",
    rights: "Consulta desde el portal institucional; se conserva la fuente original",
    source: "Ministerio del Deporte de Colombia",
    keywords: ["prácticas ancestrales", "regiones", "memoria", "cultura", "deporte comunitario"],
    url: "https://old.mindeporte.gov.co/sala-prensa/noticias-mindeporte/deporte-cultura-e-historia-tres-ejes-mindeporte-las-regiones"
  },
  {
    title: "Lineamientos del Deporte Social Comunitario",
    description: "Video institucional que explica cómo las prácticas deportivas fortalecen valores, participación y sana convivencia en las comunidades.",
    category: "Deporte y comunidad",
    type: "Video educativo",
    level: "Docentes, estudiantes de media y comunidad",
    format: "Video en YouTube",
    access: "Acceso en línea",
    year: "s. f.",
    author: "Ministerio del Deporte de Colombia",
    rights: "Consulta mediante el canal oficial; no se almacena ni redistribuye el video",
    source: "Ministerio del Deporte – YouTube",
    keywords: ["deporte social", "convivencia", "participación", "comunidad", "valores"],
    url: "https://www.youtube.com/watch?v=OSdnVF28Ixs"
  },
  {
    title: "¡Jugar para no olvidar!",
    description: "Recurso institucional sobre los Juegos Ancestrales e Interculturales del Cauca y su aporte a la educación propia, la convivencia, la paz y la transmisión de saberes.",
    category: "Deporte y comunidad",
    type: "Crónica institucional",
    level: "Grados 6.º a 11.º",
    format: "Texto web con recurso audiovisual",
    access: "Acceso en línea",
    year: "2025",
    author: "Ministerio de Educación Nacional de Colombia",
    rights: "Consulta desde el portal oficial; se conserva la fuente original",
    source: "Ministerio de Educación Nacional",
    keywords: ["juegos ancestrales", "Cauca", "educación propia", "paz", "saberes"],
    url: "https://www.mineducacion.gov.co/portal/salaprensa/Comunicados/425880:Jugar-para-no-olvidar-Gobierno-del-Cambio-fortalece-la-educacion-propia-de-los-pueblos-indigenas-del-Cauca"
  },
  {
    title: "La campeona que convirtió el aula en su nueva pista",
    description: "Crónica audiovisual sobre Julieth Arboleda, deportista y educadora en Ibagué, que permite analizar biografía, superación, educación y liderazgo femenino.",
    category: "Deporte y comunidad",
    type: "Crónica audiovisual",
    level: "Grados 7.º a 11.º",
    format: "Video en YouTube",
    access: "Acceso en línea",
    year: "2025",
    author: "Ministerio de Educación Nacional de Colombia",
    rights: "Consulta mediante el canal oficial; no se almacena ni redistribuye el video",
    source: "Ministerio de Educación Nacional – YouTube",
    keywords: ["deportista", "docente", "Ibagué", "liderazgo femenino", "biografía"],
    url: "https://www.youtube.com/watch?v=WEHiPT0y4WA"
  },
  {
    title: "El huerto escolar como recurso de enseñanza-aprendizaje",
    description: "Guía interdisciplinaria con actividades sobre plantas, suelo, siembra, alimentación, ambiente y comunidad; permite leer instrucciones, registrar observaciones y redactar informes.",
    category: "Campo y agricultura",
    type: "Guía pedagógica",
    level: "Educación básica",
    format: "PDF",
    access: "Descarga directa",
    year: "2009",
    author: "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO)",
    rights: "Consulta y descarga desde el portal oficial de la FAO",
    source: "FAO",
    keywords: ["huerto escolar", "suelo", "alimentación", "escritura", "comunidad"],
    url: "https://www.fao.org/ag/humannutrition/21877-061e61334701c700e0f53684791ad06ed.pdf"
  },
  {
    title: "Guía de compostaje para agricultores",
    description: "Cartilla ilustrada que explica cómo transformar residuos orgánicos en compost, controlar temperatura y humedad y resolver problemas frecuentes del proceso.",
    category: "Campo y agricultura",
    type: "Guía práctica",
    level: "Educación secundaria, media y comunidad",
    format: "Libro digital en PDF",
    access: "Consulta y descarga",
    year: "2024",
    author: "Pardo Díaz, Suárez Estrada, Camelo Rusinque, Rojas Tapias y Estrada Bonilla",
    rights: "Consulta desde la ficha institucional; se conserva la fuente y la autoría",
    source: "Editorial AGROSAVIA",
    keywords: ["compostaje", "residuos orgánicos", "suelo", "agricultura sostenible"],
    url: "https://editorial.agrosavia.co/index.php/publicaciones/catalog/book/441"
  },
  {
    title: "Agricultura climáticamente inteligente en el cultivo de caña para panela",
    description: "Manual sobre prácticas sostenibles para conservar suelo y agua, aprovechar biomasa residual y responder a la variabilidad climática en la producción panelera.",
    category: "Campo y agricultura",
    type: "Manual técnico",
    level: "Grados 8.º a 11.º y comunidad",
    format: "Libro digital",
    access: "Consulta en línea",
    year: "2023",
    author: "Corporación Colombiana de Investigación Agropecuaria (AGROSAVIA)",
    rights: "Contenido de libre acceso desde la ficha institucional; no se redistribuye una copia",
    source: "Editorial AGROSAVIA",
    keywords: ["caña panelera", "cambio climático", "suelo", "agua", "sostenibilidad"],
    url: "https://editorial.agrosavia.co/index.php/publicaciones/catalog/book/385"
  },
  {
    title: "Interpretación de resultados de análisis de suelo para cafetales",
    description: "Avance técnico que orienta la lectura de resultados de laboratorio y la toma de decisiones para una nutrición adecuada del cultivo del café.",
    category: "Campo y agricultura",
    type: "Avance técnico",
    level: "Grados 9.º a 11.º y comunidad cafetera",
    format: "Texto web, PDF y video",
    access: "Consulta y descarga",
    year: "2018",
    author: "Siavosh Sadeghian",
    rights: "Consulta desde el portal oficial de Cenicafé",
    source: "Cenicafé",
    keywords: ["café", "análisis de suelo", "nutrición", "interpretación de datos"],
    url: "https://publicaciones.cenicafe.org/index.php/avances_tecnicos/issue/view/84"
  },
  {
    title: "Guía de registro para costos de producción agrícola",
    description: "Material práctico para registrar insumos, labores, jornales, costos e ingresos; favorece la interpretación de tablas y la elaboración de informes sobre una unidad productiva.",
    category: "Campo y agricultura",
    type: "Guía de registro",
    level: "Grados 9.º a 11.º, jóvenes rurales y comunidad",
    format: "Libro digital en PDF",
    access: "Consulta y descarga",
    year: "2020",
    author: "Molina Romero, Caicedo Guerrero, Ostos Triana y Reyes Díaz",
    rights: "Consulta desde la ficha institucional; se conserva la fuente y la autoría",
    source: "Editorial AGROSAVIA",
    keywords: ["costos de producción", "finca", "registros", "tablas", "jóvenes rurales"],
    url: "https://editorial.agrosavia.co/index.php/publicaciones/catalog/book/143"
  }
];

const grid = document.querySelector("#resource-grid");
const emptyState = document.querySelector("#empty-state");
const resultCount = document.querySelector("#result-count");
const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");
const typeFilter = document.querySelector("#type-filter");
const clearFilters = document.querySelector("#clear-filters");
const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector("#main-nav");

function normalize(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function fillFilters() {
  categories.forEach(({ name }) => categoryFilter.add(new Option(name, name)));
  [...new Set(resources.map(resource => resource.type))]
    .sort()
    .forEach(type => typeFilter.add(new Option(type, type)));
}

function cardTemplate(resource, index) {
  const tags = resource.keywords.map(keyword => `<span class="tag">${keyword}</span>`).join("");
  return `
    <article class="resource-card">
      <div class="card-top">
        <span class="resource-type">${resource.type}</span>
        <span class="access">${resource.access}</span>
      </div>
      <h3>${resource.title}</h3>
      <p>${resource.description}</p>
      <div class="tags" aria-label="Palabras clave">${tags}</div>
      <dl class="metadata">
        <div><dt>Categoría</dt><dd>${resource.category}</dd></div>
        <div><dt>Nivel</dt><dd>${resource.level}</dd></div>
        <div><dt>Formato</dt><dd>${resource.format}</dd></div>
        <div><dt>Año</dt><dd>${resource.year}</dd></div>
      </dl>
      <div class="card-actions">
        <a class="button" href="${resource.url}" target="_blank" rel="noopener noreferrer">Abrir recurso</a>
        <button class="details-button" type="button" aria-expanded="false" aria-controls="details-${index}">Ver ficha completa</button>
      </div>
      <div class="details" id="details-${index}" hidden>
        <strong>Autoría:</strong> ${resource.author}<br>
        <strong>Fuente:</strong> ${resource.source}<br>
        <strong>Derechos:</strong> ${resource.rights}
      </div>
    </article>`;
}

function renderResources() {
  const query = normalize(searchInput.value.trim());
  const category = categoryFilter.value;
  const type = typeFilter.value;
  const filtered = resources.filter(resource => {
    const searchable = normalize([resource.title, resource.description, resource.category, ...resource.keywords].join(" "));
    return (!query || searchable.includes(query)) && (!category || resource.category === category) && (!type || resource.type === type);
  });

  grid.innerHTML = filtered.map((resource, index) => cardTemplate(resource, index)).join("");
  emptyState.hidden = filtered.length !== 0;
  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "recurso encontrado" : "recursos encontrados"}`;

  document.querySelectorAll(".details-button").forEach(button => {
    button.addEventListener("click", () => {
      const details = document.querySelector(`#${button.getAttribute("aria-controls")}`);
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      button.textContent = expanded ? "Ver ficha completa" : "Ocultar ficha";
      details.hidden = expanded;
    });
  });
}

function renderCategories() {
  const categoryGrid = document.querySelector("#category-grid");
  categoryGrid.innerHTML = categories.map(category => `
    <article class="category-card">
      <strong>${category.name}</strong>
      <span>${category.description}</span>
    </article>`).join("");
}

[searchInput, categoryFilter, typeFilter].forEach(control => control.addEventListener("input", renderResources));
clearFilters.addEventListener("click", () => {
  document.querySelector("#filters").reset();
  renderResources();
  searchInput.focus();
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  mainNav.classList.toggle("open", !isOpen);
});
mainNav.addEventListener("click", event => {
  if (event.target.matches("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("open");
  }
});

fillFilters();
renderCategories();
renderResources();
