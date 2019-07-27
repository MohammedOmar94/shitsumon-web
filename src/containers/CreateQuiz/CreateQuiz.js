import React, { Component, Fragment } from 'react';
import ReactTooltip from 'react-tooltip';

import classes from  './CreateQuiz.module.scss';
import Section from '../../components/UI/Section/Section';


import Button from '../../components/UI/Button/Button';
import Dropdown from '../../components/UI/Dropdown/Dropdown';


import locations from '../../japanese/sentence_generator/locations/locations';
import personalPronouns from '../../japanese/sentence_generator/pronouns/personal_pronouns';

import * as sentenceGenerator from '../../japanese/sentence_generator/sentence_generator';

class CreateQuiz extends Component {
  state = {
    topic: 'pronoun',
    particles: ['は'],
    otherInfo: 'adjective',
    sentenceEng: '',
    sentenceJp: [],
    sentenceKana: [],
    wordsInEnglish: [],
    sentenceWithTopicAndVerb: false
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
    if (particle === 'verb')　{
      this.setState({sentenceWithTopicAndVerb: true, topic: 'pronoun', otherInfo: 'location'});
    }
  }

  generateSentence = () => {
    if (this.state.sentenceWithTopicAndVerb) {
      const conjugations = ['present', 'past', 'negative', 'past_negative'];
      const conjugation = sentenceGenerator.shuffle(conjugations)[0];
      let pronoun = null;
      let location = null;
      if (this.state.otherInfo === 'location') {
        location = sentenceGenerator.shuffle([...locations])[0];
      }
      if (this.state.topic === 'pronoun') {
        sentenceGenerator.shuffle(personalPronouns);
        pronoun = personalPronouns[0];
      }
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, this.state.topic, this.state.otherInfo, location, conjugation);
      this.setState({sentenceEng: sentence.english, sentenceJp: sentence.japanese, sentenceKana: sentence.kana, wordsInEnglish: sentence.tooltipEng })
    } else {
      const sentence = sentenceGenerator.generateSentenceWithTopic(this.state.topic, this.state.otherInfo);
      this.setState({sentenceEng: sentence.english, sentenceJp: sentence.japanese, sentenceKana: sentence.kana,  wordsInEnglish: sentence.tooltipEng })
    }
  }
  render() {
    let nameOption = null;
    if (this.state.topic === 'pronoun' && this.state.particles.includes('は')) {
     nameOption = { name: '[Name]', value: 'name'};
    }
    let addVerb = (
      <div className={classes.WordContainer}>
        <select
          className={classes.GrammarDropdown}
          onChange={evt => this.addParticle(evt.target.value)}>
          <option>More Grammar</option>
          <option value='verb'>Verb</option>
        </select>
      </div>
    );
    let sentenceWithTopic = (
      <Fragment>
        <Dropdown
          label='Topic'
          options={[
            { name: "[Pronoun]", value: "pronoun" },
            { name: "[Location]", value: "location" }
          ]}
          onChange={evt => this.setState({ topic: evt.target.value, otherInfo: 'adjective' })}
        />
        <Dropdown
          label='Particle'
          options={[
            { name: "は", value: "は" },
          ]}
        />
        <Dropdown
          label='Other info'
          options={[
            { name: "[Adjective]", value: "adjective" },
            /* If pronoun and ha particle, display option */
            nameOption
          ]}
          onChange={evt => this.setState({ otherInfo: evt.target.value })}
        />
        {/* If there is no verb */}
        <Dropdown
          label='Tense'
          options={[
            { name: "です", value: "です" },
          ]}
        />
      </Fragment>
    );
    let sentenceWithTopicAndVerb = null;
    if (this.state.sentenceWithTopicAndVerb) {
      sentenceWithTopic = null;
      addVerb = null;
      sentenceWithTopicAndVerb = (
        <Fragment>
          <Dropdown
            label='Topic'
            options={[
              { name: "[Pronoun]", value: "pronoun" },
            ]}
            onChange={evt => this.updateTopic(evt.target.value)}
          />
          <Dropdown
            label='Particle'
            options={[
              { name: "は", value: "は" },
            ]}
          />
          <Dropdown
            label='Other info'
            options={[
              { name: "[Location]", value: "location" },
              /* If pronoun and ha particle, display option */
              nameOption
            ]}
            onChange={evt => this.setState({ otherInfo: evt.target.value })}
          />
          <Dropdown
            label='Particle'
            options={[
              { name: "に", value: "に" }
            ]}
          />
          <Dropdown
            label='Action'
            options={[
              { name: "[Verb]", value: "verb" }
            ]}
          />
        </Fragment>
      );
    }
    return (
      <Section name='Create Quiz' className={classes.CreateQuiz}>
        <div className={classes.SentenceOptions}>
          { sentenceWithTopic }
          { addVerb }
          { sentenceWithTopicAndVerb }
        </div>
        <div className={classes.BtnContainer}>
          <Button onClick={() => this.generateSentence()}>Generate sentence</Button>
        </div>
        <div className={classes.SentenceContainer}>
          <p className={classes.Sentence}>Example</p>
          { !this.state.sentenceWithTopicAndVerb &&
              <p className={classes.ExampleSentence}>[{this.state.topic}]は[{this.state.otherInfo}]</p>
          }
          { this.state.sentenceWithTopicAndVerb &&
            <p className={classes.ExampleSentence}>[{this.state.topic}]は[{this.state.otherInfo}]に[Verb]</p>
          }
          <span className={classes.Sentence}>
            {this.state.sentenceJp.map((word, index)=> (
              <Fragment>
                <ReactTooltip />
                <p data-tip={`${this.state.sentenceKana[index]} = ${this.state.wordsInEnglish[index]}`} className={classes.Word}>{word}</p>
              </Fragment>
            ))}
          </span>
          <p className={classes.Sentence}>{this.state.sentenceEng}</p>
        </div>
      </Section>
    )
  }
}

export default CreateQuiz;