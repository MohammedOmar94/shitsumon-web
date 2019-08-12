import React, { Fragment, useRef, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./Questions.scss";
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
      <form className="questions" onSubmit={submitHandler}>
        <h4 className="questions__questionNumber">Question {props.questionIndex + 1} of {props.questions.length}</h4>
        <section key={question.id} className="questions__question">
          <p>{question.text}</p>
          <input
            key={props.inputMode}
            className={props.emptyAnswer ? "questions__emptyAnswer" : "questions__answerField"}
            ref={inputEl}
            type="text"
            name="answerField"
            autoFocus
            autoComplete="off"
            placeholder="Type the Japanese word here"
            value={props.usersAnswer}
          />
          <input className="questions__nextBtn" type="submit" value="Next"/>
        </section>
      </form>
    );
  } else if (props.endOfQuiz){

    const resultClasses = (answerWasCorrect) => classnames(
       "questions__result",
      { "questions__result--correct": answerWasCorrect },
      { "questions__result--wrong": !answerWasCorrect },
    );

    return (
      <div className="questions__results">
        { props.answerHistory.map((question, index) => (
          <div key={'answer-' + (index + 1)} className={resultClasses(question.answerWasCorrect)}>
            { "Question " +  (index + 1)}
            {/* <Result className={classes.AnswerHistory}
              answerWasCorrect={question.answerWasCorrect}
              correctAnswer={wanakana.toHiragana(question.correctAnswer)}
              usersAnswer={question.usersAnswer}
            /> */}
            { question.answerWasCorrect && <i class="fas fa-check"></i> }
            { !question.answerWasCorrect && <i class="fas fa-times"></i> }
          </div>
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
