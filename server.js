require('dotenv').config()
const knexConf = require("./knexfile");
const knex = require("knex")(knexConf);



const express = require("express");

const server = () => {
    const app = express();
  
    const PORT = 9999;
    app.listen(PORT, () => {
      console.log(`Server up at ${PORT}`);
    });

    app.use(express.json());

    app.get("/test", (req, res) => {
      res.send("IT WORKS!")
    });

    app.get("/characters", async (req, res) => {
      const allChars = await knex.select().from('characters');
      res.json(allChars);
    });

    app.get("/characters/:name", async (req, res) => {
      const { charName } = req.params.name;
      const match = await knex.select().from('characters').where({ name: charName })
      res.json(match);
      res.end();
    });

    app.post("/characters/:name", async (req, res) => {
      const { name } = req.body.name;
      const { height } = req.body.height;
      const { weight } = req.body.weight;
      const { style } = req.body.style;
      const { firstAppearance } = req.body.firstAppearance;
      const { occupation } = req.body.occupation;
      const { rival } = req.body.rival;

      knex('characters').insert({
        name: name,
        height: height,
        weight: weight,
        style: style,
        firstAppearance: firstAppearance,
        occupation: occupation,
        rival: rival
      })
      res.send(name + ' added');
    });


    return app;
}

server();

module.exports = { server }