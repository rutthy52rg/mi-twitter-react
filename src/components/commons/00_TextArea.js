import classNames from "classnames";
import { useRef } from "react";

const TextArea = ({
  className,
  // autofocus,
  label,
  // color,
  innerRef,
  ...props
}) => {
  const usetexarea = useRef();

  // useEffect(() => {
  //   if (autofocus) {
  //     usetexarea.current.focus();
  //   }
  //   if (color) {
  //     usetexarea.current.style.color = color;
  //   }
  // }, [autofocus, color]);

  return (
    <div className={classNames("form-floating", className)}>
      {/* <textarea ref={usetexarea} className="form-control" {...props}></textarea> */}
      <textarea ref={innerRef} className="form-control" {...props}></textarea>
      <label htmlFor="{label}">{label}</label>
    </div>
  );
};
export default TextArea;
