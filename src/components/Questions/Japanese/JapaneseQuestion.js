import "./styles.scss";

import React, { useState } from "react";
import PropTypes from "prop-types";
import Results from  '../Results';

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

  const submitHandler = (event) => {
    onSubmit(event);
    updateInputValue("")
  }

    return (
      <>
        {questionCount && !endOfQuiz &&
          <form id="question_form" className="japaneseQuestion" onSubmit={submitHandler}>
            <p className="japaneseQuestion__questionNumber">Question {questionNumber} of {questionCount}</p>
            <div className="japaneseQuestion__question">
              <p className="japaneseQuestion__questionText">{questionText}</p>
              <WanakanaInput
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
              <input className="japaneseQuestion__nextBtn" type="submit" value="Next"/>
            </div>
          </form>
      }
      {endOfQuiz && <Results answerHistory={answerHistory} />}
      </>
    );
};

export default JapaneseQuestion;
