const apiKeyValidation = (req, res, next) => {
    const apiKey = req.get('X-Api-Key');
    
    if(!apiKey || apiKey !== process.env.API_KEY) {
        res.status(400).json({
            status: 'failed',
            message: 'invalid api key',
            data: null,
        });
        return;
    }

    next();
}

module.exports = apiKeyValidation;