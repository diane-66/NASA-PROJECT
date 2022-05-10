// //import express
// const express = require('express')

// //set up express
// const app = express()
// // call app.listen on that express object
// app.listen()
require('dotenv').config()

const http = require('http')
//most used node package for using mongoDB: a way to connecting to mongoDB, with advanced querying features & features to create models for our data that follows schemas.
const mongoose = require('mongoose')

const app = require('./app')

//destructuring data
const { loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 8000

const MONGO_URL = process.env.DATABASE_URI

const server = http.createServer(app)

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!')
})

mongoose.connection.on('error', (err) => {
    console.error(err)
})

async function startServer() {
    mongoose.connect(MONGO_URL)
    await loadPlanetsData()

    server.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`)
    })
}

startServer()

