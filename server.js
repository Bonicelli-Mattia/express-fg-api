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
        if (JSON.stringify(data[i].name) === target) {
          match = (data[i]);
          res.status(200);
          res.send(match);
        }
      }
      res.status(400).end();
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
      res.status(200);
      res.send(name + ' added');
    });

    app.patch("/characters/:name"), async (req, res) => {
      const { name } = req.body.name
      const { attribute } = req.body.attribute
      const { newValue } = req.body.newValue

      await knex('characters').where({ name: name}).update({ attribute: newValue })

      return res.status(202).end();
    }

    app.delete("/characters/:name"), async (req, res) => {
      const { target } = req.body.name
      
      for (let i = 0; i < data.length - 1; i ++) {
        if (JSON.stringify(data[i].name) === target) {
          
          await knex('characters').where({name: name}).del();
          res.status(200).end();
        }
      }
      res.status(400).end();
  }


    return app;
}

server();

module.exports = { server }