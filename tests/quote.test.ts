import { describe, expect, it } from 'vitest';
import { buildQuoteMessage, emptyQuote, validateQuote, type QuoteInput } from '../src/lib/quote';
import { whatsappUrl } from '../src/lib/whatsapp';

const valid: QuoteInput = {
  ...emptyQuote,
  name: 'Awa Ngono',
  phone: '6 99 00 11 22',
  service: 'Création de sites web',
  description: 'Je veux un site pour ma boutique de vêtements à Akwa.',
};

describe('validateQuote', () => {
  it('accepte une demande complète', () => {
    expect(validateQuote(valid)).toEqual({});
  });

  it('signale tous les champs obligatoires manquants', () => {
    expect(Object.keys(validateQuote(emptyQuote)).sort()).toEqual(['description', 'name', 'phone', 'service']);
  });

  it('accepte un e-mail seul comme moyen de contact', () => {
    expect(validateQuote({ ...valid, phone: '', email: 'awa@exemple.cm' })).toEqual({});
  });

  it('refuse un téléphone trop court ou contenant des lettres', () => {
    expect(validateQuote({ ...valid, phone: '12345' }).phone).toBeDefined();
    expect(validateQuote({ ...valid, phone: 'appelez-moi 699001122' }).phone).toBeDefined();
  });

  it('refuse un e-mail mal formé même si le téléphone est correct', () => {
    expect(validateQuote({ ...valid, email: 'awa@exemple' }).email).toBeDefined();
  });

  it('refuse une description trop courte ou faite d’espaces', () => {
    expect(validateQuote({ ...valid, description: 'Un site' }).description).toBeDefined();
    expect(validateQuote({ ...valid, description: '                    ' }).description).toBeDefined();
  });
});

describe('buildQuoteMessage', () => {
  it('ne contient que les champs renseignés', () => {
    const message = buildQuoteMessage(valid);
    expect(message).toContain('Nom : Awa Ngono');
    expect(message).toContain('Service : Création de sites web');
    expect(message).not.toContain('Entreprise');
    expect(message).not.toContain('Budget');
    expect(message).not.toContain('null');
    expect(message).not.toContain('undefined');
  });

  it('inclut les champs facultatifs et conserve les retours à la ligne du besoin', () => {
    const message = buildQuoteMessage({
      ...valid,
      company: '  Awa   Mode ',
      budget: '150 000 FCFA',
      deadline: 'Avant janvier',
      description: 'Ligne 1 du besoin.\nLigne 2 du besoin.',
    });
    expect(message).toContain('Entreprise : Awa Mode');
    expect(message).toContain('Budget indicatif : 150 000 FCFA');
    expect(message).toContain('Délai souhaité : Avant janvier');
    expect(message).toContain('Ligne 1 du besoin.\nLigne 2 du besoin.');
  });

  it('survit à l’encodage dans un lien WhatsApp', () => {
    const message = buildQuoteMessage({ ...valid, description: 'Budget à 100 % & délai « court » ? Oui !' });
    expect(new URL(whatsappUrl(message)).searchParams.get('text')).toBe(message);
  });
});
