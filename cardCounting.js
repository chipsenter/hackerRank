var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:     // increment count change
    case 5:
    case 6:
      count++;
      break;     
    case 10:
    case 'J':
    case 'Q': // decrement count change
    case 'K':
    case 'A':
      count--;
      break;
  }
  if(count > 0){
    
    return count + " Bet";    
  }
  else {
    
    return count + " Hold";
  }
  
}

cc(2); 
cc(2);
cc(10);
cc(7);
cc(8);
console.log(count);
