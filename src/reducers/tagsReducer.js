import { GET_TAGLIST } from "../Constants/index";

const intinitalStateTag = [];
export default (state = intinitalStateTag, action) => {
  switch (action.type) {
    case GET_TAGLIST:
      return [...action.tags];
    default:
      return state;
  }
};
