const { parse } = require('csv-parse')
const fs = require('fs')
const path = require('path')

const planets = require('./planets.mongo')

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
      && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
      && planet['koi_prad'] < 1.6
}

function loadPlanetsData() {
    //chaining of different handlers
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'keplerData.csv'))
        .pipe(parse({
            comment: '#',
            columns: true,
        }))
        .on('data', async (data) => { 
        if (isHabitablePlanet(data)) {
            savePlanet(data)
        }
        })
        .on('error', (err) => {
            console.log(err)
            reject(err)
        })
        .on('end', async () => {
            const countPlanetsFound = (await getAllPlanets()).length
            console.log(`${countPlanetsFound} habitable planets found!`)
            resolve()
        })
    })
}

async function getAllPlanets() {
    //we're passing a second argument to filter properties:  
    return await planets.find({}, {
        '_id': 0, '__v': 0,
    })
}

async function savePlanet(planet) {
    try {
        // Replace below create with insert + update = upsert
        // await planets.create({
        //     keplerName: data.kepler_name,
        // })
        await planets.updateOne({
            keplerName: planet.kepler_name,
        }, {
            keplerName: planet.kepler_name
        }, {
            upsert: true,
        })
    } catch(err) {
        console.error(`Could not save planet ${err}`)
    }
}


module.exports = {
    loadPlanetsData,
    getAllPlanets,
}
