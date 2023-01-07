import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageContainerOutlet from "../Layout/PageContainerOutlet";
import { getTweet } from "./service";

const TweetDetailPage = ({ ...props }) => {
  const [tweet, setTweet] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  //avisar cuando se desmonta el componente
  // const unmountedRef = useRef(false);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getTweet(id)
        .then((tweet) => {
          // if (unmountedRef.current) {
          //   //no setees el estado si el componente se ha desmontado
          //   return;
          // }
          setTweet(tweet);
        })
        .catch((error) => {
          // console.log("error", error);
          if (error.status === 404) {
            const to = "/404";
            navigate(to);
          }
        });
    }
    return () => {
      isMounted = false;
    };
  }, [id, navigate]);
  // useEffect(() => {
  //   return () => {
  //     unmountedRef.current = true;
  //     //componente desmontado pasamos a true
  //   };
  // }, []);

  return (
    <PageContainerOutlet title="tweet detail" {...props}>
      <p>
        tweet id : {id} {JSON.stringify(tweet)}
      </p>
    </PageContainerOutlet>
  );
};
export default TweetDetailPage;
