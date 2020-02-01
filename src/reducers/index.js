import { combineReducers } from "redux";

import topicsReducer from "../containers/Topics/reducer";
import quizReducer from "../containers/Quiz/reducer";

const reducers = combineReducers({
  topicsReducer,
  quizReducer
});

export default reducers;
