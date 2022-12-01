const args = process.argv.slice(2);
const URL = args[0];
const localFilePath = args[1];

const request = require('request');
const fs = require('fs');

request(URL, (error, response, content) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    fs.writeFile(`${localFilePath}`, content, err => {
      if (err) {
        console.log(`Error: ${err}`);
      } 
      console.log(`Downloaded and saved 1235 bytes to ${localFilePath}`);
      
    });
  }
});