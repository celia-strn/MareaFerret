/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './footer.js',
    '!./node_modules/**',
  ],
  theme: {
    extend: {
      colors: {
        'navy':        '#1E3A5F',
        'navy-dark':   '#152D4A',
        'sand-light':  '#FAF7F0',
        'ocean-accent':'#005F9A',
        'terra':       '#C3785A',
        'terra-dark':  '#A66B4D',
        'terra-light': '#F5EDEA',
        'sand':        '#F5EFE0',
        'warm-gray':   '#E8E4DD',
        'offwhite':    '#FAFAF7',
        'text-light':  '#5A7A96',
        'ocean':       '#005F9A',
        'ocean-dark':  '#004A78',
        'ocean-light': '#3A8BC2',
        'ocean-pastel':'#B8D4E8',
        'bois':        '#3D2416',
        'blanc':       '#FFFFFF',
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'sans':    ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
