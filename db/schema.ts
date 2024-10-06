
import { integer, sqliteTable, real, text } from "drizzle-orm/sqlite-core";

export const farm = sqliteTable("farm", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
});

export const rainHistory = sqliteTable("rain_history", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  farmId: integer("farm_id").references(() => farm.id),
  volume: real("volume"),
  date: text("date"),
});

