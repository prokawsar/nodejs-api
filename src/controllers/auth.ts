import { RequestHandler } from 'express'
import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { createUser, getUserByEmail } from '../queries/insert'
import { InsertUser } from '../schemas/users'

export class Auth {
  login: RequestHandler = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password are required' })
    }

    const user = await getUserByEmail(email)

    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }

    const isMatch = await compare(password, user[0].password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' })
    }
    // return jwt token
    const token = sign({ id: user[0].id }, process.env.JWT_SECRET as string)
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

    const user = await getUserByEmail(email)
    // register user
    if (user[0]) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashPassword = await hash(password, 10)

    const newUser = {
      name: req.body.name,
      age: req.body.age,
      email,
      password: hashPassword,
    }
    await createUser(newUser as InsertUser)
    res.json({
      data: { message: 'User created successfully' },
    })
  }

  logout: RequestHandler = (req, res) => {
    res.clearCookie('token')
    res.status(200).json({
      data: { message: 'Logout successful' },
    })
  }
}
