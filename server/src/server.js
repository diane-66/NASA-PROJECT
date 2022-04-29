// //import express
// const express = require('express')

// //set up express
// const app = express()
// // call app.listen on that express object
// app.listen()

const http = require('http')

const app = require('./app')

//destructuring data
const { loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 8000

const server = http.createServer(app)

async function startServer() {
    await loadPlanetsData()
    server.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`)
    })
}

startServer()



