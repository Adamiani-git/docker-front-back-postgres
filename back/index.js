const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/some", async (req, res) => {
  const response = await db.query("select * from users order by id");
  res.json(response.rows);
});

app.post("/some", async (req, res) => {
  const postUser = [req.body.name];

  try {
    await db.query("insert into users (name) values  ($1)", postUser);
    res.sendStatus(res.statusCode);
  } catch (error) {
    res.send(error.code);
  }
});
app.put("/some/:id", async (req, res) => {
  const putUser = [req.body.name];


  try {
    
     await db.query(
        `update users set name=$1 where id=${req.params.id}`,
        putUser
      )
      res.sendStatus(res.statusCode)
   
  } catch (error) {
    res.send(error.code)
  }
 
});

app.listen(5000, () => console.log("OK"));
