import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import DetailAnime from "./pages/DetailAnime";
import Page from "./pages/Page";
import Navbar from "./component/Navbar";
import Cari from "./pages/Cari";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="api/anime/:slug" element={<DetailAnime />}></Route>
        <Route path="api/page/:id" element={<Page />}></Route>
        <Route path="api/cari/:slug" element={<Cari />}></Route>
      </Routes>
    </>
  );
}
