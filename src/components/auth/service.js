import client, {
  deleteAuthorizationHeader,
  setAuthorizationHeader,
} from "../../api/client";
import storage from "../../util/localStorage";

export const login = (credentials) => {
  return client.post("/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    storage.set("auth", accessToken);
  });
};

export const logout = () => {
  deleteAuthorizationHeader();
  storage.remove("auth");
};
