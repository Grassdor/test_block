const express = require('express');
const connectDB = require('./config/db')

const app = express();

connectDB();

app.get('/hui', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () =>console.log(`Serverrunning on port ${port}`));