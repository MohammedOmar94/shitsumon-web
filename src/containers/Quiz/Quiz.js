import React, { Component } from "react";
import queryString from 'query-string';

import Questions from "../../components/Questions/Questions";
import Button from "../../components/UI/Button/Button";
import Section from "../../components/UI/Section/Section";
import classes from "./Quiz.module.scss";

import * as quizSetup from '../../japanese/quiz_setup';


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

  shuffle = (array, quizLength) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    array.length = quizLength;
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

  componentDidMount() {
    const search = this.props.location.search;
    const queryParams = queryString.parse(search);
    if (!queryParams.topic) {
      this.props.history.push('/');
      return;
    }
    switch (queryParams.topic) {
      case 'dates':
        this.setState({ questions: quizSetup.setUpDatesQuiz(12), sectionName: 'Dates 年月日' });
        break;
      case 'months':
        this.setState({ questions: quizSetup.setUpMonthsQuiz(12), sectionName: 'Dates 年月日' });
        break;
      case 'days_of_the_month':
        this.setState({ questions: quizSetup.setUpDaysOfMonthQuiz(12), sectionName: 'Dates 年月日' });
        break;
      case 'days_of_the_week':
        this.setState({ questions: quizSetup.setUpDaysOfWeekQuiz(7), sectionName: 'Dates 年月日' });
        break;
      default:
        break;
    }
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