import React from "react";

import { Routes, Route } from "react-router-dom";

import Main from "./pages/main/default.tsx";
import NotFound from "./pages/not-found/default.tsx";
import SignUp from "./pages/sign-up/default";
import Login from "./pages/login/default";
import Search from "./pages/search/default";
import LikedSongs from "./pages/liked-songs/default";
import Playlist from "./pages/playlist/default";
import Profile from "./pages/profile/default";
import Users from "./pages/users/default";
import PrivateRoute from "./utils/private-route";
import AdminRoute from "./utils/admin-route";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Search />} />
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
      <Route path="/liked-songs" element={<LikedSongs />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
