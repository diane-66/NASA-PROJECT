const API_URL = 'http://localhost:8000'

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  //We're filling in the functionality to get our planets using the fetch fct that's built into our browser (fetch is a method of the global object).
  //it returns a promise so we need to await it (the fct is already async)
  const response =  await fetch(`${API_URL}/planets`)
  return await response.json()
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`)
  const fetchedLaunches =  await response.json()
  return fetchedLaunches.sort((a,b) => {
    return a.flightNumber - b.flightNumer
  })
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try{
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      headers: {
          "content-type": "application/json",
      },
      body: JSON.stringify(launch),
    })
  } catch(err) {
    console.log(err)
    return {
      ok: false,
    }
  }
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try{
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    })
  } catch(err) {
    console.log(err)
    return {
      ok: false,
    }
  }
}
  


export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};