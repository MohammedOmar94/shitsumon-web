import { connect } from "react-redux";
import queryString from "query-string";

import { setCurrentQuiz, updateAnswerHistory } from "./actions";

import Quiz from "../../components/Quiz";

const mapStateToProps = (state, ownProps) => {
  const { quizReducer } = state;
  const { location } = ownProps;

  const quizParams = queryString.parse(location.search);
  const { topic, quiz } = quizParams;

  const quizId =  `${topic}__${quiz}`
  const quizData = quizReducer[quizId]

  // debugger

  return {
    // Used to store things like the users answer
    ...quizReducer,
    ...quizData
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onQuizDownload: data => dispatch(setCurrentQuiz(data)),
    onUsersAnswer: data => dispatch(updateAnswerHistory(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
