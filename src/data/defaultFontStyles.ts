// src/data/defaultFontStyles.ts

export const defaultFontStyles = [
  // Aesthetic Fonts
  {
    name: '𝒮𝒸𝓇𝒾𝓅𝓉',
    preview: '𝒻𝒶𝓃𝒸𝓎 𝓁𝑒𝓉𝓉𝑒𝓇𝓈',
    style: 'script',
    category: 'Aesthetic',
  },  
  {
    name: 'ⒸⒾⓇⒸⓁⒺⒹ',
    preview: 'Ⓕⓐⓝⓒⓨ Ⓛⓔⓣⓣⓔⓡⓢ',
    style: 'circled',
    category: 'Cute',
  },  
  {
    name: '🅒🅗🅘🅒 🅐🅔🅢🅣🅗',
    preview: '🅕🅐🅝🅒🅨 🅣🅔🅧🅣',
    style: 'aesthetic3',
    category: 'Aesthetic',
  },

  // Cute Fonts
  {
    name: '𝓑𝓾𝓫𝓫𝓵𝓮 𝓛𝓮𝓽𝓽𝓮𝓻𝓼',
    preview: '🄵🄰🄽🄲🅈 🅃🄴🅇🅃',
    style: 'cute1',
    category: 'Cute',
  },
  {
    name: '𝕱𝖚𝖓 & 𝓕𝓵𝓾𝓯𝓯𝔂',
    preview: '🌸𝒻𝒶𝓃𝒸𝓎🌸',
    style: 'cute2',
    category: 'Cute',
  },  

  // Gothic Fonts
  {
    name: '𝕲𝖔𝖙𝖍𝖎𝖈',
    preview: '𝔉𝔞𝔫𝔠𝔶 𝔏𝔢𝔱𝔱𝔢𝔯𝔰',
    style: 'gothic',
    category: 'Gothic',
  },
  {
    name: '𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎𝚍',
    preview: '𝙵𝚊𝚗𝚌𝚢 𝙻𝚎𝚝𝚝𝚎𝚛𝚜',
    style: 'monospace',
    category: 'Code Style',
  },   
  
  // Tattoo Fonts
  {
    name: '𝕋𝕒𝕥𝕥𝕠𝕠',
    preview: '𝔉𝔞𝔫𝔠𝔶 𝔏𝔢𝔱𝔱𝔢𝔯𝔰',
    style: 'tattoo',
    category: 'Tattoo',
  },
  
  {
    name: '⚓ Old School',
    preview: '𝔣𝔞𝔫𝔠𝔶 𝔩𝔢𝔱𝔱𝔢𝔯𝔰',
    style: 'tattoo3',
    category: 'Tattoo',
  },
  // Code Style
  
  {
    name: '𝙵𝚞𝚕𝚕 𝚆𝚒𝚍𝚝𝚑',
    preview: 'Ｆａｎｃｙ Ｔｅｘｔ',
    style: 'fullwidth',
    category: 'Code Style',
  },
] as const;


// ✅ Types based on the data above
export type FontStyle = (typeof defaultFontStyles)[number];
export type FontCategory = FontConfig['category'];
export type FontConfig = typeof defaultFontStyles[number];
