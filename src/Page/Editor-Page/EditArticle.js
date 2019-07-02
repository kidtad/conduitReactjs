import React, { useState, useEffect } from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";

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
import TextField from "@material-ui/core/TextField";

import {
  createArticle,
  clearMessege,
  clearArticle,
  editArticle
} from "../../actions/index";
import { Style } from "../../components/Style/Style";
import ChipInput from "material-ui-chip-input";
import ButtonCustomer from "../../components/ButtonCustomer/Button";
import { Service } from "../../Services/Services";

const useStyles = makeStyles(theme => Style.styleForm);
const themes = createMuiTheme(Style.muiThemes);

function EditArticle(props) {
  const {
    alertErrors,
    clearMessege,
    createArticle,
    match,
    clearArticle,
    editArticle
  } = props;
  const {
    params: { slug }
  } = match;
  const { handleSubmit, register, errors, setValue } = useForm();
  const [listTag, setlistTag] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    if (slug) {
      Service.getArticle(slug).then(res => {
        const { title, body, description, tagList } = res.article;
        setValue("title", title);
        setValue("body", body);
        setValue("description", description);
        setlistTag(tagList);
      });
    } else clearArticle();
    return () => {
      clearMessege();
    };
  }, [clearMessege, slug, clearArticle]);
  const onSubmit = valueForm => {
    const newArticle = { article: { ...valueForm, listTag } };
    slug ? editArticle(newArticle, slug) : createArticle(newArticle);
  };
  const handleChange = chip => {
    setlistTag([...listTag, chip]);
  };
  const handleDeleteChip = chip => {
    setlistTag(listTag.filter(c => c !== chip));
  };

  return (
    <div className={classes.container}>
      <MuiThemeProvider theme={themes}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          onKeyPress={e => {
            if (e.key === "Enter") e.preventDefault();
          }}
        >
          <FormControl className={classes.formControl}>
            <InputLabel error={errors.title ? true : false}>
              Article Title
            </InputLabel>
            <Input
              error={errors.title ? true : false}
              name="title"
              inputRef={register({
                required: "Title is required"
              })}
            />
            {errors.title && (
              <FormHelperText className="component-error-text" error>
                {errors.title.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel error={errors.description ? true : false}>
              What's this article about?
            </InputLabel>
            <Input
              error={errors.description ? true : false}
              name="description"
              inputRef={register({
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Description is minLength 10 or more"
                },
                maxLength: {
                  value: 90,
                  message: "Description maxLength is 90"
                }
              })}
            />
            {errors.description && (
              <FormHelperText className="component-error-text" error>
                {errors.description.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              error={errors.body ? true : false}
              label="Write your article (in markdown)"
              margin="normal"
              multiline={true}
              rows={7}
              name="body"
              inputRef={register({
                required: "Body is required",
                minLength: {
                  value: 8,
                  message: "Body must be a min length 8 or more characters"
                }
              })}
            />

            {errors.body && (
              <FormHelperText className="component-error-text" error>
                {errors.body.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl}>
            <ChipInput
              label="Add a tag"
              value={listTag}
              onAdd={chip => handleChange(chip)}
              onDelete={chip => handleDeleteChip(chip)}
              classes={{
                chip: classes.chip
              }}
            />
          </FormControl>
          {alertErrors.message && (
            <FormHelperText className="component-error-text" error>
              Article not owned by user or Tag cannot be identical
            </FormHelperText>
          )}
          <ButtonCustomer text="Publish Article" style={Style.buttonEditor} />
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
  { createArticle, clearMessege, clearArticle, editArticle }
)(EditArticle);
