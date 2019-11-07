import { DATES_KEY, DATES_TITLE } from '../../components/Topics/constants/dates';

import { setUpDatesQuiz } from '../dates/utils';

function getRandomisedQuiz(quiz, quizLength) {
  switch (quiz) {
    case DATES_KEY:
        return { questions: setUpDatesQuiz(quizLength), sectionName: DATES_TITLE };
    default:
      break;
  }
}

export { getRandomisedQuiz };