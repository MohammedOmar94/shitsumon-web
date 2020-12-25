
/**
 * Checks whether the users answer is correct. Depending on the language, the checks
 * are carried out in a slightly different ways.
 *
 * @export
 * @param {string} usersAnswer
 * @param {Object} question
 * @param {string} languageStudied
 */
export function isAnswerCorrect(
  usersAnswer,
  question,
  languageStudied
) {
  switch (languageStudied) {
    case "japanese":
      const wanakana = require("wanakana");
      const { answer: correctAnswer } = question;
      return wanakana.toRomaji(usersAnswer) === wanakana.toRomaji(correctAnswer);
    case "somali":
      const { answers: correctAnswers } = question;
      return correctAnswers.includes(usersAnswer);
    default:
      return;
  }
}
