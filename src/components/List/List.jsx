import React, { useState, useEffect, createRef } from 'react';
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select, CircularProgress } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';

const List = ( { places, childClicked, isLoading }) => {
    const classes = useStyles();

    // Types of places and their ratings act as mapping functions. They are properly called onChange
    // of their own Select component.
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    const [elementRefs, setElementRefs] = useState([]);

    // Gets as many place references as possible. If a place doesn't have any, we create one at the end.
    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elementRefs[i] || createRef());

        setElementRefs(refs);
    }, [places]);

    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, hotels & attractions around you</Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>) : (
                <>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Type</InputLabel>
                        <Select value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel>Rating</InputLabel>
                        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value={0}>All</MenuItem>
                            <MenuItem value={3}>Above 3 stars</MenuItem>
                            <MenuItem value={4}>Above 4 stars</MenuItem>
                            <MenuItem value={4.5}>Above 4.5 stars</MenuItem>
                        </Select>
                    </FormControl>

                    <Grid container spacing={3} className={classes.list}>
                        {places?.map((place, i) => (
                            <Grid ref={elementRefs[i]} item key={i} xs={12}>
                                <PlaceDetails
                                    place={place}
                                    selected={Number(childClicked) === i}
                                    refProp={elementRefs[i]}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    )
}

export default List;