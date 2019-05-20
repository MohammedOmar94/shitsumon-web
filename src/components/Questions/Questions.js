import React from "react";
import PropTypes from "prop-types";

import classes from "./Questions.module.scss";

const questions = props => {
  const question = props.questions[props.questionIndex];
  const submitHandler = (event) => props.next(event, question.id, question.answer);
  return (
    <form className={classes.Questions} onSubmit={submitHandler}>
      <h4 className={classes.QuestionProgress}>Question {props.questionIndex + 1} of {props.questions.length}</h4>
      <section key={question.id} className={classes.Question}>
        <p>{question.text}</p>
        <input type="text" name='answerField' value={props.usersAnswer}/>
      </section>
      <input className={classes.NextBtn} type="submit" />
    </form>
  );
};

questions.propTypes = {
  questions: PropTypes.array.isRequired,
  questionIndex: PropTypes.number.isRequired
};

export default questions;
