import { RequestHandler } from 'express'

const middlewares: {
  [key: string]: RequestHandler
} = {
  successHandler: (req, res, next) => {
    res.json({
      message: 'SUCCESS',
    })
    next()
  },
  noRouteHandler: (req, res, next) => {
    const error = new Error('Not Found')
    next(error)
  },

  errorHandler: (req, res, next) => {
    next()
  },
  logger: (req, res, next) => {
    console.log(
      `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    )
    next()
  },
}

export default middlewares
