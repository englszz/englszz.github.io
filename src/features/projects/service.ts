// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';
import placeholderImage from '@/assets/edp.jpg';

// ====================================================================
// 1. IMPORTACIONES DE IMÁGENES
// ====================================================================

// Imágenes principales
import scapeRoomImage from '@/assets/Logo !.jpg'; 
import nutriMarketImage from '@/assets/Nutri.png'; 
// ⭐ IMAGEN PRINCIPAL DE LEGMA AÑADIDA
import legmaGrandeImage from '@/assets/Legmagrande.jpg';
// ⭐⭐ IMAGEN PRINCIPAL DE REVIEWS AÑADIDA
import reviewsMainImage from '@/assets/REVIEW.png';
//
import EDEPEMainImage from '@/assets/EDEPE.jpeg';


// NUEVAS IMÁGENES EXTRA PARA NUTRI MARKET (bajos.png, mart.png, nutrimart.png)
import nutriExtra1 from '@/assets/bajos.png';
import nutriExtra2 from '@/assets/mart.png';
import nutriExtra3 from '@/assets/nutrimart.png';

// NUEVAS IMÁGENES EXTRA PARA SCAPE ROOM (room.png, scapee.png, pixel room.png)
import scapeExtra1 from '@/assets/room.png';
import scapeExtra2 from '@/assets/scapee.png';
import scapeExtra3 from '@/assets/Scape Room.png'; 

// NUEVAS IMÁGENES EXTRA PARA EDP RESTAURANT (menu pag.png, pagina web.png, logo.png)
import edpExtra1 from '@/assets/menu pag.png'; 
import edpExtra2 from '@/assets/edpp.png'; 
import edpExtra3 from '@/assets/logo.png'; 

// ⭐⭐ NUEVAS IMÁGENES EXTRA PARA REVIEWS (lilwayne.png, music.png, description.png)
import reviewsExtra1 from '@/assets/lilwayne.png';
import reviewsExtra2 from '@/assets/music.png';
import reviewsExtra3 from '@/assets/description.png';

// ⭐⭐ Nuevas importaciones de imágenes para los nuevos proyectos (Ajusta estas rutas)
import newProj4Image from '@/assets/lyy.png'; // Imagen principal de Libry Books
import newProj5Image from '@/assets/placeholder.webp'; 
import newProj6Image from '@/assets/Dailycomicslogofull.jpg'; 

// ⭐ IMÁGENES EXTRA DE LEGMA AÑADIDAS
import legmaExtra1 from '@/assets/Legma.png';
import legmaExtra2 from '@/assets/Logo2.png';
import legmaExtra3 from '@/assets/legg.png'; 

// 🟢 NUEVAS IMÁGENES EXTRA PARA DAILY COMICS (dailyrojo.png, Daily.png, Comics.png)
import dailyRojo from '@/assets/dailyrojo.png';
import dailyPng from '@/assets/preciosbajos.png';
import comicsPng from '@/assets/Daily.png';

// 🟢 NUEVAS IMÁGENES EXTRA PARA LIBRY BOOKS
import pruebaleer from '@/assets/pruebaleer.png';
import bry from '@/assets/bry.png';
import libry from '@/assets/libry.png';

//
import edepeblanco from '@/assets/edepewhite.png'
import edepelogo from '@/assets/EDEPElogo.jpeg'
import eddpe from '@/assets/eddpe.jpeg'


import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';

const projectsListUnsorted: Array<ProjectData> = [
  // PROYECTO 1: EDP Restaurant (Existente)
  {
    id: 'sampleProject', // EDP Restaurant
    slug: 'edp-restaurant', 
    imageUrl: placeholderImage, 
    tags: ['Restaurante', 'Menú', 'EDP'], 
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

  // PROYECTO 2: Scape Room (Existente)
  {
    id: 'Scape Room', 
    slug: 'scape-room', 
    imageUrl: scapeRoomImage, 
    tags: ['Tecnología', 'Feria', 'Diseño'],
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

  // ⭐⭐ PROYECTO 3: REVIEWS (NUEVO - REEMPLAZA A NUTRI MARKET EN LOS TOP 3)
  {
    id: 'ЯEVIEW', 
    slug: 'reviews-project', 
    imageUrl: reviewsMainImage, 
    tags: ['Reviews', 'Música', 'Opinión'],
    Categoría: 'Plataforma de Reviews',
    date: '2025-11-16', 
    galleryImages: [],
    keyFeatures: [
      { id: 'Reseñas de música' },
      { id: 'Sistema de calificación' },
      { id: 'Interfaz moderna' },
    ],
    technologiesUsed: [
      { id: 'react', name: 'React' },
      { id: 'nodejs', name: 'Node.js' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
    extraImage1: reviewsExtra1,
    extraImage2: reviewsExtra2,
    extraImage3: reviewsExtra3,
  },

  // PROYECTO 4: Nutri Market (Ahora en 4ta posición)
  {
    id: 'Nutri Market', 
    slug: 'nutri-market', 
    imageUrl: nutriMarketImage, 
    tags: ['Mercado', 'Online', 'Proyecto'],
    Categoría: 'Supermercado Online',
    date: '2025-11-15',
    galleryImages: [],
    keyFeatures: [
      { id: 'Logo único' },
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
  
  {
    id: 'Libry Books', 
    slug: 'e-commerce-plataforma', 
    imageUrl: newProj4Image, 
    tags: ['Libros', 'Librería Online', 'Libry'], 
    Categoría: 'Librería Online', 
    date: '2024-05-15', 
    keyFeatures: [
      { id: 'Identidad moderna' },
      { id: 'Visión nacional' },
      { id: 'Colaboración creativa' },
    ],
    technologiesUsed: [
      { id: 'nextjs', name: 'Next.js' },
      { id: 'stripe', name: 'Stripe' },
    ],
    extraImage1: pruebaleer,
    extraImage2: bry,
    extraImage3: libry,
  },
  {
    id: 'LEGMA', 
    slug: 'app-de-fitness', 
    imageUrl: legmaGrandeImage, 
    tags: ['Emprendimiento', 'Diseño de Marca', 'Cultura Pop'], 
    Categoría: 'Emprendimiento', 
    date: '2024-03-20', 
    galleryImages: [],
    keyFeatures: [
      { id: 'Concepto juvenil y cultural' }, 
      { id: 'Identidad Visual Unificada' },
      { id: 'Narrativa de Marca' },
    ],
    technologiesUsed: [
      { id: 'figma', name: 'Figma' },
      { id: 'photoshop', name: 'Adobe Photoshop' },
    ],
    extraImage1: legmaExtra1,
    extraImage2: legmaExtra2,
    extraImage3: legmaExtra3,
  },
  {
    id: 'Daily Comics', 
    slug: 'emprendimiento', 
    imageUrl: newProj6Image, 
    tags: ['Cómics', 'Daily', 'Web'], 
    Categoría: 'Página Web de Cómics', 
    date: '2024-01-10', 
    galleryImages: [],
    keyFeatures: [
      { id: 'Catálogo variado' },
      { id: 'Factura integrada' },
    ],
    technologiesUsed: [
      { id: 'astro', name: 'Astro' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
    edpExtra1: dailyRojo,
    edpExtra2: dailyPng,
    edpExtra3: comicsPng,
  },

{
    id: 'EDEPE', 
    slug: 'portafolio-personal', 
    imageUrl: EDEPEMainImage, 
    tags: ['Emprendimiento', 'Ventas', 'Negocio'], 
    Categoría: 'Emprendimiento Indepentiende', 
    date: '2024-01-10', 
    galleryImages: [],
    keyFeatures: [
      { id: 'Cultura Pop' },
      { id: 'Experiencia' },
    ],
    technologiesUsed: [
      { id: 'astro', name: 'Astro' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
    extraImage1: edepeblanco,
    extraImage2: edepelogo,
    extraImage3: eddpe,
  },

];


export const projectsList = [...projectsListUnsorted].sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

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
    console.warn(
      `Translation missing for project ID: ${project.id} in language: ${lang}. Using default values.`
    );
    
    let detailedDescription = 'Detailed description missing.';
    let challenges = 'Challenges information missing.';
    let learnings = 'Learnings information missing.';
    
    switch(project.id) {
      case 'Reviews':
        detailedDescription = 'Reviews es una plataforma diseñada para compartir y descubrir reseñas de música. El proyecto nació de la necesidad de crear un espacio organizado donde los usuarios pudieran expresar sus opiniones sobre álbumes, canciones y artistas. Me encargué del diseño completo de la interfaz y la experiencia de usuario.';
        challenges = 'El principal desafío fue crear un sistema de calificación intuitivo y una interfaz que permitiera navegar fácilmente entre diferentes categorías musicales. También fue complejo mantener un diseño limpio que no abrumara al usuario con información.';
        learnings = 'Este proyecto me permitió mejorar mis habilidades en diseño de interfaces interactivas y sistemas de organización de contenido. Aprendí a pensar en la experiencia del usuario desde múltiples perspectivas.';
        break;
      case 'Scape Room':
      case 'ScapeRoomProject':
        detailedDescription = 'Tuve el honor de ser el encargado de la estética digital para la Feria Técnologica 2025. Surgió como una oportunidad para aplicar mis conocimientos en diseño y creación de experiencias interactivas, mientras ofrecía una actividad entretenida y educativa para los participantes. Me encargué de diseñar completamente la identidad visual del proyecto.';
        challenges = 'Uno de los principales retos fue crear un diseño atractivo y coherente para todo el Escape Room, asegurando que los elementos interactivos fueran intuitivos y fáciles de entender. También fue un desafío mantener la narrativa entretenida sin que los participantes se confundieran..';
        learnings = 'Con este proyecto mejoré mis habilidades en diseño digital, narrativa interactiva y creación de experiencias guiadas. Aprendí a integrar diseño visual con funcionalidad y a pensar en la experiencia del usuario de manera completa.';
        break;
      case 'Nutri Market': 
        detailedDescription = 'Este proyecto lo creé con la intención de desarrollar un sitio web para Nutri Market, un supermercado enfocado en productos saludables y frescos. El objetivo fue crear una plataforma clara y atractiva donde los clientes pudieran explorar los productos, conocer promociones y tener una experiencia de compra más organizada. Me encargué de diseñar todo el logo, la identidad visual y la estructura general del sitio.';
        challenges = 'El mayor desafío fue unificar la paleta de colores para transmitir la sensación de frescura y salud, y mantener la coherencia estética en todas las secciones del supermercado.';
        learnings = 'Aprendí a trabajar con estructuras más grandes, a prestar atención a los detalles del diseño de un e-commerce y a mantener una línea gráfica consistente en un proyecto extenso.';
        break;
      case 'sampleProject':
        detailedDescription = 'EDP Restaurant nació para desarrollar una solución práctica para que restaurantes pudieran presentar sus menús y gestionar reservas de manera eficiente. Me enfoqué en que la plataforma fuera intuitiva y adaptable.';
        challenges = 'El reto fue definir una estructura visual profesional y sencilla, y organizar el contenido del menú para que fuera fácil de entender.';
        learnings = 'Me permitió mejorar mi criterio visual y mi capacidad para organizar información dentro de una página web.';
        break;
      case 'Libry Books':
        detailedDescription = 'Este proyecto lo desarrollé junto a varios compañeros bajo el nombre Libry Books, un juego de palabras que combina "library" con una forma más corta y distintiva del nombre. Fue el primer proyecto grande en el que trabajé en equipo, y representó una experiencia importante en mi crecimiento personal y creativo. La idea central era crear una librería moderna que aspirara a convertirse en una de las mejores de la República Dominicana, combinando un diseño sólido con una visión clara del concepto.';
        challenges = 'Uno de los principales retos fue organizar un concepto ambicioso en un tiempo limitado, manteniendo la calidad en el diseño y en la presentación general. También resultó desafiante crear una identidad que se sintiera profesional sin dejar de ser cercana y atractiva para el público.';
        learnings = 'Este proyecto me permitió desarrollar habilidades de colaboración, planificación y adaptación. Aprendí a equilibrar diferentes ideas creativas dentro de un mismo equipo y a construir una identidad visual sólida para un proyecto más formal.';
        break;
      case 'LEGMA':
        detailedDescription = 'Este proyecto lo creé como parte del emprendimiento Legma, un concepto que desarrollé junto a cuatro amigos. Me encargué de diseñar toda la identidad visual de la marca, desde el logo hasta su línea gráfica completa. El nombre Legma surge de la combinación de las iniciales de todos los integrantes, como una forma de representar la unión del equipo. El proyecto se enfocaba en vender artículos exclusivos inspirados en la cultura pop y los años 2000, acompañado del lema: "¡Donde la ficción y la realidad conviven!."';
        challenges = 'Uno de los mayores retos fue crear una identidad visual que representara correctamente a cinco personas con gustos distintos, manteniendo un estilo unificado y profesional. Otro desafío fue encontrar un equilibrio entre lo estético y lo comercial para que los productos resultaran llamativos pero coherentes con la marca.';
        learnings = 'Este proyecto me permitió mejorar mis habilidades en diseño de marca, trabajo colaborativo y creación de conceptos visuales con intención narrativa. También aprendí a tomar decisiones de diseño que conectan con un público joven y culturalmente activo.';
        break;
      case 'Daily Comics':
        detailedDescription = 'Daily Comics fue un proyecto desarrollado en conjunto con un compañero, enfocado en crear una página web dedicada a la venta de cómics. La idea era ofrecer un espacio organizado donde los usuarios pudieran explorar diferentes títulos, incluyendo héroes populares como Spider-Man. El proyecto también incluyó la implementación de un formulario funcional y un sistema básico de factura para simular una experiencia de compra más completa.';
        challenges = 'Uno de los mayores retos fue integrar las funciones del formulario con la sección de compra sin complicar la navegación. También representó un desafío coordinar el trabajo entre dos personas para mantener el diseño y la estructura de la página alineados.';
        learnings = 'Este proyecto me permitió mejorar en la implementación de funciones interactivas, como formularios y simulaciones de compra. Además, reforzó mi habilidad para trabajar en coordinación con un compañero y mantener un diseño web claro mientras añadía características más prácticas.';
        break;
      default:
        detailedDescription = 'Review es una plataforma web enfocada en reseñas de canciones. Nació de mi pasión por la música y de la idea de crear un espacio donde las personas puedan compartir opiniones, descubrir nuevos temas desde la perspectiva de otros oyentes y analizar la música más allá de simplemente escucharla.';
        challenges = 'Uno de los principales retos fue estructurar la plataforma de forma que las reseñas fueran claras, útiles y fáciles de navegar. También representó un desafío diseñar una interfaz que se sintiera moderna pero sencilla, asegurando que los usuarios pudieran interactuar sin fricción. Además, trabajar la lógica para manejar contenido dinámico y organizado fue un punto importante durante el desarrollo.';
        learnings = 'Este proyecto me permitió mejorar mis habilidades tanto en diseño de interfaces como en desarrollo funcional de aplicaciones web. Aprendí a pensar más en la experiencia del usuario, en cómo presentar información de manera atractiva y eficiente, y a estructurar mejor proyectos que combinan intereses personales con soluciones tecnológicas reales.';
        break;
        case 'EDEPE':
        detailedDescription = 'EDEPE fue un pequeño emprendimiento personal enfocado en la venta de productos relacionados con la cultura pop, como artículos coleccionables, accesorios temáticos y mercancía inspirada en series, películas y videojuegos. El objetivo principal del proyecto era ofrecer productos atractivos y accesibles para jóvenes interesados en este tipo de contenido.';
        challenges = 'Uno de los principales retos fue entender realmente qué productos tenían más potencial de venta y cuáles no, lo que implicó analizar tendencias y preferencias del público. También representó un desafío manejar inventario con responsabilidad, organizar pedidos y coordinar todo sin contar con muchos recursos. Además, fue necesario aprender a promocionar el proyecto de manera efectiva para lograr visibilidad.';
        learnings = 'La experiencia permitió desarrollar habilidades reales de emprendimiento, desde la planificación hasta la ejecución. Aprendí sobre gestión básica de negocio, atención al cliente y toma de decisiones basada en resultados reales. También fortalecí mi capacidad de organización, disciplina y pensamiento estratégico, entendiendo mejor cómo funcionan las ventas y el comportamiento del consumidor.';
        break;
    }
    
    const getFallbackDescription = (featureId: string) => {
      switch(featureId) {
        case 'Reseñas de música': return 'Sistema completo para publicar y leer reviews de álbumes y canciones.';
        case 'Sistema de calificación': return 'Permite a los usuarios calificar y valorar contenido musical de forma intuitiva.';
        case 'Interfaz moderna': return 'Diseño limpio y contemporáneo enfocado en la experiencia del usuario.';
        
        case 'Identidad moderna': return 'Estética limpia y sobria, usando tonos oscuros para transmitir seriedad y elegancia.';
        case 'Visión nacional': return 'El objetivo del proyecto era construir una librería que destacara a nivel local por su calidad y propuesta innovadora.';
        case 'Colaboración creativa': return 'Al ser mi primer proyecto grande en equipo, fue fundamental coordinar ideas, estilos y decisiones.';
        
        case 'Concepto juvenil y cultural': return 'Basado en artículos exclusivos inspirados en la cultura pop moderna y de los 2000.';
        case 'Identidad Visual Unificada': return 'Creación de un logo, paleta de colores y tipografía que representan la marca de forma coherente.';
        case 'Narrativa de Marca': return 'Un mensaje centrado en creatividad, visión compartida y conexión con el público.';

        case 'Catálogo variado': return 'Incluye cómics de distintos personajes de ficción y universos, organizados de manera simple y directa.';
        case 'Factura integrada': return 'El sistema genera una factura básica para completar la experiencia de compra dentro del sitio.';
        
        case 'Menú Organizado': return 'Una presentación clara y visualmente ordenada de los platos principales del restaurante.';
        case 'contentManagement': return 'Facilidad para actualizar contenido sin necesidad de código.';
        case 'Diseño integral': return 'Aplicación de la identidad visual a todos los elementos digitales y físicos del evento.';
        case 'Logo único': return 'Diseño de un distintivo visual memorable y original.';
        case 'Paleta de colores': return 'Selección estratégica de colores para transmitir frescura y salud.';

        
        case 'Cultura Pop': return 'Enfoque en productos de cultura pop con identidad propia.';
        case 'Experiencia': return 'Experiencia práctica en ventas, organización y trato directo con cliente';
        default: return featureId;
      }
    };

    return {
      ...project,
      title: project.id,
      description: 'Esto es una muestra previa, contactarme para visualizar el proyecto bien.',
      imageAltText: 'Placeholder image',
      categoryText: project.Categoría,
      dateText: project.date,
      detailedDescription, 
      keyFeaturesTranslated:
        project.keyFeatures?.map((kf) => ({
          ...kf,
          title: kf.id,
          description: getFallbackDescription(kf.id),
        })) ?? [],
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

  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
     const typedKeyFeatures = i18nData?.keyFeatures as Record<
  string,
  { title: string; description: string } | undefined
>;
      const featureTranslations = typedKeyFeatures?.[kf.id] ?? {
        title: kf.id,
        description: kf.id, 
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
        ...gi,
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
    extraImage1: (project as any).extraImage1,
    extraImage2: (project as any).extraImage2,
    extraImage3: (project as any).extraImage3,
  };
}

export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;
  return projectsList.map((project) => translateProject(project, currentLang));
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

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
  {
    id: 'softwareSkills', 
    iconName: 'PenTool',
    technologies: [
      { id: 'excel', name: 'Excel' },
      { id: 'powerpoint', name: 'PowerPoint' },
      { id: 'word', name: 'Word' },
    ],
  },
  {
    id: 'Habilidades técnicas', 
    iconName: 'MonitorSmartphone',
    technologies: [
      { id: 'cert1', name: 'Certificación 1' },
      { id: 'cert2', name: 'Certificación 2' },
    ],
  },
];

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
      console.warn(
        `Translation missing for skill ID: ${skill.id} in language: ${lang}. Using default values.`
      );
      return {
        ...skill,
        title: skill.id,
        description: 'Soporte técnico a equipos y redes, Mantenimiento básico de sistemas, Organización y gestión de recursos tecnológicos, Instalación y configuración de software.',
      };
    }

    return {
      ...skill,
      title: skillTranslations.title,
      description: skillTranslations.description,
    };
  });
}