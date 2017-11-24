let http = require('http');

http.createServer((request, response) => {
    response.end("Hello world");
}).listen(8090);

console.log('Ther server is listening on http://localhost:8090');

/*
    Node js comes with a REPL environement. (Read Eval Print Loop)
 */