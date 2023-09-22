import React, { useState, useEffect } from 'react';

import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api'

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    const [places, setPlaces] = useState([]);
    const [childClicked, setChildClicked] = useState({});

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    // Once the app starts, ask for the user's actual geolocation. Deps left empty to call this effect only once.
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        });
    }, []);

    // Gathers places according to map bounds. We wait for place references to load before showing their list.
    useEffect(() => {
        setIsLoading(true);

        getPlacesData(bounds.ne, bounds.sw)
            .then((data) => {
                setPlaces(data);
                setIsLoading(false);
            });
    }, [coordinates, bounds]);

    const fullMobileWidth = 12;  // As an arbitrary width for small devices.
    const listOfPlacesWidth = fullMobileWidth / 3;
    const wholeMapWidth = 2 * listOfPlacesWidth;  // Gets 2/3 of the screen.

    return (
        <>
        <CssBaseline />
        <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={fullMobileWidth} md={listOfPlacesWidth}>
                    <List
                        places={places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                    />
                </Grid>
                <Grid item xs={fullMobileWidth} md={wholeMapWidth}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App;