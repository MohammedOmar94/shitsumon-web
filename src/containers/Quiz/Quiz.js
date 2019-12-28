import React, { Component } from "react";
import queryString from 'query-string';
import classnames from 'classnames';
import axios from 'axios';

import Questions from "../../components/Questions/Questions";
import Button from "../../components/UI/Button/Button";
import Section from "../../components/UI/Section/Section";
import "./Quiz.scss";

const wanakana = require('wanakana');

class Quiz extends Component {
  state = {
    score: 0,
    questionIndex: 0,
    emptyAnswer: false,
    hideInputMode: false,
    inputMode: 'Default',
    questions: [],
    answerHistory: [],
    endOfQuiz: false,
    sectionName: '',
    showCorrectPopup: false,
    showWrongPopup: false,
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
    event.preventDefault();
    const question = this.state.questions[this.state.questionIndex];

    const usersAnswer = event.target.answerField.value.toLowerCase();
    const answerWasCorrect = wanakana.toRomaji(usersAnswer) === wanakana.toRomaji(question.answer);
    const answerHistory = [...this.state.answerHistory];

    const waitingForNextQuestion = this.state.showCorrectPopup || this.state.showWrongPopup;

    let animationDuration = 1100;
    let score = this.state.score;
    if (answerWasCorrect) {
      score = score + 1;
      this.setState({showCorrectPopup: true})
    } else if (!answerWasCorrect && usersAnswer) {
      animationDuration = 1200;
      this.setState({showWrongPopup: true})
    }
    answerHistory.push({ text: question.text, usersAnswer, correctAnswer: question.answer, answerWasCorrect })
    if (this.state.questionIndex + 1 === this.state.questions.length) {
      setTimeout(() => {
        this.setState({
          endOfQuiz: true,
          showCorrectPopup: false,
          showWrongPopup: false,
          answerHistory,
          sectionName: "Results"
        });
      }, animationDuration);
    } else if (usersAnswer && !waitingForNextQuestion) {
      setTimeout(() => {
        this.setState(prevState => {
          return {
            questionIndex: prevState.questionIndex + 1,
            score,
            answerHistory,
            emptyAnswer: false,
            showCorrectPopup: false,
            showWrongPopup: false
           }
        });
      }, animationDuration)
    } else {
      this.setState({emptyAnswer: true});
    }
  }

  setInputMode = (inputMode) => {
    this.setState({inputMode});
  }

  componentDidMount() {
    const search = this.props.location.search;
    const quizParams = queryString.parse(search);
    const { topic } = quizParams;

    if (!topic) {
      this.props.history.push('/');
      return;
    }

    axios.post('https://kakarot.mohammedomar94.now.sh/load_quiz', quizParams)
      .then((response) => {
        const quizData = response.data
        this.setState(quizData)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let inputMode = null;
    if (!this.state.endOfQuiz && !this.state.hideInputMode) {
      inputMode = (
        <div className='Preferences'>
          <p>Input mode</p>
          <Button selected={this.state.inputMode === 'toHiragana'} onClick={() => this.setInputMode('toHiragana')}>Hiragana</Button>
          <Button selected={this.state.inputMode === 'toKatakana'} onClick={() => this.setInputMode('toKatakana')}>Katakana</Button>
          <Button selected={this.state.inputMode === 'Default'} onClick={() => this.setInputMode('Default')}>Romaji</Button>
        </div>
      );
    }

    const correctPopupClass = classnames(
      'CorrectPopup',
      { '--show' : this.state.showCorrectPopup }
    )

    const wrongPopupClass = classnames(
      'WrongPopup',
      { '--show' : this.state.showWrongPopup }
    )

    return (
      <Section name={this.state.sectionName} className={'Quiz'}>
        <Questions
          questions={this.state.questions}
          questionIndex={this.state.questionIndex}
          hideInputMode={this.state.hideInputMode}
          inputMode={this.state.inputMode}
          next={(event) => this.handleNext(event) }
          answerHistory={this.state.answerHistory}
          emptyAnswer={this.state.emptyAnswer}
          endOfQuiz={this.state.endOfQuiz} />
          { inputMode }
          <div className={correctPopupClass}>
            <i className="far fa-smile-wink" />
            <p>正解</p>
            <p>CORRECT</p>
          </div>
          <div className={wrongPopupClass}>
            <i className="fas fa-times"></i>
          </div>
      </Section>
    );
  }
}

export default Quiz;
