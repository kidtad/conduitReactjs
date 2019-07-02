import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Settings from "@material-ui/icons/Settings";
import Button from "@material-ui/core/Button";
import {
  followArticle,
  unFollowArticle
} from "../../actions/favoriteFollow.action";
import { history } from "../../Helpers/history";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));
const BannerImage = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 20px;
  border-radius: 100px;
  display: block;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fe6b8b;
  flex-direction: column;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const BannerDiv = styled.div`
  padding: 0 18%;
`;

const Banner = props => {
  const classes = useStyles();
  const { profile, isMyProfile, followArticle, unFollowArticle, auth } = props;
  const handleOnclick = () => {
    if(!Object.keys(auth).length) {
      history.push('/login');
      return;
    }
    isMyProfile
      ? history.push("/settings")
      : profile.following
        ? unFollowArticle(profile.username)
        : followArticle(profile.username);
  };
  const renderButton = () => {
    return (
      <Button
        variant="outlined"
        size="small"
        color="default"
        aria-label="Add"
        className={classes.margin}
        onClick={handleOnclick}
      >
        {isMyProfile ? (
          <Settings className={classes.extendedIcon} />
        ) : (
          <AddIcon className={classes.extendedIcon} />
        )}
        {isMyProfile
          ? `Edit Profile Settings`
          : profile.following
            ? `Unfollow ${profile.username}`
            : `Follow ${profile.username}`}
      </Button>
    );
  };

  return !profile ? (
    <BannerDiv>
      {" "}
      <Container>Loading..</Container>
    </BannerDiv>
  ) : (
    <BannerDiv>
      <Container>
        <BannerImage alt="" src={profile.image} />
        <h2>{profile.username}</h2>
        <p style={{ margin: 0 }}>{profile.bio}</p>
        <Right>{renderButton()}</Right>
      </Container>
    </BannerDiv>
  );
};

export default connect(
  null,
  { followArticle, unFollowArticle }
)(Banner);
