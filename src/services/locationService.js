import {getDestination} from '../utils/getDestination'
import {calcDistanceBetween} from '../utils/calcDistanceBetween'

export const locationService = {
    getDistance,
    getDestinationLocation
}

async function getDestinationLocation(currentLocation) {
    let destinationLocation
    if(currentLocation){
        destinationLocation= getDestination(currentLocation.lat,currentLocation.lng)
    }else{
        destinationLocation=null
    }
    return destinationLocation 
}

async function getDistance(currentLocation,destinationLocation) {
    const distance  = calcDistanceBetween(currentLocation.lat, currentLocation.lng, destinationLocation.lat, destinationLocation.lng).toFixed(1)
    return parseFloat(distance)
}


