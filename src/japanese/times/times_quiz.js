import jpMinutes from  './minutes';

import { setQuizLength, createQuestion, getEnglishWord, getJapaneseTranslations } from '../quiz_setup';



function setUpMinutesQuiz(quizlength) {
  // Randomise days of the week
  const times = setQuizLength([...jpMinutes], quizlength);
  let questions = [];
  for (let i = 0; i < times.length; i++) {
    const timesEng = times[i] === '1' ? `${getEnglishWord(times[i])} minute` : `${getEnglishWord(times[i])} minutes`
    const timesJp = getJapaneseTranslations(times[i]);
    questions[i] = createQuestion(i + 1, `${timesEng}`, `${timesJp}`);
  }
  return questions;
}

export { setUpMinutesQuiz };