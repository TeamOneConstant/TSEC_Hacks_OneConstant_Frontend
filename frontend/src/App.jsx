import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import SignupPage from "./pages/SignupPage";

import "./App.css";
import IndexPage from "./pages/IndexPage";
import OnBoardPage from "./pages/OnboardPage";
import PostPage from "./pages/PostPage";

axios.defaults.baseURL = "https://tsec-hacks.vercel.app/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<OnBoardPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/onboard" element={<OnBoardPage />} />
          <Route path="/posts" element={<PostPage />} />

          {/* <Route path="/addaccount" element={<AddSocials />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
