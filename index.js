// Code your solution in this file!
function distanceFromHqInBlocks(street){
    let Hq = 42;
    return Math.abs(street - Hq);
}
distanceFromHqInBlocks(50);

function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264;
}
distanceFromHqInFeet(50);

function distanceTravelledInFeet(start, destination){
    let value = Math.abs(destination - start);
    return value * 264;
}
// console.log(distanceTravelledInFeet(50,58));

function calculatesFarePrice(start,destination){
    let feet = Math.abs(destination - start) * 264 ;
    let  price = 0.02;
    if(feet <= 400){
        return 0;
    }
    else if(feet > 400 && feet<= 2000){
        return price * (feet - 400)
          }
    else if(feet >= 2000 && feet <= 2500){
      return 25
    }
    else{
        return "cannot travel that far"
    }

}
console.log(calculatesFarePrice(50, 58 ))