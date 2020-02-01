import "./styles.scss";

import React, { useEffect, useState } from "react";
import queryString from "query-string";
import classnames from "classnames";
import axios from "axios";

import Questions from "../../components/Questions/Questions";
import Button from "../../components/UI/Button/Button";
import Section from "../../components/UI/Section/Section";
import Spinner from "../../components/UI/Spinner";

const wanakana = require("wanakana");

function Quiz({
  score,
  questionIndex,
  hasData,
  hideInputMode,
  history,
  inputMode,
  location,
  questions,
  answerHistory,
  endOfQuiz,
  onQuizDownload,
  onUsersAnswer,
  sectionName
}) {
  const [showCorrectPopup, setCorrectPopupVisibility] = useState(false);
  const [showWrongPopup, setWrongPopupVisibility] = useState(false);
  const [emptyAnswer, setEmptyAnswer] = useState(false);

  useEffect(() => {
    const search = location.search;
    const quizParams = queryString.parse(search);
    const { topic } = quizParams;

    if (!topic) {
      history.push("/");
      return;
    }

    axios.post("https://kakarot.mohammedomar94.now.sh/load_quiz", quizParams)
      .then(response => {
        const quizData = response.data;
        onQuizDownload(quizData);
      })
      .catch(error => {
        console.log(error);
      });
  }, [hasData]);

  const resetUI = () => {
    setCorrectPopupVisibility(false);
    setWrongPopupVisibility(false);
    setEmptyAnswer(false);
  };

  const setInputMode = inputMode => {
    onUsersAnswer({ inputMode });
  };

  const handleNext = event => {
    event.preventDefault();
    const question = questions[questionIndex];

    const usersAnswer = event.target.answerField.value.toLowerCase();
    const answerWasCorrect =
      wanakana.toRomaji(usersAnswer) === wanakana.toRomaji(question.answer);
    const usersCurrentAnswers = [...answerHistory];

    const waitingForNextQuestion = showCorrectPopup || showWrongPopup;

    let animationDuration = 1100;

    if (answerWasCorrect) {
      score = score + 1;
      setCorrectPopupVisibility(true);
    } else if (!answerWasCorrect && usersAnswer) {
      animationDuration = 1200;
      setWrongPopupVisibility(true);
    }
    usersCurrentAnswers.push({
      text: question.text,
      usersAnswer,
      correctAnswer: question.answer,
      answerWasCorrect
    });
    if (questionIndex + 1 === questions.length) {
      resetUI();
      setTimeout(() => {
        onUsersAnswer({
          endOfQuiz: true,
          answerHistory: usersCurrentAnswers,
          sectionName: "Results"
        });
      }, animationDuration);
    } else if (usersAnswer && !waitingForNextQuestion) {
      setTimeout(() => {
        resetUI();
        onUsersAnswer({
          questionIndex: questionIndex + 1,
          score,
          answerHistory: usersCurrentAnswers
        });
      }, animationDuration);
    } else {
      setEmptyAnswer(true);
    }
  };

  if (!endOfQuiz && !hideInputMode) {
    inputMode = (
      <div className="Preferences">
        <p>Input mode</p>
        <Button
          selected={inputMode === "toHiragana"}
          onClick={() => setInputMode("toHiragana")}
        >
          Hiragana
        </Button>
        <Button
          selected={inputMode === "toKatakana"}
          onClick={() => setInputMode("toKatakana")}
        >
          Katakana
        </Button>
        <Button
          selected={inputMode === "Default"}
          onClick={() => setInputMode("Default")}
        >
          Romaji
        </Button>
      </div>
    );
  }

  const correctPopupClass = classnames("CorrectPopup", {
    "--show": showCorrectPopup
  });

  const wrongPopupClass = classnames("WrongPopup", {
    "--show": showWrongPopup
  });

  return (
    <>
      <Spinner hasData={hasData} />
      <Section name={sectionName} className={"Quiz"}>
        {questions && (
          <Questions
            questions={questions}
            questionIndex={questionIndex}
            hideInputMode={hideInputMode}
            inputMode={inputMode}
            next={event => handleNext(event)}
            answerHistory={answerHistory}
            emptyAnswer={emptyAnswer}
            endOfQuiz={endOfQuiz}
          />
        )}
        {inputMode}
        <div className={correctPopupClass}>
          <i className="far fa-smile-wink" />
          <p>正解</p>
          <p>CORRECT</p>
        </div>
        <div className={wrongPopupClass}>
          <i className="fas fa-times"></i>
        </div>
      </Section>
    </>
  );
}

export default Quiz;
