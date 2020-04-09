export const CHANGED_LANGUAGE = "CHANGED_LANGUAGE";

export function onLanguageChange(language) {
  return { type: CHANGED_LANGUAGE, language: language }
}
