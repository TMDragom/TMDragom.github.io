/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//
//create an empty object literal called animal
var animal = {};

//create an animal property called species
// c: use dot notation
animal.species = 'cow';

//create an animal property called name
//c: use bracket notation
animal['name'] = 'Soup';

//give animal a property called noises; empty array
//c: use either notation

animal.noises = [];

//print to console
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create variable named noises as an empty array
var noises = [];

//give the noises array its first element
//c: use bracket notation
noises[0] = 'moo';

//add another element to noises
//c: use an array function
noises.push('fa la la');

//add another element to noises
//c: use an array function to add to front of array
noises.unshift('ouch');

//add another element to noises
//c: use bracket notation to add element to end
noises[noises.length] = 'OMG';

//print the length of noises
console.log(noises.length);

//print the last element of noises
console.log(noises[noises.length - 1]);

//print the entire noises array
console.log(noises);




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Assign the noises property on animal to our new noises array
// c: use bracket syntax
animal['noises'] = noises;

// Add another noise to animal.noises
// c: use any syntax
animal.noises.push('sigh');

// print animal
console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 
 DOT NOTATION: 
 nameOfObject.keyName will access the property value at that key
 
 BRACKET NOTATION: 
 nameOfObject['keyName'] will access the property value at that key
 *
 * 2. What are the different ways of accessing elements on arrays?
 
 BRACKET NOTATION
 nameOfArray[#] will access the element at the specified index
 nameOfArray[nameOfArray.length - 1] will access the element at end of index
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a variable named animals and assign it to an empty array
var animals = [];

// push animal to animals
// NOTE: it should appear on index.html
animals.push(animal); // it does!


// print animals
console.log(animals);
/* prints:
[
    {
        species: 'cow',
        name: 'Soup',
        noises: [
            'ouch',
            'moo',
            'fa la la',
            'OMG',
            'sigh'
        ]
    }
]
*/

// create a variable called duck w the given data
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

// push duck to animals
animals.push(duck);

// print animals
console.log(animals);
/* prints:
[
    {
        species: 'cow',
        name: 'Soup',
        noises: [
            'ouch',
            'moo',
            'fa la la',
            'OMG',
            'sigh'
        ]
    },
    {
        species: 'duck',
        name: 'Jerome',
        noises: [ 'quack', 'honk', 'sneeze', 'woosh']
    }
]

*/

// Create an animal object {species: '', name: '', noises: ['',''];
var butterfly = { species: 'butterfly', name: 'Maxwell', noises: ['Weeee!', 'Thanks Mrs. A'] };

// Add this new object to animals
animals.push(butterfly);

// Create another animal object and add to animals
var sloth = { species: 'baby sloth', name: 'Bert', noises: ['squeak', 'Who me?'] };
animals.push(sloth);

// Print animals
console.log(animals); //prints array of animal objects
console.log(animals.length); // prints 4


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Data structure for each animal's list of friends:
// Should be an array of strings
// Why? Because: Arrays are a great way to store lists
// And because: the name of each friend will be a string

// Create a variable called friends
// c: assign the appropriate data structure ([])
var friends = [];

// Write a function called getRandom
// i: animals array
// o: one index from input array
// c: use Math.random
function getRandom() {
    // create a variable to represent a random index
    // for Math.random the min is 0 and max is number of animals in array
    // use Math.floor to round the number to an integer
    var index = Math.floor(Math.random() * animals.length);
    return index;
}

// use getRandom to add a name to friends
friends.push(animals[getRandom()]['name']);

// print friends
console.log(friends);

//add friends list as a propert to one of the animals
//c: use bracket notation
animal['friends'] = friends;

// print animals to check that one animal has a friend
console.log(animals);



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}