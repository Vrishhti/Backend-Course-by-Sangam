const fs= require('fs');
const path= require ("path");


//create a folder using file system

//here direcory where folder is to be created is specified
const dataFolder = path.join(__dirname, 'data');

//if folder isnt already present then
if(!fs.existsSync(dataFolder)){

    //create folder
    fs.mkdirSync(dataFolder);
    console.log("data folder created")
}


//locn where file is to be created

const dataFolderFile = path.join(dataFolder, 'example.txt');
//synchronous way of creating the file

if(!fs.existsSync(dataFolderFile)){

    fs.writeFileSync(dataFolderFile, "hello from node");
    console.log("data file created")
}



const readContentFromFile = fs.readFileSync(dataFolderFile, "utf8")
console.log("read file content:", readContentFromFile)