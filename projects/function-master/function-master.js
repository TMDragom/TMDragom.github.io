//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //declare a variable to hold object keys
    var keysArray = [];
    
    //loop through object by key
    for(var key in object) {
    
    //push property value at each key to keysArray
        keysArray.push(object[key]);
    }
    
    //return list of property values as an array
    return keysArray;  
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    
    //declare a new variable to hold object keyNames
    var newString = [];
    
    //loop through object by key
    for(var key in object) {
        
    //push key Name as a string to newString
      newString.push(key);
    }
    
    //convert newString array to a single string
    newString = newString.join(' ');
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
    //declare a variable to hold property values
    var newString = [];
    
    //loop through object by key
    for(var key in object) {
        
        // check if the property value at each key is a string
        if(typeof object[key] === 'string') {
            
            //if so, add that property value to newString
            newString.push(object[key]);
            }
        }
        
    //convert newString array to a single string
    newString = newString.join(' ');
    return newString;
}
    


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
    //if collection is an array, result is array
    //otherwise, result is the data type of collection
    var result = Array.isArray(collection) ? 'array' : typeof collection;
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
//create a variable to save the modified string
//replace the letter at index 0 with its uppercase 
//and concat the remainder of the string 
  var newString = string.charAt(0).toUpperCase() + string.slice(1);
  
 
  //return the newly created variable
  return newString;
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
//split the string and save to a new variable
  var newString = string.split(" ");
  
  //loop over newString
  for (let i = 0; i < newString.length; i++) {
      
    //replace the first letter of every word in the array with its capital
    //concat the remaining letters to the first
    newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
  }
	//convert array back to a string with a space between each element
  var joinedString = newString.join(' ');
  //return the newly created variable
  return joinedString;
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    //retrieve the name value from the object
    //capitalize it and assign it to a new variable
    var name = capitalizeWord(object.name);
    
    //return a literal string template 
   return `Welcome ${name}!`;

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
    //retrieve name value of input object
    //capitalize it and assign to a new variable
     var name = capitalizeWord(object.name);
     
     //retrieve a species value of input object
     //capitalize it and assign to a new variable
     var species = capitalizeWord(object.species);
     
     //return a literal string template
   return `${name} is a ${species}`;

}


//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    
    //assign the noises property to a new independent variable
    let noises = object.noises;
    
    //if noises is defined and contains at least one element
    //then convert the array to a string (space separated)
    //else return 'there are no noises'
    (noises && noises[0]) ? noises = noises.join(' ') : noises = 'there are no noises';
    return noises;
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    
    //convert string to an array of words
    string = string.split(' ');
    
    //set result to false by default
    var result = false;
    
    //loop through the array called string
    for(var i = 0; i < string.length; i++) {
        
        //check if word at each index matches input word
        if(word === string[i]) {
            result = true;
        }
    }
    return result;
}
    
        
    


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
    //add input name to object's friends property
    object.friends.push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
    //set result to false by default
    let result = false;
    
    //check if object has a friends property
    if(object.friends) {
        
        //loop through the friends array
        for(var i = 0; i < object.friends.length; i++) {
            
            //check each friend for a match to name
            if(object.friends[i] === name) {
                result = true;
            }
        }
    }
    return result;
}



//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

    //assign a variable to hold an array of nonFriends
    var list = [];
    
    //loop through the array by object
    for(var i = 0; i < array.length; i++) {
        
        //check if name at indexed object matches name input
        //because you can't be friends with yourself!
      if(array[i].name !== name) {
          
        //if input name is not the same at that of the object, add it to list
        list.push(array[i].name);
      }
      
      //loop the friends array of the indexed object
      for(var index = 0; index < array[i].friends.length; index++) {
            
            //check if input name appears in friends
            if(array[i].friends[index] === name) {
                //if so, take if off the list
                list.pop();
            } 
        }  
    } return list;
}



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    
    //add or replace the object[key] with object[value]
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //loop through array
    for(var i = 0; i < array.length; i++) {
        
        //use .hasOwnProperty to check for a match to array element
        if(object.hasOwnProperty(array[i])) {
            
            //if a match is found, delete the entire property
            delete object[array[i]];
        }
    } return object;
  
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
    //create a new variable to hold elements
    var newArray = [];
    
    //loop through the input array
    for(var i = 0; i < array.length; i++) {
        
        //add the element at array index to
        //newArray only if it's not there already
        if(!newArray.includes(array[i])) { 
          newArray.push(array[i]);
        }
    }
    return newArray;
}



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}