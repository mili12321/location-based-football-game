const initialState = {
    currLocation:null,
    destinationLocation:null,
    distance: null
}

export function locationReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CURRENT_LOCATION':
            return {
                ...state,
                currLocation: action.coordinates
            }  
        case 'SET_DESTINATION_LOCATION':
            return {
                ...state,
                destinationLocation: action.destinationLocation
            } 
        case 'SET_DISTANCE':
            return {
                ...state,
                distance: action.distance
            } 
        default:
            return state
    }
}