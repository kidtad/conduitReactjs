import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getListView, clearListView } from "../actions";
import PreviewArticle from "../Home/PreviewArticle";
import Pagination from "../components/Pagination";

function MyArticles(props) {
  const { list, username, clearListView, getListView } = props;
  useEffect(() => {
    if (username) {
      getListView(0, 10, null, null, username);
    }
    return () => {
      clearListView();
    };
  }, [getListView, username, clearListView]);

  const renderList = list => {
    if (list.articles.length === 0) {
      return <div>No articles here... </div>;
    }
    return list.articles.map(item => (
      <PreviewArticle {...item} key={item.slug} />
    ));
  };

  return !list ? (
    <div>No articles here...</div>
  ) : (
    <>
      {renderList(list)}
      {list.articlesCount > 10 && (
        <Pagination {...list} count={list.articlesCount} favorited={username} />
      )}
    </>
  );
}

const mapStateToProps = state => {
  return { list: state.listView };
};
export default connect(
  mapStateToProps,
  { getListView, clearListView }
)(MyArticles);
