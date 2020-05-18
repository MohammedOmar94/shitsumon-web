// Maybe use generic components for each Quiz?
import "./styles.scss";

import React, { useEffect, useState } from "react";
import queryString from "query-string";
import classnames from "classnames";
import axios from "axios";

import _shuffle from "lodash/shuffle";

import Section from "../../UI/Section/Section";
import Spinner from "../../UI/Spinner";
import SomaliQuestion from "../../Questions/Somali/SomaliQuestion";

function SomaliQuiz({
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
  const [shuffledQuestions, setShuffledQuestions] = useState([])

  const search = location.search;
  const quizParams = queryString.parse(search);
  const { topic, quiz } = quizParams;
  const quizId = `${topic}__${quiz}`

  useEffect(() => {
    if (!topic) {
      history.push("/");
      return;
    }

    axios.post(`https://kakarot.now.sh/somali/load_quiz`, quizParams)
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

  const questionCount = shuffledQuestions.length;
  const question = questionCount ? shuffledQuestions[questionIndex] : undefined;
  const questionNumber = questionIndex + 1;

  const [selectedChoices, updateSelectedChoices] = useState([])


  const resetUI = () => {
    setCorrectPopupVisibility(false);
    setWrongPopupVisibility(false);
    updateSelectedChoices([]);
  };

  const handleNext = (usersAnswer) => {
    // event.preventDefault();
    const question = shuffledQuestions[questionIndex];

    const answerWasCorrect = question.answers.includes(usersAnswer);
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
      text: question.question_text,
      usersAnswer,
      correctAnswer: question.answers,
      answerWasCorrect
    });

    if (questionNumber === questions.length) {
      setTimeout(() => {
        resetUI();
        onUsersAnswer({
          data: {
            endOfQuiz: true,
            answerHistory: usersCurrentAnswers,
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
            score,
            answerHistory: usersCurrentAnswers
          },
          id: quizId
        });
      }, animationDuration);
    }
  };

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
        {question && (
          <SomaliQuestion
            question={question}
            questionCount={questionCount}
            questionNumber={questionNumber}
            hideInputMode={true}
            onChoiceClick={updateSelectedChoices}
            onSubmit={event => handleNext(event)}
            answerHistory={answerHistory}
            selectedChoices={selectedChoices}
            endOfQuiz={endOfQuiz}
          />
        )}
        <div className={correctPopupClass}>
          <i className="far fa-smile-wink" />
          <p>Sax!</p>
          <p>CORRECT</p>
        </div>
        <div className={wrongPopupClass}>
          <i className="fas fa-times"></i>
        </div>
      </Section>
    </>
  );
}

export default SomaliQuiz;
