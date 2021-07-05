// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
// create factory function makeContact to create instances of objects
// object keys should be same as parameters: id, nameFirst, nameLast
function makeContact(id, nameFirst, nameLast) {
    var contact = {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
    
    return contact;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
        // create an addContact method
        addContact: function(contact) {
            return contacts.push(contact);
        },
        
        // create a findContact method
        findContact: function(fullName) {
        
        // loop forward through array of contacts
            for(var i = 0; i < contacts.length; i++) {
            
            //check if fullname = "first name space last name" in array
                if(fullName === contacts[i].nameFirst + ' ' + contacts[i].nameLast) {
                    return contacts[i];
                }
            }
        },
        
        // create a remove contact method
        removeContact: function(contact) {
            for(var i = 0; i < contacts.length; i++) {
                if(contact.nameFirst === contacts[i].nameFirst && contact.nameLast === contacts[i].nameLast) {
                // decrease the increment because if conditional passes it will change index of remaining elements   
                    i--;
                
                // removes (ONE) element starting at index plus one
                // NOTE - it's index plus one because we just shifted the index number in the last step
                    return contacts.splice((i + 1), 1);
                    
                }
            }
        },
        
        // add a function to print all contact names in list
        printAllContactNames: function() {
            
        // create a variable to hold new string of full names
        // include first full name
            var allContactNames = contacts[0].nameFirst + ' ' + contacts[0].nameLast;
            
        // loop through array of contacts
            for (var i = 1; i < contacts.length; i++) {
        
        // add a line return before adding each full name to new string
                allContactNames += '\n' + contacts[i].nameFirst + ' ' + contacts[i].nameLast;
            }
            return allContactNames;
        }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
