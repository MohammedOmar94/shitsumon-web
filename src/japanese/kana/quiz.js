import { kana } from  './index';

import { shuffle, getKanaQuestions } from '../quiz_setup';

const wanakana = require('wanakana');

export const setUpKanaQuiz = (setNumber, kanaType) => {
  const inputMode = kanaType === 'hiragana' ? wanakana.toHiragana : wanakana.toKatakana
  // Randomise kana quiz
  const kanaSet = shuffle([...kana[setNumber]]);
  return getKanaQuestions(kanaSet, inputMode);
}
