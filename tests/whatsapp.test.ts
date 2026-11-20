import { describe, expect, it } from 'vitest';
import { toInternational, whatsappLink, whatsappUrl } from '../src/lib/whatsapp';
import { whatsappMessages } from '../src/config/site';

describe('toInternational', () => {
  it.each([
    ['683260520', '237683260520'],
    ['683 26 05 20', '237683260520'],
    ['+237 683 26 05 20', '237683260520'],
    ['00237683260520', '237683260520'],
    ['237683260520', '237683260520'],
  ])('normalise %s', (input, expected) => {
    expect(toInternational(input)).toBe(expected);
  });

  it.each(['', '12345', '783260520', '6832605201', '+33612345678'])('rejette %s', (input) => {
    expect(() => toInternational(input)).toThrow();
  });
});

describe('whatsappUrl', () => {
  it('encode les accents, apostrophes et espaces', () => {
    const url = whatsappUrl("Bonjour, j'ai une idée à 100 % & plus");
    expect(url.startsWith('https://wa.me/237683260520?text=')).toBe(true);
    expect(url).not.toMatch(/[ éà]/u);
    expect(new URL(url).searchParams.get('text')).toBe("Bonjour, j'ai une idée à 100 % & plus");
  });

  it('produit un lien valide pour chaque intention configurée', () => {
    for (const intent of Object.keys(whatsappMessages) as (keyof typeof whatsappMessages)[]) {
      const url = new URL(whatsappLink(intent));
      expect(url.hostname).toBe('wa.me');
      expect(url.pathname).toBe('/237683260520');
      expect(url.searchParams.get('text')).toBe(whatsappMessages[intent]);
    }
  });
});
