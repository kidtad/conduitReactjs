import { Service } from "../Services";
import { alertActions } from "../actions/alert.actions";
import { COMMENT } from "../Constants/index";

export const getComment = slug => {
  return dispatch => {
    Service.getcomment(slug).then(
      res => {
        let { comments } = res;
        dispatch({ type: COMMENT.GET, comments });
      },
      error => {
        const { errors } = error.response.data;
        dispatch(alertActions.error(errors));
      }
    );
  };
};

export const addComment = (slug, comment) => {
  return dispatch => {
    Service.postComment(slug, comment).then(
      res => {
        let { comment } = res;
        dispatch({ type: COMMENT.CREATE, comment });
      },
      error => {
        const { errors } = error.response.data;
        dispatch(alertActions.error(errors));
      }
    );
  };
};
export const deleteComment = (slug, id) => {
  return dispatch => {
    Service.deleteComment(slug, id).then(
      res => {
        dispatch({ type: COMMENT.DELETE, id });
      },
      error => {
        const { errors } = error.response.data;
        dispatch(alertActions.error(errors));
      }
    );
  };
};
export const clearComment = () => {
  return dispatch => {
    dispatch({ type: COMMENT.CLEAR });
  };
};
