import { combineReducers } from "redux";

import topicsReducer from "../containers/Topics/reducer";
import quizReducer from "../containers/Quiz/reducer";
import languageSelectorReducer from "../containers/SideDrawer/reducer";

const reducers = combineReducers({
  topicsReducer,
  quizReducer,
  languageSelectorReducer
});

export default reducers;
