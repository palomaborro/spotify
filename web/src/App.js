import React from "react";

import { Routes, Route } from "react-router-dom";

import Main from "./pages/main/index.tsx";
import NotFound from "./pages/not-found/index.tsx";
import SignUp from "./pages/sign-up";
import Login from "./pages/login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
