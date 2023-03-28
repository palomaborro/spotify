import React from "react";

import { Routes, Route } from "react-router-dom";

import Main from "./pages/main/default.tsx";
import NotFound from "./pages/not-found/default.tsx";
import SignUp from "./pages/sign-up/default";
import Login from "./pages/login/default";
import Home from "./pages/home/default";
import Search from "./pages/search/default";
import Library from "./pages/library/default";
import LikedSongs from "./pages/liked-songs/default";
import Playlist from "./pages/playlist/default";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/library" element={<Library />} />
      <Route path="/liked-songs" element={<LikedSongs />} />
      <Route path="/playlist" element={<Playlist />} />
    </Routes>
  );
};

export default App;
