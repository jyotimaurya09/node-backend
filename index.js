require('dotenv').config()
const express = require('express')
const cors = require('cors');

const app = express();
//port = process.env.PORT;
port =4000;
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

app.use(cors());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
