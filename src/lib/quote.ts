/**
 * Demande de devis : validation et mise en forme du message.
 * Fonctions pures, utilisées par le formulaire dans le navigateur et couvertes par des tests.
 * Aucune donnée n'est envoyée ni stockée par le site : le message part via WhatsApp ou l'e-mail du visiteur.
 */

export interface QuoteInput {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  description: string;
  budget: string;
  deadline: string;
}

export type QuoteErrors = Partial<Record<keyof QuoteInput, string>>;

export const emptyQuote: QuoteInput = {
  name: '',
  company: '',
  phone: '',
  email: '',
  service: '',
  description: '',
  budget: '',
  deadline: '',
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function normalizeQuote(input: QuoteInput): QuoteInput {
  const clean = {} as QuoteInput;
  for (const key of Object.keys(emptyQuote) as (keyof QuoteInput)[]) {
    clean[key] = (input[key] ?? '').replace(/\s+/g, ' ').trim();
  }
  // La description conserve ses retours à la ligne.
  clean.description = (input.description ?? '').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
  return clean;
}

export function validateQuote(raw: QuoteInput): QuoteErrors {
  const input = normalizeQuote(raw);
  const errors: QuoteErrors = {};
  const phoneDigits = input.phone.replace(/\D/g, '');

  if (input.name.length < 2) errors.name = 'Indiquez votre nom.';

  if (!input.phone && !input.email) {
    errors.phone = 'Indiquez un numéro de téléphone ou une adresse e-mail pour que je puisse vous répondre.';
  } else {
    if (input.phone && (phoneDigits.length < 8 || phoneDigits.length > 15 || /[^\d\s+().-]/.test(input.phone))) {
      errors.phone = 'Ce numéro semble incomplet. Exemple : 6 83 26 05 20 ou +237 683 26 05 20.';
    }
    if (input.email && !EMAIL.test(input.email)) {
      errors.email = 'Cette adresse e-mail semble incorrecte. Exemple : nom@exemple.com.';
    }
  }

  if (!input.service) errors.service = 'Choisissez le service qui vous intéresse.';

  if (input.description.length < 15) {
    errors.description = 'Décrivez votre besoin en une ou deux phrases (15 caractères au minimum).';
  }
  return errors;
}

export function buildQuoteMessage(raw: QuoteInput): string {
  const input = normalizeQuote(raw);
  const lines = [
    'Bonjour Brayano Service, je souhaite obtenir un devis.',
    '',
    `Nom : ${input.name}`,
    input.company ? `Entreprise : ${input.company}` : null,
    input.phone ? `Téléphone / WhatsApp : ${input.phone}` : null,
    input.email ? `E-mail : ${input.email}` : null,
    `Service : ${input.service}`,
    input.budget ? `Budget indicatif : ${input.budget}` : null,
    input.deadline ? `Délai souhaité : ${input.deadline}` : null,
    '',
    'Mon besoin :',
    input.description,
  ];
  return lines.filter((line): line is string => typeof line === 'string').join('\n');
}
