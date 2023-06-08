const multer = require('multer')


upload = multer({
    limits: {
        fileSize: 1000000,

    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('please specify a valid docs or docx file'))
        }
        cb(undefined,true)
    }
})




module.exports = upload