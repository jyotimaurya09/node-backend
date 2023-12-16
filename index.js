require('dotenv').config()
const express = require('express')

const app = express();
port = process.env.PORT;
//console.log(process.env);
//port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/instagram', (req, res) => {
    res.send("jyotimaurya09");
});

app.get('/login', (req,res) => {
    res.send('<h1>Please login</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
