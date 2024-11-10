const { Router } = require('express');
const apiKeyValidation = require('../middleware/auth.middleware');
const predictHandler = require('../controller/predict.controller');

const router = Router();

router.post('/predict', apiKeyValidation, predictHandler);

module.exports = router;