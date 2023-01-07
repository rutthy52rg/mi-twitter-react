import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ ...props }) => {
  //props para isLogged y otros posibles
  return (
    <div>
      <Header {...props} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
