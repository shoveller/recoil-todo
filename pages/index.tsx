import { NextPageContext } from 'next'
import { newTodo, todos } from 'repository/TODO'
import { includeDefaultNamespaces } from 'utils/i18n'
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil'
import React, { ReactNode, useCallback } from 'react'
import { Suspense } from 'react'
import { test } from 'utils/test'

const Table = () => {
  const list = useRecoilValue(todos)

  return (
    <ul>
      {list.map((item, index) => {
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

const Form = (props: { children: ReactNode }) => {
  const setTodo = useSetRecoilState(newTodo)
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      const message = e.target.elements.message.value
      await setTodo(message)
      // TODO: 이 다음에 값을 불러와야 하는데, 방법을 모르겠다.
    },
    [setTodo]
  )

  return <form onSubmit={onSubmit}>{props.children}</form>
}

const Index = () => {
  const [value] = useRecoilState(test)
  // eslint-disable-next-line no-console
  console.log(value)

  return (
    <RecoilRoot>
      <div className="container">
        <Form>
          <input type="text" name="message" />
          <RenderBrowserOnly>
            <Suspense fallback={<h4>로딩중...</h4>}>
              <Table />
            </Suspense>
          </RenderBrowserOnly>
        </Form>
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
