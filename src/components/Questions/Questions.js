import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";

import classes from "./Questions.module.scss";
import Result from  './Result/Result';

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

  const submitHandler = (event) => props.next(event, question.id, question.answer);

  if (props.questions.length && !props.endOfQuiz) {
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
  } else if (props.endOfQuiz){
    return (
      <div className={classes.Questions}>
      { props.answerHistory.map((question, index) => (
        <Fragment key={'answer-' + (index + 1)} >
          <h4 className={classes.QuestionNumber}>Question {index + 1} - {question.text}</h4>
          <Result className={classes.AnswerHistory}
            answerWasCorrect={question.answerWasCorrect}
            correctAnswer={wanakana.toHiragana(question.correctAnswer)}
            usersAnswer={question.usersAnswer}
          />
        </Fragment>
      ))}
      </div>
    );
  } else {
    return null;
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
