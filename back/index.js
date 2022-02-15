const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db');

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  )
app.use(express.json());
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.send('ok')
})

app.get('/some', async (req, res) => {
   const response = await db.query('select * from users order by id')
    res.json(response.rows)
    console.log(response.rows);
})


app.post('/some', async (req, res) => {

    try {
     await db.query('insert into users (name) values  ($1)', req.body )
        res.json('ok')
    } catch (error) {
        res.json(error.message)
    }
         
 
})
app.put('/some:id', (req, res) => {
    console.log(req.params)

    db.query(`update users set name=$1 where id=${req.params}`, Object.values(req.body )  )
   
        res.json()
 
})

app.listen(5000, () => console.log('OK'))