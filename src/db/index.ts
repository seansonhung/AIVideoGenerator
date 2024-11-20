import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// Initialize the database connection
const client = postgres(process.env.DATABASE_URL || 'default_database_url');
export const db = drizzle(client);