import { site, whatsappMessages, type WhatsAppIntent } from '@/config/site';

/**
 * Convertit un numéro camerounais en format international sans « + » ni séparateur.
 * Accepte « 683260520 », « 683 26 05 20 », « +237 683 26 05 20 », « 00237683260520 ».
 * Lève une erreur si le numéro n'est pas un numéro camerounais valide à 9 chiffres :
 * mieux vaut un build qui échoue qu'un bouton WhatsApp qui mène nulle part.
 */
export function toInternational(input: string, countryCode: string = site.contact.phoneCountryCode): string {
  let digits = input.replace(/\D/g, '');
  if (digits.startsWith('00')) digits = digits.slice(2);
  if (digits.startsWith(countryCode) && digits.length === countryCode.length + 9) {
    digits = digits.slice(countryCode.length);
  }
  if (!/^[26]\d{8}$/.test(digits)) {
    throw new Error(`Numéro de téléphone invalide pour le Cameroun : « ${input} »`);
  }
  return `${countryCode}${digits}`;
}

/** Construit un lien wa.me avec un message correctement encodé (accents, apostrophes, retours à la ligne). */
export function whatsappUrl(message: string, phone: string = site.contact.phoneLocal): string {
  return `https://wa.me/${toInternational(phone)}?text=${encodeURIComponent(message)}`;
}

/** Lien WhatsApp pour une intention commerciale définie dans la configuration. */
export function whatsappLink(intent: WhatsAppIntent = 'general'): string {
  return whatsappUrl(whatsappMessages[intent]);
}
