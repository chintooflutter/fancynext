export const cursiveMaps: Record<number, Record<string, string>> = {
  1: {
    a: '𝓪', b: '𝓫', c: '𝓬', d: '𝓭', e: '𝓮', f: '𝓯', g: '𝓰',
    h: '𝓱', i: '𝓲', j: '𝓳', k: '𝓴', l: '𝓵', m: '𝓶', n: '𝓷',
    o: '𝓸', p: '𝓹', q: '𝓺', r: '𝓻', s: '𝓼', t: '𝓽', u: '𝓾',
    v: '𝓿', w: '𝔀', x: '𝔁', y: '𝔂', z: '𝔃',
    A: '𝓐', B: '𝓑', C: '𝓒', D: '𝓓', E: '𝓔', F: '𝓕', G: '𝓖',
    H: '𝓗', I: '𝓘', J: '𝓙', K: '𝓚', L: '𝓛', M: '𝓜', N: '𝓝',
    O: '𝓞', P: '𝓟', Q: '𝓠', R: '𝓡', S: '𝓢', T: '𝓣', U: '𝓤',
    V: '𝓥', W: '𝓦', X: '𝓧', Y: '𝓨', Z: '𝓩',
  },

  2: { ...cursiveCharMapGen(2) },
  3: { ...cursiveCharMapGen(3) },
  4: { ...cursiveCharMapGen(4) },
  5: { ...cursiveCharMapGen(5) },
  6: { ...cursiveCharMapGen(6) },
  7: { ...cursiveCharMapGen(7) },
  8: { ...cursiveCharMapGen(8) },
  9: { ...cursiveCharMapGen(9) },
  10: { ...cursiveCharMapGen(10) },
  11: { ...cursiveCharMapGen(11) },
  12: { ...cursiveCharMapGen(12) },
  13: { ...cursiveCharMapGen(13) },
  14: { ...cursiveCharMapGen(14) },
  15: { ...cursiveCharMapGen(15) },
  16: { ...cursiveCharMapGen(16) },
  17: { ...cursiveCharMapGen(17) },
  18: { ...cursiveCharMapGen(18) },
  19: { ...cursiveCharMapGen(19) },
  20: { ...cursiveCharMapGen(20) },
};

/**
 * Generate fallback cursive-style variations for 2–20.
 */
function cursiveCharMapGen(seed: number): Record<string, string> {
  const base = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const result: Record<string, string> = {};
  for (const char of base) {
    const offset = (char.charCodeAt(0) + seed * 3) % 126;
    result[char] = String.fromCharCode(offset >= 33 ? offset : offset + 33);
  }
  return result;
}
