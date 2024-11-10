const axios = require('axios');
const FormData = require('form-data');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const predictHandler = (req, res) => {    
    upload.single('image')(req, res, async (err) => {
        if(err instanceof multer.MulterError) {
            res.status(400).json({
                status: 'failed',
                message: err.message,
                data: null,
            });
            return;
        }

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
    });
}

module.exports = predictHandler;