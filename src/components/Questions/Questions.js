import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./Questions.scss";
import Result from  './Result/Result';
import Button from "../UI/Button/Button";

const wanakana = require('wanakana');

const questions = props => {

  const [questionIndex, setQuestionIndex] = useState(null)
  const [showQuestion, setQuestionVisibility] = useState(false)
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

  const onQuestionClick = (index) => {
    setQuestionIndex(index);
    setQuestionVisibility(true)
  }

  const onQuestionClose = () => {
    setQuestionIndex(null);
    setQuestionVisibility(false)
  }

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
      <>
        <div className="questions__results">
          { showQuestion && <Button className="questions__backBtn" onClick={() => onQuestionClose()} type="back" />}
          { !showQuestion && props.answerHistory.map((question, index) => (
              <div
                key={'answer-' + (index + 1)}
                className={resultClasses(question.answerWasCorrect)}
                onClick={() => onQuestionClick(index)}
              >
                { "Question " +  (index + 1)}
                { question.answerWasCorrect && <i className="fas fa-check"></i> }
                { !question.answerWasCorrect && <i className="fas fa-times"></i> }
              </div>
          ))}
          {showQuestion &&
            <Result className="questions__answerHistory"
              answerWasCorrect={props.answerHistory[questionIndex].answerWasCorrect}
              correctAnswer={wanakana.toHiragana(props.answerHistory[questionIndex].correctAnswer)}
              usersAnswer={props.answerHistory[questionIndex].usersAnswer}
              questionNumber={questionIndex + 1}
              questionText={props.answerHistory[questionIndex].text}
            />}
        </div>
      </>
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

questions.defaultProps = {
  inputMode: 'Default'
}

export default questions;
