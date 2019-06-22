import React, { Component, Fragment } from 'react';

import classes from  './CreateQuiz.module.scss';
import Section from '../../components/UI/Section/Section';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


import Button from '../../components/UI/Button/Button';


import * as sentenceGenerator from '../../japanese/sentence_generator/sentence_generator';

class CreateQuiz extends Component {
  state = {
    topic: 'pronoun',
    particles: ['は'],
    otherInfo: 'adjective',
    sentenceEng: '',
    sentenceJp: '',
    sentenceWithTopicAndVerb: false,
  };

  // componentDidMount() {
  //   const verbs = sentenceGenerator.verbs;
  //   this.setState({
  //     verbConjugation: Object.keys(verbObj.conjugations)[0],
  //     verbConjugations: verbObj.conjugations
  //   })
  // }

  updateTopic = (topic) => {
    if (topic === 'pronoun') {
      this.setState({topic});
    } else {
      this.setState({topic, otherInfo: 'adjective'});
    }
  }

  addParticle(particle) {
    if (particle === 'に')　{
      this.setState({sentenceWithTopicAndVerb: true, topic: 'pronoun', otherInfo: 'location'});
    }
  }

  generateSentence = () => {
    if (this.state.sentenceWithTopicAndVerb) {
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', this.state.topic, this.state.otherInfo);
      this.setState({sentenceEng: sentence.english, sentenceJp: sentence.japanese})
    } else {
      const sentence = sentenceGenerator.generateSentenceWithTopic(this.state.topic, this.state.otherInfo);
      this.setState({sentenceEng: sentence.english, sentenceJp: sentence.japanese})
    }
  }
  render() {
    let nameOption = null;
    if (this.state.topic === 'pronoun' && this.state.particles.includes('は')) {
     nameOption = <option value='name'>[Name]</option>;
    }
    let addVerb = (
      <div className={classes.WordContainer}>
        <select
          className={classes.Word}
          onChange={evt => this.addParticle(evt.target.value)}>
          <option>Add particle</option>
          <option>に</option>
        </select>
      </div>
    );
    let sentenceWithTopic = (
      <Fragment>
        <div className={classes.WordContainer}>
          <select
            className={classes.Word}
            onChange={evt => this.updateTopic(evt.target.value)}
          >
            <option value="pronoun">[Pronoun]</option>
            <option value="location">[Location]</option>
          </select>
        </div>
        <div className={classes.WordContainer}>
          <p className={classes.Word}>は</p>
        </div>
        <div className={classes.WordContainer}>
          <select
            className={classes.Word}
            onChange={evt => this.setState({ otherInfo: evt.target.value })}
          >
            <option value={"adjective"}>[Adjective]</option>
            {/* If pronoun and ha particle, display option */}
            {nameOption}
          </select>
        </div>
        {/* If there is no verb */}
        <div className={classes.WordContainer}>
          {/* <button className={classes.AddBtn}>Add Adjective or relative time</button> */}
          <select className={classes.Word}>
            {/* If pronoun and ha particle, display option */}
            <option value={'desu'}>です</option>
          </select>
          {/* <button className={classes.AddBtn}>Add Particle</button> */}
        </div>
      </Fragment>
    );
    let sentenceWithTopicAndVerb = null;
    if (this.state.sentenceWithTopicAndVerb) {
      sentenceWithTopic = null;
      addVerb = null;
      sentenceWithTopicAndVerb = (
        <Fragment>
          <div className={classes.WordContainer}>
            <select
              className={classes.Word}
              onChange={evt => this.updateTopic(evt.target.value)}>
              <option value="pronoun">[Pronoun]</option>
            </select>
          </div>
          <div className={classes.WordContainer}>
            <p className={classes.Word}>は</p>
          </div>
          <div className={classes.WordContainer}>
            <select
              className={classes.Word}
              onChange={evt => this.setState({ otherInfo: evt.target.value })}>
              <option value={"location"}>[Location]</option>
              {/* If pronoun and ha particle, display option */}
              {nameOption}
            </select>
          </div>
          <div className={classes.WordContainer}>
            {/* <button className={classes.AddBtn}>Add Adjective or relative time</button> */}
            <p className={classes.Word}>に</p>
            {/* <button className={classes.AddBtn}>Add Particle</button> */}
          </div>
          <div className={classes.WordContainer}>
            <select
              className={classes.Word}
              onChange={evt => this.setState({ otherInfo: evt.target.value })}>
              <option value={"verb"}>[Verb]</option>
            </select>
          </div>
        </Fragment>
      );
    }
    return (
      <Section name='Create Quiz'>
        { sentenceWithTopic }
        { addVerb }
        { sentenceWithTopicAndVerb }
        <Button onClick={() => this.generateSentence()}>Generate sentence</Button>
        <p className={classes.Sentence}>Example:</p>
        <p className={classes.Sentence}>{this.state.sentenceJp}</p>
        <p className={classes.Sentence}>{this.state.sentenceEng}</p>
      </Section>
    )
  }
}

export default CreateQuiz;