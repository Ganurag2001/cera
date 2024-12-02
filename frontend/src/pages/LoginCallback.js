// src/LoginCallback.js
import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const LoginCallback = () => {
  const { oktaAuth } = useOktaAuth();

  React.useEffect(() => {
    oktaAuth.handleRedirect();
  }, [oktaAuth]);

  return <div>Processing login...</div>;
};

export default LoginCallback;
