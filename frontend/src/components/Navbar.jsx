import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (

    <div
      style={{
        padding: "15px",
        backgroundColor: "black"
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
            color: "white"
          }}
        >
          Login
        </Link>

      )}

      {isLoggedIn && (

        <button
          onClick={handleLogout}
        >
          Logout
        </button>

      )}

    </div>
  );
}

export default Navbar;