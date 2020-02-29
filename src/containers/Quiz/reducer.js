import * as actions from "./actions";

export default function quizReducer(state = {}, action) {
  const { type, questionData, quizData } = action;

  switch (type) {
    case actions.SET_CURRENT_QUIZ:
      return {
        // Other cached quiz objects.
        ...state,
        [quizData.id]: {
          ...quizData.data,
          questionIndex: 0,
          hasData: true,
          answerHistory: []
        }
      };
    case actions.UPDATE_ANSWER_HISTORY:
      return {
        ...state,
        [questionData.id]: {
          // Current question data (e.g. questions in quiz)
          ...state[questionData.id],
          // Updated question data (e.g. answerHistory, score etc.)
          ...questionData.data
        }
      };
    default:
      return state;
  }
}
