module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.svelte', './src/**/*.html'],
    options: {
      keyframes: true,
      // considers dynamic class bindings when purging unused classes
      // credit: https://github.com/matebek https://dev.to/matebek
      defaultExtractor: (content) => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      roboto: 'Roboto Slab',
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['Open Sans'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
