import React from "react";

import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main/index.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default App;
