import * as actions from "./actions";

const initialState = {
  hasData: false,
  questions: [],
  answerHistory: []
};

export default function quizReducer(state = initialState, action) {
  const { type, questionData, quizData } = action;

  switch (type) {
    case actions.SET_CURRENT_QUIZ:
      return {
        ...state,
        ...quizData,
        questionIndex: 0,
        hasData: true
      };
    case actions.UPDATE_ANSWER_HISTORY:
      return {
        ...state,
        ...questionData,
        hasData: true
      };
    default:
      return state;
  }
}
