export const getIsLogged = (state) => state.auth;

export const getTweets = (state) => state.tweets;

// export const getTweetDetail = (state, id) =>
//   getTweets(state).find((tweet) => tweet.id.toString());

// export function getTweetDetail(id) {
//   return function (state) {
//     return getTweets(state).find((tweet) => tweet.id.toString());
//   };
// }

export const getTweetDetail = (id) => (state) =>
  getTweets(state).find((tweet) => tweet.id.toString());

export const getUi = (state) => state.ui;
