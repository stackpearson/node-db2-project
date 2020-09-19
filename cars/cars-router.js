const express = require('express');
const knex = require('knex');

const db = require('../data/db-config.js');

const router = express.Router()

router.get('/', (req, res) => {
    db('cars')
    .then(car => {
        res.json(car)
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;