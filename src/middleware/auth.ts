import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'

const middlewares: {
  [key: string]: RequestHandler
} = {
  auth: (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
    // req.user = decoded
    console.log(decoded)
    next()
  },
}

export default middlewares
