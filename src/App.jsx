import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";

import Layout from "./containers/Layout";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";

import { Home } from "./pages/Home";

import "./App.css";

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
