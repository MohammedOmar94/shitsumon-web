import jpMonths from  './months';
import jpDaysOfTheMonth from  './days_of_the_month';
import jpDaysOfTheWeek from  './days_of_the_week';

import { setQuizLength, createQuestion, getQuestions, getEnglishWord, getJapaneseTranslations } from '../quiz_setup';



function setUpDaysOfWeekQuiz(quizlength) {
  // Randomise days of the week
  const days = setQuizLength([...jpDaysOfTheWeek], quizlength);
  return getQuestions(days);
}

function setUpDaysOfMonthQuiz(quizlength) {
  // Randomise days of the month
  const days = setQuizLength([...jpDaysOfTheMonth], quizlength);
  return getQuestions(days);
}

function setUpMonthsQuiz(quizlength) {
  // Randomise months
  const months = setQuizLength([...jpMonths], quizlength);
  return getQuestions(months);
}

function setUpDatesQuiz(quizlength) {
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

export { setUpDaysOfWeekQuiz, setUpDaysOfMonthQuiz, setUpMonthsQuiz, setUpDatesQuiz };