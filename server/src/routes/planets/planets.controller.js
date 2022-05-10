const { getAllPlanets } = require('../../models/planets.model')

async function httpGetAllPlanets (req, res) {
    //express returns the status code anyway but just for clarity
    // return prevents unexpencted code: the more readable is your code, the more easier it is to debug, etc...
    return res.status(200).json(await getAllPlanets())
}


//export as an object beacause the're going to be multiple fct that might be returned by our controller.
module.exports = {
    httpGetAllPlanets,
}