// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';
import placeholderImage from '@/assets/edp.jpg';

// ====================================================================
// 1. IMPORTACIONES DE IMÁGENES
// ====================================================================

// Imágenes principales
import scapeRoomImage from '@/assets/Scape Room.png'; 
import nutriMarketImage from '@/assets/Nutri.png'; 

// NUEVAS IMÁGENES EXTRA PARA NUTRI MARKET (bajos.png, mart.png, nutrimart.png)
import nutriExtra1 from '@/assets/bajos.png';
import nutriExtra2 from '@/assets/mart.png';
import nutriExtra3 from '@/assets/nutrimart.png';

// NUEVAS IMÁGENES EXTRA PARA SCAPE ROOM (room.png, scapee.png, pixel room.png)
import scapeExtra1 from '@/assets/room.png';
import scapeExtra2 from '@/assets/scapee.png';
import scapeExtra3 from '@/assets/pixel room.png'; 

// NUEVAS IMÁGENES EXTRA PARA EDP RESTAURANT (menu pag.png, pagina web.png, placeholder.webp)
import edpExtra1 from '@/assets/menu pag.png'; 
import edpExtra2 from '@/assets/pagina web.png'; 
import edpExtra3 from '@/assets/placeholder.webp'; 

import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';

const projectsListUnsorted: Array<ProjectData> = [
  {
    id: 'sampleProject', // EDP Restaurant
    slug: 'edp-restaurant', 
    imageUrl: placeholderImage, 
    tags: ['Astro', 'TypeScript', 'Template'], 
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
    // ⭐ IMÁGENES EXTRA EDP RESTAURANT AÑADIDAS
    extraImage1: edpExtra1,
    extraImage2: edpExtra2,
    extraImage3: edpExtra3,
  },

  // PROYECTO 2: Scape Room
  {
    id: 'Scape Room', 
    slug: 'scape-room', 
    imageUrl: scapeRoomImage, 
    tags: ['HTML', 'CSS', 'JavaScript'],
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
    // ⭐ IMÁGENES EXTRA SCAPE ROOM AÑADIDAS
    extraImage1: scapeExtra1,
    extraImage2: scapeExtra2,
    extraImage3: scapeExtra3,
  },

  // PROYECTO 3: Nutri Market
  {
    id: 'Nutri Market', 
    slug: 'nutri-market', 
    imageUrl: nutriMarketImage, 
    tags: ['React', 'NodeJS', 'Database'],
    Categoría: 'Supermercado Online',
    date: '2025-11-18', 
    galleryImages: [],
    keyFeatures: [
      { id: 'Logo único' },
      { id: 'Paleta de colores' },
    ],
    technologiesUsed: [
      { id: 'react', name: 'React' },
      { id: 'nodejs', name: 'Node.js' },
    ],
    // ⭐ IMÁGENES EXTRA NUTRI MARKET AÑADIDAS
    extraImage1: nutriExtra1,
    extraImage2: nutriExtra2,
    extraImage3: nutriExtra3,
  },
];

export const projectsList = [...projectsListUnsorted].sort((a, b) => {
// ... (El código de ordenación permanece IGUAL)
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

// ... (El resto del código de funciones de traducción (translateProject) y skills permanece IGUAL)

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
    
    // ⭐ SECCIÓN DIVIDIDA Y CORREGIDA.
    // Usamos un switch para asignar contenido detallado basado en el ID
    let detailedDescription = 'Detailed description missing.';
    let challenges = 'Challenges information missing.';
    let learnings = 'Learnings information missing.';
    
    switch(project.id) {
      case 'ScapeRoomProject':
        detailedDescription = 'Tuve el honor de ser el encargado de la estética digital para la Feria Técnologica 2025. Surgió como una oportunidad para aplicar mis conocimientos en diseño y creación de experiencias interactivas, mientras ofrecía una actividad entretenida y educativa para los participantes. Me encargué de diseñar completamente la identidad visual del proyecto.';
        challenges = 'Uno de los principales retos fue crear un diseño atractivo y coherente para todo el Escape Room, asegurando que los elementos interactivos fueran intuitivos y fáciles de entender. También fue un desafío mantener la narrativa entretenida sin que los participantes se confundieran..';
        learnings = 'Con este proyecto mejoré mis habilidades en diseño digital, narrativa interactiva y creación de experiencias guiadas. Aprendí a integrar diseño visual con funcionalidad y a pensar en la experiencia del usuario de manera completa.';
        break;
      case 'Nutri Market': // ¡OJO! Usa el ID exacto aquí.
        detailedDescription = 'Este proyecto lo creé con la intención de desarrollar un supermercado enfocado en productos saludables y frescos. Me encargué de diseñar todo el logo, la identidad visual y la estructura general del sitio.';
        challenges = 'El mayor desafío fue unificar la paleta de colores para transmitir la sensación de frescura y salud, y mantener la coherencia estética en todas las secciones del supermercado.';
        learnings = 'Aprendí a trabajar con estructuras más grandes, a prestar atención a los detalles del diseño de un e-commerce y a mantener una línea gráfica consistente en un proyecto extenso.';
        break;
      case 'sampleProject':
        detailedDescription = 'EDP Restaurant nació para desarrollar una solución práctica para que restaurantes pudieran presentar sus menús y gestionar reservas de manera eficiente. Me enfoqué en que la plataforma fuera intuitiva y adaptable.';
        challenges = 'El reto fue definir una estructura visual profesional y sencilla, y organizar el contenido del menú para que fuera fácil de entender.';
        learnings = 'Me permitió mejorar mi criterio visual y mi capacidad para organizar información dentro de una página web.';
        break;
      default:
        detailedDescription = 'Este proyecto lo creé con la intención de desarrollar un supermercado enfocado en productos saludables y frescos. El objetivo fue crear una plataforma clara y atractiva donde los clientes pudieran explorar los productos, conocer promociones y tener una experiencia de compra más organizada. Me encargué de diseñar todo el logo, la identidad visual y la estructura general del sitio.';
        challenges = 'Uno de los mayores retos fue lograr un diseño limpio que mostrara muchos productos sin que la estética se sintiera saturada. También fue desafiante equilibrar la estética con la funcionalidad, especialmente en la presentación de promociones y categorías.';
        learnings = 'Con Nutri Market mejoré mi capacidad de diseño visual aplicado a comercio digital, aprendí a organizar información de manera clara y a crear una experiencia de usuario que sea atractiva y funcional.';
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
      keyFeaturesTranslated:
        project.keyFeatures?.map((kf) => ({
          ...kf,
          title: kf.id,
          description: 'Toda la identidad visual, incluyendo logo, colores y tipografía, fue creada por mí.',
        })) ?? [],
      galleryImagesTranslated:
        project.galleryImages?.map((gi) => ({
          ...gi,
          alt: 'N/A',
          caption: 'N/A',
        })) ?? [],
      challenges, 
      learnings, 
      // ⭐ AÑADIMOS LAS PROPIEDADES EXTRA AL OBJETO DE PROYECTO TRADUCIDO
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

// Skills (El código de skills no necesita cambios)
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
];

// Function to get skills with translated content
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
        description: 'Description missing for this skill.', // Fallback description
      };
    }

    return {
      ...skill, // This includes id and iconName
      title: skillTranslations.title,
      description: skillTranslations.description,
    };
  });
}