import T, { string } from "prop-types";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../commons/Button";
import TextArea from "../commons/TextArea";
import PageContainerOutlet from "../Layout/PageContainerOutlet";
import { createTweet } from "./service";

const MAX_CHARACTERS = 200;
const NewTweetPage = () => {
  const [content, setContent] = useState("");
  const handleChange = (e) => setContent(e.target.value);
  const buttonEnabled = content.length >= 5;
  const navigate = useNavigate();
  const textareaRef = useRef();
  const renders = useRef(0); //no provoca nuevos renders, no es como useState
  console.log(renders.current++);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tweet = await createTweet({ content });
      navigate(`/tweets/${tweet.id}`);
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <PageContainerOutlet title="Nuevo tweet">
          <TextArea
            label="queestas pensando"
            maxLength={MAX_CHARACTERS}
            value={content}
            onChange={handleChange}
            autofocus
            color="#f500f5"
            ref={textareaRef}
          />
        </PageContainerOutlet>
        <p>
          {content ? `${content.length}/ ${MAX_CHARACTERS}` : MAX_CHARACTERS}
        </p>
        <Button type="submit" value="Enviar" disabled={!buttonEnabled}>
          Enviar
        </Button>
      </form>
    </div>
  );
};
NewTweetPage.propTypes = {
  buttonEnabled: T.func,
};
NewTweetPage.defaultProps = {
  content: string,
};

export default NewTweetPage;
