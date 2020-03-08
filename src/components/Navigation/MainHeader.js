import React from "react";
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
  console.log(props);
  const classes = useStyles();

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
        <Button onClick={logout}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainHeader)
);
