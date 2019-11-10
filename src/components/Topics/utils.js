import { getDatesQuiz } from "../../japanese/dates/utils";
import { getTimesQuiz } from "../../japanese/times/utils";
import { getHiraganaQuiz, getKatakanaQuiz } from "../../japanese/kana/utils";
import { getRandomisedQuiz } from "../../japanese/quiz_randomiser/index";

import { DATES_KEY, DATES_TITLE } from "./constants/dates";
import { TIMES_KEY, TIMES_TITLE } from "./constants/times";
import { HIRAGANA_KEY, HIRAGANA_TITLE } from "./constants/hiragana";
import { KATAKANA_KEY, KATAKANA_TITLE } from "./constants/katakana";
import { TO_HIRAGANA } from "../../japanese/constants";

export const loadQuiz = (topic, quiz, quizLength) => {
  switch (topic) {
    case DATES_KEY:
      return {
        inputMode: TO_HIRAGANA,
        questions: getDatesQuiz(quiz, quizLength),
        sectionName: DATES_TITLE
      };
    case TIMES_KEY:
      return {
        inputMode: TO_HIRAGANA,
        questions: getTimesQuiz(quiz, quizLength),
        sectionName: TIMES_TITLE
      };
    case HIRAGANA_KEY:
      return {
        hideInputMode: true,
        questions: getHiraganaQuiz(quiz, quizLength),
        sectionName: HIRAGANA_TITLE
      };
    case KATAKANA_KEY:
      return {
        hideInputMode: true,
        questions: getKatakanaQuiz(quiz, quizLength),
        sectionName: KATAKANA_TITLE
      };
    case "random":
      const { questions, sectionName } = getRandomisedQuiz(quiz, quizLength);
      const hideInputMode = sectionName === HIRAGANA_TITLE || KATAKANA_TITLE ? true : false;
      return {
        hideInputMode,
        inputMode: hideInputMode ? 'Default' : TO_HIRAGANA,
        questions,
        sectionName
      };
    default:
      break;
  }
};
