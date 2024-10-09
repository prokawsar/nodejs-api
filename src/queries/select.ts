import { asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm'
import neon_db from '../config/neondb'
import { SelectUser, usersTable } from '../schemas/users'
import { postsTable } from '../schemas/posts'

export async function getUserById(id: SelectUser['id']): Promise<
  Array<{
    id: number
    name: string
    age: number
    email: string
  }>
> {
  return neon_db.select().from(usersTable).where(eq(usersTable.id, id))
}

export async function getAllUsers(): Promise<Array<SelectUser>> {
  return neon_db.select().from(usersTable)
}

export async function getUsersWithPostsCount(
  page = 1,
  pageSize = 5
): Promise<
  Array<{
    postsCount: number
    id: number
    name: string
    age: number
    email: string
  }>
> {
  return neon_db
    .select({
      ...getTableColumns(usersTable),
      postsCount: count(postsTable.id),
    })
    .from(usersTable)
    .leftJoin(postsTable, eq(usersTable.id, postsTable.userId))
    .groupBy(usersTable.id)
    .orderBy(asc(usersTable.id))
    .limit(pageSize)
    .offset((page - 1) * pageSize)
}

export async function getPostsForLast24Hours(
  page = 1,
  pageSize = 5
): Promise<
  Array<{
    id: number
    title: string
  }>
> {
  return neon_db
    .select({
      id: postsTable.id,
      title: postsTable.title,
    })
    .from(postsTable)
    .where(
      between(postsTable.createdAt, sql`now() - interval '1 day'`, sql`now()`)
    )
    .orderBy(asc(postsTable.title), asc(postsTable.id))
    .limit(pageSize)
    .offset((page - 1) * pageSize)
}
