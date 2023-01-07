import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../commons/Button";
import Checkbox from "../commons/CheckBox";
import FormField from "../commons/FormField";
import InputFile from "../commons/InputFile";
import Select from "../commons/Select";
import { useAuth } from "./context";
import { login } from "./service";

const LoginPage = ({ ...props }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [savesession, setSaveSession] = useState(false);
  const [selectedTransport, setSelectedTransport] = useState("");
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const { handleLogin: onLogin } = useAuth();
  //location de loginpage que al pasar por la url de navigate desde requireAuth la propiedad state con el pathname desde donde hemos accedido a login
  const location = useLocation();
  const navigate = useNavigate();

  const handleChangeUsername = (e) => {
    e.preventDefault();
    // console.log("datos", username);
    setUsername(e.target.value);
  };
  const handleChangeUsePassword = (e) => {
    // console.log("datos", password);
    setPassword(e.target.value);
  };
  const handleChangeSaveSession = (e) => {
    setSaveSession(e.target.checked);
  };
  const handleChangeTransport = (e) => {
    setSelectedTransport(e.target.value);
  };
  const resetError = () => {
    setError(null);
    setIsFetching(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      resetError();
      setIsFetching(true);
      await login({ username, password });
      onLogin();
      //si location tiene state y si tiene from se envia a pathname si no se envia a home
      const to = location.state?.from?.pathname || "/";
      //replace se usa para eleminar la ultima url accedida, esto es si vengo de login no vuelvo a login otra vez (ultima url (login) elininada, se iria a la anterior)
      navigate(to, { replace: true });
    } catch (error) {
      setError(error);
    }

    //TODO guardar token en localstorage
  };

  const arrOpt = ["moto", "coche", "camion"];
  const isDisabled = useMemo(() => {
    // console.log("enviando", isFetching);
    return !(username && password && !isFetching);
  }, [username, password, isFetching]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
          <h1>Login Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <FormField
              label="username"
              name="username"
              type="text"
              onChange={handleChangeUsername}
              value={username}
            />
            <FormField
              label="password"
              name="password"
              type="password"
              onChange={handleChangeUsePassword}
              value={password}
            />
            <Checkbox
              tag="Guardar sesión"
              onChange={handleChangeSaveSession}
              value={savesession}
            />
            <InputFile
              label="inserta foto"
              onChange={(e) => console.log(e.target.files)}
            />
            <Select
              value={selectedTransport}
              label="selecciona transporte"
              options={arrOpt}
              onChange={handleChangeTransport}
            />
            <Button type="submit" value="Enviar" disabled={isDisabled}>
              Log in
            </Button>
          </form>
        </div>
      </div>
      {error ? (
        <div className="row mt-5" onClick={resetError}>
          <div className="col">
            <div className="alert alert-danger" role="alert">
              {error.message}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default LoginPage;
