import "./styles.scss";

import React, { useMemo } from "react";
import classnames from "classnames"

import SomaliIcon from "../Icons/Flags/Somalia"
import JapanIcon from "../Icons/Flags/Japan"

function LanguageSelector({ languageStudied, onChange }) {
  const iconClass = (language) => useMemo(() => {
    return classnames(
      "languageSelector__icon",
      { "languageSelector__icon--active": language === languageStudied }
    )}, [languageStudied])

  return (
    <div className="languageSelector">
      <div className="languageSelector__header-container">
        <p className="languageSelector__header">Select a language</p>
      </div>
      <div className="languageSelector__icons">
        <SomaliIcon className={iconClass("somali")} onClick={() => onChange("somali")}/>
        <JapanIcon className={iconClass("japanese")} onClick={() => onChange("japanese")} />
      </div>
    </div>
  )
}

export default LanguageSelector;
