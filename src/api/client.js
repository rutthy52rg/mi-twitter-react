import axios from "axios";
const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});
//llega data de las promesas
client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    //si no hay respuesta error de conexion
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    //si hay respuesta errores dentro de la respuesta
    return Promise.reject({
      message: error.response.statusText,
      ...error.response,
      ...error.response.data,
    });
  }
);

export const setAuthorizationHeader = (accessToken) =>
  (client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`);

export const deleteAuthorizationHeader = () =>
  delete client.defaults.headers.common["Authorization"];

export default client;
