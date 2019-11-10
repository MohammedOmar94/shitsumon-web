import _flatten from 'lodash/flatten'
import _values from 'lodash/values'

import { kana } from  './index';

import { shuffle, setQuizLength, getKanaQuestions } from '../quiz_setup';

import { HIRAGANA_KEY, HIRAGANA_LIST } from '../../components/Topics/constants/hiragana';
import { KATAKANA_KEY, KATAKANA_LIST } from '../../components/Topics/constants/katakana';

const wanakana = require('wanakana');

const getInputMode = (kanaType) => {
  return kanaType === 'hiragana' ? wanakana.toHiragana : wanakana.toKatakana;
}

export const getHiraganaQuiz = (quiz) => {
  const hiraganaSet = `set_${HIRAGANA_LIST.indexOf(quiz) + 1}`;
  return setUpKanaQuiz(hiraganaSet, HIRAGANA_KEY);
}

export const getKatakanaQuiz = (quiz) => {
  const katakanaSet = `set_${KATAKANA_LIST.indexOf(quiz) + 1}`;
  return setUpKanaQuiz(katakanaSet, KATAKANA_KEY);
}

export const setUpRandomKanaQuiz = (kanaType, quizLength) => {
  const inputMode = getInputMode(kanaType);
  // Gets all values from object, then flattens each array, then finally shuffles em.
  const kanaSet = setQuizLength(_flatten(_values(kana)), quizLength);
  return getKanaQuestions(kanaSet, inputMode);
}

export const setUpKanaQuiz = (setNumber, kanaType) => {
  const inputMode = getInputMode(kanaType)
  // Randomise kana quiz
  const kanaSet = shuffle([...kana[setNumber]]);
  return getKanaQuestions(kanaSet, inputMode);
}
