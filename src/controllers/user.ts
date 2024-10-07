import { RequestHandler } from 'express'

//Simple version, without validation or sanitation
export class User {
  getAll: RequestHandler = (req, res) => {
    res.json({
      data: [
        { name: 'Kawsar', age: 2 },
        { name: 'Test', age: 22 },
        { name: 'Khalid', age: 21 },
        { name: 'Temp', age: 23 },
      ],
    })
  }

  getOne: RequestHandler = (req, res) => {
    res.json({
      data: { name: 'Kawsar', age: 22 },
    })
  }

  create: RequestHandler = (req, res) => {}

  put: RequestHandler = (req, res, next) => {}

  delete: RequestHandler = (req, res, next) => {}
}
