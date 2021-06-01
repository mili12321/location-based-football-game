import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDestinationLocation,updateCurrLocation,getDistance } from "../store/actions/locationActions";
import { GoogleMap } from "../cmps/GoogleMap";

export function Home() {

    const [isArrived, setIsArrived] = useState(false)
    const [isStartTracking, setIsStartTracking] = useState(false)
    const currLocation = useSelector(state => state.location.currLocation);
    const destinationLocation = useSelector(state => state.location.destinationLocation);
    const distance = useSelector(state => state.location.distance);

    const dispatch = useDispatch()
    let _navigator

    // getting user's current position 
    useEffect(() => {
        function success(position) {
            console.log('find loc');
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log( 'lat:', latitude, 'lng:', longitude);
            const userCoordinates = {
                lat:latitude,
                lng:longitude
            }
            //update's users current location coordinates
            dispatch(updateCurrLocation(userCoordinates))
            //update's destination coordinates 1k from user
            dispatch(getDestinationLocation(userCoordinates))
        }
    
        function error() {
            console.log('Unable to retrieve your location');
        }
    
        if(!navigator.geolocation) {
          console.log('Geolocation is not supported by your browser');
        } else {
          navigator.geolocation.getCurrentPosition(success, error);
        }
    }, [dispatch])


    function onStartTracking() {
        setIsStartTracking(true)
        //starts tracking location every time its changes
        _navigator =  navigator.geolocation.watchPosition(
            data => {
                const latitude  = data.coords.latitude;
                const longitude = data.coords.longitude;
                console.log( 'lat:', latitude, 'lng:', longitude);
                const newUserCoordinates = {
                    lat:latitude,
                    lng:longitude
                }
                dispatch(updateCurrLocation(newUserCoordinates))
            },
            error => console.log('error',error),
            {
                enableHighAccuracy : true
            }
        );
    }


    useEffect(() => {
        console.log('destinationLocation',destinationLocation);
        dispatch(getDistance(currLocation,destinationLocation))
    }, [currLocation,destinationLocation,dispatch])


    //user arrives to destination
    useEffect(() => {
        if(distance===0.1){
            setIsArrived(p=>!p)
        }
    }, [distance, _navigator, dispatch])


    if (!currLocation||!destinationLocation) return <div>Loading</div>
    return (
        <div className="home-page">
           <GoogleMap currLocation={currLocation} destinationLocation={destinationLocation}/>
           {isArrived&&
                <div className="arriving-msg position-center">
                    <div>GOALLL</div>
                    <div
                        className='start-btn' 
                        onClick={()=>{setIsArrived(p=>!p)
                        dispatch(getDestinationLocation(currLocation))
                        }}>Play again
                    </div>
                </div>
           }
           {!isStartTracking&&<div className='start-btn position-center' onClick={
               ()=>{
                onStartTracking()
               }
            }>Start</div>}
        </div>
    )
}

