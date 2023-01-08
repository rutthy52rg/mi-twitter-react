import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import $ from "jquery";
// import Popper from "popper.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { setAuthorizationHeader } from "./api/client";
import App from "./App";
import "./index.css";
import Root from "./Root";
// import "./store-poc.js";
import configureStore from "./store";
import storage from "./util/localStorage";

const accessToken = storage.get("auth");
setAuthorizationHeader(accessToken);
// console.log($, Popper);
const store = configureStore({ auth: !!accessToken });
console.log(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root store={store}>
      {/* (1)change by use seletor <AuthProvider isInitallyLogged={!!accessToken}> */}
      <App />
      {/* </AuthProvider> */}
    </Root>
  </React.StrictMode>
);
