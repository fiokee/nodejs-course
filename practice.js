const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/products',(req, res, next)=>{
res.send('<html><body><form action="/product" method="POST"><input  type="text" name="title"><button type="submit">submit</button></form></body></html>')
});

app.use('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use((req, res, next)=>{
    res.send('<h1>Hello shazam</h1>')
})

app.listen(3000, ()=>{
    console.log("server runing on port 3000")
})