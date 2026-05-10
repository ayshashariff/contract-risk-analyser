import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { useState } from "react";

import Navbar from "./components/Navbar";

import DashboardPage from "./pages/DashboardPage";

import ContractsPage from "./pages/ContractsPage";

import LoginPage from "./pages/LoginPage";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    <BrowserRouter>

      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Routes>

        <Route
          path="/"
          element={<DashboardPage />}
        />

        <Route
          path="/login"
          element={
            <LoginPage
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />

        <Route
          path="/contracts"
          element={
            isLoggedIn
              ? <ContractsPage />
              : <Navigate to="/login" />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;