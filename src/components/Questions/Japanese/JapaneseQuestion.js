import "./styles.scss";

import React, { useState } from "react";
import PropTypes from "prop-types";

import KanaButtons from "../../UI/KanaButtons";
import Results from  './Results';

import Button from "../../UI/Button/Button"

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

  const submitHandler = (event) => {
    onSubmit(event);
    // updateInputValue("")
  }

    return (
      <>
        {questionCount && !endOfQuiz &&
          <div className="japaneseQuestion">
            <p className="japaneseQuestion__questionNumber">Question {questionNumber} of {questionCount}</p>
            <div className="japaneseQuestion__question">
              <p className="japaneseQuestion__questionText">{questionText}</p>
              <p className="japaneseQuestion__questionText">{inputValue}</p>
              <KanaButtons onChange={updateInputValue} />
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
