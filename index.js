const express = require('express');
const app = express();

app.get('', (req, res)=>{
    console.log(`Data sent by browser: ${req.query.name}`)
    res.send('<h1>Hello !! This is Jatin.inc</h1><a href="/about">Go to About Page</a>');
});

app.get('/about', (req, res)=>{
    res.send(`
        <input type="text" placeholder="Username" value="${req.query.name}" />
        <button>Click Me</button>
    `)
});

app.get('/help', (req, res)=>{
    res.send({
        name: 'Jatin',
        email: 'jatinalwar2001@gmail.com'
    })
})

app.listen(3000);