const { nextI18NextRewrites } = require('next-i18next/rewrites')
// const env = require("dotenv").config({ path: `${process.env.ENVIRONMENT}` });

const localeSubpaths = {}

module.exports = (phase, { defaultConfig }) => {
  console.log(defaultConfig)

  return {
    ...defaultConfig,
    // env: {
    //   TEST_ENV: 'webpack',
    // },
    shallowRender: true,
    reactStrictMode: true,
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
      localeSubpaths,
    },
    i18n: {
      locales: ['en', 'ko'],
      defaultLocale: 'en',
      localeDetection: true,
    },
  }
}
