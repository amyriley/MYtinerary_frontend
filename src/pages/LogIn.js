import React from "react";
import LogInForm from "../components/UIElements/LogInForm";
import Button from "@material-ui/core/Button";

export default function LogIn() {
  return (
    <div>
      <h1>LogIn</h1>
      <LogInForm />
      <Button to={"/api/users/google"}>Login with Google</Button>
    </div>
  );
}
