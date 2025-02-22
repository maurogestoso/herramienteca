import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const toolsTable = sqliteTable("tools", {
  id: integer().primaryKey(),
  name: text().notNull(),
  description: text().notNull(),
});