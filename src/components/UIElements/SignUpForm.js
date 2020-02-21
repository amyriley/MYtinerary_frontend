import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { postUser } from "../../store/actions/userActions";
import { connect } from "react-redux";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      profilePicture: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
      profilePicture: this.state.profilePicture
    };
    console.log(user);
    this.props.dispatch(postUser(user));
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
          <TextField
            id="standard-basic"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange("password")}
          >
            Password
          </TextField>
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
  cities: state.user.items,
  loading: state.user.loading,
  error: state.user.error
});

export default connect(mapStateToProps)(SignUpForm);
