const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();

// const { getAllProducts } = require("./controller/Ctrl");

const port = 4000;

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    // console.log(dbInstance);
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

// app.get("/api/product", getAllProducts);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
