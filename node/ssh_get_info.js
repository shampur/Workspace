var Client = require('ssh2').Client;


let connectionParam = {
    host: '127.0.0.1',
    port: 9090,
    username: 'root',
    password: 'charan'
};

let command = "docker ps -a | tail -n +2 | awk '{print $2 \"\\t\" $3}'";
let conn = new Client();
conn.on('ready', () => {
   console.log('Client :: ready');
   conn.exec(command, (err, stream) => {
       if (err) throw err;
       stream.on('close', (code, signal) => {
           console.log('Stream closed code = ' + code + ' , and signal = ' + signal);
           conn.end();
       });
       stream.on('data', (data) => {
           console.log('Containers which are running on the host = \n' + data);
       });
       stream.stderr.on('data', (data) => {
           console.log('Stderr: ' + data);
       });
   });
}).connect(connectionParam);