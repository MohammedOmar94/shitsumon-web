import "./styles.scss";

import React, { useState } from "react";
import PropTypes from "prop-types";
import _get from "lodash/get";
import _includes from "lodash/includes";

import Question from "../../UI/Question";
import AnswerChoices from "../../UI/AnswerChoices";
import AnswerChoiceOutput from "../../UI/AnswerChoiceOutput";

import WanakanaInput from "react-wanakana";

JapaneseQuestion.propTypes = {
  questions: PropTypes.array,
  questionIndex: PropTypes.number,
  isFieldEmpty: PropTypes.bool,
  inputMode: PropTypes.string
};

JapaneseQuestion.defaultProps = {
  inputMode: "Default"
};

function JapaneseQuestion({
  isFieldEmpty,
  inputMode,
  onChoiceClick,
  onSubmit,
  question,
  questionCount,
  questionIndex,
  selectedChoices
}) {
  const [inputValue, updateInputValue] = useState("");
  const questionNumber = questionIndex + 1;

  // Convert array of choices to a string, used to form users answer.
  const answerOutput = selectedChoices.join("");

  const questionText = _get(question, "question_text");
  const quizType = _get(question, "quizType");
  const wordChoices = _get(question, "wordChoices");
  const conjugationChoices = _get(question, "conjugationChoices");

  const onNextQuestion = () => {
    if (quizType === "writing") {
      onSubmit(inputValue);
    } else if (quizType === "conjugation") {
      onSubmit(answerOutput);
    }
  };

  // Get the input field
  const input = document.getElementById("japaneseQuestion__answerField");

  if (input) {
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

  const handleChoiceClick = selectedChoice => {
    if (_includes(selectedChoices, selectedChoice)) {
      const index = selectedChoices.indexOf(selectedChoice);
      const usersChoices = [...selectedChoices];
      usersChoices.splice(index, 1);
      onChoiceClick(usersChoices);
    } else {
      onChoiceClick([...selectedChoices, selectedChoice]);
    }
  };

  return (
    <Question
      questionCount={questionCount}
      questionNumber={questionNumber}
      questionText={questionText}
      onButtonClick={onNextQuestion}
    >
      {quizType === "conjugation" && (
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
      )}
      {quizType === "writing" && (
        <WanakanaInput
          id="japaneseQuestion__answerField"
          className={
            isFieldEmpty
              ? "japaneseQuestion__emptyAnswer"
              : "japaneseQuestion__answerField"
          }
          type="text"
          name="answerField"
          autoFocus
          autoComplete="off"
          placeholder="Type the Japanese word here"
          onChange={event => updateInputValue(event.target.value)}
          value={inputValue}
          to={inputMode}
        />
      )}
    </Question>
  );
}

export default JapaneseQuestion;
