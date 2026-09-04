const categories = [
  { name: "Literatura y territorio", description: "Relatos, poemas y voces vinculadas con los lugares y sus comunidades." },
  { name: "Campo y agricultura", description: "Lecturas y actividades sobre café, caña, cultivos y saberes campesinos." },
  { name: "Deporte y comunidad", description: "Textos y experiencias deportivas como punto de partida para leer y escribir." },
  { name: "Comprensión e interpretación textual", description: "Recursos para fortalecer los niveles literal, inferencial y crítico." },
  { name: "Producción textual", description: "Orientaciones y actividades para planear, escribir, revisar y publicar textos." },
  { name: "Recursos audiovisuales", description: "Videos, audios y materiales interactivos con intención pedagógica." },
  { name: "Producciones estudiantiles", description: "Creaciones que recuperan experiencias, memorias y conocimientos del territorio." }
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
    category: "Producción textual",
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
