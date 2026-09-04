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
    type: "Genially",
    level: "Grados 6.º y 7.º",
    format: "Recurso interactivo",
    access: "Acceso en línea",
    year: "2026",
    author: "Equipo del proyecto",
    rights: "Consultar condiciones en el recurso",
    keywords: ["inferencias", "territorio", "lectura"],
    url: "https://view.genially.com/6a931d45c05b027aa63a6036"
  },
  {
    title: "Los verbos en la vida cotidiana",
    description: "Actividad para reconocer y emplear verbos dentro de oraciones relacionadas con situaciones cotidianas y comunitarias.",
    category: "Producción textual",
    type: "Wordwall",
    level: "Educación básica y flexible",
    format: "Actividad interactiva",
    access: "Acceso en línea",
    year: "2026",
    author: "Equipo del proyecto",
    rights: "Consultar condiciones en el recurso",
    keywords: ["verbos", "oraciones", "vida cotidiana"],
    url: "https://wordwall.net/es/resource/118092960?wwmethod=link"
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
