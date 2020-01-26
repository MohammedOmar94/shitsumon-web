import * as actions from "./actions";

const initialState = {
  hasData: false,
  topics: []
};

export default function topicsReducer(state = initialState, action) {
  const { type, topics } = action;

  switch (type) {
    case actions.UPDATE_TOPICS:
      return {
        ...state,
        topics,
        hasData: true
      };
    default:
      return state;
  }
}
