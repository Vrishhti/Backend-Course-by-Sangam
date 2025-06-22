const multer = require('multer');
const path = require('path');

//set multer storage
const storage = multer.diskStorage({
    //where to store files
 destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this 'uploads' folder exists
  },
  // How to name the files
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});
//file filter
const checkFileFilter = (req,file,cb)=>{
    if(file.mimetype.startsWith('image')){
        cb(null,true)
    } else{
        cb(new Error('not an img, please upload only imgs'))
    }
}


//multer middleware
module.exports=multer({
    storage: storage,
    fileFilter: checkFileFilter,
    limits:{
        fileSize: 5*1024*1024,
    }
})
        