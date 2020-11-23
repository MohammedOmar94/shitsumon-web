import "./styles.scss";

import React from "react";
import { useHistory } from "react-router-dom";
import classnames from "classnames"

import SomaliIcon from "../Icons/Flags/Somalia"
import JapanIcon from "../Icons/Flags/Japan"

import { getLanguageStudied } from "../../../utils"

function LanguageSelector({ onChange }) {
  const history = useHistory()

  const iconClass = (language) => {
    return classnames(
      "languageSelector__icon",
      { "languageSelector__icon--active": language === getLanguageStudied() }
    )}

    const onLanguageChange = (newLanguage) => {
      localStorage.setItem('shitsumon__selected_language', JSON.stringify(newLanguage));
      history.push(`/${newLanguage}/topics`)
      onChange()
    }

  return (
    <div className="languageSelector">
      <div className="languageSelector__header-container">
        <p className="languageSelector__header">Select a language</p>
      </div>
      <div className="languageSelector__icons">
        <SomaliIcon className={iconClass("somali")} onClick={() => onLanguageChange("somali")}/>
        <JapanIcon className={iconClass("japanese")} onClick={() => onLanguageChange("japanese")} />
      </div>
    </div>
  )
}

export default LanguageSelector;
