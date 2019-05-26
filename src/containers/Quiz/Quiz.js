import React, { Component } from "react";
import queryString from 'query-string';

import Questions from "../../components/Questions/Questions";
import Button from "../../components/UI/Button/Button";
import Section from "../../components/UI/Section/Section";
import classes from "./Quiz.module.scss";
import jpMonths from  '../../japanese/months.js';
import jpDays from  '../../japanese/days.js';

const wanakana = require('wanakana');


class Quiz extends Component {
  state = {
    score: 0,
    questionIndex: 0,
    emptyAnswer: false,
    inputMode: 'toHiragana',
    questions: [],
    answerHistory: [],
    endOfQuiz: false,
    sectionName: '',
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  handleNext = (event) => {
    const question = this.state.questions[this.state.questionIndex];

    const usersAnswer = event.target.answerField.value;
    const answerWasCorrect = wanakana.toRomaji(usersAnswer) === wanakana.toRomaji(question.answer);
    const answerHistory = [...this.state.answerHistory];

    console.log(usersAnswer, wanakana.toHiragana(question.answer));
    let score = this.state.score;
    if (answerWasCorrect) {
      score = score + 1;
    }
    answerHistory.push({ text: question.text, usersAnswer, correctAnswer: question.answer, answerWasCorrect })
    if (this.state.questionIndex + 1 === this.state.questions.length) {
      this.setState({endOfQuiz: true, answerHistory, sectionName: 'Results'});
    } else if (usersAnswer) {
      this.setState(prevState => {
        return {
          questionIndex: prevState.questionIndex + 1,
          score,
          answerHistory,
          emptyAnswer: false
         }
      });
    } else {
      this.setState({emptyAnswer: true});
    }
    event.preventDefault();
  }

  setInputMode = (inputMode) => {
    this.setState({inputMode});
  }

  setUpDateQuiz = () => {
    // Randomise days and months
    const months = this.shuffle([...jpMonths]);
    const days = this.shuffle([...jpDays]);
    // Reduce the days array to 12, which is the number of questions we will ask.
    days.length = 12;
    let dates = [];
    for (let i = 0; i < months.length; i++) {
      const dayEng = days[i].day;
      const monthEng = months[i].month;
      // The days/months may have different variations, for now will only include the first variation.
      const dayJp = days[i].translations[0];
      const monthJp = months[i].translations[0];
      dates[i] = { id: i + 1, text: `${dayEng} ${monthEng}`, answer: `${monthJp}${dayJp}` };
    }
    this.setState({ questions: dates, sectionName: 'Dates 年月日' });
  }

  componentDidMount() {
    const search = this.props.location.search;
    const queryParams = queryString.parse(search);
    if (!queryParams.topic) {
      this.props.history.push('/');
    }
    this.setUpDateQuiz();
  }

  render() {
    let inputMode = null;
    if (!this.state.endOfQuiz) {
      inputMode = (
        <div className={classes.Preferences}>
          <p>Input mode</p>
          <Button selected={this.state.inputMode === 'toHiragana'} onClick={() => this.setInputMode('toHiragana')}>Hiragana</Button>
          <Button selected={this.state.inputMode === 'toKatakana'} onClick={() => this.setInputMode('toKatakana')}>Katakana</Button>
          <Button selected={this.state.inputMode === 'Default'} onClick={() => this.setInputMode('Default')}>Romaji</Button>
        </div>
      );
    }

    return (
      <Section name={this.state.sectionName} className={classes.Quiz}>
        <Questions
          questions={this.state.questions}
          questionIndex={this.state.questionIndex}
          inputMode={this.state.inputMode}
          next={(event) => this.handleNext(event) }
          answerHistory={this.state.answerHistory}
          emptyAnswer={this.state.emptyAnswer}
          endOfQuiz={this.state.endOfQuiz} />
          { inputMode }
      </Section>
    );
  }
}

export default Quiz;
