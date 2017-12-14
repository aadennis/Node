// https://www.w3schools.com/nodejs/ref_fs.asp
//https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

// animal.txt
// dog
// cat
// donkey
// zygote
// aardvark
// yeti

var fs = require('fs');
var data;
var mahFile = 'c:/temp/animals.txt';
fs.readFile(mahFile,'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});

fs.readFile(mahFile, 'utf8',  (err, data) => {
    setTimeout (() => {
        if (err) throw err;
        console.log(data);
    },5000);
  });


//fs.readFile

