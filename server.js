'use strict';

const { request, response } = require('express');
// Make a variable called express to use express library : // 1st step
const express = require('express'); //npm install express (So we install express by this command in terminal)


// Make server has all express properties and method : // 2nd step
const server = express(); // A. make a variable = express 

const PORT = process.env.PORT || 3030; // B. why ? ////////////////////////////////////////asking


// To access an file in public directory : // 3rd step 
server.use(express.static('./public'));


// Route definitions  // 4th step
// Localhost: 3030/ 
server.get('/', (req,res) =>{
    res.send('home route')
})


// Localhost:3030/test ------>http request (/test ------>Route)  // 5th step (for testing)
server.get('/test', (request,response) =>{
    response.send('your server is a live!!')
})


//// Just for remember :
//// Localhost:3030/location?city=amman 
//// Request (localhost:3030/location)
//// Route(/location)
//// City=amman (request query parameters)


// Localhost:3030/data ------>http request (/data ------>Route)  // 
// server.get('/data',(req,res) =>{
//     let userName = [
//         {firstName: 'Farah'},
//         {lastName: 'Wahaibi'},

//         // res.send(userName)
//         res.json(userName);
// })


// Make the server ready for listening : // 7th step 
server.listen (PORT,() =>{
    console.log(`listening on PORT ${PORT}`);
})



/// Use these command for run and stop server ///
// To run the server :
  // use (npm start || node server.js)

// To stop the server :
  // use (ctrl+c)





