function checkObj(obj, checkProp) {
  // Only change code below this line
  var result = "";

  var myObj = {
    "gift": "pony",
    "pet": "kitten",
    "bed": "sleigh",
    "city": "Seattle"
  };
  
  console.log(myObj.hasOwnProperty("gift"));
  console.log(myObj.hasOwnProperty("motocross"));

  switch(checkProp){

    case "gift":
      result = "pony";
      break;
    case "pet":
      result = "kitten";
      break;
    case "bed":
      result = "sleigh";
      break;
    case "city":
      result = "Seattle";
      break;
    default:
      result = "Not Found";
      break;
  }


  return result;
  // Only change code above this line
}
checkObj()