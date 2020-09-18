module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: { backgroundColor: ['responsive', 'even', 'hover', 'focus'], },
  plugins: [require('@tailwindcss/typography')],
}
