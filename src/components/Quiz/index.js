import React from "react";
import _includes from "lodash/includes";

import JapaneseQuiz from "./Japanese/japaneseQuiz";
import SomaliQuiz from "./Somali/somaliQuiz";

function Quiz(props) {
  const { location } = props;

  if (_includes(location.pathname, "japanese")) {
    return <JapaneseQuiz {...props} />
  } else if (_includes(location.pathname, "somali")) {
    return <SomaliQuiz {...props} />
  }
}

export default Quiz;