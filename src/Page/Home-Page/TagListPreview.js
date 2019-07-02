import React from "react";
import { connect } from "react-redux";

import PreviewArticle from "./PreviewArticle";
import Pagination from "../../components/Pagination";

function TagListPreview(props) {
  const renderList = () => {
    return props.list.articles.map(item => (
      <PreviewArticle key={item.slug} {...item} />
    ));
  };
  return !props.list.articles ? (
    <div>Loading...</div>
  ) : (
    <>
      {renderList()}
      {props.list.articlesCount > 10 && (
        <Pagination
          tag={props.tag}
          {...props.list}
          count={props.list.articlesCount}
        />
      )}
    </>
  );
}

const mapStateToProps = state => {
  return { list: state.listView };
};
export default connect(
  mapStateToProps,
  null
)(TagListPreview);
