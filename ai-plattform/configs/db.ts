import { drizzle } from "drizzle-orm/neon-http";

export const db = drizzle(
  "postgresql://neondb_owner:npg_gVGiJBca5H6v@ep-jolly-scene-a91ey6xg-pooler.gwc.azure.neon.tech/neondb?sslmode=require"
);
