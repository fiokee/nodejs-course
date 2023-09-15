const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoute = require('./router/admin');
const shopRoute = require('./router/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoute);
app.use(shopRoute);

app.use((req, res, next)=>{
   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});


