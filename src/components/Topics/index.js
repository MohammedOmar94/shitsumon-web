import "./styles.scss";

import React, { useEffect } from "react";
import axios from "axios";

import _capitalize from "lodash/capitalize"

import TopicSelect from "./TopicSelect/index";

import Pencil from "../UI/Icons/Pencil";

import IconWithText from "../UI/IconWithText";
import Spinner from "../UI/Spinner";

function Topics({ hasData, languageStudied, onUpdateTopics, topics = [] }) {

  useEffect(() => {
    axios.get(`https://kakarot.now.sh/${languageStudied}/topics`).then(response => {
      onUpdateTopics(response.data);
    });
  }, [hasData, languageStudied]);

  return (
    <div>
      <Spinner hasData={hasData} />
      <h2 className="topics__header">
        <IconWithText icon={Pencil}>{_capitalize(languageStudied)} Quizzes</IconWithText>
        {/* <button className='topics__createBtn' onClick={() => history.push('/create-quiz')}>
          CREATE
        </button> */}
      </h2>
      {topics.map(topic => {
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
