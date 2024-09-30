import express from 'express'
import { User } from '../controllers/user.ts'
const router = express.Router()
const user_controller = new User()

router.get('/', user_controller.getAll)
router.post('/', user_controller.create)
router.get('/:id', user_controller.getOne)
router.put('/:id', user_controller.put)
router.delete('/:id', user_controller.delete)

export default router
