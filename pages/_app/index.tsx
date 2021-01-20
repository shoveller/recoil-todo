import App, { AppContext, AppProps } from 'next/app'
import { Head } from 'pages/_app/Head'
import { Layout } from 'pages/_app/Layout'
import * as MetaTags from 'pages/_app/MetaTags'
import React from 'react'
import { RecoilRoot, useRecoilState } from 'recoil'
import { appWithTranslation } from 'utils/i18n'
import { test } from 'utils/test'

const TestLoader = () => {
  const [value, setValue] = useRecoilState(test)
  // eslint-disable-next-line no-console
  console.log(value)
  setValue('된다')

  return null
}

const ReactApp = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <RecoilRoot>
      <Head>
        <MetaTags.DisableCache />
      </Head>
      <Layout>
        <TestLoader />
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

ReactApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx)

  return { ...appProps }
}

export default appWithTranslation(ReactApp)
