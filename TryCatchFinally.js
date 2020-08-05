function reverseString(s) {

  try {
    var splitString = s.split("");   

    var reverseArray = splitString.reverse(); 
    
    var joinArray = reverseArray.join(""); 
    console.log(joinArray)
  }
  catch(e) {
    console.log(e.message) 
    console.log(s)
  }

}

 
reverseString(Number(1234));