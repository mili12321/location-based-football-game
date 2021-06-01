export function  getDestination(latitude, longitude) {
    
    const earth = 6378.137;  //radius of the earth in kilometer
    const pi = Math.PI;
    const m = (1 / ((2 * pi / 360) * earth)) / 1000; //1 meter in degree

    // For latitud
    const new_latitude = latitude + (1000 * m);

    // For longitude
    const new_longitude = longitude + (1000 * m) /  Math.cos(latitude * (pi / 180));

    const destinationCoordinates = {
        lat:new_latitude-0.003,
        lng:new_longitude-0.003
    }

    return destinationCoordinates

}
