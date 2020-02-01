export const SET_CURRENT_QUIZ = "SET_CURRENT_QUIZ";
export const UPDATE_ANSWER_HISTORY = "UPDATE_ANSWER_HISTORY";

export function setCurrentQuiz(quizData) {
  return { type: SET_CURRENT_QUIZ, quizData: quizData }

}
export function updateAnswerHistory(questionData) {
  return { type: UPDATE_ANSWER_HISTORY, questionData: questionData }
}

