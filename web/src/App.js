import React from "react";

import { Routes, Route } from "react-router-dom";

import Main from "./pages/main/default.tsx";
import NotFound from "./pages/not-found/default.tsx";
import SignUp from "./pages/sign-up/default";
import Login from "./pages/login/default";
import Favorites from "./pages/favorites/default";
import Profile from "./pages/profile/default";
import Users from "./pages/users/default";
import Artists from "./pages/artists/default";
import Artist from "./pages/artist/default";
import Album from "./pages/album/default";

import PrivateRoute from "./utils/private-route";
import AdminRoute from "./utils/admin-route";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/artists/:page?" element={<Artists />} />
      <Route path="/artist/:id" element={<Artist />} />
      <Route path="/album/:id" element={<Album />} />
      <Route
        path="/profile/*"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/users/*"
        element={<AdminRoute path="*" element={<Users />} />}
      />
      <Route path="/favorites/*" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
