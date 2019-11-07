import _sample from 'lodash/sample';

import jpHoursOfTheDay from  './hours_of_the_day';
import jpMinutes from  './minutes';

import {
  HOURS_OF_THE_DAY_PARAM,
  MINUTES_UP_TO_20_PARAM,
  MINUTES_UP_TO_40_PARAM,
  MINUTES_UP_TO_60_PARAM,
} from '../../components/Topics/constants/times';

import { setQuizLength, shuffle, createQuestion, getEnglishWord, getJapaneseTranslations } from '../quiz_setup';

function getTimesQuiz(quiz, quizLength) {
  switch (quiz) {
    case HOURS_OF_THE_DAY_PARAM:
        return setUpHoursOfTheDayQuiz(quizLength);
    case MINUTES_UP_TO_20_PARAM:
        return setUpMinutesQuiz('1-20');
    case MINUTES_UP_TO_40_PARAM:
        return setUpMinutesQuiz('21-40');
    case MINUTES_UP_TO_60_PARAM:
        return setUpMinutesQuiz('41-60');
    default:
      break;
  }
}

function setUpHoursOfTheDayQuiz() {
  const minutesInJapanese = shuffle([...jpHoursOfTheDay])
  let questions = [];
  for (let i = 0; i < minutesInJapanese.length; i++) {
    const timesEng = getEnglishWord(minutesInJapanese[i]);
    const timesJp = getJapaneseTranslations(minutesInJapanese[i]);
    questions[i] = createQuestion(i + 1, `${timesEng}`, `${timesJp}`);
  }
  return questions;
}

function setUpMinutesQuiz(quiz) {
  const minutesInJapanese = [...jpMinutes];
  if (quiz === '21-40') {
    minutesInJapanese.splice(0, 20);
  } else if (quiz === '41-60') {
    minutesInJapanese.splice(0, minutesInJapanese.length - 20);
  }
  minutesInJapanese.length = 20;
  const times = shuffle([...minutesInJapanese]);
  let questions = [];
  for (let i = 0; i < times.length; i++) {
    const timesEng = times[i].word === '1' ? `${getEnglishWord(times[i])} minute` : `${getEnglishWord(times[i])} minutes`
    const timesJp = getJapaneseTranslations(times[i]);
    questions[i] = createQuestion(i + 1, `${timesEng}`, `${timesJp}`);
  }
  return questions;
}

function formatHour(number) {
  return number.split(':')[0];
}

function formatMinute(number) {
  return number < 10 ? `0${number}` : number;
}

export function setUpTimesQuiz(quizlength) {
  // Ignore 60th minute.
  jpMinutes.length = 59;

  const timeOfDayArr = [
    { timeOfDayEng: "am", timeOfDayJp: "gozen" },
    { timeOfDayEng: "pm", timeOfDayJp: "gogo" }
  ];

  // Randomise days and months
  const hours = setQuizLength([...jpHoursOfTheDay], quizlength);
  const minutes = setQuizLength([...jpMinutes], quizlength);
  let questions = [];
  for (let i = 0; i < hours.length; i++) {
    const hoursEng = formatHour(getEnglishWord(hours[i]));
    const minutesEng = formatMinute(getEnglishWord(minutes[i]));
    const hoursJp = getJapaneseTranslations(hours[i]);
    const minutesJp = getJapaneseTranslations(minutes[i]);
    const { timeOfDayEng, timeOfDayJp } = _sample(timeOfDayArr);

    questions[i] = createQuestion(i + 1, `${hoursEng}:${minutesEng}${timeOfDayEng}`, `${timeOfDayJp}${hoursJp}${minutesJp}`);
  }
  return questions;
}

export { getTimesQuiz };