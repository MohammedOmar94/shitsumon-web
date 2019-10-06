import './styles.scss';

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AnimateHeight from 'react-animate-height';

import Button from '../..//UI/Button/Button';
import IconWithText from '../../UI/IconWithText';

topicSelect.propTypes = {
  changeQuizLength: PropTypes.bool,
  topic: PropTypes.shape({
    icon: PropTypes.string,
    key: PropTypes.string,
    title: PropTypes.string,
    quizzes: PropTypes.arrayOf(PropTypes.shape({
      param: PropTypes.string,
      title: PropTypes.string,
    })),
  })
}

topicSelect.defaultProps = {
  changeQuizLength: false
}

function topicSelect({ changeQuizLength, history, topic }) {
  const { icon, key, title, quizzes } = topic;

  const [isTopicVisible, setTopicVisibility] = useState(false);
  const [quizLength, setQuizLength] = useState(5);

  const arrowIconClasses = classnames(
    'fas fa-chevron-down',
    'topic__chevron',
    { 'topic__chevron--rotate': isTopicVisible }
  )

  return (
    <div>
      <div className='topic' onClick={() => setTopicVisibility(!isTopicVisible)}>
        <IconWithText icon={icon}>
          {title}
        </IconWithText>
        <i className={arrowIconClasses}/>
      </div>
      <AnimateHeight
        duration={300}
        height={isTopicVisible ? 'auto' : 0}
      >
        <div className='topic__quizzes'>
          {/* Dropdown only shows for quizzes in the Random topic. */}
          { changeQuizLength &&
              <label className='topic__label'>
                Number of Questions:
                <select className='topic__dropdown' onChange={evt => setQuizLength({ quizLength: evt.target.value })}>
                  <option value='5'>5</option>
                  <option value='10'>10</option>
                  <option value='20'>20</option>
                  <option value='35'>35</option>
                  <option value='50'>50</option>
                </select>
              </label>
          }
          {

            quizzes.map(quiz => {
              let quizLengthParam = '';
              // Only type of quiz the length can be set for.
              if (key === 'random') {
                quizLengthParam = `&quiz_length=${quizLength}`;
              }
              return (
                <Button
                  key={quiz.param}
                  className='topic__quiz'
                  onClick={() => history.push({ pathname: `quiz`, search: `?topic=${quiz.param}${quizLengthParam}` })}
                  rounded
                  theme='light'
                >
                  {quiz.title}
                </Button>
              );
            })
          }
        </div>
      </AnimateHeight>
    </div>
  )
}

export default withRouter(topicSelect);
