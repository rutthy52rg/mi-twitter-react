import classNames from "classnames";
const Checkbox = ({ className, tag, ...props }) => {
  return (
    <div className={classNames("mb-3", className)}>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" {...props} />
        <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
          {tag}
        </label>
      </div>
    </div>
  );
};
export default Checkbox;
