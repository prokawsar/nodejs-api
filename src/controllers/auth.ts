import { RequestHandler } from 'express'
import users from '../data/users.json'
import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

export class Auth {
  login: RequestHandler = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password are required' })
    }

    const user = users.find((user) => user.email === email)

    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }

    const isMatch = await compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' })
    }
    // return jwt token
    const token = sign({ id: user.id }, process.env.JWT_SECRET as string)
    res.json({
      data: { token },
    })
  }

  register: RequestHandler = async (req, res) => {
    const { email, password } = req.body
    if (typeof req.body !== 'object') {
      return res.status(400).json({ message: 'Invalid request body' })
    }

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password are required' })
    }

    const user = users.find((user) => user.email === email)
    // register user
    if (user) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashPassword = await hash(password, 10)

    const newUser = {
      id: users.length + 1,
      email,
      password: hashPassword,
    }

    // users.push(newUser)

    res.json({
      data: newUser,
    })
  }

  logout: RequestHandler = (req, res) => {
    res.clearCookie('token')
    res.status(200).json({
      data: { message: 'Logout successful' },
    })
  }
}
