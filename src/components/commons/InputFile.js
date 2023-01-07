import classNames from "classnames";
const InputFile = ({ className, label, ...props }) => {
  return (
    <div className={classNames("mb-3", className)}>
      <label className="form-label">{label} </label>
      <input className="form-control" type="file" {...props} />
    </div>
  );
};
export default InputFile;
