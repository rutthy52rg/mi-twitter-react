import classNames from "classnames";

const Photo = ({ className, alt }) => {
  return (
    <img
      className={classNames("photo", {})}
      src="http://www.wincarteempresas.es/ruthgonzalez/wp-content/uploads/2016/08/Curriculum_Ruth_Gzlez_3.png"
      width="100%"
      alt={alt}
    />
  );
};
export default Photo;
