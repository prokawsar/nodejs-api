import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: '.env' })

export default defineConfig({
  schema: './src/schemas/*.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEON_DATABASE_URL!,
  },
})
