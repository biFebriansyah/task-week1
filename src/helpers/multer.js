const multer = require('multer')
const Datauri = require('datauri')
const path = require('path')

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const multerUploads = multer({ 
  storage,
  fileFilter: fileFilter
});
const dUri = new Datauri();

const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

module.exports = {multerUploads,dataUri};