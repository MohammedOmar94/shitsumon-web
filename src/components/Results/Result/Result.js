import React from "react";
import PropTypes from "prop-types";

import QuestionTitle from "../../UI/QuestionTitle";

import classes from "./Result.module.scss";

Result.propTypes = {
  className: PropTypes.string,
  answerWasCorrect: PropTypes.bool.isRequired,
  usersAnswer: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  questionNumber: PropTypes.number.isRequired
};

function Result({
  className,
  answerWasCorrect,
  usersAnswer,
  correctAnswer,
  questionNumber,
  questionText
}) {

  const UsersAnswer = () => {
    return (
      <p className={classes.Answers}>You wrote {" "}
          {answerWasCorrect &&
          <span className={classes.CorrectAnswer}>
              {usersAnswer}
            <i className="fas fa-check-circle"></i>
          </span>
          }
        {!answerWasCorrect &&
          <span className={classes.WrongAnswer}>
              {usersAnswer}
            <i className="fas fa-times-circle"></i>
          </span>
        }
      </p>
    )
  };

  console.log(questionNumber, questionText, usersAnswer)
  return (
    <div className={className}>
      <QuestionTitle questionNumber={questionNumber} title={questionText} />
      <UsersAnswer />
      {!answerWasCorrect && (
        <p className={classes.Answer}>
          The correct answer was {correctAnswer}
        </p>
      )}
    </div>
  );
}

export default Result;
