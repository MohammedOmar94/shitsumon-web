import './styles.scss';

import React from 'react';

import TopicSelect from './TopicSelect/index';

import { LIST_OF_TOPICS } from './constants';


function Topics({ history }) {
  const topics = LIST_OF_TOPICS.map(topic => (
    <TopicSelect key={topic.key} changeQuizLength={topic.key === 'random'} topic={topic} />
  ));

  return (
    <div>
      <h2 className='topics__header'>
        <i className={`fas fa-pencil-alt topics__pencilIcon`} />
        Quizzes
        <button className='topics__createBtn' onClick={() => history.push('/create-quiz')}>
          CREATE
        </button>
      </h2>
      {topics}
    </div>
  );
}

export default Topics;
