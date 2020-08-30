import React from 'react';
import PropTypes from 'prop-types';

import classes from '../../../Japanese/Results/Result/Result.module.scss';

const result = (props) => {
  window.scrollTo(0, 0)
  const answerGiven = () => {
    if (props.answerWasCorrect) {
      return (
        <span className={classes.CorrectAnswer}>
          {props.usersAnswer}
          <i className={`fas fa-check-circle ${classes.CorrectAnswer}`}></i>
        </span>
      );
    }
    return (
      <span className={classes.WrongAnswer}>
        {props.usersAnswer}
        <i className={`fas fa-times-circle ${classes.WrongAnswer}`}></i>
      </span>
    );
  }

  const correctAnswer = () => {
    if (!props.answerWasCorrect) {
      return <p className={classes.CorrectAnswer}>The correct answer was {props.correctAnswer}</p>
    } else {
      return null;
    }
  };

  return (
    <section className={props.className}>
      <h4 className="somaliQuestion__questionNumber">Question {props.questionNumber}</h4>
      <p className={classes.QuestionText}>{props.questionText}</p>
      <p className={classes.Answers}>You wrote {answerGiven()}</p>
      {correctAnswer()}
    </section>
  );
}

result.propTypes = {
  className: PropTypes.string,
  answerWasCorrect: PropTypes.bool.isRequired,
  usersAnswer: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  questionIndex: PropTypes.number.isRequired
}

export default result;