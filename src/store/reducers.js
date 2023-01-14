// {
// auth:true/false
//tweets:[]
// ui : {
// isLoadding: false,
// error: error/null
// }
//}

import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  TWEETS_LOADED_SUCCESS,
  TWEET_LOADED_SUCCESS,
  UI_RESET_ERROR,
} from "./types";

//rootstate
export const stateDefault = {
  auth: false,
  tweets: {
    areLoaded: false,
    data: [],
  },
  ui: {
    isLoadding: false,
    error: null,
  },
};

export function auth(state = stateDefault.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}

export function tweets(state = stateDefault.tweets, action) {
  if (action.type === TWEETS_LOADED_SUCCESS) {
    return { areLoaded: true, data: action.payload };
  }
  if (action.type === TWEET_LOADED_SUCCESS) {
    return { ...state, data: [action.payload] };
  }
  if (action.type === TWEET_LOADED_SUCCESS) {
    return { ...state, data: [action.payload, ...state.data] }; // añadimos el último a la data que ya hay => ponemos el primero el nuevo para que se guarde antes que los existentes ya
  }
  return state;
}

export function ui(state = stateDefault.ui, action) {
  if (/_FAILURE$/.test(action.type)) {
    return {
      isLoadding: false,
      error: action.payload,
    };
  }
  if (/_REQUEST$/.test(action.type)) {
    return {
      isLoadding: true,
      error: null,
    };
  }
  if (/_SUCCESS$/.test(action.type)) {
    return {
      isLoadding: false,
      error: null,
    };
  }
  if (action.type === UI_RESET_ERROR) {
    return {
      ...state,
      error: null,
    };
  }
  return state;
}
