const { createPool } = require('mysql');
const { resolve } = require('styled-jsx/css');

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

const executeQuery = (query, arraParms) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, arraParms, (err, data) => {
                if (err) {
                    console.log("error in executing the query");
                    reject(err)
                }
                resolve(data)
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = { executeQuery }; 