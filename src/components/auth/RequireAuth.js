import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context";

export const RequireAuth = ({ /*isLogged,*/ children }) => {
  //con hook
  const { isLogged } = useAuth();
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
