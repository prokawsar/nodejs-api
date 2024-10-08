import { RequestHandler } from 'express'
import users from '../data/users.json'

export class Admin {
  getAll: RequestHandler = (req, res) => {

    const usersWithoutPassword = users.map((user) => {
      const { password, ...userWithoutPassword } = user
      return userWithoutPassword
    })
    res.json({
      data: usersWithoutPassword,
    })
  }

  getOne: RequestHandler = (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id))
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    const { password, ...userWithoutPassword } = user
    res.json({
      data: userWithoutPassword,
    })
  }

  create: RequestHandler = (req, res) => {}

  put: RequestHandler = (req, res, next) => {}

  delete: RequestHandler = (req, res, next) => {}
}
