const express = require('express');
const knex = require('knex');

const router = express.Router()

router.get('/', (req, res) => {
    res.json('<h1>code away</h1>')
})

module.exports = router;