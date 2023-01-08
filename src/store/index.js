import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";

// import createStore from "../store-poc";
import * as reducers from "./reducers";

const reducer = combineReducers(reducers);

export default function configureStore(preloadedState) {
  const store = createStore(reducer, preloadedState, composeWithDevTools());
  return store;
}
