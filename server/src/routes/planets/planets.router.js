const express = require('express')

//destructuring
const {
    getAllPlanets,
} = require('./planets.controller')

const planetsRouter = express.Router()

planetsRouter.get('/planets', getAllPlanets)

module.exports = planetsRouter