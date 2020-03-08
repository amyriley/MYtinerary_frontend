import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/userActions";
import { withRouter } from "react-router-dom";
import "./MainHeader.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const MainHeader = props => {
  const classes = useStyles();

  const isAuthenticated = props.isAuthenticated;
  console.log(props);

  const logout = e => {
    e.preventDefault();
    props.logoutUser();
    props.history.push("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">MYtinerary</Typography>
        {isAuthenticated ? (
          <Fragment>
            <Typography>{props.currentUser.email}</Typography>
            <Button onClick={logout}>Logout</Button>
          </Fragment>
        ) : (
          <Fragment>
            <Button
              component={Link}
              className={classes.title}
              color="inherit"
              to="/login"
            >
              Login
            </Button>
            <Button
              component={Link}
              className={classes.title}
              color="inherit"
              to="/signup"
            >
              Register
            </Button>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainHeader)
);
