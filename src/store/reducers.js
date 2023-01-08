// {
//TODO auth:true/false
//TODO tweets:[]
// }

import { AUTH_LOGIN, AUTH_LOGOUT, TWEETS_LOADED } from "./types";

const stateDefault = {
  auth: false,
  tweets: [],
};

export function auth(state = stateDefault.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return true;
    case AUTH_LOGOUT:
      return false;
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

// export default function reducer(state = stateDefault, action) {
//   return {
//     auth: auth(state.auth, action),
//     tweets: tweets(state.tweets, action),
//   };
// }
