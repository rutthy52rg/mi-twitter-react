import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "./00_context";

const RequireAuth = ({ children }) => {
  const { isLogged } = useContext(AuthContext);
  const from = useLocation();
  //   console.log(from);
  if (!isLogged) {
    //pasamos por parámetro la propiedad state de navigate con una propiedad que lleva el path de location luego se verá en el state de location desde donde se utilice
    return <Navigate to="/login" state={{ from: from }} />;
  }
  return children;
};

export default RequireAuth;
