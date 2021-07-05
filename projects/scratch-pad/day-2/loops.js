// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
 //i: array
 //o: print to console each value in array
 //c: start at beginning; use console.log
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // use a for loop to iterate through array
  // start: first index (i = 0)
  // stop: last index (i < array.length)
  // iterate: forward by one (i++)
    for(let i = 0; i < array.length; i++) {
  // print value at each index
      console.log(array[i]);
    }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
 //i: array
 //o: print each value to console
 //c: start at end of array; use console.log
 
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // use a for loop to iterate through array
  // start: last index (i = array.length - 1)
  // stop: first index (i = 0)
  // iterate: minus 1 (i--)
    for(let i = array.length - 1; i >= 0; i--) {
  // print value at each index
      console.log(array[i]);
    }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
 // i: object
 // o: an array containing object key names
 // c: return an array
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // define a variable that will hold an array of object key names
    let keysArray = [];
    
   // use a for in loop to iterate through keys of an object   
    for(var key in object) {
   // assign the key names to a new array
      keysArray.push(key);
    }
    return keysArray;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
 //i: object
 //o: print object keys
 //c: use console.log()
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // use a for in loop to iterate through object
  
  for(var key in object) {
  // print each key name to console
    console.log(key);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
  // i: object
 // o: an array containing object key VALUES
 // c: return an array
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //

 // define a variable that will hold an array of object key values
    let keyValuesArray = [];
    // use a for in loop to iterate through keys of an object
    
    for(var key in object) {
    // assign the key values to a new array
      keyValuesArray.push(object[key]);
    }
    return keyValuesArray;
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
  //i: object
 //o: print object key VALUES
 //c: use console.log()
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
   // use a for in loop to iterate through object
  // print each key to console
  for(var key in object) {
    console.log(object[key]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
 //i: object
 //o: number of key value pairs
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // Cheat: use previously created code to convert object to array of keys
  let keysArray = [];
  for(var key in object) {
    keysArray.push(object[key]);
    }
  //instead of returning the array, return its length
  return keysArray.length;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // remember code from above:
  // use a for in loop to iterate through keys of an object
  // assign the key values to a new array
    let array = [];
    for(var key in object) {
      array.push(object[key]);
    }
   for(let i = array.length - 1; i >= 0; i--) {
      console.log(array[i]);
    }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
