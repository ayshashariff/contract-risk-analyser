import { useState } from "react";

function LoginPage({ setIsLoggedIn }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    setIsLoggedIn(true);
  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>Login Page</h1>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}

export default LoginPage;