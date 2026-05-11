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

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div
      style={{
        backgroundColor: darkMode ? "#111" : "white",
        color: darkMode ? "white" : "black",
        minHeight: "100vh"
      }}
    >

      <BrowserRouter>

        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
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

    </div>
  );
}

export default App;