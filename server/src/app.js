const path = require('path')
const express = require('express')
const cors = require('cors')
//logging middleware: redirect logs, log rotation
const morgan = require('morgan')

const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')

const app = express()
//using middleware, here is the middleware chain:
// cross origin request : allow the request of a specific origin (otherwise it is blocked); cors() is a fct that return the cross middleware
app.use(cors({
    origin: 'http://localhost:3000',
}))
//redirect our logs to streams like files or some log service
app.use(morgan('combined'))

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use('/planets', planetsRouter)
app.use('/launches',launchesRouter)

//in deployment, it cannot find the routes defined in React, so we need to add this endpoint:
app.get("/*", (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app