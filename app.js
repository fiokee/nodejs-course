const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//handling different routes

app.use(bodyParser.urlencoded({extended: false}));
// A route returning a form
app.use('/add-products',(req, res, next)=>{
    console.log('another middleware');
    res.send('<body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>');
});

// redirecting to a different route
app.use('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});
app.use('/', (req, res, next)=>{
    console.log('another middleware');
    res.send('<h1>Hello People of Node</h1>');
});
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});


