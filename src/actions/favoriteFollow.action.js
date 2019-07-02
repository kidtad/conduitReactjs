import { Service } from "../Services";
import { alertActions } from "../actions/alert.actions";
import { FOLLOW_UNFOLLOW, FAVORITE_ARTICLE } from "../Constants";

export const favoriteArticle = slug => {
  return dispatch => {
    Service.favoriteArticle(slug).then(
      res => {
        const article = res.article;
        dispatch({ type: FAVORITE_ARTICLE, article });
      },
      error => {
        const { errors } = error.response.data;
        dispatch(alertActions.error(errors));
      }
    );
  };
};
export const unFavoriteArticle = slug => {
  return dispatch => {
    Service.unFavoriteArticle(slug).then(
      res => {
        const article = res.article;
        dispatch({ type: FAVORITE_ARTICLE, article });
      },
      error => {
        const { errors } = error.response.data;
        dispatch(alertActions.error(errors));
      }
    );
  };
};
export const followArticle = usernane => {
  return dispatch => {
    Service.followArticle(usernane).then(
      res => {
        const {
          profile: { following }
        } = res;
        dispatch({ type: FOLLOW_UNFOLLOW, following });
      },
      error => {
        const { errors } = error.response.data;
        dispatch(alertActions.error(errors));
      }
    );
  };
};
export const unFollowArticle = usernane => {
  return dispatch => {
    Service.unFollowArticle(usernane).then(
      res => {
        const {
          profile: { following }
        } = res;
        dispatch({ type: FOLLOW_UNFOLLOW, following });
      },
      error => {
        const { errors } = error.response.data;
        dispatch(alertActions.error(errors));
      }
    );
  };
};
