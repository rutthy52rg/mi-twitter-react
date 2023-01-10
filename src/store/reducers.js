// {
// auth:true/false
//tweets:[]
// ui : {
// isLoadding: false,
// error: error/null
// }
//}

import {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  TWEETS_LOADED,
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
export function ui(state = stateDefault.ui, action) {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return {
        isLoadding: true,
        error: null,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        isLoadding: false,
        error: null,
      };
    case AUTH_LOGIN_FAILURE:
      return {
        isLoadding: false,
        error: action.payload,
      };
    case UI_RESET_ERROR:
      return {
        ...state, // el estate como estaba
        error: null,
      };
    default:
      return state;
  }
}
export function tweets(state = stateDefault.tweets, action) {
  switch (action.type) {
    case TWEETS_LOADED:
      return action.payload;
    default:
      return state;
  }
}
