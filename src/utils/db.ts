import mysql from 'mysql2/promise';

const DB_HOST = process.env.DB_HOST || import.meta.env.DB_HOST || 'localhost';
const DB_PORT = parseInt(process.env.DB_PORT || import.meta.env.DB_PORT || '3306');
const DB_USER = process.env.DB_USER || import.meta.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || import.meta.env.DB_PASSWORD || '';
const DB_DATABASE = process.env.DB_DATABASE || import.meta.env.DB_DATABASE || 'procleaning_db';

let pool: mysql.Pool | null = null;

try {
  pool = mysql.createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  });
} catch (error) {
  console.error('❌ Failed to create MySQL pool:', error);
}

export async function query<T = any>(sql: string, params: any[] = []): Promise<T> {
  if (!pool) {
    throw new Error('Database pool is not initialized');
  }
  try {
    const [results] = await pool.execute(sql, params);
    return results as T;
  } catch (error: any) {
    console.error(`❌ Database query error (SQL: "${sql}"):`, error.message);
    throw error;
  }
}

export async function checkConnection(): Promise<boolean> {
  if (!pool) return false;
  try {
    const conn = await pool.getConnection();
    conn.release();
    return true;
  } catch (error) {
    console.warn('⚠️ MySQL Connection failed. Make sure your local XAMPP MySQL is running.');
    return false;
  }
}

export default pool;
