require('dotenv').config()
const express = require('express');
const apiKeyValidation = require('./middleware/auth.middleware');

const app = express();

app.post('/predict', apiKeyValidation)

const port = process.env.PORT | 3000;
app.listen(port, () => {
    console.log('app listening on: http://localhost:' + port);
})