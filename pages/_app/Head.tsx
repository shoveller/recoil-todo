import NextHead from 'next/head'
import { PropsWithChildren } from 'react'

export interface IHeadProps {
  title?: string
  description?: string
  url?: string
  ogImage?: string
}

export const defaultProps: IHeadProps = {
  title: '',
  description: '',
  url: '',
  ogImage: '',
}

export const Head = (props: PropsWithChildren<IHeadProps> = defaultProps) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" sizes="192x192" href="/public/touch-icon.png" />
      <link rel="apple-touch-icon" href="/public/touch-icon.png" />
      <link rel="mask-icon" href="/public/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href="/public/favicon.ico" />
      {props.children}
    </NextHead>
  )
}
