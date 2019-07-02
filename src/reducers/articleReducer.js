import {
  CREATE_EDIT_ARTICLE,
  GET_ARTICLE,
  CLEAR_ARTICLE,
  FOLLOW_UNFOLLOW,
  FAVORITE_ARTICLE
} from "../Constants/index";

const article = {};
export default (state = article, action) => {
  switch (action.type) {
    case CREATE_EDIT_ARTICLE.CREATE:
      return action.article;
    case CREATE_EDIT_ARTICLE.EDIT:
      return action.article;
    case GET_ARTICLE:
      return action.article;
    case FAVORITE_ARTICLE:
      return action.article;
    case FOLLOW_UNFOLLOW:
      return {...state,author:{...state.author,following:action.following}}
    case CLEAR_ARTICLE:
      return {};
    default:
      return state;
  }
};
