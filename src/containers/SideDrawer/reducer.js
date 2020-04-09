import * as actions from "./actions";

export default function languageSelectorReducer(state = { languageStudied: "japanese" }, action) {
  const { type, language } = action;

  switch (type) {
    case actions.CHANGED_LANGUAGE:
      return {
        ...state,
        languageStudied: language
      };
    default:
      return state;
  }
}
