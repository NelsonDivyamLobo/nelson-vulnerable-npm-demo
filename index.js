const express = require('express');
const _ = require('lodash');
const minimist = require('minimist');
const jwt = require('jsonwebtoken');
const handlebars = require('handlebars');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Nelson's intentionally vulnerable Node.js app!");
});

// Vulnerable: eval-like template rendering
app.get('/template', (req, res) => {
    const userInput = req.query.input || "{{alert('XSS')}}";
    const template = handlebars.compile(userInput);
    res.send(template());
});

// Vulnerable: directly parsing argv
app.get('/args', (req, res) => {
    const args = minimist(process.argv.slice(2));
    res.json(args);
});

// Vulnerable: hardcoded JWT secret
app.get('/token', (req, res) => {
    const token = jwt.sign({user: "nelson"}, "weak-secret");
    res.send(token);
});

app.listen(3000, () => console.log("Vulnerable app running on port 3000"));
