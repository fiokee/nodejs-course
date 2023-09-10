const http = require('http');

// const routes = require('./routes')

const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('next middleware');
    next(); //this allows request to continue to the next middleware in line
});

app.use((req, res, next)=>{
    console.log('another middleware')
    res.send('<h1>Hello People of Node</h1>')
})
const server = http.createServer(app)

server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})


