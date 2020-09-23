const knex = require('knex');

const config = require('../knexfile.js');

const db = knex(config.development);
//setting this up here allows us to remove it from our router

module.exports = db;