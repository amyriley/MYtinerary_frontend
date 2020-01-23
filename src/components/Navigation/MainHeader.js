import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './MainHeader.css';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const MainHeader = props => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                MYtinerary
                </Typography>
                <Button className={classes.title} color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )

}

export default MainHeader;
