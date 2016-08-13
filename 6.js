const extensionFilter = require('./module6');
const dir = process.argv[2];
const extension = process.argv[3];

extensionFilter(dir, extension, (err,list)=> {
  if(err) return console.log('ERROR',err);

  list.forEach((filename) => {
    console.log(filename);
  });
});
