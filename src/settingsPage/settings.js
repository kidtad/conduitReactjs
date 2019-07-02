import React, { useEffect } from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";

// material-ui components
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { updateUser, clearMessege, logout } from "../actions/index";
import { Style } from "../components/Style/Style";
import ButtonCustomer from "../components/ButtonCustomer/Button";

const useStyles = makeStyles(() => Style.styleForm);
const themes = createMuiTheme(Style.muiThemes);

function Settings(props) {
  const { auth, alertErrors, clearMessege, updateUser, logout } = props;
  const {
    user: {
      user: { bio, email, image, username }
    }
  } = auth;
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      image: image,
      username: username,
      bio: bio,
      email: email,
      password: ""
    }
  });
  useEffect(() => {
    return () => {
      clearMessege();
    };
  }, [clearMessege]);
  const classes = useStyles();
  const onSubmit = valueForm => {
    const inforEdit = { user: valueForm };
    updateUser(inforEdit);
  };
  const handleLogout = () => {
    logout()
  }
  return (
    <div className={classes.container}>
      <MuiThemeProvider theme={themes}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl className={classes.formControl}>
            <TextField
              error={errors.image ? true : false}
              label="URL of profile picture"
              name="image"
              inputRef={register({})}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              error={errors.username ? true : false}
              label="Username"
              name="username"
              inputRef={register({
                required: "username is required"
              })}
            />
            {errors.username && (
              <FormHelperText className="component-error-text" error>
                {errors.username.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              error={errors.bio ? true : false}
              label="Short bio about you"
              multiline={true}
              rows={7}
              name="bio"
              inputRef={register({})}
            />
            {errors.bio && (
              <FormHelperText className="component-error-text" error>
                {errors.bio.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              error={errors.email ? true : false}
              label="Email"
              name="email"
              inputRef={register({
                required: "email is required",
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
            <TextField
              error={errors.password ? true : false}
              type="password"
              label="New Password"
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
          <ButtonCustomer text=" Update Settings" style={Style.buttonEditor} />
        </form>
        <Button
          variant="contained"
          size="medium"
          classes={{ root: classes.button }}
          onClick={handleLogout}
        >
          Or click here to logout.
        </Button>
      </MuiThemeProvider>
    </div>
  );
}
function mapStateToProps(state) {
  const { alertErrors, auth } = state;
  return { alertErrors, auth };
}
export default connect(
  mapStateToProps,
  { updateUser, clearMessege, logout }
)(Settings);
