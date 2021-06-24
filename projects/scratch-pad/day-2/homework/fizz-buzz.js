// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
// i: range of numbers
// o: print each number within the range
// c: instead of multiples of both 3 and 5 print FizzBuzz; 
//  instead of multiples of 3 print Fizz; (count % 3 === 0)
//  instead of multiples of 5 print Buzz; (count % 5 === 0)

function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // use a for loop to iterate through range 1-100
    // start: 1 (count = 1)
    // stop: 100 (count < 101)
    // iteration: increase count by one (count++)
   for(let num = 1; num < 101; num++ ) {
       if ((num % 5 === 0) && (num % 3 === 0)) {
           console.log('FizzBuzz');
       } else if (num % 3 === 0) {
           console.log('Fizz');
       } else if (num % 5 === 0) {
           console.log('Buzz');
       } else {
           console.log(num);
       }
       
   }
   


    // YOUR CODE GOES ABOVE HERE //
}






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz;
}