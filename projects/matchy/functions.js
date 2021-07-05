/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    //loop through array of animals
    for(let i = 0; i < animals.length; i++) {
        
        //check if the name value of the animal at each index matches the input name
        if(animals[i].name === name) {
            return animals[i];
        }
    } return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Declare a function called replace
// i: animals(array), name(string), replacement(object)
// o: modified animals array with replaced object

function replace(animals, name, replacement) {
    for(let i = 0; i < animals.length; i++) {
        
        //check if the name value of the animal at each index matches the input name
        if(animals[i].name === name) {
            
            //if a match, replace object at that index with input object
            animals[i] = replacement;
            return animals;
        }
    }
    
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Declare a function called remove
//i: animals(array), name(string)
//o: modified animals array

function remove(animals, name) {
    
    //loop through animals array
    for(let i = 0; i < animals.length; i++) {
        
        //if value of animals.name matches input name
        if(animals[i].name === name) {
            
            //use .splice to delete the entire object at that index
            animals.splice(animals[i], 1);
        }
    }
    return animals;
}
        
        


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Declare a function call add
//i: animals(array), animal(object)
function add(animals, animal) {
    //check that animal has a valid name and species
    (animal.name.length > 0 && animal.species.length > 0);
    
    //loop through animals array
    for(let i = 0; i < animals.length; i++) {
        //if animal with same name already exists
        //return original array of animals, unchanged
       if(animals[i].name === animal.name) {
            return animals[i];
       }
    }
    //else add new animal to animals array
    return animals.push(animal);
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
