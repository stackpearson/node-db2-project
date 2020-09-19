const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../cars/cars-router.js')

const server = express();

server.use(helmet());
server.use(express.json());

// server.get('/', (req, res) => {
//     res.json('<h1>code away</h1>')
// })
server.use('/api/cars', carsRouter)

module.exports = server;