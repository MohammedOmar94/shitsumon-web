import "./styles.scss";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { toHiragana } from "wanakana";
import _get from "lodash/get";

import { getLanguageStudied } from "../../utils";

import { cacheStore, clearQuizHistory } from "../Quiz/cache";

import Button from "../UI/Button/Button";

import Result from "./Result/Result";

Results.propTypes = {
  quizScore: PropTypes.number,
  answerHistory: PropTypes.array,
  onResetQuiz: PropTypes.func
};

Results.defaultProps = {
  quizScore: 0,
  answerHistory: [],
  onResetQuiz: () => {}
};

function Results({
  answerHistory,
  quizId,
  quizScore
}) {
  const [questionIndex, setQuestionIndex] = useState(null);
  const [showQuestion, setQuestionVisibility] = useState(false);

  useEffect(() => {
    const cachedAnswerHistory = _get(cacheStore, quizId, []);

    if (!cachedAnswerHistory.length) {
      const hashAnswerHistory = {
        ...cacheStore,
        [quizId]: {
          cachedAnswerHistory: [...answerHistory],
          cachedQuizScore: quizScore
        }
      };
      localStorage.setItem(
        "shitsumon_quiz_answer_history",
        JSON.stringify(hashAnswerHistory)
      );
    }
  }, []);

  const selectedQuestion = answerHistory[questionIndex];
  const questionNumber = questionIndex + 1;

  const getCorrectAnswer = correctAnswer => {
    const language = getLanguageStudied()
    return language === "japanese" ? toHiragana(correctAnswer) : correctAnswer;
  };

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

  const onResetQuizClick = quizId => {
    clearQuizHistory(quizId);
    window.location.reload();
  };

  const numberOfQuestions = answerHistory.length;
  const answersCorrectAsPercentage = numberOfQuestions
    ? `${Math.round((quizScore / numberOfQuestions) * 100)}%`
    : "0%";

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
      )}
      {!showQuestion && (
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
            <Button onClick={() => onResetQuizClick(quizId)} type="retry" />
          </div>
        </>
      )}
    </div>
  );
}

export default Results;
