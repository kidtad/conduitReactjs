import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listViewReducer from "./listViewReducer";
import tagsReducer from "./tagsReducer";
import alertReducer from "./alertReducer";
import article from "./articleReducer";
import comments from "./commentReducer";
import profileReducer from './profileReducer'

export default combineReducers({
  auth: authReducer,
  listView: listViewReducer,
  tags: tagsReducer,
  alertErrors: alertReducer,
  article: article,
  comments:comments,
  profile: profileReducer
});
