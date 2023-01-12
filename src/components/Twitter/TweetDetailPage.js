import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { tweetLoad } from "../../store/actions";
import { getTweetDetail } from "../../store/selectors";
import PageContainerOutlet from "../Layout/PageContainerOutlet";

const TweetDetailPage = ({ ...props }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const tweet = useSelector(getTweetDetail(id));
  useEffect(() => {
    dispatch(tweetLoad(id));
  }, [dispatch, id]);

  return (
    <PageContainerOutlet title="tweet detail" {...props}>
      <p>{JSON.stringify(tweet)}</p>
    </PageContainerOutlet>
  );
};
export default TweetDetailPage;
