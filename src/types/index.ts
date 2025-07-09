// Utility: 1–20 as a union type
type NumRange20 =
  | 1 | 2 | 3 | 4 | 5
  | 6 | 7 | 8 | 9 | 10
  | 11 | 12 | 13 | 14 | 15
  | 16 | 17 | 18 | 19 | 20;

// Font style types (individual Unicode transformation styles)
export type FontStyle =
  | 'monospace'
  | 'script'
  | 'circled'
  | 'gothic'
  | 'aesthetic'
  | `aesthetic${NumRange20}`
  | 'tattoo'
  | `tattoo${NumRange20}`
  | 'cursive'
  | `cursive${NumRange20}`
  | 'cute'
  | `cute${NumRange20}`
  | 'fortnite'
  | `fortnite${NumRange20}`
  | 'fullwidth'
  | 'emoji'
  | 'sparkle'
  | 'thai'
  | 'boldgoth'
  | 'boxed'
  | 'fancyboxed'
  | 'weird1'
  | 'block'
  | 'smallcaps'
  | 'twist'
  | 'boldfraktur'
  | 'superscript'
  | 'teddy'
  | 'block2'
  | 'flower';

// Font categories used for filtering/grouping in UI
export type FontCategory =
  | 'All'
  | 'Cute'
  | 'Fancy'
  | 'Gothic'
  | 'Tattoo'
  | 'Cursive'
  | 'Code Style';

// Used for font definitions in per-page or global font lists
export type FontConfig = {
  name: string;
  preview: string;
  style: string;
  category: string;
};

// Optional per-subdomain font generator config
export type SubdomainConfig = {
  title: string;
  description: string;
  ogImage: string;
  category: string;
  fonts?: FontConfig[];
};

// This is for transformer-based fonts (e.g., zalgo)
export type FontMap = {
  [style: string]: {
    name: string;
    style: string;
    transform: (text: string) => string;
  };
};
