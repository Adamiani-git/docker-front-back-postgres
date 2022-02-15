const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "123",
    host: "localhost",      //dev
    // host: "postgres-db", //docker
    port: 5432,
    database: "postgres",
})

// pool.connect()

// pool.query('select * from users', (err, res) => {
//     if (!err) {
//         console.log(res.rows);
//     } else {
//         console.log(err.message);
//     }
// })

module.exports = pool
