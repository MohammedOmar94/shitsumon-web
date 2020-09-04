import './styles.scss';

import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { toHiragana } from "wanakana";

import Button from "../UI/Button/Button";

import Result from "./Result/Result";

Results.propTypes = {
  answerHistory: PropTypes.array,
  isJapaneseQuiz: PropTypes.bool
}

Results.defaultProps = {
  answerHistory: []
}

function Results({ answerHistory, isJapaneseQuiz }) {
  const [questionIndex, setQuestionIndex] = useState(null);
  const [showQuestion, setQuestionVisibility] = useState(false);

  const selectedQuestion = answerHistory[questionIndex];
  const questionNumber = questionIndex + 1;

  const getCorrectAnswer = (correctAnswer) => {
    return isJapaneseQuiz ? toHiragana(correctAnswer) : correctAnswer
  }

  const resultClasses = answerWasCorrect =>
    classnames(
      "results__result",
      { "results__result--correct": answerWasCorrect },
      { "results__result--wrong": !answerWasCorrect }
    );

  const onQuestionClick = index => {
    setQuestionIndex(index);
    setQuestionVisibility(true);
  };

  const onQuestionClose = () => {
    setQuestionIndex(null);
    setQuestionVisibility(false);
  };

  return (
    <div className="results">
      {showQuestion && (
        <div className="results__question">
          <Result
            className="results__answerHistory"
            answerWasCorrect={selectedQuestion.answerWasCorrect}
            correctAnswer={getCorrectAnswer(selectedQuestion.correctAnswer)}
            usersAnswer={selectedQuestion.usersAnswer}
            questionNumber={questionNumber}
            questionText={selectedQuestion.questionText}
          />
          <div className="results__btnsContainer">
            <Button
              className="results__backBtn"
              onClick={() => onQuestionClose()}
              type="back"
            />
          </div>
        </div>
        )
      }
      {!showQuestion &&
        answerHistory.map((question, index) => (
          <div
            key={"answer-" + (index + 1)}
            className={resultClasses(question.answerWasCorrect)}
            onClick={() => onQuestionClick(index)}
          >
            {"Question " + (index + 1)}
            {question.answerWasCorrect && <i className="fas fa-check"></i>}
            {!question.answerWasCorrect && <i className="fas fa-times"></i>}
          </div>
        ))
      }
    </div>
  );
}

export default Results;
