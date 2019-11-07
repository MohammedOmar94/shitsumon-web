import jpMonths from  './months';
import jpDaysOfTheMonth from  './days_of_the_month';
import jpDaysOfTheWeek from  './days_of_the_week';

import {
  MONTHS_PARAM,
  DAYS_OF_THE_MONTH_PARAM,
  DAYS_OF_THE_WEEK_PARAM
} from '../../components/Topics/constants/dates';

import { setQuizLength, shuffle, createQuestion, getQuestions, getEnglishWord, getJapaneseTranslations } from '../quiz_setup';

function getDatesQuiz(quiz, quizLength) {
  switch (quiz) {
    case DAYS_OF_THE_WEEK_PARAM:
        return setUpDaysOfWeekQuiz(quizLength);
    case DAYS_OF_THE_MONTH_PARAM:
        return setUpDaysOfMonthQuiz(quizLength);
    case MONTHS_PARAM:
        return setUpMonthsQuiz(quizLength);
    default:
      break;
  }
}

function setUpDaysOfWeekQuiz(quizlength) {
  // Randomise days of the week
  const days = shuffle([...jpDaysOfTheWeek], quizlength);
  return getQuestions(days);
}

function setUpDaysOfMonthQuiz(quizlength) {
  // Randomise days of the month
  const days = shuffle([...jpDaysOfTheMonth], quizlength);
  return getQuestions(days);
}

function setUpMonthsQuiz(quizlength) {
  // Randomise months
  const months = shuffle([...jpMonths], quizlength);
  return getQuestions(months);
}

export function setUpDatesQuiz(quizlength) {
  // Randomise days and months
  const months = setQuizLength([...jpMonths], quizlength);
  const days = setQuizLength([...jpDaysOfTheMonth], quizlength);
  let questions = [];
  for (let i = 0; i < months.length; i++) {
    const dayEng = getEnglishWord(days[i]);
    const monthEng = getEnglishWord(months[i]);
    const dayJp = getJapaneseTranslations(days[i]);
    const monthJp = getJapaneseTranslations(months[i]);
    questions[i] = createQuestion(i + 1, `${dayEng} ${monthEng}`, `${monthJp}${dayJp}`);
  }
  return questions;
}

export { getDatesQuiz };