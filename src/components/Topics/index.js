import "./styles.scss";

import React, { useEffect } from "react";

import { useQueryCache } from 'react-query'
import { hydrate } from 'react-query/hydration'

import _capitalize from "lodash/capitalize"

import TopicSelect from "./TopicSelect/index";

import Pencil from "../UI/Icons/Pencil";

import IconWithText from "../UI/IconWithText";
import Spinner from "../UI/Spinner";

import { useFetchTopics, getDehydratedStateFromLocalStorage } from "./useFetchTopics"

import { getLanguageStudied } from "../../utils";

function Topics() {
  const queryCache = useQueryCache()

  const languageStudied = getLanguageStudied()


  useEffect(() => {
    // Loads data from local storage into query cache, if there is any data.
    const dehydratedState = getDehydratedStateFromLocalStorage()

    if (dehydratedState) {
      hydrate(queryCache, dehydratedState)
    }
  }, [queryCache])

  // const dispatch = useDispatch();
  const { data: topics, isSuccess } = useFetchTopics(languageStudied)

  return (
    <div>
      <Spinner hasData={isSuccess} />
      <h2 className="topics__header">
        <IconWithText icon={Pencil}>{_capitalize(languageStudied)} Quizzes</IconWithText>
        {/* <button className='topics__createBtn' onClick={() => history.push('/create-quiz')}>
          CREATE
        </button> */}
      </h2>
      {isSuccess && topics.map(topic => {
        return (
          <TopicSelect
            key={topic.key}
            changeQuizLength={topic.key === "random"}
            topic={topic}
          />
        );
      })}
    </div>
  );
}

export default Topics;
