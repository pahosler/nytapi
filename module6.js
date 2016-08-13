const fs = require('fs');
const path = require('path');

module.exports = (dir, extension, callback) => {
  fs.readdir(dir,  (err,list) => {
    if(err) return callback(err);
    callback(err,list.filter((filename) => path.extname(filename) === `.${extension}`));
  });
};
