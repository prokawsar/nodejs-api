import { eq } from 'drizzle-orm'
import { SelectUser, usersTable } from '../schemas/users'
import neon_db from '../config/neondb'

export async function deleteUser(id: SelectUser['id']) {
  await neon_db.delete(usersTable).where(eq(usersTable.id, id))
}
