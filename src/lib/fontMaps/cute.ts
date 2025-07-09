
export const cuteMaps: Record<number, Record<string, string>> ={
  // 1: Script (like pretty handwriting)
  1: {
    a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: '𝑒', f: '𝒻', g: '𝑔',
    h: '𝒽', i: '𝒾', j: '𝒿', k: '𝓀', l: '𝓁', m: '𝓂', n: '𝓃',
    o: '𝑜', p: '𝓅', q: '𝓆', r: '𝓇', s: '𝓈', t: '𝓉', u: '𝓊',
    v: '𝓋', w: '𝓌', x: '𝓍', y: '𝓎', z: '𝓏',
    A: '𝒜', B: '𝐵', C: '𝒞', D: '𝒟', E: '𝐸', F: '𝐹', G: '𝒢',
    H: '𝐻', I: '𝐼', J: '𝒥', K: '𝒦', L: '𝐿', M: '𝑀', N: '𝒩',
    O: '𝒪', P: '𝒫', Q: '𝒬', R: '𝑅', S: '𝒮', T: '𝒯', U: '𝒰',
    V: '𝒱', W: '𝒲', X: '𝒳', Y: '𝒴', Z: '𝒵',
    '0': '𝟢', '1': '𝟣', '2': '𝟤', '3': '𝟥', '4': '𝟦',
    '5': '𝟧', '6': '𝟨', '7': '𝟩', '8': '𝟪', '9': '𝟫',
  },

  // 2: Fullwidth (kawaii style spacing)
  2: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(c => [
      c,
      String.fromCharCode(c.charCodeAt(0) + 0xFF00 - 0x20),
    ])
  ),

  // 3: Circled
  3: {
    a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ',
    h: 'ⓗ', i: 'ⓘ', j: 'ⓙ', k: 'ⓚ', l: 'ⓛ', m: 'ⓜ', n: 'ⓝ',
    o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ', s: 'ⓢ', t: 'ⓣ', u: 'ⓤ',
    v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ',
    A: 'Ⓐ', B: 'Ⓑ', C: 'Ⓒ', D: 'Ⓓ', E: 'Ⓔ', F: 'Ⓕ', G: 'Ⓖ',
    H: 'Ⓗ', I: 'Ⓘ', J: 'Ⓙ', K: 'Ⓚ', L: 'Ⓛ', M: 'Ⓜ', N: 'Ⓝ',
    O: 'Ⓞ', P: 'Ⓟ', Q: 'Ⓠ', R: 'Ⓡ', S: 'Ⓢ', T: 'Ⓣ', U: 'Ⓤ',
    V: 'Ⓥ', W: 'Ⓦ', X: 'Ⓧ', Y: 'Ⓨ', Z: 'Ⓩ',
    '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④',
    '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨',
  },

  // 4: Bold Fraktur (gothic but cute 😅)
  4: {
    a: '𝖆', b: '𝖇', c: '𝖈', d: '𝖉', e: '𝖊', f: '𝖋', g: '𝖌',
    h: '𝖍', i: '𝖎', j: '𝖏', k: '𝖐', l: '𝖑', m: '𝖒', n: '𝖓',
    o: '𝖔', p: '𝖕', q: '𝖖', r: '𝖗', s: '𝖘', t: '𝖙', u: '𝖚',
    v: '𝖛', w: '𝖜', x: '𝖝', y: '𝖞', z: '𝖟',
    A: '𝕬', B: '𝕭', C: '𝕮', D: '𝕯', E: '𝕰', F: '𝕱', G: '𝕲',
    H: '𝕳', I: '𝕴', J: '𝕵', K: '𝕶', L: '𝕷', M: '𝕸', N: '𝕹',
    O: '𝕺', P: '𝕻', Q: '𝕼', R: '𝕽', S: '𝕾', T: '𝕿', U: '𝖀',
    V: '𝖁', W: '𝖂', X: '𝖃', Y: '𝖄', Z: '𝖅',
  },

  // 5: Emoji Overlay (for sparkly vibes ✨)
  5: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(c => [c, c + '✨'])
  ),

  // 6: Serif Italic (classy cute)
  6: {
    a: '𝑎', b: '𝑏', c: '𝑐', d: '𝑑', e: '𝑒', f: '𝑓', g: '𝑔',
    h: 'ℎ', i: '𝑖', j: '𝑗', k: '𝑘', l: '𝑙', m: '𝑚', n: '𝑛',
    o: '𝑜', p: '𝑝', q: '𝑞', r: '𝑟', s: '𝑠', t: '𝑡', u: '𝑢',
    v: '𝑣', w: '𝑤', x: '𝑥', y: '𝑦', z: '𝑧',
    A: '𝐴', B: '𝐵', C: '𝐶', D: '𝐷', E: '𝐸', F: '𝐹', G: '𝐺',
    H: '𝐻', I: '𝐼', J: '𝐽', K: '𝐾', L: '𝐿', M: '𝑀', N: '𝑁',
    O: '𝑂', P: '𝑃', Q: '𝑄', R: '𝑅', S: '𝑆', T: '𝑇', U: '𝑈',
    V: '𝑉', W: '𝑊', X: '𝑋', Y: '𝑌', Z: '𝑍',
  },

  // 7: Serif Bold Italic (bold + stylish)
  7: {
    a: '𝒂', b: '𝒃', c: '𝒄', d: '𝒅', e: '𝒆', f: '𝒇', g: '𝒈',
    h: '𝒉', i: '𝒊', j: '𝒋', k: '𝒌', l: '𝒍', m: '𝒎', n: '𝒏',
    o: '𝒐', p: '𝒑', q: '𝒒', r: '𝒓', s: '𝒔', t: '𝒕', u: '𝒖',
    v: '𝒗', w: '𝒘', x: '𝒙', y: '𝒚', z: '𝒛',
    A: '𝑨', B: '𝑩', C: '𝑪', D: '𝑫', E: '𝑬', F: '𝑭', G: '𝑮',
    H: '𝑯', I: '𝑰', J: '𝑱', K: '𝑲', L: '𝑳', M: '𝑴', N: '𝑵',
    O: '𝑶', P: '𝑷', Q: '𝑸', R: '𝑹', S: '𝑺', T: '𝑻', U: '𝑼',
    V: '𝑽', W: '𝑾', X: '𝑿', Y: '𝒀', Z: '𝒁',
  },

  // 8: Wide Spaced (bubblegum bouncy style)
  8: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(c => [c, c + ' '])
  ),

  // 9: Angelic Overlay (soft floaty text)
  9: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(c => [c, c + '\u0304\u0308'])
  ),

  // 10: Vaporwave Box Style (enclosed block look)
  10: {
    A: '🄐', B: '🄑', C: '🄒', D: '🄓', E: '🄔', F: '🄕', G: '🄖',
    H: '🄗', I: '🄘', J: '🄙', K: '🄚', L: '🄛', M: '🄜', N: '🄝',
    O: '🄞', P: '🄟', Q: '🄠', R: '🄡', S: '🄢', T: '🄣', U: '🄤',
    V: '🄥', W: '🄦', X: '🄧', Y: '🄨', Z: '🄩',
    a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶',
    h: '🄷', i: '🄸', j: '🄹', k: '🄺', l: '🄻', m: '🄼', n: '🄽',
    o: '🄾', p: '🄿', q: '🅀', r: '🅁', s: '🅂', t: '🅃', u: '🅄',
    v: '🅅', w: '🅆', x: '🅇', y: '🅈', z: '🅉',
    '0': '⓿', '1': '➀', '2': '➁', '3': '➂', '4': '➃',
    '5': '➄', '6': '➅', '7': '➆', '8': '➇', '9': '➈',
  },

  // 11: Hearts & Stars Overlay ✨💖
  11: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(c => [c, c + '💖'])
  ),

  // 12: Double-struck (cute chalkboard aesthetic)
  12: {
    A: '𝔸', B: '𝔹', C: 'ℂ', D: '𝔻', E: '𝔼', F: '𝔽', G: '𝔾',
    H: 'ℍ', I: '𝕀', J: '𝕁', K: '𝕂', L: '𝕃', M: '𝕄', N: 'ℕ',
    O: '𝕆', P: 'ℙ', Q: 'ℚ', R: 'ℝ', S: '𝕊', T: '𝕋', U: '𝕌',
    V: '𝕍', W: '𝕎', X: '𝕏', Y: '𝕐', Z: 'ℤ',
    a: '𝕒', b: '𝕓', c: '𝕔', d: '𝕕', e: '𝕖', f: '𝕗', g: '𝕘',
    h: '𝕙', i: '𝕚', j: '𝕛', k: '𝕜', l: '𝕝', m: '𝕞', n: '𝕟',
    o: '𝕠', p: '𝕡', q: '𝕢', r: '𝕣', s: '𝕤', t: '𝕥', u: '𝕦',
    v: '𝕧', w: '𝕨', x: '𝕩', y: '𝕪', z: '𝕫',
    '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜',
    '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡',
  },

  // 13: Sparkles and Soft Diacritics
  13: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(c => [c, c + '\u0301\u0302✨'])
  ),

  // 14: Hollow Shadow (outline-styled font)
  14: {
    A: '𝕬', B: '𝕭', C: '𝕮', D: '𝕯', E: '𝕰', F: '𝕱', G: '𝕲',
    H: '𝕳', I: '𝕴', J: '𝕵', K: '𝕶', L: '𝕷', M: '𝕸', N: '𝕹',
    O: '𝕺', P: '𝕻', Q: '𝕼', R: '𝕽', S: '𝕾', T: '𝕿', U: '𝖀',
    V: '𝖁', W: '𝖂', X: '𝖃', Y: '𝖄', Z: '𝖅',
    a: '𝖆', b: '𝖇', c: '𝖈', d: '𝖉', e: '𝖊', f: '𝖋', g: '𝖌',
    h: '𝖍', i: '𝖎', j: '𝖏', k: '𝖐', l: '𝖑', m: '𝖒', n: '𝖓',
    o: '𝖔', p: '𝖕', q: '𝖖', r: '𝖗', s: '𝖘', t: '𝖙', u: '𝖚',
    v: '𝖛', w: '𝖜', x: '𝖝', y: '𝖞', z: '𝖟',
  },

  // 15: Rounded bubble style (by emoji supplement)
  15: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(c => [c, '🅞' + c])
  ),

  // 16: Cute Sparkle Overlay (✨ after each char)
  16: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(c => [c, c + '✨'])
  ),

  // 17: Decorative Zalgo-lite overlay (soft diacritics)
  17: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(c => [c, c + '\u0300\u0301\u0315\u0342'])
  ),

  // 18: Enclosed + Heart dots (emotional vibe 💞)
  18: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(c => [c, '❤' + c + '❤'])
  ),

  // 19: Crossed cute shadow (⃠)
  19: Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map(c => [c, c + '⃠'])
  ),

  // 20: Fullwidth style (used in kawaii/vaporwave aesthetics)
  20: {
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
};
