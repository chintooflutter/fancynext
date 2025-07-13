import type { FontStyle } from '@/types';

// 🔤 Static base maps (map[char])
import { scriptFontMap } from './fontMaps/script';
import { gothicFontMap } from './fontMaps/gothic';
import { circledFontMap } from './fontMaps/circled';
import { monospaceFontMap } from './fontMaps/monospace';

// 🔁 Dynamic style maps (map[char])
import { aestheticMaps } from './fontMaps/aesthetic';
import { cuteMaps } from './fontMaps/cute';
import { tattooMaps } from './fontMaps/tattoo';
import { cursiveMaps } from './fontMaps/cursive';
import { coolMaps } from './fontMaps/cool';
import { fortniteMaps } from './fontMaps/fortnite';
import { weird1Map } from '@/lib/fontMaps/weird1';
import { boldgothMap } from '@/lib/fontMaps/boldgoth';
import { fullwidthMap } from '@/lib/fontMaps/fullwidth';
import { boldFrakturMap } from '@/lib/fontMaps/boldfraktur';


type CharMap = Record<string, string>;

// 📦 Lookup: category name -> numbered map[]
const dynamicCharMaps: Record<string, Record<number, CharMap>> = {
  aesthetic: aestheticMaps,
  cute: cuteMaps,
  tattoo: tattooMaps,
  cursive: cursiveMaps,
  cool: coolMaps,
  fortnite: fortniteMaps,
};



/**
 * Resolves the transformer or map for a given style.
 */
function resolveFontTransformer(style: FontStyle):
  | { type: 'charMap'; map: CharMap }
  | { type: 'function'; transform: (text: string) => string }
  | undefined {

  // ✅ Case 1: Check static styles
  const staticCharMaps: Partial<Record<FontStyle, CharMap>> = {
    script: scriptFontMap,
    gothic: gothicFontMap,
    circled: circledFontMap,
    monospace: monospaceFontMap,
  };
  if (staticCharMaps[style]) {
    return { type: 'charMap', map: staticCharMaps[style]! };
  }

  // ✅ Case 2: Handle dynamic numbered styles (like aesthetic12)
  const match = style.match(/^(aesthetic|cute|tattoo|cursive|cool|fortnite)(\d{1,2})?$/);
  if (match) {
    const [, category, numberStr] = match;
    const index = parseInt(numberStr || '1', 10);

    // 🔤 Char-map based categories
    if (dynamicCharMaps[category]) {
      const selected = dynamicCharMaps[category][index] || dynamicCharMaps[category][1];
      if (selected) return { type: 'charMap', map: selected };
    }
  }

  // ✅ Case 3: Function-based or one-off char maps
  if (style === 'weird1') {
    return { type: 'charMap', map: weird1Map,
    };
  }

  if (style === 'boldgoth') {
    return { type: 'charMap', map: boldgothMap };
  }

  if (style === 'fullwidth') {
    return { type: 'charMap', map: fullwidthMap };
  }

  if (style === 'boldfraktur') {
    return { type: 'charMap', map: boldFrakturMap };
  }
  

  // ❌ Nothing matched
  return undefined;
}

/**
 * Transforms plain text into a fancy styled string.
 */
export function transformText(input: string, style: FontStyle): string {
  const resolved = resolveFontTransformer(style);

  if (!resolved) {
    console.warn(`⚠️ No font map found for style: "${style}"`);
    return input;
  }

  if (resolved.type === 'charMap') {
    return input.split('').map((char) => resolved.map[char] || char).join('');
  }

  if (resolved.type === 'function') {
    return resolved.transform(input);
  }

  return input;
}


