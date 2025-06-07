console.log('in wrapper explorer file')

console.log("file name in explorer", __filename)
console.log("dir name in explorer", __dirname)

module.exports.greet= function(name){
    console.log('hi', name)
}
