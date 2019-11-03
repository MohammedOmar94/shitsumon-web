import './styles.scss';

import React from 'react';

import TopicSelect from './TopicSelect/index';

import { LIST_OF_TOPICS } from '../Topics/constants/index';
import IconWithText from '../UI/IconWithText';


function Topics({ history }) {
  const topics = LIST_OF_TOPICS.map(topic => (
    <TopicSelect key={topic.key} changeQuizLength={topic.key === 'random'} topic={topic} />
  ));

  return (
    <div>
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

export default Topics;
