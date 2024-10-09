import { RequestHandler } from 'express'
import { getAllUsers, getUserById } from '../queries/select'
// import users from '../data/users.json'
export class User {
  getAll: RequestHandler = async (req, res) => {
    res.json({
      data: await getAllUsers(),
    })
  }

  getOne: RequestHandler = async (req, res) => {
    const user = await getUserById(parseInt(req.params.id))
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.json({
      data: user,
    })
  }

  create: RequestHandler = async (req, res) => {
    // const newUser: InsertUser = {
    //   name: req.body.name,
    //   age: req.body.age,
    //   email: req.body.email,
    //   password: req.body.password,
    // }
    // await createUser(newUser)
    // res.json({
    //   data: newUser,
    // })
  }

  put: RequestHandler = (req, res, next) => {}

  delete: RequestHandler = (req, res, next) => {}
}
