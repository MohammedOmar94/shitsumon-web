import './styles.scss';

import React, { useState } from "react";
import classnames from "classnames";
import { toHiragana } from "wanakana";

import Button from "../../../UI/Button/Button";

import Result from "./Result/Result";

function Results({ answerHistory }) {
  const [questionIndex, setQuestionIndex] = useState(null);
  const [showQuestion, setQuestionVisibility] = useState(false);

  const selectedQuestion = answerHistory[questionIndex];
  const questionNumber = questionIndex + 1;

  console.log(selectedQuestion)

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
            correctAnswer={toHiragana(selectedQuestion.correctAnswer)}
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
