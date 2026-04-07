import React, { useState } from "react";
import Result from "./Result";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem(email);

    if (!storedUser) {
      setStatus("failure");
      return;
    }

    if (storedUser === password) {
    setStatus("success");
    } else {
    setStatus("failure");
}
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      {status === null ? (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />

          <button type="submit">Login</button>
        </form>
      ) : (
        <Result status={status} />
      )}
    </div>
  );
}

export default Login;