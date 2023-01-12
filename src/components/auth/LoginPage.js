import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogin, uiResetError } from "../../store/actions";
import { getUi } from "../../store/selectors";
import Button from "../commons/Button";
import FormField from "../commons/FormField";

const LoginPage = ({ ...props }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoadding, error } = useSelector(getUi);

  const dispatch = useDispatch();

  const handleChangeUsername = (e) => {
    e.preventDefault();
    // console.log("datos", username);
    setUsername(e.target.value);
  };
  const handleChangeUsePassword = (e) => {
    // console.log("datos", password);
    setPassword(e.target.value);
  };

  const resetErrorHandle = () => {
    dispatch(uiResetError());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(authLogin({ username, password }));
  };

  const isDisabled = useMemo(() => {
    return !(username && password && !isLoadding);
  }, [username, password, isLoadding]);

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

            <Button type="submit" value="Enviar" disabled={isDisabled}>
              Log in
            </Button>
          </form>
        </div>
      </div>
      {error ? (
        <div className="row mt-5" onClick={/*(6)*/ resetErrorHandle}>
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
