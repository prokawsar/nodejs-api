import { InsertUser, usersTable } from '../schemas/users'
import { InsertOrder, ordersTable } from '../schemas/orders'
import { InsertPost, postsTable } from '../schemas/posts'
import neon_db from '../config/neondb'
import { eq } from 'drizzle-orm'

export async function createUser(data: InsertUser) {
  await neon_db.insert(usersTable).values(data)
}

export async function createPost(data: InsertPost) {
  await neon_db.insert(postsTable).values(data)
}

export async function createOrder(data: InsertOrder) {
  await neon_db.insert(ordersTable).values(data)
}

export async function getUserByEmail(email: string) {
  const user = await neon_db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email))
  return user
}
