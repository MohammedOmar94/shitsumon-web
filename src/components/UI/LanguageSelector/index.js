import "./styles.scss";

import React from "react";

import SomaliIcon from "../Icons/Flags/Somalia"
import JapanIcon from "../Icons/Flags/Japan"

function LanguageSelector({ onChange }) {
  return (
    <div className="languageSelector">
      <div className="languageSelector__header-container">
        <p className="languageSelector__header">Select a language</p>
      </div>
      <div className="languageSelector__icons">
        <SomaliIcon className="languageSelector__icon" onClick={() => onChange("somali")}/>
        <JapanIcon className="languageSelector__icon" onClick={() => onChange("japanese")} />
      </div>
    </div>
  )
}

export default LanguageSelector;
