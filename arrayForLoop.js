// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  },
  {
      "firstName": "Johan",
      "lastName": "Lindstrom",
      "number": "766",
      "likes": ["JavaScript", "Gaming", "Motocross","ASOT"]
  }

];


function lookUpProfile(name, prop){
// Only change code below this line
for( var i = 0; i < contacts.length; i++) {
  if(contacts[i].firstName === name){
      if(contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop];
      } else {
      return "No such property";
    }
  }
} return "No such contact";
    
// Only change code above this line
}

console.log(lookUpProfile("Johan", "likes"));