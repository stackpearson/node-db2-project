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

router.get('/:id', (req, res) => {
    const {id} = req.params;

    db('cars').where({id}).first()
    .then(car => {
        res.json(car);
    })
    .catch(err => {
        res.status(500).json({message: 'cannot retrieve car'})
    })
})

router.post('/', (req, res) => {
    const carInfo = req.body;

    db('cars').insert(carInfo)
    .then(ids => {
        db('cars').where({ id: ids[0] })
        .then(newCarEntry => {
            res.status(201).json(newCarEntry);
        });
    })
    .catch(err => {
        res.status(500).json({message: 'cannot save car'})
    })
})
module.exports = router;