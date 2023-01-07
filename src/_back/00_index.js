import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import $ from "jquery";
// import Popper from "popper.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { setAuthorizationHeader } from "./api/client";
import App from "./App";
import "./index.css";
import storage from "./util/localStorage";

const accessToken = storage.get("auth");
setAuthorizationHeader(accessToken);
// console.log($, Popper);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
    {/* Pasamos prop isInitallyLogged is hay token a APP.js */}
    <App isInitallyLogged={!!accessToken} />
    </React.StrictMode>
  </BrowserRouter>
);
