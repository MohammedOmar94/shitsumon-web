import "./styles.scss";

import React from "react";
import PropTypes from "prop-types";
import Results from  '../Results';

import Button from "../../UI/Button/Button"

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
    subject_pronoun: subjectPronoun,
    word,
    inflections,
    conjugation_key: conjugationKey
  } = question;

  const wordWithoutLastChar = word.slice(0, -1);
  const baseWordChoices = [word, wordWithoutLastChar, "sh", "d"];
  const wordInfections = [...inflections];

  // Convert array of choices to a string, used to form users answer.
  const usersAnswer = selectedChoices.join("")

  const handleSubmit = () => {
    onSubmit(usersAnswer);
  }

  const handleChoiceClick = (selectedChoice) => {
    if (selectedChoices.includes(selectedChoice)) {
        const index = selectedChoices.indexOf(selectedChoice);
        const usersChoices = [...selectedChoices]
        usersChoices.splice(index, 1)
        onChoiceClick(usersChoices)
    } else {
        onChoiceClick([...selectedChoices, selectedChoice])
    }
  }

  const SUBJECT_PRONOUN = {
    FIRST_PERSON: "First person (I, me)",
    SECOND_PERSON: "Second person (You)",
    THIRD_PERSON_MALE: "Third person (Male)",
    THIRD_PERSON_FEMALE: "Third person (Female)",
    FIRST_PERSON_PLURAL: "First person plural (We)",
    SECOND_PERSON_PLURAL: "Second person plural (You)",
    THIRD_PERSON_PLURAL: "Third person plural (They)",
  }

  const INFLECTIONS = {
    PAST_TENSE: "Past tense",
    PAST_PROGRESSIVE: "Past progressive",
    PRESENT_TENSE: "Present tense",
    PRESENT_PROGRESSIVE: "Present progressive"
  }

  const verbForm = `${INFLECTIONS[conjugationKey]} + ${SUBJECT_PRONOUN[subjectPronoun]}`;

  const hasSelectedAnOption = selectedChoices.length !== 0;

    return (
      <>
        {!endOfQuiz &&
          <div className="somaliQuestion">
            <p className="somaliQuestion__questionLabel">Question {questionNumber} of {questionCount}</p>
            <div className="somaliQuestion__question">
              <p className="somaliQuestion__questionText">{questionText}</p>
              <div className="somaliQuestion__questionPronoun">{verbForm}</div>
              <div>
                <p className="somaliQuestion__questionLabel">Your answer:</p>
                {hasSelectedAnOption && <span className="somaliQuestion__questionText">{usersAnswer}</span>}
                {!hasSelectedAnOption && <span className="somaliQuestion__choiceLabel">Please select an option</span>}
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
              </div>
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

function AnswerChoices({
  choices,
  label,
  selectedChoices,
  onClick
}) {
  return (
    <div>
      <p className="somaliQuestion__choiceLabel">{label}</p>
      {choices.map(choice => (
        <Button
          className="buttonChoice"
          theme="light"
          selected={selectedChoices.includes(choice)}
          onClick={() => onClick(choice)}
        >
          {choice}
        </Button>
      ))}
    </div>
  )
}

export default SomaliQuestion;
