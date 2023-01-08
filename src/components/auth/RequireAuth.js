import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getIsLogged } from "../../store/selectors";
//* (1)import { useAuth } from "../auth/context";

export const RequireAuth = ({ /*isLogged,*/ children }) => {
  /*(1)*/ const isLogged = useSelector(getIsLogged);
  //con hook
  // (1)change by use seletor const { isLogged } = useAuth();
  const from = useLocation();
  //   console.log(from);
  if (!isLogged) {
    //pasamos por parámetro la propiedad state de navigate con una propiedad que lleva el path de location luego se verá en el state de location desde donde se utilice
    return <Navigate to="/login" state={{ from: from }} />;
  }
  return children;
};
//sin hook
// const RequireAuthConsumer = (props) => {
//   return (
//     <AuthConsumer>
//       {(value) => <RequireAuth {...props} isLogged={value.isLogged} />}
//     </AuthConsumer>
//   );
// };
// export default RequireAuthConsumer;

export default RequireAuth;
