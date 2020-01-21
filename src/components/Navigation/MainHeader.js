import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import './MainHeader.css';

const MainHeader = props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>
                    MYtinerary
                </Typography>
                <SearchIcon />
                <InputBase 
                    placeholder="Search..."
                />
            </Toolbar>
        </AppBar>
    )

}

export default MainHeader;
