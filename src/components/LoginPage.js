import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { FormHelperText, Input, InputLabel } from "@material-ui/core";

export default function LoginPage() {
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    </FormControl>
  );
}
