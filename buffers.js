/* Buffers */
var myArray = [10,20,30,40,50];
var myBuf = new Buffer(10); // uniitiated Buffer of 10 octets (bytes)

var myArrayBuf = new Buffer(myArray); // a buffer aray

// encodings
//  "ascii", "utf8", "utf16le", "ucs2", "base64" or "hex"
var myStringBuf = new Buffer("Simply Easy Learning", "utf-8"); // with default encoding

console.log(myStringBuf);

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
var buf = new Buffer('a');
var json = buf.toJSON(buf);
console.log(json); 

// from documentation
//
const newbuf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]); //creates a Buffer with 1,2,3 in it
const jsonstring = JSON.stringify(newbuf);
const jsoncopy = JSON.parse(jsonstring, (key, value) => {
    return value && value.type === 'Buffer'
        ? Buffer.from(value.data)
        : value;
});
console.log(jsoncopy);

