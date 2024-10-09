import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { usersTable } from './users'

export const ordersTable = pgTable('orders', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
})

export type InsertOrder = typeof ordersTable.$inferInsert
export type SelectOrder = typeof ordersTable.$inferSelect
