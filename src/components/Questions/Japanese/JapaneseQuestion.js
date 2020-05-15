import "./styles.scss";

import React, { useState } from "react";
import PropTypes from "prop-types";
import _includes from "lodash/includes";

import Results from  './Results';

import Button from "../../UI/Button/Button"
import QuestionTitle from "../../UI/QuestionTitle";
import AnswerChoices from "../../UI/AnswerChoices";
import AnswerChoiceOutput from "../../UI/AnswerChoiceOutput";

import WanakanaInput from "react-wanakana";

JapaneseQuestion.propTypes = {
  questions: PropTypes.array,
  questionIndex: PropTypes.number,
  isFieldEmpty: PropTypes.bool,
  inputMode: PropTypes.string,
  endOfQuiz: PropTypes.bool
};

JapaneseQuestion.defaultProps = {
  inputMode: 'Default'
}

function JapaneseQuestion({
  answerHistory,
  isFieldEmpty,
  inputMode,
  endOfQuiz,
  onChoiceClick,
  onSubmit,
  question,
  questionCount,
  questionIndex,
  selectedChoices,
  usersAnswer
}) {
  const [inputValue, updateInputValue] = useState("")
  const questionNumber = questionIndex + 1;

  // Convert array of choices to a string, used to form users answer.
  const answerOutput = selectedChoices.join("")

  const {
    question_text: questionText,
    quizType,
    wordChoices,
    conjugationChoices
  } = question;

  const submitHandler = () => {
    if (quizType === "writing") {
      onSubmit(inputValue);
    } else if (quizType === "conjugation") {
      onSubmit(answerOutput)
    }
    // updateInputValue("")
  }

  // Get the input field
  const input = document.getElementById("japaneseQuestion__answerField");

  if(input) {
    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.querySelector(".japaneseQuestion__nextBtn").click();
      }
    });
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
        {questionCount && !endOfQuiz &&
          <div className="japaneseQuestion">
            <p className="japaneseQuestion__questionNumber">Question {questionNumber} of {questionCount}</p>
            <div className="japaneseQuestion__question">
              <QuestionTitle title={questionText} />
              {quizType === "conjugation" &&
                <>
                  <AnswerChoiceOutput usersAnswer={answerOutput} />
                  <AnswerChoices
                    choices={wordChoices}
                    label="Word choices:"
                    selectedChoices={selectedChoices}
                    onClick={handleChoiceClick}
                  />
                  <AnswerChoices
                    choices={conjugationChoices}
                    label="Conjugation choices:"
                    selectedChoices={selectedChoices}
                    onClick={handleChoiceClick}
                  />
                </>
              }
              {quizType === "writing" &&
                <WanakanaInput
                  id="japaneseQuestion__answerField"
                  className={isFieldEmpty ? "japaneseQuestion__emptyAnswer" : "japaneseQuestion__answerField"}
                  type="text"
                  name="answerField"
                  autoFocus
                  autoComplete="off"
                  placeholder="Type the Japanese word here"
                  onChange={(event) => updateInputValue(event.target.value)}
                  value={inputValue}
                  to={inputMode}
                />
              }
              <Button className="japaneseQuestion__nextBtn" onClick={submitHandler}>
                Next
              </Button>
            </div>
          </div>
      }
      {endOfQuiz && <Results answerHistory={answerHistory} />}
      </>
    );
};

export default JapaneseQuestion;
