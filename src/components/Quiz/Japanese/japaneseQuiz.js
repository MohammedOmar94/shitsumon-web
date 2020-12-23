import "../styles.scss";

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import classnames from "classnames";

import { getAnswerHistory, getQuizScore } from "../cache"

import { useFetchQuiz } from "./japaneseQuiz.reactQuery";

import _get from "lodash/get";
import _shuffle from "lodash/shuffle";

import JapaneseQuestion from "../../Questions/Japanese/JapaneseQuestion";

import Section from "../../UI/Section/Section";
import Spinner from "../../UI/Spinner";

import { getLanguageStudied } from "../../../utils";

const wanakana = require("wanakana");

function JapaneseQuiz({ hideInputMode, location }) {
  const history = useHistory();


  const search = location.search;
  const quizParams = queryString.parse(search);
  const { topic, quiz } = quizParams;
  const quizId = `${topic}__${quiz}`;

  const [showCorrectPopup, setCorrectPopupVisibility] = useState(false);
  const [showWrongPopup, setWrongPopupVisibility] = useState(false);
  const [answerEmpty, setAnswerEmpty] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [selectedChoices, updateSelectedChoices] = useState([]);
  const [quizProgressInfo, setQuizProgressInfo] = useState({
    questionIndex: 0,
    quizScore: getQuizScore(quizId),
    answerHistory: getAnswerHistory(quizId),
    isEndOfQuiz: false
  });

  const {
    questionIndex,
    quizScore,
    answerHistory,
    isEndOfQuiz
  } = quizProgressInfo;

  const languageStudied = getLanguageStudied();
  const { data, isSuccess } = useFetchQuiz(languageStudied, quizParams);

  const inputMode = _get(data, "inputMode", "");
  const questions = _get(data, "questions", []);
  const sectionName = _get(data, "sectionName", "");

  useEffect(() => {
    if (!topic) {
      history.push("/");
      return;
    }
  }, []);

  useEffect(() => {
    if (isSuccess && answerHistory.length === questions.length) {
      setQuizProgressInfo(prevQuizProgressInfo => {
        return {
          ...prevQuizProgressInfo,
          isEndOfQuiz: answerHistory.length === questions.length
        };
      });
    }
  }, [isSuccess, answerHistory, questions])

  useEffect(() => {
    if (isSuccess) {
      setShuffledQuestions(_shuffle(questions));
    }
  }, [isSuccess, questions]);

  const resetUI = () => {
    setCorrectPopupVisibility(false);
    setWrongPopupVisibility(false);
    setAnswerEmpty(false);
    updateSelectedChoices([]);
  };

  const handleNext = inputValue => {
    const question = shuffledQuestions[questionIndex];

    const usersAnswer = inputValue.toLowerCase();
    const answerWasCorrect =
      wanakana.toRomaji(usersAnswer) === wanakana.toRomaji(question.answer);
    const usersCurrentAnswers = answerHistory.length ? [...answerHistory] : [];

    const waitingForNextQuestion = showCorrectPopup || showWrongPopup;

    let animationDuration = 1100;

    if (answerWasCorrect) {
      setQuizProgressInfo(prevQuizProgressInfo => {
        return {
          ...prevQuizProgressInfo,
          quizScore: prevQuizProgressInfo.quizScore + 1
        };
      });
      setCorrectPopupVisibility(true);
    } else if (!answerWasCorrect && usersAnswer) {
      animationDuration = 1200;
      setWrongPopupVisibility(true);
    }

    usersCurrentAnswers.push({
      questionText: question.question_text,
      usersAnswer,
      correctAnswer: question.answer,
      answerWasCorrect
    });


    if (usersAnswer && !waitingForNextQuestion) {
      setTimeout(() => {
        resetUI();
        setQuizProgressInfo(prevQuizProgressInfo => {
          return {
            ...prevQuizProgressInfo,
            questionIndex: prevQuizProgressInfo.questionIndex + 1,
            answerHistory: usersCurrentAnswers,
            isEndOfQuiz: prevQuizProgressInfo.questionIndex + 1 === questions.length
          };
        });
      }, animationDuration);
    } else {
      setAnswerEmpty(true);
    }
  };

  const correctPopupClass = classnames("CorrectPopup", {
    "--show": showCorrectPopup
  });

  const wrongPopupClass = classnames("WrongPopup", {
    "--show": showWrongPopup
  });

  const questionCount = shuffledQuestions.length;
  const question = shuffledQuestions[questionIndex];

  return (
    <>
      <Spinner hasData={isSuccess} />
      <Section name={sectionName} className={"Quiz"}>
        {shuffledQuestions.length && (
          <JapaneseQuestion
            quizId={quizId}
            quizScore={quizScore}
            question={question}
            questionCount={questionCount}
            questionIndex={questionIndex}
            hideInputMode={hideInputMode}
            inputMode={inputMode}
            onChoiceClick={updateSelectedChoices}
            onSubmit={event => handleNext(event)}
            answerHistory={answerHistory}
            isFieldEmpty={answerEmpty}
            selectedChoices={selectedChoices}
            isEndOfQuiz={isEndOfQuiz}
          />
        )}
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

export default JapaneseQuiz;
