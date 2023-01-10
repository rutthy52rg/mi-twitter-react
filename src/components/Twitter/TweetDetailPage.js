import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTweetDetail } from "../../store/selectors";
import PageContainerOutlet from "../Layout/PageContainerOutlet";

const TweetDetailPage = ({ ...props }) => {
  // const [tweet, setTweet] = useState(null);

  const { id } = useParams();
  // const navigate = useNavigate();
  //avisar cuando se desmonta el componente
  // const unmountedRef = useRef(false);
  // const tweet = useSelector((state) => getTweetDetail(state, id));
  const tweet = useSelector(getTweetDetail(id));
  // useEffect(() => {
  //   let isMounted = true;
  //   if (isMounted) {
  //     getTweet(id)
  //       .then((tweet) => {
  //         // if (unmountedRef.current) {
  //         //   //no setees el estado si el componente se ha desmontado
  //         //   return;
  //         // }
  //         setTweet(tweet);
  //       })
  //       .catch((error) => {
  //         // console.log("error", error);
  //         if (error.status === 404) {
  //           const to = "/404";
  //           navigate(to);
  //         }
  //       });
  //   }
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [id, navigate]);

  return (
    <PageContainerOutlet title="tweet detail" {...props}>
      <p>{JSON.stringify(tweet)}</p>
    </PageContainerOutlet>
  );
};
export default TweetDetailPage;
