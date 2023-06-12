const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt` 

// fs.writeFileSync(filePath, 'This is a simple text file.');

// **** Append Data to File ****
// fs.appendFile(filePath, 'and file name is apple.txt', (err)=>{
//     if(!err) console.log("file is updated");
// }) 

// **** Update File name ****
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
//     if(!err) console.log("file name is updated")
// })

fs.unlinkSync(`${dirPath}/fruit.txt`);

