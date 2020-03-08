import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { registerUser } from "../../store/actions/userActions";
import { connect } from "react-redux";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      profilePicture: "",
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.user.isAuthenticated) {
      console.log(this.props);
      this.props.history.push("/");
    }
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.email, this.state.password);
    this.setState({ errors });

    const user = this.state;

    console.log(user);
    if (Object.entries(errors).length === 0) {
      this.props.registerUser(user);
    }
    console.log("user after dispatch " + user);
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
          <TextField
            id="standard-basic"
            label="Profile picture"
            value={this.state.profilePicture}
            onChange={this.handleChange("profilePicture")}
          >
            Profile picture
          </TextField>
        </form>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  registerUser: user => dispatch(registerUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
