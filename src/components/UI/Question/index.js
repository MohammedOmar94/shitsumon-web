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
        <QuestionTitle
          questionCount={questionCount}
          questionNumber={questionNumber}
          title={questionText}
          subtitle={questionSubText}
        />
        <div className="question__question">
          {children}
          <div className="question__buttonContainer">
            <Button className="question__nextBtn" onClick={onButtonClick}>
              Next
            </Button>
          </div>
        </div>
      </div>
    );
};

export default Question;
