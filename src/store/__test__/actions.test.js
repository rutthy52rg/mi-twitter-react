//sincrono
import { tweetsLoadedSuccess } from "../actions";
import { TWEETS_LOADED_SUCCESS } from "../types";

describe("tweesLoadedSuccess", () => {
  test('should return a "TWEETS_LOADED_SUCCESS" action', () => {
    const tweets = "tweets";
    const expectedAction = {
      type: TWEETS_LOADED_SUCCESS,
      payload: tweets,
    };
    const action = tweetsLoadedSuccess(tweets);
    expect(action).toEqual(expectedAction);
  });
});
