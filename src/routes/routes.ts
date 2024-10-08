import type { Express } from 'express'
import user from './user'
import admin from './admin'
import auth_middleware from '../middleware/auth'
import auth from './auth'

export default (app: Express) => {
  app.use('/auth', auth)
  app.use('/user', user)
  app.use('/admin', auth_middleware.auth, admin)
  //more endpoints goes here
}
