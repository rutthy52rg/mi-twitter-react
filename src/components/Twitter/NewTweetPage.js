import T, { string } from "prop-types";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tweetCreated } from "../../store/actions";
import { getUi } from "../../store/selectors";
import Button from "../commons/Button";
import TextArea from "../commons/TextArea";
import PageContainerOutlet from "../Layout/PageContainerOutlet";

const MAX_CHARACTERS = 200;
const NewTweetPage = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const handleChange = (e) => setContent(e.target.value);

  const textareaRef = useRef();
  const renders = useRef(0); //no provoca nuevos renders, no es como useState
  console.log(renders.current++);
  const { isLoadding } = useSelector(getUi);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(tweetCreated({ content }));
  };

  const buttonEnabled = content.length >= 5;
  const enabledBtn = buttonEnabled && !isLoadding;
  console.log(isLoadding, buttonEnabled);
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
        <Button type="submit" value="Enviar" disabled={!enabledBtn}>
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
