import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/userActions";

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  login = e => {
    e.preventDefault();
    const errors = this.validate(this.state.email, this.state.password);
    this.setState({ errors });
    const user = this.state;
    if (Object.entries(errors).length === 0) {
      this.props.loginUser(user);
    }
  };

  validate = (email, password) => {
    let errors = {};

    if (!email) {
      errors["email"] = "Email is required";
    }

    if (!password) {
      errors["password"] = "Password is required";
    }

    return errors;
  };

  render() {
    return (
      <div>
        <form>
          <TextField
            id="standard-basic"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange("email")}
          >
            Email address
          </TextField>
          <div>
            {this.state.errors["email"] && (
              <span>{this.state.errors["email"]}</span>
            )}
          </div>
          <TextField
            id="standard-basic"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange("password")}
          >
            Password
          </TextField>
          <div>
            {this.state.errors["password"] && (
              <span>{this.state.errors["password"]}</span>
            )}
          </div>
        </form>
        <Button onClick={this.login}>Login</Button>
        <a href="http://localhost:5000/api/users/auth/google">
          Sign In with Google
        </a>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user))
});

export default connect(null, mapDispatchToProps)(LogInForm);
