let myNumber = 11;
if ( typeof myNumber != 'number'){
    console.log('this is not a number!') 
}else if (myNumber ===  25){
    console.log("Gen");
}else if (myNumber ===  15){
    console.log('GenBuzz'); 
}else {
    console.log('Buzz'); 
} 
  

const CommerceItemlist = 'Shoes,Jeans,hats,socks';
let shoes;

switch (CommerceItemlist) {
   
    case Shoes:
        console.log('Shoes are $50');
      break;
    case Jeans:
        console.log('Jeans are $25');
      break;
    case hats :
        console.log('hats are $12');
      break;
    case socks:
        console.log('socks are $2');
    default:
        console.log('Invalid item');
        break;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log(getRandomInt(50));