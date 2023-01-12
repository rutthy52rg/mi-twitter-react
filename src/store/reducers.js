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
  UI_RESET_ERROR,
} from "./types";

const stateDefault = {
  auth: false,
  tweets: [],
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
  switch (action.type) {
    case TWEETS_LOADED_SUCCESS:
      return action.payload;
    default:
      return state;
  }
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
