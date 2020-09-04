import "./styles.scss";

import React from "react";
import PropTypes from "prop-types";
import Results from  '../../Results';
import _includes from "lodash/includes";

import AnswerChoices from "../../UI/AnswerChoices";
import AnswerChoiceOutput from "../../UI/AnswerChoiceOutput";
import Question from "../../UI/Question"

SomaliQuestion.propTypes = {
  questions: PropTypes.array,
  questionNumber: PropTypes.number,
  quizScore: PropTypes.number,
  emptyAnswer: PropTypes.bool,
  endOfQuiz: PropTypes.bool,
  onChoiceClick: PropTypes.func
};

SomaliQuestion.defaultProps = {
  questions: [],
  questionNumber: 1,
  isFieldEmpty: false
}

function SomaliQuestion({
  answerHistory,
  endOfQuiz,
  onChoiceClick,
  onSubmit,
  selectedChoices,
  question,
  questionCount,
  quizScore,
  questionNumber
}) {
  const {
    question_text: questionText,
    word,
    inflections,
    verb_form: verbForm
  } = question;


  const wordFirstChar = word[0];
  const wordWithoutLastChar = word.slice(0, -1);
  const baseWordChoices = [word, wordWithoutLastChar, "sh", "d"];

  if (!_includes(word, "i") && _includes(word, "x")) {
    const rootWordVariation = wordFirstChar + "ix"
    baseWordChoices.splice(1, 0, rootWordVariation);
  }
  const wordInfections = [...inflections];

  // Convert array of choices to a string, used to form users answer.
  const usersAnswer = selectedChoices.join("")

  const onNextQuestion = () => {
    onSubmit(usersAnswer);
  }

  const handleChoiceClick = (selectedChoice) => {
    if (_includes(selectedChoices, selectedChoice)) {
        const index = selectedChoices.indexOf(selectedChoice);
        const usersChoices = [...selectedChoices]
        usersChoices.splice(index, 1)
        onChoiceClick(usersChoices)
    } else {
        onChoiceClick([...selectedChoices, selectedChoice])
    }
  }

    return (
      <>
        {!endOfQuiz &&
          <Question 
            questionCount={questionCount}
            questionNumber={questionNumber}
            questionText={questionText}
            questionSubText={verbForm}
            onButtonClick={onNextQuestion}
          >
            <AnswerChoiceOutput usersAnswer={usersAnswer} />
            <AnswerChoices
              choices={baseWordChoices}
              label="Word choices:"
              selectedChoices={selectedChoices}
              onClick={handleChoiceClick}
            />
            <AnswerChoices
              choices={wordInfections}
              label="Conjugation choices:"
              selectedChoices={selectedChoices}
              onClick={handleChoiceClick}
            />
          </Question>
        }
        {endOfQuiz && <Results answerHistory={answerHistory} quizScore={quizScore} />}
      </>
    );
};

export default SomaliQuestion;
