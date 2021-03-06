import "./styles.scss";

import React from "react";
import PropTypes from "prop-types";

QuestionTitle.propTypes = {
  questionText: PropTypes.string,
  questionSubText: PropTypes.string,
  questionCount: PropTypes.number,
  questionNumber: PropTypes.number
};

export default function QuestionTitle({
  questionCount,
  questionNumber,
  title,
  subtitle
}) {
  const numberOfQuestions = questionCount ? ` of ${questionCount}` : ""

  return (
    <div className="questionTitle">
      <p className="questionTitle__questionNumber">
        Question {questionNumber}{numberOfQuestions}</p>
      <p className="questionTitle__title">{title}</p>
      {subtitle && <div className="questionTitle__subtitle">{subtitle}</div>}
    </div>
  )
}