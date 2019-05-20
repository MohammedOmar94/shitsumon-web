import React, { Component } from "react";

import Questions from "../../components/Questions/Questions";
import Section from "../../components/UI/Section/Section";
import classes from "./MyQuizzes.module.scss";

class MyQuizzes extends Component {
  state = {
    score: 0,
    questionIndex: 0,
    months: [
      { id: 1, text: "いちがつ", answer: "January" },
      { id: 2, text: "にがつ", answer: "Feburary" },
      { id: 3, text: "さんがつ", answer: "March" },
      { id: 4, text: "しがつ", answer: "April" },
      { id: 5, text: "ごがつ", answer: "May" },
      { id: 6, text: "ろくがつ", answer: "June" },
      { id: 7, text: "しちがつ", answer: "July" },
      { id: 8, text: "はちがつ", answer: "August" },
      { id: 9, text: "くがつ", answer: "September" },
      { id: 10, text: "じゅうがつ", answer: "October" },
      { id: 11, text: "じゅういちがつ", answer: "November" },
      { id: 12, text: "じゅうにがつ", answer: "December" }
    ]
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  handleNext = (event, questionId, correctAnswer) => {
    const usersAnswer = event.target.answerField.value;
    const score = usersAnswer.toLowerCase() === correctAnswer.toLowerCase() ? this.state.score + 1 : this.state.score;
    console.log(score, usersAnswer, correctAnswer);
    if (this.state.questionIndex + 1 === this.state.months.length) {
      console.log('Finished quiz');
    } else {
      this.setState(prevState => {
        return {
          questionIndex: prevState.questionIndex + 1,
          score: score
         }
      });
    }
    event.preventDefault();
  }

  componentDidMount() {
    const months = this.shuffle([...this.state.months]);
    this.setState({ months: months });
  }

  render() {
    return (
      <Section name="Dates 年月日" className={classes.MyQuizzes}>
      <Questions
        questions={this.state.months}
        questionIndex={this.state.questionIndex}
        next={(event, questionId, correctAnswer) => this.handleNext(event, questionId, correctAnswer) } />
      </Section>
    );
  }
}

export default MyQuizzes;
