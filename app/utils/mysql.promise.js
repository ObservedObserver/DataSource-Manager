const mysql = require('mysql')

function mysqlQuery ({config, sql}) {
 return new Promise((resolve, reject) => {
    let connection = mysql.createConnection(config)
    connection.connect((err) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, (err, result) => {
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
          connection.end()
        })
      }
    })
  })
}

module.exports = mysqlQuery;

// mysqlQuery({
//   config: {
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: ''
//   },
//   sql: 'SHOW DATABASES;'
// }).then((result) => {
//   console.log(result)
// }).catch(err => {
//   console.log(err)
// })