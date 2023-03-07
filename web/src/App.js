import React from "react";

import { Routes, Route } from "react-router-dom";

import Main from "./pages/main/index.tsx";
import NotFound from "./pages/not-found/index.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
};

export default App;
