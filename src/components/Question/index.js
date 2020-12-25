import React from "react"

import JapaneseQuestion from "./Japanese"
import SomaliQuestion from "./Somali"

import { getLanguageStudied } from "../../utils";

export default function Question(props) {
  const language = getLanguageStudied()

  return (
    <>
      {language === "japanese" && <JapaneseQuestion {...props} />}
      {language === "somali" && <SomaliQuestion {...props} />}
    </>
  )
}
