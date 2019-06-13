import * as dates from './dates/dates_quiz';

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

function getQuestions(words) {
  let questions = [];
  let wordsLength = words.length;
  let i = 0;
  for (i; i < wordsLength; i++) {
    const eng = getEnglishWord(words[i]);
    const jp = getJapaneseTranslations(words[i]);
    questions[i] = createQuestion(i + 1, eng, jp);
  }
  return questions;
}

export { dates, shuffle, createQuestion, getQuestions, getEnglishWord, getJapaneseTranslations };