//takes a path and returns an array of file/dir [name of the file][true if it is a file];
const fs = require('fs');

let lister = (path) => {
   let gg = new Promise((resolve, reject) => {
      fs.readdir(path, (err, data) => {
         if (err) {
            return reject("an error occured in fileLister.js "+err);
         } else {
            console.log("vdvfvf"+data)
            return resolve(data);
         }
      });
   });
   return gg;
};


module.exports = lister;