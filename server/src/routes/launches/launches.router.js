const express = require('express')

//destructuring
const {
    getAllLaunches,
} = require('./launches.controller')

const launchesRouter = express.Router()

launchesRouter.get('/launches', getAllLaunches)

module.exports = launchesRouter