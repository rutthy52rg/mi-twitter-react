import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const AuthConsumer = AuthContext.Consumer;

AuthContext.displayName = "Auth";

/// este es el authProvider que retorna un provider es un componente que hace los values como contexto o global
export const AuthProvider = ({ isInitallyLogged, children, ...props }) => {
  //esta propiedad me la siervviene de index.js
  const [isLogged, setIsLogged] = useState(isInitallyLogged);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  return (
    <AuthContext.Provider
      {...props}
      value={{ isLogged, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);
  // value es lo que le hemos pasado en el provider => isLogged, handlelogin y handelogout
  return value;
};

export default AuthContext;
