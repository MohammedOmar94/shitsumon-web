import * as quizzes from "../../japanese/quiz_setup";

import {
  DATES_TITLE,
  DATES_KEY,
  MONTHS_PARAM,
  DAYS_OF_THE_MONTH_PARAM,
  DAYS_OF_THE_WEEK_PARAM
} from "./constants/dates";

import {
  TIMES_TITLE,
  HOURS_OF_THE_DAY_PARAM,
  MINUTES_UP_TO_20_PARAM,
  MINUTES_UP_TO_40_PARAM,
  MINUTES_UP_TO_60_PARAM
} from "./constants/times";

import { TO_HIRAGANA } from "../../japanese/constants";

export const loadQuiz = (topic, quizLength) => {
  switch (topic) {
    case DATES_KEY:
      return {
        inputMode: TO_HIRAGANA,
        questions: quizzes.dates.setUpDatesQuiz(quizLength),
        sectionName: DATES_TITLE
      };
    case MONTHS_PARAM:
      return {
        inputMode: TO_HIRAGANA,
        questions: quizzes.dates.setUpMonthsQuiz(quizLength),
        sectionName: DATES_TITLE
      };
    case DAYS_OF_THE_MONTH_PARAM:
      return {
        inputMode: TO_HIRAGANA,
        questions: quizzes.dates.setUpDaysOfMonthQuiz(quizLength),
        sectionName: DATES_TITLE
      };
    case DAYS_OF_THE_WEEK_PARAM:
      return {
        inputMode: TO_HIRAGANA,
        questions: quizzes.dates.setUpDaysOfWeekQuiz(quizLength),
        sectionName: DATES_TITLE
      };
    case HOURS_OF_THE_DAY_PARAM:
      return {
        inputMode: TO_HIRAGANA,
        questions: quizzes.times.setUpHoursOfTheDayQuiz(),
        sectionName: TIMES_TITLE,
      };
    case MINUTES_UP_TO_20_PARAM:
      return {
        inputMode: TO_HIRAGANA,
        questions: quizzes.times.setUpMinutesQuiz("1-20"),
        sectionName: TIMES_TITLE
      };
    case MINUTES_UP_TO_40_PARAM:
      return {
        inputMode: TO_HIRAGANA,
        questions: quizzes.times.setUpMinutesQuiz("21-40"),
        sectionName: TIMES_TITLE
      };
    case MINUTES_UP_TO_60_PARAM:
      return {
        inputMode: TO_HIRAGANA,
        questions: quizzes.times.setUpMinutesQuiz("41-60"),
        sectionName: TIMES_TITLE
      };
    case "hiragana_1":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_1", "hiragana"),
        sectionName: "Hiragana ひらがな"
      };
    case "hiragana_2":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_2", "hiragana"),
        sectionName: "Hiragana ひらがな"
      };
    case "hiragana_3":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_3", "hiragana"),
        sectionName: "Hiragana ひらがな"
      };
    case "hiragana_4":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_4", "hiragana"),
        sectionName: "Hiragana ひらがな"
      };
    case "hiragana_5":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_5", "hiragana"),
        sectionName: "Hiragana ひらがな"
      };
    case "hiragana_6":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_6", "hiragana"),
        sectionName: "Hiragana ひらがな"
      };
    case "hiragana_7":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_7", "hiragana"),
        sectionName: "Hiragana ひらがな"
      };
    case "hiragana_8":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_8", "hiragana"),
        sectionName: "Hiragana ひらがな"
      };
    case "hiragana_9":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_9", "hiragana"),
        sectionName: "Hiragana ひらがな"
      };
    case "hiragana_10":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_10", "hiragana"),
        sectionName: "Hiragana ひらがな"
      };
    case "hiragana_11":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_11", "hiragana"),
        sectionName: "Hiragana ひらがな"
      };
    case "hiragana_12":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_12", "hiragana"),
        sectionName: "Hiragana ひらがな"
      };
    case "hiragana_13":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_13", "hiragana"),
        sectionName: "Hiragana ひらがな"
      };
    case "hiragana_14":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_14", "hiragana"),
        sectionName: "Hiragana ひらがな"
      };
    case "hiragana_15":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_15", "hiragana"),
        sectionName: "Hiragana ひらがな"
      };
    case "katakana_1":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_1", "katakana"),
        sectionName: "Katakana カタカナ"
      };
    case "katakana_2":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_2", "katakana"),
        sectionName: "Katakana カタカナ"
      };
    case "katakana_3":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_3", "katakana"),
        sectionName: "Katakana カタカナ"
      };
    case "katakaana_4":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_4", "katakana"),
        sectionName: "Katakana カタカナ"
      };
    case "katakana_5":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_5", "katakana"),
        sectionName: "Katakana カタカナ"
      };
    case "katakana_6":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_6", "katakana"),
        sectionName: "Katakana カタカナ"
      };
    case "katakana_7":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_7", "katakana"),
        sectionName: "Katakana カタカナ"
      };
    case "katakana_8":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_8", "katakana"),
        sectionName: "Katakana カタカナ"
      };
    case "katakana_9":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_9", "katakana"),
        sectionName: "Katakana カタカナ"
      };
    case "katakana_10":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_10", "katakana"),
        sectionName: "Katakana カタカナ"
      };
    case "katakana_11":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_11", "katakana"),
        sectionName: "Katakana カタカナ"
      };
    case "katakana_12":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_12", "katakana"),
        sectionName: "Katakana カタカナ"
      };
    case "katakana_13":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_13", "katakana"),
        sectionName: "Katakana カタカナ"
      };
    case "katakana_14":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_14", "katakana"),
        sectionName: "Katakana カタカナ"
      };
    case "katakana_15":
      return {
        hideInputMode: true,
        questions: quizzes.kana.setUpKanaQuiz("set_15", "katakana"),
        sectionName: "Katakana カタカナ"
      };
    default:
      break;
  }
};
