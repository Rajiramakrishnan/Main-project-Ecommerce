const multer = require("multer")
const fs = require('fs');
const path = require('path')

//creating upload route
const uploadDir = path.join(__dirname, "../upload");
console.log('dir', uploadDir)
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

//configuring multer storage

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))//creating unique filename using timestamp and math.round fumction
    }
  })
  
  const uploadBuyerSellerImg = multer({ storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB file size limit(file size limit)
    fileFilter: (req, file, cb) => {   //file type validation (only image)
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type'));
      }
    }
   })


  
  module.exports = {
    uploadBuyerSellerImg
  }