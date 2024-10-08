import express from 'express'
import { Admin } from '../controllers/admin'
const router = express.Router()
const admin_controller = new Admin()

router.get('/', admin_controller.getAll)
router.post('/', admin_controller.create)
router.get('/:id', admin_controller.getOne)
router.put('/:id', admin_controller.put)
router.delete('/:id', admin_controller.delete)

export default router
