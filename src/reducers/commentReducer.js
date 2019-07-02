import { COMMENT } from "../Constants/index";

const comments = [];
export default (state = comments, action) => {
  switch (action.type) {
    case COMMENT.GET:
      return action.comments;
    case COMMENT.CREATE:
      return [action.comment, ...state];
    case COMMENT.DELETE:
      return state.filter(comment => comment.id !== action.id);
    case COMMENT.CLEAR:
      return []
    default:
      return state;
  }
};
