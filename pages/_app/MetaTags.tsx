/**
 * 브라우저 캐시를 비활성화하는 메타태그 모음
 */
export interface IHeadProps {
  title: string
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

export const DisableCache = () => {
  return (
    <>
      <meta
        httpEquiv="Cache-Control"
        content="no-cache, no-store, must-revalidate"
      />
      <meta httpEquiv="pragma" content="no-cache" />
      <meta httpEquiv="expires" content="-1" />
    </>
  )
}

/**
 * 링크 공유에 사용하는 메타태그 모음
 */
export const OpenGraph = (props: IHeadProps) => {
  return (
    <>
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  )
}

/**
 * 트위터 공유에 사용하는 메타태그 모음
 */
export const Twitter = (props: IHeadProps) => {
  return (
    <>
      <meta name="twitter:site" content={props.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={props.ogImage} />
    </>
  )
}
