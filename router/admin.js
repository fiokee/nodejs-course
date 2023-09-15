const express = require('express');
const path = require('path');
const routers = express.Router();

routers.get('/add-products',(req, res, next)=>{
    console.log('another middleware');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// redirecting to a different route
routers.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = routers