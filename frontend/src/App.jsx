import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import DashboardPage from "./pages/DashboardPage";

import ContractsPage from "./pages/ContractsPage";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<DashboardPage />}
        />

        <Route
          path="/contracts"
          element={<ContractsPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;