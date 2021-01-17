// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

let repo: ITodo[] = [
  {
    id: '1',
    message: '야호',
    createdAt: new Date(),
  },
]

export interface ITodo {
  id: string
  message: string
  createdAt: Date
  modifiedAt?: Date
  deletedAt?: Date
}

const todo = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'POST') {
    if (!req.body?.message) {
      res.status(404).json({ message: 'need message' })

      return
    }
    const id = `${new Date().getTime()}`
    const newTodo = {
      id,
      message: req.body.message,
      createdAt: new Date(),
    }
    repo.push(newTodo)
    res.status(201).json(newTodo)

    return
  }

  if (req.method === 'GET' && req.query.id) {
    const todo = repo.find((item) => item.id === req.query.id)
    if (!todo) {
      res.status(404).json({ message: 'record not found' })

      return
    }

    res.status(200).json(todo)
  }

  if (req.method === 'GET') {
    const todos = repo.filter((item) => !item.deletedAt)

    res.status(200).json(todos)
  }

  if (req.method === 'DELETE') {
    repo = repo.map((item) => {
      if (item.id === req.query.id) {
        return {
          ...item,
          deletedAt: new Date(),
        }
      }

      return item
    })
    res.status(200).json({ message: 'succeed' })
  }

  if (req.method === 'PUT') {
    if (!req.body?.message || !req.query?.id) {
      res.status(404).json({ message: 'need message' })

      return
    }
    repo = repo.map((item) => {
      if (item.id === req.query.id) {
        return {
          ...item,
          message: req.body.message,
          modifiedAt: new Date(),
        }
      }

      return item
    })
    res.status(200).json(repo.find((item) => item.id === req.query.id))

    return
  }
}

export default todo
