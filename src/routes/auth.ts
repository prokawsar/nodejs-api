import express from 'express'
import { Auth } from '../controllers/auth'
const router = express.Router()

const auth_controller = new Auth()

router.post('/login', auth_controller.login)
router.post('/register', auth_controller.register)
router.get('/logout', auth_controller.logout)

export default router
