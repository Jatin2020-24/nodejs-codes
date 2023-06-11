const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');
console.warn(dirPath);

// ***Create Single File***

// fs.writeFileSync('apple.txt', 'This is apple file.')

// ***Create multiple files using loop***

// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`, `This is hello${i} file.`);
// }

fs.readdir(dirPath, (err, files)=>{
    files.forEach((item)=>{
        console.log("file name is: ", item);
    })
})