// src/lib/db.ts
import mysql from 'mysql2/promise';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Barkley25',
    database: 'sport_tracker', 
};

export async function connectToDatabase() {
    const connection = await mysql.createConnection(dbConfig);
    return connection;
}
