import client from "../../api/client";
const urlTweets = "/api/tweets";

export const getLatestTweets = () => {
  const url = `${urlTweets}?_expand=user&_embed=like&_sort=updatedAt&_order=desc`;
  return client.get(url);
};

export const getTweet = (id) => {
  const url = `${urlTweets}/${id}`;
  return client.get(url);
};

export const createTweet = (tweet)=> {
   const url = urlTweets;
   return client.post(url, tweet);
}