module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    reactStrictMode: true,
    // i18n의 렌더가 빈번하게 일어나지 않도록 막음
    shallowRender: true,
    // 서버측 i18n설정
    i18n: {
      locales: ['en', 'ko'],
      defaultLocale: 'en',
      localeDetection: true,
    },
  }
}
