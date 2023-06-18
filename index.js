const http = require('http');
const express = require('express');
const app = express();

const reqFilter = (req, res, next)=>{
    console.log("Filter Activated");
    next();
};

app.use(reqFilter);

app.get('', (req, res)=>{
    res.send('Welcome to Home Page');
});

app.get('/users', (req, res)=>{
    res.send('Users Page');
});

app.listen(3000);