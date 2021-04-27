require('dotenv').config();
​
const knex = require('knex');
​
const knexfile = require('../knexfile')
​
​
const env = 'development';
const config = knexfile[env];
​
module.exports = knex(config)