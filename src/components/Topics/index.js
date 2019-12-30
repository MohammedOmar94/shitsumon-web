import './styles.scss';

import React, { Component } from 'react';
import axios from 'axios';

import TopicSelect from './TopicSelect/index';

import IconWithText from '../UI/IconWithText';
import Spinner from '../UI/Spinner';

class Topics extends Component {
  state = {
    hasData: false,
    topics: null
  };

  componentDidMount() {
    axios.get('https://kakarot.mohammedomar94.now.sh/topics')
      .then(response => {
        const LIST_OF_TOPICS = response.data
        const topics = LIST_OF_TOPICS.map(topic => (
          <TopicSelect key={topic.key} changeQuizLength={topic.key === 'random'} topic={topic} />
        ));

        this.setState({ hasData: true, topics })
      })
  }

  render() {
    const { history } = this.props;
    const { hasData, topics } = this.state;

    return (
      <div>
        <Spinner hasData={hasData} />
        <h2 className='topics__header'>
          <IconWithText
            icon='fas fa-pencil-alt'
          >
            Quizzes
            <button className='topics__createBtn' onClick={() => history.push('/create-quiz')}>
              CREATE
            </button>
          </IconWithText>
        </h2>
        {topics}
      </div>
    );
  }
}

export default Topics;
