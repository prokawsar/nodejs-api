import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import dotenv from 'dotenv'

dotenv.config()

const neon_sql = neon(process.env.NEON_DATABASE_URL as string)
const neon_db = drizzle(neon_sql)

console.log('Successfully connected to Neon DB!')

export default neon_db
