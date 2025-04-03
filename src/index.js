import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./test";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configStore from "./Store/configStore";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configStore();

console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
  localStorage.setItem("reduxState", JSON.stringify(store.getState().numbers));
});
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
