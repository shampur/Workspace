/*
Todo https://github.com/zeit/pkg This is a nice node module for converting node programs into target system executables
Todo that can run even without nodejs installed on them.
 */

let fs = require('fs');

if (process.argv.length < 3) {
    console.log('Command execution = $ file_stat <file_path>');
    process.exit(1);
}

let filename = process.argv[2];

console.log(filename);

fs.stat(filename, (err, stat) => {
    if (err) {
        console.log("Error in fetching stats about a file");
        process.exit(1);
    } else {
        console.log(JSON.stringify(stat, null, 2));
        process.exit(0);
    }
});

