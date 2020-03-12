// takes a  full path with extension name and return true for file and false for dirs 
const fs = require('fs');

let checker = (path) => {
   return new Promise((resolve, reject) => {
      fs.stat(path, (err, stats) => {
         if (err) {
            return reject("an error occured in fileChecker.js "+err);
         } else {
            return resolve(stats.isFile());
         }
      });
   });

};

module.exports = checker;


// checker('./main.js')
// .then(r=>{console.log(r)})
// .catch(r=>{console.log("an error occured");})