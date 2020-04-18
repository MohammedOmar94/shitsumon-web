import React from "react";

import JapaneseQuiz from "./Japanese/japaneseQuiz";
import SomaliQuiz from "./Somali/somaliQuiz";

function Quiz(props) {
  const { location } = props;

  if (location.pathname.includes("japanese")) {
    return <JapaneseQuiz {...props} />
  } else if (location.pathname.includes("somali")) {
    return <SomaliQuiz {...props} />
  }
}

export default Quiz;