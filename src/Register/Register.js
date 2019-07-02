import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// material-ui components
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";

// material-ui-icons
import Face from "@material-ui/icons/Face";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import LockOutlined from "@material-ui/icons/LockOutlined";

import ButtonCustomer from "../components/ButtonCustomer/Button";
import { Style } from "./../components/Style/Style";
import { REGISTER } from "../Constants/index";
import { loginRegister, clearMessege } from "../actions/index";


const useStyles = makeStyles(theme => Style.styleForm);
const themes = createMuiTheme(Style.muiThemes);

function Register(props) {
  const { loginRegister, alertErrors, clearMessege } = props;
  const { handleSubmit, register, errors } = useForm();
  const classes = useStyles();
  React.useEffect(() => {
    clearMessege();
  }, [clearMessege]);
  const onSubmit = user => {
    const inforUser = { user };
    loginRegister(inforUser, REGISTER);
  };
  return (
    <div className={classes.container}>
      <MuiThemeProvider theme={themes}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="tittle">Register</div>
          <NavLink to="/login" className="login-register">
            Have an account?
          </NavLink>
          <FormControl className={classes.formControl}>
            <InputLabel
              error={errors.username ? true : false}
            >
              Enter your username
            </InputLabel>
            <Input
              error={errors.username ? true : false}
              startAdornment={
                <InputAdornment position="start">
                  <Face />
                </InputAdornment>
              }
              name="username"
              inputRef={register({
                required: "Username is required"
              })}
            />
            {errors.username && (
              <FormHelperText className="component-error-text" error>
                {errors.username.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel
              error={errors.email ? true : false}
            >
            Enter your email
            </InputLabel>
            <Input
              error={errors.email ? true : false}
              startAdornment={
                <InputAdornment position="start">
                  <EmailOutlined />
                </InputAdornment>
              }
              name="email"
              inputRef={register({
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Email address is invalid"
                }
              })}
            />
            {errors.email && (
              <FormHelperText className="component-error-text" error>
                {errors.email.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel
              error={errors.password ? true : false}
            >
            Enter your Password
            </InputLabel>
            <Input
              error={errors.password ? true : false}
              startAdornment={
                <InputAdornment position="start">
                  <LockOutlined />
                </InputAdornment>
              }
              type="password"
              name="password"
              inputRef={register({
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be a min length 8 or more characters"
                }
              })}
            />
            {errors.password && (
              <FormHelperText className="component-error-text" error>
                {errors.password.message}
              </FormHelperText>
            )}
          </FormControl>
          {alertErrors.message && (
            <FormHelperText className="component-error-text" error>
              Email or Username has already been taken
            </FormHelperText>
          )}
          <ButtonCustomer text="Sign Up" style={Style.buttonLogin} />
        </form>
      </MuiThemeProvider>
    </div>
  );
}
function mapStateToProps(state) {
  const { alertErrors } = state;
  return { alertErrors };
}
export default connect(
  mapStateToProps,
  { loginRegister, clearMessege }
)(Register);
