import _defaultTo from "lodash/defaultTo"

export const getLanguageStudied = () => _defaultTo(JSON.parse(localStorage.getItem('shitsumon__selected_language')), "japanese")

