import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthConsumer = AuthContext.Consumer;

AuthContext.displayName = "Auth";

export const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
};

export default AuthContext;
