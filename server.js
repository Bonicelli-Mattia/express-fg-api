const express = require("express");
const { knex } = require("./knex");

const server = () => {
    const app = express();
  
    const PORT = 9999;
    app.listen(PORT, () => {
      console.log(`Server up at ${PORT}`);
    });

    app.use(express.json());

    app.get("/test", (req, res) => {
      res.status(200);
      res.end();
    });


    return app;
}

server();

module.exports = { server }