const { parse } = require('csv-parse')
const fs = require('fs')
const path = require('path')

// const results = []
const habitablePlanets = []

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
      && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
      && planet['koi_prad'] < 1.6
}

// new Promise((resolve, reject), () => {
//     resolve(42)
// })
// Promise.then((result => {}))
// await promise

function loadPlanetsData() {
    //chaining of different handlers
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'keplerData.csv'))
        .pipe(parse({
            comment: '#',
            columns: true,
        }))
        .on('data', (data) => {
        //   results.push(data)
        if (isHabitablePlanet(data)) {
            habitablePlanets.push(data)
        }
        })
        .on('error', (err) => {
            console.log(err)
            reject(err)
        })
        .on('end', () => {
        //   console.log(results)
            console.log(`${habitablePlanets.length} habitable planets found!`)
            console.log('done')
            resolve()
        })
    })
}


module.exports = {
    loadPlanetsData,
    planets: habitablePlanets,
}
