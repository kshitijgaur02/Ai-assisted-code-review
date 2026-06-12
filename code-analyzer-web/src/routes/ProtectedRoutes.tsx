import {
  Navigate,
  Outlet,
} from "react-router-dom";

import {
  useAuth0,
} from "@auth0/auth0-react";

const ProtectedRoute = () => {
  const {
    isLoading,
    isAuthenticated,
  } = useAuth0();

  if (isLoading) {
    return (
      <p>
        Loading...
      </p>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;