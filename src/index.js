import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/pages/App";
import reportWebVitals from "./reportWebVitals";

//import firebase
//nama firebase disini berdasarkan di folder config firebase
//maka akan muncul di consol setting config firebase kita sepert auth/firestore dan sdk firebase
import firebase from "./config/firebase";

//tes configurasi firebase sudah benar atau tidak
console.log("config firebase ==>", firebase);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
