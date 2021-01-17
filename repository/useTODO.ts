import { ITodo } from 'pages/api/todo'
import { selector } from 'recoil'

export const todoState = selector<ITodo[]>({
  key: 'todoState',
  get: async () => {
    const res = await fetch(`/api/todo`)

    return res.json()
  },
})
