//takes a path and downloads the data or 
//a list of files to show if dir was clicked

//handles click events
//checks if the click is on a file or on a dir
//if file then downloads the file
//if dir then opens the dir

const fs = require('fs');
const checker = require('./fileChecker');
const lister = require('./fileLister');

let gg = (path) => {
   return new Promise((reject, resolve) => {
      checker(path).then(r => {
         // console.log(path)
         if (r === true) {
            let data = fs.createReadStream(path);
            return resolve(data)
         } else {
            lister(path).then(r => {
               return resolve(r)
            })
         }
      })

   })
};

// gg('./main.js').then(r => {
//    console.log(r);
// }).catch(err => {
//    console.log("gg func call error " + err)
// })


module.exports = gg;