// Code your solution in this file!

// Tried to make the function more general by adding "start" & "destination" as parametars
function distanceFromHqInBlocks(start , destination = 42){
    if(start >= destination){
        return start - destination;
    } else {
        return destination - start;
    }
}
function distanceFromHqInFeet(start,destination){
    const blocks = distanceFromHqInBlocks(start,destination);
    return blocks * 264;
}
function distanceTravelledInFeet(start, destination){
    const travelledInFeet = distanceFromHqInFeet(start, destination);
    return travelledInFeet;
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start,destination);
    if(distance <= 400){
        return 0;
    } else if(distance <= 2000){
        return (distance-400) * 0.02;
    } else if(distance <= 2500){
        return 25;
    } else{
        return "cannot travel that far"
    }
}