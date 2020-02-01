import { connect } from "react-redux";
import { setCurrentQuiz, updateAnswerHistory } from "./actions";
import Quiz from "../../components/Quiz";

const mapStateToProps = state => {
  const { quizReducer } = state;

  return {
    ...quizReducer
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onQuizDownload: data => dispatch(setCurrentQuiz(data)),
    onUsersAnswer: data => dispatch(updateAnswerHistory(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
