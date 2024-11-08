require('dotenv').config()
const express = require('express');
const multer = require('multer');
const apiKeyValidation = require('./middleware/auth.middleware');
const predictHandler = require('./controller/predict.controller');


const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// upload(req, res, (err) => {
//     if(err instanceof multer.MulterError) {
//         res.status(400).json({
//             status: 'failed',
//             message: err.message,
//             data: null,
//         });
//         return;
//     }
// })

app.post('/predict', apiKeyValidation, upload.single('image'), predictHandler);

const port = process.env.PORT | 3000;
app.listen(port, () => {
    console.log('app listening on: http://localhost:' + port);
})