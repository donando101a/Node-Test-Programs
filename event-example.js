/*------------------------------------------------------------------------------*/
/* we need the events module                                                    */
/* to create an eventEmitter object                                             */
/*------------------------------------------------------------------------------*/
var events = require('events');

var myeventEmitter = new events.EventEmitter();
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

var dataHandler = function dataReceived() {
    console.log('>>>data received succesfully.<<<');    
    // do something with the data
}

var oneTime = function () {
    console.log('>>>display a message only one time')
}
/*------------------------------------------------------------------------------*/
/* Bindings:                                                                    */  
/*------------------------------------------------------------------------------*/
/* use method .on or .addListener for binding to a Handler and                  */
/* use method .on for binding to a function                                     */
/* use method .once for a listener that is invoked only once                    */
/*------------------------------------------------------------------------------*/
myeventEmitter.addListener('event_Connection', connectHandler);
myeventEmitter.on('event_DataReceived', dataHandler);
myeventEmitter.once('event_OneTime', oneTime)
/*------------------------------------------------------------------------------*/
/* Mainline:                                                                    */  
/*------------------------------------------------------------------------------*/
/* assume we do a connect to something                                          */
/* when successful, fire an event called 'event_Connection' using an emitter    */
/*------------------------------------------------------------------------------*/
// do a connection to something
myeventEmitter.emit('event_Connection');
myeventEmitter.emit('event_OneTime');
console.log("Program Ended.");