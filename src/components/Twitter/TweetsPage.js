import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../commons/Button";
import PageContainerOutlet from "../Layout/PageContainerOutlet";
import { getLatestTweets } from "./service";
import Tweet from "./Tweet";
import styles from "./TweetsPage.module.css";

console.log(styles);
//plantilla a renderizar
const EmptyList = () => (
  <div>
    <p> No hay ningún tweet. Crea el primero</p>
    <Button as={Link} to="/tweets/new" variant="primary">
      Crear tweet
    </Button>
  </div>
);

export const TweetsPage = ({ ...props }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // const excuteAsync = async () => {
    //   tweets = await getLatestTweets();
    //   setTweets(tweets);
    // };
    // excuteAsync();

    getLatestTweets()
      .then((tweets) => {
        setTweets(tweets);
        // setTweets([]);
      })
      .catch((error) => console.log(error));

    // getLatestTweets().then((tweets) => {
    //   console.log(tweets);
    //interceptus desde api/client, si no sería tweets.data
    //   setTweets(tweets);
    // });
  }, []);

  return (
    <PageContainerOutlet title="Listado tweets" {...props}>
      <div className={!tweets.length ? styles.empty : styles.list}>
        {tweets.length > 0 ? (
          <ul>
            {tweets.map((ele) => (
              <li key={ele.id}>
                <Link to={`/tweets/${ele.id}`}>
                  <Tweet {...ele} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    </PageContainerOutlet>
  );
};
export default TweetsPage;
