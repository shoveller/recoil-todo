import App from 'next/app'
import React from 'react'
import { appWithTranslation } from 'utils/i18n'

class ReactApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default appWithTranslation(ReactApp)
