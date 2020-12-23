import _get from "lodash/get"
import _omit from "lodash/omit"

export const cacheStore = JSON.parse(localStorage.getItem('shitsumon_quiz_answer_history'))

export const getAnswerHistory = (quizId) => {
  return _get(cacheStore, `${quizId}.cachedAnswerHistory`, 0)
}

export const getQuizScore = (quizId) => {
  return _get(cacheStore, `${quizId}.cachedQuizScore`, 0)
}

export const clearQuizHistory = (quizId) => {
  const newCacheStore = _omit(cacheStore, quizId)
  localStorage.setItem('shitsumon_quiz_answer_history', JSON.stringify(newCacheStore))
}
