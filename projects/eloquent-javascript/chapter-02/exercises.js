
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// use a loop to print an increasing num of hashtags
// use 'do', only bc I hardly ever do!
// parameter num will be the highest number of hashtags
function triangles(num) {
  let x = '#';
  do {
    console.log(x);
    x = x + '#';
  } while (x.length <= num);
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //use a for loop to print a range
  //book instructions say 1 to 100
  //test asks for 15, so maybe use parameter num
  for(let count = 1; count <= 15; count++) {
    //for numbers divisible by 3 and 5, print 'FizzBuzz'
    if(count % 3 === 0 && count % 5 === 0) {
      console.log('fizzbuzz');
      //numbers divisible by 3, print 'Fizz'
    } else if(count % 3 === 0) {
      console.log('fizz');
      //numbers divisible by 5, print 'Buzz'
    } else if(count % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(count);
    }
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Create a function that will print a grid of hashtags
//i: num is the binding
//o: string value
//c: must use "\n" to denote line return
//e: must work w odd number input

function drawChessboard(num) {
  // create a variable to hold new string
  let chessString = '';
  
  // create a variable to hold target number of lines
  let height;
  
  // add lines until height equals the num argument
  for(height = 0; height < num; height++) {
    
    //build each line, character by character
    for(let i = 0; i < num; i++) {
      
      //odd lines should begin with a space
      if(height % 2 === 1) {
        i % 2 === 1 ? chessString += ' ' : chessString += '#';
      } else {
      //even lines should begin with hashtag
        i % 2 === 1 ? chessString += '#' : chessString += ' ';
      }
    }
  //add a line return at the end of each line
  //including the final line
  chessString += '\n';
  }
  
  //print the entire grid to console when invoked
  console.log(chessString);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
