import { neon } from '@neondatabase/serverless'
import dotenv from 'dotenv'

dotenv.config()

const neon_sql = neon(process.env.NEON_DATABASE_URL as string)

export default neon_sql
