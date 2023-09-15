const express = require('express');
const path = require('path')

const routers = express.Router();

routers.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = routers