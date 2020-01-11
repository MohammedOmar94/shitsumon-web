import './styles.scss';

import React from "react";
import PropTypes from "prop-types";

QuizOptions.propTypes = {
  onChange: PropTypes.func,
  showQuizLength: PropTypes.bool
};

QuizOptions.defaultProps = {
  showQuizLength: false
};

function QuizOptions({ onChange, showQuizLength }) {
  return (
    <div className="quizOptions">
      {showQuizLength && (
        <>
          Number of Questions:
          <select
            className="quizOptions__quizLength"
            onChange={event => onChange(event)}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="35">35</option>
            <option value="50">50</option>
          </select>
        </>
      )}
    </div>
  );
}

export default QuizOptions;
