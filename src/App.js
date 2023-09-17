import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    const fullMobileWidth = 12;  // As an arbitrary width for small devices.
    const listOfPlacesWidth = fullMobileWidth / 3;
    const wholeMapWidth = 2 * listOfPlacesWidth;  // Gets 2/3 of the screen.

    return (
        <>
        <CssBaseline />
        <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={fullMobileWidth} md={listOfPlacesWidth}>
                    <List />
                </Grid>
                <Grid item xs={fullMobileWidth} md={wholeMapWidth}>
                    <Map />
                </Grid>
            </Grid>
        </>
    )
}

export default App;