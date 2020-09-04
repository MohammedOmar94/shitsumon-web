import './styles.scss';

import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { toHiragana } from "wanakana";

import Button from "../UI/Button/Button";

import Result from "./Result/Result";

Results.propTypes = {
  quizScore: PropTypes.number,
  answerHistory: PropTypes.array,
  isJapaneseQuiz: PropTypes.bool
}

Results.defaultProps = {
  quizScore: 0,
  answerHistory: []
}

function Results({ answerHistory, isJapaneseQuiz, quizScore }) {
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

  const numberOfQuestions = answerHistory.length
  const answersCorrectAsPercentage = numberOfQuestions ? `${Math.round((quizScore/numberOfQuestions) * 100)}%` : "0%"

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
        <>
          <div className="results__scoreContainer">
            <p className="results__scoreLabel">Your score</p>
            {answersCorrectAsPercentage}
          </div>
          <div className="results__square">
            {answerHistory.map((question, index) => (
              <div
                key={"answer-" + (index + 1)}
                className={resultClasses(question.answerWasCorrect)}
                onClick={() => onQuestionClick(index)}
              >
                {"Question " + (index + 1)}
                {question.answerWasCorrect && <i className="fas fa-check"></i>}
                {!question.answerWasCorrect && <i className="fas fa-times"></i>}
              </div>
            ))}
          </div>
          <div className="results__btnsContainer">
            <Button
              className="results__backBtn"
              onClick={() => window.history.back()}
              type="back"
            />
          </div>
      </>
      }
    </div>
  );
}

export default Results;
