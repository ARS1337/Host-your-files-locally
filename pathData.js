//take a path and returns a 2d Array with [list][true/false], true if path is a file 
const fs = require('fs');
const lister = require('./fileLister');
const checker = require('./fileChecker');

let gg = (path) => {
   let fileOrNot = [];
   return new Promise((resolve, reject) => {
      //checking if the path is a dir or not
      //if not then get a list using lister and check for that list elements 
      //using checker
      fs.stat(path, (err, stats) => {
         if (err) {
            return reject(err);
         } else {
            lister(path)
               .then(files => {
                  //r=array of files/dirs; whatever lister returns
                  files.forEach(x => {
                     fileOrNot.push(checker(path + x))
                  });
                  //above forEach loop creates a list of promises 
                  //of full path(path+x) and calls promise.all to run all 
                  //promises at the same time
                  Promise.all([...fileOrNot])
                  //all promises are run and then data is fed into fileOrNot
                     .then(r1 => {
                        fileOrNot = [...r1];
                        return resolve([files, fileOrNot]);
                     });
               });
         }
      });
   });
};

module.exports = gg;
