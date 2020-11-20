import { useQuery, useQueryCache } from 'react-query'
import { dehydrate, hydrate } from 'react-query/hydration'

import _defaultTo from "lodash/defaultTo"
import axios from "axios";

export const getDehydratedStateFromLocalStorage = () => {
  return _defaultTo(JSON.parse(localStorage.getItem('shitsumon_topics')), [])
}

function saveDehydratedStateToLocalStorage(data, queryCache) {
  const dehydratedState = dehydrate(queryCache)
  localStorage.setItem('shitsumon_topics', JSON.stringify(dehydratedState));
}

export const loadQueryCache = () => {
  const dehydratedState = getDehydratedStateFromLocalStorage()

  if (dehydratedState) {
    const queryCache = useQueryCache()
    hydrate(queryCache, dehydratedState)
  }
}
function fetchTopics(key, languageStudied) {
  return axios.get(`https://kakarot.now.sh/${languageStudied}/topics`).then(response => {
    return response.data
  });
}

export function useFetchTopics(languageStudied) {
  /**
   * Have to use hook here, using it within the save function directly
   * violates the hook rules (presumably the nested function rule).
   */
  const queryCache = useQueryCache()
  const queryKey = ["topics", languageStudied]
  const queryConfig = {
    // retry: false
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    // 1 second -> 1 minute -> 1 hour
    staleTime: 1000 * 60 * 60,
    cacheTime: Infinity,
    onSuccess: (data) => saveDehydratedStateToLocalStorage(data, queryCache)
  }

  return useQuery(queryKey, fetchTopics, queryConfig)
}
