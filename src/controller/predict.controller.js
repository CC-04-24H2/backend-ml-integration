const axios = require('axios');
const FormData = require('form-data');

const predictHandler = async (req, res) => {    
    try {
        const image = req.file;
        const form = new FormData()
        form.append('file',image.buffer, {
            filename: image.originalname,
            contentType: image.mimetype
        });

        const response = await axios.post(process.env.PREDICT_ENDPOINT + '/predict', form)
        
        res.status(200).json({
            status: 'success',
            message: 'get ocr success',
            data: {
                ocr: response.data,
            }
        });

    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: error.message,
            data: null
        });
    }

}

module.exports = predictHandler;