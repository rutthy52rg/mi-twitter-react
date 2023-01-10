import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { tweetsLoaded } from "../../store/actions";
import { getTweets } from "../../store/selectors";
import Button from "../commons/Button";
import PageContainerOutlet from "../Layout/PageContainerOutlet";
import { getLatestTweets } from "./service";
import Tweet from "./Tweet";
import styles from "./TweetsPage.module.css";

const EmptyList = () => (
  <div>
    <p> No hay ningún tweet. Crea el primero</p>
    <Button as={Link} to="/tweets/new" variant="primary">
      Crear tweet
    </Button>
  </div>
);

export const TweetsPage = ({ onTweetsLoaded, tweets, ...props }) => {
  // const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getLatestTweets()
      .then((tweets) => {
        // setTweets(tweets);
        onTweetsLoaded(tweets);
      })
      .catch((error) => console.log(error));
  }, [onTweetsLoaded]);

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

const mapStateToProps = (state, ownProps) => ({
  // tweets: state.tweets,
  tweets: getTweets(state),
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onTweetsLoaded: (tweets) => dispatch(tweetsLoaded(tweets)),
});

const connectedTweetsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetsPage);
// export default TweetsPage;
export default connectedTweetsPage;
