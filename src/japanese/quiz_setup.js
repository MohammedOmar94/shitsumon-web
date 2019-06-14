import * as dates from './dates/dates_quiz';
import * as times from './times/times_quiz';

function setQuizLength(wordsArr, quizlength) {
  let shuffledWords = shuffle([...wordsArr]);
  if (quizlength > wordsArr.length) {
    const questionsNeeded = quizlength - wordsArr.length;
    // Loop condition to determine how many shuffles we need to do.
    const loopCount = Math.ceil(quizlength / wordsArr.length);
    // Questions expected to have after the loop.
    const questionCountAfterLoop = loopCount * wordsArr.length;
    // Questions that need to be removed to match the quiz length.
    const questionsToRemove = questionCountAfterLoop - questionsNeeded;

    let shuffledExtraWords = [];
    for (let i = 0; i < loopCount; i++) {
      shuffledExtraWords = shuffle([...wordsArr]);
      shuffledWords = [...shuffledWords, ...shuffledExtraWords];
    }
    shuffledWords.length =  shuffledWords.length - questionsToRemove;
  } else {
    shuffledWords.length = quizlength;
  }
  return shuffledWords;
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
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

function getQuestions(words, quizlength) {
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

export { dates, times, shuffle, setQuizLength, createQuestion, getQuestions, getEnglishWord, getJapaneseTranslations };