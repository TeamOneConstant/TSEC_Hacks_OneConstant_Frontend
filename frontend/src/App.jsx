import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import SignupPage from "./pages/SignupPage";

import "./App.css";
import IndexPage from "./pages/IndexPage";
import OnBoardPage from "./pages/OnboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/onboard" element={<OnBoardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;