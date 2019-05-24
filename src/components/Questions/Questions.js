import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";

import classes from "./Questions.module.scss";

const wanakana = require('wanakana');

const questions = props => {
  let inputEl = useRef(null);
  if (props.inputMode !== 'Default') {
    // Cheeky workaround for wanakana so the binding always works.
    setTimeout(() => {
      if (inputEl.current) {
        wanakana.bind(inputEl.current, { IMEMode: props.inputMode });
      }
    }, 200);
    }

  const question = props.questions[props.questionIndex];

  const resultMsg = (usersAnswer, answerWasCorrect) => {
    if (answerWasCorrect) {
      return (
        <span className={classes.CorrectAnswer}>
          {usersAnswer}
          <i className={"fas fa-check-circle " + classes.CorrectAnswer}></i>
        </span>
      );
    }
    return (
        <span className={classes.WrongAnswer}>
          {usersAnswer}
          <i className={"fas fa-times-circle " + classes.WrongAnswer}></i>
        </span>
    );
  }

  const submitHandler = (event) => props.next(event, question.id, question.answer);

  if (!props.endOfQuiz) {
    return (
      <form className={classes.Questions} onSubmit={submitHandler}>
        <h4 className={classes.QuestionNumber}>Question {props.questionIndex + 1} of {props.questions.length}</h4>
        <section key={question.id} className={classes.Question}>
          <p>{question.text}</p>
          <input
            key={props.inputMode}
            className={props.emptyAnswer ? classes.EmptyAnswer : classes.AnswerField}
            ref={inputEl}
            type="text"
            name="answerField"
            autoFocus
            autoComplete="off"
            placeholder="Type the Japanese word here"
            value={props.usersAnswer}
          />
          <input className={classes.NextBtn} type="submit" value="Next"/>
        </section>
      </form>
    );
  } else {
    return (
      <form className={classes.Questions}>
      { props.answerHistory.map((question, index) => (
        <Fragment key={'answer-' + (index + 1)} >
          <h4 className={classes.QuestionNumber}>Question {index + 1} - {question.text}</h4>
          <section className={classes.AnswerHistory}>
            <p className={classes.Answers}>You wrote {resultMsg(question.usersAnswer, question.answerWasCorrect)} </p>
          </section>
        </Fragment>
      ))}
      </form>
    );
  }
};

questions.propTypes = {
  questions: PropTypes.array.isRequired,
  questionIndex: PropTypes.number.isRequired,
  emptyAnswer: PropTypes.bool.isRequired,
  inputMode: PropTypes.string.isRequired,
  endOfQuiz: PropTypes.bool.isRequired
};

export default questions;
