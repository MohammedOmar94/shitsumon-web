import jpMonths from  './dates/months';
import jpDaysOfTheMonth from  './dates/days_of_the_month';
import jpDaysOfTheWeek from  './dates/days_of_the_week';

function shuffle(array, quizlength) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  array.length = quizlength;
  return array;
};

function getEnglishWord(word) {
  return word.word;
}

function getJapaneseTranslations(word) {
  // Some words can have more than one translation, for now will only include the first translation.
  return word.translations[0];
}

function createQuestion(id, question, answer) {
  return { id,  text: `${question}`, answer }
}

function setUpDaysOfWeekQuiz(quizlength) {
  const days = shuffle([...jpDaysOfTheWeek], quizlength);
  let questions = [];
  for (let i = 0; i < days.length; i++) {
    const dayEng = getEnglishWord(days[i]);
    const dayJp = getJapaneseTranslations(days[i]);
    questions[i] = createQuestion(i + 1, dayEng, dayJp);
  }
  return questions;
}

function setUpDaysOfMonthQuiz(quizlength) {
  // Randomise days
  const days = shuffle([...jpDaysOfTheMonth], quizlength);
  let questions = [];
  for (let i = 0; i < days.length; i++) {
    const dayEng = getEnglishWord(days[i]);
    const dayJp = getJapaneseTranslations(days[i]);
    questions[i] = createQuestion(i + 1, dayEng, dayJp);
  }
  return questions;
}

function setUpMonthsQuiz(quizlength) {
  // Randomise months
  const months = shuffle([...jpMonths], quizlength);
  let questions = [];
  for (let i = 0; i < months.length; i++) {
    const monthEng = getEnglishWord(months[i]);
    const monthJp = getJapaneseTranslations(months[i]);
    questions[i] = createQuestion(i + 1, monthEng, monthJp);
  }
  return questions;
}

function setUpDatesQuiz(quizlength) {
  // Randomise days and months
  const months = shuffle([...jpMonths], quizlength);
  const days = shuffle([...jpDaysOfTheMonth], quizlength);
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