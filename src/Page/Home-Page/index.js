import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Banner from "./Banner";
import Tags from "./Tags";
import List from "./List";
import "./style.css";

function Home(props) {
  const { auth } = props;
  const [isAuth, setIsAuth] = useState(false);
  const [tag, setTag] = useState(null);
  useEffect(() => {
    if (auth && auth.loggedIn) setIsAuth(true);
  }, [auth, isAuth]);

  const handleSetTag = tag => {
    setTag(tag);
  };
  const removeTag = () => {
    setTag(null);
  };
  return (
    <div className="home">
      <Banner />
      <div className="flex">
        <List {...auth} tag={tag} isAuth={isAuth} removeTag={removeTag} />
        <Tags currentTag={tag} handleSetTag={handleSetTag} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(
  mapStateToProps,
  null
)(Home);
