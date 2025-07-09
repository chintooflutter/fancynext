export const tattooMaps: Record<number, Record<string, string>> = {
  // 1: Blackletter / Gothic (classic tattoo vibe)
  1: {
    A: '𝕬', B: '𝕭', C: '𝕮', D: '𝕯', E: '𝕰', F: '𝕱', G: '𝕲',
    H: '𝕳', I: '𝕴', J: '𝕵', K: '𝕶', L: '𝕷', M: '𝕸', N: '𝕹',
    O: '𝕺', P: '𝕻', Q: '𝕼', R: '𝕽', S: '𝕾', T: '𝕿', U: '𝖀',
    V: '𝖁', W: '𝖂', X: '𝖃', Y: '𝖄', Z: '𝖅',
    a: '𝖆', b: '𝖇', c: '𝖈', d: '𝖉', e: '𝖊', f: '𝖋', g: '𝖌',
    h: '𝖍', i: '𝖎', j: '𝖏', k: '𝖐', l: '𝖑', m: '𝖒', n: '𝖓',
    o: '𝖔', p: '𝖕', q: '𝖖', r: '𝖗', s: '𝖘', t: '𝖙', u: '𝖚',
    v: '𝖛', w: '𝖜', x: '𝖝', y: '𝖞', z: '𝖟',
  },

  // 2: Fancy diacritic overlays (ornamental)
  2: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, c + '\u0301\u0323'] // acute and dot below
    )
  ),

  // 3: Sharp pointed overlay (edge style)
  3: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, c + '⛨'] // Unicode dagger
    )
  ),

  // 4: Minimal Fraktur
  4: {
    A: '𝔄', B: '𝔅', C: 'ℭ', D: '𝔇', E: '𝔈', F: '𝔉', G: '𝔊',
    H: 'ℌ', I: 'ℑ', J: '𝔍', K: '𝔎', L: '𝔏', M: '𝔐', N: '𝔑',
    O: '𝔒', P: '𝔓', Q: '𝔔', R: 'ℜ', S: '𝔖', T: '𝔗', U: '𝔘',
    V: '𝔙', W: '𝔚', X: '𝔛', Y: '𝔜', Z: 'ℨ',
    a: '𝔞', b: '𝔟', c: '𝔠', d: '𝔡', e: '𝔢', f: '𝔣', g: '𝔤',
    h: '𝔥', i: '𝔦', j: '𝔧', k: '𝔨', l: '𝔩', m: '𝔪', n: '𝔫',
    o: '𝔬', p: '𝔭', q: '𝔮', r: '𝔯', s: '𝔰', t: '𝔱', u: '𝔲',
    v: '𝔳', w: '𝔴', x: '𝔵', y: '𝔶', z: '𝔷',
  },

  // 5: Shadowed / double-outline
  5: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, c + '⃤']
    )
  ),

  // 6: Stylized hearts above each letter (romantic tattoo style)
  6: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, '❤' + c + '❤']
    )
  ),

  // 7: Dot overlays (dotwork-style ink pattern)
  7: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, c + '̇'] // combining dot above
    )
  ),

  // 8: Fullwidth aesthetic (vaporwave/oldschool tattoo fusion)
  8: {
    A: 'Ａ', B: 'Ｂ', C: 'Ｃ', D: 'Ｄ', E: 'Ｅ', F: 'Ｆ', G: 'Ｇ',
    H: 'Ｈ', I: 'Ｉ', J: 'Ｊ', K: 'Ｋ', L: 'Ｌ', M: 'Ｍ', N: 'Ｎ',
    O: 'Ｏ', P: 'Ｐ', Q: 'Ｑ', R: 'Ｒ', S: 'Ｓ', T: 'Ｔ', U: 'Ｕ',
    V: 'Ｖ', W: 'Ｗ', X: 'Ｘ', Y: 'Ｙ', Z: 'Ｚ',
    a: 'ａ', b: 'ｂ', c: 'ｃ', d: 'ｄ', e: 'ｅ', f: 'ｆ', g: 'ｇ',
    h: 'ｈ', i: 'ｉ', j: 'ｊ', k: 'ｋ', l: 'ｌ', m: 'ｍ', n: 'ｎ',
    o: 'ｏ', p: 'ｐ', q: 'ｑ', r: 'ｒ', s: 'ｓ', t: 'ｔ', u: 'ｕ',
    v: 'ｖ', w: 'ｗ', x: 'ｘ', y: 'ｙ', z: 'ｚ',
    '0': '０', '1': '１', '2': '２', '3': '３', '4': '４',
    '5': '５', '6': '６', '7': '７', '8': '８', '9': '９',
  },

  // 9: Glitch stroke overlay (distortion ink effect)
  9: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, c + '\u0336'] // combining long stroke overlay
    )
  ),

  // 10: Decorative sparkle tattoos (✨ on each letter)
  10: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, c + '✨']
    )
  ),

  // 11: Sharp upper diacritics (ritual-inspired edge)
  11: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, c + '\u0307\u0308\u0309'] // dot above, diaeresis, hook above
    )
  ),

  // 12: Tribal bracket tattoos (⟦ ⟧)
  12: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, '⟦' + c + '⟧']
    )
  ),

  // 13: Crescent ink aura (☾)
  13: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, '☾' + c + '☽']
    )
  ),

  // 14: Diamond-edge symbols (◇◇)
  14: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, '◇' + c + '◇']
    )
  ),

  // 15: Cross-line aesthetic (combining diagonal stroke)
  15: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, c + '\u0335'] // combining short stroke overlay
    )
  ),

  // 16: Angelic overlays (halo and wings theme)
  16: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, '𓂀' + c + '𓂀'] // Ancient eye symbol
    )
  ),

  // 17: Dot-dash combination (tattooed rhythm marks)
  17: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, '•' + c + '–']
    )
  ),

  // 18: Vertical mirror-like reflection (looks trippy or occult)
  18: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, c + '\u032F'] // combining inverted breve below
    )
  ),

  // 19: Hexagram overlays (mystical effect)
  19: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, c + '✡'] // star of David
    )
  ),

  // 20: Spiky overlays (chaotic ink energy)
  20: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(
      (c) => [c, c + '\u035C\u035D\u035E'] // multiple combining strokes
    )
  ),

};
