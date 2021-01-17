import { ITodo } from 'pages/api/todo'
import { atom, RecoilState, selector, selectorFamily } from 'recoil'
import axios from 'axios'

interface ITodoStore {
  todos: RecoilState<ITodo[]>
}

export const newTodo = selector<string>({
  key: 'newTodo',
  get() {
    return ''
  },
  async set({ reset }, message) {
    const body = new FormData()
    body.set('message', message as string)

    await axios
      .post('/api/todo', {
        message,
      })
      .then(() => reset(newTodo))

    // fetch api로 post하기 실패
    // try {
    //   await fetch(`/api/todo`, {
    //     method: 'POST',
    //     body
    //   }).then(function(res) {
    //     if (res.status === 404) {
    //       throw new Error('통신에러 발생')
    //     }
    //
    //     return res.json()
    //   })
    // } catch (e) {
    //   console.error(e)
    // } finally {
    //   reset(newTodo)
    // }
  },
})

export const todos = selector<ITodo[]>({
  key: 'todos',
  get: async () => {
    return await fetch(`/api/todo`).then((res) => res.json())
  },
  set: ({ set }, newTodos) => {
    set(todos, newTodos)
  },
})

export const todo = selectorFamily<ITodo, string>({
  key: 'todo',
  get: (id: string) => async () => {
    return await fetch(`/api/todo?id=${id}`).then((res) => res.json())
  },
  set: (id: string) => async ({ get, set }, newTodo) => {
    const list = get(todos)
    const newTodos = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          ...newTodo,
        }
      }
    })
    set(todos, newTodos)
  },
})

export const todoStore = atom<ITodoStore>({
  key: 'todoStore',
  default: {
    todos,
  },
})
