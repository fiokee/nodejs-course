const express = require('express');
const path = require('path');
const routers = express.Router();

//storing the data that we are getting from our add-products
const products = [];

routers.get('/add-products',(req, res, next)=>{
    console.log('another middleware');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// redirecting to a different route
routers.post('/add-products',(req, res, next)=>{
    products.push({ title: req.body.title})
    res.redirect('/');
});

exports.routes = routers
exports.products = products