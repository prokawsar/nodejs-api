import type { Express } from 'express'
import user from './user.ts'

export default (app: Express) => {
  app.use('/user', user)
  //more endpoints goes here
}