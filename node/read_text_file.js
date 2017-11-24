/*
Todo Simple program to demonstrate file read using fs module;
 */

let fs = require('fs');

fs.readFile('node/sample_text_read', (err, data) => {
    if (err) {
        console.log ('Error in reading file ' + err.toString());
    } else {
        console.log ('The contents of the file are = ' + data.toString());
    }
});

fs.createReadStream('node/sample_text_read')
    .pipe(fs.createWriteStream('node/sample_text_write'));