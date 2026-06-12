import { Navigate }
  from "react-router-dom";

import { useAuth0 }
  from "@auth0/auth0-react";

const HomeRedirect = () => {
  const {
    isLoading,
    isAuthenticated,
  } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Navigate
      to={
        isAuthenticated
          ? "/dashboard"
          : "/login"
      }
      replace
    />
  );
};

export default HomeRedirect;