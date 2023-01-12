import {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  TWEETS_LOADED_FAILURE,
  TWEETS_LOADED_REQUEST,
  TWEETS_LOADED_SUCCESS,
  UI_RESET_ERROR,
} from "./types";

export const authLoginRequest = () => ({
  type: AUTH_LOGIN_REQUEST,
});
export const authLoginSuccess = () => ({
  type: AUTH_LOGIN_SUCCESS,
});
export const authLoginFailure = (error) => ({
  type: AUTH_LOGIN_FAILURE,
  payload: error,
  error: true,
});
//gracias al middleware y thunk
export const authLogin = (credentials) => {
  return async function (dispatch, getState, { api }) {
    try {
      dispatch(authLoginRequest());
      // await login(credentials);
      await api.auth.login(credentials);
      dispatch(authLoginSuccess());
    } catch (error) {
      dispatch(authLoginFailure(error));
      throw error;
    }
  };
};
export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const tweetsLoadedRequest = () => ({
  type: TWEETS_LOADED_REQUEST,
});
export const tweetsLoadedSuccess = (tweets) => ({
  type: TWEETS_LOADED_SUCCESS,
  payload: tweets,
});
export const tweetsLoadedFailure = (error) => ({
  type: TWEETS_LOADED_FAILURE,
  payload: error,
  error: true,
});

export const tweetsLoad = () => {
  return async function (dispatch, getState, { api }) {
    try {
      dispatch(tweetsLoadedRequest());
      // await login(credentials);
      const tweets = await api.tweets.getLatestTweets();
      dispatch(tweetsLoadedSuccess(tweets));
    } catch (error) {
      dispatch(tweetsLoadedFailure(error));
      throw error;
    }
  };
};

// export const tweetsLoaded = (tweets) => ({
//   type: TWEETS_LOADED,
//   payload: tweets,
// });

export const uiResetError = () => ({
  type: UI_RESET_ERROR,
});
