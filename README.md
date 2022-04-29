# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm run watch` in the root of the project

Runs the app in the development mode.\
runs both client and server in watch mode in 2 different ports.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
The client is served from our API.

We are only logging whats coming into the server.
Only server request.

### `npm run deploy` in the root of the project

runs the app in the production mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

It uses expresse static files. The client is built in the server and it runs client & server from one port: 8000.
The frontend is served from our API as well.
Frontend requests are mixed in with the API requests