import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

let mongoDB = process.env.MONGODB_URL || ''

const dbconnect = await mongoose.connect(mongoDB)

mongoose.Promise = global.Promise
const db = mongoose.connection

export default db
