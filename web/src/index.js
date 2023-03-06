import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.js";

import "./global.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        closeButton={false}
        theme="colored"
        icon={false}
      />
    </BrowserRouter>
  </React.StrictMode>
);
