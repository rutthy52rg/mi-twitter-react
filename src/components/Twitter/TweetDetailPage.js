import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { tweetLoad } from "../../store/actions";
import { getTweetDetail } from "../../store/selectors";
import PageContainerOutlet from "../Layout/PageContainerOutlet";

const TweetDetailPage = ({ ...props }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tweet = useSelector(getTweetDetail(id));
  useEffect(() => {
    dispatch(tweetLoad(id)).catch((error) => {
      if (error.status === 404) {
        const to = "/404";
        navigate(to);
      }
    });
    // // console.log("error", error);
    // if (error.status === 404) {
    //   const to = "/404";
    //   navigate(to);
    // }
  }, [dispatch, id, navigate]);

  return (
    <PageContainerOutlet title="tweet detail" {...props}>
      <p>{JSON.stringify(tweet)}</p>
    </PageContainerOutlet>
  );
};
export default TweetDetailPage;
