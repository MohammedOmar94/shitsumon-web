import "./styles.scss";

import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button"
import QuestionTitle from "../QuestionTitle";

Question.propTypes = {
  children: PropTypes.node,
  questionText: PropTypes.string,
  questionSubText: PropTypes.string,
  questionCount: PropTypes.number,
  questionNumber: PropTypes.number,
  onButtonClick: PropTypes.func
};

function Question({
  children,
  questionText,
  questionSubText,
  questionCount,
  questionNumber,
  onButtonClick
}) {
    return (
      <div className="question">
        <p className="question__questionNumber">Question {questionNumber} of {questionCount}</p>
        <div className="question__question">
          <QuestionTitle title={questionText} subtitle={questionSubText} />
          {children}
          <Button className="question__nextBtn" onClick={onButtonClick}>
            Next
          </Button>
        </div>
      </div>
    );
};

export default Question;
