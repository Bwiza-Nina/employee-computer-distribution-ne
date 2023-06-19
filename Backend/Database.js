const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({path: './.env'})

const pool = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
module.exports = {
    DatabaseConnection(){
    return new Promise(function (resolve, reject){
        pool.DatabaseConnection().then(function(conn){
            resolve(conn);
            console.log('Connected to the database successfully');
        })
        .catch(function(error){
            reject(error);
            console.log('Error connecting to the database: ',error);
        })
    })
  }
}