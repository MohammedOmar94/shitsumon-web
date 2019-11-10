import { DATES_KEY, DATES_TITLE } from '../../components/Topics/constants/dates';
import { TIMES_KEY, TIMES_TITLE } from '../../components/Topics/constants/times';
import { HIRAGANA_KEY, HIRAGANA_TITLE } from '../../components/Topics/constants/hiragana';
import { KATAKANA_KEY, KATAKANA_TITLE } from '../../components/Topics/constants/katakana';

import { setUpDatesQuiz } from '../dates/utils';
import { setUpRandomKanaQuiz } from '../kana/utils';
import { setUpTimesQuiz } from '../times/utils';

function getRandomisedQuiz(quiz, quizLength) {
  switch (quiz) {
    case DATES_KEY:
        return { questions: setUpDatesQuiz(quizLength), sectionName: DATES_TITLE };
    case TIMES_KEY:
        return { questions: setUpTimesQuiz(quizLength), sectionName: TIMES_TITLE };
    case HIRAGANA_KEY:
        return { questions: setUpRandomKanaQuiz(HIRAGANA_KEY, quizLength), sectionName: HIRAGANA_TITLE };
    case KATAKANA_KEY:
        return { questions: setUpRandomKanaQuiz(KATAKANA_KEY, quizLength), sectionName: KATAKANA_TITLE };
    default:
      break;
  }
}

export { getRandomisedQuiz };