const languages = {
  en: { name: "Español", flag: "do" }
  // Bandera de República Dominicana
};
const defaultLanguage = "en";
const ui = {
  en: {
    projectsContent: {
      sampleProject: {
        title: "EDP Restaurant",
        description: "Esto es una muestra previa, contactarme para visualizar el proyecto bien.",
        imageAltText: "Placeholder image for the sample project",
        categoryText: "Página Web",
        dateText: "Octubre 2024",
        detailedDescription: "EDP nació como una idea Este proyecto lo creé con la intención de desarrollar una solución práctica para que restaurantes de la República Dominicana pudieran presentar sus menús y gestionar reservas de manera más eficiente. EDP surgió como una idea para fortalecer mis habilidades en desarrollo web mientras aportaba una herramienta sencilla y funcional a una necesidad que observaba en mi entorno. Durante su creación trabajé en la estructura, el diseño y la experiencia del usuario, enfocándome en que la plataforma fuera intuitiva y adaptable a diferentes tipos de negocios. practicar desarrollo web mientras resolvía una necesidad real que veía en negocios de mi comunidad.",
        keyFeatures: {
          responsiveDesign: {
            title: "Menú organizado",
            description: "Una presentación clara y visualmente ordenada de los platos principales del restaurante."
          },
          contentManagement: {
            title: "Diseño completo",
            description: "La identidad visual, colores y tipografía fueron diseñados para transmitir frescura y confianza."
          }
        },
        galleryImages: {
          // sampleGalleryImage1: { // If you enable gallery for the example
          //   alt: 'Alt text for gallery image 1',
          //   caption: 'Caption for gallery image 1',
          // },
        },
        challenges: "Uno de los principales retos fue definir una estructura visual que se sintiera profesional sin perder sencillez. También tuve que trabajar en la organización del contenido para que el menú y las secciones del restaurante fueran fáciles de entender. Además, ajustar colores, tipografías y distribución para mantener coherencia estética tomó más tiempo del esperado, pero fue clave para lograr un diseño más sólido.",
        learnings: "Este proyecto me permitió mejorar mi criterio visual y mi capacidad para organizar información dentro de una página web. Aprendí a trabajar con estructuras más limpias, a prestar atención a los detalles del diseño y a mantener una línea gráfica consistente. También reforcé buenas prácticas de presentación y maquetación."
      }
    },
    skillsContent: {
      frontendDevelopment: {
        title: "Desarrollador Web",
        description: "Bachillerato Técnico en Desarrollo y Administración de Aplicaciones Informáticas (2022 - 2025) "
      },
      backendDevelopment: {
        title: "Dominio del inglés",
        description: "O&M, Cursando Inglés (nivel intermedio, con enfoque en pronunciación y presentaciones)."
      },
      uiUxDesign: {
        title: "Experiencia laboral",
        description: "P. Summer Fundapec: Departamento de TICs, Departamento de archivos, Departameto de cobros, Servicios generales."
      },
      devOps: {
        title: "MUN´s",
        description: "Delegado y miembro de la mesa directiva en Modelo de las Naciones Unidas (2023-2026). "
      },
      // 🎯 ¡CLAVES NUEVAS AGREGADAS AQUÍ!
      softwareSkills: {
        title: "Educación",
        description: "Bachiller Técnico en Desarrollo y Administración de Aplicaciones Informáticas Politécnico Parroquial Betania (2022 – 2025)."
      },
      cloudServices: {
        title: "Certificaciones",
        description: "Certificaciones en plataformas de nube y conocimientos avanzados en bases de datos."
      }
      // ------------------------------------
    },
    site: {
      title: "ED, Engels Damirón, Todos los derechos",
      // <-- Nombre de Copyright
      description: "A modern and performant Astro template to kickstart your project."
    },
    nav: {
      home: "Home",
      blog: "Logros",
      contact: "Contacto",
      projects: "Proyectos"
    },
    footer: {
      rights: ""
      // <-- ¡CAMBIO APLICADO AQUÍ!
    },
    homePage: {
      pageTitle: "Home | Engels Smith - FullStack Developer",
      pageDescription: "Welcome to the portfolio of Engels Smith, a FullStack developer passionate about creating innovative web experiences.",
      heroGreeting: "Engels Damirón",
      heroSubtitlePart1: "Técnico en soporte de redes y sistemas informáticos",
      heroSubtitlePart2: "Administrdor de Aplicaciones Informáticas",
      heroSubtitlePart3: "Estudiante de Ingeniería en Ciberseguridad",
      heroIntroduction: "Aquí podrás ver mis proyectos, mis logros académicos y el camino que estoy construyendo en el mundo tecnológico.",
      heroViewWorkButton: "Ver mis trabajos",
      heroContactButton: "Contáctame",
      heroImageAlt: "Illustration representing Engels Smith or a development concept",
      featuredProjectsTitle: "Últimos proyectos:",
      featuredProjectsDescription: "Acá salen mis últimos proyectos como desarrollador web y diseñador gráfico!",
      projectCardViewProject: "Ver proyecto",
      projectCardViewCode: "View Code",
      imageNotAvailable: "Image not available for now",
      mySkillsTitle: "Mis Habilidades",
      mySkillsDescription: "Aquí muestro mis principales habilidades y herramientas que manejo."
      // ⬅️ Puedes cambiar esto si quieres otra descripción!
    },
    blogPage: {
      pageTitle: "Mis Logros!",
      pageDescription: "Articles and thoughts on web development, software architecture, and new technologies.",
      title: "Mis Logros!",
      description: "Medallas, reconocimientos, participaciones, experiencias, MUN´s (Modelos Naciones Unidas), etc.",
      comingSoon: "Blog posts will appear here soon. Check back later!",
      heroImageAlt: "Hero image for article: ",
      publishedOn: "Fecha de publicación: ",
      readMore: "Leer más",
      readingTimeSuffix: "min read",
      searchPlaceholder: "Buscar artículos...",
      filterByTagButtonLabel: "Filtar por categoría",
      noTagFound: "No tag found.",
      selectTagCommandPlaceholder: "Search tag...",
      allTagsLabel: "All tags",
      noPostsFound: "No posts found."
    },
    blogPost: {
      publishedOn: "Fecha de publicación: ",
      updatedOn: "Updated on: ",
      heroImageAlt: "Hero image for article: ",
      backToList: "Volver a logros",
      readingTimeSuffix: "min read",
      relatedPostsTitle: "Continue Reading",
      readMore: "Leer más"
    },
    toc: {
      title: "Table of Contents"
    },
    contactPage: {
      pageTitle: "Contáctame",
      pageDescription: "Interesad@ en mis proyectos? Contáctame para más información!",
      title: "Contact Me",
      description: "¿Interesado/a en mis proyectos? Contáctame para más información!",
      formTitle: "Nombre",
      firstNameLabel: "Nombre",
      lastNameLabel: "Apellido",
      emailLabel: "Email",
      messageLabel: "Mensaje",
      sendButtonLabel: "Send",
      firstNamePlaceholder: "Tú nombre",
      lastNamePlaceholder: "Tú apellido",
      emailPlaceholder: "Tú correo eléctronico",
      messagePlaceholder: "Dejáme un mensaje aquí...",
      calendarButtonLabel: "See my availability",
      calendarPlaceHolder: "The integration with Google Calendar will be soon...",
      orSeparatorText: "OR",
      toastSuccessMessageSent: "Message sent successfully!",
      toastErrorFailedToSend: "Failed to send message.",
      toastErrorUnexpected: "An unexpected error occurred.",
      toastErrorDetails: "Error details:",
      toastErrorValidationFailed: "Form validation failed."
    },
    projectDetailPage: {
      backToProjects: "Volver a proyectos",
      categoryLabel: "Category:",
      dateLabel: "Date:",
      aboutTitle: "Sobre este proyecto",
      keyFeaturesTitle: "Aspectos Clave",
      // <-- CAMBIO APLICADO
      galleryTitle: "Gallery",
      challengesTitle: "Retos",
      // <-- CAMBIO APLICADO
      learningsTitle: "Aprendizajes",
      // <-- CAMBIO APLICADO
      visitProjectButton: "Visit Project",
      viewCodeButton: "View Code"
    },
    projectsPage: {
      title: "Mis Proyectos",
      metaTitle: "Mis Proyectos| Engels Smith's Portfolio",
      metaDescription: "Discover all of Engels Smith's projects.",
      noProjects: "No projects to display at the moment.",
      noProjectsDescription: "It seems that you don't have any projects to display at the moment."
    },
    notFoundPage: {
      pageTitle: "Page Not Found",
      title: "Oops! página no encontrada.",
      message: "Aún estoy trabajando en esta sección. Mientras tanto, puedes regresar a la página principal.",
      homeLink: "Volver al inicio"
    },
    zodErrors: {
      // Common errors
      invalid_type: "Invalid type.",
      invalid_type_received_undefined: "This field is required.",
      // For required fields (fallback)
      required_field_custom: "The {fieldName} field is required.",
      // String errors
      too_small_string_minimum: "Must be at least {minimum} characters long.",
      too_big_string_maximum: "Must be no more than {maximum} characters long.",
      invalid_string_email: "Invalid email address.",
      invalid_string_url: "Invalid URL.",
      invalid_string_uuid: "Invalid UUID."
      // You can add more specific messages as needed
    }
  }
};
function useTranslations(lang, feature) {
  const currentLanguage = lang || defaultLanguage;
  return function t(key) {
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[key];
    }
    return ui[defaultLanguage][feature][key];
  };
}

export { ui as a, defaultLanguage as d, languages as l, useTranslations as u };
