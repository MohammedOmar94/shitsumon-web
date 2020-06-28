import "./styles.scss";

import React from "react";

export default function AnswerChoiceOutput({ usersAnswer }) {
  const hasSelectedAnOption = usersAnswer.length > 0;

  return (
    <div className="answerChoiceOutput">
      <div className="answerChoiceOutput__answerOutput">
        <p className="answerChoiceOutput__questionLabel">Your answer:</p>
        {hasSelectedAnOption && <span className="answerChoiceOutput__usersAnswer">{usersAnswer}</span>}
        {!hasSelectedAnOption && <span className="answerChoiceOutput__placeholder">Please select an option</span>}
      </div>
    </div>
  )
}