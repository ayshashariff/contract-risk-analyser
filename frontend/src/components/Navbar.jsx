import { Link } from "react-router-dom";

function Navbar() {

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
          color: "white"
        }}
      >
        Contracts
      </Link>

    </div>
  );
}

export default Navbar;