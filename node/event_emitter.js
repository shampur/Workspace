/*
Todo Simple program to demonstrate the use of Event emitters in Nodejs;
 */

let events = require('events');


let eventEmitter = new events.EventEmitter();
let connection_event_handler = () => {
    console.log('This is connection event handler');

    eventEmitter.emit('data_received');
};

eventEmitter.on('connection', connection_event_handler);

eventEmitter.on('data_received', () => {
   console.log('Data has beed received from the connection emitter');
});

eventEmitter.emit('connection');

