const i18n = {
  es: {
    pageTitle: "Daniel Perez",
    metaDesc: "Portfolio personal de Daniel Perez: Profesor de informática y desarrollador.",
    nextLangLabel: "EN",
    nextLangAria: "Cambiar idioma a inglés",
    role: "Profesor de informática y desarrollador",
    aboutHeading: "Sobre mí",
    aboutText: "Soy Daniel. :D",
    expHeading: "Experiencia",
    exp1Date: "2020 - presente",
    exp1Role: "Profesor de Grado Superior de Informática",
    exp1Desc: "Enseñando y transmitiendo el arte de la programación: fundamentos, programación orientada a objetos, sistemas concurrentes y desarrollo de interfaces visuales. Colaborando con empresas de varios países para conectar la experiencia real del sector con el aprendizaje de los alumnos.",
    exp2Role: "Ingeniero Desarrollador CRM - Accenture",
    exp2Desc: "Creación de soluciones empresariales escalables. Personalización de flujos de trabajo, integraciones y experiencias de usuario para optimizar procesos de negocio.",
    projectsHeading: "Proyectos",
    gestoryDesc: "Aplicación web inspirada en el gestor de archivos de iOS diseñada para ayudar a autónomos y pequeñas empresas en España a gestionar sus finanzas. Agiliza tareas como la creación y archivo de facturas y gastos, así como la gestión de declaraciones de impuestos.",
    libraryDesc: "Servidor retro personal para organizar notas y almacenamiento de archivos, creado como proyecto experimental que combina interfaces nostálgicas con tecnologías web modernas.",
    subdifDesc: "Matemáticas Avanzadas - UNED",
    artistDesc: "Portfolio web diseñado para una artista visual, centrado en una interfaz minimalista y una identidad visual marcada."
  },
  en: {
    pageTitle: "Daniel Perez",
    metaDesc: "Personal portfolio of Daniel Perez: IT Teacher and developer.",
    nextLangLabel: "ES",
    nextLangAria: "Switch language to Spanish",
    role: "IT-Teacher and developer",
    aboutHeading: "About",
    aboutText: "I'm Daniel. :D",
    expHeading: "Experience",
    exp1Date: "2020 - present",
    exp1Role: "Superior Degree IT - Teacher",
    exp1Desc: "Teaching and conveying the art of programming, covering foundational principles, object-oriented programming, concurrent systems, and visual interface development. Collaborating with companies across multiple countries to bridge real-world industry experience with student learning.",
    exp2Role: "CRM Developer Engineer - Accenture",
    exp2Desc: "Building scalable business solutions. Customizing workflows, integrations, and user experiences to optimize business processes.",
    projectsHeading: "Projects",
    gestoryDesc: "An iOS file manager-inspired web application designed to help freelancers and small business owners in Spain manage their finances. It streamlines tasks such as creating and storing invoices and expenses, as well as handling tax declarations.",
    libraryDesc: "Personal retro server for organizing notes and file storage, built as an experimental project combining nostalgic interfaces with modern web technologies.",
    subdifDesc: "Advanced Mathematics - UNED",
    artistDesc: "Portfolio web designed for a visual artist, focusing on a minimalist interface and a strong visual identity."
  }
};

const flagSvgs = {
  en: `<svg class="lang-flag-icon" viewBox="0 0 60 30" width="22" height="15" aria-hidden="true"><clipPath id="uk-clip"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="uk-diag"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#uk-clip)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#uk-diag)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>`,
  es: `<svg class="lang-flag-icon" viewBox="0 0 18 12" width="22" height="15" aria-hidden="true"><rect width="18" height="12" fill="#AA151B"/><rect y="3" width="18" height="6" fill="#F1BF00"/></svg>`
};

function setLanguage(lang) {
  const current = i18n[lang] ? lang : "es";
  const t = i18n[current];

  document.documentElement.lang = current;
  document.title = t.pageTitle;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t.metaDesc);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", t.metaDesc);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", t.pageTitle);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  const nextLang = current === "es" ? "en" : "es";
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.setAttribute("aria-label", t.nextLangAria);
    langToggle.setAttribute("title", t.nextLangAria);
    const flagWrapper = langToggle.querySelector(".lang-flag-wrapper");
    if (flagWrapper) flagWrapper.innerHTML = flagSvgs[nextLang];
  }

  localStorage.setItem("portfolio_lang", current);
}

document.addEventListener("DOMContentLoaded", () => {
  // Inicialización de idioma (Castellano por defecto)
  const savedLang = localStorage.getItem("portfolio_lang") || "es";
  setLanguage(savedLang);

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const current = document.documentElement.lang || "es";
      const target = current === "es" ? "en" : "es";
      setLanguage(target);
    });
  }

  // Easter egg: animación glitch sobre el avatar
  const logo = document.querySelector(".logo");
  const noise = document.querySelector(".noise");
  const headBoxContent = document.querySelector(".head-box-content");

  if (!logo || !noise || !headBoxContent) return;

  let isGlitchActive = false;

  const setGlitchState = (activate) => {
    isGlitchActive = activate;
    if (activate) {
      logo.classList.add("devolver");
      noise.classList.remove("oculto");
      headBoxContent.classList.add("glitch");
    } else {
      logo.classList.remove("devolver");
      noise.classList.add("oculto");
      headBoxContent.classList.remove("glitch");
    }
  };

  const toggleGlitchState = () => {
    setGlitchState(!isGlitchActive);
  };

  // Detectar si el dispositivo es principalmente táctil
  const isTouchDevice = window.matchMedia("(hover: none)").matches;

  if (isTouchDevice) {
    logo.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleGlitchState();
    });

    document.addEventListener("click", () => {
      if (isGlitchActive) {
        setGlitchState(false);
      }
    });
  } else {
    logo.addEventListener("mouseenter", () => {
      setGlitchState(true);
    });

    logo.addEventListener("mouseleave", () => {
      setGlitchState(false);
    });

    logo.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleGlitchState();
    });
  }
});
