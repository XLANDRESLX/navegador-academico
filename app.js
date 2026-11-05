const STRUCTURES = {
  "Investigación básica": [],
  Ensayo: ["Introducción", "Desarrollo", "Conclusión", "Referencias"],
  Investigación: [
    "Introducción",
    "Planteamiento del problema",
    "Justificación",
    "Objetivos",
    "Marco teórico",
    "Metodología",
    "Resultados",
    "Discusión",
    "Conclusiones",
    "Referencias",
    "Anexos",
  ],
  Monografía: [
    "Introducción",
    "Planteamiento del tema",
    "Objetivos",
    "Marco teórico",
    "Desarrollo",
    "Análisis",
    "Conclusiones",
    "Referencias",
    "Anexos",
  ],
  "Proyecto de investigación": [
    "Introducción",
    "Planteamiento del problema",
    "Pregunta de investigación",
    "Justificación",
    "Objetivos",
    "Antecedentes",
    "Marco teórico",
    "Metodología",
    "Cronograma",
    "Presupuesto",
    "Resultados esperados",
    "Referencias",
    "Anexos",
  ],
  "Proyecto académico": [
    "Introducción",
    "Planteamiento de la necesidad",
    "Justificación",
    "Objetivos",
    "Marco teórico",
    "Metodología",
    "Desarrollo del proyecto",
    "Resultados",
    "Conclusiones",
    "Referencias",
    "Anexos",
  ],
  Informe: [
    "Introducción",
    "Objetivos",
    "Desarrollo",
    "Resultados",
    "Análisis",
    "Conclusiones",
    "Recomendaciones",
    "Referencias",
    "Anexos",
  ],
  "Informe de laboratorio": [
    "Introducción",
    "Objetivos",
    "Marco teórico",
    "Materiales",
    "Metodología",
    "Resultados",
    "Análisis de resultados",
    "Conclusiones",
    "Referencias",
    "Anexos",
  ],
  "Revisión bibliográfica": [
    "Introducción",
    "Objetivos",
    "Metodología de búsqueda",
    "Antecedentes",
    "Desarrollo / análisis de la literatura",
    "Discusión",
    "Conclusiones",
    "Referencias",
  ],
  "Artículo académico": [
    "Título",
    "Resumen",
    "Palabras clave",
    "Introducción",
    "Metodología",
    "Resultados",
    "Discusión",
    "Conclusiones",
    "Referencias",
  ],
  "Estudio de caso": [
    "Introducción",
    "Descripción del caso",
    "Contexto",
    "Planteamiento del problema",
    "Marco teórico",
    "Metodología",
    "Análisis del caso",
    "Resultados",
    "Conclusiones",
    "Recomendaciones",
    "Referencias",
    "Anexos",
  ],
  "Trabajo de campo": [
    "Introducción",
    "Objetivos",
    "Marco teórico",
    "Metodología",
    "Descripción del trabajo de campo",
    "Resultados",
    "Análisis",
    "Conclusiones",
    "Recomendaciones",
    "Referencias",
    "Anexos",
  ],
  "Proyecto de intervención": [
    "Introducción",
    "Diagnóstico",
    "Planteamiento del problema",
    "Justificación",
    "Objetivos",
    "Marco teórico",
    "Metodología",
    "Plan de intervención",
    "Cronograma",
    "Recursos / presupuesto",
    "Resultados esperados",
    "Evaluación",
    "Conclusiones",
    "Referencias",
    "Anexos",
  ],
  "Propuesta de investigación": [
    "Introducción",
    "Planteamiento del problema",
    "Pregunta de investigación",
    "Justificación",
    "Objetivos",
    "Antecedentes",
    "Marco teórico",
    "Metodología",
    "Cronograma",
    "Presupuesto",
    "Referencias",
    "Anexos",
  ],
  "Reseña crítica": [
    "Ficha de la obra",
    "Introducción",
    "Resumen",
    "Análisis crítico",
    "Valoración",
    "Conclusión",
    "Referencias",
  ],
  "Ensayo argumentativo": [
    "Introducción",
    "Tesis",
    "Argumentos",
    "Contraargumentos",
    "Refutación",
    "Conclusión",
    "Referencias",
  ],
  "Estado del arte": [
    "Introducción",
    "Planteamiento del tema",
    "Objetivos",
    "Metodología",
    "Antecedentes",
    "Análisis de investigaciones",
    "Tendencias y hallazgos",
    "Vacíos de investigación",
    "Conclusiones",
    "Referencias",
  ],
  "Sistematización de experiencias": [
    "Introducción",
    "Contexto",
    "Objetivos",
    "Descripción de la experiencia",
    "Metodología",
    "Reconstrucción de la experiencia",
    "Análisis",
    "Aprendizajes",
    "Conclusiones",
    "Recomendaciones",
    "Referencias",
    "Anexos",
  ],
  "Trabajo de grado": [
    "Portada",
    "Resumen",
    "Introducción",
    "Planteamiento del problema",
    "Justificación",
    "Objetivos",
    "Marco teórico",
    "Metodología",
    "Resultados",
    "Discusión",
    "Conclusiones",
    "Recomendaciones",
    "Referencias",
    "Anexos",
  ],
  Tesis: [
    "Portada",
    "Resumen",
    "Introducción",
    "Planteamiento del problema",
    "Pregunta de investigación",
    "Justificación",
    "Objetivos",
    "Hipótesis",
    "Antecedentes",
    "Marco teórico",
    "Metodología",
    "Resultados",
    "Discusión",
    "Conclusiones",
    "Recomendaciones",
    "Referencias",
    "Anexos",
  ],
  "Proyecto aplicado": [
    "Introducción",
    "Diagnóstico",
    "Planteamiento del problema",
    "Justificación",
    "Objetivos",
    "Marco teórico",
    "Metodología",
    "Diseño de la solución",
    "Implementación",
    "Resultados",
    "Evaluación",
    "Conclusiones",
    "Referencias",
    "Anexos",
  ],
};

const TYPE_DESC = {
  "Investigación básica":
    "Modo de investigación libre y detallado: no utiliza una estructura académica fija. La respuesta se organiza según los aspectos realmente importantes del tema investigado.",
  Ensayo:
    "Texto académico centrado en desarrollar y explicar ideas sobre un tema, con introducción, desarrollo, conclusión y fuentes.",
  Investigación:
    "Estructura completa para formular un problema, fundamentarlo, explicar la metodología, presentar resultados y discutirlos.",
  Monografía:
    "Estudio documental y organizado de un tema específico, con desarrollo y análisis sustentados en fuentes.",
  "Proyecto de investigación":
    "Plan formal para investigar un problema o pregunta, incluyendo antecedentes, metodología, cronograma y presupuesto.",
  "Proyecto académico":
    "Proyecto orientado a resolver o desarrollar una necesidad académica mediante una metodología definida.",
  Informe:
    "Presentación ordenada de un trabajo realizado, sus resultados, análisis, conclusiones y recomendaciones.",
  "Informe de laboratorio":
    "Documento para experiencias prácticas o experimentales, con materiales, método, resultados y análisis.",
  "Revisión bibliográfica":
    "Síntesis crítica de literatura localizada mediante una metodología de búsqueda explícita.",
  "Artículo académico":
    "Formato compacto de comunicación científica con resumen, palabras clave, método, resultados y discusión.",
  "Estudio de caso":
    "Análisis profundo de un caso concreto dentro de su contexto, apoyado en teoría y evidencia.",
  "Trabajo de campo":
    "Documento basado en información obtenida directamente en un contexto o entorno real.",
  "Proyecto de intervención":
    "Propone una intervención a partir de un diagnóstico, con plan, cronograma, recursos y evaluación.",
  "Propuesta de investigación":
    "Documento previo que plantea qué se investigará, por qué, con qué antecedentes y cómo se realizará.",
  "Reseña crítica":
    "Descripción y valoración argumentada de una obra, incorporando análisis crítico y criterio propio.",
  "Ensayo argumentativo":
    "Ensayo organizado alrededor de una tesis, argumentos, contraargumentos y refutación.",
  "Estado del arte":
    "Mapa crítico de investigaciones previas, tendencias, hallazgos y vacíos de conocimiento.",
  "Sistematización de experiencias":
    "Reconstruye y analiza una experiencia para extraer aprendizajes y recomendaciones.",
  "Trabajo de grado":
    "Trabajo académico formal con problema, objetivos, marco teórico, metodología, resultados y conclusiones.",
  Tesis:
    "Investigación académica extensa con pregunta, hipótesis cuando corresponda, metodología, resultados y discusión.",
  "Proyecto aplicado":
    "Busca diseñar e implementar una solución práctica y evaluar sus resultados.",
};

const STORAGE_KEY = "generadorInvestigacionV2";
const HISTORY_KEY = "generadorInvestigacionHistory";
const HISTORIAL_KEY = "generadorInvestigacionHistorial";
const THEME_KEY = "generadorInvestigacionTheme";

/* ---------- localStorage (sin IndexedDB) ---------- */
function safeRead(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : JSON.parse(v);
  } catch {
    return fallback;
  }
}
function safeWrite(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

const $ = (id) => document.getElementById(id);

let structures = [];
let userEditingPrompt = false;
let saveTimer = null;

/* ---------- estado del generador ---------- */
function defaultState() {
  return {
    topic: "",
    workType: "Investigación",
    approach: "Cualitativa",
    level: "Universitario",
    citation: "APA 7",
    sources: 10,
    years: "Últimos 10 años",
    language: "Español",
    context: "",
    question: "",
    depth: "Académica profunda",
    quality: {
      realSources: true,
      primarySources: true,
      tables: true,
      limitations: true,
    },
    structures: cloneStructure(STRUCTURES["Investigación"]),
  };
}

function loadState() {
  const saved = safeRead(STORAGE_KEY, null);
  return saved ? sanitizeState(saved) : defaultState();
}

function saveState() {
  clearTimeout(saveTimer);
  $("saveStatus").textContent = "Guardando…";
  saveTimer = setTimeout(saveStateNow, 350);
}
function flushSave() {
  if (saveTimer) {
    clearTimeout(saveTimer);
    saveTimer = null;
    saveStateNow();
  }
}
function saveStateNow() {
  clearTimeout(saveTimer);
  saveTimer = null;
  const data = captureCurrentState();
  const ok = safeWrite(STORAGE_KEY, data);
  if (ok) {
    $("saveStatus").textContent = "Guardado";
  } else {
    $("saveStatus").textContent = "No se pudo guardar";
    showToast(
      "No se pudo guardar. Revisa el espacio disponible en el navegador.",
    );
  }
}

function setSelect(id, value, fallback) {
  const el = $(id);
  el.value = [...el.options].some((o) => o.value === value) ? value : fallback;
}
function restoreState() {
  const s = loadState();
  $("topic").value = s.topic || "";
  setSelect("workType", s.workType, "Investigación");
  setSelect("approach", s.approach, "Cualitativa");
  setSelect("level", s.level, "Universitario");
  setSelect("citation", s.citation, "APA 7");
  $("sources").value = s.sources || 10;
  setSelect("years", s.years, "Últimos 10 años");
  setSelect("language", s.language, "Español");
  $("context").value = s.context || "";
  $("question").value = s.question || "";
  setSelect("depth", s.depth, "Académica profunda");
  $("realSources").checked = !!s.quality?.realSources;
  $("primarySources").checked = !!s.quality?.primarySources;
  $("tables").checked = !!s.quality?.tables;
  $("limitations").checked = !!s.quality?.limitations;
  structures =
    Array.isArray(s.structures) && s.structures.length
      ? s.structures
      : cloneStructure(STRUCTURES[$("workType").value]);
}

function updateModeUI() {
  const basic = $("workType").value === "Investigación básica";
  $("structurePanel").hidden = basic;
  $("basicModeInfo").hidden = !basic;
}

function syncTypeStructure(force = false) {
  const type = $("workType").value;
  if (type === "Investigación básica") structures = [];
  else if (force || !structures?.length)
    structures = cloneStructure(STRUCTURES[type]);
  $("typeDescription").textContent = TYPE_DESC[type] || "";
  updateModeUI();
  renderStructures();
}

function handleTypeChange() {
  const type = $("workType").value;
  structures =
    type === "Investigación básica" ? [] : cloneStructure(STRUCTURES[type]);
  userEditingPrompt = false;
  $("typeDescription").textContent = TYPE_DESC[type] || "";
  updateModeUI();
  renderStructures();
  generatePrompt();
  saveState();
}

function renderStructures(focus) {
  const container = $("chipsContainer");
  container.innerHTML = "";

  structures.forEach((item, index) => {
    const chip = document.createElement("div");
    chip.className = "chip " + (item.active ? "" : "inactive");
    chip.dataset.index = index;
    chip.setAttribute("role", "listitem");

    const number = document.createElement("span");
    number.className = "chip-number";
    number.textContent = index + 1;

    const main = document.createElement("div");
    main.className = "chip-main";
    main.title = "Clic para activar/desactivar";
    main.dataset.part = "main";
    main.setAttribute("role", "checkbox");
    main.setAttribute("aria-checked", item.active ? "true" : "false");
    main.setAttribute("aria-label", item.name);
    main.tabIndex = 0;
    main.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggleStructure(index);
      }
    });

    const check = document.createElement("span");
    check.className = "check";
    check.textContent = item.active ? "✓" : "·";

    const name = document.createElement("span");
    name.className = "chip-name";
    name.textContent = item.name;

    main.append(check, name);
    main.onclick = () => toggleStructure(index);

    const controls = document.createElement("div");
    controls.className = "chip-controls";

    const up = document.createElement("button");
    up.className = "move-btn";
    up.type = "button";
    up.dataset.part = "up";
    up.textContent = "▲";
    up.title = "Subir sección";
    up.setAttribute("aria-label", `Subir ${item.name}`);
    up.disabled = index === 0;
    up.onclick = (e) => {
      e.stopPropagation();
      moveStructure(index, -1);
    };

    const down = document.createElement("button");
    down.className = "move-btn";
    down.type = "button";
    down.dataset.part = "down";
    down.textContent = "▼";
    down.title = "Bajar sección";
    down.setAttribute("aria-label", `Bajar ${item.name}`);
    down.disabled = index === structures.length - 1;
    down.onclick = (e) => {
      e.stopPropagation();
      moveStructure(index, 1);
    };

    const remove = document.createElement("button");
    remove.className = "remove-btn";
    remove.type = "button";
    remove.dataset.part = "remove";
    remove.textContent = "✕";
    remove.title = "Eliminar sección";
    remove.setAttribute("aria-label", `Eliminar ${item.name}`);
    remove.onclick = (e) => {
      e.stopPropagation();
      removeStructure(index);
    };

    controls.append(up, down, remove);
    chip.append(number, main, controls);
    container.appendChild(chip);
  });

  if (focus) {
    const chip = container.children[focus.index];
    let el =
      chip &&
      chip.querySelector('[data-part="' + focus.part + '"]:not(:disabled)');
    if (!el && chip) el = chip.querySelector('[data-part="main"]');
    if (el) el.focus();
  }
}

function moveStructure(index, direction) {
  const target = index + direction;
  if (
    index < 0 ||
    index >= structures.length ||
    target < 0 ||
    target >= structures.length
  )
    return;

  [structures[index], structures[target]] = [
    structures[target],
    structures[index],
  ];
  userEditingPrompt = false;
  renderStructures({ index: target, part: direction < 0 ? "up" : "down" });
  generatePrompt();
  saveState();
}

function toggleStructure(i) {
  structures[i].active = !structures[i].active;
  userEditingPrompt = false;
  renderStructures({ index: i, part: "main" });
  generatePrompt();
  saveState();
}

function removeStructure(i) {
  structures.splice(i, 1);
  userEditingPrompt = false;
  renderStructures(
    structures.length
      ? { index: Math.min(i, structures.length - 1), part: "main" }
      : null,
  );
  generatePrompt();
  saveState();
  showToast("Sección eliminada.");
}

function addStructure() {
  const input = $("customInput");
  const value = input.value.trim();
  if (!value) {
    input.focus();
    return;
  }
  if (structures.some((s) => s.name.toLowerCase() === value.toLowerCase())) {
    showToast("Esa sección ya existe.");
    return;
  }
  structures.push({ name: value, active: true });
  input.value = "";
  userEditingPrompt = false;
  renderStructures();
  generatePrompt();
  saveState();
}

function resetStructures() {
  structures = cloneStructure(STRUCTURES[$("workType").value]);
  userEditingPrompt = false;
  renderStructures();
  generatePrompt();
  saveState();
  showToast("Estructura restaurada.");
}

function getActiveSections() {
  return structures.filter((s) => s.active).map((s) => s.name);
}

function sectionInstructions(section) {
  const map = {
    Introducción:
      "Presenta el contexto, delimita el tema, explica el propósito y anticipa cómo se organiza el trabajo.",
    "Planteamiento del problema":
      "Describe el problema con precisión, evidencia disponible, alcance, contexto y brecha que justifica estudiarlo.",
    Justificación:
      "Explica la relevancia académica, social, institucional, científica o práctica del estudio y por qué merece realizarse.",
    Objetivos:
      "Formula un objetivo general y objetivos específicos claros, medibles y coherentes con el problema.",
    "Pregunta de investigación":
      "Formula o refina una pregunta investigable, específica, delimitada y coherente con el enfoque metodológico.",
    "Marco teórico":
      "Desarrolla conceptos, teorías, modelos y categorías relevantes, comparando autores y conectándolos con el problema.",
    Metodología:
      "Explica enfoque, diseño, población/muestra cuando corresponda, técnicas, instrumentos, procedimiento, criterios de análisis y consideraciones éticas.",
    Resultados:
      "Presenta los hallazgos con datos, evidencias, tablas o síntesis claramente diferenciadas de su interpretación.",
    Discusión:
      "Interpreta los resultados, compáralos con la literatura y explica coincidencias, diferencias, implicaciones y posibles causas.",
    Conclusiones:
      "Responde los objetivos y/o la pregunta de investigación con conclusiones sustentadas en la evidencia presentada.",
    Referencias:
      "Incluye únicamente las fuentes realmente consultadas y verificadas, con la norma de citación solicitada.",
    Anexos:
      "Incluye materiales complementarios solo cuando sean útiles: instrumentos, tablas extensas, documentos, evidencias o datos.",
    Antecedentes:
      "Identifica investigaciones y trabajos previos relevantes, indicando autores, año, objetivo, método y principales hallazgos.",
    Cronograma:
      "Propón una secuencia temporal realista de actividades del proyecto.",
    Presupuesto:
      "Estima recursos y costos de forma razonable; no inventes valores presentándolos como oficiales.",
    Resumen:
      "Sintetiza problema, objetivo, metodología, resultados y conclusión en un texto claro y autónomo.",
    "Palabras clave":
      "Propón términos concretos y útiles para indexación y búsqueda académica.",
    Título:
      "Propón un título preciso, delimitado, académico y coherente con el problema o tema.",
    "Descripción del caso":
      "Describe el caso seleccionado con hechos verificables, actores, características y límites del caso.",
    Contexto:
      "Explica el entorno geográfico, institucional, histórico, social, económico o tecnológico pertinente.",
    "Análisis del caso":
      "Examina evidencias del caso mediante categorías derivadas del marco teórico y del objetivo de estudio.",
    Recomendaciones:
      "Formula acciones concretas, viables y justificadas por los hallazgos.",
    Materiales:
      "Enumera materiales, recursos, instrumentos o equipos realmente necesarios para reproducir la experiencia.",
    "Análisis de resultados":
      "Interpreta los datos obtenidos, identifica patrones, errores, relaciones y posibles explicaciones.",
    "Metodología de búsqueda":
      "Explica bases de datos, palabras clave, criterios de inclusión/exclusión, periodo y proceso de selección.",
    "Desarrollo / análisis de la literatura":
      "Sintetiza y compara la literatura, agrupándola por temas, métodos, resultados o perspectivas.",
    Valoración:
      "Expresa una evaluación crítica equilibrada, argumentada con criterios explícitos.",
    "Ficha de la obra":
      "Identifica la obra y sus datos bibliográficos esenciales sin inventar información.",
    Tesis: "Formula una postura central defendible y específica.",
    Argumentos:
      "Desarrolla argumentos independientes, sustentados en evidencia y razonamiento.",
    Contraargumentos:
      "Presenta objeciones o perspectivas alternativas relevantes y de buena fe.",
    Refutación:
      "Responde los contraargumentos mediante evidencia, razonamiento y delimitación de sus alcances.",
    "Análisis de investigaciones":
      "Compara investigaciones previas según objetivos, métodos, resultados y limitaciones.",
    "Tendencias y hallazgos":
      "Identifica patrones, consensos, cambios y resultados frecuentes respaldados por la literatura.",
    "Vacíos de investigación":
      "Detecta preguntas sin resolver, limitaciones del conocimiento actual y oportunidades de investigación.",
    "Descripción del trabajo de campo":
      "Detalla dónde, cuándo, con quién y cómo se desarrolló el trabajo de campo, sin inventar datos.",
    Diagnóstico:
      "Caracteriza la situación inicial y las necesidades detectadas utilizando evidencia suficiente.",
    "Plan de intervención":
      "Diseña acciones, responsables, recursos, población objetivo, actividades e indicadores coherentes con el diagnóstico.",
    "Recursos / presupuesto":
      "Detalla los recursos humanos, materiales, tecnológicos y financieros necesarios.",
    "Resultados esperados":
      "Define resultados concretos y verificables que razonablemente podrían esperarse del proyecto.",
    Evaluación:
      "Establece criterios e indicadores para valorar el cumplimiento de objetivos y la efectividad de la solución o intervención.",
    "Descripción de la experiencia":
      "Explica qué se hizo, con quién, dónde y en qué condiciones.",
    "Reconstrucción de la experiencia":
      "Ordena cronológicamente hechos, decisiones, cambios y momentos significativos.",
    Aprendizajes:
      "Extrae aprendizajes explícitos y transferibles derivados de la experiencia analizada.",
    Portada:
      "Indica los datos académicos necesarios para una portada, sin inventar nombres o datos institucionales.",
    Hipótesis:
      "Propón una hipótesis comprobable solo cuando el problema y el enfoque lo justifiquen; si no corresponde, indícalo.",
    "Diseño de la solución":
      "Define la solución propuesta, sus componentes, requisitos, alcance y criterios de diseño.",
    Implementación:
      "Describe cómo se implementaría la solución, incluyendo pasos, recursos, validación y control de cambios.",
    "Planteamiento de la necesidad":
      "Define la necesidad concreta, a quién afecta, evidencia del problema y alcance.",
    "Desarrollo del proyecto":
      "Organiza el desarrollo por fases o actividades y vincúlalo con los objetivos.",
    "Planteamiento del tema":
      "Delimita el tema, sus dimensiones y los límites del análisis.",
    Desarrollo:
      "Desarrolla el contenido de forma lógica, sustentada y coherente con la tesis o propósito.",
    Análisis:
      "Interpreta críticamente la evidencia y relaciona hallazgos con autores, conceptos o datos.",
  };
  return (
    map[section] ||
    "Desarrolla esta sección con información pertinente, evidencia verificable y coherencia con los objetivos del trabajo."
  );
}

function buildPrompt() {
  const topic = $("topic").value.trim() || "[TEMA DE INVESTIGACIÓN]";
  const type = $("workType").value;
  const approach = $("approach").value;
  const level = $("level").value;
  const citation = $("citation").value;
  const sources = Math.max(1, Math.min(100, Number($("sources").value) || 10));
  const years = $("years").value;
  const language = $("language").value;
  const context =
    $("context").value.trim() || "[PAÍS, INSTITUCIÓN O CONTEXTO, SI APLICA]";
  const question =
    $("question").value.trim() || "[FORMULAR O REFINAR SI ES NECESARIO]";
  const depth = $("depth").value;
  const active = getActiveSections();
  const basicMode = type === "Investigación básica";

  const structureBlock = active.length
    ? active
        .map(
          (s, i) => `${i + 1}. ${s}\n   Instrucción: ${sectionInstructions(s)}`,
        )
        .join("\n")
    : "No hay secciones académicas predefinidas. La organización debe surgir del tema y de la evidencia encontrada.";

  const rules = [];
  if ($("realSources").checked)
    rules.push(
      "No inventes autores, artículos, libros, DOI, estadísticas, nombres de instituciones ni URLs. Toda referencia citada debe existir y poder verificarse.",
    );
  if ($("primarySources").checked)
    rules.push(
      "Prioriza fuentes primarias y oficiales: artículos académicos, libros académicos, organismos públicos, universidades, bases de datos reconocidas, normas y documentos institucionales.",
    );
  rules.push(
    `Busca y utiliza como mínimo ${sources} fuentes pertinentes, priorizando su calidad sobre la cantidad.`,
  );
  rules.push(
    `Prioriza información de ${years}, salvo obras fundamentales que deban conservarse por su relevancia teórica o histórica.`,
  );
  rules.push(`Usa ${citation} para citas y referencias.`);
  if ($("tables").checked)
    rules.push(
      "Incluye tablas, comparaciones, cronologías, matrices o listas cuando mejoren la comprensión, pero no agregues tablas por obligación.",
    );
  if ($("limitations").checked)
    rules.push(
      "Distingue explícitamente hechos verificados, interpretaciones, inferencias, limitaciones y vacíos de evidencia.",
    );
  rules.push(
    "Cuando una afirmación importante tenga respaldo externo, indica la fuente correspondiente y enlaza el documento original o la página oficial cuando sea posible.",
  );
  rules.push(
    "No rellenes vacíos con suposiciones presentadas como hechos. Cuando no exista evidencia suficiente, dilo claramente.",
  );
  rules.push(
    `La respuesta final debe estar redactada en ${language} y adaptada a un nivel ${level}.`,
  );
  rules.push(
    `Mantén una profundidad ${depth}, con razonamiento académico, buena conexión entre secciones y sin texto de relleno.`,
  );

  const prompt = basicMode
    ? `Actúa como un investigador experto y realiza una investigación básica pero profunda y detallada sobre el siguiente tema:

“TEMA: ${topic}”

CONTEXTO:
${context}

PREGUNTA O INTERÉS ESPECÍFICO:
${question}

ENFOQUE:
${approach}

NIVEL DEL LECTOR:
${level}

OBJETIVO DEL MODO “INVESTIGACIÓN BÁSICA”:
Investiga directamente lo que sea relevante para comprender el tema solicitado. NO conviertas la respuesta en un trabajo académico tradicional y NO impongas una plantilla fija. No agregues Introducción, Justificación, Objetivos, Marco teórico, Metodología, Conclusiones u otras secciones académicas solo porque existan en modelos de trabajos universitarios. Usa únicamente la organización que aporte valor al tema.

FORMA DE INVESTIGAR:
1. Analiza primero qué aspectos, preguntas, hechos, conceptos, antecedentes, actores, fechas, datos, causas, consecuencias, comparaciones o debates son relevantes para el tema.
2. Organiza la respuesta mediante apartados dinámicos creados específicamente para el contenido investigado.
3. Profundiza en cada aspecto importante y evita dedicar espacio a elementos secundarios solo para hacer la respuesta más larga.
4. Incluye fechas exactas, cifras, nombres, documentos, leyes, decisiones, acontecimientos o ejemplos cuando sean relevantes y puedan verificarse.
5. Explica relaciones de causa, contexto y consecuencias cuando la evidencia permita establecerlas.
6. Cuando existan distintas interpretaciones o posiciones, compáralas de forma equilibrada y explica en qué evidencia se apoya cada una.
7. Puedes usar cronologías, tablas comparativas, listas, mapas conceptuales en texto o matrices cuando mejoren la comprensión.
8. No confundas hechos con opiniones o inferencias. Señala claramente qué está comprobado y qué es interpretación.
9. No rellenes vacíos de información con suposiciones. Cuando una cuestión no pueda confirmarse, indícalo.
10. Mantén la investigación centrada exclusivamente en el tema solicitado.

REGLAS DE FUENTES Y CALIDAD:
${rules.map((r, i) => `${i + 1}. ${r}`).join("\n")}

ESTILO DE RESPUESTA:
- Responde en ${language}.
- Mantén una profundidad ${depth}.
- Sé claro, preciso y detallado, sin texto de relleno.
- No repitas información con palabras diferentes.
- Incluye las fuentes junto con las afirmaciones importantes y una relación final de referencias cuando corresponda.
- Prioriza siempre la trazabilidad de la información.

ANTES DE FINALIZAR:
Revisa toda la investigación para detectar datos dudosos, contradicciones, fuentes débiles, información posiblemente desactualizada y aspectos que deberían verificarse. No inventes ningún dato ni referencia.`
    : `Actúa como un investigador académico experto y realiza una investigación ${approach.toLowerCase()} sobre el siguiente tema:

“TEMA: ${topic}”

TIPO DE TRABAJO:
${type}

CONTEXTO:
${context}

PREGUNTA DE INVESTIGACIÓN:
${question}

OBJETIVO GENERAL DE LA TAREA:
Investigar, contrastar y explicar el tema con evidencia suficiente, fuentes confiables y una estructura académica coherente con el tipo de trabajo seleccionado.

INSTRUCCIONES DE ESTRUCTURA — ORDEN OBLIGATORIO:
${structureBlock}

REGLAS DE INVESTIGACIÓN Y CALIDAD:
${rules.map((r, i) => `${i + 1}. ${r}`).join("\n")}

PROCESO RECOMENDADO:
1. Delimita el tema y aclara los conceptos ambiguos antes de redactar.
2. Identifica las preguntas clave que deben responderse.
3. Localiza y contrasta fuentes confiables antes de sacar conclusiones.
4. Comprueba fechas, autores, títulos, DOI, instituciones y enlaces cuando estén disponibles.
5. Diferencia fuentes primarias, revisiones académicas, fuentes oficiales y materiales secundarios.
6. Contrasta afirmaciones importantes entre más de una fuente cuando sea razonable.
7. Organiza la evidencia siguiendo exactamente el orden de secciones indicado.
8. No presentes como resultado real un dato que no pueda comprobarse.
9. Al terminar, revisa que objetivos, metodología, resultados y conclusiones sean coherentes entre sí.
10. Incluye una lista final de referencias completa y coherente con las citas utilizadas.

FORMATO DE SALIDA:
- Usa encabezados claros para cada sección.
- Escribe con tono académico, preciso y comprensible.
- Evita repeticiones y generalidades.
- Señala claramente cualquier limitación de la evidencia.
- Cierra con una revisión de calidad que indique posibles vacíos, inconsistencias o datos que el investigador humano debería verificar personalmente.

IMPORTANTE:
La prioridad es la rigurosidad y la trazabilidad de las fuentes. No inventes información para completar el documento.`;

  return prompt;
}

let historialSaveTimer = null;

function generatePrompt() {
  if (userEditingPrompt) return;
  const text = buildPrompt();
  $("finalPrompt").value = text;
  autoResize();
  updateStats(text);
  autoSaveHistorial();
}

/* Guarda automáticamente en el historial con toda la configuración del momento. */
function autoSaveHistorial() {
  clearTimeout(historialSaveTimer);
  historialSaveTimer = setTimeout(() => {
    const st = captureCurrentState();
    const topic = (st.topic || "").trim();
    if (!topic) return;
    let historial = safeRead(HISTORIAL_KEY, []);
    if (!Array.isArray(historial)) historial = [];
    const idx = historial.findIndex((e) => (e.topic || "").toLowerCase() === topic.toLowerCase());
    const entry = {
      id: idx >= 0 ? historial[idx].id : newId("his"),
      name: topic.slice(0, 90),
      topic,
      createdAt: idx >= 0 ? historial[idx].createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      state: st,
      prompt: $("finalPrompt").value,
    };
    if (idx >= 0) historial[idx] = entry; else historial.unshift(entry);
    safeWrite(HISTORIAL_KEY, historial.slice(0, 100));
    renderHistorial();
  }, 500);
}

function onPromptEdit() {
  userEditingPrompt = true;
  autoResize();
  updateStats($("finalPrompt").value);
  saveState();
  autoSaveHistorial();
}

function regeneratePrompt() {
  userEditingPrompt = false;
  generatePrompt();
  saveState();
  showToast("Prompt regenerado.");
}

function onPromptEdit() {
  userEditingPrompt = true;
  autoResize();
  updateStats($("finalPrompt").value);
  saveState();
}

function autoResize() {
  const area = $("finalPrompt");
  area.style.height = "auto";
  area.style.height = Math.min(Math.max(area.scrollHeight, 300), 650) + "px";
}

function updateStats(text) {
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const tokens = Math.round(chars / 3.7);
  $("promptStats").textContent =
    `${chars.toLocaleString("es-CO")} caracteres · ${words.toLocaleString("es-CO")} palabras · ≈ ${tokens.toLocaleString("es-CO")} tokens (estimado)`;
}

async function copyPrompt() {
  const ok = await copyText($("finalPrompt").value);
  showToast(
    ok
      ? "Prompt copiado al portapapeles."
      : "No se pudo copiar. Selecciona el texto y usa Ctrl/Cmd + C.",
  );
}

function downloadPrompt() {
  downloadBlob(
    $("finalPrompt").value,
    "prompt-investigacion.txt",
    "text/plain;charset=utf-8",
  );
  showToast("Archivo .txt descargado.");
}

function exportConfig() {
  saveStateNow();
  downloadJson(
    { ...captureCurrentState() },
    "config-investigacion.json",
  );
  showToast("Configuración exportada.");
}

function importConfig(event) {
  const files = event.target.files;
  const file = files && files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!data || typeof data !== "object" || Array.isArray(data))
        throw new Error("Formato incorrecto");
      safeWrite(STORAGE_KEY, sanitizeState(data));
      restoreState();
      userEditingPrompt = false;
      syncTypeStructure();
      generatePrompt();
      saveStateNow();
      showToast("Configuración importada.");
    } catch {
      showToast("El JSON no es válido.");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

/* ---------- Historial (reemplaza a "proyectos") ---------- */
function cloneStructure(names) {
  return names.map((name) => ({ name, active: true }));
}

function escapeHtml(s) {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );
}

function newId(prefix) {
  const rnd =
    window.crypto && crypto.randomUUID
      ? crypto.randomUUID().slice(0, 8)
      : Math.random().toString(36).slice(2, 10);
  return prefix + "-" + Date.now().toString(36) + "-" + rnd;
}

function cleanStr(v, max) {
  return typeof v === "string"
    ? v.replace(/\u0000/g, "").trim().slice(0, max)
    : "";
}
function cleanDate(v) {
  const d = new Date(v);
  return typeof v === "string" && !isNaN(d)
    ? d.toISOString()
    : new Date().toISOString();
}
function fmtDate(v) {
  if (!v) return "—";
  const d = new Date(v);
  return isNaN(d)
    ? "—"
    : d.toLocaleDateString("es-CO", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
}
function sanitizeState(st) {
  const base = defaultState();
  if (!st || typeof st !== "object" || Array.isArray(st)) return base;
  const type =
    typeof st.workType === "string" && STRUCTURES[st.workType]
      ? st.workType
      : base.workType;
  const q = st.quality && typeof st.quality === "object" ? st.quality : {};
  let structs;
  if (Array.isArray(st.structures)) {
    structs = st.structures
      .slice(0, 60)
      .filter((x) => x && typeof x.name === "string" && x.name.trim())
      .map((x) => ({
        name: cleanStr(x.name, 120),
        active: x.active !== false,
      }));
  } else {
    structs = cloneStructure(STRUCTURES[type]);
  }
  return {
    topic: cleanStr(st.topic, 500),
    workType: type,
    approach: cleanStr(st.approach, 60) || base.approach,
    level: cleanStr(st.level, 60) || base.level,
    citation: cleanStr(st.citation, 60) || base.citation,
    sources: Math.max(1, Math.min(100, Number(st.sources) || 10)),
    years: cleanStr(st.years, 80) || base.years,
    language: cleanStr(st.language, 60) || base.language,
    context: cleanStr(st.context, 500),
    question: cleanStr(st.question, 800),
    depth: cleanStr(st.depth, 60) || base.depth,
    quality: {
      realSources: q.realSources !== false,
      primarySources: q.primarySources !== false,
      tables: q.tables !== false,
      limitations: q.limitations !== false,
    },
    structures: structs,
  };
}
function captureCurrentState() {
  return {
    topic: $("topic").value,
    workType: $("workType").value,
    approach: $("approach").value,
    level: $("level").value,
    citation: $("citation").value,
    sources: $("sources").value,
    years: $("years").value,
    language: $("language").value,
    context: $("context").value,
    question: $("question").value,
    depth: $("depth").value,
    quality: {
      realSources: $("realSources").checked,
      primarySources: $("primarySources").checked,
      tables: $("tables").checked,
      limitations: $("limitations").checked,
    },
    structures: JSON.parse(JSON.stringify(structures)),
  };
}

/* Historial de temas recientes (chips bajo el tema) */
function loadHistory() {
  return safeRead(HISTORY_KEY, []);
}
function saveHistory(topic) {
  if (!topic) return;
  let history = safeRead(HISTORY_KEY, []);
  history = (Array.isArray(history) ? history : []).filter(
    (x) => typeof x === "string" && x.toLowerCase() !== topic.toLowerCase(),
  );
  history.unshift(topic);
  safeWrite(HISTORY_KEY, history.slice(0, 7));
  renderHistory();
}
function renderHistory() {
  const items = loadHistory();
  const box = $("historyContainer");
  if (!items.length) {
    box.innerHTML = "";
    return;
  }
  box.innerHTML =
    `<span class="history-label">Recientes:</span>` +
    items
      .map(
        (x, i) =>
          `<span class="history-chip" data-h="${i}" role="button" tabindex="0">${escapeHtml(x)}</span>`,
      )
      .join("");
  box.querySelectorAll("[data-h]").forEach((el) => {
    const topic = items[Number(el.dataset.h)];
    el.addEventListener("click", () => useHistory(topic));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        useHistory(topic);
      }
    });
  });
}
function useHistory(topic) {
  $("topic").value = topic;
  userEditingPrompt = false;
  generatePrompt();
  saveState();
  $("topic").focus();
}

/* Historial de investigaciones guardadas */
function saveToHistorial() {
  const st = captureCurrentState();
  if (!st.topic.trim()) {
    showToast("Escribe un tema antes de guardar.");
    $("topic").focus();
    return;
  }
  const entry = {
    id: newId("his"),
    name: st.topic.slice(0, 90) || "Investigación sin título",
    topic: st.topic,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    state: st,
    prompt: $("finalPrompt").value,
  };
  let historial = safeRead(HISTORIAL_KEY, []);
  if (!Array.isArray(historial)) historial = [];
  historial.unshift(entry);
  safeWrite(HISTORIAL_KEY, historial.slice(0, 100));
  renderHistorial();
  showToast("Guardado en el historial.");
}

function loadHistorial() {
  const h = safeRead(HISTORIAL_KEY, []);
  return Array.isArray(h) ? h : [];
}

function renderHistorial() {
  const box = $("historialGrid");
  if (!box) return;
  const items = loadHistorial();
  if (!items.length) {
    box.innerHTML = emptyStateHtml(
      "📜",
      "Sin investigaciones guardadas",
      "Guarda una investigación desde el generador para que aparezca aquí.",
    );
    return;
  }
  box.innerHTML = items
    .map(
      (e, i) =>
        '<article class="project-card" data-index="' +
        i +
        '">' +
        "<h3>" +
        escapeHtml(e.name || "Investigación sin título") +
        "</h3>" +
        "<p>" +
        escapeHtml(e.topic || "Sin tema") +
        "</p>" +
        '<div class="project-meta">' +
        escapeHtml(e.state?.workType || "Investigación") +
        " · Modificado: " +
        escapeHtml(fmtDate(e.updatedAt)) +
        "</div>" +
        '<div class="project-actions">' +
        '<button type="button" class="primary-btn" data-action="load-historial">Cargar</button>' +
        '<button type="button" class="danger-btn" data-action="delete-historial">Eliminar</button>' +
        "</div></article>",
    )
    .join("");
}

function loadHistorialEntry(index) {
  const items = loadHistorial();
  const e = items[index];
  if (!e) return;
  safeWrite(STORAGE_KEY, e.state);
  restoreState();
  userEditingPrompt = false;
  syncTypeStructure();
  $("finalPrompt").value = e.prompt || buildPrompt();
  autoResize();
  updateStats($("finalPrompt").value);
  saveState();
  showView("generator");
  showToast("Investigación cargada.");
}

function deleteHistorialEntry(index) {
  let historial = loadHistorial();
  const removed = historial[index];
  if (!removed) return;
  historial.splice(index, 1);
  safeWrite(HISTORIAL_KEY, historial);
  renderHistorial();
  showToast("Eliminado del historial.", {
    action: {
      label: "Deshacer",
      run: () => {
        historial.splice(index, 0, removed);
        safeWrite(HISTORIAL_KEY, historial);
        renderHistorial();
      },
    },
  });
}

function clearHistorial() {
  if (!confirm("Esto borrará TODO el historial de investigaciones y los temas recientes. No se puede deshacer. ¿Continuar?"))
    return;
  safeWrite(HISTORIAL_KEY, []);
  safeWrite(HISTORY_KEY, []);
  renderHistorial();
  renderHistory();
  showToast("Historial eliminado por completo.");
}

/* ---------- utilidades ---------- */
function downloadBlob(content, filename, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function downloadJson(data, name) {
  downloadBlob(
    JSON.stringify(data, null, 2),
    name,
    "application/json;charset=utf-8",
  );
}
function slug(s) {
  return (
    String(s)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "investigacion"
  ).slice(0, 50);
}
function emptyStateHtml(icon, title, text, buttonHtml) {
  return (
    '<div class="empty-state span-all">' +
    (icon ? '<div class="empty-icon">' + icon + "</div>" : "") +
    "<strong>" +
    escapeHtml(title) +
    "</strong><span>" +
    escapeHtml(text) +
    "</span>" +
    (buttonHtml ? '<div class="empty-actions">' + buttonHtml + "</div>" : "") +
    "</div>"
  );
}

function exportMarkdown() {
  const st = captureCurrentState();
  const lines = [
    "# " + (st.topic || "Investigación"),
    "",
    "- **Tipo de trabajo:** " + st.workType,
    "- **Enfoque:** " + st.approach,
    "- **Nivel:** " + st.level,
    "- **Norma de citación:** " + st.citation,
    "- **Fuentes mínimas:** " + st.sources,
    "- **Rango temporal:** " + st.years,
    "- **Idioma:** " + st.language,
    "- **Profundidad:** " + st.depth,
  ];
  if (st.context) lines.push("- **Contexto:** " + st.context);
  if (st.question)
    lines.push("- **Pregunta de investigación:** " + st.question);
  lines.push("", "## Prompt", "", "````text", $("finalPrompt").value, "````");
  downloadBlob(
    lines.join("\n") + "\n",
    slug(st.topic) + ".md",
    "text/markdown;charset=utf-8",
  );
  showToast("Archivo .md descargado.");
}

/* ---------- motores de búsqueda / chatbots ---------- */
const ENGINE_NAMES = {
  google: "Google Search",
  perplexity: "Perplexity",
  brave: "Brave",
  chatgpt: "ChatGPT",
  gemini: "Gemini",
};

let lastEngine = null;
let lastFullPrompt = "";

function showEngineNotice(msg) {
  const panel = $("enginePanel");
  if (panel) {
    $("enginePanelText").textContent = msg;
    panel.hidden = false;
    window.setTimeout(
      () => panel.scrollIntoView({ behavior: "smooth", block: "nearest" }),
      30,
    );
  }
  showToast(msg);
}

function runSearch(engine) {
  const topic = $("topic").value.trim();
  if (!topic) {
    showToast("Escribe primero el tema de investigación.");
    $("topic").focus();
    return;
  }
  saveHistory(topic);
  const full = $("finalPrompt").value.trim() || buildPrompt();
  const encFull = encodeURIComponent(full);
  const encTopic = encodeURIComponent(topic);
  const urls = {
    google: "https://www.google.com/search?q=" + encFull,
    perplexity: "https://www.perplexity.ai/search?q=" + encFull,
    brave: "https://search.brave.com/ask?q=" + encFull,
    chatgpt: "https://chatgpt.com/?q=" + encFull,
    gemini: "https://gemini.google.com/app",
  };
  if (!urls[engine]) return;
  lastEngine = engine;
  lastFullPrompt = full;

  try {
    fallbackCopy(full);
  } catch (e) {}
  window.open(urls[engine], "_blank", "noopener,noreferrer");

  const name = ENGINE_NAMES[engine] || engine;
  if (engine === "google") {
    showEngineNotice(
      "Google abierto con el prompt completo en la URL. Prompt también copiado al portapapeles (Ctrl/Cmd+V).",
    );
  } else if (engine === "gemini") {
    showEngineNotice(
      "Prompt completo copiado. Pégalo en Gemini con Ctrl/Cmd + V.",
    );
  } else {
    showEngineNotice(
      "Prompt completo enviado a " +
        name +
        " por la URL y copiado al portapapeles. Si aparece cortado, usa «📋 Copiar prompt de nuevo».",
    );
  }
}

/* ---------- tema ---------- */
function toggleTheme() {
  const html = document.documentElement;
  const light = html.dataset.theme === "light";
  if (light) {
    delete html.dataset.theme;
    $("themeToggle").textContent = "🌙";
    try {
      safeWrite(THEME_KEY, "dark");
    } catch {}
  } else {
    html.dataset.theme = "light";
    $("themeToggle").textContent = "☀️";
    try {
      safeWrite(THEME_KEY, "light");
    } catch {}
  }
}

function initTheme() {
  let saved = null;
  try {
    saved = safeRead(THEME_KEY, null);
  } catch {}
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)",
  ).matches;
  if (saved === "light" || (!saved && prefersLight)) {
    document.documentElement.dataset.theme = "light";
    $("themeToggle").textContent = "☀️";
  }
}

/* ---------- toasts ---------- */
let toastTimer = null;
function showToast(message, opts = {}) {
  const region = $("toastRegion");
  clearTimeout(toastTimer);
  region.textContent = "";
  const t = document.createElement("div");
  t.className = "toast";
  const span = document.createElement("span");
  span.textContent = message;
  t.appendChild(span);
  if (opts.action) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "toast-action";
    b.textContent = opts.action.label;
    b.addEventListener("click", () => {
      region.textContent = "";
      opts.action.run();
    });
    t.appendChild(b);
  }
  region.appendChild(t);
  toastTimer = setTimeout(
    () => {
      region.textContent = "";
    },
    opts.duration || (opts.action ? 8000 : 3200),
  );
}

/* ---------- portapapeles ---------- */
function fallbackCopy(text) {
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.className = "sr-copy";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  } catch {
    return false;
  }
}
function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).then(
      () => true,
      () => fallbackCopy(text),
    );
  }
  return Promise.resolve(fallbackCopy(text));
}

/* ---------- diálogo de texto ---------- */
function askText({
  title,
  label,
  value = "",
  okLabel = "Guardar",
  maxLength = 90,
}) {
  return new Promise((resolve) => {
    const dlg = $("textDialog"),
      form = $("textForm"),
      input = $("textDialogInput");
    $("textDialogTitle").textContent = title;
    $("textDialogLabel").textContent = label;
    $("textDialogOk").textContent = okLabel;
    input.value = value;
    input.maxLength = maxLength;
    let result = null;
    const onSubmit = (e) => {
      e.preventDefault();
      const v = input.value.trim();
      if (!v) {
        input.focus();
        return;
      }
      result = v;
      dlg.close();
    };
    const onClose = () => {
      form.removeEventListener("submit", onSubmit);
      dlg.removeEventListener("close", onClose);
      resolve(result);
    };
    form.addEventListener("submit", onSubmit);
    dlg.addEventListener("close", onClose);
    dlg.showModal();
    input.focus();
    input.select();
  });
}

/* ---------- navegación ---------- */
const VIEWS = {
  generator: "generatorView",
  historial: "historialView",
};
function showView(name) {
  if (!VIEWS[name]) return;
  flushSave();
  Object.entries(VIEWS).forEach(([k, id]) => {
    $(id).hidden = k !== name;
  });
  document.querySelectorAll(".nav-btn").forEach((b) => {
    const active = b.dataset.view === name;
    b.classList.toggle("active", active);
    b.setAttribute("aria-selected", active ? "true" : "false");
    b.tabIndex = active ? 0 : -1;
  });
  if (name === "historial") renderHistorial();
  window.scrollTo({ top: 0, behavior: "smooth" });
  $(VIEWS[name]).focus({ preventScroll: true });
}

/* ---------- acciones ---------- */
const ACTIONS = {
  "go-view": (_id, el) => showView(el.dataset.target),
  "load-historial": (id) => loadHistorialEntry(Number(id)),
  "delete-historial": (id) => deleteHistorialEntry(Number(id)),
  "clear-historial": () => clearHistorial(),
  "close-dialog": (_id, el) => el.closest("dialog").close(),
};

function initPlatform() {
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action]");
    if (!el) return;
    const fn = ACTIONS[el.dataset.action];
    if (!fn) return;
    const card = el.closest("[data-index]");
    fn(card ? card.dataset.index : "", el);
  });
  const tabs = document.querySelector(".app-nav");
  tabs.addEventListener("click", (e) => {
    const b = e.target.closest(".nav-btn");
    if (b) showView(b.dataset.view);
  });
  tabs.addEventListener("keydown", (e) => {
    const tabsList = [...document.querySelectorAll(".nav-btn")];
    const i = tabsList.indexOf(document.activeElement);
    if (i < 0) return;
    let j = null;
    if (e.key === "ArrowRight") j = (i + 1) % tabsList.length;
    else if (e.key === "ArrowLeft") j = (i - 1 + tabsList.length) % tabsList.length;
    else if (e.key === "Home") j = 0;
    else if (e.key === "End") j = tabsList.length - 1;
    if (j === null) return;
    e.preventDefault();
    tabsList[j].focus();
    showView(tabsList[j].dataset.view);
  });
  if ($("engineCopyBtn")) {
    $("engineCopyBtn").addEventListener("click", async () => {
      const full =
        lastFullPrompt || $("finalPrompt").value.trim() || buildPrompt();
      const ok = await copyText(full);
      showToast(ok ? "Prompt copiado de nuevo." : "No se pudo copiar.");
    });
  }
  if ($("engineCloseBtn")) {
    $("engineCloseBtn").addEventListener("click", () => {
      if ($("enginePanel")) $("enginePanel").hidden = true;
    });
  }
  $("topic").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveHistory($("topic").value.trim());
    }
  });
  $("customInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addStructure();
    }
  });
  window.addEventListener("pagehide", flushSave);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) flushSave();
  });
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

/* ---------- inputs ---------- */
function bindInputs() {
  [
    "topic",
    "approach",
    "level",
    "citation",
    "sources",
    "years",
    "language",
    "context",
    "question",
    "depth",
    "realSources",
    "primarySources",
    "tables",
    "limitations",
  ].forEach((id) => {
    $(id).addEventListener("input", () => {
      if (id !== "topic") userEditingPrompt = false;
      generatePrompt();
      saveState();
    });
    $(id).addEventListener("change", () => {
      if (id !== "topic") userEditingPrompt = false;
      generatePrompt();
      saveState();
    });
  });
  $("topic").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveHistory($("topic").value.trim());
    }
  });
  $("customInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addStructure();
    }
  });
  $("finalPrompt").addEventListener("input", onPromptEdit);
  $("workType").addEventListener("change", handleTypeChange);
}

/* ---------- inicio ---------- */
function init() {
  initTypeOptions();
  initTheme();
  restoreState();
  $("typeDescription").textContent = TYPE_DESC[$("workType").value] || "";
  updateModeUI();
  renderHistory();
  renderStructures();
  bindInputs();
  generatePrompt();
  renderHistorial();
  initPlatform();
}

function initTypeOptions() {
  $("workType").innerHTML = Object.keys(STRUCTURES)
    .map(
      (type) =>
        `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`,
    )
    .join("");
}

init();
