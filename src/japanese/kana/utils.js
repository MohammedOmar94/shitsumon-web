import { kana } from  './index';

import { shuffle, getKanaQuestions } from '../quiz_setup';

import { HIRAGANA_KEY, HIRAGANA_LIST } from '../../components/Topics/constants/hiragana';
import { KATAKANA_KEY, KATAKANA_LIST } from '../../components/Topics/constants/katakana';

const wanakana = require('wanakana');

export const getHiraganaQuiz = (quiz) => {
  const hiraganaSet = `set_${HIRAGANA_LIST.indexOf(quiz) + 1}`;
  return setUpKanaQuiz(hiraganaSet, HIRAGANA_KEY);
}

export const getKatakanaQuiz = (quiz) => {
  const katakanaSet = `set_${KATAKANA_LIST.indexOf(quiz) + 1}`;
  return setUpKanaQuiz(katakanaSet, KATAKANA_KEY);
}

export const setUpKanaQuiz = (setNumber, kanaType) => {
  const inputMode = kanaType === 'hiragana' ? wanakana.toHiragana : wanakana.toKatakana
  // Randomise kana quiz
  const kanaSet = shuffle([...kana[setNumber]]);
  return getKanaQuestions(kanaSet, inputMode);
}
