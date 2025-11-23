import type { LanguageCode } from '@/i18n/ui';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: Date, lang: LanguageCode) {
  let locale = 'en-US'; // Valor por defecto

  // 🔑 AÑADIMOS LA LÓGICA PARA EL ESPAÑOL Y EL FRANCÉS
  if (lang === 'es') {
    locale = 'es-ES';
  } else if (lang === 'fr') {
    locale = 'fr-FR';
  } else {
    // Si no es 'es' ni 'fr', usamos el inglés por defecto.
    locale = 'en-US';
  }

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateString);
}