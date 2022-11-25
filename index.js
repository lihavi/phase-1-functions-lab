// Code your solution in this
function distanceFromHqInBlocks (pickupLocation){
    //returns the number of blocks given a value
    const scuberLocation = 42 // number the scuberhead quarter
    const noOfBlocks = Math.abs(pickupLocation - scuberLocation)
    return noOfBlocks
}

// console.log("no of blocks", distanceFromHqInBlocks(10));
// console.log("no of blocks", distanceFromHqInBlocks(60));
// console.log("no of blocks", distanceFromHqInBlocks(80));

function distanceFromHqInFeet(someValue) {
    const noOfFeet = 264
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    const noOfBlocks = distanceFromHqInBlocks(someValue);
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    const distanceFromHqInFeet = noOfFeet*noOfBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distanceFromHqInFeet
  }
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const noOfFeet = 264
    const distance = Math.abs(destination-start)
    const distanceTravelledInFeet = distance * noOfFeet
    return distanceTravelledInFeet
    
  }
    // 
    function  calculatesFarePrice (start, destination) {
  
   const distance = distanceTravelledInFeet(start,destination)
   if(distance<=400) 
   {
    return 0;
    }
   else if(distance>400&&distance<=2000){
    return .02*(distance-400);
   }
   else if(distance>2000&&distance<2500){
    return 25;
   }
   else {return 'cannot travel that far';}
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

     
    
    
    
    
  
