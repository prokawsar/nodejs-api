import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const mongoDB = process.env.MONGODB_URL || ''

const dbconnect = await mongoose.connect(mongoDB)

const db = mongoose.connection

export default db
