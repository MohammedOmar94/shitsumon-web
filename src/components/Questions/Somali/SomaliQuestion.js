import "./styles.scss";

import React from "react";
import PropTypes from "prop-types";
import Results from  './Results';
import _includes from "lodash/includes";

import AnswerChoices from "../../UI/AnswerChoices";
import AnswerChoiceOutput from "../../UI/AnswerChoiceOutput";
import QuestionTitle from "../../UI/QuestionTitle";
import Button from "../../UI/Button/Button";

SomaliQuestion.propTypes = {
  questions: PropTypes.array,
  questionNumber: PropTypes.number,
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

  const handleSubmit = () => {
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
          <div className="somaliQuestion">
            <p className="somaliQuestion__questionLabel">Question {questionNumber} of {questionCount}</p>
            <div className="somaliQuestion__question">
              <QuestionTitle title={questionText} subtitle={verbForm} />
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
              <Button className="somaliQuestion__nextBtn" onClick={handleSubmit}>
                Next
              </Button>
            </div>
          </div>
        }
        {endOfQuiz && <Results answerHistory={answerHistory} />}
      </>
    );
};

export default SomaliQuestion;
