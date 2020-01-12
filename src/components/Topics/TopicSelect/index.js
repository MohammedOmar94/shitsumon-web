import './styles.scss';

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AnimateHeight from 'react-animate-height';

import IconWithText from '../../UI/IconWithText';
import QuizOptions from '../../UI/QuizOptions';

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
  const TopicIcon = ({ className }) => <i className={classnames(className, icon)} />

  const [isTopicVisible, setTopicVisibility] = useState(false);
  const [quizLength, setQuizLength] = useState(5);

  const arrowIconClasses = classnames(
    'fas fa-chevron-down',
    'topic__chevron',
    { 'topic__chevron--rotate': isTopicVisible }
  )

  const arrowIconRightClasses = classnames(
    'fas fa-chevron-right',
    'topic__chevron--right'
  )

  return (
    <div>
      <div className='topic' onClick={() => setTopicVisibility(!isTopicVisible)}>
        <IconWithText icon={TopicIcon}>
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
              <QuizOptions
                showQuizLength={true}
                onChange={(event) => setQuizLength(event.target.value)}
              />
          }
          {

            quizzes.map(quiz => {
              let quizLengthParam = '';
              // Only type of quiz the length can be set for.
              if (key === 'random') {
                quizLengthParam = `&quiz_length=${quizLength}`;
              }

              const urlParam = { pathname: `quiz`, search: `?topic=${key}&quiz=${quiz.param}${quizLengthParam}` };

              return (
                <div
                  key={quiz.param}
                  className='topic__quiz'
                  onClick={() => history.push(urlParam)}
                >
                  {quiz.title}
                  <i className={arrowIconRightClasses}/>
                </div>
              );
            })
          }
        </div>
      </AnimateHeight>
    </div>
  )
}

export default withRouter(topicSelect);
