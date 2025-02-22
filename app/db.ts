import { createClient } from "@libsql/client";
import "dotenv/config";

const client = createClient({
  url: process.env.DB_URL!,
  syncUrl: process.env.DB_SYNC_URL!,
  authToken: process.env.DB_AUTH_TOKEN!,
});

export default client;