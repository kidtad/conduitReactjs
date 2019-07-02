import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

// material-ui components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { withStyles } from "@material-ui/core/styles";

// material-ui-icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Settings from "@material-ui/icons/Settings";
import Launch from "@material-ui/icons/Launch";

import "./Header.css";
import { Style } from "../Style/Style";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  window: PropTypes.func
};

const styles = Style.header;
function Header(props) {
  const { classes, auth } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar classes={{ root: classes.root }}>
          <Toolbar>
            {auth.loggedIn && (
              <div className="header-container">
                <div className="header-title">Conduit</div>
                <div className="header-right">
                  <NavLink to="/" exact activeClassName="selected">
                    <div className="header-home">HOME</div>
                  </NavLink>
                  <NavLink to="/editor" activeClassName="selected">
                    <div className="header-item">
                      <Launch />
                      New Article
                    </div>
                  </NavLink>
                  <NavLink to="/settings" activeClassName="selected">
                    <div className="header-item">
                      <Settings />
                      Settings
                    </div>
                  </NavLink>
                  <NavLink
                    to={`/profile/${auth.user.user.username}`}
                    activeClassName="selected"
                  >
                    <div className="header-item">
                      <img src={auth.user.user.image} alt="" />
                      {auth.user.user.username}
                    </div>
                  </NavLink>
                </div>
              </div>
            )}
            {!auth.loggedIn && (
              <div className="header-container">
                <div className="header-title">Conduit</div>
                <div className="header-right">
                  <NavLink to="/" exact activeClassName="selected">
                    <div className="header-home">HOME</div>
                  </NavLink>
                  <NavLink to="/login" activeClassName="selected">
                    <div className="header-item">
                      <Fingerprint />
                      LOGIN
                    </div>
                  </NavLink>
                  <NavLink to="/register" activeClassName="selected">
                    <div className="header-item">
                      <PersonAdd />
                      REGISTER
                    </div>
                  </NavLink>
                </div>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  const { auth } = state;
  return { auth };
}
export default connect(mapStateToProps)(withStyles(styles)(Header));
