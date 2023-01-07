import classNames from "classnames";
import { forwardRef, useEffect } from "react";

const TextArea = forwardRef(
  ({ className, autofocus, label, color, innerRef, ...props }, ref) => {
    useEffect(() => {
      if (autofocus) {
        ref.current.focus();
      }
      if (color) {
        ref.current.style.color = color;
      }
    }, [autofocus, color, ref]);

    return (
      <div className={classNames("form-floating", className)}>
        <textarea ref={ref} className="form-control" {...props}></textarea>
        <label htmlFor="{label}">{label}</label>
      </div>
    );
  }
);

export default TextArea;
