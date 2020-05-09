import "./styles.scss";

import React, { useState } from "react";
import PropTypes from "prop-types";
import Results from  './Results';

import Button from "../../UI/Button/Button"

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
  onSubmit,
  question,
  questionCount,
  questionIndex,
  usersAnswer
}) {
  const [inputValue, updateInputValue] = useState("")
  const questionNumber = questionIndex + 1;

  const {
    question_text: questionText
  } = question;

  const submitHandler = () => {
    onSubmit(inputValue);
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

    return (
      <>
        {questionCount && !endOfQuiz &&
          <div className="japaneseQuestion">
            <p className="japaneseQuestion__questionNumber">Question {questionNumber} of {questionCount}</p>
            <div className="japaneseQuestion__question">
              <p className="japaneseQuestion__questionText">{questionText}</p>
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
