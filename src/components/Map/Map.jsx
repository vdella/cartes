import React from 'react';
import GoogleMapReact from 'google-map-react';

import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates }) => {
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB91jVhjAoGNLQz70UMIyhvdBujZi3uxbk' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map;