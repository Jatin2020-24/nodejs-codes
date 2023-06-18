const http = require('http');
const express = require('express');
const reqFilter = require('./middleware');
const app = express();

const route = express.Router();

// app.use(reqFilter);

route.use(reqFilter);

app.get('', reqFilter, (req, res)=>{
    res.send('Welcome to Home Page');
});

app.get('/users', reqFilter, (req, res)=>{
    res.send('Users Page');
});

route.get('/about', (req, res)=>{
    res.send('About Page');
});

route.get('/contact', (req, res)=>{
    res.send('For any query. Contact us !!');
});

app.use('/', route);

app.listen(3000);