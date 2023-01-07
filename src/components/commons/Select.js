import classNames from "classnames";

const Select = ({ className, options, label, ...props }) => {
  return (
    <div className={classNames("mb-3", className)}>
      <label className="form-label">{label} </label>
      <select
        className="form-select"
        aria-label="Default select example"
        {...props}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
