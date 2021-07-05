////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  //use static function Math.min to return smaller of two values
  return Math.min(num1, num2);

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// I can't believe I figured this out!!!
// I modeled heavily against "findSolution" from the book

// Declare a function to test whether a number is even
// i: one parameter, num, a number
// o: bool (if even: true)
// c: use recursion NOT % 2 === 0
// e: make it work for negative numbers

function isEven(num) {
  
  //convert any negative numbers to a positive value
  if(num < 0) {
    num *= -1;
  }
  
  //declare an inner function for recursion
  function minus2(num, current) {
    
    // 0 is even
    if (current === 0) {
      return true;
      
    // 1 is odd
    } else if (current === 1) {
      return false;
      
    // if num isn't 0 or 1, subtract 2 until it is
    } else {
      return minus2(num, current - 2);
    }
  } 
  
  // I THINK WHAT'S HAPPENING HERE IS:
  // first time isEven is called, current is undefined, 
  // so none of the if statements can run and it skips to here
  // calling with num, num will sub our num for "current as 2nd parameter"
  return minus2(num, num);
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Declare a function that will count the number of a given character in a given string
// i: two params: string *str; char *str
// o: return character count *num (I'm still trying dif formats to comment)


function countChars(string, char) {
  
  //declare a variable to hold character count
  let charQty = 0;
  
  //loop through array by index
  for(let i = 0; i < string.length - 1; i++) {
    
    //when index matches character we're looking for, increment the count
    if(string[i] === char) {
      charQty++;
    }
  }
  
  //return the character count *num
  return charQty;
}



////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Declare a function to tally # of times B appears in a string
//Same as previous, except char param is replaced with B
//i: one param: string *str

function countBs(string) {
  
  // create a var to hold tally of B
  let B = 0;
  
  // loop thru array by index
  for(let i = 0; i < string.length - 1; i++) {
    
    // if char at index is B; increment count
    if(string[i] === 'B') {
      B++;
    }
  }
  return B;
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
