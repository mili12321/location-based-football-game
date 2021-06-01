import { locationService } from '../../services/locationService'
import { loading, doneLoading } from './systemActions';

export function getDistance(currentLocation,destinationLocation) {
    return async dispatch => {
        try{
            dispatch(loading());
            const distance = await locationService.getDistance(currentLocation,destinationLocation);
            dispatch({ type: 'SET_DISTANCE', distance })
        }catch(err){
            console.log('err in updateDistance', err);
        }finally{
            dispatch(doneLoading());
        }
    }
}

export function getDestinationLocation(currentLocation) {
  return async dispatch => {
      try{
        const destinationLocation = await locationService.getDestinationLocation(currentLocation)
        console.log('destinationLocation from actions',destinationLocation);
        dispatch({ type: 'SET_DESTINATION_LOCATION', destinationLocation})
      }catch(err){
        console.log('err in getDestinationLocation', err); 
      }
  }
}



export function updateCurrLocation(coordinates) {

  return async dispatch => {
      try{
        dispatch({ type: 'SET_CURRENT_LOCATION', coordinates})
      }catch(err){
          console.log('err in getCurrLocation', err); 
      }
  }
}


