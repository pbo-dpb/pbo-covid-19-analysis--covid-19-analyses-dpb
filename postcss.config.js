module.exports = {
  plugins: {
    tailwindcss: {},
    'vue-cli-plugin-tailwind/purgecss': {
      whitelistPatterns: [/^col-span-/, /^grid-cols-/, /^md:col-span-/],
    },
    autoprefixer: {}
  }
}
