import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { balanceReduser } from "./balanceSlice";
import { localeReduser } from "./localeSlice";

const rootReduser = combineReducers({
  balance: balanceReduser,
  locale: localeReduser,
});

export const store = createStore(rootReduser, devToolsEnhancer());
