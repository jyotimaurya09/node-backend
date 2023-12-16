require('dotenv').config()
const express = require('express')

const app = express();
port = process.env.PORT;

const githubData = {
    user: "jyotimaurya09",
    techStack: {
        "frontend": ["html", "css", "react", "react native"],
        "backend": ['node', 'python', 'go']
    }
}

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/instagram', (req, res) => {
    res.send("jyotimaurya09");
});

app.get('/login', (req,res) => {
    res.send('<h1>Please login</h1>');
});

app.get('/github', (req,res) => {
    res.json(githubData);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
