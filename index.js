// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    const distanceInBlocks = Math.abs(blocks - 42)
    return distanceInBlocks;
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(blocks){
    let distanceInFeet = distanceFromHqInBlocks(blocks) * 264;
    return distanceInFeet;
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start,destination) { 
    var feet;
    return feet = Math.abs((Math.abs(destination) - Math.abs(start)) * 264);
}
distanceTravelledInFeet();

function calculatesFarePrice(start, destination){
    var fare;
    let feet = Math.abs((Math.abs(destination) - Math.abs(start)) * 264);
    if ( feet <= 400){
        return fare = 0;
    } else if ((feet <= 2000)){
        return fare = (feet - 400) * 0.02;
    }else if (feet <= 2500){
        return fare = 25;
    }else {
        return "cannot travel that far"
    }
}