import {
  Navigate,
} from "react-router-dom";

import {
  useAuth0,
} from "@auth0/auth0-react";

const LoginPage = () => {
  const {
    loginWithRedirect,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isAuthenticated) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return (
    <button
      onClick={() =>
        loginWithRedirect()
      }
    >
      Login
    </button>
  );
};

export default LoginPage;