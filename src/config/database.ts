import { Pool } from "pg";

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'alura-node',
    password: '1234'
})

export default pool;