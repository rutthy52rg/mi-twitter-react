import { Fragment } from "react";

const PageContainerOutlet = ({ title, children }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      {/* children serán los layouts de cada sección. ej. TwitterPage*/}
      <section>{children}</section>
    </Fragment>
  );
};
export default PageContainerOutlet;
