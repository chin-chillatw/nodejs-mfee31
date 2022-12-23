//install mysql2

const mysql = require('mysql2/promise');
let dotenv = require('dotenv');
dotenv.config();

(async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB
    });
    try{
        let data = await connection.query( 'SELECT * FROM `stocks`');
        console.log(data)
    }catch(e){
        console.error(e)
    }
    connection.end();
})();
