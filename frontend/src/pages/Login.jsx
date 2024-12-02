// src/Login.js
import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const handleLogin = async () => {
    await oktaAuth.signInWithRedirect();
  };

  const handleLogout = async () => {
    await oktaAuth.signOut();
  };

  if (!authState) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {!authState.isAuthenticated ? (
        <button
          onClick={handleLogin}
          className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Login with SSO
        </button>
      ) : (
        <button
          onClick={handleLogout}
          className="px-6 py-3 text-white bg-red-600 rounded hover:bg-red-700"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Login;
