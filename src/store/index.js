import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import * as auth from "../components/auth/service";
import * as tweets from "../components/Twitter/service";

// import createStore from "../store-poc";
import * as reducers from "./reducers";
import { HISTORY_BACK } from "./types";

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

const failureRedirections =
  (router, redirections) => (store) => (next) => (action) => {
    const result = next(action);
    if (action.error) {
      const redirection = redirections[action.payload.status];
      if (redirection) {
        router.navigate(redirection);
      }
    }
    return result;
  };
export default function configureStore(preloadedState, { router }) {
  const middlewares = [
    thunk.withExtraArgument({ api: { auth, tweets }, router }),
    failureRedirections(router, {
      401: "/login",
      404: "/404",
    }),
    logger,
  ];
  const store = createStore(
    historyHighOrderReducer(reducer),
    preloadedState,
    //entre la acción y reducers => thunk
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
}
const historyHighOrderReducer = (reducer) => {
  //MEGA REDUCER
  return (state, action) => {
    //punto intermedio por donde pasan los reducers
    //rootstate es el objeto estructura stateDefault
    //history lo que sacamos del estado que llegue higherOrderReducer si existe
    const { history = [], ...rootState } = state;
    if (action.type === HISTORY_BACK) {
      //quitamos la ultima entrada de history en history
      const newHistory = history.slice(0, history.length - 1);
      //copiamos el penultimo state al nuevo state
      return {
        ...newHistory[newHistory.length - 1].state, //estate
        history: newHistory, //history
      };
    }
    const newState = reducer(rootState, action);

    //devuelver nuevo objeto con el nuevo estado y guardamos la accion y el nuevo estado en el
    return {
      ...newState,
      history: [...history, { action, state: newState }],
    };
  };
};
