import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { setAuthorizationHeader } from "./api/client";
import App from "./App";
import "./index.css";
import Root from "./Root";
import configureStore from "./store";
import storage from "./util/localStorage";

const accessToken = storage.get("auth");
setAuthorizationHeader(accessToken);
const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
]);
// console.log($, Popper);
const store = configureStore({ auth: !!accessToken }, { router });
console.log(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Root store={store} router={router} />
  // </React.StrictMode>
);
