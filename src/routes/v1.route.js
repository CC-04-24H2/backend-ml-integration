const { Router } = require('express');
const multer = require('multer');
const apiKeyValidation = require('../middleware/auth.middleware');
const predictHandler = require('../controller/predict.controller');

const router = Router();

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

router.post('/predict', apiKeyValidation, upload.single('image'), predictHandler);

module.exports = router;