
/* we need the events module 
/* to create an eventEmitter object */
var events = require('events');

var myeventEmitter = new events.EventEmitter();
myeventEmitter.setMaxListeners(10); //10 is default, 0 is for unlimited
/*------------------------------------------------------------------------------*/
/* Event Handlers:                                                              */                      
/*      connectHandler - fire when a successful connection is made              */
/*          puts out a console message when triggered                           */
/*          fires another event called 'event_DataReceived'                     */
/*      dataHandler - fire when data is received                                */
/*          puts out a console message when triggered                           */
/*          fires another event called 'event_DataReceived'                     */
/*------------------------------------------------------------------------------*/
// 
var connectHandler = function connected() {
    console.log('>>>connection succesful.<<<'); 
    // go get some data  
    myeventEmitter.emit('event_DataReceived');
}
var connectHandler2 = function connected2() {
    console.log('>>>connection2 succesful.<<<'); 
    // go get some data  
    myeventEmitter.emit('event_DataReceived');
}

var dataHandler = function dataReceived() {
    console.log('>>>data received succesfully.<<<');    
    // do something with the data
}
/*------------------------------------------------------------------------------*/
/* Bindings:                                                                    */  
/*------------------------------------------------------------------------------*/
/* use method .on for binding to a Handler and                                  */
/* use method .on for binding to an anonymous function                          */
/* method .listener is the same as method .on                                   */
/*------------------------------------------------------------------------------*/
myeventEmitter.on('event_Connection', connectHandler);
myeventEmitter.on('event_DataReceived', dataHandler); 
/*------------------------------------------------------------------------------*/
/* Mainline:                                                                    */  
/*------------------------------------------------------------------------------*/
/* assume we do a connect to something                                          */
/* when successful, fire an event called 'event_Connection' using an emitter    */
/*------------------------------------------------------------------------------*/
// do a connection to something
myeventEmitter.emit('event_Connection');

// count how many listeners for the event
var count = myeventEmitter.listenerCount('event_Connection');
console.log(count); 
// remove a listener and count
myeventEmitter.removeListener('event_Connection',connectHandler);
var count = myeventEmitter.listenerCount('event_Connection');
console.log(count); 
// bind the listener again and bind event to a second listener, both get triggered
myeventEmitter.addListener('event_Connection', connectHandler);
myeventEmitter.addListener('event_Connection', connectHandler2);
console.log(myeventEmitter.listenerCount('event_Connection'));

myeventEmitter.emit('event_Connection'); // fire the event

console.log("Program Ended.");