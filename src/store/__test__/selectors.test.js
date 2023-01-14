import { getTweetDetail } from "../selectors";

describe("getTweetDetail", () => {
  test("should return tweet by tweetId ", () => {
    const tweetId = '1';
    const tweets = [
      {
        id: tweetId,
      },
    ];
    const state = {
      tweets: { data: tweets },
    };
    expect(getTweetDetail(tweetId)(state)).toBe(tweets[0]);
  });

  test("should not return any tweet ", () => {
    const tweetId = '1';
    const tweets = [];
    const state = {
      tweets: { data: tweets },
    };
    expect(getTweetDetail(tweetId)(state)).toBe(undefined);
  });
});
