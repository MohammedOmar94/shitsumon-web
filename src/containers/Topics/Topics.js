import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./Topics.module.scss";

class Topics extends Component {
  state = {
    topics: [
      {
        topic: "Dates 年月日",
        icon: "fas fa-calendar-alt",
        param: "dates",
        choices: [
          { name: "Dates", param: "dates" },
          { name: "Months", param: "months" },
          { name: "Days of the month", param: "days_of_the_month" }
        ]
      },
      { topic: "Times 時間", icon: "fas fa-clock", param: 'times', choices: [] },
      { topic: "Numbers 番号", icon: "fas fa-calculator", param: 'numbers', choices: [] }
    ]
  };

  topicClickeHandler = index => {
    const topicChoices = document.querySelector(`#topic-choices-${index}`).classList;
    const chevronClassList = document.querySelector(`#chevron-${index}`).classList;
    chevronClassList.toggle(classes.RotateChevron);
    topicChoices.toggle(classes.HideTopics);
  };

  render() {
    const topics = this.state.topics.map((topicObj, index) => {
      const topicId = `topic-${index}`;
      const topicChoices = topicObj.choices.map(choice => (
        <Link
          key={choice.param}
          className={`${classes.TopicChoice} disable-select`}
          to={{ pathname: `quiz`, search: `?topic=${choice.param}` }}>{choice.name}</Link>
      ));
      return (
        <Fragment key={topicId}>
          <li id={topicId} className={classes.Topic} onClick={() => this.topicClickeHandler(index)}>
            <p>
              <i className={topicObj.icon} />{topicObj.topic}
            </p>
            <i id={`chevron-${index}`} className={`${classes.ChevronDown} fas fa-chevron-down`}/>
          </li>
          <div id={`topic-choices-${index}`} className={`${classes.HideTopics} ${classes.TopicChoices}`}>
            {topicChoices}
          </div>
        </Fragment>
      );
    });
    return (
      <div className={classes.Topics}>
        <ul className={classes.TopicList}>{topics}</ul>
      </div>
    );
  }
}

export default Topics;
