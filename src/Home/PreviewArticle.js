import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

// material-ui-icons
import FavoriteIcon from "@material-ui/icons/Favorite";

import convertTime from "../Helpers/datePipe";
import { history } from "../Helpers/history";
import { Style } from "./../components/Style/Style";
import {
  favoriteArticle,
  unFavoriteArticle
} from "../actions/favoriteFollow.action";

const useStyles = makeStyles(theme => Style.Preview);

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function PreviewArticle(props) {
  const classes = useStyles();
  const {
    author,
    createdAt,
    title,
    description,
    favoritesCount,
    tagList,
    isAuth,
    favorited,
    slug
  } = props;

  const renderTag = () => {
    return tagList.map((tag, index) => (
      <Chip className={classes.chip} label={tag} key={index} size="small" />
    ));
  };
  const handleFavorite = () => {
    if (!Object.keys(isAuth).length) {
      history.push("/login");
      return;
    }
    favorited ? props.unFavoriteArticle(slug) : props.favoriteArticle(slug);
  };
  const path = `/profile/${author.username}`;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <StyledLink to={path}>
            {" "}
            <img className={classes.face} src={author.image} alt="" />{" "}
          </StyledLink>
        }
        title={<StyledLink to={path}>{author.username}</StyledLink>}
        subheader={convertTime(createdAt)}
      />
      <CardContent>
        <StyledLink to={`/article/${slug}`}>
          <Typography variant="h5" color="textPrimary" component="p">
            {title}
          </Typography>
          <Typography
            className={classes.mgb10}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </StyledLink>
        {tagList && renderTag()}
      </CardContent>
      <CardActions className={classes.float}>
        <IconButton onClick={handleFavorite} aria-label="Add to favorites">
          <FavoriteIcon
            classes={favorited ? { root: classes.iconFavorite } : null}
          />{" "}
          {favoritesCount}
        </IconButton>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = state => {
  return { isAuth: state.auth };
};

export default connect(
  mapStateToProps,
  { favoriteArticle, unFavoriteArticle }
)(PreviewArticle);
