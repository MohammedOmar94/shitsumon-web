import { DATES_KEY, DATES_TITLE } from '../../components/Topics/constants/dates';
import { TIMES_KEY, TIMES_TITLE } from '../../components/Topics/constants/times';

import { setUpDatesQuiz } from '../dates/utils';
import { setUpTimesQuiz } from '../times/utils';

function getRandomisedQuiz(quiz, quizLength) {
  switch (quiz) {
    case DATES_KEY:
        return { questions: setUpDatesQuiz(quizLength), sectionName: DATES_TITLE };
    case TIMES_KEY:
        return { questions: setUpTimesQuiz(quizLength), sectionName: TIMES_TITLE };
    default:
      break;
  }
}

export { getRandomisedQuiz };