const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'public');


app.use(express.static(publicPath));

app.set('view engine', 'ejs');

app.get('', (_, res)=>{
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/profile', (_, res)=>{
    const user = {
        name: 'Jatin',
        email: 'jatinalwar2001@gmail.com',
        city: 'Alwar',
        skills: ['python', 'c++', 'c']
    }
    res.render('profile', {user})
});

app.get('/login', (_, res)=>{
    res.render('login');
});

app.get('/help', (_, res)=>{
    res.sendFile(`${publicPath}/help.html`);
});

app.get('*', (_, res)=>{
    res.sendFile(`${publicPath}/no_route.html`);
});

app.listen(3000);