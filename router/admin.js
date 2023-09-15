const express = require('express');

const routers = express.Router();

routers.get('/add-products',(req, res, next)=>{
    console.log('another middleware');
    res.send('<body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>');
});

// redirecting to a different route
routers.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = routers