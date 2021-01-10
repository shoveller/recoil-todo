import { PropsWithChildren } from 'react'

export interface ILayoutProps {}

export const Layout = (props: PropsWithChildren<ILayoutProps>) => {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <>{props.children}</>
    </>
  )
}
