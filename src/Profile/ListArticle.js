import React, { useState } from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import { BannerDiv, Container } from "./Banner";
import MyArticles from "./MyArticles";
import FavoritedArticles from "./FavoritedArticles";

const WhiteDiv = Styled(BannerDiv)`
  background: white
`;

function TabContainer(props) {
  return (
    <Typography component="div" style={{ paddingTop: 24 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  border: {
    boxShadow: "none"
  }
}));

function ListArticle({ profile }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const renderTab = () => {
    return (
      <WhiteDiv>
        <Container>
          <div className={classes.root}>
            <AppBar
              className={classes.border}
              color="inherit"
              position="static"
            >
              <Tabs value={value} onChange={handleChange}>
                <Tab label="My Articles" />
                <Tab label="Favorited Articles" />
              </Tabs>
            </AppBar>
            {value === 0 && (
              <TabContainer>
                <MyArticles username={profile ? profile.username : null} />
              </TabContainer>
            )}
            {value === 1 && (
              <TabContainer>
                <FavoritedArticles
                  username={profile ? profile.username : null}
                />
              </TabContainer>
            )}
          </div>
        </Container>
      </WhiteDiv>
    );
  };

  return renderTab();
}

export default ListArticle;
