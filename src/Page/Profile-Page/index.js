import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProfile, clearProfile } from "../../actions";
import Banner from "./Banner";
import ListArticle from "./ListArticle";
const Profile = ({ match, auth, profile, getProfile, clearProfile }) => {
  useEffect(() => {
    if (match.params.user) {
      getProfile(match.params.user);
    }
    return () => {
      clearProfile();
    };
  }, [getProfile, match.params.user, clearProfile]);
  return (
    <>
      <Banner
        {...profile}
        isMyProfile={
          auth.user
            ? auth.user.user.username === match.params.user
              ? true
              : false
            : false
        }
        auth={auth}
      />
      <ListArticle {...profile} />
    </>
  );
};

const mapStateToProps = state => {
  return { profile: state.profile, auth: state.auth };
};

export default connect(
  mapStateToProps,
  { getProfile, clearProfile }
)(Profile);
