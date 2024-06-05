// Importing necessary modules from 'mysql2'
import mysql, { createConnection, Connection } from 'mysql2';

// Creating a MySQL connection using createConnection function
export const db: Connection = createConnection({
  
    host: 'localhost',       
    user: 'root',            
    password: '1234',
    database: 'sampleJwt'
});
