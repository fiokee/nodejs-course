const express = require('express');

const routers = express.Router();

routers.get('/', (req, res, next)=>{
    res.send('<h1>Hello People of Node</h1>');
});

module.exports = routers