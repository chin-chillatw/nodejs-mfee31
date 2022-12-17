//install mysql2

const mysql = require('mysql2/promise');

(async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: '56789',
        database: 'stock_mfee31'
    });
    try{
        let data = await connection.query( 'SELECT * FROM `stocks`');
        console.log(data)
    }catch(e){
        console.error(e)
    }
    connection.end();
})();
