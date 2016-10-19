/* Buffers */
var myArray = [10,20,30,40,50];
// var myArrayBuf = new Buffer(myArray); // a buffer aray
var myArrayBuf = Buffer.from(myArray);

// encodings
//  "ascii", "utf8", "utf16le", "ucs2", "base64" or "hex"
//***var myStringBuf = new Buffer("Simply Easy Learning", "utf-8"); // with default encoding
var myStringBuf = Buffer.from("Simply Easy Learning", "utf-8");

console.log(myStringBuf);

//*** var myBuf = new Buffer(10); // uniitiated Buffer of 10 octets (bytes) <-- DON't USE new Buffer, deprecated'
var myBuf = Buffer.alloc(10);
// writing to Buffers using write method, returns length
length = myBuf.write("abcdefghi"); // writing only 9 of the maximum 10
console.log(length); 

// reading from Buffers
buf = new Buffer(26);                  // make a buffer 
for (var i = 0 ; i < 26 ; i++) {       // start i at 0, while less than 26, do, then increment    
  buf[i] = i + 97;                     // add each ascii value to the buffer
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde, start at 0 for 5
console.log( buf.toString('utf8',0,5));    // outputs: abcde, 
console.log( buf.toString(undefined,0,6)); // encoding defaults to 'utf8', outputs abcdef

// convert buffer to JSON, output is
// {type: 'Buffer', data: [97]}
var buf = Buffer.from('a');  // make a new buffer with 1 letter
var json = buf.toJSON(buf);  // convert the buffer into a JSON object
console.log("this is a JSON object:\n",json); 

// from documentation
//
const newbuf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]); //creates a Buffer with 1,2,3,4,5 in it
const jsonstring = JSON.stringify(newbuf);             // turn the buffer into a JSON string
console.log("original string:\n",jsonstring);          // print it




// JSON.parse(string,reviver)
// reviver - If a function, prescribes how the value originally produced by parsing is transformed, 
// before being returned.
// reviver transforms


const jsoncopy = JSON.parse(jsonstring, (key, value) => {
    return value && value.type === 'Buffer'  // return if it is of type Buffer
        ? Buffer.from(value.data)            // the data portion of value
        : value;                             // the value 
});
console.log("after parsing:\n",jsoncopy);     // jsoncopy is a JSON object,

// example from web

const jsonthing = JSON.parse('{"p": 5, "q": 6, "r":7 }', function(k, v) {  //iterates over the JSON values
  console.log(typeof v);
  if (typeof v === 'number') {
    return v * 2;  // return v for numbers
  }
  return v;        // return everything else unchanged
});
console.log(jsonthing)

// further clarification of revivier function

var reviver_fn = function(k, v) {
  console.log(v.type);
  if (typeof v === 'number') {
    return v * 2;
  }
  return v;
  };

var json_thing_asString = '{"a": 1, "b":2}';     // this is a JSON thing
console.log("the JSON string ", json_thing_asString);
var x = JSON.parse(json_thing_asString, reviver_fn);        // convert the JSON string into an object
console.log("x is ", x);
