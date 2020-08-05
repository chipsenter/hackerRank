var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
if(strokes <= 1){
  return names[0];
  //hole in one
}
else if(strokes === 2) {
 return names[1];
 //eagle
}
else if(strokes === 3) {
 return names[2];
 //birdie
}
else if(par === 4 && strokes === 4) {
 return names[3];
 //par
}
else if(par === 5 && strokes === 5) {
  return names[3];
}
else if(par === 4 && strokes === 5) {
 return names[4];
 //bogey
}
else if(strokes <= 6) {
 return names[5];
 //double bogey
}
else if(par > 3 || strokes >= 9) {
 return names[6];
 //go home
}
  else {
    return "You should find something else to do!"
  } 
  // Only change code above this line
}

console.log(golfScore(4, 7));