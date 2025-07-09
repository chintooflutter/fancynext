import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // (Optional) extend colors or fontFamily here if needed
    },
  },
  plugins: [],
};

export default config;
