import "./styles.scss";

import React, { useEffect } from "react";
import axios from "axios";

import TopicSelect from "./TopicSelect/index";

import Pencil from "../UI/Icons/Pencil";

import IconWithText from "../UI/IconWithText";
import Spinner from "../UI/Spinner";

function Topics({ hasData, onUpdateTopics, topics = [] }) {

  useEffect(() => {
    axios.get("http://localhost:5000/japanese/topics").then(response => {
      onUpdateTopics(response.data);
    });
  }, [hasData]);

  return (
    <div>
      <Spinner hasData={hasData} />
      <h2 className="topics__header">
        <IconWithText icon={Pencil}>Quizzes</IconWithText>
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
