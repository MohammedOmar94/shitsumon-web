import "./styles.scss";

import React from "react";
import PropTypes from "prop-types";

import _includes from "lodash/includes";

import Button from "../Button/Button"

AnswerChoices.propTypes = {
  choices: PropTypes.array,
  label: PropTypes.string,
  selectedChoices: PropTypes.array,
  onClick: PropTypes.func
}

export default function AnswerChoices({
  choices,
  label,
  selectedChoices,
  onClick
}) {
  return (
    <div className="answerChoices">
      <p className="answerChoices__choiceLabel">{label}</p>
      {choices.map(choice => (
        <Button
          className="answerChoices__choiceBtn"
          theme="light"
          selected={_includes(selectedChoices, choice)}
          onClick={() => onClick(choice)}
        >
          {choice}
        </Button>
      ))}
    </div>
  )
}