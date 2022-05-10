const mongoose = require('mongoose')

const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
    },
    launchDate: {
        type: Date,
        required: true,
    }, 
    mission: {
        type: String,
        required: true,
    },
    rocket: {
        type: String,
        required: true,
    },
    //monggose.ObjectId nakes our life more difficult because we should add code for joining databases (to make SQL)
    // target: {
    //     type: mongoose.ObjectId,
    //     ref: 'Planet'
    // }
    //prefer the NoSQL approach:
    target: {
        type: String,
        required: true,
    },
    customers: [ String ],
    upcoming: {
        type: Boolean,
        required: true,
    },
    success: {
        type: Boolean,
        required: true,
        default: true,
    }
})

// Connects launchesSchema with the "launches" collection
module.exports = mongoose.model('Launch', launchesSchema)