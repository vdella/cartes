import React from 'react';

// import { Autocomplete } from '@react-google-maps/api';

import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/material/Icon';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Carte
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                    Type in the name of where you to go!
                    </Typography>
                    {/*<Autocomplete>*/}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    {/*</Autocomplete>*/}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;