
import { integer, sqliteTable, float8, date } from "drizzle-orm/sqlite-core";

export const rainHistory = sqliteTable("rain_history", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  volume: float8("volume"),
  date: date("email"),
});

