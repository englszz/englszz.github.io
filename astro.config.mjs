import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';
import rehypeMermaid from 'rehype-mermaid';

import vercel from '@astrojs/vercel';

// Use different strategies based on environment
const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

// Use 'pre-built' on Vercel/production to avoid Playwright, 'inline-svg' locally
const mermaidStrategy = isProduction || isVercel ? 'pre-built' : 'inline-svg';

console.log(`Using Mermaid strategy: ${mermaidStrategy}`);

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // Puedes cambiarlo luego si quieres poner tu dominio real
  integrations: [
    react(),
    mdx({
      rehypePlugins: [
        [
          rehypeMermaid,
          {
            strategy: isProduction ? 'pre-mermaid' : 'inline-svg',
          },
        ],
      ],
      syntaxHighlight: {
        type: 'shiki',
        excludeLangs: ['mermaid'],
      },
    }),
  ],

  // 🏆 CONFIG DE IDIOMA ARREGLADA
  // 🔥 SOLO USAMOS 'en' PORQUE TU PORTAFOLIO ENTERO USA ESA CLAVE COMO ESPAÑOL
  i18n: {
    locales: ['en'], 
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
