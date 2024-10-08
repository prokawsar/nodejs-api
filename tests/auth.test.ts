import supertest from 'supertest'
import app from '../src/app'

const request = supertest(app)

describe('Authentication', () => {
  describe('POST /auth/login', () => {
    test('email and password are required', async () => {
      const response = await request.post('/auth/login').send({
        email: '',
        password: '',
      })
      expect(response.status).toBe(400)
      expect(response.body.message).toBe('Email and password are required')
    })
    test('should be able to login', async () => {
      const response = await request.post('/auth/login').send({
        email: 'test@gmail.com',
        password: '123456',
      })
      expect(response.status).toBe(200)
      expect(response.body.data.token).toBeDefined()
    })

    test('should not be able to login', async () => {
      const response = await request.post('/auth/login').send({
        email: 'test@gmail.com',
        password: '12121212',
      })
      expect(response.status).toBe(400)
      expect(response.body.message).toBe('Invalid password')
    })
  })
})
