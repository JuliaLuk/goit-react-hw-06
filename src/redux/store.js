import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

export const deposit = (value) => {
  return {
    type: "balance/deposit",
    payload: value,
  };
};

export const withdraw = (value) => {
  return {
    type: "balance/withdraw",
    payload: value,
  };
};

export const changeLang = (newLang) => {
  return {
    type: "locale/changeLang",
    payload: newLang,
  };
};

const initialSatte = {
  balance: {
    value: 0,
  },
  locale: {
    lang: "uk",
  },
  //   user: {},
  //   contacts: {},
};

const rootReduser = (state = initialSatte, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        balance: {
          value: state.balance.value + action.payload,
        },
      };
    case "balance/withdraw":
      return {
        ...state,
        balance: {
          value: state.balance.value - action.payload,
        },
      };

    case "locale/changeLang":
      return {
        ...state,
        locale: {
          lang: action.payload,
        },
      };

    default:
      return state;
  }
};

export const store = createStore(rootReduser, devToolsEnhancer());
