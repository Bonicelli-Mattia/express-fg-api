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
      res.status(200);
      res.send(allChars);
    });

    app.get("/characters/:name", async (req, res) => {
      const { target } = req.params.name
      let match = {}
      
      const data = await knex.select().table('characters');
      
      for (let i = 0; i <data.length; i ++) {
        if (data[i].name === target) {
          console.log(data[i])
          match = data[i];
          res.status(202);
          res.send(match);
        }
      }
      res.status(400).end();
    });

    app.post("/characters", async (req, res) => {
      const { name } = req.params.name;
      const { height } = req.params.height;
      const { weight } = req.params.weight;
      const { style } = req.params.style;
      const { firstAppearance } = req.params.firstAppearance;
      const { occupation } = req.params.occupation;
      const { rival } = req.params.rival;

      knex('characters').insert({
        name: name,
        height: height,
        weight: weight,
        style: style,
        firstAppearance: firstAppearance,
        occupation: occupation,
        rival: rival
      })
      res.status(200);
      res.send(name + ' added');
    });

    app.patch("/characters/:name"), async (req, res) => {
      const { name } = req.params.name
      const { newValue } = req.params.newValue

      await knex('characters').where({ name: name}).update({ name: newValue})

      return res.status(202).end();
    }

    app.delete("/characters/:name"), async (req, res) => {
      const { target } = req.params.name

      const data = await knex.select().table('characters');
      
      for (let i = 0; i < data.length - 1; i ++) {
        if (data[i].name === target) {
          
          await knex('characters').where({name: target}).del();
          res.status(200).end();
        }
      }
      res.status(400).end();
  }


    return app;
}

server();

module.exports = { server }