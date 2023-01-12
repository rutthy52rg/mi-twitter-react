export const getIsLogged = (state) => state.auth;

export const getTweets = (state) => state.tweets.data;

export const areTweetsLoaded = (state) => state.tweets.areLoaded;

export const getTweetDetail = (id) => (state) =>
  state.tweets.data.find((tweet) => tweet.id.toString() === id);

export const getUi = (state) => state.ui;
