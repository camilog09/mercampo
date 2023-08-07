import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import Layout from "./containers/Layout";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";
import { AuthContextProvider } from "./context/AuthContext";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";

import "./App.css";

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        {/* <AuthContextProvider> */}
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        {/* </AuthContextProvider> */}
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
