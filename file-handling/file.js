const fs = require('fs');

// Write file async
const filePath = './test.txt';

// Write
// fs.writeFile(filePath, 'This data is saved asynchronously.', (error) => { console.log(error) });
// fs.writeFileSync(filePath, 'This data is saved synchronously');


// Read
// fs.readFile(filePath, 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data);
//     }
// })

// const result = fs.readFileSync(filePath, 'utf-8');
// console.log(result);


// Append
// fs.appendFile(filePath, '\n This is appended data async', (err)=>{
//     console.log(err);
// })

// fs.appendFileSync(filePath, '\n This is appended data sync');


// Unlink (Delete)
// fs.unlink(filePath, (err)=>{
//     console.log(err);
// })

// fs.unlinkSync(filePath);


// Stats
// fs.stat(filePath, (err, stats)=>{
//     console.log(stats);
// })

const states = fs.statSync(filePath);
console.log(states.isFile());
// console.log(states);

// in the same way can copy file using fs.copyFile, fs.copyFileSync, cpSync, cp
// fs.copyFile(filePath, './copy.txt', (err)=>{})
// fs.copyFileSync(filePath, './copy1.txt')
// fs.cpSync(filePath, './copy2.txt')
// fs.cp(filePath, './copy3.txt', (err)=>{})

// Check whether its file or directory


// Make Directory
// fs.mkdir('./test-folder', (err)=>{})
// fs.mkdirSync('./test-folder')
// fs.mkdir('test-folder/app/test', {recursive: true} ,()=>{})

