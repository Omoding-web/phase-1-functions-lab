function distanceFromHqInBlocks(dist){
    let a = (Math.abs(dist - 42));
    return a;
}

function distanceFromHqInFeet(dist){
    let a = (Math.abs(dist - 42));
    return (a * 264);

}
function distanceTravelledInFeet(dist1, dist2){
    let a = Math.abs(dist1 - dist2);
    return(a * 264);
}

function calculatesFarePrice(dist1, dist2){
    let a = (Math.abs(dist1 - dist2) * 264);
    if (a <= 400){
        return 0;
    } else if (a > 400 && a <= 2000){
        return ((0.02) * (a - 400));
    } else if (a > 2000 && a <= 2500){
        return 25;
    } else {
        return("cannot travel that far");
    }
}