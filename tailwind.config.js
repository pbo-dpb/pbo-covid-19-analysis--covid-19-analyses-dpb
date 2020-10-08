module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  /*purge: {
    options: {
      whitelistPatterns: [/^col-span-/, /^grid-cols-/],
      whitelist: ['col-span-5', 'grid-cols-3'],
    }
  },*/
  theme: {
    extend: {},
  },
  variants: { backgroundColor: ['responsive', 'even', 'hover', 'focus'], },
  plugins: [require('@tailwindcss/typography')],
}
