export const changeLang = (newLang) => {
  return {
    type: "locale/changeLang",
    payload: newLang,
  };
};

const localeInitialSatte = {
  lang: "uk",
};

export const localeReduser = (state = localeInitialSatte, action) => {
  switch (action.type) {
    case "locale/changeLang":
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};
