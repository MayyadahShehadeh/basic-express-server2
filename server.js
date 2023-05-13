'use strict';

const express = require('express');
const app = express();
const logger = require('./src/middleware/logger');
const errorHandler = require('./src/error-handlers/505');
const notFound = require('./src/error-handlers/404');
const validator = require('./src/middleware/validator');

// ----- MIDDLEWARES ----
app.use(logger);
// app.use(validator);

// ----- ROUTES ------
app.get('/', (req,res) =>{
    res.send('home route');
})

// localhost:3000/person?name=mayadah
app.get('/person',validator, (req,res) =>{
    res.send({
        name: req.query.name
    }); 
})


app.use('*',notFound);
app.use(errorHandler);

function start(port){
    app.listen(port, () =>{
        console.log(`listening on ${port}`);
    })
}

module.exports={
    app:app,
    start:start,
}