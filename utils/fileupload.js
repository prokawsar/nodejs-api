const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,   '../src/public/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  // currently filter for only image
  if(file.mimeType === 'image/jpeg' || file.mimeType === 'image/png'){
    cb(null, true)
  }else{
    cb(null, false)
  }

}

const uploader = multer({storage, fileFilter}) // want export this uploader

module.exports = {
  uploader
}