import React, { Component } from "react";

import Questions from "../../components/Questions/Questions";
import Button from "../../components/UI/Button/Button";
import Section from "../../components/UI/Section/Section";
import classes from "./MyQuizzes.module.scss";

const wanakana = require('wanakana');


class MyQuizzes extends Component {
  state = {
    score: 0,
    questionIndex: 0,
    months: [
      { id: 1, text: "January", answer: "ichigatsu" },
      { id: 2, text: "Feburary", answer: "nigatsu" },
      { id: 3, text: "March", answer: "sangatsu" },
      { id: 4, text: "April", answer: "shigatsu" },
      { id: 5, text: "May", answer: "gogatsu" },
      { id: 6, text: "June", answer: "rokugatsu" },
      { id: 7, text: "July", answer: "shigatsu"  },
      { id: 8, text: "August", answer: "hachigatsu" },
      { id: 9, text: "September", answer: "kugatsu" },
      { id: 10, text: "October", answer: "juugatsu" },
      { id: 11, text: "November", answer: "juuichigatsu" },
      { id: 12, text: "December", answer: "juunigatsu" }
    ],
    inputMode: '',
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
    const score = usersAnswer=== wanakana.toHiragana(correctAnswer) ? this.state.score + 1 : this.state.score;
    console.log(score, usersAnswer, wanakana.toHiragana(correctAnswer));
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

  setInputMode = (inputMode) => {
    this.setState({inputMode});
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
        <div className={classes.Preferences}>
          <p>Input mode</p>
          <Button selected={this.state.inputMode === 'Kana'} onClick={() => this.setInputMode('Kana')}>Kana</Button>
          <Button selected={this.state.inputMode === 'Kanji'} onClick={() => this.setInputMode('Kanji')}>Kanji</Button>
          <Button selected={this.state.inputMode === 'Romaji'} onClick={() => this.setInputMode('Romaji')}>Romaji</Button>
        </div>
      </Section>
    );
  }
}

export default MyQuizzes;
