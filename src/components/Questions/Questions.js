import "./Questions.scss";

import React, { useRef } from "react";
import PropTypes from "prop-types";
import Results from  './Results';

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
    return (
      <Results answerHistory={props.answerHistory} />
    );
  } else {
    return null;
  }
};

questions.propTypes = {
  questions: PropTypes.array,
  questionIndex: PropTypes.number,
  emptyAnswer: PropTypes.bool,
  inputMode: PropTypes.string,
  endOfQuiz: PropTypes.bool
};

questions.defaultProps = {
  inputMode: 'Default'
}

export default questions;
