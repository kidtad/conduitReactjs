import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// material-ui components
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// material-ui-icons
import Delete from "@material-ui/icons/Delete";

import {
  getComment,
  addComment,
  deleteComment,
  clearComment
} from "../../actions/comment.action";
import convertTime from "../../Helpers/datePipe";
import { Style } from "../../components/Style/Style";
import { history } from "../../Helpers/history";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
const styles = () => Style.footerArticleStyle;
const themes = createMuiTheme(Style.muiThemes);
function FooterArticle(props) {
  const {
    classes,
    getComment,
    article,
    comments,
    auth,
    addComment,
    deleteComment,
    clearComment
  } = props;
  const [initialComment, setinitialComment] = useState("");
  const hanldeChange = event => {
    setinitialComment(event.target.value);
  };
  const postComment = () => {
    if (initialComment.trim().length > 0) {
      const valueComment = { comment: { body: initialComment.trim() } };
      addComment(article.slug, valueComment);
      setinitialComment("");
    }
  };
  const handleClickauthor = user => {
    history.push(`/profile/${user}`);
  };
  const handleDelete = id => {
    deleteComment(article.slug, id);
  };
  useEffect(() => {
    getComment(article.slug);
    return () => {
      clearComment();
    };
  }, [getComment, clearComment, article.slug]);
  const renderComment = () => {
    return comments.map(comment => {
      let isauthor = false;
      if (Object.keys(auth).length !== 0) {
        isauthor = auth.user.user.username === comment.author.username;
      } else isauthor = false;
      return (
        <Card className={classes.card} key={comment.id}>
          <CardHeader
            avatar={
              <Avatar
                className={classes.avatar}
                alt=""
                src={comment.author.image}
                onClick={() => handleClickauthor(comment.author.username)}
              />
            }
            action={
              isauthor ? (
                <IconButton
                  onClick={() => {
                    handleDelete(comment.id);
                  }}
                >
                  <Delete />
                </IconButton>
              ) : (
                ""
              )
            }
            title={
              <StyledLink to={`/profile/${comment.author.username}`}>
                {comment.author.username}
              </StyledLink>
            }
            subheader={
              <Typography variant="subtitle2" className={classes.time}>
                {convertTime(comment.createdAt)}
              </Typography>
            }
          />
          <CardContent>
            <Typography component="p">{comment.body}</Typography>
          </CardContent>
        </Card>
      );
    });
  };
  return (
    <div>
      {Object.keys(auth).length === 0 && (
        <div className="signin-signup">
          <NavLink to="/login">Sign in</NavLink>
          <span> or </span>
          <NavLink to="/register">Sign Up </NavLink>
          <span>to add comments on this article</span>
          <div className={classes.comment}>
            {comments.length > 0 && renderComment()}
          </div>
        </div>
      )}
      {Object.keys(auth).length > 0 && (
        <div className={classes.footer}>
          <MuiThemeProvider theme={themes}>
            <TextField
              fullWidth={true}
              label="Write a comment..."
              multiline={true}
              rows={7}
              value={initialComment}
              onChange={hanldeChange}
            />
          </MuiThemeProvider>
          <div className="button-comment">
            <Button
              variant="contained"
              size="medium"
              classes={{ root: classes.button }}
              onClick={postComment}
            >
              Post Comment
            </Button>
          </div>
          {comments.length > 0 && renderComment()}
        </div>
      )}
    </div>
  );
}
function mapStateToProps(state) {
  const { comments, auth, article } = state;
  return { comments, auth, article };
}
export default connect(
  mapStateToProps,
  { getComment, addComment, deleteComment, clearComment }
)(withStyles(styles)(FooterArticle));
