require('dotenv').config()

const express = require("express");
const { knex } = require("./knexfile");

const server = () => {
    const app = express();
  
    const PORT = 9999;
    app.listen(PORT, () => {
      console.log(`Server up at ${PORT}`);
    });

    app.use(express.json());

    app.get("/test", (req, res) => {
      res.send("Sup G")
    });

    app.get("/test", (req, res) => {
      res.send("Sup G")
    });


    return app;
}

server();

module.exports = { server }