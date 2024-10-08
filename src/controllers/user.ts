import { RequestHandler } from 'express'
import users from '../data/users.json'

export class User {
  getAll: RequestHandler = (req, res) => {
    res.json({
      data: users,
    })
  }

  getOne: RequestHandler = (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id))
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.json({
      data: user,
    })
  }

  create: RequestHandler = (req, res) => {}

  put: RequestHandler = (req, res, next) => {}

  delete: RequestHandler = (req, res, next) => {}
}
