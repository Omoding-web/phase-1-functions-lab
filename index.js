function distanceFromHqInBlocks(location){
    let b = (Math.abs(location - 42));
    return b;
}

function distanceFromHqInFeet(location){
    let b = (Math.abs(location - 42));
    return (b * 264);

}
function distanceTravelledInFeet(location1, location2){
    let b = Math.abs(location1 - location2);
    return(b * 264);
}

function calculatesFarePrice(location1, location2){
    let b = (Math.abs(location1 - location2) * 264);
    if (b <= 400){
        return 0;
    } else if (b > 400 && b <= 2000){
        return ((0.02) * (b - 400));
    } else if (b > 2000 && b <= 2500){
        return 25;
    } else {
        return("cannot travel that far");
    }
}