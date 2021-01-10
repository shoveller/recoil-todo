module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    shallowRender: true,
    reactStrictMode: true,
    i18n: {
      locales: ['en', 'ko'],
      defaultLocale: 'en',
      localeDetection: false
    },
  }
}
