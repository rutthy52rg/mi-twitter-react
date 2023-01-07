import classNames from "classnames";
const FormField = ({ className, label, ...props }) => {
  return (
    <div className={classNames("mb-3", className)}>
      <label className="form-label">{label}</label>
      <input
        type="email"
        className="form-control"
        autoComplete="off"
        {...props}
      />
    </div>
  );
};
export default FormField;
