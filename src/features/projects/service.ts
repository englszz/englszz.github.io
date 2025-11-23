// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';
import placeholderImage from '@/assets/edp.jpg';

// ====================================================================
// 1. IMPORTACIONES DE IMÁGENES
// ====================================================================

// Imágenes principales
import scapeRoomImage from '@/assets/Logo !.jpg';
import nutriMarketImage from '@/assets/Nutri.png';

// NUEVAS IMÁGENES EXTRA PARA NUTRI MARKET (bajos.png, mart.png, nutrimart.png)
import nutriExtra1 from '@/assets/bajos.png';
import nutriExtra2 from '@/assets/mart.png';
import nutriExtra3 from '@/assets/nutrimart.png';

// NUEVAS IMÁGENES EXTRA PARA SCAPE ROOM (room.png, scapee.png, pixel room.png)
import scapeExtra1 from '@/assets/room.png';
import scapeExtra2 from '@/assets/scapee.png';
import scapeExtra3 from '@/assets/Scape Room.png';

// NUEVAS IMÁGENES EXTRA PARA EDP RESTAURANT (menu pag.png, pagina web.png, placeholder.webp)
import edpExtra1 from '@/assets/menu pag.png';
import edpExtra2 from '@/assets/pagina web.png';
import edpExtra3 from '@/assets/placeholder.webp';

// ⭐ NUEVAS IMPORTACIONES DE IMÁGENES ACTUALIZADAS

// Libry Books
import libryBooksImage from '@/assets/lyy.png';
import libryExtra1 from '@/assets/libry.png';
import libryExtra2 from '@/assets/bry.png';
import libryExtra3 from '@/assets/pruebaleer.png';

// LEGMA
import legmaImage from '@/assets/Legmagrande.jpg';
import legmaExtra1 from '@/assets/Legma.png';
import legmaExtra2 from '@/assets/legg.png';
import legmaExtra3 from '@/assets/logo2.png';

// Daily Comics
import dailyComicsImage from '@/assets/Dailycomicslogofull.jpg';
import comicsExtra1 from '@/assets/dailycomics.jpg';
import comicsExtra2 from '@/assets/dailyrojo.png';
import comicsExtra3 from '@/assets/Comics.png';


import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';

const projectsListUnsorted: Array<ProjectData> = [
  // ====================================================================
  // ⭐ ORDEN DESEADO: 1. LEGMA
  // ====================================================================
  {
    id: 'LEGMA',
    slug: 'legma',
    imageUrl: legmaImage,
    tags: ['Emprendimiento', 'Diseño de Marca', 'Cultura Pop'],
    Categoría: 'Emprendimiento',
    date: '2025-12-05', // Fecha reciente
    galleryImages: [],
    keyFeatures: [
      { id: 'Concepto juvenil y cultural' },
      { id: 'Identidad visual propia' },
    ],
    technologiesUsed: [
      { id: 'python', name: 'Python' },
      { id: 'pandas', name: 'Pandas' },
      { id: 'numpy', name: 'NumPy' },
    ],
    extraImage1: legmaExtra1,
    extraImage2: legmaExtra2,
    extraImage3: legmaExtra3,
  },

  // ====================================================================
  // ⭐ ORDEN DESEADO: 2. EDP Restaurant
  // ====================================================================
  {
    id: 'sampleProject', // EDP Restaurant
    slug: 'edp-restaurant',
    imageUrl: placeholderImage,
    tags: ['Restaurante', 'Página Web', 'Moderno'],
    Categoría: 'Web Application',
    date: '2025-01-01',
    galleryImages: [],
    keyFeatures: [
      { id: 'Menú Organizado' },
      { id: 'contentManagement' },
    ],
    technologiesUsed: [
      { id: 'astro', name: 'Astro' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
    extraImage1: edpExtra1,
    extraImage2: edpExtra2,
    extraImage3: edpExtra3,
  },

  // ====================================================================
  // ⭐ ORDEN DESEADO: 3. Scape Room
  // ====================================================================
  {
    id: 'Scape Room',
    slug: 'scape-room',
    imageUrl: scapeRoomImage,
    tags: ['Feria Técnologica', 'Diseño', 'Scape Room'],
    Categoría: 'Fería Tecnológica',
    date: '2025-11-17',
    galleryImages: [],
    keyFeatures: [
      { id: 'Diseño integral' },
    ],
    technologiesUsed: [
      { id: 'html', name: 'HTML' },
      { id: 'css', name: 'CSS' },
    ],
    extraImage1: scapeExtra1,
    extraImage2: scapeExtra2,
    extraImage3: scapeExtra3,
  },

  // ====================================================================
  // ⭐ RESTO DE PROYECTOS EN EL ORDEN QUE SE MOSTRARÁN A CONTINUACIÓN
  // ====================================================================

  // PROYECTO 4: Nutri Market
  {
    id: 'Nutri Market',
    slug: 'nutri-market',
    imageUrl: nutriMarketImage,
    tags: ['Supermercado', 'Nutri Market', 'Frescura'],
    Categoría: 'Supermercado Online',
    date: '2025-11-18',
    galleryImages: [],
    keyFeatures: [
      { id: 'Diseño personalizado' },
      { id: 'Paleta de colores' },
    ],
    technologiesUsed: [
      { id: 'react', name: 'React' },
      { id: 'nodejs', name: 'Node.js' },
    ],
    extraImage1: nutriExtra1,
    extraImage2: nutriExtra2,
    extraImage3: nutriExtra3,
  },


  // PROYECTO 5: Libry Books
  {
    id: 'Libry Books',
    slug: 'libry-books',
    imageUrl: libryBooksImage,
    tags: ['Libros', 'Libry', 'Librería Online'],
    Categoría: 'Librería Online',
    date: '2025-12-01',
    galleryImages: [],
    keyFeatures: [
      { id: 'Identidad moderna' },
      { id: 'Visión nacional' },
    ],
    technologiesUsed: [
      { id: 'react', name: 'React' },
      { id: 'express', name: 'Express.js' },
      { id: 'mongodb', name: 'MongoDB' },
    ],
    extraImage1: libryExtra1,
    extraImage2: libryExtra2,
    extraImage3: libryExtra3,
  },

  // PROYECTO 6: Daily Comics
  {
    id: 'Daily Comics',
    slug: 'daily-comics',
    imageUrl: dailyComicsImage,
    tags: ['Cómics', 'Web', 'Daily Comics'],
    Categoría: 'Página Web de Cómics',
    date: '2025-12-10',
    galleryImages: [],
    keyFeatures: [
      { id: 'Formulario funcional' },
      { id: 'Factura integrada' },
    ],
    technologiesUsed: [
      { id: 'astro', name: 'Astro' },
      { id: 'css', name: 'CSS' },
      { id: 'markdown', name: 'Markdown' },
    ],
    extraImage1: comicsExtra1,
    extraImage2: comicsExtra2,
    extraImage3: comicsExtra3,
  },
];

// Ahora projectsList es simplemente projectsListUnsorted (sin ordenación por fecha)
export const projectsList = [...projectsListUnsorted];

// Helper function to translate a single project
function translateProject(
  project: ProjectData,
  lang: LanguageCode
): TranslatedProject {
  type ProjectIdKey =
    keyof (typeof ui)[typeof defaultLanguage]['projectsContent'];
  const currentProjectId = project.id as ProjectIdKey;

  const projectContentSource = ui[lang]?.projectsContent?.[currentProjectId]
    ? ui[lang].projectsContent
    : ui[defaultLanguage].projectsContent;

  const i18nData = projectContentSource[currentProjectId];

  if (!i18nData) {
    // Fallback if translation for the project ID is missing
    console.warn(
      `Translation missing for project ID: ${project.id} in language: ${lang}. Using default values.`
    );

    // ⭐ SECCIÓN DETALLADA Y CORREGIDA.
    let detailedDescription = 'Detailed description missing.';
    let challenges = 'Challenges information missing.';
    let learnings = 'Learnings information missing.';

    switch(project.id) {
      case 'Scape Room': 
        detailedDescription = 'Tuve el honor de ser el encargado de la estética digital para la Feria Técnologica 2025. Surgió como una oportunidad para aplicar mis conocimientos en diseño y creación de experiencias interactivas, mientras ofrecía una actividad entretenida y educativa para los participantes. Me encargué de diseñar completamente la identidad visual del proyecto.';
        challenges = 'Uno de los principales retos fue crear un diseño atractivo y coherente para todo el Escape Room, asegurando que los elementos interactivos fueran intuitivos y fáciles de entender. También fue un desafío mantener la narrativa entretenida sin que los participantes se confundieran..';
        learnings = 'Con este proyecto mejoré mis habilidades en diseño digital, narrativa interactiva y creación de experiencias guiadas. Aprendí a integrar diseño visual con funcionalidad y a pensar en la experiencia del usuario de manera completa.';
        break;
      case 'Nutri Market':
        detailedDescription = 'Este proyecto lo creé con la intención de desarrollar un sitio web para Nutri Market, un supermercado enfocado en productos saludables y frescos. El objetivo fue crear una plataforma clara y atractiva donde los clientes pudieran explorar los productos, conocer promociones y tener una experiencia de compra más organizada. Me encargué de diseñar todo el logo, la identidad visual y la estructura general del sitio.';
        challenges = 'El mayor desafío fue unificar la paleta de colores para transmitir la sensación de frescura y salud, y mantener la coherencia estética en todas las secciones del supermercado.';
        learnings = 'Aprendí a trabajar con estructuras más grandes, a prestar atención a los detalles del diseño de un e-commerce y a mantener una línea gráfica consistente en un proyecto extenso.';
        break;
      case 'sampleProject': // EDP Restaurant
        detailedDescription = 'EDP Restaurant nació para desarrollar una solución práctica para que restaurantes pudieran presentar sus menús y gestionar reservas de manera eficiente. Me enfoqué en que la plataforma fuera intuitiva y adaptable.';
        challenges = 'El reto fue definir una estructura visual profesional y sencilla, y organizar el contenido del menú para que fuera fácil de entender.';
        learnings = 'Me permitió mejorar mi criterio visual y mi capacidad para organizar información dentro de una página web.';
        break;
      case 'Libry Books':
        detailedDescription = 'Este proyecto lo desarrollé junto a varios compañeros bajo el nombre Libry Books, un juego de palabras que combina “library” con una forma más corta y distintiva del nombre. Fue el primer proyecto grande en el que trabajé en equipo, y representó una experiencia importante en mi crecimiento personal y creativo. La idea central era crear una librería moderna que aspirara a convertirse en una de las mejores de la República Dominicana, combinando un diseño sólido con una visión clara del concepto.';
        challenges = 'Uno de los retos principales fue transformar una idea ambiciosa en un concepto claro y bien organizado, especialmente dentro de un entorno de trabajo en grupo. También fue desafiante lograr que todo el diseño reflejara seriedad sin perder accesibilidad para el público general.';
        learnings = 'Este proyecto me permitió desarrollar habilidades de colaboración, planificación y adaptación. Aprendí a equilibrar diferentes ideas creativas dentro de un mismo equipo y a construir una identidad visual sólida para un proyecto más formal.';
        break;
      case 'LEGMA':
        detailedDescription = 'Este proyecto lo creé como parte del emprendimiento Legma, un concepto que desarrollé junto a cuatro amigos. Me encargué de diseñar toda la identidad visual de la marca, desde el logo hasta su línea gráfica completa. El nombre Legma surge de la combinación de las iniciales de todos los integrantes, como una forma de representar la unión del equipo. El proyecto se enfocaba en vender artículos exclusivos inspirados en la cultura pop y los años 2000, acompañado del lema: “Donde la ficción y la realidad conviven.”';
        challenges = 'Uno de los mayores retos fue crear una identidad visual que representara correctamente a cinco personas con gustos distintos, manteniendo un estilo unificado y profesional. Otro desafío fue encontrar un equilibrio entre lo estético y lo comercial para que los productos resultaran llamativos pero coherentes con la marca.';
        learnings = 'Este proyecto me permitió mejorar mis habilidades en diseño de marca, trabajo colaborativo y creación de conceptos visuales con intención narrativa. También aprendí a tomar decisiones de diseño que conectan con un público joven y culturalmente activo.';
        break;
      case 'Daily Comics':
        detailedDescription = 'Daily Comics fue un proyecto desarrollado en conjunto con un compañero, enfocado en crear una página web dedicada a la venta de cómics. La idea era ofrecer un espacio organizado donde los usuarios pudieran explorar diferentes títulos, incluyendo héroes populares del mundo cinematográfico ficticio. El proyecto también incluyó la implementación de un formulario funcional y un sistema básico de factura para simular una experiencia de compra más completa.';
        challenges = 'Uno de los mayores retos fue integrar las funciones del formulario con la sección de compra sin complicar la navegación. También representó un desafío coordinar el trabajo entre dos personas para mantener el diseño y la estructura de la página alineados.';
        learnings = 'Este proyecto me permitió mejorar en la implementación de funciones interactivas, como formularios y simulaciones de compra. Además, reforzó mi habilidad para trabajar en coordinación con un compañero y mantener un diseño web claro mientras añadía características más prácticas.';
        break;
      default:
        detailedDescription = 'Descripción detallada genérica, por favor contactar al desarrollador.';
        challenges = 'Información sobre desafíos genérica, por favor contactar al desarrollador.';
        learnings = 'Información sobre aprendizajes genérica, por favor contactar al desarrollador.';
        break;
    }

    return {
      ...project,
      title: project.id, // Fallback title
      description: 'Esto es una muestra previa, contactarme para visualizar el proyecto bien.', // Fallback description
      imageAltText: 'Placeholder image', // Fallback alt text
      categoryText: project.Categoría,
      dateText: project.date,
      detailedDescription,
      
      // ⭐ MODIFICACIÓN CLAVE: Lógica para descripciones únicas de Key Features
      keyFeaturesTranslated:
        project.keyFeatures?.map((kf) => {
            let featureDescription = 'Toda la identidad visual, colores y tipografía fueron diseñados para transmitir frescura y confianza.';
            
            switch (project.id) {
                case 'Libry Books':
                    if (kf.id === 'Identidad moderna') {
                        featureDescription = 'El proyecto utilizó una estética limpia y sobria con tonos oscuros, transmitiendo elegancia y profesionalismo.';
                    } else if (kf.id === 'Visión nacional') {
                        featureDescription = 'El enfoque era desarrollar una librería que destacara localmente por su calidad y propuesta visual.';
                    }
                    break;
                case 'LEGMA':
                    if (kf.id === 'Concepto juvenil y cultural') {
                        featureDescription = 'Basado en artículos exclusivos inspirados en la cultura pop moderna y de los 2000s.';
                    } else if (kf.id === 'Identidad visual propia') {
                        featureDescription = 'Diseño completo del logo, colores, estilo y personalidad de la marca.';
                    }
                    break;
                case 'Daily Comics':
                    if (kf.id === 'Formulario funcional') {
                        featureDescription = 'Se desarrolló un formulario para simular pedidos y facilitar la interacción del usuario.';
                    } else if (kf.id === 'Factura integrada') {
                        featureDescription = 'El sistema genera una factura básica para completar la experiencia de compra dentro del sitio.';
                    }
                    break;
                // Dejamos el resto con una descripción más genérica si no están traducidos
            }

            return {
                ...kf,
                title: kf.id,
                description: featureDescription,
            };
        }) ?? [],
      // ⭐ FIN DE MODIFICACIÓN CLAVE
      
      galleryImagesTranslated:
        project.galleryImages?.map((gi) => ({
          ...gi,
          alt: 'N/A',
          caption: 'N/A',
        })) ?? [],
      challenges,
      learnings,
      extraImage1: (project as any).extraImage1,
      extraImage2: (project as any).extraImage2,
      extraImage3: (project as any).extraImage3,
    };
  }

  // ... (El resto del código de traducción con i18nData permanece IGUAL)
  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
      const typedKeyFeatures = i18nData?.keyFeatures as Record<
        string,
        { title: string; description: string } | undefined
      >;
      const featureTranslations = typedKeyFeatures?.[kf.id] ?? {
        title: kf.id,
        description: 'Una presentación clara y visualmente ordenada de los platos principales del restaurante.',
      };
      return {
        ...kf,
        title: featureTranslations.title,
        description: featureTranslations.description,
      };
    }) ?? [];

  const galleryImagesTranslated =
    project.galleryImages?.map((gi) => {
      const typedGalleryImages = i18nData?.galleryImages as Record<
        string,
        { alt: string; caption: string } | undefined
      >;
      const imageTranslations = typedGalleryImages?.[gi.id] ?? {
        alt: `Alt text for ${gi.id} missing`,
        caption: '',
      };
      return {
        ...gi, // This includes src and id
        alt: imageTranslations.alt,
        caption: imageTranslations.caption,
      };
    }) ?? [];

  return {
    ...project,
    title: i18nData.title,
    description: i18nData.description,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.Categoría,
    dateText: i18nData.dateText ?? project.date,
    detailedDescription:
      i18nData?.detailedDescription ?? 'Detailed description missing',
    keyFeaturesTranslated,
    galleryImagesTranslated,
    challenges: i18nData?.challenges ?? 'Challenges information missing',
    learnings: i18nData?.learnings ?? 'Learnings information missing',
    // ⭐ AÑADIMOS LAS PROPIEDADES EXTRA AL OBJETO DE PROYECTO TRADUCIDO
    extraImage1: (project as any).extraImage1,
    extraImage2: (project as any).extraImage2,
    extraImage3: (project as any).extraImage3,
  };
}

// Function to get projects with translated content
export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;
  return projectsList.map((project) => translateProject(project, currentLang));
}

// Function to get a single project by its slug (untranslated)
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

// Function to get a single translated project by its slug
export function getTranslatedProjectBySlug(
  slug: string,
  lang: LanguageCode | undefined
): TranslatedProject | undefined {
  const project = getProjectBySlug(slug);
  if (!project) {
    return undefined;
  }
  const currentLang = lang || defaultLanguage;
  return translateProject(project, currentLang);
}

// Skills (El código de skills NO NECESITA CAMBIOS, solo añadir las nuevas habilidades)
export const skillsList: Array<SkillData> = [
  {
    id: 'frontendDevelopment',
    iconName: 'MonitorSmartphone',
    technologies: [
      { id: 'html', name: 'HTML' },
      { id: 'css', name: 'CSS' },
      { id: 'javascript', name: 'JavaScript' },
      { id: 'typescript', name: 'TypeScript' },
    ],
  },
  {
    id: 'backendDevelopment',
    iconName: 'ServerCog',
    technologies: [
      { id: 'nodejs', name: 'Node.js' },
      { id: 'restapi', name: 'REST APIs' },
    ],
  },
  {
    id: 'uiUxDesign',
    iconName: 'PenTool',
    technologies: [
      { id: 'figma', name: 'Figma' },
      { id: 'r', name: 'Responsive Design' },
    ],
  },
  {
    id: 'devOps',
    iconName: 'Network',
    technologies: [
      { id: 'git', name: 'Git' },
      { id: 'docker', name: 'Docker' },
    ],
  },
  // ⭐ NUEVA HABILIDAD 5: SOFTWARE
  {
    id: 'softwareSkills',
    iconName: 'PenTool', // ⬅️ REUTILIZAMOS UN NOMBRE EXISTENTE para evitar el error
    technologies: [
      { id: 'excel', name: 'Excel' },
      { id: 'powerpoint', name: 'PowerPoint' },
      { id: 'word', name: 'Word' },
    ],
  },
  // ⭐ NUEVA HABILIDAD 6: CERTIFICACIONES
  {
    id: 'Habilidades técnicas',
    iconName: 'MonitorSmartphone', // ⬅️ REUTILIZAMOS OTRO NOMBRE EXISTENTE para evitar el error
    technologies: [
      { id: 'cert1', name: 'Certificación 1' },
      { id: 'cert2', name: 'Certificación 2' },
    ],
  },
];

// Function to get skills with translated content (Esta función permanece IGUAL)
export function getTranslatedSkills(
  lang: LanguageCode | undefined
): Array<TranslatedSkill> {
  const currentLang = lang ?? defaultLanguage;

  return skillsList.map((skill) => {
    type SkillIdKey =
      keyof (typeof ui)[typeof defaultLanguage]['skillsContent'];
    const currentSkillId = skill.id as SkillIdKey;

    const skillContentSource = ui[currentLang]?.skillsContent?.[currentSkillId]
      ? ui[currentLang].skillsContent
      : ui[defaultLanguage].skillsContent;

    const skillTranslations = skillContentSource[currentSkillId];

    if (!skillTranslations) {
      // Fallback if translation for the skill ID is missing
      console.warn(
        `Translation missing for skill ID: ${skill.id} in language: ${lang}. Using default values.`
      );
      return {
        ...skill,
        title: skill.id, // Fallback title
        description: 'Soporte técnico a equipos y redes, Mantenimiento básico de sistemas, Organización y gestión de recursos tecnológicos, Instalación y configuración de software.', // Fallback description
      };
    }

    return {
      ...skill, // This includes id and iconName
      title: skillTranslations.title,
      description: skillTranslations.description,
    };
  });
}