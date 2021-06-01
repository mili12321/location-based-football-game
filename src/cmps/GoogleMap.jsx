import React from 'react'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';


class _GoogleMap extends React.Component {

    state = {
        zoom:15,
        MarkerName_1:'Current location',
        MarkerName_2:'Destination'
    }


    render() {
        const { currLocation,destinationLocation } = this.props
        const containerStyle = {
            maxWidth: '1200px',
            width: '100vw',
            height: '800px',
            position:'relative',
            margin:'auto'
        }
        return (
            <React.Fragment>
                <Map 
                style={{width: '100%', height: '100%'}} 
                containerStyle={containerStyle} 
                initialCenter={{
                    lat:destinationLocation.lat-0.006,
                    lng:destinationLocation.lng-0.006
                }}
                center={{
                    lat:destinationLocation.lat-0.006,
                    lng:destinationLocation.lng-0.006
                }}
                google={this.props.google} 
                zoom={this.state.zoom}>
                    <Marker
                        name={this.state.MarkerName_1}
                        position={{ lat: currLocation.lat, lng: currLocation.lng }}
                        title={this.state.MarkerName_1}
                        icon={{
                            url: "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622395344/icons8-soccer-ball-96_undmjj.png"
                        }}
                    />
                    <Marker
                        name={this.state.MarkerName_2}
                        position={{ lat: destinationLocation.lat, lng: destinationLocation.lng }}
                        title={this.state.MarkerName_2}
                        icon={{
                            url:"https://res.cloudinary.com/dzvebcsrp/image/upload/v1622395533/icons8-goal-net-96_dh7n9d.png"
                        }}
                    />
                </Map>
               
            </React.Fragment>
        );
    }
}
 

export const GoogleMap = GoogleApiWrapper({
  apiKey: ('API_KEY')
})(_GoogleMap)