import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now().toString()}-${file.originalname}`)
    }
})


const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'){
        cb(null, true)
    } else {
        cb(new Error('File must be image/jpeg or image/png'), false)
    }
}

const upload = multer({ storage, fileFilter })

export default upload;