import { NextPageContext } from 'next'
import { todoState } from 'repository/useTODO'
import { includeDefaultNamespaces } from 'utils/i18n'
import { RecoilRoot, useRecoilValue } from 'recoil'
import React, { ReactNode } from 'react'
import { Suspense } from 'react'

const Table = () => {
  const todos = useRecoilValue(todoState)

  return (
    <ul>
      {todos.map((item, index) => {
        const key = `row_${index}`

        return <li key={key}>{item.message}</li>
      })}
    </ul>
  )
}

const RenderBrowserOnly = (props: { children: ReactNode }) => {
  if (process.browser) {
    return <>{props.children}</>
  }

  return <></>
}

const Index = () => {
  return (
    <RecoilRoot>
      <div className="container">
        <RenderBrowserOnly>
          <Suspense fallback={<h4>로딩중...</h4>}>
            <Table />
          </Suspense>
        </RenderBrowserOnly>
      </div>
    </RecoilRoot>
  )
}

export default Index

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Index.getInitialProps = async (ctx: NextPageContext) => {
  return {
    namespacesRequired: includeDefaultNamespaces([]),
  }
}
