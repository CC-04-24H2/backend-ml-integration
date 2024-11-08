require('dotenv').config()
const express = require('express');
const v1Router = require('./routes/v1.route')


const app = express();

app.use('/v1', v1Router);

const port = process.env.PORT | 3000;
app.listen(port, () => {
    console.log('app listening on: http://localhost:' + port);
})