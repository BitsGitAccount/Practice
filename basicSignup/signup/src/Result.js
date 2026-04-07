import React from "react";

function Result({ status }) {
  return (
    <div style={{ padding: "20px" }}>
      {status === "success" ? (
        <h2 style={{ color: "green" }}>Login Successful ✅</h2>
      ) : (
        <h2 style={{ color: "red" }}>Login Failed ❌</h2>
      )}
    </div>
  );
}

export default Result;