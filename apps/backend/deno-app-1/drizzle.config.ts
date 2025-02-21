import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/database/migrations",
  schema: "./src/database/schema/task-schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://postgres:Master@123@localhost:5432/mercyHealthLocal',
  },
});