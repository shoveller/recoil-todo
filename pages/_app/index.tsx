import App from 'next/app'
import { Head } from 'pages/_app/Head'
import { Layout } from 'pages/_app/Layout'
import * as MetaTags from 'pages/_app/MetaTags'
import React from 'react'
import { appWithTranslation } from 'utils/i18n'

class ReactApp extends App<any> {
  static async getInitialProps(ctx) {
    const appProps = await App.getInitialProps(ctx)

    return { ...appProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <MetaTags.DisableCache />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default appWithTranslation(ReactApp)
