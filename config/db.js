const { createPool } = require('mysql')

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "sa201275351",
    port: 3306,
    database: "data"
});

pool.getConnection((err) => {
    if (err) {
        console.log('Error connecting to DB');
    }
    console.log('Connected to DB successfully');
});

module.exports = pool; 