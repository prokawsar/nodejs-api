import express from 'express'

const router = express.Router()
const user_controller = require('../controllers/user')

router.get('/', user_controller.getAll)
router.post('/', user_controller.create)
router.get('/:id', user_controller.getOne)
router.put('/:id', user_controller.put)
router.delete('/:id', user_controller.delete)

export default router
