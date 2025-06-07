
console.log('in wrapper demo file')

const moduleWrapper= require ('./wrapper-explorer')

console.log('in wrapper demo file')


console.log("file name in demo", __filename)
console.log("dir name in demo", __dirname)


console.log(moduleWrapper.greet("Vrishhti"))