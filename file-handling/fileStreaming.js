const fs = require('node:fs');
const path = require('node:path');

function getFilePaths(directory){
  let files = fs.readdirSync(directory)
  console.log(files);
  return files
  .map((file) => path.join(directory, file))
  .filter((filePath) => fs.statSync(filePath).isFile())
}

const directory = './file-handling/test';

const files = getFilePaths(directory)

const streams = []

files.forEach((file, index)=>{
  streams.push([index, fs.createReadStream(file)])
})

streams.forEach(([index, stream])=>{
  stream.on('data', () => {
    console.log(`Data: Stream ${index}`);
  });

  stream.on('end', () => {
    console.log(`End: Stream ${index}`);
  });

  stream.on('error', (err) => {
    console.error(`Error: Stream ${index}`);
  });

})

/**
 * https://stackoverflow.com/questions/79387643/nodejs-behavior-with-multiple-i-o-calls/79388309#79388309
 */
