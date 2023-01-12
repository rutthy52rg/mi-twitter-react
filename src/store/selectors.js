export const getIsLogged = (state) => state.auth;

export const getTweets = (state) => state.tweets.data;

export const areTweetsLoaded = (state) => state.tweets.areLoaded;



 

export const getTweetDetail = (id) => (state) =>
  getTweets(state).find((tweet) => tweet.id.toString());

export const getUi = (state) => state.ui;
