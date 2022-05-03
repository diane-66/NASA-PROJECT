const express = require('express')

//destructuring
const {
    httpGetAllPlanets,
} = require('./planets.controller')

const planetsRouter = express.Router()

planetsRouter.get('/', httpGetAllPlanets)

module.exports = planetsRouter