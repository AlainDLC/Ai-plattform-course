import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./configs/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_gVGiJBca5H6v@ep-jolly-scene-a91ey6xg-pooler.gwc.azure.neon.tech/neondb?sslmode=require",
  },
});
