const express = require('express');
const path = require('path');

const adminData = require('./admin');

const routers = express.Router();

routers.get('/', (req, res, next)=>{
    // console.log(adminData.products);
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

    res.render('shop');
});

module.exports = routers