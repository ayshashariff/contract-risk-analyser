import { Link } from "react-router-dom";

function Navbar({
  isLoggedIn,
  setIsLoggedIn,
  darkMode,
  setDarkMode
}) {

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (

    <div
      style={{
        padding: "15px",
        backgroundColor: darkMode ? "#222" : "black"
      }}
    >

      <Link
        to="/"
        style={{
          color: "white",
          marginRight: "20px"
        }}
      >
        Dashboard
      </Link>

      <Link
        to="/contracts"
        style={{
          color: "white",
          marginRight: "20px"
        }}
      >
        Contracts
      </Link>

      {!isLoggedIn && (

        <Link
          to="/login"
          style={{
            color: "white",
            marginRight: "20px"
          }}
        >
          Login
        </Link>

      )}

      {isLoggedIn && (

        <button onClick={handleLogout}>
          Logout
        </button>

      )}

      {" "}

      <button
        onClick={() => setDarkMode(!darkMode)}
      >

        {darkMode ? "Light Mode" : "Dark Mode"}

      </button>

    </div>
  );
}

export default Navbar;