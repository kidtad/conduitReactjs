import React from "react";
import { connect } from "react-redux";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

import { getTagList, getListView } from "../actions/index";
import { Style } from "./../components/Style/Style";

const useStyles = makeStyles(() => Style.tag);

function Tags(props) {
  const { getTagList, getListView, handleSetTag, currentTag } = props;
  const classes = useStyles();
  React.useEffect(() => {
    getTagList();
  }, [getTagList]);

  const handleClick = tag => {
    getListView(0, 10, tag);
    handleSetTag(tag);
  };

  return (
    <div className="sidebar">
      <div className="title-tag">Popular Tags</div>
      <div className="sidebar-tag-list">
        {props.tags.map((el, index) => (
          <Chip
            onClick={() => handleClick(el)}
            className={
              currentTag === el
                ? `${classes.active} ${classes.chip}`
                : `${classes.chip}`
            }
            label={el}
            key={index}
            size="small"
          />
        ))}
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    tags: state.tags
  };
}
export default connect(
  mapStateToProps,
  { getTagList, getListView }
)(Tags);
