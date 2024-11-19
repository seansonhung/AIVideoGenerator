import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
async function main() {
    const client = postgres(process.env.DATABASE_URL || 'default_database_url')
    const db = drizzle({ client });
}
main();