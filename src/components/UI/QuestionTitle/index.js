import "./styles.scss";

import React from "react";

export default function QuestionTitle({ title, subtitle }) {
  return (
    <div>
      <p className="questionTitle__title">{title}</p>
      {subtitle && <div className="questionTitle__subtitle">{subtitle}</div>}
    </div>
  )
}