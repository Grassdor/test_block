const express = require('express');

const app = express();

app.get('/hui', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () =>console.log(`Serverrunning on port ${port}`));


