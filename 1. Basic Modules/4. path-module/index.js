const path = require('path');
console.log("dircetory name " , path.dirname(__filename))
console.log("file name", path.basename(__filename))
console.log("file extension", path.extname(__filename))
const joinPath= path.join("/user", "/docs")
console.log(joinPath)