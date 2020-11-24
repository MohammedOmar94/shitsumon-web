import { useQuery, useQueryCache } from 'react-query'
import { dehydrate } from 'react-query/hydration'

import _defaultTo from "lodash/defaultTo"
import axios from "axios";

export const getDehydratedStateFromLocalStorage = () => {
  return _defaultTo(JSON.parse(localStorage.getItem('shitsumon_japanese_quiz')), [])
}

function saveDehydratedStateToLocalStorage(data, queryCache) {
  const dehydratedState = dehydrate(queryCache)
  localStorage.setItem('shitsumon_japanese_quiz', JSON.stringify(dehydratedState));
}

function fetchQuiz(key, languageStudied, params) {
  return axios.post(`https://kakarot.now.sh/${languageStudied}/load_quiz`, params).then(response => {
    return response.data
  });
}

export function useFetchQuiz(languageStudied, params) {
  /**
   * Have to use hook here, using it within the save function directly
   * violates the hook rules (presumably the nested function rule).
   */
  const queryCache = useQueryCache()
  const queryKey = ["japanese_quiz", languageStudied, params]
  const queryConfig = {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    // 1 second -> 1 minute -> 1 hour
    staleTime: 1000 * 60 * 60,
    cacheTime: Infinity,
    onSuccess: (data) => saveDehydratedStateToLocalStorage(data, queryCache)
  }

  return useQuery(queryKey, fetchQuiz, queryConfig)
}
