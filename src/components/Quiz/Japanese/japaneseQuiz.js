import "../styles.scss";

import React, { useEffect, useState } from "react";
import queryString from "query-string";
import classnames from "classnames";
import axios from "axios";

import _shuffle from "lodash/shuffle";

import JapaneseQuestion from "../../Questions/Japanese/JapaneseQuestion";

import Section from "../../UI/Section/Section";
import Spinner from "../../UI/Spinner";

const wanakana = require("wanakana");

JapaneseQuestion.defaultProps = {
  quizScore: 0
}

function JapaneseQuiz({
  quizScore,
  questionIndex,
  hasData,
  hideInputMode,
  history,
  inputMode,
  languageStudied,
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
  const [answerEmpty, setAnswerEmpty] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([])
  const [selectedChoices, updateSelectedChoices] = useState([])
  const [score, updateScore] = useState(quizScore)


  const search = location.search;
  const quizParams = queryString.parse(search);
  const { topic, quiz } = quizParams;
  const quizId = `${topic}__${quiz}`

  useEffect(() => {
    if (!topic) {
      history.push("/");
      return;
    }

    axios.post(`https://kakarot.now.sh/${languageStudied}/load_quiz`, quizParams)
      .then(response => {
        const quizData =
          {
            data: {
              ...response.data
            },
            id: quizId
          }
        onQuizDownload(quizData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setShuffledQuestions(_shuffle(questions))
  }, [hasData])

  const resetUI = () => {
    setCorrectPopupVisibility(false);
    setWrongPopupVisibility(false);
    setAnswerEmpty(false);
    updateSelectedChoices([]);
  };

  const handleNext = (inputValue) => {
    const question = shuffledQuestions[questionIndex];

    const usersAnswer = inputValue.toLowerCase();
    const answerWasCorrect =
      wanakana.toRomaji(usersAnswer) === wanakana.toRomaji(question.answer);
      const usersCurrentAnswers = answerHistory ? [...answerHistory] : [];


    const waitingForNextQuestion = showCorrectPopup || showWrongPopup;

    let animationDuration = 1100;

    if (answerWasCorrect) {
      updateScore(prevScore => prevScore + 1);
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

    if (questionIndex + 1 === questions.length) {
      setTimeout(() => {
        resetUI();
        onUsersAnswer({
          data: {
            endOfQuiz: true,
            answerHistory: usersCurrentAnswers,
            quizScore: score,
            sectionName: "Results"
          },
          id: quizId
        });
      }, animationDuration);
    } else if (usersAnswer && !waitingForNextQuestion) {
      setTimeout(() => {
        resetUI();
        onUsersAnswer({
          data: {
            questionIndex: questionIndex + 1,
            quizScore: score,
            answerHistory: usersCurrentAnswers
          },
          id: quizId
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
  const question = questionCount ? shuffledQuestions[questionIndex] : undefined;

  return (
    <>
      <Spinner hasData={hasData} />
      <Section name={sectionName} className={"Quiz"}>
        {question && (
          <JapaneseQuestion
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
            endOfQuiz={endOfQuiz}
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
