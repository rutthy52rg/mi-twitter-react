import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import * as auth from "../components/auth/service";
import * as tweets from "../components/Twitter/service";

// import createStore from "../store-poc";
import * as reducers from "./reducers";

const reducer = combineReducers(reducers);

// const thunk = (store) => (next) => (action) => {
//   if (action.type === "function") {
//     return action(store.dispatch, store.getState);
//   }
//   return next(action);
// };

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action, store.getState());
  const result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const middlewares = [
  thunk.withExtraArgument({ api: { auth, tweets } }),
  logger,
];

export default function configureStore(preloadedState) {
  const store = createStore(
    reducer,
    preloadedState,
    //entre la acción y reducers => thunk
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
}
