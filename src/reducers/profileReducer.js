import { GET_PROFILE, CLEAR_PROFILE, FOLLOW_UNFOLLOW } from "../Constants";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return action.payload;
    case CLEAR_PROFILE:
      return {};
    case FOLLOW_UNFOLLOW:
      return {
        ...state,
        profile: { ...state.profile, following: action.following }
      };
    default:
      return state;
  }
};
